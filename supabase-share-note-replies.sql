alter table public.app_shared_notes
  add column if not exists parent_note_id uuid references public.app_shared_notes(id) on delete restrict;

create index if not exists app_shared_notes_parent_idx
  on public.app_shared_notes (parent_note_id, created_at)
  where deleted_at is null;

create or replace function public.get_record_shared_notes(
  p_target_table text,
  p_target_id text
)
returns jsonb
language sql
security definer
set search_path = public, pg_temp
as $$
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'id', n.id,
        'parentNoteId', n.parent_note_id,
        'subject', n.subject,
        'content', n.content,
        'authorRole', n.author_role,
        'createdAt', n.created_at,
        'canDelete', false
      )
      order by n.created_at desc
    ),
    '[]'::jsonb
  )
  from public.app_shared_notes n
  where n.target_table = btrim(coalesce(p_target_table, ''))
    and n.target_id = btrim(coalesce(p_target_id, ''))
    and n.deleted_at is null;
$$;

create or replace function public.get_shared_bundle(
  p_token text,
  p_password text default null,
  p_author_key text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_token text := btrim(coalesce(p_token, ''));
  v_password text := coalesce(p_password, '');
  v_link public.app_share_links;
  v_target jsonb;
  v_target_name text;
  v_target_venture text;
  v_project_names text[] := array[]::text[];
  v_linked jsonb;
  v_notes jsonb;
begin
  select *
    into v_link
  from public.app_share_links
  where token_hash = public.app_hash_share_secret(v_token)
    and revoked_at is null;

  if not found then
    return jsonb_build_object('ok', false, 'error', 'invalid_link');
  end if;

  if v_link.password_hash is not null and btrim(v_password) = '' then
    return jsonb_build_object('ok', false, 'requiresPassword', true, 'error', 'password_required');
  end if;

  if v_link.password_hash is not null and v_link.password_hash <> extensions.crypt(v_password, v_link.password_hash) then
    return jsonb_build_object('ok', false, 'requiresPassword', true, 'error', 'invalid_password');
  end if;

  if v_link.target_table = 'ventures' then
    select to_jsonb(v), v.name
      into v_target, v_target_name
    from public.ventures v
    where v.id = v_link.target_id;

    select coalesce(array_agg(p.name), array[]::text[])
      into v_project_names
    from public.projects p
    where p.venture = v_target_name;

    v_linked := jsonb_build_object(
      'ventures', '[]'::jsonb,
      'projects', coalesce((select jsonb_agg(to_jsonb(p) order by p.created_at desc) from public.projects p where p.venture = v_target_name), '[]'::jsonb),
      'tasks', coalesce((select jsonb_agg(to_jsonb(t) order by t.created_at desc) from public.tasks t where t.venture = v_target_name or t.project = any(v_project_names)), '[]'::jsonb),
      'documents', coalesce((select jsonb_agg(to_jsonb(d) order by d.created_at desc) from public.documents d where d.venture = v_target_name or d.project = any(v_project_names)), '[]'::jsonb),
      'assets', coalesce((select jsonb_agg(to_jsonb(a) order by a.created_at desc) from public.assets a where a.venture = v_target_name or a.project = any(v_project_names)), '[]'::jsonb),
      'events', coalesce((select jsonb_agg(to_jsonb(e) order by e.created_at desc) from public.events e where e.venture = v_target_name or e.project = any(v_project_names)), '[]'::jsonb),
      'transactions', coalesce((select jsonb_agg(to_jsonb(tr) order by tr.created_at desc) from public.transactions tr where tr.venture = v_target_name or tr.project = any(v_project_names)), '[]'::jsonb)
    );
  else
    select to_jsonb(p), p.name, p.venture
      into v_target, v_target_name, v_target_venture
    from public.projects p
    where p.id = v_link.target_id;

    v_linked := jsonb_build_object(
      'ventures', coalesce((select jsonb_agg(to_jsonb(v) order by v.created_at desc) from public.ventures v where v.name = v_target_venture), '[]'::jsonb),
      'projects', '[]'::jsonb,
      'tasks', coalesce((select jsonb_agg(to_jsonb(t) order by t.created_at desc) from public.tasks t where t.project = v_target_name), '[]'::jsonb),
      'documents', coalesce((select jsonb_agg(to_jsonb(d) order by d.created_at desc) from public.documents d where d.project = v_target_name), '[]'::jsonb),
      'assets', coalesce((select jsonb_agg(to_jsonb(a) order by a.created_at desc) from public.assets a where a.project = v_target_name), '[]'::jsonb),
      'events', coalesce((select jsonb_agg(to_jsonb(e) order by e.created_at desc) from public.events e where e.project = v_target_name), '[]'::jsonb),
      'transactions', coalesce((select jsonb_agg(to_jsonb(tr) order by tr.created_at desc) from public.transactions tr where tr.project = v_target_name), '[]'::jsonb)
    );
  end if;

  if v_target is null then
    return jsonb_build_object('ok', false, 'error', 'shared_record_missing');
  end if;

  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'id', n.id,
        'parentNoteId', n.parent_note_id,
        'subject', n.subject,
        'content', n.content,
        'authorRole', n.author_role,
        'createdAt', n.created_at,
        'canDelete', true
      )
      order by n.created_at desc
    ),
    '[]'::jsonb
  )
    into v_notes
  from public.app_shared_notes n
  where n.target_table = v_link.target_table
    and n.target_id = v_link.target_id
    and n.deleted_at is null;

  update public.app_share_links
    set last_used_at = now()
  where id = v_link.id;

  return jsonb_build_object(
    'ok', true,
    'share', jsonb_build_object(
      'targetTable', v_link.target_table,
      'targetLabel', v_link.target_label,
      'hasPassword', v_link.password_hash is not null,
      'createdAt', v_link.created_at
    ),
    'targetTable', v_link.target_table,
    'target', v_target,
    'linked', v_linked,
    'notes', v_notes
  );
