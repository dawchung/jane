create table if not exists public.shared_sessions (
  ward_id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.shared_sessions enable row level security;

drop policy if exists "anon can read shared sessions" on public.shared_sessions;
create policy "anon can read shared sessions"
on public.shared_sessions
for select
to anon
using (true);

drop policy if exists "anon can insert shared sessions" on public.shared_sessions;
create policy "anon can insert shared sessions"
on public.shared_sessions
for insert
to anon
with check (true);

drop policy if exists "anon can update shared sessions" on public.shared_sessions;
create policy "anon can update shared sessions"
on public.shared_sessions
for update
to anon
using (true)
with check (true);

notify pgrst, 'reload schema';