create extension if not exists pgcrypto;

create table if not exists public.ventures (
  id text primary key,
  name text not null,
  type text,
  status text,
  verticals jsonb not null default '[]'::jsonb,
  entity_form text,
  reg_no text,
  primary_contact text,
  tags jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.people (
  id text primary key,
  name text not null,
  type jsonb not null default '[]'::jsonb,
  email text,
  phone text,
  venture text,
  role_title text,
  access_level text,
  status text,
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
  created_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id text primary key,
  title text not null,
  venture text,
  project text,
  parent_task text,
  status text,
  priority text,
  owner text,
  assignees jsonb not null default '[]'::jsonb,
  depends_on jsonb not null default '[]'::jsonb,
  due_date date,
  estimate text,
  time_logged text,
  external_shared_with text,
  created_at timestamptz not null default now()
);

create table if not exists public.documents (
  id text primary key,
  title text not null,
  type text,
  body text,
  file_ref text,
  version integer,
  status text,
  links jsonb not null default '[]'::jsonb,
  permission text,
  tags jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.assets (
  id text primary key,
  name text not null,
  type text,
  project text,
  engine text,
  format text,
  version text,
  status text,
  file_ref text,
  owner text,
  reviewer text,
  due_date date,
  permission text,
  tags jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id text primary key,
  title text not null,
  type text,
  start timestamptz,
  "end" timestamptz,
  participants jsonb not null default '[]'::jsonb,
  links jsonb not null default '[]'::jsonb,
  location text,
  summary text,
  calendar_ref text,
  created_at timestamptz not null default now()
);

create table if not exists public.transactions (
  id text primary key,
  reference text not null,
  direction text,
  amount text,
  currency text,
  status text,
  venture text,
  project_asset text,
  due_date date,
  documents jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);
