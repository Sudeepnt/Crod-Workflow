create extension if not exists pgcrypto;

create table if not exists public.ventures (
  id text primary key,
  name text not null,
  date date,
  type text not null,
  status text,
  verticals jsonb not null default '[]'::jsonb check (jsonb_typeof(verticals) = 'array'),
  entity_form text,
  reg_no text,
  primary_contact text,
  tags jsonb not null default '[]'::jsonb check (jsonb_typeof(tags) = 'array'),
  custom_fields jsonb not null default '{}'::jsonb check (jsonb_typeof(custom_fields) = 'object'),
  created_at timestamptz not null default now()
);

create table if not exists public.people (
  id text primary key,
  name text not null unique,
  email text,
  phone text,
  venture text,
  type text not null,
  role_title text,
  status text,
  access_level text,
  custom_fields jsonb not null default '{}'::jsonb check (jsonb_typeof(custom_fields) = 'object'),
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id text primary key,
  name text not null,
  venture text,
  vertical text,
  type text,
  asset text,
  stage text,
  status text,
  start_date date,
  target_date date,
  lead text,
  client_shareable boolean not null default false,
  custom_fields jsonb not null default '{}'::jsonb check (jsonb_typeof(custom_fields) = 'object'),
  created_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id text primary key,
  title text not null,
  venture text not null,
  project text not null,
  parent_task text,
  status text,
  priority text,
  owner text not null,
  assignees jsonb not null default '[]'::jsonb check (jsonb_typeof(assignees) = 'array'),
  depends_on jsonb not null default '[]'::jsonb check (jsonb_typeof(depends_on) = 'array'),
  due_date date,
  estimate text,
  time_logged text,
  external_shared_with text,
  custom_fields jsonb not null default '{}'::jsonb check (jsonb_typeof(custom_fields) = 'object'),
  created_at timestamptz not null default now()
);

create table if not exists public.documents (
  id text primary key,
  title text not null,
  date date,
  venture text not null,
  project text,
  task text,
  type text,
  body text,
  file_ref text,
  version integer,
  status text,
  links jsonb not null default '[]'::jsonb check (jsonb_typeof(links) = 'array'),
  permission text,
  tags jsonb not null default '[]'::jsonb check (jsonb_typeof(tags) = 'array'),
  custom_fields jsonb not null default '{}'::jsonb check (jsonb_typeof(custom_fields) = 'object'),
  created_at timestamptz not null default now()
);

create table if not exists public.assets (
  id text primary key,
  name text not null,
  date date,
  venture text not null,
  project text,
  task text,
  type text,
  address text,
  lat double precision,
  lng double precision,
  area text,
  unit text,
  owner_ventures jsonb not null default '[]'::jsonb check (jsonb_typeof(owner_ventures) = 'array'),
  status text,
  custom_fields jsonb not null default '{}'::jsonb check (jsonb_typeof(custom_fields) = 'object'),
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id text primary key,
  title text not null,
  type text,
  venture text not null,
  project text,
  task text,
  date date,
  start timestamp,
  "end" timestamp,
  participants jsonb not null default '[]'::jsonb check (jsonb_typeof(participants) = 'array'),
  location text,
  summary text,
  calendar_ref text,
  custom_fields jsonb not null default '{}'::jsonb check (jsonb_typeof(custom_fields) = 'object'),
  created_at timestamptz not null default now()
);

create table if not exists public.transactions (
  id text primary key,
  reference text not null,
  venture text not null,
  project text,
  task text,
  direction text,
  amount text,
  currency text,
  status text,
  counterparty text,
  project_asset text,
  due_date date,
  documents jsonb not null default '[]'::jsonb check (jsonb_typeof(documents) = 'array'),
  custom_fields jsonb not null default '{}'::jsonb check (jsonb_typeof(custom_fields) = 'object'),
  created_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  id text primary key,
  name text not null,
  email text not null,
  password text not null,
  role text not null default 'Employee',
  status text not null default 'Active',
  venture_scope text not null default 'All ventures',
  table_access jsonb not null default '[]'::jsonb check (jsonb_typeof(table_access) = 'array'),
  created_at timestamptz not null default now(),
  created_by text not null default 'System'
);

create table if not exists public.app_form_configs (
  key text primary key,
  config jsonb not null check (jsonb_typeof(config) = 'object'),
  updated_at timestamptz not null default now()
);

do $$
declare
  open_tables text[] := array[
    'ventures',
    'people',
    'projects',
    'tasks',
    'documents',
    'assets',
    'events',
    'transactions',
    'admin_users',
    'app_form_configs'
  ];
  tbl text;
begin
  foreach tbl in array open_tables
  loop
    execute format('alter table public.%I enable row level security', tbl);
    execute format('drop policy if exists %I_select_all on public.%I', tbl, tbl);
    execute format('drop policy if exists %I_insert_all on public.%I', tbl, tbl);
    execute format('drop policy if exists %I_update_all on public.%I', tbl, tbl);
    execute format('drop policy if exists %I_delete_all on public.%I', tbl, tbl);
    execute format('create policy %I_select_all on public.%I for select to anon, authenticated using (true)', tbl, tbl);
    execute format('create policy %I_insert_all on public.%I for insert to anon, authenticated with check (true)', tbl, tbl);
    execute format('create policy %I_update_all on public.%I for update to anon, authenticated using (true) with check (true)', tbl, tbl);
    execute format('create policy %I_delete_all on public.%I for delete to anon, authenticated using (true)', tbl, tbl);
    execute format('grant select, insert, update, delete on public.%I to anon, authenticated', tbl);
    execute format('grant all on public.%I to service_role', tbl);
  end loop;
end $$;

create index if not exists ventures_created_at_idx on public.ventures (created_at desc);
create index if not exists people_created_at_idx on public.people (created_at desc);
create index if not exists projects_created_at_idx on public.projects (created_at desc);
create index if not exists tasks_created_at_idx on public.tasks (created_at desc);
create index if not exists documents_created_at_idx on public.documents (created_at desc);
create index if not exists assets_created_at_idx on public.assets (created_at desc);
create index if not exists events_created_at_idx on public.events (created_at desc);
create index if not exists transactions_created_at_idx on public.transactions (created_at desc);
create index if not exists admin_users_created_at_idx on public.admin_users (created_at desc);

insert into public.app_form_configs (key, config, updated_at)
values ('default', '{"version":1,"tables":[]}'::jsonb, now())
on conflict (key) do nothing;
