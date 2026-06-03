# CHI-2026 Social Touch Survey

This repository hosts the interactive body-map questionnaire for the CHI 2026 Social Touch for HRI study.

## Files

- `index.html` - the deployable survey page. It contains the frontend body-map interaction and writes responses to Supabase.
- `supabase_setup.sql` - SQL setup for the `survey_responses` table and Row Level Security policy.

## Supabase Setup

Open your Supabase project, go to SQL Editor, and run `supabase_setup.sql` once before collecting data.

The current survey page writes to:

```text
https://fbcyuboctnbkjhcwdpli.supabase.co
public.survey_responses
```

The public publishable key is embedded in `index.html`. This is expected for a browser-only survey. Row Level Security allows anonymous participants to insert responses but does not allow anonymous users to read collected data.

## Data Format

Each submitted row contains:

- `selected_intents`: selected social intent objects.
- `body_data`: nested JSON object keyed by intent id and body-region id.
- `regions`: body-region metadata.
- `age_group`: participant age input.
- `country`: cultural background input.
- `gender`: gender input.
- `metadata`: viewport, timezone, and duplicated demographics.

Body-map ratings use a three-value scale:

```text
1  = acceptable / willing to be touched
0  = neutral or unmarked
-1 = unacceptable / unwilling to be touched
```

## Export Data

In Supabase SQL Editor:

```sql
select
  participant_id,
  created_at,
  study_version,
  consent_version,
  language,
  age_group,
  country,
  gender,
  selected_intents,
  body_data,
  regions,
  metadata
from public.survey_responses
order by created_at;
```

Long-format export for analysis:

```sql
select
  r.participant_id,
  r.created_at,
  r.age_group,
  r.country,
  r.gender,
  intent.key as intent_id,
  region.key as region_id,
  (region.value #>> '{}')::int as rating
from public.survey_responses r
cross join lateral jsonb_each(r.body_data) as intent(key, value)
cross join lateral jsonb_each(intent.value) as region(key, value)
order by r.participant_id, intent.key, region.key;
```

To find Codex test submissions:

```sql
select *
from public.survey_responses
where metadata->>'test_submission' = 'true'
   or metadata->>'source' like 'codex%';
```

## GitHub Pages

To publish the survey:

1. Open repository Settings.
2. Go to Pages.
3. Set Source to `Deploy from a branch`.
4. Select `main` and `/root`.
5. Save.

The survey should then be available at:

```text
https://ayerscarpe001.github.io/CHI-2026/
```
