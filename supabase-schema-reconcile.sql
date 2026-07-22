-- Bring the existing assets table in line with the software asset form.
-- Existing property-oriented columns are retained for backward compatibility.
alter table if exists public.assets
  add column if not exists engine text,
  add column if not exists format text,
  add column if not exists version text,
  add column if not exists file_ref text,
  add column if not exists owner text,
  add column if not exists reviewer text,
  add column if not exists due_date date,
  add column if not exists permission text,
  add column if not exists tags jsonb not null default '[]'::jsonb;

alter table if exists public.assets
  add column if not exists custom_fields jsonb not null default '{}'::jsonb;

alter table if exists public.assets enable row level security;

drop policy if exists assets_select_all on public.assets;
drop policy if exists assets_insert_all on public.assets;
drop policy if exists assets_update_all on public.assets;
drop policy if exists assets_delete_all on public.assets;

create policy assets_select_all on public.assets
  for select to anon, authenticated using (true);
create policy assets_insert_all on public.assets
  for insert to anon, authenticated with check (true);
create policy assets_update_all on public.assets
  for update to anon, authenticated using (true) with check (true);
create policy assets_delete_all on public.assets
  for delete to anon, authenticated using (true);

grant select, insert, update, delete on public.assets to anon, authenticated;
grant all on public.assets to service_role;