end;
$$;

create or replace function public.add_shared_note(
  p_token text,
  p_password text,
  p_author_key text,
  p_subject text,
  p_content text
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_token text := btrim(coalesce(p_token, ''));
  v_password text := coalesce(p_password, '');
  v_author_key text := btrim(coalesce(p_author_key, ''));
  v_subject text := btrim(coalesce(p_subject, ''));
  v_content text := btrim(coalesce(p_content, ''));
  v_link public.app_share_links;
  v_note public.app_shared_notes;
begin
  if length(v_author_key) < 32 then
    raise exception 'Note owner key is required';
  end if;

  if v_subject = '' or v_content = '' then
    raise exception 'Subject and content are required';
  end if;

  select *
    into v_link
  from public.app_share_links
  where token_hash = public.app_hash_share_secret(v_token)
    and revoked_at is null;

  if not found then
    raise exception 'Share link is invalid';
  end if;

  if v_link.password_hash is not null and v_link.password_hash <> extensions.crypt(v_password, v_link.password_hash) then
    raise exception 'Share password is invalid';
  end if;

  insert into public.app_shared_notes (
    share_link_id,
    target_table,
    target_id,
    parent_note_id,
    subject,
    content,
    author_role,
    author_key_hash
  )
  values (
    v_link.id,
    v_link.target_table,
    v_link.target_id,
    null,
    left(v_subject, 180),
    left(v_content, 5000),
    'Shared user',
    public.app_hash_share_secret(v_author_key)
  )
  returning * into v_note;

  return jsonb_build_object(
    'ok', true,
    'note', jsonb_build_object(
      'id', v_note.id,
      'parentNoteId', v_note.parent_note_id,
      'subject', v_note.subject,
      'content', v_note.content,
      'authorRole', v_note.author_role,
      'createdAt', v_note.created_at,
      'canDelete', true
    )
  );
end;
$$;

create or replace function public.add_shared_note_reply(
  p_token text,
  p_password text,
  p_author_key text,
  p_parent_note_id uuid,
  p_content text
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_token text := btrim(coalesce(p_token, ''));
  v_password text := coalesce(p_password, '');
  v_author_key text := btrim(coalesce(p_author_key, ''));
  v_content text := btrim(coalesce(p_content, ''));
  v_link public.app_share_links;
  v_parent public.app_shared_notes;
  v_note public.app_shared_notes;
begin
  if length(v_author_key) < 32 then
    raise exception 'Note owner key is required';
  end if;

  if v_content = '' then
    raise exception 'Reply content is required';
  end if;

  select *
    into v_link
  from public.app_share_links
  where token_hash = public.app_hash_share_secret(v_token)
    and revoked_at is null;

  if not found then
    raise exception 'Share link is invalid';
  end if;

  if v_link.password_hash is not null and v_link.password_hash <> extensions.crypt(v_password, v_link.password_hash) then
    raise exception 'Share password is invalid';
  end if;

  select *
    into v_parent
  from public.app_shared_notes
  where id = p_parent_note_id
    and share_link_id = v_link.id
    and deleted_at is null;

  if not found then
    raise exception 'Parent note was not found';
  end if;

  insert into public.app_shared_notes (
    share_link_id,
    target_table,
    target_id,
    parent_note_id,
    subject,
    content,
    author_role,
    author_key_hash
  )
  values (
    v_link.id,
    v_link.target_table,
    v_link.target_id,
    v_parent.id,
    left('Re: ' || v_parent.subject, 180),
    left(v_content, 5000),
    'Shared user',
    public.app_hash_share_secret(v_author_key)
  )
  returning * into v_note;

  return jsonb_build_object(
    'ok', true,
    'note', jsonb_build_object(
      'id', v_note.id,
      'parentNoteId', v_note.parent_note_id,
      'subject', v_note.subject,
      'content', v_note.content,
      'authorRole', v_note.author_role,
      'createdAt', v_note.created_at,
      'canDelete', true
    )
  );
end;
$$;

create or replace function public.delete_shared_note(
  p_token text,
  p_password text,
  p_author_key text,
  p_note_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_token text := btrim(coalesce(p_token, ''));
  v_password text := coalesce(p_password, '');
  v_link public.app_share_links;
  v_deleted_count integer := 0;
begin
  select *
    into v_link
  from public.app_share_links
  where token_hash = public.app_hash_share_secret(v_token)
    and revoked_at is null;

  if not found then
    raise exception 'Share link is invalid';
  end if;

  if v_link.password_hash is not null and v_link.password_hash <> extensions.crypt(v_password, v_link.password_hash) then
    raise exception 'Share password is invalid';
  end if;

  with recursive note_tree as (
    select id
    from public.app_shared_notes
    where id = p_note_id
      and share_link_id = v_link.id
      and deleted_at is null
    union all
    select child.id
    from public.app_shared_notes child
    join note_tree parent on child.parent_note_id = parent.id
    where child.share_link_id = v_link.id
      and child.deleted_at is null
  )
  update public.app_shared_notes n
    set deleted_at = now()
  from note_tree
  where n.id = note_tree.id;

  get diagnostics v_deleted_count = row_count;

  return jsonb_build_object('ok', true, 'deleted', v_deleted_count > 0);
end;
$$;

revoke all on function public.add_shared_note_reply(text, text, text, uuid, text) from public;
grant execute on function public.add_shared_note_reply(text, text, text, uuid, text) to anon, authenticated;
