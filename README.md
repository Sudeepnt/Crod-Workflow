# Workflow Tool MVP

Monochrome internal workflow shell prepared for client-specific branding and data.

## What is included

- 8-table spine: ventures, people, projects, tasks, documents, assets, events, transactions
- Relationship search across the mock graph
- Founder / Partner / Employee dashboard views
- Project workspace and task workspace
- White / black UI only
- Supabase-backed frontend with client-specific config in `config.js`

## Run locally

Open `index.html` in a browser or serve the folder with any static server.

Set `supabaseUrl` and `supabasePublishableKey` in `config.js` before logging in.

## Current state

The previous Supabase project credentials were removed from source. The app now stays disconnected until new Supabase credentials are added to `config.js`.
