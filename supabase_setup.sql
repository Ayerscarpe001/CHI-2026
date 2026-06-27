create extension if not exists pgcrypto;

create table if not exists public.survey_responses (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid not null,
  created_at timestamptz not null default now(),

  study_version text not null,
  consent_version text not null,
  consent_given boolean not null default false,
  language text,

  age_group text,
  country text,
  gender text,

  selected_intents jsonb not null,
  body_data jsonb not null,
  regions jsonb not null,
  metadata jsonb not null default '{}'::jsonb,

  constraint selected_intents_is_array
    check (jsonb_typeof(selected_intents) = 'array'),
  constraint body_data_is_object
    check (jsonb_typeof(body_data) = 'object'),
  constraint regions_is_array
    check (jsonb_typeof(regions) = 'array'),
  constraint response_requires_consent
    check (consent_given = true),
  constraint body_data_reasonable_size
    check (pg_column_size(body_data) < 250000)
);

alter table public.survey_responses enable row level security;

revoke all on public.survey_responses from anon, authenticated;
grant usage on schema public to anon;
grant insert on public.survey_responses to anon;

drop policy if exists "allow anonymous survey submissions"
on public.survey_responses;

create policy "allow anonymous survey submissions"
on public.survey_responses
for insert
to anon
with check (
  consent_given = true
  and jsonb_typeof(selected_intents) = 'array'
  and jsonb_typeof(body_data) = 'object'
  and jsonb_typeof(regions) = 'array'
);

create index if not exists survey_responses_created_at_idx
on public.survey_responses (created_at);

create index if not exists survey_responses_participant_id_idx
on public.survey_responses (participant_id);

-- Optional contact information for participants willing to join follow-up interviews or experiments.
-- This table is intentionally separated from the main anonymous survey response table.
create table if not exists public.followup_contacts (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid not null,
  created_at timestamptz not null default now(),

  study_version text not null,
  language text,
  contact text not null,
  metadata jsonb not null default '{}'::jsonb,

  constraint followup_contact_not_empty
    check (length(trim(contact)) > 0),
  constraint followup_contact_reasonable_size
    check (length(contact) <= 300)
);

alter table public.followup_contacts enable row level security;

revoke all on public.followup_contacts from anon, authenticated;
grant insert on public.followup_contacts to anon;

drop policy if exists "allow anonymous followup contact submissions"
on public.followup_contacts;

create policy "allow anonymous followup contact submissions"
on public.followup_contacts
for insert
to anon
with check (
  length(trim(contact)) > 0
  and length(contact) <= 300
);

create index if not exists followup_contacts_created_at_idx
on public.followup_contacts (created_at);

create index if not exists followup_contacts_participant_id_idx
on public.followup_contacts (participant_id);
