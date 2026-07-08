create or replace function public.add_record_shared_note_reply(
  p_target_table text,
  p_target_id text,
  p_parent_note_id uuid,
  p_content text,
  p_author_label text default 'Internal user'
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_target_table text := btrim(coalesce(p_target_table, ''));
  v_target_id text := btrim(coalesce(p_target_id, ''));
  v_content text := btrim(coalesce(p_content, ''));
  v_author_label text := btrim(coalesce(p_author_label, 'Internal user'));
  v_parent public.app_shared_notes;
  v_note public.app_shared_notes;
begin
  if v_target_table not in ('ventures', 'projects') then
    raise exception 'Only venture and project notes can be replied to';
  end if;

  if v_content = '' then
    raise exception 'Reply content is required';
  end if;

  select *
    into v_parent
  from public.app_shared_notes
  where id = p_parent_note_id
    and target_table = v_target_table
    and target_id = v_target_id
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
    v_parent.share_link_id,
    v_parent.target_table,
    v_parent.target_id,
    v_parent.id,
    left('Re: ' || v_parent.subject, 180),
    left(v_content, 5000),
    left(coalesce(nullif(v_author_label, ''), 'Internal user'), 80),
    public.app_hash_share_secret('internal:' || coalesce(nullif(v_author_label, ''), 'Internal user'))
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

create or replace function public.delete_record_shared_note(
  p_target_table text,
  p_target_id text,
  p_note_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_target_table text := btrim(coalesce(p_target_table, ''));
  v_target_id text := btrim(coalesce(p_target_id, ''));
  v_deleted_count integer := 0;
begin
  if v_target_table not in ('ventures', 'projects') then
    raise exception 'Only venture and project notes can be deleted';
  end if;

  with recursive note_tree as (
    select id
    from public.app_shared_notes
    where id = p_note_id
      and target_table = v_target_table
      and target_id = v_target_id
      and deleted_at is null
    union all
    select child.id
    from public.app_shared_notes child
    join note_tree parent on child.parent_note_id = parent.id
    where child.target_table = v_target_table
      and child.target_id = v_target_id
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

revoke all on function public.add_record_shared_note_reply(text, text, uuid, text, text) from public;
revoke all on function public.delete_record_shared_note(text, text, uuid) from public;

grant execute on function public.add_record_shared_note_reply(text, text, uuid, text, text) to anon, authenticated;
grant execute on function public.delete_record_shared_note(text, text, uuid) to anon, authenticated;
