create table if not exists public.app_keepalive_pings (
  id bigint generated always as identity primary key,
  message text not null default 'hi',
  source text not null default 'external-cron',
  created_at timestamptz not null default now(),
  constraint app_keepalive_pings_message_length check (char_length(message) between 1 and 80),
  constraint app_keepalive_pings_source_length check (char_length(source) between 1 and 80)
);

alter table public.app_keepalive_pings enable row level security;

drop policy if exists "keepalive pings are append only" on public.app_keepalive_pings;

create policy "keepalive pings are append only"
on public.app_keepalive_pings
for insert
to anon, authenticated
with check (
  char_length(message) between 1 and 80
  and char_length(source) between 1 and 80
);

grant insert on public.app_keepalive_pings to anon, authenticated;
revoke select, update, delete on public.app_keepalive_pings from anon, authenticated;
grant all on public.app_keepalive_pings to service_role;

create index if not exists app_keepalive_pings_created_at_idx
on public.app_keepalive_pings (created_at desc);

create index if not exists app_keepalive_pings_hi_cleanup_idx
on public.app_keepalive_pings (created_at)
where message = 'hi';

create or replace function public.cleanup_keepalive_pings(
  p_before timestamptz default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_deleted_count integer := 0;
begin
  delete from public.app_keepalive_pings
  where message = 'hi'
    and (p_before is null or created_at < p_before);

  get diagnostics v_deleted_count = row_count;

  return jsonb_build_object(
    'ok', true,
    'deleted', v_deleted_count,
    'before', p_before
  );
end;
$$;

create or replace function public.send_keepalive_ping(
  p_message text default 'hi',
  p_source text default 'external-cron'
)
returns jsonb
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_message text := left(coalesce(nullif(btrim(p_message), ''), 'hi'), 80);
  v_source text := left(coalesce(nullif(btrim(p_source), ''), 'external-cron'), 80);
begin
  insert into public.app_keepalive_pings (message, source)
  select v_message, v_source
  where not exists (
    select 1
    from public.app_keepalive_pings
    where message = v_message
      and created_at >= date_trunc('day', now())
      and created_at < date_trunc('day', now()) + interval '1 day'
  );

  return jsonb_build_object(
    'ok', true,
    'message', v_message,
    'source', v_source,
    'createdAt', now()
  );
end;
$$;

revoke all on function public.send_keepalive_ping(text, text) from public;
grant execute on function public.send_keepalive_ping(text, text) to anon, authenticated, service_role;

revoke all on function public.cleanup_keepalive_pings(timestamptz) from public;
grant execute on function public.cleanup_keepalive_pings(timestamptz) to service_role;

create extension if not exists pg_cron;

do $$
begin
  if exists (select 1 from cron.job where jobname = 'crod-daily-keepalive-hi') then
    perform cron.unschedule('crod-daily-keepalive-hi');
  end if;

  if exists (select 1 from cron.job where jobname = 'crod-weekly-keepalive-cleanup') then
    perform cron.unschedule('crod-weekly-keepalive-cleanup');
  end if;
end;
$$;

select cron.schedule(
  'crod-daily-keepalive-hi',
  '0 0 * * *',
  $$select public.send_keepalive_ping('hi', 'supabase-cron')$$
);

select cron.schedule(
  'crod-weekly-keepalive-cleanup',
  '55 23 * * 6',
  $$select public.cleanup_keepalive_pings()$$
);
