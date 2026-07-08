create table if not exists public.app_audit_logs (
  id text primary key,
  action text not null,
  target_table text not null,
  target_id text,
  target_label text,
  actor_user_id text,
  actor_name text not null default 'System',
  actor_role text,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.app_audit_logs enable row level security;

drop policy if exists "audit logs are readable" on public.app_audit_logs;
drop policy if exists "audit logs are append only" on public.app_audit_logs;

create policy "audit logs are readable"
on public.app_audit_logs
for select
to anon, authenticated
using (true);

create policy "audit logs are append only"
on public.app_audit_logs
for insert
to anon, authenticated
with check (true);

grant select, insert on public.app_audit_logs to anon, authenticated;
revoke update, delete on public.app_audit_logs from anon, authenticated;
grant all on public.app_audit_logs to service_role;

create index if not exists app_audit_logs_created_at_idx
on public.app_audit_logs (created_at desc);

create index if not exists app_audit_logs_target_idx
on public.app_audit_logs (target_table, target_id);

create or replace function public.prevent_app_audit_logs_mutation()
returns trigger
language plpgsql
as $$
begin
  raise exception 'app_audit_logs is append-only';
end;
$$;

drop trigger if exists prevent_app_audit_logs_update_delete on public.app_audit_logs;

create trigger prevent_app_audit_logs_update_delete
before update or delete on public.app_audit_logs
for each row
execute function public.prevent_app_audit_logs_mutation();
