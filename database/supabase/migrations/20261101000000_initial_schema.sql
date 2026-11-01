-- Initial multi-agency schema. Every business table is scoped by agency_id and protected by RLS.

create table public.agencies (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  whatsapp_number text,
  created_at timestamptz not null default now()
);

create table public.agency_members (
  agency_id uuid not null references public.agencies(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'admin', 'agent')),
  created_at timestamptz not null default now(),
  primary key (agency_id, user_id)
);

create table public.packages (
  id uuid primary key default gen_random_uuid(),
  agency_id uuid not null references public.agencies(id) on delete cascade,
  slug text not null,
  category text not null check (category in ('international', 'umrah', 'honeymoon', 'visa')),
  title text not null,
  price_from numeric(12, 2),
  currency text not null default 'PKR',
  details jsonb not null default '{}'::jsonb,
  is_published boolean not null default false,
  updated_at timestamptz not null default now(),
  unique (agency_id, slug)
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  agency_id uuid not null references public.agencies(id) on delete cascade,
  name text,
  phone text not null,
  source text not null check (source in ('website', 'whatsapp', 'meta_ad', 'walk_in', 'other')),
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'booked', 'lost')),
  interest text,
  created_at timestamptz not null default now()
);

create table public.conversations (
  id uuid primary key default gen_random_uuid(),
  agency_id uuid not null references public.agencies(id) on delete cascade,
  lead_id uuid references public.leads(id) on delete set null,
  direction text not null check (direction in ('inbound', 'outbound')),
  body text not null,
  sent_at timestamptz not null default now()
);

create table public.lead_events (
  id uuid primary key default gen_random_uuid(),
  agency_id uuid not null references public.agencies(id) on delete cascade,
  lead_id uuid not null references public.leads(id) on delete cascade,
  event_name text not null,
  sent_to_meta_at timestamptz,
  created_at timestamptz not null default now()
);

create index on public.packages (agency_id, category);
create index on public.leads (agency_id, status);
create index on public.conversations (lead_id, sent_at);
create index on public.lead_events (agency_id) where sent_to_meta_at is null;

-- True when the signed-in user belongs to the agency
create function public.is_agency_member(target uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from agency_members where agency_id = target and user_id = auth.uid());
$$;

alter table public.agencies enable row level security;
alter table public.agency_members enable row level security;
alter table public.packages enable row level security;
alter table public.leads enable row level security;
alter table public.conversations enable row level security;
alter table public.lead_events enable row level security;

create policy "members read their agency" on public.agencies
  for select using (public.is_agency_member(id));

create policy "members read their memberships" on public.agency_members
  for select using (user_id = auth.uid());

-- Website visitors see published packages; staff manage their own agency's packages
create policy "public reads published packages" on public.packages
  for select using (is_published);
create policy "members manage packages" on public.packages
  for all using (public.is_agency_member(agency_id)) with check (public.is_agency_member(agency_id));

create policy "members manage leads" on public.leads
  for all using (public.is_agency_member(agency_id)) with check (public.is_agency_member(agency_id));
create policy "members read conversations" on public.conversations
  for select using (public.is_agency_member(agency_id));
create policy "members read lead events" on public.lead_events
  for select using (public.is_agency_member(agency_id));
-- Inserts into conversations and lead_events come from the API and AI agent using the service role.
