const tables = [
  {
    key: "ventures",
    title: "Ventures",
    singular: "Venture",
    summary: "Studios, publishers, clients, and partners",
    listColumns: ["name", "type", "status", "verticals", "created_at"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "date", label: "Start date", type: "date" },
      { name: "type", label: "Type", type: "select", options: ["Internal Studio", "Client", "Publisher", "Partner Studio", "Vendor", "Contractor Studio", "Investor", "Prospect"], required: true },
      { name: "status", label: "Status", type: "select", options: ["Prospect", "Onboarding", "Active", "Paused", "Archived"] },
      { name: "verticals", label: "Game focus", type: "text", placeholder: "Mobile, PC, Console, Web3" },
      { name: "entity_form", label: "Legal entity", type: "select", options: ["Private Limited", "LLP", "Partnership", "Sole Proprietorship", "Other"] },
      { name: "reg_no", label: "Registration / tax ID", type: "text", placeholder: "CIN / GST / Tax ID" },
      { name: "primary_contact", label: "Primary contact", type: "text" },
      { name: "tags", label: "Tags", type: "text", placeholder: "Genres, platforms, IPs" },
    ],
  },
  {
    key: "people",
    title: "People",
    singular: "Person",
    summary: "Contacts, roles, and access",
    listColumns: ["name", "type", "venture", "access_level", "status"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "venture", label: "Venture", type: "text" },
      { name: "type", label: "Type", type: "select", options: ["Founder", "Producer", "Employee", "Client", "Publisher", "Partner", "Investor", "Contractor", "Vendor", "Consultant", "Freelancer"], required: true },
      { name: "role_title", label: "Role title", type: "text", placeholder: "Game Designer, Animator, Producer, Art Director, Unity Developer" },
      { name: "status", label: "Status", type: "select", options: ["Active", "Inactive"], value: "Active" },
      { name: "access_level", label: "Access level", type: "select", options: ["Founder", "Partner", "Employee", "Client", "Contractor"] },
    ],
  },
  {
    key: "projects",
    title: "Projects",
    singular: "Project",
    summary: "Execution layers across ventures",
    listColumns: ["name", "venture", "type", "status", "lead", "created_at", "target_date"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "venture", label: "Venture", type: "text" },
      { name: "vertical", label: "Vertical", type: "text" },
      { name: "type", label: "Type", type: "select", options: ["Game Development", "Animation", "Art Production", "Co-Development", "Prototype", "LiveOps", "Internal IP", "Client Production", "Strategy"] },
      { name: "asset", label: "Asset", type: "text" },
      { name: "stage", label: "Stage", type: "select", options: ["Discovery", "Brief", "Pre-Production", "Production", "Review", "Delivery", "Support", "Close"] },
      { name: "status", label: "Status", type: "select", options: ["Prospect", "Active", "On-Hold", "Blocked", "Completed", "Cancelled"] },
      { name: "start_date", label: "Start date", type: "date" },
      { name: "target_date", label: "Target date", type: "date" },
      { name: "lead", label: "Lead", type: "text" },
      { name: "client_shareable", label: "Client shareable", type: "checkbox" },
    ],
  },
  {
    key: "tasks",
    title: "Tasks",
    singular: "Task",
    summary: "Daily work, owners, deadlines",
    listColumns: ["title", "status", "owner", "priority", "due_date"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "venture", label: "Venture", type: "text", required: true },
      { name: "project", label: "Project", type: "text", required: true },
      { name: "parent_task", label: "Parent task", type: "text" },
      { name: "status", label: "Status", type: "select", options: ["Backlog", "To-Do", "In-Progress", "In-Review", "Blocked", "Done"] },
      { name: "priority", label: "Priority", type: "select", options: ["Low", "Medium", "High", "Critical"] },
      { name: "owner", label: "Owner", type: "text", required: true },
      { name: "assignees", label: "Assignees", type: "text" },
      { name: "depends_on", label: "Depends on", type: "text" },
      { name: "due_date", label: "Due date", type: "date" },
      { name: "estimate", label: "Estimated time", type: "text" },
      { name: "time_logged", label: "Time logged (time spent)", type: "text" },
      { name: "external_shared_with", label: "External shared with", type: "text" },
    ],
  },
  {
    key: "documents",
    title: "Documents/Notes",
    singular: "Document/Note",
    summary: "Notes, files, and agreements",
    listColumns: ["title", "venture_project", "body", "type", "status", "created_at"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project", label: "Project", type: "select" },
      { name: "task", label: "Task", type: "select" },
      { name: "related_assets", label: "Assets", type: "select" },
      { name: "related_events", label: "Events", type: "select" },
      { name: "related_transactions", label: "Transactions", type: "select" },
      { name: "type", label: "Type", type: "select", options: ["Brief", "GDD", "Art Bible", "Script", "Storyboard", "Feedback", "Proposal", "Agreement", "Build Notes", "Research", "Report", "Comms", "Pitch Deck"] },
      { name: "body", label: "Body", type: "textarea" },
      { name: "file_ref", label: "File ref", type: "text" },
      { name: "version", label: "Version", type: "number" },
      { name: "status", label: "Status", type: "select", options: ["Draft", "Final", "Signed", "Superseded"] },
      { name: "permission", label: "Permission", type: "select", options: ["Internal", "Restricted", "Client-visible", "Contractor-visible"] },
      { name: "tags", label: "Tags", type: "text", placeholder: "Comma separated" },
    ],
  },
  {
    key: "assets",
    title: "Game's Assets",
    singular: "Asset",
    summary: "Builds, characters, environments, rigs, audio, tools, and source files",
    listColumns: ["name", "type", "status", "project", "created_at"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true, placeholder: "Main Character Rig, Forest Level, Combat Prototype Build" },
      { name: "project", label: "Project", type: "select", required: true },
      { name: "type", label: "Type", type: "select", options: ["Game IP", "Character", "Environment", "Prop", "Animation", "Rig", "Build", "Level", "UI Kit", "Audio", "VFX", "Source File", "Art Pack", "Tool"], required: true },
      { name: "engine", label: "Engine", type: "select", options: ["Unity", "Unreal", "Roblox", "Blender", "Maya", "Godot", "Other"] },
      { name: "format", label: "Format", type: "select", options: ["FBX", "Blend", "Maya", "PNG", "PSD", "MP4", "WAV", "UnityPackage", "UnrealAsset", "GitRepo", "Figma", "Other"] },
      { name: "version", label: "Version", type: "text", placeholder: "v1, v2, v3, etc." },
      { name: "status", label: "Status", type: "select", options: ["Concept", "In-Production", "In-Review", "Approved", "Delivered", "Archived"] },
      { name: "file_ref", label: "File ref / link", type: "text", placeholder: "File, folder, repo, build, or design link" },
      { name: "owner", label: "Owner", type: "select" },
      { name: "reviewer", label: "Reviewer", type: "select" },
      { name: "due_date", label: "Due date", type: "date" },
      { name: "permission", label: "Permission", type: "select", options: ["Internal", "Restricted", "Client-visible", "Contractor-visible"] },
      { name: "tags", label: "Tags", type: "text", placeholder: "character, prototype, enemy, UI, cinematic, trailer, build" },
    ],
  },
  {
    key: "events",
    title: "Events",
    singular: "Event",
    summary: "Meetings, visits, and calls",
    listColumns: ["title", "type", "start", "duration", "created_at"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project", label: "Project", type: "select" },
      { name: "task", label: "Task", type: "select" },
      { name: "type", label: "Type", type: "select", options: ["Meeting", "Call", "Review", "Playtest", "Milestone", "Other"] },
      { name: "start", label: "Start", type: "datetime-local" },
      { name: "end", label: "End", type: "datetime-local" },
      { name: "participants", label: "Participants", type: "text", placeholder: "Comma separated people" },
      { name: "location", label: "Location", type: "select", options: ["Google Meet", "Zoom", "Discord", "Office", "Publisher Call"] },
      { name: "summary", label: "Summary", type: "textarea" },
      { name: "calendar_ref", label: "Calendar ref", type: "text" },
    ],
  },
  {
    key: "transactions",
    title: "Transactions",
    singular: "Transaction",
    summary: "Receivables, payables, invoices",
    listColumns: ["reference", "direction", "status", "amount", "created_at", "due_date"],
    fields: [
      { name: "reference", label: "Reference", type: "text", required: true },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project", label: "Project", type: "select" },
      { name: "task", label: "Task", type: "select" },
      { name: "direction", label: "Direction", type: "select", options: ["Receivable", "Payable"] },
      { name: "amount", label: "Amount", type: "text", inputmode: "numeric", data_format: "transaction-amount" },
      { name: "currency", label: "Currency", type: "select", value: "INR", options: ["INR", "USD", "EUR", "GBP", "AED", "SAR", "SGD"] },
      { name: "status", label: "Status", type: "select", options: ["Draft", "Raised", "Partly-Paid", "Paid", "Overdue", "Written-Off"] },
      { name: "counterparty", label: "Counterparty", type: "text" },
      { name: "project_asset", label: "Project / asset", type: "text" },
      { name: "due_date", label: "Due date", type: "date" },
      { name: "documents", label: "Documents", type: "text", placeholder: "Linked docs" },
    ],
  },
];

function readAppConfigValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

const appConfig = globalThis.WORKFLOW_CONFIG ?? {};
const SUPABASE_URL = readAppConfigValue(appConfig.supabaseUrl);
const SUPABASE_PUBLISHABLE_KEY = readAppConfigValue(appConfig.supabasePublishableKey);
const SUPABASE_UNCONFIGURED_MESSAGE = "Supabase is not configured yet. Add the current Gattabara Games client credentials in config.js.";
const APP_TIMEZONE = "Asia/Kolkata";
const FORM_CONFIG_TABLE = "app_form_configs";
const FORM_CONFIG_KEY = "default";
const FORM_CONFIG_VERSION = 1;
const ADMIN_USERS_TABLE = "admin_users";
const AUDIT_LOGS_TABLE = "app_audit_logs";
const KEEPALIVE_TABLE = "app_keepalive_pings";
const KEEPALIVE_INTERVAL_MS = 2 * 24 * 60 * 60 * 1000;
const SHARE_ROUTE_PARAM = "share";
const REMOTE_TABLE_KEYS = new Set(tables.map((table) => table.key));
const APP_SESSION_KEY = "gattabara.appAuthenticated";
const supabaseClientFactory = globalThis.supabase?.createClient ?? null;
const supabaseClient = SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY && supabaseClientFactory
  ? supabaseClientFactory(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

const data = {
  ventures: [
    {
      id: "ven_1",
      name: "Gattabara Games",
      type: "Internal Studio",
      status: "Active",
      verticals: ["PC", "Console", "Action Adventure"],
      date: "2026-06-28",
      entity_form: "Private Limited",
    },
    {
      id: "ven_2",
      name: "Moonforge Labs",
      type: "Partner Studio",
      status: "Active",
      verticals: ["Co-Development", "Multiplayer"],
      date: "2026-06-28",
      entity_form: "LLP",
    },
    {
      id: "ven_3",
      name: "PixelPeak Publishing",
      type: "Publisher",
      status: "Onboarding",
      verticals: ["Publishing", "Marketing", "Distribution"],
      date: "2026-06-28",
      entity_form: "Private Limited",
    },
  ],
  people: [
    {
      id: "ppl_1",
      name: "Sudeep N",
      type: "Founder",
      email: "sudeep@gattabara.games",
      phone: "9000000001",
      venture: "Gattabara Games",
      role_title: "Founder / Creative Director",
      access_level: "Founder",
      status: "Active",
    },
    {
      id: "ppl_2",
      name: "Utsav",
      type: "Producer",
      email: "utsav@gattabara.games",
      phone: "9000000002",
      venture: "Gattabara Games",
      role_title: "Producer",
      access_level: "Partner",
      status: "Active",
    },
    {
      id: "ppl_3",
      name: "Aditya",
      type: "Partner",
      email: "aditya@gattabara.games",
      phone: "9000000003",
      venture: "Gattabara Games",
      role_title: "Technical Director",
      access_level: "Partner",
      status: "Active",
    },
    {
      id: "ppl_4",
      name: "Mira Sol",
      type: "Employee",
      email: "mira@gattabara.games",
      phone: "9000000004",
      venture: "Gattabara Games",
      role_title: "Lead Character Artist",
      access_level: "Employee",
      status: "Active",
    },
    {
      id: "ppl_5",
      name: "Dev Menon",
      type: "Employee",
      email: "dev@gattabara.games",
      phone: "9000000005",
      venture: "Gattabara Games",
      role_title: "Gameplay Programmer",
      access_level: "Employee",
      status: "Active",
    },
    {
      id: "ppl_6",
      name: "Rhea Stone",
      type: "Partner",
      email: "rhea@moonforge.dev",
      phone: "9000000006",
      venture: "Moonforge Labs",
      role_title: "Co-Dev Lead",
      access_level: "Partner",
      status: "Active",
    },
    {
      id: "ppl_7",
      name: "Jin Park",
      type: "Contractor",
      email: "jin@moonforge.dev",
      phone: "9000000007",
      venture: "Moonforge Labs",
      role_title: "Multiplayer Engineer",
      access_level: "Contractor",
      status: "Active",
    },
    {
      id: "ppl_8",
      name: "Leah Frost",
      type: "Publisher",
      email: "leah@pixelpeak.com",
      phone: "9000000008",
      venture: "PixelPeak Publishing",
      role_title: "Publishing Producer",
      access_level: "Client",
      status: "Active",
    },
    {
      id: "ppl_9",
      name: "Omar Vale",
      type: "Consultant",
      email: "omar@pixelpeak.com",
      phone: "9000000009",
      venture: "PixelPeak Publishing",
      role_title: "Go-To-Market Consultant",
      access_level: "Client",
      status: "Active",
    },
  ],
  projects: [
    {
      id: "prj_1",
      name: "Project Emberfall",
      venture: "Gattabara Games",
      vertical: "Action Adventure",
      type: "Game Development",
      stage: "Production",
      status: "Active",
      start_date: "2026-06-28",
      target_date: "2026-07-12",
      lead: "Sudeep N",
      client_shareable: true,
    },
    {
      id: "prj_2",
      name: "Neon Brawl Launch Assets",
      venture: "Gattabara Games",
      vertical: "Marketing",
      type: "Art Production",
      stage: "Review",
      status: "Active",
      start_date: "2026-06-28",
      target_date: "2026-07-20",
      lead: "Utsav",
      client_shareable: false,
    },
    {
      id: "prj_3",
      name: "Cloud Sprint Prototype",
      venture: "Moonforge Labs",
      vertical: "Multiplayer",
      type: "Prototype",
      stage: "Pre-Production",
      status: "Blocked",
      start_date: "2026-06-28",
      target_date: "2026-07-31",
      lead: "Rhea Stone",
      client_shareable: false,
    },
  ],
  tasks: [
    {
      id: "tsk_1",
      title: "Lock vertical slice combat loop",
      venture: "Gattabara Games",
      project: "Project Emberfall",
      status: "To-Do",
      priority: "High",
      owner: "Aditya",
      assignees: ["Sudeep N", "Dev Menon"],
      due_date: "2026-07-02",
      estimate: "2h",
      time_logged: "0h",
    },
    {
      id: "tsk_2",
      title: "Polish forest biome lighting",
      venture: "Gattabara Games",
      project: "Project Emberfall",
      status: "In-Progress",
      priority: "Medium",
      owner: "Mira Sol",
      due_date: "2026-07-04",
      estimate: "4h",
      time_logged: "1h",
    },
    {
      id: "tsk_3",
      title: "Review trailer storyboard",
      venture: "Gattabara Games",
      project: "Neon Brawl Launch Assets",
      status: "Blocked",
      priority: "High",
      owner: "Utsav",
      due_date: "2026-07-08",
      estimate: "3h",
      time_logged: "0h",
    },
    {
      id: "tsk_4",
      title: "Prototype lobby sync",
      venture: "Moonforge Labs",
      project: "Cloud Sprint Prototype",
      status: "Backlog",
      priority: "Low",
      owner: "Jin Park",
      due_date: "2026-07-15",
      estimate: "1h",
      time_logged: "0h",
    },
    {
      id: "tsk_5",
      title: "Tune dodge cancel window",
      venture: "Gattabara Games",
      project: "Project Emberfall",
      parent_task: "Lock vertical slice combat loop",
      status: "To-Do",
      priority: "Medium",
      owner: "Dev Menon",
      due_date: "2026-07-01",
      estimate: "1h",
      time_logged: "0h",
    },
    {
      id: "tsk_6",
      title: "Finalize enemy hit reactions",
      venture: "Gattabara Games",
      project: "Project Emberfall",
      parent_task: "Lock vertical slice combat loop",
      status: "Backlog",
      priority: "Low",
      owner: "Mira Sol",
      due_date: "2026-07-02",
      estimate: "1h",
      time_logged: "0h",
    },
    {
      id: "tsk_7",
      title: "Balance moonlit fog pass",
      venture: "Gattabara Games",
      project: "Project Emberfall",
      parent_task: "Polish forest biome lighting",
      status: "In-Progress",
      priority: "Medium",
      owner: "Mira Sol",
      due_date: "2026-07-03",
      estimate: "2h",
      time_logged: "1h",
    },
    {
      id: "tsk_8",
      title: "Export LUT variations",
      venture: "Gattabara Games",
      project: "Project Emberfall",
      parent_task: "Polish forest biome lighting",
      status: "To-Do",
      priority: "Low",
      owner: "Mira Sol",
      due_date: "2026-07-04",
      estimate: "1h",
      time_logged: "0h",
    },
    {
      id: "tsk_9",
      title: "Collect publisher feedback",
      venture: "Gattabara Games",
      project: "Neon Brawl Launch Assets",
      parent_task: "Review trailer storyboard",
      status: "Blocked",
      priority: "High",
      owner: "Utsav",
      due_date: "2026-07-06",
      estimate: "2h",
      time_logged: "0h",
    },
    {
      id: "tsk_10",
      title: "Revise trailer shot order",
      venture: "Gattabara Games",
      project: "Neon Brawl Launch Assets",
      parent_task: "Review trailer storyboard",
      status: "To-Do",
      priority: "Medium",
      owner: "Utsav",
      due_date: "2026-07-07",
      estimate: "1h",
      time_logged: "0h",
    },
  ],
  documents: [
    {
      id: "doc_1",
      title: "Gattabara studio roadmap",
      date: "2026-06-28",
      venture: "Gattabara Games",
      type: "Brief",
      body: "Q3 roadmap covering prototype completion, publisher outreach, and vertical slice goals.",
      version: 1,
      status: "Draft",
      links: ["Gattabara Games"],
      permission: "Internal",
      tags: ["seed"],
    },
    {
      id: "doc_2",
      title: "Emberfall milestone agreement",
      date: "2026-06-28",
      venture: "Gattabara Games",
      project: "Project Emberfall",
      type: "Agreement",
      body: "Milestone alignment for Emberfall vertical slice delivery.",
      version: 1,
      status: "Final",
      links: ["Project Emberfall"],
      permission: "Restricted",
      tags: ["seed"],
    },
    {
      id: "doc_3",
      title: "Trailer review notes",
      date: "2026-06-28",
      venture: "Gattabara Games",
      project: "Neon Brawl Launch Assets",
      task: "Review trailer storyboard",
      type: "Report",
      body: "Notes from the first publisher review round for launch trailer story beats.",
      version: 1,
      status: "Signed",
      links: ["Review trailer storyboard"],
      permission: "Client-visible",
      tags: ["seed"],
    },
  ],
  events: [
    {
      id: "evt_1",
      title: "Weekly studio sync",
      date: "2026-06-28",
      venture: "Gattabara Games",
      type: "Meeting",
      start: "2026-06-28T09:00",
      end: "2026-06-28T09:30",
      participants: ["Sudeep N", "Utsav", "Aditya"],
      location: "Discord",
      summary: "Studio-level planning for milestone priorities and staffing.",
      calendar_ref: "cal-v1",
    },
    {
      id: "evt_2",
      title: "Publisher feedback call",
      date: "2026-06-28",
      venture: "Gattabara Games",
      project: "Project Emberfall",
      type: "Call",
      start: "2026-06-28T10:00",
      end: "2026-06-28T10:30",
      participants: ["Utsav", "Leah Frost"],
      location: "Google Meet",
      summary: "Publisher call to review milestone footage and market positioning.",
      calendar_ref: "cal-p1",
    },
    {
      id: "evt_3",
      title: "Trailer storyboard review",
      date: "2026-06-28",
      venture: "Gattabara Games",
      project: "Neon Brawl Launch Assets",
      task: "Review trailer storyboard",
      type: "Review",
      start: "2026-06-28T11:00",
      end: "2026-06-28T11:30",
      participants: ["Utsav", "Mira Sol", "Omar Vale"],
      location: "Office",
      summary: "Review cut pacing, key art beats, and CTA sequence.",
      calendar_ref: "cal-t1",
    },
  ],
  assets: [
    {
      id: "ast_1",
      name: "Emberfall Hero Rig",
      venture: "Gattabara Games",
      project: "Project Emberfall",
      type: "Rig",
      engine: "Maya",
      format: "FBX",
      version: "v3",
      status: "Approved",
      file_ref: "drive://characters/emberfall/hero-rig-v3.fbx",
      owner: "Mira Sol",
      reviewer: "Aditya",
      due_date: "2026-07-05",
      permission: "Internal",
      tags: "character, rig, hero",
    },
    {
      id: "ast_2",
      name: "Forest Combat Greybox",
      venture: "Gattabara Games",
      project: "Project Emberfall",
      type: "Level",
      engine: "Unity",
      format: "UnityPackage",
      version: "v5",
      status: "In-Production",
      file_ref: "repo://emberfall/levels/forest-combat-greybox",
      owner: "Dev Menon",
      reviewer: "Sudeep N",
      due_date: "2026-07-08",
      permission: "Internal",
      tags: "level, greybox, combat",
    },
    {
      id: "ast_3",
      name: "Neon Brawl Trailer Storyboard",
      venture: "Gattabara Games",
      project: "Neon Brawl Launch Assets",
      type: "Source File",
      engine: "Other",
      format: "Figma",
      version: "v2",
      status: "In-Review",
      file_ref: "figma://neon-brawl/trailer-storyboard",
      owner: "Utsav",
      reviewer: "Omar Vale",
      due_date: "2026-07-06",
      permission: "Client-visible",
      tags: "trailer, storyboard, marketing",
    },
    {
      id: "ast_4",
      name: "Cloud Sprint Lobby Prototype",
      venture: "Moonforge Labs",
      project: "Cloud Sprint Prototype",
      type: "Build",
      engine: "Unity",
      format: "GitRepo",
      version: "v1",
      status: "Concept",
      file_ref: "repo://cloud-sprint/lobby-prototype",
      owner: "Jin Park",
      reviewer: "Rhea Stone",
      due_date: "2026-07-14",
      permission: "Restricted",
      tags: "prototype, build, multiplayer",
    },
    {
      id: "ast_5",
      name: "Publisher Pitch Deck",
      venture: "PixelPeak Publishing",
      project: "Project Emberfall",
      type: "Game IP",
      engine: "Other",
      format: "Figma",
      version: "v4",
      status: "Delivered",
      file_ref: "drive://pitch/emberfall-publisher-deck-v4",
      owner: "Leah Frost",
      reviewer: "Sudeep N",
      due_date: "2026-07-03",
      permission: "Client-visible",
      tags: "pitch, publisher, deck",
    },
  ],
  transactions: [
    {
      id: "txn_1",
      reference: "x1",
      venture: "v1",
      direction: "Receivable",
      amount: "100000",
      currency: "INR",
      status: "Raised",
      counterparty: "c1",
      project_asset: "a1",
      due_date: "2026-07-05",
      documents: ["d1"],
    },
    {
      id: "txn_2",
      reference: "x2",
      venture: "v1",
      project: "p1",
      direction: "Payable",
      amount: "50000",
      currency: "INR",
      status: "Partly-Paid",
      counterparty: "c2",
      project_asset: "a2",
      due_date: "2026-07-10",
      documents: ["d2"],
    },
    {
      id: "txn_3",
      reference: "x3",
      venture: "v1",
      project: "p1",
      task: "t1",
      direction: "Receivable",
      amount: "25000",
      currency: "INR",
      status: "Draft",
      counterparty: "c3",
      project_asset: "a3",
      due_date: "2026-07-14",
      documents: ["d3"],
    },
    {
      id: "txn_4",
      reference: "food-01",
      venture: "v1",
      direction: "Payable",
      amount: "1800",
      currency: "INR",
      status: "Paid",
      counterparty: "cafe",
      project_asset: "a1",
      due_date: "2026-06-28",
      documents: [],
    },
    {
      id: "txn_5",
      reference: "food-02",
      venture: "v1",
      project: "p1",
      direction: "Payable",
      amount: "1200",
      currency: "INR",
      status: "Raised",
      counterparty: "canteen",
      project_asset: "a2",
      due_date: "2026-06-29",
      documents: [],
    },
    {
      id: "txn_6",
      reference: "food-03",
      venture: "v1",
      project: "p1",
      task: "t1",
      direction: "Receivable",
      amount: "950",
      currency: "INR",
      status: "Draft",
      counterparty: "tea stall",
      project_asset: "a3",
      due_date: "2026-06-30",
      documents: [],
    },
    {
      id: "txn_7",
      reference: "food-04",
      venture: "v2",
      project: "p3",
      direction: "Payable",
      amount: "2400",
      currency: "INR",
      status: "Overdue",
      counterparty: "mess",
      project_asset: "a1",
      due_date: "2026-07-01",
      documents: [],
    },
    {
      id: "txn_8",
      reference: "food-05",
      venture: "v1",
      project: "p2",
      task: "t3",
      direction: "Payable",
      amount: "600",
      currency: "INR",
      status: "Partly-Paid",
      counterparty: "water supplier",
      project_asset: "a2",
      due_date: "2026-07-03",
      documents: [],
    },
    {
      id: "txn_9",
      reference: "office-01",
      venture: "v1",
      direction: "Payable",
      amount: "3200",
      currency: "INR",
      status: "Raised",
      counterparty: "stationery",
      project_asset: "a1",
      due_date: "2026-07-04",
      documents: [],
    },
    {
      id: "txn_10",
      reference: "office-02",
      venture: "v2",
      direction: "Payable",
      amount: "8700",
      currency: "INR",
      status: "Draft",
      counterparty: "printer",
      project_asset: "a1",
      due_date: "2026-07-06",
      documents: [],
    },
    {
      id: "txn_11",
      reference: "food-06",
      venture: "v1",
      project: "p1",
      direction: "Payable",
      amount: "780",
      currency: "INR",
      status: "Paid",
      counterparty: "cafe",
      project_asset: "a2",
      due_date: "2026-07-02",
      documents: [],
    },
    {
      id: "txn_12",
      reference: "food-07",
      venture: "v2",
      project: "p3",
      direction: "Payable",
      amount: "1640",
      currency: "INR",
      status: "Partly-Paid",
      counterparty: "mess",
      project_asset: "a1",
      due_date: "2026-07-07",
      documents: [],
    },
    {
      id: "txn_13",
      reference: "water-01",
      venture: "v1",
      project: "p2",
      direction: "Payable",
      amount: "560",
      currency: "INR",
      status: "Paid",
      counterparty: "water supplier",
      project_asset: "a2",
      due_date: "2026-07-05",
      documents: [],
    },
    {
      id: "txn_14",
      reference: "water-02",
      venture: "v1",
      project: "p2",
      task: "t3",
      direction: "Payable",
      amount: "420",
      currency: "INR",
      status: "Raised",
      counterparty: "water supplier",
      project_asset: "a2",
      due_date: "2026-07-08",
      documents: [],
    },
    {
      id: "txn_15",
      reference: "infra-01",
      venture: "v2",
      direction: "Payable",
      amount: "45000",
      currency: "INR",
      status: "Overdue",
      counterparty: "cloud hosting vendor",
      project_asset: "a1",
      due_date: "2026-07-01",
      documents: [],
    },
    {
      id: "txn_16",
      reference: "tools-02",
      venture: "v1",
      project: "p1",
      direction: "Payable",
      amount: "28000",
      currency: "INR",
      status: "Raised",
      counterparty: "software licenses",
      project_asset: "a2",
      due_date: "2026-07-10",
      documents: [],
    },
    {
      id: "txn_17",
      reference: "travel-01",
      venture: "v1",
      project: "p1",
      task: "t1",
      direction: "Payable",
      amount: "2100",
      currency: "INR",
      status: "Draft",
      counterparty: "cab",
      project_asset: "a3",
      due_date: "2026-07-09",
      documents: [],
    },
    {
      id: "txn_18",
      reference: "travel-02",
      venture: "v2",
      project: "p3",
      task: "t4",
      direction: "Receivable",
      amount: "6100",
      currency: "INR",
      status: "Raised",
      counterparty: "client travel",
      project_asset: "a3",
      due_date: "2026-07-12",
      documents: [],
    },
    {
      id: "txn_19",
      reference: "fuel-01",
      venture: "v2",
      project: "p3",
      direction: "Payable",
      amount: "5400",
      currency: "INR",
      status: "Paid",
      counterparty: "fuel station",
      project_asset: "a1",
      due_date: "2026-07-03",
      documents: [],
    },
    {
      id: "txn_20",
      reference: "fuel-02",
      venture: "v1",
      project: "p2",
      task: "t3",
      direction: "Payable",
      amount: "3900",
      currency: "INR",
      status: "Partly-Paid",
      counterparty: "fuel station",
      project_asset: "a2",
      due_date: "2026-07-11",
      documents: [],
    },
    {
      id: "txn_21",
      reference: "food-08",
      venture: "v1",
      direction: "Payable",
      amount: "940",
      currency: "INR",
      status: "Paid",
      counterparty: "canteen",
      project_asset: "a1",
      due_date: "2026-07-04",
      documents: [],
    },
    {
      id: "txn_22",
      reference: "food-09",
      venture: "v2",
      project: "p3",
      task: "t4",
      direction: "Payable",
      amount: "1320",
      currency: "INR",
      status: "Raised",
      counterparty: "tea stall",
      project_asset: "a3",
      due_date: "2026-07-06",
      documents: [],
    },
    {
      id: "txn_23",
      reference: "misc-01",
      venture: "v1",
      project: "p1",
      direction: "Receivable",
      amount: "12500",
      currency: "INR",
      status: "Draft",
      counterparty: "client a",
      project_asset: "a2",
      due_date: "2026-07-14",
      documents: [],
    },
    {
      id: "txn_24",
      reference: "misc-02",
      venture: "v1",
      project: "p1",
      task: "t2",
      direction: "Payable",
      amount: "2750",
      currency: "INR",
      status: "Raised",
      counterparty: "vendor b",
      project_asset: "a2",
      due_date: "2026-07-13",
      documents: [],
    },
    {
      id: "txn_25",
      reference: "misc-03",
      venture: "v2",
      direction: "Receivable",
      amount: "22000",
      currency: "INR",
      status: "Draft",
      counterparty: "client b",
      project_asset: "a1",
      due_date: "2026-07-15",
      documents: [],
    },
    {
      id: "txn_26",
      reference: "misc-04",
      venture: "v2",
      project: "p3",
      direction: "Payable",
      amount: "6400",
      currency: "INR",
      status: "Paid",
      counterparty: "consultant",
      project_asset: "a3",
      due_date: "2026-07-08",
      documents: [],
    },
    {
      id: "txn_27",
      reference: "misc-05",
      venture: "v1",
      project: "p2",
      direction: "Payable",
      amount: "5100",
      currency: "INR",
      status: "Overdue",
      counterparty: "vendor c",
      project_asset: "a2",
      due_date: "2026-07-01",
      documents: [],
    },
    {
      id: "txn_28",
      reference: "misc-06",
      venture: "v1",
      project: "p2",
      task: "t3",
      direction: "Receivable",
      amount: "7300",
      currency: "INR",
      status: "Raised",
      counterparty: "client c",
      project_asset: "a3",
      due_date: "2026-07-16",
      documents: [],
    },
  ],
  roles: {
    Founder: {
      title: "Founder view",
      items: [
        ["Portfolio pulse", "3 live initiatives, 1 stalled internal stream"],
        ["Near-term pressure", "2 items need action inside 72 hours"],
        ["Cash movement", "1 receivable open, 2 outgoing items pending"],
        ["Team spread", "6 people working across 4 ventures"],
      ],
    },
    Partner: {
      title: "Partner view",
      items: [
        ["Coverage", "Scoped to linked ventures and active mandates"],
        ["Current lanes", "2 external workstreams need monitoring"],
        ["Watchlist", "1 delayed item needs escalation"],
        ["Shared files", "3 current records available in scope"],
      ],
    },
    Employee: {
      title: "Employee view",
      items: [
        ["My queue", "3 open items, 1 already moving"],
        ["Logged time", "1 hour 10 minutes this week"],
        ["Upcoming touchpoints", "2 meetings and 1 review session ahead"],
        ["Next move", "Clear the blocked rollout brief branch"],
      ],
    },
  },
};

let userAccounts = [];

const accessRoles = ["Admin", "Founder", "Partner", "Employee", "Client", "Contractor"];

function seedRecordMetadata() {
  const baseTime = Date.parse("2026-06-01T09:00:00.000Z");
  let offset = 0;

  Object.values(data).forEach((value) => {
    if (!Array.isArray(value)) return;
    value.forEach((row) => {
      if (!row.createdAt) {
        row.createdAt = new Date(baseTime + offset * 60000).toISOString();
      }
      offset += 1;
    });
  });
}

seedRecordMetadata();

function getStoredAuthState() {
  return String(globalThis.sessionStorage?.getItem(APP_SESSION_KEY) ?? "") === "1";
}

function setStoredAuthState(value) {
  if (value) globalThis.sessionStorage?.setItem(APP_SESSION_KEY, "1");
  else globalThis.sessionStorage?.removeItem(APP_SESSION_KEY);
}

function setStoredAuthUser(user) {
  try {
    if (user?.id) globalThis.sessionStorage?.setItem(APP_SESSION_USER_KEY, String(user.id));
    else globalThis.sessionStorage?.removeItem(APP_SESSION_USER_KEY);
  } catch {
    // Ignore storage failures and keep runtime state.
  }
}

function getStoredAuthUser() {
  const userId = String(globalThis.sessionStorage?.getItem(APP_SESSION_USER_KEY) ?? "").trim();
  if (!userId) return null;
  return userAccounts.find((user) => String(user.id ?? "") === userId) ?? null;
}

function getUserByPassword(password) {
  const normalized = String(password ?? "").trim().toLowerCase();
  if (!normalized) return null;
  return userAccounts.find((user) => String(user.password ?? "").trim().toLowerCase() === normalized) ?? null;
}

function getPasswordMatches(password, excludeUserId = null) {
  const normalized = String(password ?? "").trim().toLowerCase();
  if (!normalized) return [];
  return userAccounts.filter((user) => {
    if (excludeUserId && String(user.id ?? "") === String(excludeUserId)) return false;
    return String(user.password ?? "").trim().toLowerCase() === normalized;
  });
}

function validateUniquePasswords(excludeUserId = null) {
  const seen = new Map();
  for (const user of userAccounts) {
    if (excludeUserId && String(user.id ?? "") === String(excludeUserId)) continue;
    const password = String(user.password ?? "").trim().toLowerCase();
    if (!password) continue;
    const users = seen.get(password) ?? [];
    users.push(user);
    seen.set(password, users);
  }

  for (const [password, users] of seen.entries()) {
    if (users.length > 1) {
      return { valid: false, password, users: users.map((user) => user.name || user.email || user.id) };
    }
  }

  return { valid: true, password: "", users: [] };
}

function mapAdminUserFromSupabase(row = {}) {
  return {
    id: String(row.id ?? ""),
    name: String(row.name ?? ""),
    email: String(row.email ?? ""),
    password: String(row.password ?? ""),
    role: String(row.role ?? "Employee"),
    status: String(row.status ?? "Active"),
    venture_scope: String(row.venture_scope ?? "All ventures"),
    table_access: Array.isArray(row.table_access) ? row.table_access.map((value) => String(value)) : [],
    createdAt: row.created_at ?? null,
    createdBy: String(row.created_by ?? "System"),
  };
}

function mapAdminUserToSupabase(user = {}) {
  return {
    id: String(user.id ?? "").trim(),
    name: String(user.name ?? "").trim(),
    email: String(user.email ?? "").trim(),
    password: String(user.password ?? "").trim(),
    role: String(user.role ?? "Employee").trim(),
    status: String(user.status ?? "Active").trim(),
    venture_scope: String(user.venture_scope ?? "All ventures").trim(),
    table_access: Array.isArray(user.table_access) ? user.table_access.map((value) => String(value)) : [],
    created_at: user.createdAt ?? new Date().toISOString(),
    created_by: String(user.createdBy ?? "System").trim() || "System",
  };
}

async function fetchAdminUsersFromSupabase() {
  if (!supabaseClient) {
    throw new Error("Supabase client is unavailable. Users were not loaded.");
  }

  const { data: rows, error } = await supabaseClient
    .from(ADMIN_USERS_TABLE)
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw error;
  userAccounts = (rows ?? []).map(mapAdminUserFromSupabase);
  if (state.currentUser?.id) {
    const freshUser = userAccounts.find((user) => user.id === state.currentUser.id) ?? null;
    if (freshUser) {
      state.currentUser = freshUser;
      state.role = freshUser.role;
    }
  }
  return userAccounts;
}

function reconcileAuthenticatedUserAfterSupabaseRefresh() {
  if (!state.isAuthenticated || !state.currentUser?.id) return true;
  const freshUser = userAccounts.find((user) => user.id === state.currentUser.id) ?? null;
  if (freshUser) {
    state.currentUser = freshUser;
    state.role = freshUser.role;
    setStoredAuthUser(freshUser);
    return true;
  }

  state.currentUser = null;
  state.isAuthenticated = false;
  setStoredAuthState(false);
  setStoredAuthUser(null);
  return false;
}

async function refreshAdminUsersFromSupabase({ render = false } = {}) {
  state.adminUsersLoading = true;
  state.adminUserError = "";
  if (render) renderHeroPanel();

  try {
    await fetchAdminUsersFromSupabase();
    const authenticatedUserExists = reconcileAuthenticatedUserAfterSupabaseRefresh();
    state.adminUsersLoading = false;
    state.adminUserError = "";
    if (!authenticatedUserExists) {
      renderLoginScreen("Your admin user no longer exists in Supabase.");
      return true;
    }
    if (render) {
      renderSidebarNav();
      renderMeta();
      renderHeroPanel();
    }
    return true;
  } catch (error) {
    state.adminUsersLoading = false;
    state.adminUserError = `Supabase users load failed: ${error?.message ?? "Unknown error"}`;
    if (render) renderHeroPanel();
    throw error;
  }
}

function applyAdminUserToRuntime(user) {
  const index = userAccounts.findIndex((item) => item.id === user.id);
  if (index >= 0) userAccounts[index] = user;
  else userAccounts.unshift(user);
}

async function saveAdminUserToSupabase(user, { mode = "insert" } = {}) {
  if (!supabaseClient) {
    throw new Error("Supabase client is unavailable. User was not saved.");
  }

  const payload = mapAdminUserToSupabase(user);
  const query = mode === "update"
    ? supabaseClient.from(ADMIN_USERS_TABLE).update(payload).eq("id", payload.id).select("*")
    : supabaseClient.from(ADMIN_USERS_TABLE).insert(payload).select("*");

  const { data: rows, error } = await query;
  if (error) throw error;
  const savedRow = Array.isArray(rows) ? rows[0] ?? null : null;
  if (!savedRow) {
    throw new Error("Supabase did not return the saved user. The UI was not updated.");
  }
  return mapAdminUserFromSupabase(savedRow);
}

async function deleteAdminUserFromSupabase(userId) {
  if (!supabaseClient) {
    throw new Error("Supabase client is unavailable. User was not deleted.");
  }

  const { data: rows, error } = await supabaseClient
    .from(ADMIN_USERS_TABLE)
    .delete()
    .eq("id", userId)
    .select("id");

  if (error) throw error;
  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error("Supabase did not delete the user. The UI was not updated.");
  }
  return rows;
}

function getAuditActor() {
  const user = state.currentUser ?? getCurrentSidebarUser?.() ?? null;
  return {
    userId: String(user?.id ?? "").trim(),
    name: String(user?.name || user?.email || "System").trim(),
    role: String(user?.role || state.role || "").trim(),
  };
}

function getAuditTargetLabel(tableKey, record = {}) {
  const fallback = tableKey === ADMIN_USERS_TABLE ? "User" : titleCaseKey(String(tableKey ?? "record"));
  return String(
    record?.name
    ?? record?.title
    ?? record?.reference
    ?? record?.email
    ?? record?.label
    ?? fallback
  ).trim();
}

function createAuditLogId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `aud_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function getStoredKeepalivePingAt() {
  try {
    return Number(globalThis.localStorage?.getItem(APP_KEEPALIVE_KEY) ?? 0);
  } catch {
    return 0;
  }
}

function setStoredKeepalivePingAt(timestamp) {
  try {
    if (timestamp > 0) globalThis.localStorage?.setItem(APP_KEEPALIVE_KEY, String(timestamp));
    else globalThis.localStorage?.removeItem(APP_KEEPALIVE_KEY);
  } catch {
    // Ignore storage failures and keep runtime behavior unchanged.
  }
}

function shouldSendKeepalivePing() {
  const lastPingAt = getStoredKeepalivePingAt();
  return !lastPingAt || (Date.now() - lastPingAt) >= KEEPALIVE_INTERVAL_MS;
}

async function sendKeepalivePing({ source = "app-boot", force = false } = {}) {
  if (!supabaseClient || (!force && !shouldSendKeepalivePing())) return false;

  try {
    const { error: rpcError } = await supabaseClient.rpc("send_keepalive_ping", {
      p_message: "hi",
      p_source: source,
    });

    if (rpcError) {
      const { error: insertError } = await supabaseClient
        .from(KEEPALIVE_TABLE)
        .insert({ message: "hi", source });
      if (insertError) throw insertError;
    }

    setStoredKeepalivePingAt(Date.now());
    return true;
  } catch (error) {
    console.warn("Supabase keepalive ping failed", error);
    return false;
  }
}

function mapAuditLogFromSupabase(row = {}) {
  return {
    id: String(row.id ?? ""),
    action: String(row.action ?? ""),
    targetTable: String(row.target_table ?? ""),
    targetId: String(row.target_id ?? ""),
    targetLabel: String(row.target_label ?? ""),
    actorUserId: String(row.actor_user_id ?? ""),
    actorName: String(row.actor_name ?? "System"),
    actorRole: String(row.actor_role ?? ""),
    details: isPlainObject(row.details) ? row.details : {},
    createdAt: row.created_at ?? null,
  };
}

function mapAuditLogToSupabase(entry = {}) {
  const actor = getAuditActor();
  const record = entry.record ?? {};
  return {
    id: entry.id ?? createAuditLogId(),
    action: String(entry.action ?? "").trim(),
    target_table: String(entry.tableKey ?? entry.targetTable ?? "").trim(),
    target_id: String(entry.recordId ?? record.id ?? "").trim(),
    target_label: String(entry.recordLabel ?? getAuditTargetLabel(entry.tableKey ?? entry.targetTable, record)).trim(),
    actor_user_id: actor.userId || null,
    actor_name: actor.name || "System",
    actor_role: actor.role || null,
    details: isPlainObject(entry.details) ? entry.details : {},
    created_at: new Date().toISOString(),
  };
}

async function fetchAuditLogsFromSupabase() {
  if (!supabaseClient) {
    throw new Error("Supabase client is unavailable. Audit logs were not loaded.");
  }

  const { data: rows, error } = await supabaseClient
    .from(AUDIT_LOGS_TABLE)
    .select("*")
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) throw error;
  state.auditLogs = (rows ?? []).map(mapAuditLogFromSupabase);
  return state.auditLogs;
}

async function refreshAuditLogsFromSupabase({ render = false } = {}) {
  state.auditLogsLoading = true;
  state.auditLogError = "";
  if (render) renderHeroPanel();

  try {
    await fetchAuditLogsFromSupabase();
    state.auditLogsLoading = false;
    state.auditLogError = "";
  } catch (error) {
    state.auditLogsLoading = false;
    state.auditLogError = `Supabase audit load failed: ${error?.message ?? "Unknown error"}`;
    throw error;
  } finally {
    if (render) renderHeroPanel();
  }
}

async function appendAuditLogToSupabase(entry = {}) {
  if (!supabaseClient) {
    throw new Error("Supabase client is unavailable. Audit log was not saved.");
  }

  const payload = mapAuditLogToSupabase(entry);
  if (!payload.action || !payload.target_table) return null;

  const { data: rows, error } = await supabaseClient
    .from(AUDIT_LOGS_TABLE)
    .insert(payload)
    .select("*");

  if (error) throw error;
  const savedRow = Array.isArray(rows) ? rows[0] ?? null : null;
  if (!savedRow) return null;
  const auditLog = mapAuditLogFromSupabase(savedRow);
  state.auditLogs = [auditLog, ...state.auditLogs.filter((item) => item.id !== auditLog.id)].slice(0, 500);
  if (state.activeNav === "audit") renderHeroPanel();
  return auditLog;
}

async function writeAuditLogSafe(entry = {}) {
  try {
    return await appendAuditLogToSupabase(entry);
  } catch (error) {
    console.error("Supabase audit log save failed", error);
    state.auditLogError = `Audit log save failed: ${error?.message ?? "Unknown error"}`;
    if (state.activeNav === "audit") renderHeroPanel();
    return null;
  }
}

const state = {
  role: "Founder",
  currentUser: null,
  projectId: "prj_1",
  taskId: "tsk_1",
  search: "",
  activeTable: "projects",
  activeNav: "dashboard",
  modalMode: "create",
  modalEntity: "table",
  editingRecordId: null,
  editingUserId: null,
  sidebarCollapsed: true,
  detailTableKey: null,
  detailRecordId: null,
  detailTreeOpen: false,
  detailTreeScroll: null,
  detailHistory: [],
  recordFilters: {},
  archivedRecordViews: {},
  taskExpanded: {},
  ganttSidebarExpanded: {},
  ganttWorkstreamsCollapsed: null,
  ganttVisibleTable: "events",
  ganttWeekStart: null,
  ganttScale: "week",
  adminView: "users",
  adminUsersLoading: false,
  adminUserError: "",
  auditLogs: [],
  auditLogsLoading: false,
  auditLogError: "",
  recordSharedNotes: {},
  recordSharedNotesLoading: {},
  recordSharedNotesError: {},
  isSharedView: false,
  sharedToken: "",
  sharedPassword: "",
  sharedAuthorKey: "",
  sharedBundle: null,
  sharedLoading: false,
  sharedError: "",
  sharedTreeOpen: false,
  formBuilderTableKey: "ventures",
  formBuilderStatus: "",
  formBuilderError: "",
  isAuthenticated: false,
  isMobileViewport: false,
  isMobileNavOpen: false,
};

const el = {};
let confirmResolve = null;
let remoteRefreshTimeoutId = null;
let remoteRefreshPromise = null;
let remoteRealtimeChannel = null;
const MOBILE_BREAKPOINT = 820;
const APP_SESSION_USER_KEY = "gattabara.appUserId";
const APP_KEEPALIVE_KEY = "gattabara.lastKeepalivePingAt";
const SHARED_NOTE_AUTHOR_PREFIX = "gattabara.sharedNoteAuthor.";
const REMOTE_REFRESH_DEBOUNCE_MS = 350;

const arrayFields = new Set(["verticals", "tags"]);
const hierarchyAttachmentTables = new Set(["tasks", "documents", "assets", "events", "transactions"]);

const relationFields = {
  venture: { table: "ventures", labelField: "name" },
  asset: { table: "assets", labelField: "name" },
  lead: { table: "people", labelField: "name" },
  primary_contact: { table: "people", labelField: "name" },
  project: { table: "projects", labelField: "name" },
  parent_task: { table: "tasks", labelField: "title" },
  owner: { table: "people", labelField: "name" },
  reviewer: { table: "people", labelField: "name" },
  assignees: { table: "people", labelField: "name", multiple: true },
  depends_on: { table: "tasks", labelField: "title", multiple: true },
  external_shared_with: { table: "people", labelField: "name" },
  task: { table: "tasks", labelField: "title" },
  participants: { table: "people", labelField: "name", multiple: true },
  links: { tables: ["ventures", "people", "projects", "tasks", "documents", "assets", "events", "transactions"], multiple: true },
  related_assets: { table: "assets", labelField: "name", multiple: true },
  related_events: { table: "events", labelField: "title", multiple: true },
  related_transactions: { table: "transactions", labelField: "reference", multiple: true },
  counterparty: { table: "ventures", labelField: "name" },
  project_asset: { tables: ["projects", "assets"] },
  documents: { table: "documents", labelField: "title", multiple: true },
};

const jsonColumnDefaults = {
  ventures: { verticals: [], tags: [], custom_fields: {} },
  people: { custom_fields: {} },
  projects: { custom_fields: {} },
  tasks: { assignees: [], depends_on: [], custom_fields: {} },
  documents: { links: [], related_assets: [], related_events: [], related_transactions: [], tags: [], custom_fields: {} },
  assets: { custom_fields: {} },
  events: { participants: [], custom_fields: {} },
  transactions: { documents: [], custom_fields: {} },
};

const remoteTableColumns = {
  ventures: ["id", "name", "date", "type", "status", "verticals", "entity_form", "reg_no", "primary_contact", "tags", "custom_fields", "created_at"],
  people: ["id", "name", "email", "phone", "venture", "type", "role_title", "status", "access_level", "custom_fields", "created_at"],
  projects: ["id", "name", "venture", "vertical", "type", "asset", "stage", "status", "start_date", "target_date", "lead", "client_shareable", "custom_fields", "created_at"],
  tasks: ["id", "title", "venture", "project", "parent_task", "status", "priority", "owner", "assignees", "depends_on", "due_date", "estimate", "time_logged", "external_shared_with", "custom_fields", "created_at"],
  documents: ["id", "title", "date", "venture", "project", "task", "type", "body", "file_ref", "version", "status", "links", "permission", "tags", "custom_fields", "created_at"],
  assets: ["id", "name", "venture", "project", "type", "engine", "format", "version", "status", "file_ref", "owner", "reviewer", "due_date", "permission", "tags", "custom_fields", "created_at"],
  events: ["id", "title", "type", "venture", "project", "task", "date", "start", "end", "participants", "location", "summary", "calendar_ref", "custom_fields", "created_at"],
  transactions: ["id", "reference", "venture", "project", "task", "direction", "amount", "currency", "status", "counterparty", "project_asset", "due_date", "documents", "custom_fields", "created_at"],
};

const ARCHIVABLE_TABLE_KEYS = new Set(["ventures", "projects"]);

const sidebarItems = [
  { key: "dashboard", label: "Dashboard", kind: "dashboard", count: null },
  ...tables.map((table) => ({ key: table.key, label: table.title, kind: "table" })),
  { key: "gantt", label: "Gantt Chart", kind: "gantt", count: null },
  { key: "admin", label: "Admin", kind: "admin", count: null },
  { key: "audit", label: "Audit", kind: "audit", count: null },
];

const peopleTypeHierarchy = ["Founder", "Investor", "Partner", "Client", "Vendor", "Consultant", "Contractor", "Employee"];
const peopleTypeRank = new Map(peopleTypeHierarchy.map((type, index) => [type, index]));
const durationUnits = [
  { value: "h", label: "Hours" },
  { value: "d", label: "Days" },
];
const editableFieldTypes = ["text", "email", "tel", "number", "date", "datetime-local", "select", "textarea", "checkbox"];
const inlinePrimaryContactFieldPrefix = "inline_primary_contact_";
const defaultFormConfig = createDefaultFormConfig();
let activeFormConfig = cloneJson(defaultFormConfig);

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeOptionList(options = []) {
  return Array.from(new Set(
    (Array.isArray(options) ? options : [])
      .map((option) => String(option ?? "").trim())
      .filter(Boolean),
  ));
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function createFieldKey(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_{2,}/g, "_");
}

function getDefaultFieldNameSet(tableKey) {
  const defaultTable = defaultFormConfig.tables.find((table) => table.key === tableKey);
  return new Set((defaultTable?.fields ?? []).map((field) => field.name));
}

function getCustomFieldNames(tableKey) {
  const defaultNames = getDefaultFieldNameSet(tableKey);
  const table = tables.find((item) => item.key === tableKey);
  return new Set((table?.fields ?? [])
    .filter((field) => field.custom === true || !defaultNames.has(field.name))
    .map((field) => field.name));
}

function normalizeCustomFieldConfig(field = {}, existingNames = new Set()) {
  const rawLabel = String(field.label ?? "").trim();
  const rawName = createFieldKey(field.name || rawLabel);
  if (!rawLabel || !rawName || existingNames.has(rawName)) return null;
  const type = editableFieldTypes.includes(field.type) ? field.type : "text";
  const normalized = {
    name: rawName,
    label: rawLabel,
    type,
    required: Boolean(field.required),
    enabled: field.enabled !== false,
    custom: true,
  };

  ["placeholder", "value"].forEach((key) => {
    const value = String(field[key] ?? "").trim();
    if (value) normalized[key] = value;
  });

  if (type === "select") normalized.options = normalizeOptionList(field.options);
  return normalized;
}

function createDefaultFormConfig() {
  return {
    version: FORM_CONFIG_VERSION,
    tables: tables.map((table) => ({
      key: table.key,
      title: table.title,
      singular: table.singular,
      summary: table.summary,
      fields: table.fields.map((field) => ({
        ...cloneJson(field),
        enabled: field.enabled !== false,
        options: Array.isArray(field.options) ? [...field.options] : undefined,
      })),
    })),
  };
}

function mergeFieldConfig(defaultField, overrideField = {}) {
  const type = editableFieldTypes.includes(overrideField.type) ? overrideField.type : defaultField.type;
  const hasOptions = Array.isArray(overrideField.options) || Array.isArray(defaultField.options) || type === "select";
  const merged = {
    ...cloneJson(defaultField),
    label: String(overrideField.label ?? defaultField.label ?? defaultField.name).trim() || defaultField.name,
    type,
    required: Boolean(overrideField.required ?? defaultField.required ?? false),
    enabled: overrideField.enabled !== false,
  };

  ["placeholder", "value", "step", "inputmode", "data_format"].forEach((key) => {
    const value = overrideField[key] ?? defaultField[key];
    if (value != null && value !== "") merged[key] = value;
    else delete merged[key];
  });

  if (hasOptions) merged.options = normalizeOptionList(overrideField.options ?? defaultField.options ?? []);
  else delete merged.options;

  return merged;
}

function mergeFormConfig(config = {}) {
  const defaults = cloneJson(defaultFormConfig);
  const overrideTables = new Map((Array.isArray(config?.tables) ? config.tables : []).map((table) => [table.key, table]));

  defaults.tables = defaults.tables.map((table) => {
    const overrideTable = overrideTables.get(table.key) ?? {};
    const overrideFields = new Map((Array.isArray(overrideTable.fields) ? overrideTable.fields : []).map((field) => [field.name, field]));
    const defaultFieldNames = new Set(table.fields.map((field) => field.name));
    const mergedFields = table.fields.map((field) => mergeFieldConfig(field, overrideFields.get(field.name)));
    const existingFieldNames = new Set(defaultFieldNames);
    const customFields = (Array.isArray(overrideTable.fields) ? overrideTable.fields : [])
      .filter((field) => !defaultFieldNames.has(field.name))
      .map((field) => {
        const normalizedField = normalizeCustomFieldConfig(field, existingFieldNames);
        if (normalizedField) existingFieldNames.add(normalizedField.name);
        return normalizedField;
      })
      .filter(Boolean);

    return {
      ...table,
      title: String(overrideTable.title ?? table.title).trim() || table.title,
      singular: String(overrideTable.singular ?? table.singular).trim() || table.singular,
      summary: String(overrideTable.summary ?? table.summary ?? "").trim(),
      fields: [...mergedFields, ...customFields],
    };
  });

  return { version: FORM_CONFIG_VERSION, tables: defaults.tables };
}

function applyFormConfig(config = activeFormConfig) {
  activeFormConfig = mergeFormConfig(config);
  const configTables = new Map(activeFormConfig.tables.map((table) => [table.key, table]));

  tables.forEach((table) => {
    const tableConfig = configTables.get(table.key);
    if (!tableConfig) return;
    table.title = tableConfig.title;
    table.singular = tableConfig.singular;
    table.summary = tableConfig.summary;
    table.fields = tableConfig.fields.map((field) => cloneJson(field));
  });
}

function getVisibleFields(table) {
  return (table.fields ?? []).filter((field) => field.enabled !== false);
}

async function loadFormConfigFromSupabase() {
  applyFormConfig(activeFormConfig);
  if (!supabaseClient) return false;

  const { data: rows, error } = await supabaseClient
    .from(FORM_CONFIG_TABLE)
    .select("config")
    .eq("key", FORM_CONFIG_KEY)
    .limit(1);

  if (error) throw error;
  const remoteConfig = Array.isArray(rows) ? rows[0]?.config : null;
  applyFormConfig(remoteConfig ?? defaultFormConfig);
  return Boolean(remoteConfig);
}

async function saveFormConfigToSupabase(config = activeFormConfig) {
  if (!supabaseClient) {
    throw new Error("Supabase client is unavailable. Form settings were not saved.");
  }

  const mergedConfig = mergeFormConfig(config);
  const { data: rows, error } = await supabaseClient
    .from(FORM_CONFIG_TABLE)
    .upsert({
      key: FORM_CONFIG_KEY,
      config: mergedConfig,
      updated_at: new Date().toISOString(),
    }, { onConflict: "key" })
    .select("key")
    .limit(1);

  if (error) throw error;
  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error("Supabase did not return the saved form settings.");
  }

  applyFormConfig(mergedConfig);
  return true;
}

function getFormConfigTable(tableKey) {
  return activeFormConfig.tables.find((table) => table.key === tableKey) ?? null;
}

function getFormConfigField(tableKey, fieldName) {
  return getFormConfigTable(tableKey)?.fields.find((field) => field.name === fieldName) ?? null;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatList(value) {
  if (Array.isArray(value) && value.length && typeof value[0] === "object" && value[0] !== null) {
    return value
      .map((item) => {
        const venture = item.venture || item.name || item.title || "—";
        const stake = item.stake ? ` (${item.stake}%)` : "";
        return `${venture}${stake}`;
      })
      .join(", ");
  }
  if (Array.isArray(value)) return value.join(", ");
  return value ?? "—";
}

function parseDurationValue(value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  if (!normalized) return null;

  const match = normalized.match(/^(\d+(?:\.\d+)?)\s*([a-z]+)$/);
  if (!match) return null;

  const amount = Number(match[1]);
  if (!Number.isFinite(amount) || amount <= 0) return null;

  const unitToken = match[2];
  const unit = ["d", "day", "days"].includes(unitToken)
    ? "d"
    : ["h", "hr", "hrs", "hour", "hours"].includes(unitToken)
      ? "h"
      : null;

  if (!unit) return null;
  return { amount, unit };
}

function formatDurationValue(amount, unit) {
  if (!Number.isFinite(amount) || amount <= 0) return "";
  const normalizedAmount = String(amount).replace(/\.0+$/, "").replace(/(\.\d*[1-9])0+$/, "$1");
  return `${normalizedAmount}${unit}`;
}

function convertDurationToHours(value) {
  const parsed = parseDurationValue(value);
  if (!parsed) return 0;
  return parsed.unit === "d" ? parsed.amount * 8 : parsed.amount;
}

function getRecordLabel(tableKey, row) {
  if (!row) return "";
  return row.name || row.title || row.reference || row.id || "";
}

function getPersonByName(name) {
  const normalizedName = String(name ?? "").trim();
  if (!normalizedName) return null;
  return data.people.find((item) => String(item.name ?? "").trim() === normalizedName) ?? null;
}

function formatPersonDisplayLabel(value) {
  if (value == null || value === "") return "";

  const row = typeof value === "object" && value !== null
    ? value
    : getPersonByName(value);
  const name = String((row?.name ?? value) || "").trim();
  if (!name) return "";

  const venture = String(row?.venture ?? "").trim();
  return venture ? `${name} (${venture})` : name;
}

function getEntryLabel(entry) {
  if (entry == null) return "";
  if (typeof entry === "object") {
    return entry.venture || entry.name || entry.title || entry.reference || entry.label || "";
  }
  return String(entry);
}

function getEntryStake(entry) {
  if (!entry || typeof entry !== "object") return "";
  return entry.stake ?? "";
}

function getFormFieldValue(fieldName) {
  const field = el.formElement?.elements?.[fieldName];
  if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) {
    return String(field.value ?? "").trim();
  }
  return "";
}

function getProjectByName(projectName) {
  return data.projects.find((item) => item.name === projectName) ?? null;
}

function getTaskByTitle(taskTitle) {
  return data.tasks.find((item) => item.title === taskTitle) ?? null;
}

function getVentureByName(ventureName) {
  return data.ventures.find((item) => item.name === ventureName) ?? null;
}

function resolveRowVentureName(row = {}) {
  const directVenture = String(row?.venture ?? "").trim();
  if (directVenture) return directVenture;

  const projectName = String(row?.project ?? "").trim();
  if (projectName) {
    const projectRow = getProjectByName(projectName);
    const projectVenture = String(projectRow?.venture ?? "").trim();
    if (projectVenture) return projectVenture;
  }

  const taskTitle = String(row?.task ?? "").trim();
  if (taskTitle) {
    const taskRow = getTaskByTitle(taskTitle);
    if (taskRow) {
      const taskVenture = String(taskRow.venture ?? "").trim();
      if (taskVenture) return taskVenture;
      const taskProject = String(taskRow.project ?? "").trim();
      if (taskProject) {
        const taskProjectRow = getProjectByName(taskProject);
        const projectVenture = String(taskProjectRow?.venture ?? "").trim();
        if (projectVenture) return projectVenture;
      }
    }
  }

  return "";
}

function getPersonLinkedVentures(personRow) {
  const personName = String(personRow?.name ?? "").trim();
  if (!personName) return [];

  const ventures = new Map();
  const addVenture = (ventureName) => {
    const normalized = String(ventureName ?? "").trim();
    if (!normalized || ventures.has(normalized)) return;
    const ventureRow = getVentureByName(normalized);
    if (!ventureRow) return;
    ventures.set(normalized, {
      label: getRecordReferenceLabel("ventures", ventureRow),
      tableKey: "ventures",
      id: ventureRow.id,
      row: ventureRow,
    });
  };

  addVenture(personRow.venture);

  (data.projects ?? [])
    .filter((item) => String(item.lead ?? "").trim() === personName)
    .forEach((item) => addVenture(resolveRowVentureName(item)));

  (data.tasks ?? [])
    .filter((item) => {
      const owner = String(item.owner ?? "").trim();
      const external = String(item.external_shared_with ?? "").trim();
      const assignees = Array.isArray(item.assignees) ? item.assignees.map((name) => String(name).trim()) : [];
      return owner === personName || external === personName || assignees.includes(personName);
    })
    .forEach((item) => addVenture(resolveRowVentureName(item)));

  (data.events ?? [])
    .filter((item) => Array.isArray(item.participants) && item.participants.map((name) => String(name).trim()).includes(personName))
    .forEach((item) => addVenture(resolveRowVentureName(item)));

  (data.documents ?? [])
    .filter((item) => Array.isArray(item.links) && item.links.map((value) => String(value).trim()).includes(personName))
    .forEach((item) => {
      addVenture(resolveRowVentureName(item));

      (Array.isArray(item.related_assets) ? item.related_assets : []).forEach((assetName) => {
        const assetRow = data.assets.find((asset) => String(asset.name ?? "").trim() === String(assetName).trim()) ?? null;
        addVenture(resolveRowVentureName(assetRow));
      });

      (Array.isArray(item.related_events) ? item.related_events : []).forEach((eventTitle) => {
        const eventRow = data.events.find((event) => String(event.title ?? "").trim() === String(eventTitle).trim()) ?? null;
        addVenture(resolveRowVentureName(eventRow));
      });

      (Array.isArray(item.related_transactions) ? item.related_transactions : []).forEach((reference) => {
        const transactionRow = data.transactions.find((transaction) => String(transaction.reference ?? "").trim() === String(reference).trim()) ?? null;
        addVenture(resolveRowVentureName(transactionRow));
      });
    });

  return Array.from(ventures.values());
}

function getVentureLinkedPeople(ventureRow) {
  const ventureName = String(ventureRow?.name ?? "").trim();
  if (!ventureName) return [];

  const people = new Map();
  const addPerson = (personName) => {
    const normalized = String(personName ?? "").trim();
    if (!normalized || people.has(normalized)) return;
    const personRow = getPersonByName(normalized);
    if (!personRow) return;
    people.set(normalized, createTreeLeafNode("people", personRow, getRecordReferenceLabel("people", personRow)));
  };

  (data.people ?? [])
    .filter((item) => String(item.venture ?? "").trim() === ventureName)
    .forEach((item) => addPerson(item.name));

  (data.projects ?? [])
    .filter((item) => String(resolveRowVentureName(item)) === ventureName)
    .forEach((item) => addPerson(item.lead));

  (data.tasks ?? [])
    .filter((item) => String(resolveRowVentureName(item)) === ventureName)
    .forEach((item) => {
      addPerson(item.owner);
      addPerson(item.external_shared_with);
      (Array.isArray(item.assignees) ? item.assignees : []).forEach(addPerson);
    });

  (data.events ?? [])
    .filter((item) => String(resolveRowVentureName(item)) === ventureName)
    .forEach((item) => {
      (Array.isArray(item.participants) ? item.participants : []).forEach(addPerson);
    });

  (data.documents ?? [])
    .filter((item) => String(resolveRowVentureName(item)) === ventureName || (Array.isArray(item.links) && item.links.includes(ventureName)))
    .forEach((item) => {
      (Array.isArray(item.links) ? item.links : []).forEach(addPerson);
    });

  return Array.from(people.values());
}

function formatLocalDateForInput(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatLocalDateTimeForInput(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function getHierarchyContext(record = null) {
  let venture = getFormFieldValue("venture") || String(record?.venture ?? "").trim();
  let project = getFormFieldValue("project") || String(record?.project ?? "").trim();
  let task = getFormFieldValue("task") || String(record?.task ?? "").trim();

  const taskRow = task ? getTaskByTitle(task) : null;
  const projectRow = project ? getProjectByName(project) : null;

  if (!project && taskRow?.project) {
    project = String(taskRow.project).trim();
  }

  const resolvedProjectRow = project ? getProjectByName(project) : projectRow;
  if (!venture && resolvedProjectRow?.venture) {
    venture = String(resolvedProjectRow.venture).trim();
  }

  if (!venture && taskRow?.project) {
    const taskProject = getProjectByName(taskRow.project);
    if (taskProject?.venture) {
      venture = String(taskProject.venture).trim();
    }
  }

  return { venture, project, task };
}

function getRecordAddedAt(row) {
  return row?.createdAt ? new Date(row.createdAt).getTime() : 0;
}

function canArchiveRecord(tableKey) {
  return ARCHIVABLE_TABLE_KEYS.has(tableKey);
}

function isRecordArchived(row = {}) {
  return Boolean(row?.archived ?? row?.custom_fields?.archived);
}

function getArchivedViewMode(tableKey) {
  return state.archivedRecordViews[tableKey] === "archived" ? "archived" : "active";
}

function setArchivedViewMode(tableKey, mode) {
  state.archivedRecordViews[tableKey] = mode === "archived" ? "archived" : "active";
}

function mapRecordToSupabase(tableKey, record) {
  const { createdAt, ...rest } = record;
  const defaults = jsonColumnDefaults[tableKey] ?? {};
  const normalized = Object.fromEntries(
    Object.entries(rest).map(([column, value]) => [column, value === "" ? null : value]),
  );
  const customFieldNames = getCustomFieldNames(tableKey);
  const customFields = isPlainObject(normalized.custom_fields) ? { ...normalized.custom_fields } : {};
  customFieldNames.forEach((fieldName) => {
    if (Object.hasOwn(normalized, fieldName)) {
      customFields[fieldName] = normalized[fieldName];
      delete normalized[fieldName];
    }
  });
  if (canArchiveRecord(tableKey) && Object.hasOwn(normalized, "archived")) {
    customFields.archived = Boolean(normalized.archived);
    delete normalized.archived;
  }
  normalized.custom_fields = customFields;
  if (tableKey === "documents") {
    const mergedLinks = [
      ...(Array.isArray(normalized.links) ? normalized.links : []),
      ...(Array.isArray(normalized.related_assets) ? normalized.related_assets : []),
      ...(Array.isArray(normalized.related_events) ? normalized.related_events : []),
      ...(Array.isArray(normalized.related_transactions) ? normalized.related_transactions : []),
    ]
      .map((value) => String(value ?? "").trim())
      .filter(Boolean);
    normalized.links = Array.from(new Set(mergedLinks));
  }
  Object.entries(defaults).forEach(([column, fallback]) => {
    if (normalized[column] == null || normalized[column] === "") {
      normalized[column] = Array.isArray(fallback) ? [...fallback] : fallback;
    }
  });
  const payload = {
    ...normalized,
    created_at: createdAt ?? new Date().toISOString(),
  };
  const allowedColumns = remoteTableColumns[tableKey];
  if (!allowedColumns) return payload;
  return Object.fromEntries(
    Object.entries(payload).filter(([column]) => allowedColumns.includes(column)),
  );
}

function mapRecordFromSupabase(tableKey, row) {
  const { created_at, custom_fields, ...rest } = row;
  const customFields = isPlainObject(custom_fields) ? custom_fields : {};
  return {
    ...rest,
    ...customFields,
    custom_fields: customFields,
    createdAt: created_at ?? null,
  };
}

function canShareRecord(tableKey) {
  return tableKey === "ventures" || tableKey === "projects";
}

function getRecordSharedNotesKey(tableKey, recordId) {
  return `${tableKey}:${recordId}`;
}

function normalizeSharedNote(note = {}) {
  return {
    id: String(note.id ?? ""),
    parentNoteId: String(note.parentNoteId ?? note.parent_note_id ?? ""),
    subject: String(note.subject ?? ""),
    content: String(note.content ?? ""),
    authorRole: String(note.authorRole ?? note.author_role ?? "Shared user"),
    createdAt: note.createdAt ?? note.created_at ?? null,
    canDelete: Boolean(note.canDelete ?? note.can_delete),
  };
}

function normalizeSharedBundle(bundle = {}) {
  const targetTable = String(bundle.targetTable ?? bundle.share?.targetTable ?? "").trim();
  const normalizedLinked = {};
  tables.forEach((table) => {
    const rows = Array.isArray(bundle.linked?.[table.key]) ? bundle.linked[table.key] : [];
    normalizedLinked[table.key] = rows.map((row) => mapRecordFromSupabase(table.key, row));
  });

  return {
    ...bundle,
    targetTable,
    target: targetTable ? mapRecordFromSupabase(targetTable, bundle.target ?? {}) : null,
    linked: normalizedLinked,
    notes: Array.isArray(bundle.notes) ? bundle.notes.map(normalizeSharedNote) : [],
  };
}

function generateSecureToken(byteLength = 32) {
  const bytes = new Uint8Array(byteLength);
  globalThis.crypto.getRandomValues(bytes);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function getShareUrl(token) {
  const url = new URL(globalThis.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set(SHARE_ROUTE_PARAM, token);
  return url.toString();
}

function getSharedAuthorKey(token = state.sharedToken) {
  const storageKey = `${SHARED_NOTE_AUTHOR_PREFIX}${token}`;
  let value = "";
  try {
    value = String(globalThis.localStorage?.getItem(storageKey) ?? "").trim();
  } catch {
    value = "";
  }
  if (value.length >= 32) return value;
  value = generateSecureToken(32);
  try {
    globalThis.localStorage?.setItem(storageKey, value);
  } catch {
    // Keep the runtime key even when storage is unavailable.
  }
  return value;
}

async function createShareLinkForRecord(tableKey, recordId, password = "") {
  if (!supabaseClient) throw new Error("Supabase client is unavailable. Share link was not created.");
  if (!canShareRecord(tableKey)) throw new Error("Only Ventures and Projects can be shared.");

  const token = generateSecureToken(32);
  const actor = getCurrentSidebarUser();
  const { data: result, error } = await supabaseClient.rpc("create_share_link", {
    p_token: token,
    p_target_table: tableKey,
    p_target_id: recordId,
    p_password: String(password ?? ""),
    p_created_by: actor?.name || actor?.email || actor?.id || "System",
  });

  if (error) throw error;
  return {
    ...(isPlainObject(result) ? result : {}),
    token,
    url: getShareUrl(token),
  };
}

async function fetchRecordSharedNotes(tableKey, recordId) {
  if (!supabaseClient || !canShareRecord(tableKey) || !recordId) return [];
  const { data: rows, error } = await supabaseClient.rpc("get_record_shared_notes", {
    p_target_table: tableKey,
    p_target_id: recordId,
  });
  if (error) throw error;
  const notes = Array.isArray(rows)
    ? rows.map((note) => ({ ...normalizeSharedNote(note), canDelete: true }))
    : [];
  const key = getRecordSharedNotesKey(tableKey, recordId);
  state.recordSharedNotes[key] = notes;
  return notes;
}

async function ensureRecordSharedNotes(tableKey, recordId) {
  const key = getRecordSharedNotesKey(tableKey, recordId);
  if (!canShareRecord(tableKey) || state.recordSharedNotes[key] || state.recordSharedNotesLoading[key]) return;
  state.recordSharedNotesLoading[key] = true;
  state.recordSharedNotesError[key] = "";
  try {
    await fetchRecordSharedNotes(tableKey, recordId);
  } catch (error) {
    console.error("Shared notes load failed", error);
    state.recordSharedNotesError[key] = `Notes failed to load: ${error?.message ?? "Unknown error"}`;
  } finally {
    state.recordSharedNotesLoading[key] = false;
    if (state.detailTableKey === tableKey && state.detailRecordId === recordId) renderHeroPanel();
  }
}

async function loadSharedBundle({ password = state.sharedPassword } = {}) {
  if (!supabaseClient) {
    state.sharedError = "Supabase client is unavailable. Shared page cannot load.";
    state.sharedLoading = false;
    renderSharedPage();
    return false;
  }

  state.sharedLoading = true;
  state.sharedError = "";
  renderSharedPage();

  try {
    const authorKey = state.sharedAuthorKey || getSharedAuthorKey(state.sharedToken);
    const { data: result, error } = await supabaseClient.rpc("get_shared_bundle", {
      p_token: state.sharedToken,
      p_password: password || "",
      p_author_key: authorKey,
    });
    if (error) throw error;
    if (!result?.ok) {
      state.sharedBundle = null;
      state.sharedError = result?.error || "Shared link could not be opened.";
      state.sharedLoading = false;
      renderSharedPage();
      return false;
    }
    state.sharedPassword = password || "";
    state.sharedAuthorKey = authorKey;
    state.sharedBundle = normalizeSharedBundle(result);
    applySharedBundleToRuntime(state.sharedBundle);
    state.sharedLoading = false;
    renderSharedPage();
    return true;
  } catch (error) {
    console.error("Shared page load failed", error);
    state.sharedBundle = null;
    state.sharedError = error?.message ?? "Shared link could not be opened.";
    state.sharedLoading = false;
    renderSharedPage();
    return false;
  }
}

function applySharedBundleToRuntime(bundle) {
  if (!bundle?.targetTable || !bundle.target) return;
  tables.forEach((table) => {
    const linkedRows = Array.isArray(bundle.linked?.[table.key]) ? bundle.linked[table.key] : [];
    data[table.key] = table.key === bundle.targetTable
      ? [bundle.target, ...linkedRows.filter((row) => row.id !== bundle.target.id)]
      : linkedRows;
  });
  hydrateDocumentRelationFieldsFromLinks();
  normalizeAllHierarchyData();
}

async function addSharedNote(subject, content) {
  if (!supabaseClient) throw new Error("Supabase client is unavailable. Note was not saved.");
  const { data: result, error } = await supabaseClient.rpc("add_shared_note", {
    p_token: state.sharedToken,
    p_password: state.sharedPassword || "",
    p_author_key: state.sharedAuthorKey || getSharedAuthorKey(state.sharedToken),
    p_subject: subject,
    p_content: content,
  });
  if (error) throw error;
  if (!result?.ok) throw new Error(result?.error || "Note was not saved.");
  await loadSharedBundle({ password: state.sharedPassword });
  return normalizeSharedNote(result.note);
}

async function addSharedNoteReply(parentNoteId, content) {
  if (!supabaseClient) throw new Error("Supabase client is unavailable. Reply was not saved.");
  const { data: result, error } = await supabaseClient.rpc("add_shared_note_reply", {
    p_token: state.sharedToken,
    p_password: state.sharedPassword || "",
    p_author_key: state.sharedAuthorKey || getSharedAuthorKey(state.sharedToken),
    p_parent_note_id: parentNoteId,
    p_content: content,
  });
  if (error) throw error;
  if (!result?.ok) throw new Error(result?.error || "Reply was not saved.");
  await loadSharedBundle({ password: state.sharedPassword });
  return normalizeSharedNote(result.note);
}

async function deleteSharedNote(noteId) {
  if (!supabaseClient) throw new Error("Supabase client is unavailable. Note was not deleted.");
  const { data: result, error } = await supabaseClient.rpc("delete_shared_note", {
    p_token: state.sharedToken,
    p_password: state.sharedPassword || "",
    p_author_key: state.sharedAuthorKey || getSharedAuthorKey(state.sharedToken),
    p_note_id: noteId,
  });
  if (error) throw error;
  if (!result?.ok || !result?.deleted) throw new Error("Note was not deleted.");
  await loadSharedBundle({ password: state.sharedPassword });
  return true;
}

async function addRecordSharedNoteReply(tableKey, recordId, parentNoteId, content) {
  if (!supabaseClient) throw new Error("Supabase client is unavailable. Reply was not saved.");
  const actor = getCurrentSidebarUser();
  const { data: result, error } = await supabaseClient.rpc("add_record_shared_note_reply", {
    p_target_table: tableKey,
    p_target_id: recordId,
    p_parent_note_id: parentNoteId,
    p_content: content,
    p_author_label: actor?.name || actor?.email || actor?.role || "Internal user",
  });
  if (error) throw error;
  if (!result?.ok) throw new Error(result?.error || "Reply was not saved.");
  await fetchRecordSharedNotes(tableKey, recordId);
  renderHeroPanel();
  return normalizeSharedNote(result.note);
}

async function deleteRecordSharedNote(tableKey, recordId, noteId) {
  if (!supabaseClient) throw new Error("Supabase client is unavailable. Note was not deleted.");
  const { data: result, error } = await supabaseClient.rpc("delete_record_shared_note", {
    p_target_table: tableKey,
    p_target_id: recordId,
    p_note_id: noteId,
  });
  if (error) throw error;
  if (!result?.ok || !result?.deleted) throw new Error("Note was not deleted.");
  await fetchRecordSharedNotes(tableKey, recordId);
  renderHeroPanel();
  return true;
}

function isPeopleNameConflict(error) {
  const message = String(error?.message ?? error?.details ?? "").toLowerCase();
  return Boolean(
    error?.code === "23505"
    || message.includes("people_name_key")
    || message.includes("duplicate key value")
  );
}

async function findSupabasePeopleByName(name) {
  if (!supabaseClient) return null;
  const normalizedName = String(name ?? "").trim();
  if (!normalizedName) return null;

  const { data: rows, error } = await supabaseClient
    .from("people")
    .select("*")
    .eq("name", normalizedName)
    .limit(1);

  if (error) throw error;
  return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
}

function hydrateDocumentRelationFieldsFromLinks() {
  data.documents = (data.documents ?? []).map((record) => {
    const relatedAssets = getLinkedRecordsFromDocumentLinks(record, "assets").map((row) => String(row?.name ?? "").trim()).filter(Boolean);
    const relatedEvents = getLinkedRecordsFromDocumentLinks(record, "events").map((row) => String(row?.title ?? "").trim()).filter(Boolean);
    const relatedTransactions = getLinkedRecordsFromDocumentLinks(record, "transactions").map((row) => String(row?.reference ?? "").trim()).filter(Boolean);

    return {
      ...record,
      related_assets: relatedAssets,
      related_events: relatedEvents,
      related_transactions: relatedTransactions,
    };
  });
}

async function hydrateDataFromSupabase() {
  if (!supabaseClient) {
    throw new Error("Supabase client unavailable on window");
  }
  const entries = await Promise.all(tables.map(async (table) => {
    const { data: rows, error } = await supabaseClient
      .from(table.key)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return [table.key, (rows ?? []).map((row) => mapRecordFromSupabase(table.key, row))];
  }));

  entries.forEach(([tableKey, rows]) => {
    data[tableKey] = rows;
  });
  hydrateDocumentRelationFieldsFromLinks();
}

async function syncRecordToSupabase(tableKey, record, { mode = "upsert" } = {}) {
  if (!REMOTE_TABLE_KEYS.has(tableKey)) {
    throw new Error(`Supabase table is not configured for ${tableKey}.`);
  }
  if (!supabaseClient) {
    throw new Error("Supabase client is unavailable. The record was not saved.");
  }
  const payload = mapRecordToSupabase(tableKey, record);
  let query = null;

  if (mode === "insert") {
    if (tableKey === "people" && String(payload.name ?? "").trim()) {
      const existingRemoteRow = await findSupabasePeopleByName(payload.name);
      if (existingRemoteRow?.id) {
        query = supabaseClient.from(tableKey).update(payload).eq("id", existingRemoteRow.id).select();
      }
    }
    if (!query) {
      query = supabaseClient.from(tableKey).insert(payload).select();
    }
  } else if (mode === "update") {
    query = supabaseClient.from(tableKey).update(payload).eq("id", record.id).select();
  } else {
    const hasExistingRecord = data[tableKey]?.some((item) => item.id === record.id);
    query = hasExistingRecord
      ? supabaseClient.from(tableKey).update(payload).eq("id", record.id).select()
      : supabaseClient.from(tableKey).insert(payload).select();
  }

  const { data: rows, error } = await query;
  if (error) {
    if (tableKey === "people" && mode === "insert" && isPeopleNameConflict(error)) {
      const existingRemoteRow = await findSupabasePeopleByName(payload.name);
      if (existingRemoteRow?.id) {
        const retry = await supabaseClient.from(tableKey).update(payload).eq("id", existingRemoteRow.id).select();
        if (retry.error) throw retry.error;
        const retryRow = Array.isArray(retry.data) ? retry.data[0] ?? null : retry.data ?? null;
        return retryRow ? mapRecordFromSupabase(tableKey, retryRow) : null;
      }
    }
    throw error;
  }
  const syncedRow = Array.isArray(rows) ? rows[0] ?? null : rows ?? null;
  if (!syncedRow) {
    throw new Error("Supabase did not return the saved record. The UI was not updated.");
  }
  return mapRecordFromSupabase(tableKey, syncedRow);
}

async function removeRecordFromSupabase(tableKey, recordId) {
  if (!REMOTE_TABLE_KEYS.has(tableKey)) {
    throw new Error(`Supabase table is not configured for ${tableKey}.`);
  }
  if (!supabaseClient) {
    throw new Error("Supabase client is unavailable. The record was not deleted.");
  }
  const { data: rows, error } = await supabaseClient.from(tableKey).delete().eq("id", recordId).select("id");
  if (error) throw error;
  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error("Supabase did not delete the record. The UI was not updated.");
  }
  return rows;
}

async function refreshRemoteData({ syncHierarchy = false, render = true } = {}) {
  if (!supabaseClient) return false;
  if (!remoteRefreshPromise) {
    remoteRefreshPromise = hydrateDataFromSupabase()
      .then(() => {
        normalizeAllHierarchyData();
        if (render) renderAll();
        return true;
      })
      .finally(() => {
        remoteRefreshPromise = null;
      });
  }
  return remoteRefreshPromise;
}

function scheduleRemoteRefresh(options = {}) {
  if (!supabaseClient) return;
  globalThis.clearTimeout(remoteRefreshTimeoutId);
  remoteRefreshTimeoutId = globalThis.setTimeout(() => {
    refreshRemoteData(options).catch((error) => {
      console.error("Scheduled Supabase refresh failed", error);
    });
  }, REMOTE_REFRESH_DEBOUNCE_MS);
}

function setupSupabaseRealtime() {
  if (!supabaseClient || remoteRealtimeChannel || typeof supabaseClient.channel !== "function") return;

  let channel = supabaseClient.channel("gattabara-realtime");
  tables.forEach((table) => {
    channel = channel.on(
      "postgres_changes",
      { event: "*", schema: "public", table: table.key },
      () => {
        scheduleRemoteRefresh({ syncHierarchy: true });
      },
    );
  });

  channel = channel.on(
    "postgres_changes",
    { event: "*", schema: "public", table: FORM_CONFIG_TABLE },
    () => {
      loadFormConfigFromSupabase()
        .then(() => {
          renderSidebarNav();
          renderMeta();
          renderHeroPanel();
        })
        .catch((error) => {
          console.error("Supabase form settings realtime refresh failed", error);
        });
    },
  );

  channel = channel.on(
    "postgres_changes",
    { event: "*", schema: "public", table: ADMIN_USERS_TABLE },
    () => {
      refreshAdminUsersFromSupabase({ render: state.activeNav === "admin" && state.adminView === "users" })
        .catch((error) => {
          console.error("Supabase users realtime refresh failed", error);
        });
    },
  );

  channel = channel.on(
    "postgres_changes",
    { event: "INSERT", schema: "public", table: AUDIT_LOGS_TABLE },
    () => {
      refreshAuditLogsFromSupabase({ render: state.activeNav === "audit" })
        .catch((error) => {
          console.error("Supabase audit realtime refresh failed", error);
        });
    },
  );

  remoteRealtimeChannel = channel.subscribe((status) => {
    if (status === "CHANNEL_ERROR") {
      console.warn("Supabase realtime subscription failed; falling back to fetch refreshes.");
    }
  });
}

function getRecordFilterState(tableKey) {
  if (!state.recordFilters[tableKey]) {
    state.recordFilters[tableKey] = {
      venture: "all",
      project: "all",
      type: "all",
      status: "all",
      order: "newest",
    };
  }
  return state.recordFilters[tableKey];
}

function getFilterOptions(tableKey, fieldName) {
  const rows = data[tableKey] ?? [];
  const values = new Set();
  const targetTableKey = fieldName === "venture" ? "ventures" : fieldName === "project" ? "projects" : null;

  rows.forEach((row) => {
    const rawValue = row?.[fieldName];
    if (Array.isArray(rawValue)) {
      rawValue.forEach((item) => values.add(String(item)));
    } else if (rawValue) {
      values.add(String(rawValue));
    }

    if (!targetTableKey) return;

    const connections = getRecordConnections(tableKey, row);
    connections.forEach((connection) => {
      connection.items.forEach((item) => {
        if (item.tableKey === targetTableKey) {
          const label = getRecordLabel(item.tableKey, item.row);
          if (label) values.add(String(label));
        }
      });
    });
  });

  return Array.from(values).sort((a, b) => a.localeCompare(b));
}

function getRowFilterMatchValue(row, fieldName) {
  const value = row?.[fieldName];
  if (Array.isArray(value)) return value.map((item) => getEntryLabel(item)).filter(Boolean);
  return value ? [String(value)] : [];
}

function getLinkedFilterValues(tableKey, row, fieldName) {
  const targetTableKey = fieldName === "venture" ? "ventures" : fieldName === "project" ? "projects" : null;
  if (!targetTableKey) return [];

  const values = [];
  const connections = getRecordConnections(tableKey, row);
  connections.forEach((connection) => {
    connection.items.forEach((item) => {
      if (item.tableKey === targetTableKey) {
        const label = getRecordLabel(item.tableKey, item.row);
        if (label) values.push(String(label));
      }
    });
  });
  return values;
}

function getFilteredAndSortedRows(table) {
  const query = state.search.trim().toLowerCase();
  const filters = getRecordFilterState(table.key);
  const archivedViewMode = getArchivedViewMode(table.key);

  let rows = data[table.key].filter((row) => {
    if (canArchiveRecord(table.key) && isRecordArchived(row) !== (archivedViewMode === "archived")) return false;

    if (query) {
      const matchesSearch = table.listColumns.some((column) => formatCell(table.key, column, row).toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    if (filters.venture !== "all") {
      const ventureValues = getRowFilterMatchValue(row, "venture");
      const linkedVentureValues = getLinkedFilterValues(table.key, row, "venture");
      if (![...ventureValues, ...linkedVentureValues].includes(filters.venture)) return false;
    }

    if (filters.project !== "all") {
      const projectValues = getRowFilterMatchValue(row, "project");
      const linkedProjectValues = getLinkedFilterValues(table.key, row, "project");
      if (![...projectValues, ...linkedProjectValues].includes(filters.project)) return false;
    }

    if ((table.key === "documents" || table.key === "events") && filters.type !== "all") {
      if (String(row.type || "") !== filters.type) return false;
    }

    if (table.key === "documents" && filters.status !== "all") {
      if (String(row.status || "") !== filters.status) return false;
    }

    if (table.key === "assets" && filters.status !== "all") {
      if (String(row.status || "") !== filters.status) return false;
    }

    return true;
  });

  rows = rows.slice().sort((left, right) => {
    const diff = getRecordAddedAt(right) - getRecordAddedAt(left);
    if (table.key === "assets") return diff;
    return filters.order === "oldest" ? -diff : diff;
  });

  return rows;
}

function clearLegacyWorkflowStorage() {
  try {
    ["gattabara.localTableCache", "gattabara.localPendingUpserts", "gattabara.localPendingDeletes"].forEach((key) => {
      globalThis.localStorage?.removeItem(key);
    });
  } catch {
    // Ignore storage failures; workflow records are never read from localStorage.
  }
}

function getRelationConfig(fieldName) {
  return relationFields[fieldName] ?? null;
}

function getRelationOptions(fieldName, currentTableKey, record = null) {
  const relation = getRelationConfig(fieldName);
  if (!relation) return [];

  const sourceTables = relation.tables ?? [relation.table];
  const hierarchy = getHierarchyContext(record);
  return sortOptionsAlpha(sourceTables.flatMap((tableKey) => {
    const table = tables.find((item) => item.key === tableKey);
    const rows = data[tableKey] ?? [];
    return rows
      .filter((row) => {
        if (currentTableKey === "tasks" && fieldName === "project") {
          if (!hierarchy.venture) return false;
          return String(row.venture ?? "") === hierarchy.venture;
        }

        if (currentTableKey === "tasks" && (fieldName === "parent_task" || fieldName === "depends_on")) {
          if (!hierarchy.project) return false;
          return String(row.project ?? "") === hierarchy.project;
        }

        if (hierarchyAttachmentTables.has(currentTableKey) && currentTableKey !== "assets" && fieldName === "project") {
          if (!hierarchy.venture) return false;
          return String(row.venture ?? "") === hierarchy.venture;
        }

        if (hierarchyAttachmentTables.has(currentTableKey) && fieldName === "task") {
          if (!hierarchy.project) return false;
          return String(row.project ?? "") === hierarchy.project;
        }

        return true;
      })
      .filter((row) => !((fieldName === "parent_task" || fieldName === "depends_on") && currentTableKey === "tasks" && row.id === record?.id))
      .map((row) => {
        const value = relation.labelField ? row[relation.labelField] : getRecordLabel(tableKey, row);
        const display = sourceTables.length > 1 && table ? `${value} (${table.title})` : value;
        return {
          value: String(value ?? ""),
          label: String(display ?? ""),
        };
      })
      .filter((option) => option.value);
  }));
}

function getTableByKey(tableKey) {
  return tables.find((item) => item.key === tableKey) ?? null;
}

function getRowsByFieldValue(tableKey, fieldName, value) {
  const rows = data[tableKey] ?? [];
  return rows.filter((row) => {
    const fieldValue = row[fieldName];
    if (Array.isArray(fieldValue)) return fieldValue.map(String).includes(String(value));
    return String(fieldValue ?? "") === String(value);
  });
}

function getLinkedDocumentsForRecord(targetTableKey, value) {
  const fieldName = targetTableKey === "assets"
    ? "related_assets"
    : targetTableKey === "events"
      ? "related_events"
      : targetTableKey === "transactions"
        ? "related_transactions"
        : null;

  if (!fieldName) return [];

  return (data.documents ?? []).filter((row) => {
    if (Array.isArray(row.links) && row.links.map(String).includes(String(value))) return true;
    const fieldValue = row[fieldName];
    if (Array.isArray(fieldValue)) return fieldValue.map(String).includes(String(value));
    return false;
  });
}

function getLinkedRecordsFromDocumentLinks(documentRecord, targetTableKey) {
  const linkValues = Array.isArray(documentRecord?.links)
    ? documentRecord.links.map((value) => String(value ?? "").trim()).filter(Boolean)
    : [];
  if (!linkValues.length) return [];

  return (data[targetTableKey] ?? []).filter((row) => {
    const label = String(getRecordLabel(targetTableKey, row) ?? "").trim();
    return label && linkValues.includes(label);
  });
}

function getLinkedTransactionsForAsset(assetValue) {
  const normalizedAsset = String(assetValue ?? "").trim();
  if (!normalizedAsset) return [];
  return (data.transactions ?? []).filter((row) => String(row?.project_asset ?? "").trim() === normalizedAsset);
}

function getLinkedDocumentsForTransactions(transactionRows = []) {
  const documentMap = new Map();
  transactionRows.forEach((row) => {
    const documentValues = Array.isArray(row?.documents) ? row.documents : [];
    documentValues.forEach((value) => {
      const normalized = String(value ?? "").trim();
      if (!normalized || documentMap.has(normalized)) return;
      const documentRow = (data.documents ?? []).find((item) => {
        const candidates = [item?.id, item?.title, item?.reference, item?.name]
          .map((entry) => String(entry ?? "").trim())
          .filter(Boolean);
        return candidates.includes(normalized);
      }) ?? null;
      if (documentRow) {
        documentMap.set(normalized, documentRow);
      }
    });
  });
  return Array.from(documentMap.values());
}

function getLinkedTransactionsForDocument(documentRecord) {
  const documentTokens = [
    documentRecord?.id,
    documentRecord?.reference,
    documentRecord?.title,
    documentRecord?.name,
  ]
    .map((value) => String(value ?? "").trim())
    .filter(Boolean);

  if (!documentTokens.length) return [];

  const matchedTransactions = (data.transactions ?? []).filter((row) => {
    const documentValues = Array.isArray(row?.documents) ? row.documents : [];
    return documentValues.some((value) => documentTokens.includes(String(value ?? "").trim()));
  });
  const fromLinks = getLinkedRecordsFromDocumentLinks(documentRecord, "transactions");
  return Array.from(new Map(
    [...matchedTransactions, ...fromLinks].map((row) => [String(row?.id ?? ""), row]),
  ).values());
}

function getLinkedAssetsForDocument(documentRecord) {
  const assetMap = new Map();
  const addAsset = (value) => {
    const normalized = String(value ?? "").trim();
    if (!normalized || assetMap.has(normalized)) return;
    const assetRow = data.assets.find((item) => String(item.name ?? "").trim() === normalized) ?? null;
    if (!assetRow) return;
    assetMap.set(normalized, assetRow);
  };

  (Array.isArray(documentRecord?.related_assets) ? documentRecord.related_assets : []).forEach(addAsset);
  getLinkedRecordsFromDocumentLinks(documentRecord, "assets").forEach((row) => addAsset(row.name));
  getLinkedTransactionsForDocument(documentRecord).forEach((row) => addAsset(row.project_asset));

  return Array.from(assetMap.values());
}

function getLinkedEventsForDocument(documentRecord) {
  const eventMap = new Map();
  const addEvent = (row) => {
    const eventId = String(row?.id ?? "").trim();
    if (!eventId || eventMap.has(eventId)) return;
    eventMap.set(eventId, row);
  };

  (Array.isArray(documentRecord?.related_events) ? documentRecord.related_events : [])
    .forEach((value) => {
      const normalized = String(value ?? "").trim();
      if (!normalized) return;
      const eventRow = (data.events ?? []).find((row) => String(row?.title ?? "").trim() === normalized) ?? null;
      if (eventRow) addEvent(eventRow);
    });
  getLinkedRecordsFromDocumentLinks(documentRecord, "events").forEach(addEvent);

  return Array.from(eventMap.values());
}

function getRecordReferenceLabel(tableKey, row) {
  const primary = tableKey === "people"
    ? formatPersonDisplayLabel(row)
    : row.name || row.title || row.reference || row.id;
  return String(primary ?? "");
}

function getDocumentSummaryText(record) {
  const body = String(record?.body ?? "").trim();
  if (body) return body;
  const type = String(record?.type ?? "").trim();
  const status = String(record?.status ?? "").trim();
  if (type && status) return `${type} · ${status}`;
  return type || status || "";
}

function getDocumentLocationLabel(record) {
  const venture = String(record?.venture ?? "").trim();
  const project = String(record?.project ?? "").trim();
  if (venture && project) return `${venture} (${project})`;
  return venture || project || "—";
}

function getRecordConnections(tableKey, record) {
  const connections = [];
  const row = record ?? {};
  const rowLabel = getRecordLabel(tableKey, row);
  const getConnectionLabel = (targetKey, fallback = "") => {
    const normalizedFallback = String(fallback ?? "").trim().toLowerCase();
    if (targetKey === "tasks" && normalizedFallback === "parent task") return "Parent tasks";
    if (targetKey === "tasks" && normalizedFallback === "subtasks") return "Subtasks";
    return getTableByKey(targetKey)?.title ?? titleCaseKey(fallback || targetKey);
  };
  const normalizeConnections = (items) => {
    const grouped = new Map();

    items.forEach((connection) => {
      const groupKey = `${connection.key ?? connection.label}:${connection.label}`;
      if (!grouped.has(groupKey)) {
        grouped.set(groupKey, {
          ...connection,
          items: [],
        });
      }

      const group = grouped.get(groupKey);
      if (connection.kind === "linked") group.kind = "linked";
      group.items.push(...connection.items);
    });

    return Array.from(grouped.values()).map((connection) => {
      const seen = new Set();
      connection.items = connection.items.filter((item) => {
        const itemKey = `${item.tableKey}:${item.id ?? item.label}`;
        if (seen.has(itemKey)) return false;
        seen.add(itemKey);
        return true;
      });
      return connection;
    });
  };

  const findRelatedRecord = (sourceTables, value, relation) => {
    for (const sourceTableKey of sourceTables) {
      const rows = data[sourceTableKey] ?? [];
      const found = rows.find((candidate) => {
        const candidateValue = relation?.labelField ? candidate[relation.labelField] : getRecordLabel(sourceTableKey, candidate);
        return String(candidateValue) === String(value);
      });
      if (found) {
        return {
          label: getRecordReferenceLabel(sourceTableKey, found),
          tableKey: sourceTableKey,
          id: found.id,
          row: found,
        };
      }
    }
    return null;
  };

  const addConnection = (label, items, key = null, kind = "linked") => {
    if (!items.length) return;
    connections.push({ label: getConnectionLabel(key, label), key, kind, items });
  };

  const relations = Object.entries(relationFields);
  relations.forEach(([fieldName, relation]) => {
    const value = row[fieldName];
    if (!value) return;
    const sourceTables = relation.tables ?? [relation.table];
    const values = Array.isArray(value) ? value : [value];
    const items = values
      .map((item) => {
        const normalized = getEntryLabel(item);
        return findRelatedRecord(sourceTables, normalized, relation);
      })
      .filter(Boolean);
    addConnection(fieldName.replaceAll("_", " "), items, sourceTables[0], "context");
  });

  if (tableKey === "ventures") {
    addConnection(
      "people",
      getRowsByFieldValue("people", "venture", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("people", item),
        tableKey: "people",
        id: item.id,
        row: item,
      })),
      "people",
      "linked",
    );
    addConnection(
      "projects",
      getRowsByFieldValue("projects", "venture", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("projects", item),
        tableKey: "projects",
        id: item.id,
        row: item,
      })),
      "projects",
      "linked",
    );
    addConnection(
      "transactions",
      getRowsByFieldValue("transactions", "venture", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("transactions", item),
        tableKey: "transactions",
        id: item.id,
        row: item,
      })),
      "transactions",
      "linked",
    );
  }

  if (tableKey === "assets") {
    const linkedTransactions = getLinkedTransactionsForAsset(rowLabel);
    addConnection(
      "transactions",
      linkedTransactions.map((item) => ({
        label: getRecordReferenceLabel("transactions", item),
        tableKey: "transactions",
        id: item.id,
        row: item,
      })),
      "transactions",
      "linked",
    );
    addConnection(
      "documents",
      [
        ...getLinkedDocumentsForRecord("assets", rowLabel),
        ...getLinkedDocumentsForTransactions(linkedTransactions),
      ].map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );
  }

  if (tableKey === "projects") {
    addConnection(
      "tasks",
      getRowsByFieldValue("tasks", "project", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("tasks", item),
        tableKey: "tasks",
        id: item.id,
        row: item,
      })),
      "tasks",
      "linked",
    );
    addConnection(
      "events",
      getRowsByFieldValue("events", "project", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("events", item),
        tableKey: "events",
        id: item.id,
        row: item,
      })),
      "events",
      "linked",
    );
    addConnection(
      "documents",
      getRowsByFieldValue("documents", "links", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );
  }

  if (tableKey === "people") {
    addConnection(
      "ventures",
      getPersonLinkedVentures(row),
      "ventures",
      "context",
    );
    addConnection(
      "projects",
      getRowsByFieldValue("projects", "lead", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("projects", item),
        tableKey: "projects",
        id: item.id,
        row: item,
      })),
      "projects",
      "linked",
    );
    addConnection(
      "tasks",
      (data.tasks ?? [])
        .filter((item) => {
          const owner = String(item.owner ?? "").trim();
          const external = String(item.external_shared_with ?? "").trim();
          const assignees = Array.isArray(item.assignees) ? item.assignees.map((name) => String(name).trim()) : [];
          return owner === rowLabel || external === rowLabel || assignees.includes(rowLabel);
        })
        .map((item) => ({
        label: getRecordReferenceLabel("tasks", item),
        tableKey: "tasks",
        id: item.id,
        row: item,
      })),
      "tasks",
      "linked",
    );
    addConnection(
      "events",
      getRowsByFieldValue("events", "participants", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("events", item),
        tableKey: "events",
        id: item.id,
        row: item,
      })),
      "events",
      "linked",
    );
    addConnection(
      "documents",
      getRowsByFieldValue("documents", "links", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );
  }

  if (tableKey === "tasks") {
    const taskPeople = [
      row.owner
        ? { name: row.owner, suffix: "Owner" }
        : null,
      ...(Array.isArray(row.assignees) ? row.assignees.map((name) => ({ name, suffix: "Assignee" })) : []),
      row.external_shared_with
        ? { name: row.external_shared_with, suffix: "External" }
        : null,
    ]
      .filter(Boolean)
      .map(({ name, suffix }) => {
        const found = data.people.find((item) => item.name === name) ?? null;
        if (!found) return null;
        return {
          label: `${formatPersonDisplayLabel(found)} · ${suffix}`,
          tableKey: "people",
          id: found.id,
          row: found,
        };
      })
      .filter((item, index, array) => item && array.findIndex((candidate) => candidate?.id === item.id) === index);

    addConnection("people", taskPeople, "people", "linked");
    addConnection(
      "documents",
      (data.documents ?? [])
        .filter((item) => String(item.task ?? "").trim() === rowLabel || (Array.isArray(item.links) && item.links.includes(rowLabel)))
        .map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );

    addConnection(
      "subtasks",
      getRowsByFieldValue("tasks", "parent_task", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("tasks", item),
        tableKey: "tasks",
        id: item.id,
        row: item,
      })),
      "tasks",
      "linked",
    );
  }

  if (tableKey === "events") {
    addConnection(
      "documents",
      getLinkedDocumentsForRecord("events", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );
  }

  if (tableKey === "transactions") {
    addConnection(
      "documents",
      getLinkedDocumentsForRecord("transactions", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );
  }

  if (tableKey === "documents") {
    addConnection(
      "assets",
      getLinkedAssetsForDocument(row).map((item) => ({
        label: getRecordReferenceLabel("assets", item),
        tableKey: "assets",
        id: item.id,
        row: item,
      })),
      "assets",
      "linked",
    );
    addConnection(
      "events",
      getLinkedEventsForDocument(row).map((item) => ({
        label: getRecordReferenceLabel("events", item),
        tableKey: "events",
        id: item.id,
        row: item,
      })),
      "events",
      "linked",
    );
    addConnection(
      "transactions",
      getLinkedTransactionsForDocument(row).map((item) => ({
        label: getRecordReferenceLabel("transactions", item),
        tableKey: "transactions",
        id: item.id,
        row: item,
      })),
      "transactions",
      "linked",
    );
  }

  return normalizeConnections(connections);
}

function getTreeNodeKey(tableKey, record) {
  return `${tableKey}:${record?.id ?? record?.name ?? record?.title ?? ""}`;
}

function shouldExpandTreeItem(rootTableKey, parentTableKey, depth, childTableKey) {
  if (rootTableKey === "ventures") {
    if (depth === 0) return childTableKey === "projects";
    if (depth === 1 && parentTableKey === "projects") {
      return ["tasks", "events", "documents"].includes(childTableKey);
    }
    if (depth === 2 && parentTableKey === "tasks") {
      return ["people", "tasks"].includes(childTableKey);
    }
    return false;
  }

  if (rootTableKey === "projects") {
    if (depth === 0) {
      return ["tasks", "events", "documents"].includes(childTableKey);
    }
    if (depth === 1 && parentTableKey === "tasks") {
      return ["people", "tasks"].includes(childTableKey);
    }
    return false;
  }

  if (rootTableKey === "tasks" && depth === 0) {
    return ["people", "tasks"].includes(childTableKey);
  }

  return false;
}

function getTreeNodeToneClass(tableKey, record) {
  if (tableKey === "people") {
    const ventureName = record?.venture || "";
    if (!ventureName || ventureName === "Gattabara Games") return "";
    return getVentureTone(ventureName);
  }

  if (tableKey === "ventures") {
    const ventureName = record?.name || "";
    if (!ventureName || ventureName === "Gattabara Games") return "";
    return getVentureTone(ventureName);
  }

  return "";
}

function createTreeLeafNode(tableKey, row, label = null) {
  return {
    id: row?.id ?? null,
    tableKey,
    label: label || getRecordLabel(tableKey, row),
    iconKey: tableKey,
    toneClass: getTreeNodeToneClass(tableKey, row),
    isRoot: false,
    children: [],
  };
}

function createTreeRecordNode(tableKey, row, children = [], options = {}) {
  return {
    id: row?.id ?? null,
    tableKey,
    label: options.label || getRecordLabel(tableKey, row),
    iconKey: options.iconKey || tableKey,
    toneClass: options.toneClass ?? getTreeNodeToneClass(tableKey, row),
    isRoot: Boolean(options.isRoot),
    children,
  };
}

function createTreeGroup(label, children) {
  if (!children?.length) return null;
  return {
    isGroup: true,
    label,
    children,
  };
}

function getRecordActionIcon(action) {
  if (action === "edit") {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 20h9"></path>
        <path d="m16.5 3.5 4 4L7 21l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    `;
  }

  if (action === "archive") {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 7h18"></path>
        <path d="M5 7l1.2-3h11.6L19 7"></path>
        <path d="M5 7v13h14V7"></path>
        <path d="M10 12h4"></path>
      </svg>
    `;
  }

  if (action === "restore") {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 7h18"></path>
        <path d="M5 7l1.2-3h11.6L19 7"></path>
        <path d="M5 7v13h14V7"></path>
        <path d="M12 16V10"></path>
        <path d="M9 13l3-3 3 3"></path>
      </svg>
    `;
  }

  if (action === "delete") {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 6h18"></path>
        <path d="M8 6V4h8v2"></path>
        <path d="M19 6l-1 14H6L5 6"></path>
        <path d="M10 11v6"></path>
        <path d="M14 11v6"></path>
      </svg>
    `;
  }

  return "";
}

function renderRecordActionIconButton(action, label, attrs = "") {
  return `
    <button class="record-action-button record-action-icon-button" type="button" ${attrs} aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}">
      ${getRecordActionIcon(action)}
    </button>
  `;
}

function renderArchiveRecordActionButton(tableKey, row) {
  if (!canArchiveRecord(tableKey)) {
    return renderRecordActionIconButton("delete", `Delete ${row.name || row.title || row.reference || "record"}`, `data-record-action="delete" data-record-id="${escapeHtml(row.id)}"`);
  }

  const archived = isRecordArchived(row);
  const action = archived ? "restore" : "archive";
  const label = archived
    ? `Restore ${row.name || row.title || row.reference || "record"}`
    : `Archive ${row.name || row.title || row.reference || "record"}`;
  return renderRecordActionIconButton(action, label, `data-record-action="${action}" data-record-id="${escapeHtml(row.id)}"`);
}

function getTaskPeopleTreeNodes(taskRow) {
  const nodes = [
    taskRow.owner
      ? { name: taskRow.owner, suffix: "Owner" }
      : null,
    ...(Array.isArray(taskRow.assignees) ? taskRow.assignees.map((name) => ({ name, suffix: "Assignee" })) : []),
    taskRow.external_shared_with
      ? { name: taskRow.external_shared_with, suffix: "External" }
      : null,
  ]
    .filter(Boolean)
    .map(({ name, suffix }) => {
      const found = data.people.find((item) => item.name === name) ?? null;
      if (!found) return null;
      return createTreeLeafNode("people", found, `${formatPersonDisplayLabel(found)} · ${suffix}`);
    })
    .filter(Boolean);

  const seen = new Set();
  return nodes.filter((node) => {
    const key = `${node.tableKey}:${node.id}:${node.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getTaskParentRow(taskRow) {
  const parentTitle = String(taskRow?.parent_task ?? "").trim();
  if (!parentTitle) return null;
  return data.tasks.find((item) => String(item.title ?? "").trim() === parentTitle) ?? null;
}

function getTaskAncestorChain(taskRow) {
  if (!taskRow) return [];
  const chain = [];
  const seen = new Set();
  let current = taskRow;

  while (current && !seen.has(current.id)) {
    chain.unshift(current);
    seen.add(current.id);
    current = getTaskParentRow(current);
  }

  return chain;
}

function getHierarchyAttachmentRowsForLevel(tableKey, level, levelRecord) {
  const rows = data[tableKey] ?? [];
  if (level === "task") {
    const taskTitle = String(levelRecord?.title ?? "").trim();
    return rows.filter((item) => String(item?.task ?? "").trim() === taskTitle);
  }

  if (level === "project") {
    const projectName = String(levelRecord?.name ?? "").trim();
    return rows.filter((item) => {
      if (String(item?.project ?? "").trim() !== projectName) return false;
      return !String(item?.task ?? "").trim();
    });
  }

  if (level === "venture") {
    const ventureName = String(levelRecord?.name ?? "").trim();
    return rows.filter((item) => {
      if (String(item?.venture ?? "").trim() !== ventureName) return false;
      return !String(item?.project ?? "").trim() && !String(item?.task ?? "").trim();
    });
  }

  return [];
}

function createAttachmentGroup(tableKey, rows) {
  return createTreeGroup(
    getTableByKey(tableKey)?.title ?? titleCaseKey(tableKey),
    rows.map((row) => createTreeLeafNode(tableKey, row, getRecordReferenceLabel(tableKey, row))),
  );
}

function getFocusedAttachmentConnectionGroups(tableKey, row) {
  const hiddenKeys = new Set(["ventures", "projects", "tasks"]);
  return getRecordConnections(tableKey, row)
    .filter((connection) => !hiddenKeys.has(String(connection.key ?? "").trim()));
}

function buildFocusedAttachmentSubtree(tableKey, row) {
  if (!row) return null;
  const children = getFocusedAttachmentConnectionGroups(tableKey, row)
    .map((connection) => createTreeGroup(
      connection.label,
      connection.items.map((item) => createTreeLeafNode(item.tableKey, item.row, item.label)),
    ))
    .filter(Boolean);

  return createTreeRecordNode(tableKey, row, children);
}

function appendFocusedAttachmentNode(children, onlyRecord) {
  if (!onlyRecord?.tableKey || !onlyRecord?.row) return;
  const attachmentNode = buildFocusedAttachmentSubtree(onlyRecord.tableKey, onlyRecord.row);
  const table = getTableByKey(onlyRecord.tableKey);
  const group = createTreeGroup(table?.title ?? titleCaseKey(onlyRecord.tableKey), attachmentNode ? [attachmentNode] : []);
  if (group) children.push(group);
}

function appendHierarchyLevelAttachments(children, level, levelRecord, options = {}) {
  ["assets", "events", "documents", "transactions"].forEach((tableKey) => {
    const rows = options.onlyRecord && options.onlyRecord.tableKey === tableKey
      ? [options.onlyRecord.row]
      : getHierarchyAttachmentRowsForLevel(tableKey, level, levelRecord);
    const group = createAttachmentGroup(tableKey, rows);
    if (group) children.push(group);
  });
}

function buildHierarchyTaskSubtree(taskRow) {
  const children = [];
  const peopleGroup = createTreeGroup("People", getTaskPeopleTreeNodes(taskRow));
  if (peopleGroup) children.push(peopleGroup);
  appendHierarchyLevelAttachments(children, "task", taskRow);

  const subtaskNodes = (data.tasks ?? [])
    .filter((item) => String(item.parent_task ?? "").trim() === String(taskRow.title ?? "").trim())
    .map((item) => buildHierarchyTaskSubtree(item));
  const taskGroup = createTreeGroup("Tasks", subtaskNodes);
  if (taskGroup) children.push(taskGroup);

  return createTreeRecordNode("tasks", taskRow, children);
}

function buildFocusedTaskChain(taskChain, options = {}) {
  const [currentTask, ...remainingChain] = taskChain;
  if (!currentTask) return null;

  const children = [];
  if (remainingChain.length) {
    const nextTaskNode = buildFocusedTaskChain(remainingChain, options);
    const taskGroup = createTreeGroup("Tasks", nextTaskNode ? [nextTaskNode] : []);
    if (taskGroup) children.push(taskGroup);
  } else {
    const peopleGroup = createTreeGroup("People", getTaskPeopleTreeNodes(currentTask));
    if (peopleGroup) children.push(peopleGroup);

    if (options.onlyRecord) {
      appendFocusedAttachmentNode(children, options.onlyRecord);
    } else {
      appendHierarchyLevelAttachments(children, "task", currentTask);
      const subtaskNodes = (data.tasks ?? [])
        .filter((item) => String(item.parent_task ?? "").trim() === String(currentTask.title ?? "").trim())
        .map((item) => buildHierarchyTaskSubtree(item));
      const taskGroup = createTreeGroup("Tasks", subtaskNodes);
      if (taskGroup) children.push(taskGroup);
    }
  }

  return createTreeRecordNode("tasks", currentTask, children);
}

function buildHierarchyProjectSubtree(projectRow, options = {}) {
  const children = [];

  if (options.focusedTaskChain?.length) {
    const focusedTaskNode = buildFocusedTaskChain(options.focusedTaskChain, { onlyRecord: options.onlyRecord });
    const taskGroup = createTreeGroup("Tasks", focusedTaskNode ? [focusedTaskNode] : []);
    if (taskGroup) children.push(taskGroup);
  } else {
    if (options.onlyRecord) {
      appendFocusedAttachmentNode(children, options.onlyRecord);
    } else {
      appendHierarchyLevelAttachments(children, "project", projectRow);
    }
    const taskNodes = (data.tasks ?? [])
      .filter((item) => String(item.project ?? "").trim() === String(projectRow.name ?? "").trim() && !String(item.parent_task ?? "").trim())
      .map((item) => buildHierarchyTaskSubtree(item));
    const taskGroup = createTreeGroup("Tasks", taskNodes);
    if (taskGroup) children.push(taskGroup);
  }

  return createTreeRecordNode("projects", projectRow, children);
}

function buildHierarchyTree(tableKey, record) {
  const hierarchyTables = new Set(["ventures", "projects", "tasks", "documents", "assets", "events", "transactions"]);
  if (!hierarchyTables.has(tableKey)) return null;

  const projectRow = tableKey === "projects"
    ? record
    : tableKey === "tasks"
      ? getProjectByName(record?.project)
      : String(record?.project ?? "").trim()
        ? getProjectByName(record.project)
        : null;
  const taskRow = tableKey === "tasks"
    ? record
    : String(record?.task ?? "").trim()
      ? getTaskByTitle(record.task)
      : null;
  const ventureName = tableKey === "ventures"
    ? String(record?.name ?? "").trim()
    : tableKey === "projects"
      ? String(record?.venture ?? "").trim()
      : String(projectRow?.venture ?? record?.venture ?? "").trim();
  const ventureRow = ventureName ? getVentureByName(ventureName) : null;
  const taskChain = getTaskAncestorChain(taskRow);
  const onlyRecord = ["documents", "assets", "events", "transactions"].includes(tableKey)
    ? { tableKey, row: record }
    : null;

  if (!ventureRow) {
    return createTreeRecordNode(tableKey, record, [], { isRoot: true });
  }

  const ventureChildren = [];
  if (tableKey === "ventures") {
    const peopleGroup = createTreeGroup("People", getVentureLinkedPeople(ventureRow));
    if (peopleGroup) ventureChildren.push(peopleGroup);
  }

  if (projectRow) {
    const projectNode = buildHierarchyProjectSubtree(projectRow, {
      focusedTaskChain: taskChain,
      onlyRecord,
    });
    const projectGroup = createTreeGroup("Projects", projectNode ? [projectNode] : []);
    if (projectGroup) ventureChildren.push(projectGroup);
  } else if (tableKey === "ventures") {
    appendHierarchyLevelAttachments(ventureChildren, "venture", ventureRow);
    const projectNodes = (data.projects ?? [])
      .filter((item) => String(item.venture ?? "").trim() === String(ventureRow.name ?? "").trim())
      .map((item) => buildHierarchyProjectSubtree(item));
    const projectGroup = createTreeGroup("Projects", projectNodes);
    if (projectGroup) ventureChildren.push(projectGroup);
  } else {
    appendFocusedAttachmentNode(ventureChildren, onlyRecord);
  }

  return createTreeRecordNode("ventures", ventureRow, ventureChildren, {
    isRoot: true,
    label: getRecordLabel("ventures", ventureRow),
    toneClass: getTreeNodeToneClass("ventures", ventureRow),
  });
}

function buildConnectionTree(tableKey, record, depth = 0, visited = new Set(), rootTableKey = tableKey) {
  const hierarchyRoot = depth === 0 ? buildHierarchyTree(tableKey, record) : null;
  if (hierarchyRoot) return hierarchyRoot;

  const nodeKey = getTreeNodeKey(tableKey, record);
  const nextVisited = new Set(visited);
  nextVisited.add(nodeKey);

  if (depth >= 4) {
    return null;
  }

  const connections = getRecordConnections(tableKey, record)
    .filter((connection) => depth === 0 || connection.kind !== "context");
  const children = [];

  connections.forEach((connection) => {
    const branchChildren = connection.items
      .map((item) => {
        if (!item?.row || !item?.id) return null;
        const childKey = getTreeNodeKey(item.tableKey, item.row);
        if (nextVisited.has(childKey)) return null;

        const shouldExpandChild = shouldExpandTreeItem(rootTableKey, tableKey, depth, item.tableKey);
        if (!shouldExpandChild) {
          return createTreeRecordNode(item.tableKey, item.row, [], {
            label: item.label || getRecordLabel(item.tableKey, item.row),
          });
        }

        return buildConnectionTree(item.tableKey, item.row, depth + 1, nextVisited, rootTableKey);
      })
      .filter(Boolean);

    const group = createTreeGroup(connection.label, branchChildren);
    if (group) children.push(group);
  });

  return createTreeRecordNode(tableKey, record, children, {
    isRoot: depth === 0,
  });
}

function renderConnectionTreeNode(node) {
  const baseClass = node.isRoot
    ? "connection-node connection-node-root"
    : node.isGroup
      ? "connection-node connection-node-group"
      : "connection-node";
  const nodeClass = `${baseClass}${node.toneClass ? ` ${node.toneClass}` : ""}`;
  const shouldStackChildren = node.isGroup
    && node.children?.length > 1
    && ["Assets", "Documents", "Transactions"].includes(node.label);

  const attrs = node.isGroup
    ? ""
    : `type="button" data-tree-open="${escapeHtml(node.tableKey)}" data-tree-record="${escapeHtml(node.id ?? "")}"`;

  const iconMarkup = !node.isGroup && node.iconKey
    ? `<span class="connection-node-icon" aria-hidden="true">${getTableIcon(node.iconKey)}</span>`
    : "";
  const rootRow = node.isRoot && node.id
    ? data[node.tableKey]?.find((item) => item.id === node.id) ?? null
    : null;
  const venturePrimaryContact = node.isRoot && node.tableKey === "ventures"
    ? String(rootRow?.primary_contact ?? "").trim()
    : "";
  const nodeContent = node.isGroup
    ? `<span>${escapeHtml(node.label)}</span>`
    : node.isRoot && node.tableKey === "ventures"
      ? `
        <span class="connection-node-root-copy">
          <span class="connection-node-root-eyebrow">Venture</span>
          <span class="connection-node-root-title">${escapeHtml(node.label)}</span>
          <span class="connection-node-root-meta">Primary Contact: ${escapeHtml(venturePrimaryContact || "—")}</span>
        </span>
      `
      : `${iconMarkup}<span>${escapeHtml(node.label)}</span>`;

  return `
    <li${shouldStackChildren ? ' class="tree-group-stack-vertical"' : ""}>
      ${node.isGroup
        ? `<div class="${nodeClass}"><span>${escapeHtml(node.label)}</span></div>`
        : `<button class="${nodeClass}" ${attrs}>${nodeContent}</button>`}
      ${node.children?.length ? `<ul>${node.children.map((child) => renderConnectionTreeNode(child)).join("")}</ul>` : ""}
    </li>
  `;
}

function renderDetailTree(tableKey, record) {
  const root = buildHierarchyTree(tableKey, record) ?? buildConnectionTree(tableKey, record);

  if (!root || !root.children.length) {
    return `<div class="detail-empty">No connected records found.</div>`;
  }

  return `
    <div class="detail-tree-canvas">
      <div class="detail-tree-graph">
        <ul class="detail-tree-list">
          ${renderConnectionTreeNode(root)}
        </ul>
      </div>
    </div>
  `;
}

function getExpandedLinkedGroups(tableKey, record) {
  const root = buildHierarchyTree(tableKey, record) ?? buildConnectionTree(tableKey, record);
  if (!root) return [];
  const rootKey = root.id ? `${root.tableKey}:${root.id}` : "";

  const grouped = new Map();
  const seen = new Set();

  const visit = (node) => {
    if (!node) return;
    if (node.isGroup) {
      node.children?.forEach(visit);
      return;
    }

    if (!node.isRoot && node.id) {
      const itemKey = `${node.tableKey}:${node.id}`;
      if (itemKey === rootKey) {
        node.children?.forEach(visit);
        return;
      }
      if (!seen.has(itemKey)) {
        seen.add(itemKey);
        if (!grouped.has(node.tableKey)) grouped.set(node.tableKey, []);
        const sourceRow = data[node.tableKey]?.find((item) => item.id === node.id) ?? null;
        grouped.get(node.tableKey).push({
          label: getRecordReferenceLabel(node.tableKey, sourceRow ?? node),
          tableKey: node.tableKey,
          id: node.id,
          row: sourceRow,
        });
      }
    }

    node.children?.forEach(visit);
  };

  visit(root);

  return tables
    .filter((table) => grouped.has(table.key))
    .map((table) => ({
      label: table.title,
      key: table.key,
      items: grouped.get(table.key),
    }));
}

function renderSharedNoteDeleteIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 6h18"></path>
      <path d="M8 6V4h8v2"></path>
      <path d="M19 6l-1 14H6L5 6"></path>
      <path d="M10 11v6"></path>
      <path d="M14 11v6"></path>
    </svg>
  `;
}

function groupSharedNotes(notes = []) {
  const normalized = notes.map(normalizeSharedNote);
  const childrenByParent = new Map();
  const roots = [];

  normalized.forEach((note) => {
    if (note.parentNoteId) {
      const children = childrenByParent.get(note.parentNoteId) ?? [];
      children.push(note);
      childrenByParent.set(note.parentNoteId, children);
      return;
    }
    roots.push(note);
  });

  const byDateAsc = (a, b) => new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
  childrenByParent.forEach((children) => children.sort(byDateAsc));
  return { roots, childrenByParent };
}

function renderSharedNoteCard(note, options = {}, childrenByParent = new Map(), depth = 0) {
  const replies = childrenByParent.get(note.id) ?? [];
  const canDelete = Boolean(options.showDelete && note.canDelete);
  const canReply = Boolean(options.showReply);

  return `
    <article class="shared-note-card ${depth > 0 ? "shared-note-reply" : ""}">
      <div class="shared-note-head">
        <div>
          <h4>${escapeHtml(note.subject || (depth > 0 ? "Reply" : "Untitled note"))}</h4>
          <p>${escapeHtml(note.authorRole || "Shared user")} · ${escapeHtml(note.createdAt ? formatDashboardDate(note.createdAt, true) : "Just now")}</p>
        </div>
        ${canDelete || canReply ? `
          <div class="shared-note-actions">
            ${canReply ? `<button class="shared-note-reply-button" type="button" data-shared-note-reply="${escapeHtml(note.id)}">Reply</button>` : ""}
            ${canDelete ? `
              <button class="shared-note-delete" type="button" data-shared-note-delete="${escapeHtml(note.id)}" aria-label="Delete note" title="Delete note">
                ${renderSharedNoteDeleteIcon()}
              </button>
            ` : ""}
          </div>
        ` : ""}
      </div>
      <p class="shared-note-content">${escapeHtml(note.content)}</p>
      ${replies.length ? `
        <div class="shared-note-replies">
          ${replies.map((reply) => renderSharedNoteCard(reply, options, childrenByParent, depth + 1)).join("")}
        </div>
      ` : ""}
    </article>
  `;
}

function renderSharedNotesList(notes = [], { emptyText = "No notes yet.", showDelete = false, showReply = false } = {}) {
  if (!notes.length) {
    return `<div class="shared-notes-empty">${escapeHtml(emptyText)}</div>`;
  }
  const { roots, childrenByParent } = groupSharedNotes(notes);

  return `
    <div class="shared-notes-list">
      ${roots.map((note) => renderSharedNoteCard(note, { showDelete, showReply }, childrenByParent)).join("")}
    </div>
  `;
}

function renderRecordSharedNotesSection(tableKey, recordId) {
  if (!canShareRecord(tableKey)) return "";
  const key = getRecordSharedNotesKey(tableKey, recordId);
  const notes = state.recordSharedNotes[key] ?? [];
  const loading = Boolean(state.recordSharedNotesLoading[key]);
  const error = state.recordSharedNotesError[key] || "";

  return `
    <section class="detail-linked shared-notes-section">
      <div class="detail-linked-head">
        <h3>Notes</h3>
      </div>
      ${error ? `<div class="shared-notes-error">${escapeHtml(error)}</div>` : ""}
      ${loading ? `<div class="shared-notes-empty">Loading notes...</div>` : renderSharedNotesList(notes, { showDelete: true, showReply: true })}
    </section>
  `;
}

function renderRecordDetail(table, record) {
  const detailIconTone = getDetailIconTone(table.key, record);
  const detailEyebrow = table.key === "tasks" && String(record?.parent_task ?? "").trim()
    ? "Subtasks"
    : table.title;
  const documentBody = table.key === "documents" ? String(record?.body ?? "").trim() : "";
  const visibleFields = getVisibleFields(table);
  const detailFields = table.key === "documents"
    ? visibleFields.filter((field) => field.name !== "body")
    : visibleFields;
  const renderDetailFieldValue = (field, display) => {
    if (field.name === "file_ref") {
      const visitUrl = getRecordVisitUrl(record);
      if (visitUrl) {
        return `<a class="detail-field-link" href="${escapeHtml(visitUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(display)}</a>`;
      }
    }
    return escapeHtml(display);
  };
  const rows = detailFields.map((field) => {
    const value = getFieldDisplayValue(field, record);
    const display = Array.isArray(record?.[field.name]) ? record[field.name].join(", ") : value || "—";
    return `
      <div class="detail-field">
        <div class="detail-field-label">${escapeHtml(field.label)} :</div>
        <div class="detail-field-value">${renderDetailFieldValue(field, display)}</div>
      </div>
    `;
  }).join("");

  const connections = ["ventures", "projects", "tasks", "documents", "assets", "events", "transactions"].includes(table.key)
    ? getExpandedLinkedGroups(table.key, record)
    : getRecordConnections(table.key, record);
  const primaryVenture = String(record?.venture ?? record?.name ?? "").trim();

  const renderLinkedRows = (items, offset = 1) => items.map((item, index) => {
    const noteText = item.tableKey === "documents" ? getDocumentSummaryText(item.row) : "";
    return `
      <button class="linked-record-row ${noteText ? "linked-record-row-with-note" : ""}" type="button" data-tree-open="${escapeHtml(item.tableKey)}" data-tree-record="${escapeHtml(item.id ?? "")}">
        <span class="linked-record-serial">${renderSerialNumber(index + offset)}</span>
        <span class="linked-record-copy">
          <span class="linked-record-label">${escapeHtml(item.label)}</span>
          ${noteText ? `<span class="linked-record-note">${escapeHtml(noteText)}</span>` : ""}
        </span>
      </button>
    `;
  }).join("");

  const renderPeopleGroups = (items) => {
    const grouped = new Map();
    items.forEach((item) => {
      const ventureName = String(item?.row?.venture ?? "Unassigned").trim() || "Unassigned";
      if (!grouped.has(ventureName)) grouped.set(ventureName, []);
      grouped.get(ventureName).push(item);
    });

    const sortedGroupNames = Array.from(grouped.keys()).sort((a, b) => {
      if (a === primaryVenture) return -1;
      if (b === primaryVenture) return 1;
      return a.localeCompare(b);
    });

    return sortedGroupNames.map((ventureName) => {
      const groupItems = grouped.get(ventureName) ?? [];
      return `
        <div class="detail-linked-subgroup">
          <div class="detail-linked-subgroup-head">
            <span class="detail-linked-subgroup-title">${escapeHtml(ventureName)}</span>
            <span class="detail-linked-subgroup-count">(${groupItems.length})</span>
          </div>
          <div class="detail-linked-list detail-linked-list-subgroup">
            ${renderLinkedRows(groupItems)}
          </div>
        </div>
      `;
    }).join("");
  };

  return `
    <div class="page-view page-view-detail">
      <div class="detail-view">
        <div class="detail-header">
          <div class="detail-header-main">
            <button class="detail-back-button" type="button" data-detail-action="back" aria-label="Back to list">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <div class="detail-title-block">
              <span class="detail-title-icon ${escapeHtml(detailIconTone)}" aria-hidden="true">${getTableIcon(table.key)}</span>
              <div class="detail-title-copy">
                <div class="detail-eyebrow">${escapeHtml(detailEyebrow)}</div>
                <h2>${escapeHtml(record.name || record.title || record.reference || table.singular)}</h2>
              </div>
            </div>
          </div>
          <div class="detail-actions">
            <button class="record-action-button" type="button" data-detail-action="tree">${state.detailTreeOpen ? "Hide tree" : "Tree view"}</button>
            ${canShareRecord(table.key) ? `<button class="record-action-button" type="button" data-detail-action="share">Share</button>` : ""}
            ${getRecordVisitUrl(record) ? `<button class="record-action-button" type="button" data-detail-action="visit">Visit</button>` : ""}
            ${renderRecordActionIconButton("edit", "Edit", 'data-detail-action="edit"')}
            ${canArchiveRecord(table.key)
              ? renderRecordActionIconButton(isRecordArchived(record) ? "restore" : "archive", isRecordArchived(record) ? "Restore" : "Archive", `data-detail-action="${isRecordArchived(record) ? "restore" : "archive"}"`)
              : renderRecordActionIconButton("delete", "Delete", 'data-detail-action="delete"')}
          </div>
        </div>
        <div class="detail-grid">
          ${rows}
        </div>
        ${documentBody ? `
          <section class="detail-body-block">
            <div class="detail-linked-head">
              <h3>Body</h3>
            </div>
            <p class="detail-body-copy">${escapeHtml(documentBody)}</p>
          </section>
        ` : ""}
        ${renderRecordSharedNotesSection(table.key, record.id)}
        <section class="detail-linked">
          <div class="detail-linked-head">
            <h3>Linked records - auto-assembled</h3>
          </div>
          ${state.detailTreeOpen ? `<div class="detail-tree">${renderDetailTree(table.key, record)}</div>` : `
            <div class="detail-linked-groups">
              ${connections.map((connection) => `
                <div class="detail-linked-group">
                  <div class="detail-linked-group-head">
                    <span class="detail-linked-group-icon" aria-hidden="true">${getTableIcon(connection.key || "")}</span>
                    <span class="detail-linked-group-title">${escapeHtml(connection.label)}</span>
                    <span class="detail-linked-group-count">(${connection.items.length})</span>
                  </div>
                  ${connection.key === "people" ? renderPeopleGroups(connection.items) : `
                    <div class="detail-linked-list">
                      ${renderLinkedRows(connection.items)}
                    </div>
                  `}
                </div>
              `).join("")}
            </div>
          `}
        </section>
      </div>
    </div>
  `;
}

function getActiveDetailTreeStateKey() {
  if (!state.detailTableKey || !state.detailRecordId) return "";
  return `${state.detailTableKey}:${state.detailRecordId}`;
}

function captureDetailTreeScroll() {
  const canvas = el.heroPanel?.querySelector(".detail-tree-canvas");
  const key = getActiveDetailTreeStateKey();
  if (!(canvas instanceof HTMLElement) || !key || !state.detailTreeOpen) return;
  state.detailTreeScroll = {
    key,
    left: canvas.scrollLeft,
  };
}

function restoreDetailTreeScroll() {
  const canvas = el.heroPanel?.querySelector(".detail-tree-canvas");
  const key = getActiveDetailTreeStateKey();
  if (!(canvas instanceof HTMLElement) || !key || !state.detailTreeOpen) return;

  const saved = state.detailTreeScroll;
  if (saved?.key === key && Number.isFinite(saved.left)) {
    canvas.scrollLeft = saved.left;
  }

  canvas.addEventListener("scroll", () => {
    if (!state.detailTreeOpen) return;
    state.detailTreeScroll = {
      key,
      left: canvas.scrollLeft,
    };
  }, { passive: true });
}

function allRecords() {
  return Object.entries(data)
    .filter(([, value]) => Array.isArray(value))
    .flatMap(([table, rows]) => rows.map((row) => ({ table, ...row })));
}

function countLinks() {
  const fields = ["venture", "project", "task", "parent_task", "assignees", "depends_on", "external_shared_with", "links", "participants"];
  return Object.values(data).reduce((sum, table) => {
    if (!Array.isArray(table)) return sum;
    return sum + table.reduce((tableSum, row) => {
      return tableSum + fields.reduce((fieldSum, field) => {
        const value = row[field];
        if (Array.isArray(value)) return fieldSum + value.length;
        return value ? fieldSum + 1 : fieldSum;
      }, 0);
    }, 0);
  }, 0);
}

function renderMeta() {
  if (!el.mobileNavTitle) return;
  const activeItem = sidebarItems.find((item) => item.key === state.activeNav);
  const activeTable = tables.find((item) => item.key === state.activeNav) ?? null;
  const countSuffix = activeTable
    ? ` (${data[activeTable.key]?.length ?? 0})`
    : state.activeNav === "admin"
      ? ` (${userAccounts.length})`
      : state.activeNav === "audit"
        ? ` (${state.auditLogs.length})`
      : "";
  el.mobileNavTitle.textContent = `${getSidebarItemLabel(activeItem) ?? "Dashboard"}${countSuffix}`;
}

function getSidebarItemLabel(item) {
  if (!item) return "";
  if (item.kind === "table") {
    return tables.find((table) => table.key === item.key)?.title ?? item.label;
  }
  return item.label;
}

function getSidebarToggleIcon() {
  return state.sidebarCollapsed
    ? `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    `
    : `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    `;
}

function applySidebarState() {
  const collapsed = !state.isMobileViewport && state.sidebarCollapsed;
  const navExpanded = state.isMobileViewport ? state.isMobileNavOpen : !collapsed;
  el.layout.classList.toggle("sidebar-collapsed", collapsed);
  el.layout.classList.toggle("mobile-nav-open", state.isMobileViewport && state.isMobileNavOpen);
  document.body.classList.toggle("app-mobile", state.isMobileViewport);
  document.body.classList.toggle("app-mobile-nav-open", state.isMobileViewport && state.isMobileNavOpen);

  if (el.mobileNavButton) {
    el.mobileNavButton.innerHTML = state.isMobileNavOpen
      ? `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 6 18 18"></path>
          <path d="M18 6 6 18"></path>
        </svg>
      `
      : `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 7h16"></path>
          <path d="M4 12h16"></path>
          <path d="M4 17h16"></path>
        </svg>
      `;
    el.mobileNavButton.setAttribute("aria-expanded", String(state.isMobileNavOpen));
    el.mobileNavButton.setAttribute("aria-label", state.isMobileNavOpen ? "Close navigation" : "Open navigation");
  }

  el.sidebarToggle.innerHTML = state.isMobileViewport
    ? `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 6 18 18"></path>
        <path d="M18 6 6 18"></path>
      </svg>
    `
    : getSidebarToggleIcon();
  el.sidebarToggle.setAttribute("aria-expanded", String(navExpanded));
  el.sidebarToggle.setAttribute("aria-label", state.isMobileViewport
    ? "Close menu panel"
    : state.sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar");
}

function closeMobileNav() {
  if (!state.isMobileNavOpen) return;
  state.isMobileNavOpen = false;
  applySidebarState();
}

function closeFormBuilderTableMenu() {
  const menu = document.querySelector("[data-form-builder-table-menu]");
  if (!menu) return;
  menu.classList.remove("is-open");
  menu.querySelector(".form-builder-table-menu-list")?.setAttribute("hidden", "");
  document.getElementById("form-builder-table-menu-trigger")?.setAttribute("aria-expanded", "false");
}

function syncViewportState() {
  const nextIsMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  if (state.isMobileViewport === nextIsMobile) return;
  state.isMobileViewport = nextIsMobile;
  if (!nextIsMobile) state.isMobileNavOpen = false;
  applySidebarState();
}

function renderSidebarNav() {
  el.sidebarNav.innerHTML = sidebarItems.map((item) => {
    const label = getSidebarItemLabel(item);
    const count = item.kind === "table" ? `<span class="sidebar-nav-count">${data[item.key].length}</span>` : "";
    const active = state.activeNav === item.key ? "active" : "";
    const dividerClass = ["dashboard", "transactions"].includes(item.key) ? " sidebar-nav-item-divider" : "";
    return `
      <button class="sidebar-nav-item ${active}${dividerClass}" type="button" data-sidebar-key="${item.key}" data-sidebar-kind="${item.kind}" data-sidebar-label="${escapeHtml(label)}" aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}">
        <span class="sidebar-nav-icon" aria-hidden="true">${getTableIcon(item.key)}</span>
        <span class="sidebar-nav-label">${escapeHtml(label)}</span>
        ${count}
      </button>
    `;
  }).join("");

  el.sidebarNav.querySelectorAll("[data-sidebar-key]").forEach((button) => {
    button.addEventListener("click", () => {
      const { sidebarKey, sidebarKind } = button.dataset;
      state.activeNav = sidebarKey;
      state.search = "";
      state.detailTableKey = null;
      state.detailRecordId = null;
      state.detailTreeOpen = false;
      clearDetailHistory();
      if (el.modal?.classList.contains("open")) closeForm();
      renderSidebarNav();
      if (sidebarKind === "table") {
        state.activeTable = sidebarKey;
      }
      if (state.isMobileViewport) {
        state.isMobileNavOpen = false;
        applySidebarState();
      }
      syncCurrentViewUrl();
      renderMeta();
      renderHeroPanel();
      if (sidebarKey === "admin" && state.adminView === "users") {
        refreshAdminUsersFromSupabase({ render: true }).catch((error) => {
          console.error("Supabase users refresh failed", error);
        });
      }
      if (sidebarKey === "audit") {
        refreshAuditLogsFromSupabase({ render: true }).catch((error) => {
          console.error("Supabase audit refresh failed", error);
        });
      }
    });
  });
}

function getCurrentSidebarUser() {
  return state.currentUser ?? userAccounts.find((user) => user.role === state.role) ?? userAccounts[0];
}

function getInitials(name) {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function renderSidebarFooter() {
  if (!state.isAuthenticated) return;
  const user = getCurrentSidebarUser();
  if (!user || !el.sidebarFooter) return;

  el.sidebarFooter.innerHTML = `
    <div class="sidebar-user-card">
      <div class="sidebar-user-avatar">${escapeHtml(getInitials(user.name) || "AT")}</div>
      <div class="sidebar-user-copy">
        <div class="sidebar-user-name">${escapeHtml(user.name)}</div>
        <div class="sidebar-user-role">${escapeHtml(user.role)}</div>
      </div>
      <button id="sidebar-logout" class="sidebar-logout" type="button" aria-label="Logout" title="Logout">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M15 17l5-5-5-5"></path>
          <path d="M20 12H9"></path>
          <path d="M13 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
        </svg>
      </button>
    </div>
  `;

  document.getElementById("sidebar-logout")?.addEventListener("click", () => {
    logoutApp();
  });
}

function renderBoard() {
  if (!state.isAuthenticated) return;
  el.board.innerHTML = tables.map((table) => `
    <article class="table-tile" data-open-list="${table.key}">
      <div class="table-tile-head">
        <div class="table-count">${data[table.key].length}</div>
        <button class="table-action-button" type="button" data-open-form="${table.key}" aria-label="Add ${escapeHtml(table.singular || table.title)}">+</button>
      </div>
      <div class="table-meta">
        <span class="table-icon" aria-hidden="true">${getTableIcon(table.key)}</span>
        <div class="table-title">${escapeHtml(table.title)}</div>
      </div>
    </article>
  `).join("");

    el.board.querySelectorAll("[data-open-list]").forEach((card) => {
      card.addEventListener("click", () => {
        state.activeNav = card.dataset.openList;
        state.activeTable = card.dataset.openList;
        state.search = "";
        clearDetailHistory();
        syncCurrentViewUrl();
        renderMeta();
        renderSidebarNav();
        renderHeroPanel();
      });
    });

  el.board.querySelectorAll("[data-open-form]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openForm(button.dataset.openForm);
    });
  });
}

function closeShareOverlay() {
  document.querySelector("[data-share-overlay]")?.remove();
  document.body.classList.remove("modal-open");
}

function openShareModal(table, record) {
  if (!canShareRecord(table.key)) return;
  closeShareOverlay();
  const label = record.name || record.title || record.reference || table.singular;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="share-overlay modal open" data-share-overlay aria-hidden="false">
      <div class="share-dialog" role="dialog" aria-modal="true" aria-labelledby="share-title">
        <div class="modal-head">
          <div>
            <h2 id="share-title">Share ${escapeHtml(label)}</h2>
            <p>Create a secure read-only link for clients or contractors.</p>
          </div>
          <button class="close-button" type="button" data-share-close aria-label="Close">×</button>
        </div>
        <div class="share-form">
          <label>
            <span>Optional password</span>
            <input type="password" data-share-password placeholder="Leave empty for no password" autocomplete="new-password" />
          </label>
          <button class="save-button" type="button" data-share-generate>Generate share link</button>
          <p class="form-message" data-share-message aria-live="polite"></p>
          <div class="share-result" data-share-result hidden>
            <label>
              <span>Share link</span>
              <input type="text" data-share-url readonly />
            </label>
            <button class="record-action-button" type="button" data-share-copy>Copy link</button>
          </div>
        </div>
      </div>
    </div>
  `);
  document.body.classList.add("modal-open");

  const overlay = document.querySelector("[data-share-overlay]");
  const message = overlay.querySelector("[data-share-message]");
  const passwordInput = overlay.querySelector("[data-share-password]");
  const generateButton = overlay.querySelector("[data-share-generate]");
  const result = overlay.querySelector("[data-share-result]");
  const urlInput = overlay.querySelector("[data-share-url]");

  overlay.querySelectorAll("[data-share-close]").forEach((button) => {
    button.addEventListener("click", closeShareOverlay);
  });
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeShareOverlay();
  });
  generateButton.addEventListener("click", async () => {
    generateButton.disabled = true;
    generateButton.textContent = "Generating...";
    message.textContent = "";
    try {
      const share = await createShareLinkForRecord(table.key, record.id, passwordInput.value);
      urlInput.value = share.url;
      result.hidden = false;
      message.textContent = share.hasPassword ? "Password-protected link created." : "Share link created.";
      await writeAuditLogSafe({
        action: "share",
        tableKey: table.key,
        record,
        details: { passwordProtected: Boolean(share.hasPassword) },
      });
    } catch (error) {
      console.error("Share link create failed", error);
      message.textContent = `Share link failed: ${error?.message ?? "Unknown error"}`;
    } finally {
      generateButton.disabled = false;
      generateButton.textContent = "Generate share link";
    }
  });
  overlay.querySelector("[data-share-copy]")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(urlInput.value);
      message.textContent = "Copied.";
    } catch {
      urlInput.select();
      document.execCommand("copy");
      message.textContent = "Copied.";
    }
  });
  passwordInput.focus();
}

function showSharedShell() {
  el.loginScreen.hidden = true;
  document.body.classList.remove("app-booting");
  document.body.classList.add("app-authenticated", "shared-view");
}

function renderSharedPasswordGate(error = "") {
  return `
    <div class="shared-page shared-page-auth">
      <section class="shared-auth-card">
        <div class="shared-brand">Gattabara Games shared page</div>
        <h1>Password required</h1>
        <p>This shared record is password protected.</p>
        <form data-shared-password-form>
          <span class="login-password-wrap">
            <input type="password" data-shared-password-input placeholder="Enter password" autocomplete="current-password" />
            <button class="login-password-toggle" type="button" data-shared-password-toggle aria-label="Show password" aria-pressed="false">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1.5 12s3.8-6 10.5-6 10.5 6 10.5 6-3.8 6-10.5 6S1.5 12 1.5 12Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8" />
              </svg>
            </button>
          </span>
          <button class="save-button" type="submit">Open shared page</button>
        </form>
        ${error ? `<p class="shared-error">${escapeHtml(error)}</p>` : ""}
      </section>
    </div>
  `;
}

function renderSharedFieldGrid(table, record) {
  return getVisibleFields(table).map((field) => {
    const value = getFieldDisplayValue(field, record);
    const display = Array.isArray(record?.[field.name]) ? record[field.name].join(", ") : value || "—";
    return `
      <div class="detail-field">
        <div class="detail-field-label">${escapeHtml(field.label)} :</div>
        <div class="detail-field-value">${escapeHtml(display)}</div>
      </div>
    `;
  }).join("");
}

function renderSharedLinkedGroups(table, record) {
  const connections = ["ventures", "projects"].includes(table.key)
    ? getExpandedLinkedGroups(table.key, record)
    : getRecordConnections(table.key, record);

  if (!connections.length) {
    return `<div class="detail-empty">No linked records found.</div>`;
  }

  return `
    <div class="detail-linked-groups">
      ${connections.map((connection) => `
        <div class="detail-linked-group">
          <div class="detail-linked-group-head">
            <span class="detail-linked-group-icon" aria-hidden="true">${getTableIcon(connection.key || "")}</span>
            <span class="detail-linked-group-title">${escapeHtml(connection.label)}</span>
            <span class="detail-linked-group-count">(${connection.items.length})</span>
          </div>
          <div class="detail-linked-list">
            ${connection.items.map((item, index) => `
              <div class="linked-record-row linked-record-row-static">
                <span class="linked-record-serial">${renderSerialNumber(index + 1)}</span>
                <span class="linked-record-copy">
                  <span class="linked-record-label">${escapeHtml(item.label)}</span>
                </span>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSharedDetailPage() {
  const bundle = state.sharedBundle;
  const table = getTableByKey(bundle?.targetTable);
  const record = bundle?.target;
  if (!table || !record) {
    return `
      <div class="shared-page">
        <section class="shared-auth-card">
          <div class="shared-brand">Gattabara Games shared page</div>
          <h1>Shared record unavailable</h1>
          <p>The shared record could not be loaded.</p>
        </section>
      </div>
    `;
  }

  return `
    <div class="shared-page">
      <section class="shared-header">
        <div>
          <div class="shared-brand">Gattabara Games shared page · Read only</div>
          <h1>${escapeHtml(record.name || record.title || table.singular)}</h1>
          <p>${escapeHtml(table.singular)} details, linked records, tree view, and notes.</p>
        </div>
        <div class="shared-actions">
          <button class="record-action-button" type="button" data-shared-action="tree">${state.sharedTreeOpen ? "Hide tree" : "Tree view"}</button>
          <button class="save-button" type="button" data-shared-action="note">Add notes</button>
        </div>
      </section>
      <section class="detail-grid shared-detail-grid">
        ${renderSharedFieldGrid(table, record)}
      </section>
      <section class="detail-linked">
        <div class="detail-linked-head">
          <h3>${state.sharedTreeOpen ? "Tree view" : "Linked records"}</h3>
        </div>
        ${state.sharedTreeOpen ? `<div class="detail-tree">${renderDetailTree(table.key, record)}</div>` : renderSharedLinkedGroups(table, record)}
      </section>
      <section class="detail-linked shared-notes-section">
        <div class="detail-linked-head">
          <h3>Notes</h3>
        </div>
        ${renderSharedNotesList(bundle.notes, { showDelete: true, showReply: true })}
      </section>
    </div>
  `;
}

function renderSharedPage() {
  showSharedShell();
  if (!el.heroPanel) return;

  if (state.sharedLoading) {
    el.heroPanel.innerHTML = `
      <div class="shared-page shared-page-auth">
        <section class="shared-auth-card">
          <div class="shared-brand">Gattabara Games shared page</div>
          <h1>Loading shared page...</h1>
        </section>
      </div>
    `;
    return;
  }

  if (!state.sharedBundle && ["password_required", "invalid_password"].includes(state.sharedError)) {
    el.heroPanel.innerHTML = renderSharedPasswordGate(state.sharedError === "invalid_password" ? "Invalid password." : "");
    bindSharedPageEvents();
    return;
  }

  if (state.sharedError && !state.sharedBundle) {
    el.heroPanel.innerHTML = `
      <div class="shared-page shared-page-auth">
        <section class="shared-auth-card">
          <div class="shared-brand">Gattabara Games shared page</div>
          <h1>Shared link unavailable</h1>
          <p>${escapeHtml(state.sharedError)}</p>
        </section>
      </div>
    `;
    return;
  }

  el.heroPanel.innerHTML = renderSharedDetailPage();
  bindSharedPageEvents();
}

function closeSharedNoteModal() {
  document.querySelector("[data-shared-note-overlay]")?.remove();
  document.body.classList.remove("modal-open");
}

function openSharedNoteModal({ parentNoteId = "", parentSubject = "" } = {}) {
  const isReply = Boolean(parentNoteId);
  closeSharedNoteModal();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="share-overlay modal open" data-shared-note-overlay aria-hidden="false">
      <div class="share-dialog" role="dialog" aria-modal="true" aria-labelledby="shared-note-title">
        <div class="modal-head">
          <div>
            <h2 id="shared-note-title">${isReply ? "Reply to note" : "Add note"}</h2>
            <p>${isReply ? `Replying to ${escapeHtml(parentSubject || "this note")}.` : "Shared users can add notes, but cannot edit main records."}</p>
          </div>
          <button class="close-button" type="button" data-shared-note-close aria-label="Close">×</button>
        </div>
        <form class="share-form" data-shared-note-form>
          ${isReply ? "" : `
            <label>
              <span>Subject</span>
              <input type="text" data-shared-note-subject required maxlength="180" />
            </label>
          `}
          <label>
            <span>${isReply ? "Reply" : "Content"}</span>
            <textarea data-shared-note-content required rows="5" maxlength="5000"></textarea>
          </label>
          <button class="save-button" type="submit">${isReply ? "Submit reply" : "Submit note"}</button>
          <p class="form-message" data-shared-note-message aria-live="polite"></p>
        </form>
      </div>
    </div>
  `);
  document.body.classList.add("modal-open");
  const overlay = document.querySelector("[data-shared-note-overlay]");
  (overlay.querySelector("[data-shared-note-subject]") ?? overlay.querySelector("[data-shared-note-content]"))?.focus();
  overlay.querySelectorAll("[data-shared-note-close]").forEach((button) => {
    button.addEventListener("click", closeSharedNoteModal);
  });
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeSharedNoteModal();
  });
  overlay.querySelector("[data-shared-note-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = overlay.querySelector("[data-shared-note-message]");
    const submitButton = overlay.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Saving...";
    message.textContent = "";
    try {
      if (isReply) {
        await addSharedNoteReply(parentNoteId, overlay.querySelector("[data-shared-note-content]").value);
      } else {
        await addSharedNote(
          overlay.querySelector("[data-shared-note-subject]").value,
          overlay.querySelector("[data-shared-note-content]").value,
        );
      }
      closeSharedNoteModal();
    } catch (error) {
      console.error("Shared note save failed", error);
      message.textContent = `${isReply ? "Reply" : "Note"} failed: ${error?.message ?? "Unknown error"}`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = isReply ? "Submit reply" : "Submit note";
    }
  });
}

function bindSharedPageEvents() {
  el.heroPanel.querySelector("[data-shared-password-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const password = el.heroPanel.querySelector("[data-shared-password-input]")?.value ?? "";
    await loadSharedBundle({ password });
  });
  el.heroPanel.querySelector("[data-shared-password-toggle]")?.addEventListener("click", () => {
    const passwordInput = el.heroPanel.querySelector("[data-shared-password-input]");
    const toggle = el.heroPanel.querySelector("[data-shared-password-toggle]");
    if (!passwordInput || !toggle) return;
    const isVisible = passwordInput.type === "text";
    passwordInput.type = isVisible ? "password" : "text";
    toggle.setAttribute("aria-label", isVisible ? "Show password" : "Hide password");
    toggle.setAttribute("aria-pressed", isVisible ? "false" : "true");
  });
  el.heroPanel.querySelectorAll("[data-shared-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.sharedAction;
      if (action === "tree") {
        state.sharedTreeOpen = !state.sharedTreeOpen;
        renderSharedPage();
      }
      if (action === "note") {
        openSharedNoteModal();
      }
    });
  });
  el.heroPanel.querySelectorAll("[data-shared-note-delete]").forEach((button) => {
    button.addEventListener("click", async () => {
      const approved = await openConfirmDialog({
        title: "Delete note?",
        message: "Delete this note from the shared record? Replies under it will also be removed.",
        confirmLabel: "Delete",
      });
      if (!approved) return;
      try {
        await deleteSharedNote(button.dataset.sharedNoteDelete);
      } catch (error) {
        window.alert(error?.message ?? "Note delete failed.");
      }
    });
  });
  el.heroPanel.querySelectorAll("[data-shared-note-reply]").forEach((button) => {
    button.addEventListener("click", () => {
      const noteId = button.dataset.sharedNoteReply;
      const note = state.sharedBundle?.notes?.find((item) => item.id === noteId) ?? null;
      openSharedNoteModal({
        parentNoteId: noteId,
        parentSubject: note?.subject || "this note",
      });
    });
  });
}

function openRecordSharedNoteReplyModal(tableKey, recordId, noteId, parentSubject = "") {
  closeSharedNoteModal();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="share-overlay modal open" data-shared-note-overlay aria-hidden="false">
      <div class="share-dialog" role="dialog" aria-modal="true" aria-labelledby="record-shared-note-title">
        <div class="modal-head">
          <div>
            <h2 id="record-shared-note-title">Reply to note</h2>
            <p>Replying to ${escapeHtml(parentSubject || "this note")}.</p>
          </div>
          <button class="close-button" type="button" data-shared-note-close aria-label="Close">×</button>
        </div>
        <form class="share-form" data-record-shared-note-reply-form>
          <label>
            <span>Reply</span>
            <textarea data-record-shared-note-reply-content required rows="5" maxlength="5000"></textarea>
          </label>
          <button class="save-button" type="submit">Submit reply</button>
          <p class="form-message" data-record-shared-note-message aria-live="polite"></p>
        </form>
      </div>
    </div>
  `);
  document.body.classList.add("modal-open");
  const overlay = document.querySelector("[data-shared-note-overlay]");
  overlay.querySelector("[data-record-shared-note-reply-content]")?.focus();
  overlay.querySelectorAll("[data-shared-note-close]").forEach((button) => {
    button.addEventListener("click", closeSharedNoteModal);
  });
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeSharedNoteModal();
  });
  overlay.querySelector("[data-record-shared-note-reply-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = overlay.querySelector("[data-record-shared-note-message]");
    const submitButton = overlay.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Saving...";
    message.textContent = "";
    try {
      await addRecordSharedNoteReply(
        tableKey,
        recordId,
        noteId,
        overlay.querySelector("[data-record-shared-note-reply-content]").value,
      );
      closeSharedNoteModal();
    } catch (error) {
      console.error("Record shared note reply failed", error);
      message.textContent = `Reply failed: ${error?.message ?? "Unknown error"}`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Submit reply";
    }
  });
}

function bindRecordSharedNoteActions(tableKey, recordId) {
  if (!canShareRecord(tableKey)) return;
  const notes = state.recordSharedNotes[getRecordSharedNotesKey(tableKey, recordId)] ?? [];

  el.heroPanel.querySelectorAll("[data-shared-note-delete]").forEach((button) => {
    button.addEventListener("click", async () => {
      const approved = await openConfirmDialog({
        title: "Delete note?",
        message: "Delete this note from the record? Replies under it will also be removed.",
        confirmLabel: "Delete",
      });
      if (!approved) return;
      try {
        await deleteRecordSharedNote(tableKey, recordId, button.dataset.sharedNoteDelete);
      } catch (error) {
        window.alert(error?.message ?? "Note delete failed.");
      }
    });
  });

  el.heroPanel.querySelectorAll("[data-shared-note-reply]").forEach((button) => {
    button.addEventListener("click", () => {
      const noteId = button.dataset.sharedNoteReply;
      const note = notes.find((item) => item.id === noteId) ?? null;
      openRecordSharedNoteReplyModal(tableKey, recordId, noteId, note?.subject || "this note");
    });
  });
}

function renderLoginScreen(message = "") {
  if (!el.loginScreen) return;
  el.loginScreen.hidden = false;
  document.body.classList.remove("app-booting");
  document.body.classList.remove("app-authenticated", "shared-view");
  const isBackendConfigured = Boolean(supabaseClient);
  const submitButton = el.loginForm?.querySelector("button[type='submit']");
  if (el.loginPassword) {
    el.loginPassword.disabled = !isBackendConfigured;
    el.loginPassword.placeholder = isBackendConfigured ? "Enter password" : "Waiting for new Supabase credentials";
    el.loginPassword.value = "";
    if (isBackendConfigured) el.loginPassword.focus();
  }
  if (submitButton instanceof HTMLButtonElement) {
    submitButton.disabled = !isBackendConfigured;
  }
  if (el.loginError) el.loginError.textContent = message || (!isBackendConfigured ? SUPABASE_UNCONFIGURED_MESSAGE : "");
}

function showAppShell() {
  if (!el.loginScreen) return;
  el.loginScreen.hidden = true;
  document.body.classList.remove("app-booting");
  document.body.classList.add("app-authenticated");
  document.body.classList.remove("shared-view");
}

async function loginApp(password) {
  if (!supabaseClient) {
    renderLoginScreen(SUPABASE_UNCONFIGURED_MESSAGE);
    return false;
  }

  try {
    await refreshAdminUsersFromSupabase();
  } catch (error) {
    console.error("Supabase users load failed during login", error);
    renderLoginScreen(`Supabase users load failed: ${error?.message ?? "Unknown error"}`);
    return false;
  }

  const validation = validateUniquePasswords();
  if (!validation.valid) {
    renderLoginScreen(`Duplicate passwords exist for ${validation.users.join(", ")}. Passwords are case-insensitive; fix Admin users first.`);
    return false;
  }

  const user = getUserByPassword(password);
  if (!user) {
    renderLoginScreen("Invalid password.");
    return false;
  }

  state.isAuthenticated = true;
  state.role = user.role;
  state.currentUser = user;
  setStoredAuthState(true);
  setStoredAuthUser(user);
  if (el.loginError) el.loginError.textContent = "";
  try {
    await refreshRemoteData({ syncHierarchy: true, render: false });
  } catch (error) {
    console.error("Supabase data load failed during login", error);
    renderLoginScreen(`Supabase data load failed: ${error?.message ?? "Unknown error"}`);
    return false;
  }
  showAppShell();
  renderAll();
  return true;
}

function logoutApp() {
  state.isAuthenticated = false;
  state.currentUser = null;
  setStoredAuthState(false);
  setStoredAuthUser(null);
  state.activeNav = "dashboard";
  state.search = "";
  state.detailTableKey = null;
  state.detailRecordId = null;
  state.detailTreeOpen = false;
  clearDetailHistory();
  syncCurrentViewUrl(true);
  renderLoginScreen("");
  renderAll();
}

function getTodayKey() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: APP_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const year = parts.find((part) => part.type === "year")?.value ?? "0000";
  const month = parts.find((part) => part.type === "month")?.value ?? "00";
  const day = parts.find((part) => part.type === "day")?.value ?? "00";
  return `${year}-${month}-${day}`;
}

function formatDashboardDate(value, includeTime = false) {
  if (!value) return "No date";
  const normalized = includeTime && value.includes(" ") ? value.replace(" ", "T") : value;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return value;

  if (!includeTime) {
    return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short" }).format(date);
  }

  const parts = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);
  const getPart = (type) => parts.find((part) => part.type === type)?.value ?? "";
  const day = getPart("day");
  const month = getPart("month");
  const hour = getPart("hour");
  const minute = getPart("minute");
  const dayPeriod = getPart("dayPeriod").toUpperCase();

  return `${day} ${month} - ${hour}:${minute} ${dayPeriod}`.trim();
}

function getDateOnlyKey(value) {
  if (!value) return "";
  const normalized = String(value).trim();
  if (!normalized) return "";
  if (/^\d{4}-\d{2}-\d{2}/.test(normalized)) return normalized.slice(0, 10);

  const parsed = new Date(normalized.includes(" ") ? normalized.replace(" ", "T") : normalized);
  if (Number.isNaN(parsed.getTime())) return "";
  return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}-${String(parsed.getDate()).padStart(2, "0")}`;
}

function getLocalDateKey(value) {
  const date = value instanceof Date ? value : getDateAtDayStart(value);
  if (!date || Number.isNaN(date.getTime())) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function getDateAtDayStart(value) {
  const key = getDateOnlyKey(value);
  return key ? new Date(`${key}T00:00:00`) : null;
}

function addDays(date, count) {
  const next = new Date(date);
  next.setDate(next.getDate() + count);
  return next;
}

function addMonths(date, count) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + count);
  return next;
}

function getDateDiffInDays(start, end) {
  return Math.round((end.getTime() - start.getTime()) / 86400000);
}

function getStartOfWeek(value = new Date()) {
  const base = value instanceof Date ? new Date(value) : (getDateAtDayStart(value) || new Date());
  base.setHours(0, 0, 0, 0);
  const weekdayOffset = (base.getDay() + 6) % 7;
  return addDays(base, -weekdayOffset);
}

function getCenteredWeekStart(value = new Date()) {
  const base = value instanceof Date ? new Date(value) : (getDateAtDayStart(value) || new Date());
  base.setHours(0, 0, 0, 0);
  return addDays(base, -2);
}

function getGanttWeekStart() {
  return state.ganttWeekStart
    ? (getDateAtDayStart(state.ganttWeekStart) || getCenteredWeekStart(getTodayKey()))
    : getCenteredWeekStart(getTodayKey());
}

function getGanttScale() {
  return state.ganttScale === "month" ? "month" : "week";
}

function getGanttVisibleTable() {
  return ["projects", "tasks", "events"].includes(state.ganttVisibleTable) ? state.ganttVisibleTable : "events";
}

function setGanttVisibleTable(value) {
  state.ganttVisibleTable = ["projects", "tasks", "events"].includes(value) ? value : "events";
}

function setGanttScale(value) {
  state.ganttScale = value === "month" ? "month" : "week";
}

function setGanttWeekStart(value) {
  const next = value instanceof Date ? value : (getDateAtDayStart(value) || getCenteredWeekStart(getTodayKey()));
  state.ganttWeekStart = getLocalDateKey(next);
}

function syncGanttUrl(startDate, replace = false) {
  const nextUrl = getGanttViewHref(startDate);
  const currentUrl = `${window.location.pathname}${window.location.search}`;
  if (nextUrl === currentUrl) return;
  window.history[replace ? "replaceState" : "pushState"]({}, "", nextUrl);
}

function isKnownSidebarView(value) {
  return sidebarItems.some((item) => item.key === value);
}

function isTableView(value) {
  return tables.some((table) => table.key === value);
}

function getCurrentViewHref() {
  const url = new URL(window.location.href);
  const activeView = isKnownSidebarView(state.activeNav) ? state.activeNav : "dashboard";
  url.searchParams.set("view", activeView);

  if (activeView === "gantt") {
    url.searchParams.set("gantt", getLocalDateKey(getGanttWeekStart()));
    url.searchParams.set("scale", getGanttScale());
    url.searchParams.set("gantt_table", getGanttVisibleTable());
  } else {
    url.searchParams.delete("gantt");
    url.searchParams.delete("scale");
    url.searchParams.delete("gantt_table");
  }

  return `${url.pathname}${url.search}`;
}

function syncCurrentViewUrl(replace = false) {
  if (state.isSharedView) return;
  const nextUrl = getCurrentViewHref();
  const currentUrl = `${window.location.pathname}${window.location.search}`;
  if (nextUrl === currentUrl) return;
  window.history[replace ? "replaceState" : "pushState"]({}, "", nextUrl);
}

function shiftGanttWindow(days) {
  const step = Number(days) || 0;
  const nextStart = getGanttScale() === "month"
    ? addMonths(getGanttWeekStart(), step)
    : addDays(getGanttWeekStart(), step);
  setGanttWeekStart(nextStart);
  syncGanttUrl(nextStart);
  renderHeroPanel();
}

function jumpGanttMonth(months) {
  const nextStart = addMonths(getGanttWeekStart(), Number(months) || 0);
  setGanttWeekStart(nextStart);
  syncGanttUrl(nextStart);
  renderHeroPanel();
}

function resetGanttToday() {
  const nextStart = getGanttScale() === "month"
    ? getDateAtDayStart(getTodayKey())
    : getCenteredWeekStart(getTodayKey());
  setGanttWeekStart(nextStart);
  syncGanttUrl(nextStart);
  renderHeroPanel();
}

function openGanttRecord(tableKey, recordId) {
  if (!tableKey || !recordId) return;
  openRecordDetail(tableKey, recordId, { preserveNav: true });
}

globalThis.shiftGanttWindow = shiftGanttWindow;
globalThis.jumpGanttMonth = jumpGanttMonth;
globalThis.resetGanttToday = resetGanttToday;
globalThis.openGanttRecord = openGanttRecord;

function getGanttViewHref(startDate) {
  const url = new URL(window.location.href);
  url.searchParams.set("view", "gantt");
  url.searchParams.set("gantt", getLocalDateKey(startDate instanceof Date ? startDate : getDateAtDayStart(startDate) || getGanttWeekStart()));
  url.searchParams.set("scale", getGanttScale());
  url.searchParams.set("gantt_table", getGanttVisibleTable());
  return `${url.pathname}${url.search}`;
}

function applyUrlState() {
  const params = new URLSearchParams(window.location.search);
  const shareToken = String(params.get(SHARE_ROUTE_PARAM) ?? "").trim();
  state.isSharedView = Boolean(shareToken);
  state.sharedToken = shareToken;
  if (state.isSharedView) {
    state.activeNav = "shared";
    state.detailTableKey = null;
    state.detailRecordId = null;
    state.detailTreeOpen = false;
    clearDetailHistory();
    return;
  }

  const view = params.get("view");
  const gantt = params.get("gantt");
  const scale = params.get("scale");
  const ganttTable = params.get("gantt_table");
  state.activeNav = isKnownSidebarView(view) ? view : "dashboard";
  if (isTableView(state.activeNav)) {
    state.activeTable = state.activeNav;
  }
  state.detailTableKey = null;
  state.detailRecordId = null;
  state.detailTreeOpen = false;
  clearDetailHistory();

  if (gantt) {
    state.ganttWeekStart = gantt;
  }
  if (scale) {
    setGanttScale(scale);
  }
  setGanttVisibleTable(ganttTable);
}

function getDaysUntil(dateKey) {
  if (!dateKey) return null;
  const target = new Date(`${dateKey}T00:00:00`);
  if (Number.isNaN(target.getTime())) return null;
  const today = new Date(`${getTodayKey()}T00:00:00`);
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}

function formatAttentionTiming(dateKey) {
  const days = getDaysUntil(dateKey);
  if (days == null) return "";
  if (days < 0) return `${Math.abs(days)}d late`;
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  return `In ${days}d`;
}

function getProjectLinkedSummary(projectName) {
  const openTasks = data.tasks
    .filter((task) => task.project === projectName && !["Done", "Cancelled"].includes(task.status));
  const upcomingEvents = data.events
    .filter((event) => event.project === projectName && event.date >= getTodayKey())
    .sort((left, right) => String(left.date).localeCompare(String(right.date)));

  return {
    taskCount: openTasks.length,
    nextTaskDate: openTasks.map((task) => task.due_date).filter(Boolean).sort()[0] ?? null,
    nextEventDate: upcomingEvents[0]?.date ?? null,
  };
}

function getTaskLinkedSummary(taskTitle, projectName) {
  const linkedProject = data.projects.find((project) => project.name === projectName) ?? null;
  const nextEvent = data.events
    .filter((event) => event.date >= getTodayKey())
    .filter((event) => event.task === taskTitle || (projectName && event.project === projectName))
    .sort((left, right) => {
      const leftKey = `${left.date || ""} ${left.start || ""}`;
      const rightKey = `${right.date || ""} ${right.start || ""}`;
      return leftKey.localeCompare(rightKey);
    })[0] ?? null;

  return {
    projectTargetDate: linkedProject?.target_date ?? null,
    nextEventDate: nextEvent?.date ?? null,
    nextEventTitle: nextEvent?.title ?? null,
  };
}

function getEventLinkedSummary(eventItem) {
  const linkedProject = data.projects.find((project) => project.name === eventItem.project) ?? null;
  const linkedTask = data.tasks.find((task) => task.title === eventItem.task) ?? null;

  return {
    projectTargetDate: linkedProject?.target_date ?? null,
    taskDueDate: linkedTask?.due_date ?? null,
    taskOwner: linkedTask?.owner ?? null,
  };
}

function getDashboardAttentionItems() {
  const todayKey = getTodayKey();
  const items = [];

  data.projects.forEach((project) => {
    if (!project.target_date || !["Active", "Blocked", "On-Hold"].includes(project.status)) return;
    const linked = getProjectLinkedSummary(project.name);
    items.push({
      tableKey: "projects",
      recordId: project.id,
      kind: "Project",
      title: project.name,
      date: project.target_date,
      dateLabel: formatDashboardDate(project.target_date),
      timingLabel: formatAttentionTiming(project.target_date),
      tone: "tone-1",
      status: project.status,
      details: [
        { label: "Venture", value: project.venture || "Unassigned" },
        { label: "Lead", value: project.lead ? formatPersonDisplayLabel(project.lead) : "Unassigned" },
        { label: "Open tasks", value: String(linked.taskCount) },
        { label: "Next task due", value: linked.nextTaskDate ? formatDashboardDate(linked.nextTaskDate) : "None" },
        { label: "Next event", value: linked.nextEventDate ? formatDashboardDate(linked.nextEventDate) : "None" },
      ],
    });
  });

  data.tasks.forEach((task) => {
    if (!task.due_date || ["Done", "Cancelled"].includes(task.status)) return;
    const linked = getTaskLinkedSummary(task.title, task.project);
    items.push({
      tableKey: "tasks",
      recordId: task.id,
      kind: "Task",
      title: task.title,
      date: task.due_date,
      dateLabel: formatDashboardDate(task.due_date),
      timingLabel: formatAttentionTiming(task.due_date),
      tone: "tone-2",
      status: task.status,
      details: [
        { label: "Project", value: task.project || "Unassigned" },
        { label: "Owner", value: task.owner ? formatPersonDisplayLabel(task.owner) : "Unassigned" },
        { label: "Priority", value: task.priority || "Unset" },
        { label: "Project target", value: linked.projectTargetDate ? formatDashboardDate(linked.projectTargetDate) : "None" },
        { label: "Next event", value: linked.nextEventDate ? `${formatDashboardDate(linked.nextEventDate)}${linked.nextEventTitle ? ` · ${linked.nextEventTitle}` : ""}` : "None" },
      ],
    });
  });

  data.events.forEach((event) => {
    if (!event.date || event.date < todayKey) return;
    const linked = getEventLinkedSummary(event);
    items.push({
      tableKey: "events",
      recordId: event.id,
      kind: "Event",
      title: event.title,
      date: event.date,
      dateLabel: formatDashboardDate(event.start || event.date, Boolean(event.start)),
      timingLabel: formatAttentionTiming(event.date),
      tone: "tone-3",
      status: event.type,
      details: [
        { label: "Project", value: event.project || "Unassigned" },
        { label: "Task", value: event.task || "Unassigned" },
        { label: "Task due", value: linked.taskDueDate ? formatDashboardDate(linked.taskDueDate) : "None" },
        { label: "Project target", value: linked.projectTargetDate ? formatDashboardDate(linked.projectTargetDate) : "None" },
        { label: "Task owner", value: linked.taskOwner ? formatPersonDisplayLabel(linked.taskOwner) : "Unassigned" },
      ],
    });
  });

  return items.sort((left, right) => String(left.date).localeCompare(String(right.date)));
}

function renderDashboardAttention() {
  const items = getDashboardAttentionItems();
  const todayLabel = formatDashboardDate(getTodayKey());
  const calendarIcon = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="4"></rect>
      <path d="M16 3v4"></path>
      <path d="M8 3v4"></path>
      <path d="M3 10h18"></path>
    </svg>
  `;
  const listIcon = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 6h10"></path>
      <path d="M9 12h10"></path>
      <path d="M9 18h10"></path>
      <circle cx="5" cy="6" r="1"></circle>
      <circle cx="5" cy="12" r="1"></circle>
      <circle cx="5" cy="18" r="1"></circle>
    </svg>
  `;
  const attentionPalettes = [
    { accent: "#8b5cf6", soft: "rgba(139, 92, 246, 0.12)" },
    { accent: "#22c55e", soft: "rgba(34, 197, 94, 0.12)" },
    { accent: "#3b82f6", soft: "rgba(59, 130, 246, 0.12)" },
    { accent: "#f59e0b", soft: "rgba(245, 158, 11, 0.12)" },
    { accent: "#ec4899", soft: "rgba(236, 72, 153, 0.12)" },
    { accent: "#14b8a6", soft: "rgba(20, 184, 166, 0.12)" },
  ];
  const sections = [
    { key: "events", title: "Upcoming Events" },
    { key: "tasks", title: "Upcoming Tasks" },
    { key: "projects", title: "Upcoming Projects" },
  ];
  return `
    <section class="panel dashboard-attention-panel">
      <div class="panel-head">
        <div>
          <h2>Upcoming</h2>
        </div>
        <div class="attention-panel-meta">
          <div class="attention-chip attention-today">
            <span class="attention-chip-icon">${calendarIcon}</span>
            <span>${escapeHtml(todayLabel)}</span>
          </div>
          <div class="attention-chip attention-count">
            <span class="attention-chip-icon">${listIcon}</span>
            <span>${items.length} items</span>
          </div>
        </div>
      </div>
      <div id="attention-list" class="attention-sections">
        ${sections.map((section) => {
          const sectionItems = items.filter((item) => item.tableKey === section.key);
          return `
            <section class="attention-group attention-group-${escapeHtml(section.key)}">
              <div class="attention-group-head">
                <h3>${escapeHtml(section.title)}</h3>
                <span>${sectionItems.length}</span>
              </div>
              <div class="attention-list">
                ${sectionItems.length ? sectionItems.map((item, index) => {
                  const palette = attentionPalettes[index % attentionPalettes.length];
                  return `
                  <button class="attention-card ${item.tone}" type="button" style="--attention-accent:${palette.accent}; --attention-accent-soft:${palette.soft};" data-attention-table="${escapeHtml(item.tableKey)}" data-attention-record="${escapeHtml(item.recordId)}">
                    <span class="attention-card-rail" aria-hidden="true"></span>
                    <span class="attention-card-icon" aria-hidden="true">${getTableIcon(item.tableKey)}</span>
                    <div class="attention-card-main">
                      <div class="attention-card-head">
                        <div class="attention-card-head-copy">
                          <div class="attention-kind">${escapeHtml(item.kind)}</div>
                          <div class="attention-card-title">${escapeHtml(item.title)}</div>
                        </div>
                        <div class="attention-date-block">
                          <div class="attention-date">${escapeHtml(item.dateLabel)}</div>
                          <div class="attention-date-hint">${escapeHtml(item.timingLabel)}</div>
                        </div>
                      </div>
                      <div class="attention-card-status-row">
                        ${item.tableKey === "tasks"
                          ? renderTaskStatusBadge(item.status, "attention")
                          : item.tableKey === "events"
                            ? renderEventTypeBadge(item.status, "attention")
                          : `<span class="attention-status${getStatusClassName(item.status) ? ` attention-status-${getStatusClassName(item.status)}` : ""}">${escapeHtml(item.status)}</span>`}
                      </div>
                    </div>
                    <div class="attention-card-meta">
                      ${item.details.map((detail) => `
                        <div class="attention-detail">
                          <span class="attention-detail-label">${escapeHtml(detail.label)}</span>
                          <strong>${escapeHtml(detail.value)}</strong>
                        </div>
                      `).join("")}
                    </div>
                  </button>
                `;
                }).join("") : `<div class="attention-empty">No upcoming ${escapeHtml(section.title.toLowerCase())}.</div>`}
              </div>
            </section>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function getGanttTimelineItems() {
  const taskItems = (data.tasks ?? [])
    .map((task) => {
      const linkedProject = getProjectByName(task.project);
      const end = getDateAtDayStart(task.due_date);
      const start = getDateAtDayStart(task.start_date) || getDateAtDayStart(linkedProject?.start_date) || end;
      if (!start || !end) return null;

      return {
        id: task.id,
        tableKey: "tasks",
        label: task.title || task.id,
        subtitle: [task.project, task.owner].filter(Boolean).join(" · "),
        venture: task.venture || linkedProject?.venture || "",
        project: task.project || "",
        status: task.status || "",
        lane: task.project || task.venture || "Tasks",
        start,
        end: end < start ? start : end,
      };
    })
    .filter(Boolean);

  const eventItems = (data.events ?? [])
    .map((event) => {
      const start = getDateAtDayStart(event.start || event.date);
      if (!start) return null;
      const end = getDateAtDayStart(event.end || event.start || event.date) || start;

      return {
        id: event.id,
        tableKey: "events",
        label: event.title || event.id,
        subtitle: [event.project, event.type].filter(Boolean).join(" · "),
        venture: event.venture || "",
        project: event.project || "",
        status: event.type || "",
        lane: event.project || event.venture || "Events",
        start,
        end: end < start ? start : end,
      };
    })
    .filter(Boolean);

  return [...taskItems, ...eventItems]
    .sort((left, right) => {
      const laneCompare = String(left.lane).localeCompare(String(right.lane));
      if (laneCompare !== 0) return laneCompare;
      const startCompare = left.start.getTime() - right.start.getTime();
      if (startCompare !== 0) return startCompare;
      return String(left.label).localeCompare(String(right.label));
    });
}

function renderGanttChart() {
  const ganttScale = getGanttScale();
  const weekStart = getGanttWeekStart();
  const windowStart = ganttScale === "month"
    ? new Date(weekStart.getFullYear(), weekStart.getMonth(), 1)
    : weekStart;
  const visibleDays = ganttScale === "month"
    ? Array.from(
        { length: new Date(windowStart.getFullYear(), windowStart.getMonth() + 1, 0).getDate() },
        (_, index) => addDays(windowStart, index),
      )
    : Array.from({ length: 7 }, (_, index) => addDays(windowStart, index));
  const windowEnd = visibleDays[visibleDays.length - 1];
  const todayIndex = visibleDays.findIndex((day) => getDateOnlyKey(day.toISOString()) === getTodayKey());
  const dateRangeLabel = ganttScale === "month"
    ? windowStart.toLocaleString("en-GB", { month: "long", year: "numeric" })
    : `${visibleDays[0].toLocaleString("en-GB", { month: "short", day: "numeric" })} - ${windowEnd.toLocaleString("en-GB", { month: "short", day: "numeric", year: "numeric" })}`;
  const weekStartKey = getDateOnlyKey(windowStart.toISOString());
  const columnLineStyle = (rowCount) => `--gantt-days: ${visibleDays.length}; --gantt-today-index: ${Math.max(todayIndex, 0)}; --gantt-row-count: ${Math.max(rowCount, 1)}; --gantt-has-today:${todayIndex >= 0 ? 1 : 0};`;
  const getVisibleSpan = (start, end) => {
    if (!start || !end || end < windowStart || start > windowEnd) return null;
    const visibleStart = start < windowStart ? windowStart : start;
    const visibleEnd = end > windowEnd ? windowEnd : end;
    const offsetDays = Math.max(getDateDiffInDays(windowStart, visibleStart), 0);
    const spanDays = Math.max(getDateDiffInDays(visibleStart, visibleEnd) + 1, 1);
    return {
      left: (offsetDays / visibleDays.length) * 100,
      width: Math.min((spanDays / visibleDays.length) * 100, 100 - (offsetDays / visibleDays.length) * 100),
    };
  };
  const projectRows = (data.projects ?? [])
    .slice()
    .sort((left, right) => String(left.name || "").localeCompare(String(right.name || ""), undefined, { numeric: true }))
    .map((project, index) => {
      const start = getDateAtDayStart(project.start_date || project.date || project.target_date);
      const end = getDateAtDayStart(project.target_date || project.start_date || project.date);
      return {
        id: project.id,
        tableKey: "projects",
        key: project.name || project.id,
        label: project.name || project.id,
        start,
        end: end && start && end < start ? start : end,
        color: "purple",
      };
    });
  const baseTaskRows = (data.tasks ?? [])
    .slice()
    .sort((left, right) => String(left.title || "").localeCompare(String(right.title || ""), undefined, { numeric: true }))
    .map((task) => {
      const project = getProjectByName(task.project);
      const end = getDateAtDayStart(task.due_date);
      const durationHours = convertDurationToHours(task.estimate);
      const durationDays = Math.max(Math.ceil(durationHours / 8), 1);
      const estimateStart = end ? addDays(end, -(durationDays - 1)) : null;
      const start = getDateAtDayStart(task.start_date) || estimateStart || getDateAtDayStart(project?.start_date) || end;
      return {
        id: task.id,
        tableKey: "tasks",
        key: task.title || task.id,
        label: `Task · ${task.project || "No project"}${task.owner ? ` · ${task.owner}` : ""}${task.estimate ? ` · ${task.estimate}` : ""}`,
        start,
        end: end && start && end < start ? start : end,
        parentTask: String(task.parent_task || "").trim(),
        depth: 0,
      };
    });
  const taskRowsByKey = new Map(baseTaskRows.map((task) => [task.key, task]));
  const taskChildrenByParent = new Map();
  baseTaskRows.forEach((task) => {
    if (!task.parentTask || !taskRowsByKey.has(task.parentTask)) return;
    const siblings = taskChildrenByParent.get(task.parentTask) || [];
    siblings.push(task);
    taskChildrenByParent.set(task.parentTask, siblings);
  });
  const taskRows = [];
  const appendTaskBranch = (task, depth) => {
    taskRows.push({ ...task, depth });
    const children = taskChildrenByParent.get(task.key) || [];
    children.forEach((child) => appendTaskBranch(child, depth + 1));
  };
  baseTaskRows
    .filter((task) => !task.parentTask || !taskRowsByKey.has(task.parentTask))
    .forEach((task) => appendTaskBranch(task, 0));
  const eventRows = (data.events ?? [])
    .slice()
    .sort((left, right) => String(left.start || left.date || "").localeCompare(String(right.start || right.date || "")))
    .map((event) => {
      const start = getDateAtDayStart(event.start || event.date);
      const end = getDateAtDayStart(event.end || event.start || event.date) || start;
      return {
        id: event.id,
        tableKey: "events",
        key: event.title || event.id,
        label: `Event · ${event.project || event.type || "No project"}${event.type ? ` · ${event.type}` : ""}`,
        start,
        end: end && start && end < start ? start : end,
        color: "orange",
      };
    });
  const ganttTableOptions = [
    { key: "projects", label: "Projects", iconLabel: "Projects", type: "project", rows: projectRows },
    { key: "tasks", label: "Tasks", iconLabel: "Tasks", type: "task", rows: taskRows },
    { key: "events", label: "Events", iconLabel: "Events", type: "event", rows: eventRows },
  ];
  const activeGanttTable = getGanttVisibleTable();
  const activeGanttOption = ganttTableOptions.find((option) => option.key === activeGanttTable) ?? ganttTableOptions[2];
  const renderBar = (item, type) => {
    const visibleSpan = getVisibleSpan(item.start, item.end);
    if (!visibleSpan) return "";
    const left = visibleSpan.left;
    const width = visibleSpan.width;
    const click = item.tableKey ? ` onclick="openGanttRecord('${escapeHtml(item.tableKey)}', '${escapeHtml(item.id)}')"` : "";
    const cardText = `${type === "event" ? "event" : type === "task" ? "task" : "project"}: ${item.key || item.label}`;
    return `
      <button class="gantt-canvas-bar gantt-canvas-bar-${type} ${item.color ? `gantt-color-${item.color}` : ""}" type="button" style="--bar-left:${left}%; --bar-width:${width}%;"${click}>
        <span>${escapeHtml(cardText)}</span>
      </button>
    `;
  };
  const gridRows = activeGanttOption.rows.map((item) => renderBar(item, activeGanttOption.type));
  const ganttWorkstreamsCollapsed = state.ganttWorkstreamsCollapsed ?? state.isMobileViewport;
  const ganttWorkstreamWidth = ganttWorkstreamsCollapsed ? 60 : (state.isMobileViewport ? 248 : 360);
  const sidebarSection = (title, count, rows) => {
    return `
    <section class="gantt-workstream-section" style="--gantt-section-row-count:${Math.max(rows.length, 1)};">
      <div class="gantt-workstream-head">
        <strong>${escapeHtml(title)}</strong>
        <em>${count}</em>
        <span class="gantt-section-more">•••</span>
      </div>
      <div class="gantt-workstream-list">
        ${rows.map((row) => `
          <div class="gantt-workstream-item${row.depth ? " is-subtask" : ""}" style="${row.depth ? `--gantt-indent:${row.depth};` : ""}">
            <span class="gantt-dot ${row.color ? `gantt-dot-${row.color}` : ""}"></span>
            <strong>${escapeHtml(row.key)}</strong>
            <span>${escapeHtml(row.label)}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;};

  return `
    <div class="page-view page-view-gantt">
      <section class="panel gantt-panel">
        <div class="gantt-app-shell">
          <header class="gantt-topbar">
          <div class="gantt-title-row">
            <h2>Gantt Chart</h2>
          </div>
          <div class="gantt-toolbar-left">
            <div class="gantt-arrow-group">
              <button type="button" data-gantt-shift="-1" aria-label="Show previous day">‹</button>
              <button type="button" data-gantt-shift="1" aria-label="Show next day">›</button>
            </div>
            <button class="gantt-today-button" type="button" data-gantt-today="true">Today</button>
            <label class="gantt-date-button">
              <span>${escapeHtml(dateRangeLabel)}</span>
              <span>⌄</span>
              <input class="gantt-date-input" type="date" value="${escapeHtml(weekStartKey)}" data-gantt-date aria-label="Choose Gantt start date" />
            </label>
          </div>
          <div class="gantt-stat-strip">
            <div><strong>${projectRows.length}</strong><span>Projects</span></div>
            <div><strong>${taskRows.length}</strong><span>Tasks</span></div>
            <div><strong>${eventRows.length}</strong><span>Events</span></div>
          </div>
          </header>
        <div class="gantt-board" style="${columnLineStyle(gridRows.length)}; --gantt-workstream-width:${ganttWorkstreamWidth}px;">
          <aside class="gantt-workstreams${ganttWorkstreamsCollapsed ? " is-collapsed" : ""}">
            <div class="gantt-workstream-label">
              <div class="gantt-workstream-heading">
                <span>Workstreams</span>
                <div class="gantt-workstream-filters" role="group" aria-label="Choose visible gantt records">
                  ${ganttTableOptions.map((option) => `
                    <button
                      class="gantt-workstream-filter${option.key === activeGanttOption.key ? " is-active" : ""}"
                      type="button"
                      data-gantt-filter="${escapeHtml(option.key)}"
                      aria-label="Show ${escapeHtml(option.iconLabel)}"
                      aria-pressed="${option.key === activeGanttOption.key}"
                      title="${escapeHtml(option.iconLabel)}"
                    >
                      ${getTableIcon(option.key)}
                    </button>
                  `).join("")}
                </div>
              </div>
              <button class="gantt-workstreams-toggle" type="button" data-gantt-workstreams-toggle aria-expanded="${!ganttWorkstreamsCollapsed}" aria-label="${ganttWorkstreamsCollapsed ? "Expand workstreams" : "Minimize workstreams"}">${ganttWorkstreamsCollapsed ? "›" : "‹"}</button>
            </div>
            ${sidebarSection(activeGanttOption.label, activeGanttOption.rows.length, activeGanttOption.rows)}
          </aside>
          <main class="gantt-timeline">
            <div class="gantt-timeline-days">
              ${visibleDays.map((day) => {
                const isToday = getDateOnlyKey(day.toISOString()) === getTodayKey();
                const label = ganttScale === "month"
                  ? `${day.getDate()} ${day.toLocaleString("en-GB", { month: "short" })}`
                  : `${day.toLocaleString("en-GB", { weekday: "short" })} ${day.getDate()} ${day.toLocaleString("en-GB", { month: "short" })}`;
                return `<div class="${isToday ? "is-today" : ""}">${escapeHtml(label)}</div>`;
              }).join("")}
            </div>
            <div class="gantt-canvas">
              ${todayIndex >= 0 ? `<div class="gantt-today-line" aria-hidden="true"></div>` : ""}
              ${gridRows.map((bar, index) => `<div class="gantt-canvas-row">${bar}</div>`).join("")}
            </div>
          </main>
        </div>
        </div>
      </section>
    </div>
  `;
}

function bindDashboardAttentionEvents() {
  el.attentionList?.querySelectorAll("[data-attention-table]").forEach((button) => {
    button.addEventListener("click", () => {
      const { attentionTable, attentionRecord } = button.dataset;
      if (!attentionTable || !attentionRecord) return;
      openRecordDetail(attentionTable, attentionRecord);
    });
  });
}

function getTableIcon(key) {
  const icons = {
    dashboard: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
        <rect x="14" y="3" width="7" height="5" rx="1.5"></rect>
        <rect x="14" y="12" width="7" height="9" rx="1.5"></rect>
        <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
      </svg>
    `,
    ventures: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 20V9l8-5 8 5v11"></path>
        <path d="M9 20v-6h6v6"></path>
      </svg>
    `,
    people: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
        <circle cx="9.5" cy="7" r="3"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 4.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    `,
    projects: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 7h7l2 2h9v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path>
      </svg>
    `,
    tasks: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2"></rect>
        <path d="M8 8h8"></path>
        <path d="M8 12h8"></path>
        <path d="m8 16 2 2 4-4"></path>
      </svg>
    `,
    documents: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 3v5h5"></path>
        <path d="M9 13h6"></path>
        <path d="M9 17h6"></path>
      </svg>
    `,
    assets: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z"></path>
        <path d="m4 7.5 8 4.5 8-4.5"></path>
        <path d="M12 12v9"></path>
      </svg>
    `,
    events: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
        <path d="M16 3v4"></path>
        <path d="M8 3v4"></path>
        <path d="M3 10h18"></path>
      </svg>
    `,
    transactions: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2.5" y="6" width="19" height="12" rx="2"></rect>
        <path d="M2.5 10.5h19"></path>
        <path d="M7 14h3"></path>
      </svg>
    `,
    gantt: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 6h16"></path>
        <path d="M4 12h16"></path>
        <path d="M4 18h16"></path>
        <rect x="5" y="4.5" width="7" height="3" rx="1.5"></rect>
        <rect x="10" y="10.5" width="9" height="3" rx="1.5"></rect>
        <rect x="7" y="16.5" width="5" height="3" rx="1.5"></rect>
      </svg>
    `,
    admin: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3l7 4v5c0 4.5-2.7 7.9-7 9-4.3-1.1-7-4.5-7-9V7l7-4z"></path>
        <path d="M12 8v8"></path>
        <path d="M8.5 11.5h7"></path>
      </svg>
    `,
    audit: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 6h13"></path>
        <path d="M8 12h13"></path>
        <path d="M8 18h13"></path>
        <path d="M3 6h.01"></path>
        <path d="M3 12h.01"></path>
        <path d="M3 18h.01"></path>
      </svg>
    `,
  };
  return icons[key] ?? icons.dashboard;
}

function titleCaseKey(key) {
  return key.replaceAll("_", " ");
}

function sortStringsAlpha(values = []) {
  return [...values].sort((left, right) => String(left).localeCompare(String(right)));
}

function sortOptionsAlpha(options = []) {
  return [...options].sort((left, right) => String(left.label ?? left.value ?? "").localeCompare(String(right.label ?? right.value ?? "")));
}

function formatIndianNumber(value) {
  const digits = String(value ?? "").replace(/\D/g, "");
  if (!digits) return "";
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Number(digits));
}

function getCurrencyDisplay(currency) {
  const map = {
    INR: "Rs",
    USD: "USD",
    EUR: "EUR",
    GBP: "GBP",
    AED: "AED",
    SAR: "SAR",
    SGD: "SGD",
  };
  return map[String(currency || "").toUpperCase()] || String(currency || "");
}

function formatTransactionAmount(value, currency = "INR") {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  if (/[A-Za-z₹$€£]/.test(raw)) return raw;
  const formatted = formatIndianNumber(raw);
  if (!formatted) return "";
  const currencyLabel = getCurrencyDisplay(currency);
  return currencyLabel ? `${currencyLabel} ${formatted}` : formatted;
}

function getTransactionNumericValue(value) {
  const digits = String(value ?? "").replace(/[^\d.-]/g, "");
  if (!digits) return 0;
  const parsed = Number(digits);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatTransactionTotalByCurrency(rows) {
  const totals = new Map();

  rows.forEach((row) => {
    const currency = getCurrencyDisplay(row.currency || "INR") || "INR";
    const amount = getTransactionNumericValue(row.amount);
    if (!amount) return;
    totals.set(currency, (totals.get(currency) ?? 0) + amount);
  });

  return Array.from(totals.entries())
    .map(([currency, total]) => `${currency} ${formatIndianNumber(total)}`)
    .join(" · ");
}

function getStatusClassName(status) {
  const normalized = String(status || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return normalized || "";
}

function renderBadge(value, variant = "records", prefix = "status") {
  const badgeClass = getStatusClassName(value);
  if (!badgeClass) return escapeHtml(String(value || "—"));
  return `<span class="${variant}-${prefix}-badge ${variant}-${prefix}-${badgeClass}">${escapeHtml(String(value))}</span>`;
}

function renderTaskStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "status");
}

function renderEventTypeBadge(type, variant = "records") {
  return renderBadge(type, variant, "event");
}

function renderDocumentStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "document-status");
}

function renderDocumentTypeBadge(type, variant = "records") {
  return renderBadge(type, variant, "document-type");
}

function renderProjectTypeBadge(type, variant = "records") {
  return renderBadge(type, variant, "project-type");
}

function renderVentureTypeBadge(type, variant = "records") {
  return renderBadge(type, variant, "venture-type");
}

function renderPeopleTypeBadge(type, variant = "records") {
  return renderBadge(type, variant, "people-type");
}

function renderAccessLevelBadge(level, variant = "records") {
  return renderBadge(level, variant, "access-level");
}

function renderPriorityBadge(priority, variant = "records") {
  return renderBadge(priority, variant, "priority");
}

function renderDirectionBadge(direction, variant = "records") {
  return renderBadge(direction, variant, "direction");
}

function renderAssetTypeBadge(type, variant = "records") {
  return renderBadge(type, variant, "asset-type");
}

function renderAssetStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "asset-status");
}

function renderTransactionStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "transaction-status");
}

function renderVentureStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "venture-status");
}

function formatCell(tableKey, column, row) {
  if (tableKey === "documents" && column === "venture_project") {
    return getDocumentLocationLabel(row);
  }
  if (column === "created_at") {
    return row?.createdAt ? formatDashboardDate(row.createdAt, true) : "—";
  }
  const value = row[column];
  if (value == null || value === "") return "—";
  const relation = getRelationConfig(column);
  const isPeopleRelation = Boolean(relation) && (
    relation.table === "people" || (Array.isArray(relation.tables) && relation.tables.includes("people"))
  );
  if (isPeopleRelation) {
    if (Array.isArray(value)) return value.map((item) => formatPersonDisplayLabel(item)).filter(Boolean).join(", ");
    return formatPersonDisplayLabel(value) || "—";
  }
  const isDateColumn = column === "date" || column.endsWith("_date") || column === "start" || column === "end";
  if (isDateColumn) {
    return formatDashboardDate(value, column === "start" || column === "end");
  }
  if (Array.isArray(value)) return formatList(value);
  if (tableKey === "people" && column === "type") return formatList(value);
  if (tableKey === "transactions" && column === "amount") return formatTransactionAmount(value, row.currency);
  return String(value);
}

function renderCellMarkup(tableKey, column, row) {
  const value = formatCell(tableKey, column, row);
  if (tableKey === "documents" && column === "body") {
    return `<span class="document-body-preview">${escapeHtml(value === "—" ? "" : value)}</span>`;
  }
  if (tableKey === "documents" && (column === "venture" || column === "project") && value === "—") {
    return "-";
  }
  if ((tableKey === "tasks" || tableKey === "projects") && column === "status" && value !== "—") {
    return renderTaskStatusBadge(value, "records");
  }
  if (tableKey === "ventures" && column === "type" && value !== "—") {
    return renderVentureTypeBadge(value, "records");
  }
  if (tableKey === "projects" && column === "type" && value !== "—") {
    return renderProjectTypeBadge(value, "records");
  }
  if (tableKey === "people" && column === "type" && value !== "—") {
    return renderPeopleTypeBadge(value, "records");
  }
  if (tableKey === "people" && column === "access_level" && value !== "—") {
    return renderAccessLevelBadge(value, "records");
  }
  if (tableKey === "people" && column === "status" && value !== "—") {
    return renderTaskStatusBadge(value, "records");
  }
  if (tableKey === "tasks" && column === "priority" && value !== "—") {
    return renderPriorityBadge(value, "records");
  }
  if (tableKey === "documents" && column === "status" && value !== "—") {
    return renderDocumentStatusBadge(value, "records");
  }
  if (tableKey === "documents" && column === "type" && value !== "—") {
    return renderDocumentTypeBadge(value, "records");
  }
  if (tableKey === "transactions" && column === "direction" && value !== "—") {
    return renderDirectionBadge(value, "records");
  }
  if (tableKey === "transactions" && column === "status" && value !== "—") {
    return renderTransactionStatusBadge(value, "records");
  }
  if (tableKey === "assets" && column === "type" && value !== "—") {
    return renderAssetTypeBadge(value, "records");
  }
  if (tableKey === "assets" && column === "status" && value !== "—") {
    return renderAssetStatusBadge(value, "records");
  }
  if (tableKey === "ventures" && column === "status" && value !== "—") {
    return renderVentureStatusBadge(value, "records");
  }
  if (tableKey === "events" && column === "type" && value !== "—") {
    return renderEventTypeBadge(value, "records");
  }
  return escapeHtml(value);
}

function renderSerialNumber(value) {
  return `<span class="record-serial">${escapeHtml(String(value))}</span>`;
}

function getRecordVisitUrl(record) {
  const raw = String(record?.file_ref ?? "").trim();
  if (!raw) return "";
  try {
    return new URL(raw).toString();
  } catch {
    try {
      return new URL(`https://${raw}`).toString();
    } catch {
      return "";
    }
  }
}

function renderRecordsBody(table, rows) {
  if (!rows.length) {
    return `<tr class="records-empty-row"><td colspan="${table.listColumns.length + 2}"><div class="records-empty-state">No records</div></td></tr>`;
  }

  return rows.map((row, index) => `
    <tr data-open-detail="${escapeHtml(table.key)}" data-record-id="${escapeHtml(row.id)}">
      <td class="records-serial-cell">${renderSerialNumber(index + 1)}</td>
      ${table.listColumns.map((column) => `<td>${renderCellMarkup(table.key, column, row)}</td>`).join("")}
      <td class="records-actions-cell">
        ${getRecordVisitUrl(row)
          ? `<button class="record-action-button" type="button" data-record-action="visit" data-record-id="${escapeHtml(row.id)}">Visit</button>`
          : ""}
        ${renderRecordActionIconButton("edit", `Edit ${row.name || row.title || row.reference || "record"}`, `data-record-action="edit" data-record-id="${escapeHtml(row.id)}"`)}
        ${renderArchiveRecordActionButton(table.key, row)}
      </td>
    </tr>
  `).join("");
}

function getVentureTone(value) {
  if (!value) return "tone-1";
  const tones = ["tone-1", "tone-2", "tone-3", "tone-4", "tone-5"];
  let sum = 0;
  for (const char of String(value)) sum += char.charCodeAt(0);
  return tones[sum % tones.length];
}

function getInitials(value) {
  const parts = String(value || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "NA";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}

function getDetailIconTone(tableKey, record) {
  if (tableKey !== "ventures") return "";
  return getVentureTone(record?.name || "");
}

function sortPeopleByHierarchy(rows) {
  return rows.slice().sort((left, right) => {
    const leftRank = peopleTypeRank.get(String(left?.type ?? "").trim()) ?? Number.MAX_SAFE_INTEGER;
    const rightRank = peopleTypeRank.get(String(right?.type ?? "").trim()) ?? Number.MAX_SAFE_INTEGER;
    if (leftRank !== rightRank) return leftRank - rightRank;

    return String(left?.name ?? "").localeCompare(String(right?.name ?? ""));
  });
}

function renderPersonStatus(status) {
  const value = String(status || "No status");
  const normalized = getStatusClassName(value);
  return `<span class="person-card-status person-card-status-${normalized}">${escapeHtml(value)}</span>`;
}

function renderPeopleRecords(rows) {
  if (!rows.length) return `<div class="people-empty records-empty-state">No records</div>`;

  const groups = new Map();
  rows.forEach((row) => {
    const venture = row.venture || "Unassigned";
    if (!groups.has(venture)) groups.set(venture, []);
    groups.get(venture).push(row);
  });

  return Array.from(groups.entries()).map(([venture, people]) => `
    <section class="people-group ${getVentureTone(venture)}">
      <div class="people-group-head">
        <h3><span class="venture-dot" aria-hidden="true"></span>${escapeHtml(venture)}</h3>
        <span>${people.length}</span>
      </div>
      <div class="people-group-list">
        ${sortPeopleByHierarchy(people).map((row, index) => `
          <article class="person-card ${getVentureTone(venture)}" data-open-detail="people" data-record-id="${escapeHtml(row.id)}">
            <div class="person-card-main">
              <div class="person-card-leading">
                ${renderSerialNumber(index + 1)}
                <span class="person-card-avatar" aria-hidden="true">${escapeHtml(getInitials(row.name || "Unnamed"))}</span>
              </div>
              <div class="person-card-copy">
                <strong class="person-card-name">${escapeHtml(row.name || "Unnamed")}</strong>
                <div class="person-card-meta-row">
                  <span class="person-card-type">${escapeHtml(formatCell("people", "type", row))}</span>
                  ${renderPersonStatus(row.status || "No status")}
                </div>
              </div>
            </div>
            <div class="person-card-actions">
              ${renderRecordActionIconButton("edit", `Edit ${row.name || row.title || row.reference || "record"}`, `data-record-action="edit" data-record-id="${escapeHtml(row.id)}"`)}
              ${renderRecordActionIconButton("delete", `Delete ${row.name || row.title || row.reference || "record"}`, `data-record-action="delete" data-record-id="${escapeHtml(row.id)}"`)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function buildTaskHierarchy(rows) {
  const rowByTitle = new Map();
  rows.forEach((row) => {
    const title = String(row.title || "").trim();
    if (title && !rowByTitle.has(title)) rowByTitle.set(title, row);
  });

  const childrenByParentId = new Map();
  const rootRows = [];

  rows.forEach((row) => {
    const parentTitle = String(row.parent_task || "").trim();
    const parentRow = parentTitle ? rowByTitle.get(parentTitle) ?? null : null;
    if (parentRow && parentRow.id !== row.id) {
      if (!childrenByParentId.has(parentRow.id)) childrenByParentId.set(parentRow.id, []);
      childrenByParentId.get(parentRow.id).push(row);
      return;
    }
    rootRows.push(row);
  });

  return { rootRows, childrenByParentId };
}

function getTaskDescendantIds(taskId) {
  const startTask = data.tasks.find((item) => item.id === taskId) ?? null;
  if (!startTask) return [];

  const collected = [];
  const stack = [startTask];
  const visited = new Set();

  while (stack.length) {
    const current = stack.pop();
    if (!current || visited.has(current.id)) continue;
    visited.add(current.id);
    collected.push(current.id);

    const title = String(current.title || "").trim();
    if (!title) continue;

    data.tasks.forEach((row) => {
      if (String(row.parent_task || "").trim() === title) {
        stack.push(row);
      }
    });
  }

  return collected;
}

function renderTaskTitleCell(row, serial, children = [], isChild = false) {
  const hasChildren = children.length > 0;
  const expanded = Boolean(state.taskExpanded[row.id]);
  const toggle = hasChildren
    ? `
      <button class="task-expand-button" type="button" data-task-expand="${escapeHtml(row.id)}" aria-label="${expanded ? "Collapse subtasks" : "Expand subtasks"}" aria-expanded="${expanded}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="${expanded ? "m6 15 6-6 6 6" : "m9 6 6 6-6 6"}"></path>
        </svg>
      </button>
    `
    : `<span class="task-expand-spacer" aria-hidden="true"></span>`;

  return `
    <div class="task-title-cell ${isChild ? "is-child" : ""}">
      ${toggle}
      <div class="task-title-copy">
        ${isChild ? `<span class="task-inline-serial">${escapeHtml(String(serial))}</span>` : ""}
        <strong>${escapeHtml(row.title || "Untitled task")}</strong>
        ${hasChildren ? `<span class="task-inline-count">${children.length} subtask${children.length === 1 ? "" : "s"}</span>` : ""}
      </div>
    </div>
  `;
}

function renderTaskRows(rows) {
  if (!rows.length) return `<tr class="records-empty-row"><td colspan="8"><div class="records-empty-state">No records</div></td></tr>`;
  const { rootRows, childrenByParentId } = buildTaskHierarchy(rows);

  return rootRows.map((row, index) => {
    const children = childrenByParentId.get(row.id) ?? [];
    const expanded = state.taskExpanded[row.id] ?? children.length > 0;
    const parentRow = `
      <tr data-open-detail="tasks" data-record-id="${escapeHtml(row.id)}" class="task-parent-row">
        <td class="records-serial-cell">${renderSerialNumber(index + 1)}</td>
        <td>${renderTaskTitleCell(row, index + 1, children, false)}</td>
        <td>${renderCellMarkup("tasks", "status", row)}</td>
        <td>${renderCellMarkup("tasks", "owner", row)}</td>
        <td>${renderCellMarkup("tasks", "priority", row)}</td>
        <td>${renderCellMarkup("tasks", "created_at", row)}</td>
        <td>${renderCellMarkup("tasks", "due_date", row)}</td>
        <td class="records-actions-cell">
          ${renderRecordActionIconButton("edit", `Edit ${row.title || "task"}`, `data-record-action="edit" data-record-id="${escapeHtml(row.id)}"`)}
          ${renderRecordActionIconButton("delete", `Delete ${row.title || "task"}`, `data-record-action="delete" data-record-id="${escapeHtml(row.id)}"`)}
        </td>
      </tr>
    `;

    const childRows = expanded
      ? children.map((child, childIndex) => `
        <tr data-open-detail="tasks" data-record-id="${escapeHtml(child.id)}" class="task-child-row">
          <td class="records-serial-cell"></td>
          <td>${renderTaskTitleCell(child, `${index + 1}.${childIndex + 1}`, [], true)}</td>
          <td>${renderCellMarkup("tasks", "status", child)}</td>
          <td>${renderCellMarkup("tasks", "owner", child)}</td>
          <td>${renderCellMarkup("tasks", "priority", child)}</td>
          <td>${renderCellMarkup("tasks", "created_at", child)}</td>
          <td>${renderCellMarkup("tasks", "due_date", child)}</td>
          <td class="records-actions-cell">
            ${renderRecordActionIconButton("edit", `Edit ${child.title || "task"}`, `data-record-action="edit" data-record-id="${escapeHtml(child.id)}"`)}
            ${renderRecordActionIconButton("delete", `Delete ${child.title || "task"}`, `data-record-action="delete" data-record-id="${escapeHtml(child.id)}"`)}
          </td>
        </tr>
      `).join("")
      : "";

    return `${parentRow}${childRows}`;
  }).join("");
}

function bindTaskExpandActions() {
  el.heroPanel.querySelectorAll("[data-task-expand]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const { taskExpand } = button.dataset;
      if (!taskExpand) return;
      state.taskExpanded[taskExpand] = !state.taskExpanded[taskExpand];
      updateRecordsTable(getTableByKey("tasks"));
    });
  });
}

function refreshTableView(table) {
  updateRecordsTable(table);
}

function updateRecordsTable(table) {
  const rows = getFilteredAndSortedRows(table);
  el.recordsCount.textContent = `${rows.length} records`;
  if (table.key === "people") {
    el.recordsContent.innerHTML = renderPeopleRecords(rows);
  } else if (table.key === "tasks") {
    el.recordsTableBody.innerHTML = renderTaskRows(rows);
    bindTaskExpandActions();
  } else {
    el.recordsTableBody.innerHTML = renderRecordsBody(table, rows);
  }
  if (el.recordsTotalFooter) {
    if (table.key === "transactions") {
      el.recordsTotalFooter.innerHTML = `
        <span>Visible amount total</span>
        <strong>${escapeHtml(formatTransactionTotalByCurrency(rows) || "INR 0")}</strong>
      `;
      el.recordsTotalFooter.hidden = false;
    } else {
      el.recordsTotalFooter.hidden = true;
    }
  }
  bindRecordRowActions(table);
  bindRecordOpenActions(table);
}

function bindArchiveViewActions(table) {
  document.querySelectorAll("[data-archive-view-toggle]").forEach((button) => {
    button.addEventListener("click", () => toggleArchiveView(table));
  });
}

function renderArchiveBackButton(archiveViewMode) {
  if (archiveViewMode !== "archived") return "";
  return `
    <button
      class="records-archive-back"
      type="button"
      data-archive-view-toggle
      aria-label="Back to normal records"
      title="Back to normal records"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M15 18l-6-6 6-6"></path>
      </svg>
    </button>
  `;
}

function renderArchiveMobileBackButton(archiveViewMode) {
  if (archiveViewMode !== "archived") return "";
  return `
    <button
      class="records-archive-back records-archive-back-mobile"
      type="button"
      data-archive-view-toggle
      aria-label="Back to normal records"
      title="Back to normal records"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M15 18l-6-6 6-6"></path>
      </svg>
    </button>
  `;
}

function renderArchiveModeTag(archiveViewMode) {
  return `
    <span class="records-mode-tag ${archiveViewMode === "archived" ? "is-archived" : ""}">
      ${archiveViewMode === "archived" ? "Archived records" : "Records"}
    </span>
  `;
}

function toggleArchiveView(table) {
  const nextMode = getArchivedViewMode(table.key) === "archived" ? "active" : "archived";
  setArchivedViewMode(table.key, nextMode);
  state.detailTableKey = null;
  state.detailRecordId = null;
  state.detailTreeOpen = false;
  clearDetailHistory();
  renderHeroPanel();
}

function renderRecordsToolbar(table, rows, filters, ventureOptions, projectOptions) {
  const showVentureFilter = ventureOptions.length > 0;
  const showProjectFilter = projectOptions.length > 0;
  const documentTypeOptions = table.key === "documents" ? getFilterOptions("documents", "type") : [];
  const documentStatusOptions = table.key === "documents" ? getFilterOptions("documents", "status") : [];
  const eventTypeOptions = table.key === "events" ? getFilterOptions("events", "type") : [];
  const assetStatusOptions = table.key === "assets" ? getFilterOptions("assets", "status") : [];
  const searchPlaceholder = `Search ${escapeHtml(table.title.toLowerCase())}...`;
  const showArchiveToggle = canArchiveRecord(table.key);
  const archiveViewMode = getArchivedViewMode(table.key);
  const archivedCount = showArchiveToggle ? data[table.key].filter(isRecordArchived).length : 0;
  const toolbarClasses = [
    "records-toolbar",
    showArchiveToggle ? "has-archive-toggle" : "",
    showArchiveToggle && archiveViewMode === "archived" ? "is-archived-mode" : "",
  ].filter(Boolean).join(" ");

  return `
    <div class="${toolbarClasses}">
      <div class="records-toolbar-title">
        <div class="records-title-line">
          ${showArchiveToggle ? renderArchiveBackButton(archiveViewMode) : ""}
          <h2>${escapeHtml(table.title)} <span class="records-title-count">(${rows.length})</span></h2>
          ${showArchiveToggle ? renderArchiveModeTag(archiveViewMode) : ""}
        </div>
        <p id="records-count">${rows.length} ${showArchiveToggle && archiveViewMode === "archived" ? "archived records" : "records"}</p>
      </div>
      <div class="records-toolbar-search">
        ${showArchiveToggle ? renderArchiveMobileBackButton(archiveViewMode) : ""}
        <input id="records-search" class="records-search" type="search" placeholder="${searchPlaceholder}" value="${escapeHtml(state.search)}" />
      </div>
      <div class="records-toolbar-actions">
        <div class="records-toolbar-options">
          ${showVentureFilter ? `
            <label class="records-filter">
              <select id="records-venture-filter">
                <option value="all" ${filters.venture === "all" ? "selected" : ""}>All ventures</option>
                ${ventureOptions.map((option) => `<option value="${escapeHtml(option)}" ${filters.venture === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>
          ` : ""}
          ${showProjectFilter ? `
            <label class="records-filter">
              <select id="records-project-filter">
                <option value="all" ${filters.project === "all" ? "selected" : ""}>All projects</option>
                ${projectOptions.map((option) => `<option value="${escapeHtml(option)}" ${filters.project === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>
          ` : ""}
          ${table.key === "documents" ? `
            <label class="records-filter">
              <select id="records-type-filter">
                <option value="all" ${filters.type === "all" ? "selected" : ""}>All types</option>
                ${documentTypeOptions.map((option) => `<option value="${escapeHtml(option)}" ${filters.type === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>
            <label class="records-filter">
              <select id="records-status-filter">
                <option value="all" ${filters.status === "all" ? "selected" : ""}>All statuses</option>
                ${documentStatusOptions.map((option) => `<option value="${escapeHtml(option)}" ${filters.status === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>
          ` : ""}
          ${table.key === "events" ? `
            <label class="records-filter">
              <select id="records-type-filter">
                <option value="all" ${filters.type === "all" ? "selected" : ""}>All types</option>
                ${eventTypeOptions.map((option) => `<option value="${escapeHtml(option)}" ${filters.type === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>
          ` : ""}
          ${table.key === "assets" ? `
            <label class="records-filter">
              <select id="records-status-filter">
                <option value="all" ${filters.status === "all" ? "selected" : ""}>All statuses</option>
                ${assetStatusOptions.map((option) => `<option value="${escapeHtml(option)}" ${filters.status === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>
          ` : ""}
          ${table.key === "documents" || table.key === "assets" || table.key === "events" ? "" : `
            <label class="records-filter">
              <select id="records-order-filter">
                <option value="newest" ${filters.order === "newest" ? "selected" : ""}>Newest first</option>
                <option value="oldest" ${filters.order === "oldest" ? "selected" : ""}>Oldest first</option>
              </select>
            </label>
          `}
        </div>
        ${showArchiveToggle && archiveViewMode !== "archived" ? `
          <button
            class="records-archive-toggle"
            type="button"
            data-archive-view-toggle
            title="Show archived records"
          >
            Archived records (${archivedCount})
          </button>
        ` : ""}
        <button id="new-record-button" class="new-record-button" type="button">+</button>
      </div>
    </div>
  `;
}

function renderRecordsTable(table) {
  const rows = getFilteredAndSortedRows(table);
  const filters = getRecordFilterState(table.key);
  const ventureOptions = getFilterOptions(table.key, "venture");
  const projectOptions = getFilterOptions(table.key, "project");
  const toolbar = renderRecordsToolbar(table, rows, filters, ventureOptions, projectOptions);
  const getColumnHeaderLabel = (column) => {
    if (table.key === "documents" && column === "venture_project") return "venture(project)";
    if (column === "created_at") return "Created At";
    return titleCaseKey(column);
  };

  if (table.key === "people") {
    return `
      <div class="page-view page-view-records">
        ${toolbar}
        <div id="records-content" class="people-records">
          ${renderPeopleRecords(rows)}
        </div>
      </div>
    `;
  }

  const headers = table.key === "tasks"
    ? `<th class="records-serial-head">S. No.</th><th>Title</th><th>Status</th><th>Owner</th><th>Priority</th><th>Created At</th><th>Due date</th><th>Actions</th>`
    : `<th class="records-serial-head">S. No.</th>${table.listColumns.map((column) => `<th>${escapeHtml(getColumnHeaderLabel(column))}</th>`).join("")}<th>Actions</th>`;
  const body = table.key === "tasks" ? renderTaskRows(rows) : renderRecordsBody(table, rows);
  const tableWrapClass = table.key === "transactions"
    ? "records-table-wrap records-table-wrap-fixed-total"
    : "records-table-wrap";

  return `
    <div class="page-view page-view-records">
      ${toolbar}
      <div class="${tableWrapClass}">
        <table class="records-table">
          <thead>
            <tr>${headers}</tr>
          </thead>
          <tbody id="records-table-body">
            ${body}
          </tbody>
        </table>
        <div id="records-total-footer" class="records-total-footer" ${table.key === "transactions" ? "" : "hidden"}>
          ${table.key === "transactions" ? `
            <span>Visible amount total</span>
            <strong>${escapeHtml(formatTransactionTotalByCurrency(rows) || "INR 0")}</strong>
          ` : ""}
        </div>
      </div>
    </div>
  `;
}

function bindRecordRowActions(table) {
  el.heroPanel.querySelectorAll("[data-record-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const { recordAction, recordId } = button.dataset;
      if (recordAction === "visit") {
        const record = data[table.key]?.find((item) => item.id === recordId) ?? null;
        const visitUrl = getRecordVisitUrl(record);
        if (visitUrl) window.open(visitUrl, "_blank", "noopener,noreferrer");
      }
      if (recordAction === "edit") {
        openForm(table.key, recordId);
      }
      if (recordAction === "delete") {
        deleteRecord(table.key, recordId);
      }
      if (recordAction === "archive") {
        setRecordArchived(table.key, recordId, true);
      }
      if (recordAction === "restore") {
        setRecordArchived(table.key, recordId, false);
      }
    });
  });
}

function snapshotCurrentView() {
  return {
    activeNav: state.activeNav,
    activeTable: state.activeTable,
    detailTableKey: state.detailTableKey,
    detailRecordId: state.detailRecordId,
    detailTreeOpen: state.detailTreeOpen,
  };
}

function restoreView(view = null) {
  const targetView = view ?? {
    activeNav: "dashboard",
    activeTable: state.activeTable,
    detailTableKey: null,
    detailRecordId: null,
    detailTreeOpen: false,
  };

  state.activeNav = targetView.activeNav;
  state.activeTable = targetView.activeTable;
  state.detailTableKey = targetView.detailTableKey;
  state.detailRecordId = targetView.detailRecordId;
  state.detailTreeOpen = targetView.detailTreeOpen;
  syncCurrentViewUrl(true);
  renderSidebarNav();
  renderMeta();
  renderHeroPanel();
}

function goBackFromDetail() {
  const previousView = state.detailHistory.pop() ?? null;
  restoreView(previousView);
}

function clearDetailHistory() {
  state.detailHistory = [];
}

function openRecordDetail(tableKey, recordId, options = {}) {
  if (!options.skipHistory) {
    state.detailHistory.push(snapshotCurrentView());
  }
  if (!options.preserveNav) {
    state.activeNav = tableKey;
  }
  state.activeTable = tableKey;
  state.detailTableKey = tableKey;
  state.detailRecordId = recordId;
  state.detailTreeOpen = false;
  state.detailTreeScroll = null;
  renderSidebarNav();
  renderMeta();
  renderHeroPanel();
}

function bindRecordOpenActions(table) {
  el.heroPanel.querySelectorAll("[data-open-detail]").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("button")) return;
      const { openDetail, recordId } = item.dataset;
      openRecordDetail(openDetail || table.key, recordId);
    });
  });
}

function getActiveDetailRecord() {
  if (!state.detailTableKey || !state.detailRecordId) return null;
  const table = getTableByKey(state.detailTableKey);
  if (!table) return null;
  const record = data[table.key].find((item) => item.id === state.detailRecordId) ?? null;
  return record ? { table, record } : null;
}

function renderHeroPanel() {
  captureDetailTreeScroll();
  const detail = getActiveDetailRecord();
  el.heroPanel.classList.toggle("hero-panel-gantt", state.activeNav === "gantt" && !detail);
  if (detail && (detail.table.key === state.activeNav || state.activeNav === "gantt")) {
    el.heroPanel.innerHTML = renderRecordDetail(detail.table, detail.record);
    restoreDetailTreeScroll();
    ensureRecordSharedNotes(detail.table.key, detail.record.id);
    bindRecordSharedNoteActions(detail.table.key, detail.record.id);
    el.heroPanel.querySelectorAll("[data-detail-action]").forEach((button) => {
      button.addEventListener("click", async () => {
        const action = button.dataset.detailAction;
        if (action === "back") {
          goBackFromDetail();
          return;
        }
        if (action === "edit") openForm(detail.table.key, detail.record.id);
        if (action === "share") {
          openShareModal(detail.table, detail.record);
        }
        if (action === "visit") {
          const visitUrl = getRecordVisitUrl(detail.record);
          if (visitUrl) window.open(visitUrl, "_blank", "noopener,noreferrer");
        }
        if (action === "delete") {
          const deleted = await deleteRecord(detail.table.key, detail.record.id);
          if (deleted) {
            goBackFromDetail();
          }
        }
        if (action === "archive" || action === "restore") {
          const changed = await setRecordArchived(detail.table.key, detail.record.id, action === "archive");
          if (changed) {
            goBackFromDetail();
          }
        }
        if (action === "tree") {
          state.detailTreeOpen = !state.detailTreeOpen;
          renderHeroPanel();
        }
      });
    });
    el.heroPanel.querySelectorAll("[data-tree-open]").forEach((button) => {
      button.addEventListener("click", () => {
        const { treeOpen, treeRecord } = button.dataset;
        if (!treeRecord) return;
        openRecordDetail(treeOpen, treeRecord);
      });
    });
    return;
  }

  if (state.activeNav === "dashboard") {
    el.heroPanel.innerHTML = `
      <div class="page-view page-view-dashboard">
        <div class="hero-minimal">
          <div class="hero-head">
            <div class="hero-kicker">Create</div>
          </div>
          <div id="board" class="board" aria-label="Create tables"></div>
          ${renderDashboardAttention()}
        </div>
      </div>
    `;
    el.board = document.getElementById("board");
    renderBoard();
    el.attentionList = document.getElementById("attention-list");
    bindDashboardAttentionEvents();
    return;
  }

  if (state.activeNav === "admin") {
    el.heroPanel.innerHTML = `
      <div class="page-view page-view-admin">
        <section class="panel admin-panel">
          ${renderAdminWorkspace()}
        </section>
      </div>
    `;
    bindAdminWorkspaceEvents();
    return;
  }

  if (state.activeNav === "audit") {
    el.heroPanel.innerHTML = `
      <div class="page-view page-view-audit">
        <section class="panel admin-panel">
          ${renderAdminAuditWorkspace()}
        </section>
      </div>
    `;
    bindAuditWorkspaceEvents();
    if (!state.auditLogsLoading && state.auditLogs.length === 0 && !state.auditLogError) {
      refreshAuditLogsFromSupabase({ render: true }).catch((error) => {
        console.error("Supabase audit refresh failed", error);
      });
    }
    return;
  }

  if (state.activeNav === "gantt") {
    el.heroPanel.innerHTML = renderGanttChart();
    return;
  }

  const table = tables.find((item) => item.key === state.activeNav) ?? tables[0];
  try {
    el.heroPanel.innerHTML = renderRecordsTable(table);
  } catch (error) {
    console.error(`Failed to render ${table.key} records view`, error);
    el.heroPanel.innerHTML = `
      <div class="page-view page-view-admin">
        <section class="panel admin-panel">
          <div class="panel-head">
            <div>
              <h2>${escapeHtml(table.title)}</h2>
              <p>Records view failed to render.</p>
            </div>
          </div>
          <div class="admin-empty-state">${escapeHtml(error?.message ?? "Unknown render error")}</div>
        </section>
      </div>
    `;
    return;
  }
  el.recordsSearch = document.getElementById("records-search");
  el.recordsCount = document.getElementById("records-count");
  el.recordsContent = document.getElementById("records-content");
  el.recordsTableBody = document.getElementById("records-table-body");
  el.recordsTotalFooter = document.getElementById("records-total-footer");
  el.newRecordButton = document.getElementById("new-record-button");
  el.recordsSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    refreshTableView(table);
  });
  el.recordsVentureFilter = document.getElementById("records-venture-filter");
  el.recordsProjectFilter = document.getElementById("records-project-filter");
  el.recordsTypeFilter = document.getElementById("records-type-filter");
  el.recordsStatusFilter = document.getElementById("records-status-filter");
  el.recordsOrderFilter = document.getElementById("records-order-filter");
  bindArchiveViewActions(table);
  if (el.recordsVentureFilter) {
    el.recordsVentureFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).venture = event.target.value;
      refreshTableView(table);
    });
  }
  if (el.recordsProjectFilter) {
    el.recordsProjectFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).project = event.target.value;
      refreshTableView(table);
    });
  }
  if (el.recordsTypeFilter) {
    el.recordsTypeFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).type = event.target.value;
      refreshTableView(table);
    });
  }
  if (el.recordsStatusFilter) {
    el.recordsStatusFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).status = event.target.value;
      refreshTableView(table);
    });
  }
  if (el.recordsOrderFilter) {
    el.recordsOrderFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).order = event.target.value;
      refreshTableView(table);
    });
  }
  el.newRecordButton.addEventListener("click", () => openForm(table.key));
  if (table.key === "tasks") {
    bindTaskExpandActions();
  }
  bindRecordRowActions(table);
  bindRecordOpenActions(table);
}

function renderSelectors() {
  if (!el.projectSelect || !el.taskSelect) return;

  el.projectSelect.innerHTML = data.projects
    .map((project) => `<option value="${project.id}" ${state.projectId === project.id ? "selected" : ""}>${project.name}</option>`)
    .join("");

  el.taskSelect.innerHTML = data.tasks
    .map((task) => `<option value="${task.id}" ${state.taskId === task.id ? "selected" : ""}>${task.title}</option>`)
    .join("");
}

function renderDashboard() {
  return;
}

function renderAdminWorkspace() {
  const viewRenderers = {
    forms: renderAdminFormBuilder,
    users: renderAdminUsersWorkspace,
  };
  const renderActiveView = viewRenderers[state.adminView] ?? renderAdminUsersWorkspace;
  return `
    <div class="admin-workspace">
      ${renderAdminTabs()}
      ${renderActiveView()}
    </div>
  `;
}

function renderAdminTabs() {
  const views = [
    { key: "users", label: "Users" },
    { key: "forms", label: "Form Builder" },
  ];
  return `
    <div class="admin-tabs" role="tablist" aria-label="Admin views">
      ${views.map((view) => `
        <button class="admin-tab ${state.adminView === view.key ? "is-active" : ""}" type="button" data-admin-view="${view.key}" role="tab" aria-selected="${state.adminView === view.key ? "true" : "false"}">
          ${escapeHtml(view.label)}
        </button>
      `).join("")}
    </div>
  `;
}

function getAuditActionLabel(action) {
  const labels = {
    add: "Added",
    edit: "Edited",
    delete: "Deleted",
    archive: "Archived",
    restore: "Restored",
    share: "Shared",
    add_user: "Added user",
    edit_user: "Edited user",
    delete_user: "Deleted user",
    add_custom_field: "Added field",
    delete_custom_field: "Deleted field",
    edit_form: "Edited form",
    reset_forms: "Reset forms",
  };
  return labels[action] ?? titleCaseKey(String(action || "action"));
}

function getFilteredAuditLogs() {
  const query = state.search.trim().toLowerCase();
  return state.auditLogs.filter((log) => {
    if (!query) return true;
    return [
      getAuditActionLabel(log.action),
      log.targetTable,
      log.targetLabel,
      log.actorName,
      log.actorRole,
      log.createdAt ? formatDashboardDate(log.createdAt, true) : "",
    ].some((value) => String(value ?? "").toLowerCase().includes(query));
  });
}

function renderAdminAuditRows(logs = getFilteredAuditLogs()) {
  return logs.map((log) => `
    <tr>
      <td>${escapeHtml(log.createdAt ? formatDashboardDate(log.createdAt, true) : "-")}</td>
      <td>
        <div class="admin-user-name-cell">
          <strong>${escapeHtml(log.actorName || "System")}</strong>
          <span>${escapeHtml(log.actorUserId || "No user id")}</span>
        </div>
      </td>
      <td><span class="admin-audit-action">${escapeHtml(getAuditActionLabel(log.action))}</span></td>
      <td>${escapeHtml(getTableByKey(log.targetTable)?.title ?? titleCaseKey(log.targetTable))}</td>
      <td>${escapeHtml(log.targetLabel || log.targetId || "-")}</td>
      <td>${escapeHtml(log.actorRole || "-")}</td>
    </tr>
  `).join("") || `
    <tr>
      <td colspan="6" class="admin-user-empty">No audit records found.</td>
    </tr>
  `;
}

function refreshAdminAuditRows() {
  const body = document.getElementById("admin-audit-table-body");
  if (body) body.innerHTML = renderAdminAuditRows();
}

function renderAdminAuditWorkspace() {
  const auditStatus = state.auditLogError
    ? `<p class="admin-data-status is-error">${escapeHtml(state.auditLogError)}</p>`
    : state.auditLogsLoading
      ? `<p class="admin-data-status">Loading audit trail from Supabase...</p>`
      : "";

  return `
    <div class="admin-view-shell admin-audit-shell">
      <div class="records-toolbar admin-workspace-head">
        <div class="records-toolbar-search">
          <input id="admin-audit-search" class="records-search" type="search" placeholder="Search audit..." value="${escapeHtml(state.search)}" />
        </div>
        <div class="admin-audit-lock" title="Audit records are append-only">
          Read only · never deleted
        </div>
      </div>
      ${auditStatus}
      <div class="records-table-wrap admin-audit-table-wrap">
        <table class="records-table admin-audit-table">
          <thead>
            <tr>
              <th>Date & time</th>
              <th>User</th>
              <th>Action</th>
              <th>Area</th>
              <th>Record</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody id="admin-audit-table-body">
            ${renderAdminAuditRows()}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function getFilteredAdminUsers() {
  const query = state.search.trim().toLowerCase();
  return userAccounts.filter((user) => {
    if (!query) return true;
    return [user.name, user.email, user.role, user.password]
      .some((value) => String(value ?? "").toLowerCase().includes(query));
  });
}

function renderAdminUserRows(users = getFilteredAdminUsers()) {
  return users.map((user, index) => {
    return `
      <tr data-user-id="${escapeHtml(user.id)}">
        <td>${index + 1}</td>
        <td>
          <div class="admin-user-name-cell">
            <strong>${escapeHtml(user.name)}</strong>
            <span>${escapeHtml(user.email)}</span>
          </div>
        </td>
        <td>${escapeHtml(user.password)}</td>
        <td><span class="admin-user-role">${escapeHtml(user.role)}</span></td>
        <td>${escapeHtml(user.createdBy || "System")}</td>
        <td>${escapeHtml(user.createdAt ? formatDashboardDate(user.createdAt, true) : "—")}</td>
        <td>
          <div class="admin-user-actions">
            <button class="record-action-button admin-user-icon-button" type="button" data-user-action="edit" data-user-id="${escapeHtml(user.id)}" aria-label="Edit ${escapeHtml(user.name)}" title="Edit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 20h9"></path>
                <path d="m16.5 3.5 4 4L7 21l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
            <button class="record-action-button admin-user-icon-button" type="button" data-user-action="delete" data-user-id="${escapeHtml(user.id)}" aria-label="Delete ${escapeHtml(user.name)}" title="Delete">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 6h18"></path>
                <path d="M8 6V4h8v2"></path>
                <path d="M19 6l-1 14H6L5 6"></path>
                <path d="M10 11v6"></path>
                <path d="M14 11v6"></path>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("") || `
    <tr>
      <td colspan="7" class="admin-user-empty">No users found.</td>
    </tr>
  `;
}

function refreshAdminUserRows() {
  const body = document.getElementById("admin-user-table-body");
  if (body) body.innerHTML = renderAdminUserRows();
  bindAdminUserActionEvents();
}

function renderAdminUsersWorkspace() {
  const adminUsersStatus = state.adminUserError
    ? `<p class="admin-data-status is-error">${escapeHtml(state.adminUserError)}</p>`
    : state.adminUsersLoading
      ? `<p class="admin-data-status">Loading users from Supabase...</p>`
      : "";

  return `
    <div class="admin-view-shell">
      <div class="records-toolbar admin-workspace-head">
        <div class="records-toolbar-search">
          <input id="admin-search" class="records-search" type="search" placeholder="Search users..." value="${escapeHtml(state.search)}" />
        </div>
        <div class="records-toolbar-actions">
          <button class="new-record-button" type="button" id="add-user-button">+</button>
        </div>
      </div>
      ${adminUsersStatus}
      <div class="records-table-wrap admin-user-table-wrap">
        <table class="records-table admin-user-table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>Password</th>
              <th>Role</th>
              <th>Added by</th>
              <th>Added at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="admin-user-table-body">
            ${renderAdminUserRows()}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderFormBuilderStatus() {
  const message = state.formBuilderError || state.formBuilderStatus;
  if (!message) return "";
  return `<p id="form-builder-status" class="form-builder-status ${state.formBuilderError ? "is-error" : "is-success"}">${escapeHtml(message)}</p>`;
}

function renderFormBuilderOptions(tableKey, field) {
  const relation = getRelationConfig(field.name);
  if (relation) {
    const source = relation.table
      ? getTableByKey(relation.table)?.title ?? relation.table
      : Array.isArray(relation.tables)
        ? relation.tables.map((key) => getTableByKey(key)?.title ?? key).join(", ")
        : "linked records";
    return `
      <div class="form-builder-options-note">
        Options come from ${escapeHtml(source)} records.
      </div>
    `;
  }

  const canEditOptions = field.type === "select" || Array.isArray(field.options);
  if (!canEditOptions) {
    return `<div class="form-builder-options-note">No fixed options for this field type.</div>`;
  }

  const options = Array.isArray(field.options) ? field.options : [];
  return `
    <div class="form-builder-options">
      <div class="form-builder-options-head">
        <span>Options</span>
        <button class="form-builder-small-button" type="button" data-option-add data-table-key="${escapeHtml(tableKey)}" data-field-name="${escapeHtml(field.name)}">+ Add option</button>
      </div>
      <div class="form-builder-option-list">
        ${options.map((option, index) => `
          <div class="form-builder-option-row">
            <input type="text" value="${escapeHtml(option)}" data-option-input data-table-key="${escapeHtml(tableKey)}" data-field-name="${escapeHtml(field.name)}" data-option-index="${index}" />
            <button class="form-builder-icon-button" type="button" data-option-delete data-table-key="${escapeHtml(tableKey)}" data-field-name="${escapeHtml(field.name)}" data-option-index="${index}" aria-label="Delete option">×</button>
          </div>
        `).join("") || `<div class="form-builder-options-note">No options yet.</div>`}
      </div>
    </div>
  `;
}

function renderNewCustomFieldCard(activeTable) {
  return `
    <div class="form-builder-add-field-card">
      <div class="form-builder-card-head">
        <div>
          <h3>Add new field</h3>
          <p>Adds a custom field to ${escapeHtml(activeTable.title)} and stores its values in Supabase.</p>
        </div>
      </div>
      <div class="form-builder-grid">
        <label>
          <span>Field label</span>
          <input type="text" value="" placeholder="Example: Platform notes" data-new-field-label />
        </label>
        <label>
          <span>Column key</span>
          <input type="text" value="" placeholder="Example: platform_notes" data-new-field-name />
        </label>
        <label>
          <span>Field type</span>
          <select data-new-field-type>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="select">Dropdown</option>
            <option value="date">Date</option>
            <option value="datetime-local">Date & time</option>
            <option value="textarea">Long text</option>
            <option value="checkbox">Checkbox</option>
            <option value="email">Email</option>
            <option value="tel">Phone</option>
          </select>
        </label>
        <label>
          <span>Dropdown options</span>
          <input type="text" value="" placeholder="Option 1, Option 2" data-new-field-options />
        </label>
        <button class="form-builder-add-field-button form-builder-wide" type="button" data-add-custom-field data-table-key="${escapeHtml(activeTable.key)}">
          + Add field to ${escapeHtml(activeTable.title)}
        </button>
      </div>
    </div>
  `;
}

function renderFormBuilderField(tableKey, field) {
  const enabled = field.enabled !== false;
  const deleteButton = field.custom === true
    ? `<button class="form-builder-delete-field-button" type="button" data-delete-custom-field data-table-key="${escapeHtml(tableKey)}" data-field-name="${escapeHtml(field.name)}">Delete field</button>`
    : "";
  return `
    <details class="form-builder-field ${enabled ? "" : "is-disabled"}" open>
      <summary>
        <span class="form-builder-field-main">
          <label class="form-builder-switch" onclick="event.stopPropagation()">
            <input type="checkbox" ${enabled ? "checked" : ""} data-field-prop="enabled" data-table-key="${escapeHtml(tableKey)}" data-field-name="${escapeHtml(field.name)}" />
            <span></span>
          </label>
          <span class="form-builder-field-copy">
            <strong>${escapeHtml(field.label || field.name)}</strong>
            <small>${escapeHtml(field.name)} · ${escapeHtml(field.type || "text")}</small>
          </span>
        </span>
        <span class="form-builder-field-toggle">Edit</span>
      </summary>
      <div class="form-builder-field-body">
        <div class="form-builder-grid">
          <label>
            <span>Field label</span>
            <input type="text" value="${escapeHtml(field.label ?? "")}" data-field-prop="label" data-table-key="${escapeHtml(tableKey)}" data-field-name="${escapeHtml(field.name)}" />
          </label>
          <label>
            <span>Field type</span>
            <select data-field-prop="type" data-table-key="${escapeHtml(tableKey)}" data-field-name="${escapeHtml(field.name)}">
              ${editableFieldTypes.map((type) => `<option value="${escapeHtml(type)}" ${field.type === type ? "selected" : ""}>${escapeHtml(type)}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Placeholder</span>
            <input type="text" value="${escapeHtml(field.placeholder ?? "")}" data-field-prop="placeholder" data-table-key="${escapeHtml(tableKey)}" data-field-name="${escapeHtml(field.name)}" />
          </label>
          <label>
            <span>Default value</span>
            <input type="text" value="${escapeHtml(field.value ?? "")}" data-field-prop="value" data-table-key="${escapeHtml(tableKey)}" data-field-name="${escapeHtml(field.name)}" />
          </label>
          <label class="form-builder-check">
            <input type="checkbox" ${field.required ? "checked" : ""} data-field-prop="required" data-table-key="${escapeHtml(tableKey)}" data-field-name="${escapeHtml(field.name)}" />
            <span>Required</span>
          </label>
        </div>
        ${renderFormBuilderOptions(tableKey, field)}
        ${deleteButton}
      </div>
    </details>
  `;
}

function renderFormBuilderTableMenu(configTables, activeTable) {
  return `
    <div class="form-builder-table-menu" data-form-builder-table-menu>
      <button class="form-builder-table-menu-trigger" type="button" id="form-builder-table-menu-trigger" aria-expanded="false" aria-haspopup="listbox">
        <span class="form-builder-table-menu-icon" aria-hidden="true">${getTableIcon(activeTable.key)}</span>
        <span class="form-builder-table-menu-label">${escapeHtml(activeTable.title)}</span>
        <span class="form-builder-table-menu-chevron" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </span>
      </button>
      <div class="form-builder-table-menu-list" role="listbox" aria-label="Forms" hidden>
        ${configTables.map((table) => `
          <button class="form-builder-table-menu-option ${table.key === activeTable.key ? "is-active" : ""}" type="button" role="option" aria-selected="${table.key === activeTable.key ? "true" : "false"}" data-form-builder-menu-table="${escapeHtml(table.key)}">
            <span class="form-builder-table-menu-icon" aria-hidden="true">${getTableIcon(table.key)}</span>
            <span class="form-builder-table-menu-label">${escapeHtml(table.title)}</span>
            ${table.key === activeTable.key ? `
              <span class="form-builder-table-menu-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m20 6-11 11-5-5"></path>
                </svg>
              </span>
            ` : ""}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderAdminFormBuilder() {
  const configTables = activeFormConfig.tables;
  const activeTable = configTables.find((table) => table.key === state.formBuilderTableKey) ?? configTables[0];
  if (!activeTable) return `<div class="admin-empty-state">No forms configured.</div>`;
  state.formBuilderTableKey = activeTable.key;
  const enabledFields = activeTable.fields.filter((field) => field.enabled !== false).length;

  return `
    <div class="admin-view-shell form-builder">
      <div class="records-toolbar admin-workspace-head">
        <div class="admin-workspace-title">
          <h2>Form Builder</h2>
          <span>${configTables.length} forms · ${enabledFields}/${activeTable.fields.length} fields enabled in ${escapeHtml(activeTable.title)}</span>
        </div>
        <div class="records-toolbar-actions form-builder-actions">
          ${renderFormBuilderTableMenu(configTables, activeTable)}
          <button class="form-builder-secondary-button" type="button" id="reset-form-config-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 3-6.7"></path>
              <path d="M3 4v6h6"></path>
            </svg>
            <span>Reset defaults</span>
          </button>
          <button class="new-record-button form-builder-save-button" type="button" id="save-form-config-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <path d="M17 21v-8H7v8"></path>
              <path d="M7 3v5h8"></path>
            </svg>
            <span>Save</span>
          </button>
        </div>
      </div>
      ${renderFormBuilderStatus()}
      <div class="form-builder-editing-patch">
        <span class="form-builder-editing-icon" aria-hidden="true">${getTableIcon(activeTable.key)}</span>
        <span class="form-builder-editing-copy">
          <span>Editing form</span>
          <strong>${escapeHtml(activeTable.title)}</strong>
          <small>Manage the structure and fields of this form.</small>
        </span>
      </div>
      <div class="form-builder-layout">
        <div class="form-builder-table-list" aria-label="Forms">
          ${configTables.map((table) => `
            <button class="form-builder-table-toggle ${table.key === activeTable.key ? "is-active" : ""}" type="button" data-form-builder-table="${escapeHtml(table.key)}">
              <span>${escapeHtml(table.title)}</span>
              <small>${table.fields.filter((field) => field.enabled !== false).length}/${table.fields.length} fields</small>
            </button>
          `).join("")}
        </div>
        <div class="form-builder-editor" data-active-form-table="${escapeHtml(activeTable.key)}">
          ${renderNewCustomFieldCard(activeTable)}
          <div class="form-builder-card">
            <div class="form-builder-card-head">
              <div>
                <h3>${escapeHtml(activeTable.title)}</h3>
                <p>${escapeHtml(activeTable.key)}</p>
              </div>
            </div>
            <div class="form-builder-grid">
              <label>
                <span>Form title</span>
                <input type="text" value="${escapeHtml(activeTable.title)}" data-table-prop="title" data-table-key="${escapeHtml(activeTable.key)}" />
              </label>
              <label>
                <span>Singular label</span>
                <input type="text" value="${escapeHtml(activeTable.singular)}" data-table-prop="singular" data-table-key="${escapeHtml(activeTable.key)}" />
              </label>
              <label class="form-builder-wide">
                <span>Summary</span>
                <input type="text" value="${escapeHtml(activeTable.summary ?? "")}" data-table-prop="summary" data-table-key="${escapeHtml(activeTable.key)}" />
              </label>
            </div>
          </div>
          <div class="form-builder-fields">
            ${activeTable.fields.map((field) => renderFormBuilderField(activeTable.key, field)).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindAdminWorkspaceEvents() {
  document.querySelectorAll("[data-admin-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextView = button.dataset.adminView;
      if (!nextView || state.adminView === nextView) return;
      state.adminView = nextView;
      state.search = "";
      state.formBuilderStatus = "";
      state.formBuilderError = "";
      renderHeroPanel();
      if (nextView === "users") {
        refreshAdminUsersFromSupabase({ render: true }).catch((error) => {
          console.error("Supabase users refresh failed", error);
        });
      }
    });
  });

  if (state.adminView === "forms") {
    bindFormBuilderEvents();
    return;
  }

  document.getElementById("add-user-button")?.addEventListener("click", () => {
    openAdminUserForm();
  });

  document.getElementById("admin-search")?.addEventListener("input", (event) => {
    state.search = event.target.value;
    refreshAdminUserRows();
  });

  bindAdminUserActionEvents();
}

function bindAdminUserActionEvents() {
  document.querySelectorAll("[data-user-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { userAction, userId } = button.dataset;
      if (userAction === "edit") openAdminUserForm(userId);
      if (userAction === "delete") deleteAdminUser(userId);
    });
  });
}

function bindAuditWorkspaceEvents() {
  document.getElementById("admin-audit-search")?.addEventListener("input", (event) => {
    state.search = event.target.value;
    refreshAdminAuditRows();
  });
}

function updateFormConfigFromInput(input) {
  const tableKey = input.dataset.tableKey;
  if (!tableKey) return false;
  const tableConfig = getFormConfigTable(tableKey);
  if (!tableConfig) return false;

  if (input.dataset.tableProp) {
    tableConfig[input.dataset.tableProp] = input.value;
    return false;
  }

  const fieldName = input.dataset.fieldName;
  const fieldProp = input.dataset.fieldProp;
  const field = fieldName ? getFormConfigField(tableKey, fieldName) : null;
  if (!field || !fieldProp) return false;

  if (input instanceof HTMLInputElement && input.type === "checkbox") {
    field[fieldProp] = input.checked;
  } else {
    field[fieldProp] = input.value;
  }

  if (fieldProp === "type" && field.type === "select" && !Array.isArray(field.options)) {
    field.options = [];
  }

  return fieldProp === "type" || fieldProp === "enabled";
}

function updateFormConfigOption(input) {
  const tableKey = input.dataset.tableKey;
  const fieldName = input.dataset.fieldName;
  const optionIndex = Number(input.dataset.optionIndex);
  const field = fieldName ? getFormConfigField(tableKey, fieldName) : null;
  if (!field || !Number.isInteger(optionIndex)) return;
  field.options = Array.isArray(field.options) ? field.options : [];
  field.options[optionIndex] = input.value;
}

function createUniqueCustomFieldName(tableConfig, requestedName, label) {
  const baseName = createFieldKey(requestedName || label);
  if (!baseName) return "";
  const existingNames = new Set((tableConfig.fields ?? []).map((field) => field.name));
  let fieldName = baseName;
  let suffix = 2;
  while (existingNames.has(fieldName)) {
    fieldName = `${baseName}_${suffix}`;
    suffix += 1;
  }
  return fieldName;
}

function parseNewFieldOptions(value) {
  return normalizeOptionList(String(value ?? "").split(/[\n,]+/));
}

async function addCustomFormBuilderField(button) {
  const tableKey = button.dataset.tableKey;
  const tableConfig = getFormConfigTable(tableKey);
  const card = button.closest(".form-builder-add-field-card");
  if (!tableConfig || !card) return;

  const label = String(card.querySelector("[data-new-field-label]")?.value ?? "").trim();
  const requestedName = String(card.querySelector("[data-new-field-name]")?.value ?? "").trim();
  const type = String(card.querySelector("[data-new-field-type]")?.value ?? "text").trim();
  const options = parseNewFieldOptions(card.querySelector("[data-new-field-options]")?.value);
  const fieldName = createUniqueCustomFieldName(tableConfig, requestedName, label);

  if (!label) {
    state.formBuilderError = "Enter a field label before adding a field.";
    state.formBuilderStatus = "";
    renderHeroPanel();
    return;
  }

  if (!fieldName) {
    state.formBuilderError = "Enter a valid column key. Use letters, numbers, and underscores.";
    state.formBuilderStatus = "";
    renderHeroPanel();
    return;
  }

  if (!editableFieldTypes.includes(type)) {
    state.formBuilderError = "Choose a valid field type.";
    state.formBuilderStatus = "";
    renderHeroPanel();
    return;
  }

  const previousConfig = cloneJson(activeFormConfig);
  const nextField = {
    name: fieldName,
    label,
    type,
    enabled: true,
    required: false,
    custom: true,
  };
  if (type === "select") nextField.options = options;

  tableConfig.fields.push(nextField);
  state.formBuilderStatus = `Adding ${label} to Supabase...`;
  state.formBuilderError = "";
  renderHeroPanel();

  try {
    await saveFormConfigToSupabase(activeFormConfig);
    await writeAuditLogSafe({
      action: "add_custom_field",
      tableKey: "form_builder",
      recordId: tableKey,
      recordLabel: `${tableConfig.title || tableKey}: ${label}`,
      details: { form_key: tableKey, field_name: fieldName, field_type: type },
    });
    state.formBuilderStatus = `${label} added and saved to Supabase.`;
    state.formBuilderError = "";
  } catch (error) {
    console.error("Supabase custom field add failed", error);
    activeFormConfig = previousConfig;
    applyFormConfig(previousConfig);
    state.formBuilderStatus = "";
    state.formBuilderError = `Supabase is not taking this field: ${error?.message ?? "Unknown error"}`;
  }

  renderHeroPanel();
}

async function deleteCustomFormBuilderField(button) {
  const tableKey = button.dataset.tableKey;
  const fieldName = button.dataset.fieldName;
  const tableConfig = getFormConfigTable(tableKey);
  const field = getFormConfigField(tableKey, fieldName);
  if (!tableConfig || !field || field.custom !== true) return;
  const approved = window.confirm(`Delete custom field "${field.label || field.name}" from this form? Existing record values stay in Supabase custom_fields but the field will no longer show in the form.`);
  if (!approved) return;

  const previousConfig = cloneJson(activeFormConfig);
  tableConfig.fields = tableConfig.fields.filter((item) => item.name !== fieldName);
  state.formBuilderStatus = `Deleting ${field.label || field.name} from Supabase...`;
  state.formBuilderError = "";
  renderHeroPanel();

  try {
    await saveFormConfigToSupabase(activeFormConfig);
    await writeAuditLogSafe({
      action: "delete_custom_field",
      tableKey: "form_builder",
      recordId: tableKey,
      recordLabel: `${tableConfig.title || tableKey}: ${field.label || field.name}`,
      details: { form_key: tableKey, field_name: fieldName },
    });
    state.formBuilderStatus = `${field.label || field.name} deleted and saved to Supabase.`;
    state.formBuilderError = "";
  } catch (error) {
    console.error("Supabase custom field delete failed", error);
    activeFormConfig = previousConfig;
    applyFormConfig(previousConfig);
    state.formBuilderStatus = "";
    state.formBuilderError = `Supabase is not taking this field delete: ${error?.message ?? "Unknown error"}`;
  }

  renderHeroPanel();
}

function bindFormBuilderEvents() {
  const builder = document.querySelector(".form-builder");
  if (!builder) return;

  builder.querySelector("[data-form-builder-table-menu]")?.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const trigger = target.closest("#form-builder-table-menu-trigger");
    const option = target.closest("[data-form-builder-menu-table]");
    const menu = event.currentTarget;
    const list = menu.querySelector(".form-builder-table-menu-list");

    if (trigger) {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      menu.classList.toggle("is-open", !isOpen);
      if (list) list.hidden = isOpen;
      return;
    }

    if (option) {
      const tableKey = option.dataset.formBuilderMenuTable;
      if (!tableKey) return;
      if (tableKey === state.formBuilderTableKey) {
        menu.classList.remove("is-open");
        document.getElementById("form-builder-table-menu-trigger")?.setAttribute("aria-expanded", "false");
        if (list) list.hidden = true;
        return;
      }
      state.formBuilderTableKey = tableKey;
      state.formBuilderStatus = "";
      state.formBuilderError = "";
      renderHeroPanel();
    }
  });

  builder.querySelectorAll("[data-form-builder-table]").forEach((button) => {
    button.addEventListener("click", () => {
      const tableKey = button.dataset.formBuilderTable;
      if (!tableKey || tableKey === state.formBuilderTableKey) return;
      state.formBuilderTableKey = tableKey;
      state.formBuilderStatus = "";
      state.formBuilderError = "";
      renderHeroPanel();
    });
  });

  builder.addEventListener("input", (event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    if (event.target.matches("[data-option-input]")) {
      updateFormConfigOption(event.target);
      return;
    }
    updateFormConfigFromInput(event.target);
  });

  builder.addEventListener("change", (event) => {
    if (!(event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement)) return;
    const shouldRender = updateFormConfigFromInput(event.target);
    if (shouldRender) renderHeroPanel();
  });

  builder.querySelectorAll("[data-option-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const field = getFormConfigField(button.dataset.tableKey, button.dataset.fieldName);
      if (!field) return;
      field.options = Array.isArray(field.options) ? field.options : [];
      field.options.push("New option");
      renderHeroPanel();
    });
  });

  builder.querySelectorAll("[data-option-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const field = getFormConfigField(button.dataset.tableKey, button.dataset.fieldName);
      const optionIndex = Number(button.dataset.optionIndex);
      if (!field || !Array.isArray(field.options) || !Number.isInteger(optionIndex)) return;
      field.options.splice(optionIndex, 1);
      renderHeroPanel();
    });
  });

  builder.querySelector("[data-add-custom-field]")?.addEventListener("click", (event) => {
    if (event.currentTarget instanceof HTMLButtonElement) {
      addCustomFormBuilderField(event.currentTarget);
    }
  });

  builder.querySelectorAll("[data-delete-custom-field]").forEach((button) => {
    button.addEventListener("click", () => {
      deleteCustomFormBuilderField(button);
    });
  });

  document.getElementById("save-form-config-button")?.addEventListener("click", saveFormBuilderConfig);
  document.getElementById("reset-form-config-button")?.addEventListener("click", resetFormBuilderConfig);
}

async function saveFormBuilderConfig({ auditAction = "edit_form", auditLabel = "Form settings" } = {}) {
  state.formBuilderStatus = "Saving form settings...";
  state.formBuilderError = "";
  renderHeroPanel();

  try {
    await saveFormConfigToSupabase(activeFormConfig);
    await writeAuditLogSafe({
      action: auditAction,
      tableKey: "form_builder",
      recordId: state.formBuilderTableKey,
      recordLabel: auditLabel,
      details: { active_form: state.formBuilderTableKey },
    });
    state.formBuilderStatus = "Form settings saved to Supabase.";
    state.formBuilderError = "";
    renderSidebarNav();
    renderMeta();
  } catch (error) {
    console.error("Supabase form settings save failed", error);
    state.formBuilderStatus = "";
    state.formBuilderError = `Supabase is not taking form settings: ${error?.message ?? "Unknown error"}`;
  }

  renderHeroPanel();
}

async function resetFormBuilderConfig() {
  const approved = window.confirm("Reset all form labels, toggles, and options to the built-in defaults?");
  if (!approved) return;
  activeFormConfig = cloneJson(defaultFormConfig);
  applyFormConfig(activeFormConfig);
  await saveFormBuilderConfig({ auditAction: "reset_forms", auditLabel: "All form settings" });
}

function renderSearch() {
  return;
}

function summarizeRecord(record) {
  const parts = [];
  if (record.status) parts.push(`Status ${record.status}`);
  if (record.type) parts.push(`Type ${Array.isArray(record.type) ? record.type.join(", ") : record.type}`);
  if (record.project) parts.push(`Project ${record.project}`);
  if (record.venture) parts.push(`Venture ${record.venture}`);
  if (record.task) parts.push(`Task ${record.task}`);
  if (record.due_date) parts.push(`Due ${record.due_date}`);
  if (record.direction) parts.push(`Direction ${record.direction}`);
  return parts.join(" · ") || "Linked record";
}

function getFieldDisplayValue(field, record) {
  if (field.name === "venture") {
    const hierarchy = getHierarchyContext(record);
    if (hierarchy.venture) return String(hierarchy.venture);
  }

  if (field.name === "project") {
    const hierarchy = getHierarchyContext(record);
    if (hierarchy.project) return String(hierarchy.project);
  }

  const rawValue = record?.[field.name];
  if (rawValue == null) return "";
  const relation = getRelationConfig(field.name);
  const isPeopleRelation = Boolean(relation) && (
    relation.table === "people" || (Array.isArray(relation.tables) && relation.tables.includes("people"))
  );
  if (isPeopleRelation) {
    if (Array.isArray(rawValue)) return rawValue.map((item) => formatPersonDisplayLabel(item)).filter(Boolean).join(", ");
    return formatPersonDisplayLabel(rawValue);
  }
  if (Array.isArray(rawValue)) return formatList(rawValue);
  if (state.activeTable === "transactions" && field.name === "amount") return formatIndianNumber(rawValue);
  return String(rawValue);
}

function renderDurationField(field, record = null) {
  const rawValue = String(record?.[field.name] ?? field.value ?? "").trim();
  const parsedValue = parseDurationValue(rawValue);
  const value = parsedValue?.amount ?? "";
  const unit = parsedValue?.unit ?? "h";
  const label = `${escapeHtml(field.label)}${field.required ? " *" : ""}`;
  const hint = field.name === "estimate"
    ? "Use hours or days. Saved as `h` or `d` for the Gantt chart."
    : "Use the same unit format as estimated time.";

  return `
    <label class="form-field">
      <span>${label}</span>
      <div class="duration-field-row">
        <input
          name="${escapeHtml(field.name)}_value"
          type="number"
          min="0.25"
          step="0.25"
          inputmode="decimal"
          value="${escapeHtml(value)}"
          placeholder="0"
        />
        <select name="${escapeHtml(field.name)}_unit">
          ${sortOptionsAlpha(durationUnits).map((option) => `<option value="${option.value}" ${unit === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </div>
      <small class="form-hint">${hint}</small>
    </label>
  `;
}

function renderInlinePrimaryContactPersonFields() {
  const peopleTable = getTableByKey("people");
  if (!peopleTable) return "";

  const inlineFields = getVisibleFields(peopleTable).filter((field) => field.name !== "venture");
  return `
    <div class="inline-primary-contact-fields is-hidden" data-inline-primary-contact-fields>
      <div class="inline-primary-contact-head">
        <strong>Add person</strong>
        <span>This creates a normal People record for this venture.</span>
      </div>
      <div class="inline-primary-contact-grid">
        ${inlineFields.map((field) => {
          const inputName = `${inlinePrimaryContactFieldPrefix}${field.name}`;
          const label = `${escapeHtml(field.label)}${field.required ? " *" : ""}`;
          const placeholder = field.placeholder ? `placeholder="${escapeHtml(field.placeholder)}"` : "";
          const step = field.step ? `step="${escapeHtml(field.step)}"` : "";
          const inputMode = field.inputmode ? `inputmode="${escapeHtml(field.inputmode)}"` : "";
          const dataFormat = field.data_format ? `data-format="${escapeHtml(field.data_format)}"` : "";

          if (field.type === "textarea") {
            return `
              <label class="form-field">
                <span>${label}</span>
                <textarea name="${escapeHtml(inputName)}" rows="4" ${placeholder}></textarea>
              </label>
            `;
          }

          if (field.type === "select") {
            const options = sortStringsAlpha(field.options ?? []);
            return `
              <label class="form-field">
                <span>${label}</span>
                <select name="${escapeHtml(inputName)}">
                  <option value="">Select</option>
                  ${options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}
                </select>
              </label>
            `;
          }

          if (field.type === "checkbox") {
            return `
              <label class="form-field checkbox-field">
                <input name="${escapeHtml(inputName)}" type="checkbox" />
                <span>${label}</span>
              </label>
            `;
          }

          return `
            <label class="form-field">
              <span>${label}</span>
              <input name="${escapeHtml(inputName)}" type="${escapeHtml(field.type)}" ${placeholder} ${step} ${inputMode} ${dataFormat} />
            </label>
          `;
        }).join("")}
      </div>
      <small class="form-hint">The venture name above will be used automatically for this person.</small>
    </div>
  `;
}

function renderField(field, record = null, currentTableKey = "") {
  const required = field.required ? "required" : "";
  const defaultValue = field.value ?? (
    field.type === "date"
      ? formatLocalDateForInput()
      : field.type === "datetime-local"
        ? formatLocalDateTimeForInput()
        : ""
  );
  const fieldValue = record ? getFieldDisplayValue(field, record) : defaultValue;
  const valueAttr = fieldValue ? `value="${escapeHtml(fieldValue)}"` : "";
  const placeholder = field.placeholder ? `placeholder="${escapeHtml(field.placeholder)}"` : "";
  const step = field.step ? `step="${escapeHtml(field.step)}"` : "";
  const inputMode = field.inputmode ? `inputmode="${escapeHtml(field.inputmode)}"` : "";
  const dataFormat = field.data_format ? `data-format="${escapeHtml(field.data_format)}"` : "";
  const label = `${escapeHtml(field.label)}${field.required ? " *" : ""}`;
  const relation = getRelationConfig(field.name);
  const relationOptions = relation ? getRelationOptions(field.name, currentTableKey, record) : [];
  const sortedRelationOptions = sortOptionsAlpha(relationOptions);
  const selectedValues = Array.isArray(record?.[field.name])
    ? record[field.name].map((value) => String(value))
    : fieldValue
      ? [String(fieldValue)]
      : [];
  const isPeopleRelation = Boolean(relation) && (
    relation.table === "people" || (Array.isArray(relation.tables) && relation.tables.includes("people"))
  );

  if (currentTableKey === "tasks" && (field.name === "estimate" || field.name === "time_logged")) {
    return renderDurationField(field, record);
  }

  if (isPeopleRelation) {
    if (relation?.multiple) {
      const selectedLabels = sortedRelationOptions
        .filter((option) => selectedValues.includes(option.value))
        .map((option) => option.label);
      const summaryText = selectedLabels.length
        ? selectedLabels.join(", ")
        : "Select one or more";

      return `
        <label class="form-field">
          <span>${label}</span>
          <details class="multi-select-dropdown">
            <summary class="multi-select-summary">${escapeHtml(summaryText)}</summary>
            <div class="multi-select-menu">
              ${sortedRelationOptions.map((option) => `
                <label class="multi-select-option">
                  <input type="checkbox" name="${escapeHtml(field.name)}" value="${escapeHtml(option.value)}" ${selectedValues.includes(option.value) ? "checked" : ""} />
                  <span>${escapeHtml(option.label)}</span>
                </label>
              `).join("")}
            </div>
          </details>
        </label>
      `;
    }

    if (currentTableKey === "ventures" && field.name === "primary_contact") {
      return `
        <div class="form-field primary-contact-field">
          <span>${label}</span>
          <div class="inline-primary-contact-row">
            <select name="${escapeHtml(field.name)}" ${required} data-primary-contact-select>
              <option value="">Select</option>
              ${sortedRelationOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${selectedValues.includes(option.value) ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
            </select>
            <button class="inline-primary-contact-toggle" type="button" data-inline-primary-contact-toggle aria-label="Add person" title="Add person">+</button>
          </div>
          ${renderInlinePrimaryContactPersonFields()}
        </div>
      `;
    }

    return `
      <label class="form-field">
        <span>${label}</span>
        <select name="${escapeHtml(field.name)}" ${required}>
          <option value="">Select</option>
          ${sortedRelationOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${selectedValues.includes(option.value) ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
    `;
  }

  if (relation) {
    if (relation.multiple) {
      const selectedLabels = sortedRelationOptions
        .filter((option) => selectedValues.includes(option.value))
        .map((option) => option.label);
      const summaryText = selectedLabels.length
        ? selectedLabels.join(", ")
        : "Select one or more";
      return `
        <label class="form-field">
          <span>${label}</span>
          <details class="multi-select-dropdown">
            <summary class="multi-select-summary">${escapeHtml(summaryText)}</summary>
            <div class="multi-select-menu">
              ${sortedRelationOptions.map((option) => `
                <label class="multi-select-option">
                  <input type="checkbox" name="${escapeHtml(field.name)}" value="${escapeHtml(option.value)}" ${selectedValues.includes(option.value) ? "checked" : ""} />
                  <span>${escapeHtml(option.label)}</span>
                </label>
              `).join("")}
            </div>
          </details>
          <small class="form-hint">Select one or more existing records.</small>
        </label>
      `;
    }

    const hierarchy = getHierarchyContext(record);
    const isProjectSelect = field.name === "project" && (currentTableKey === "tasks" || (hierarchyAttachmentTables.has(currentTableKey) && currentTableKey !== "assets"));
    const isTaskSelect = field.name === "task" && hierarchyAttachmentTables.has(currentTableKey);
    const selectPlaceholder = isTaskSelect
      ? (hierarchy.project ? "Select task" : "Select project first")
      : isProjectSelect
        ? (hierarchy.venture ? "Select project" : "Select venture first")
        : "Select";
    const disabledAttr = isTaskSelect
      ? (hierarchy.project ? "" : "disabled")
      : isProjectSelect
        ? (hierarchy.venture ? "" : "disabled")
        : "";

    return `
      <label class="form-field">
        <span>${label}</span>
        <select name="${escapeHtml(field.name)}" ${required} ${disabledAttr}>
          <option value="">${escapeHtml(selectPlaceholder)}</option>
          ${sortedRelationOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${selectedValues.includes(option.value) ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
    `;
  }

  if (field.type === "textarea") {
    return `
      <label class="form-field">
        <span>${label}</span>
        <textarea name="${escapeHtml(field.name)}" rows="4" ${required} ${placeholder}>${escapeHtml(fieldValue)}</textarea>
      </label>
    `;
  }

  if (field.type === "select") {
    const fieldOptions = sortStringsAlpha(field.options ?? []);
    const selectedOption = fieldValue || field.value || "";
    return `
      <label class="form-field">
        <span>${label}</span>
        <select name="${escapeHtml(field.name)}" ${required}>
          <option value="">Select</option>
          ${fieldOptions.map((option) => `<option value="${escapeHtml(option)}" ${selectedOption === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
        </select>
      </label>
    `;
  }

  if (field.type === "checkbox") {
    return `
      <label class="form-field checkbox-field">
        <input name="${escapeHtml(field.name)}" type="checkbox" ${record?.[field.name] ? "checked" : ""} />
        <span>${label}</span>
      </label>
    `;
  }

  return `
    <label class="form-field">
      <span>${label}</span>
      <input name="${escapeHtml(field.name)}" type="${escapeHtml(field.type)}" ${required} ${valueAttr} ${placeholder} ${step} ${inputMode} ${dataFormat} />
    </label>
  `;
}

function renderAdminUserForm(user = null) {
  const ventureOptions = ["All ventures", ...sortStringsAlpha(data.ventures.map((venture) => venture.name))];
  const selectedTables = user?.table_access ?? [];
  const sortedRoles = sortStringsAlpha(accessRoles);
  const sortedStatuses = sortStringsAlpha(["Active", "Suspended"]);

  return `
    <label class="form-field">
      <span>Name</span>
      <input name="user_name" type="text" value="${escapeHtml(user?.name ?? "")}" />
    </label>
    <label class="form-field">
      <span>Email *</span>
      <input name="user_email" type="email" value="${escapeHtml(user?.email ?? "")}" required />
    </label>
    <label class="form-field">
      <span>Password *</span>
      <input name="user_password" type="text" value="${escapeHtml(user?.password ?? "")}" required />
    </label>
    <p id="admin-form-message" class="admin-form-message" aria-live="polite"></p>
    <label class="form-field">
      <span>Role *</span>
      <select name="user_role" required>
        <option value="" ${!user?.role ? "selected" : ""}>Select role</option>
        ${sortedRoles.map((roleKey) => `<option value="${escapeHtml(roleKey)}" ${user?.role === roleKey ? "selected" : ""}>${escapeHtml(roleKey)}</option>`).join("")}
      </select>
    </label>
    <label class="form-field">
      <span>Status *</span>
      <select name="user_status" required>
        ${sortedStatuses.map((status) => `<option value="${status}" ${user?.status === status ? "selected" : ""}>${status}</option>`).join("")}
      </select>
    </label>
    <label class="form-field">
      <span>Venture scope</span>
      <select name="user_venture_scope">
        ${ventureOptions.map((option) => `<option value="${escapeHtml(option)}" ${(user?.venture_scope ?? "All ventures") === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      </select>
    </label>
    <fieldset class="admin-access-fieldset">
      <legend>Table access</legend>
      <div class="admin-access-grid">
        ${tables.map((table) => `
          <label class="admin-access-option">
            <input type="checkbox" name="user_table_access" value="${escapeHtml(table.key)}" ${selectedTables.includes(table.key) ? "checked" : ""} />
            <span>${escapeHtml(table.title)}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;
}

function openForm(key, recordId = null) {
  const table = tables.find((item) => item.key === key);
  if (!table) return;
  const record = recordId ? data[key].find((item) => item.id === recordId) ?? null : null;
  const entityLabel = table.singular || table.title;
  state.activeTable = key;
  state.modalEntity = "table";
  state.modalMode = record ? "edit" : "create";
  state.editingRecordId = record?.id ?? null;
  state.editingUserId = null;
  el.modalTitle.textContent = `${record ? "Edit" : "Add"} ${entityLabel}`;
  const visibleFields = getVisibleFields(table);
  el.modalSubtitle.textContent = `${visibleFields.length} fields`;
  el.form.innerHTML = visibleFields.map((field) => renderField(field, record, key)).join("");
  el.saveButton.textContent = `${record ? "Save" : "Create"} ${entityLabel}`;
  setFormMessage("");
  el.modal.classList.add("open");
  syncBodyModalState();
  bindFormattedInputs();
  bindHierarchyFilters(record);
  bindInlinePrimaryContactComposer();
}

function openAdminUserForm(userId = null) {
  const user = userId ? userAccounts.find((item) => item.id === userId) ?? null : null;
  state.modalEntity = "user";
  state.modalMode = user ? "edit" : "create";
  state.editingUserId = user?.id ?? null;
  state.editingRecordId = null;
  el.modalTitle.textContent = `${user ? "Edit" : "Add"} User`;
  el.modalSubtitle.textContent = "Password and access control";
  el.form.innerHTML = renderAdminUserForm(user);
  el.saveButton.textContent = `${user ? "Save" : "Create"} User`;
  el.modal.classList.add("open");
  syncBodyModalState();
  bindFormattedInputs();
  setFormMessage("");
  setAdminFormMessage("");
}

function setFormMessage(message = "") {
  const messageEl = document.getElementById("form-message");
  if (messageEl) messageEl.textContent = message;
}

function setAdminFormMessage(message = "") {
  const messageEl = el.form?.querySelector("#admin-form-message");
  if (messageEl) messageEl.textContent = message;
}

function setSaveButtonLoading(isLoading, label = "Saving...") {
  if (!el.saveButton) return;
  if (isLoading) {
    el.saveButton.dataset.defaultText = el.saveButton.textContent ?? "Save";
    el.saveButton.textContent = label;
    el.saveButton.disabled = true;
    return;
  }

  el.saveButton.disabled = false;
  if (el.saveButton.dataset.defaultText) {
    el.saveButton.textContent = el.saveButton.dataset.defaultText;
    delete el.saveButton.dataset.defaultText;
  }
}

function syncBodyModalState() {
  if (el.modal?.classList.contains("open") || el.confirmModal?.classList.contains("open")) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

function openConfirmDialog({ title = "Confirm action?", message, confirmLabel = "Confirm" }) {
  if (confirmResolve) {
    confirmResolve(false);
    confirmResolve = null;
  }

  el.confirmTitle.textContent = title;
  el.confirmMessage.textContent = message;
  el.confirmDeleteButton.textContent = confirmLabel;
  el.confirmModal.classList.add("open");
  el.confirmModal.setAttribute("aria-hidden", "false");
  syncBodyModalState();
  el.confirmDeleteButton.focus();

  return new Promise((resolve) => {
    confirmResolve = resolve;
  });
}

function openDeleteConfirm(message, confirmLabel = "Delete") {
  return openConfirmDialog({
    title: "Delete item?",
    message,
    confirmLabel,
  });
}

function closeDeleteConfirm(result = false) {
  if (!confirmResolve) {
    el.confirmModal.classList.remove("open");
    el.confirmModal.setAttribute("aria-hidden", "true");
    syncBodyModalState();
    return;
  }

  const resolve = confirmResolve;
  confirmResolve = null;
  el.confirmModal.classList.remove("open");
  el.confirmModal.setAttribute("aria-hidden", "true");
  syncBodyModalState();
  resolve(result);
}

function bindHierarchyFilters(record = null) {
  const ventureSelect = el.formElement?.elements?.venture;
  const projectSelect = el.formElement?.elements?.project;
  const taskSelect = el.formElement?.elements?.task;

  if (!(ventureSelect instanceof HTMLSelectElement)) return;
  if (!(projectSelect instanceof HTMLSelectElement)) return;

  const syncTaskOptions = () => {
    if (!(taskSelect instanceof HTMLSelectElement)) return;

    const selectedTask = taskSelect.value.trim();
    const selectedProject = projectSelect.value.trim();
    const options = sortOptionsAlpha(getRelationOptions("task", state.activeTable, record));

    taskSelect.innerHTML = [
      `<option value="">${escapeHtml(selectedProject ? "Select task" : "Select project first")}</option>`,
      ...options.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`),
    ].join("");

    taskSelect.disabled = !selectedProject;

    if (selectedTask && options.some((option) => option.value === selectedTask)) {
      taskSelect.value = selectedTask;
      return;
    }

    if (record?.task && options.some((option) => option.value === record.task)) {
      taskSelect.value = record.task;
      return;
    }

    taskSelect.value = "";
  };

  const parentTaskSelect = el.formElement?.elements?.parent_task;
  const syncParentTaskOptions = () => {
    if (!(parentTaskSelect instanceof HTMLSelectElement)) return;

    const selectedParentTask = parentTaskSelect.value.trim();
    const selectedProject = projectSelect.value.trim();
    const options = sortOptionsAlpha(getRelationOptions("parent_task", state.activeTable, record));

    parentTaskSelect.innerHTML = [
      `<option value="">${escapeHtml(selectedProject ? "Select parent task" : "Select project first")}</option>`,
      ...options.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`),
    ].join("");

    parentTaskSelect.disabled = !selectedProject;

    if (selectedParentTask && options.some((option) => option.value === selectedParentTask)) {
      parentTaskSelect.value = selectedParentTask;
      return;
    }

    if (record?.parent_task && options.some((option) => option.value === record.parent_task)) {
      parentTaskSelect.value = record.parent_task;
      return;
    }

    parentTaskSelect.value = "";
  };

  const syncProjectOptions = () => {
    const selectedProject = projectSelect.value.trim();
    const selectedVenture = ventureSelect.value.trim();
    const options = sortOptionsAlpha(getRelationOptions("project", state.activeTable, record));

    projectSelect.innerHTML = [
      `<option value="">${escapeHtml(selectedVenture ? "Select project" : "Select venture first")}</option>`,
      ...options.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`),
    ].join("");

    projectSelect.disabled = !selectedVenture;

    if (selectedProject && options.some((option) => option.value === selectedProject)) {
      projectSelect.value = selectedProject;
    } else if (record?.project && options.some((option) => option.value === record.project)) {
      projectSelect.value = record.project;
    } else {
      projectSelect.value = "";
    }

    syncTaskOptions();
    syncParentTaskOptions();
  };

  ventureSelect.addEventListener("change", syncProjectOptions);
  projectSelect.addEventListener("change", () => {
    syncTaskOptions();
    syncParentTaskOptions();
  });
  syncProjectOptions();
}

function bindFormattedInputs() {
  el.form.querySelectorAll('input[data-format="transaction-amount"]').forEach((input) => {
    const applyFormatting = () => {
      input.value = formatIndianNumber(input.value);
    };

    applyFormatting();
    input.addEventListener("input", applyFormatting);
  });
}

function bindInlinePrimaryContactComposer() {
  const toggleButton = el.formElement?.querySelector("[data-inline-primary-contact-toggle]");
  const inlineFields = el.formElement?.querySelector("[data-inline-primary-contact-fields]");
  const primaryContactSelect = el.formElement?.querySelector("[data-primary-contact-select]");
  if (!(toggleButton instanceof HTMLButtonElement) || !(inlineFields instanceof HTMLElement)) return;

  const syncInlineState = (isOpen) => {
    inlineFields.classList.toggle("is-hidden", !isOpen);
    toggleButton.classList.toggle("is-active", isOpen);
    toggleButton.setAttribute("aria-pressed", isOpen ? "true" : "false");
    if (primaryContactSelect instanceof HTMLSelectElement) {
      primaryContactSelect.disabled = isOpen;
      if (isOpen) primaryContactSelect.value = "";
    }
  };

  syncInlineState(false);
  toggleButton.addEventListener("click", () => {
    syncInlineState(inlineFields.classList.contains("is-hidden"));
  });
}

function normalizeHierarchicalRecord(tableKey, record, currentRecordId = "") {
  if (tableKey === "tasks") {
    const parentTaskTitle = String(record.parent_task ?? "").trim();
    const parentTaskRow = parentTaskTitle ? getTaskByTitle(parentTaskTitle) : null;
    if (parentTaskRow && String(parentTaskRow.id ?? "") !== String(currentRecordId)) {
      record.parent_task = String(parentTaskRow.title ?? "").trim();
      if (parentTaskRow.project) {
        record.project = String(parentTaskRow.project).trim();
      }
      if (parentTaskRow.venture) {
        record.venture = String(parentTaskRow.venture).trim();
      }
    } else if (parentTaskTitle) {
      record.parent_task = "";
    }

    const projectRow = String(record.project ?? "").trim() ? getProjectByName(String(record.project).trim()) : null;
    if (projectRow?.venture) {
      record.venture = String(projectRow.venture).trim();
    }
    return record;
  }

  if (!hierarchyAttachmentTables.has(tableKey)) return record;

  const selectedTask = String(record.task ?? "").trim();
  const selectedProject = String(record.project ?? "").trim();
  let selectedVenture = String(record.venture ?? "").trim();

  const taskRow = selectedTask ? getTaskByTitle(selectedTask) : null;
  const projectRow = selectedProject ? getProjectByName(selectedProject) : null;

  if (taskRow?.project) {
    record.project = String(taskRow.project).trim();
  } else if (selectedProject) {
    record.project = selectedProject;
  } else {
    record.project = "";
  }

  const resolvedProjectRow = record.project ? getProjectByName(record.project) : projectRow;
  if (resolvedProjectRow?.venture) {
    selectedVenture = String(resolvedProjectRow.venture).trim();
  }

  if (!selectedVenture && taskRow?.project) {
    const taskProject = getProjectByName(taskRow.project);
    if (taskProject?.venture) {
      selectedVenture = String(taskProject.venture).trim();
    }
  }

  record.venture = selectedVenture;
  record.task = selectedTask;
  return record;
}

function normalizeAllHierarchyData() {
  const changedRecords = [];
  const hierarchyTables = tables
    .map((table) => table.key)
    .filter((tableKey) => tableKey === "tasks" || hierarchyAttachmentTables.has(tableKey));

  hierarchyTables.forEach((tableKey) => {
    data[tableKey] = (data[tableKey] ?? []).map((row) => {
      const nextRow = normalizeHierarchicalRecord(tableKey, { ...row }, String(row?.id ?? ""));
      const changed = JSON.stringify(row) !== JSON.stringify(nextRow);
      if (changed) changedRecords.push({ tableKey, row: nextRow });
      return nextRow;
    });
  });

  return changedRecords;
}

function closeForm() {
  el.modal.classList.remove("open");
  syncBodyModalState();
  setSaveButtonLoading(false);
  setFormMessage("");
  state.modalMode = "create";
  state.modalEntity = "table";
  state.editingRecordId = null;
  state.editingUserId = null;
}

function buildInlinePrimaryContactPersonDraft() {
  const inlineFields = el.formElement?.querySelector("[data-inline-primary-contact-fields]");
  if (!(inlineFields instanceof HTMLElement) || inlineFields.classList.contains("is-hidden")) return { person: null, hasValues: false };

  const peopleTable = getTableByKey("people");
  if (!peopleTable) return { person: null, hasValues: false };

  const formData = new FormData(el.formElement);
  const person = {};
  let hasValues = false;

  getVisibleFields(peopleTable)
    .filter((field) => field.name !== "venture")
    .forEach((field) => {
      const inputName = `${inlinePrimaryContactFieldPrefix}${field.name}`;

      if (field.type === "checkbox") {
        const checkbox = el.formElement.elements[inputName];
        person[field.name] = checkbox?.checked ?? false;
        hasValues = hasValues || person[field.name];
        return;
      }

      const rawValue = String(formData.get(inputName) ?? "").trim();
      person[field.name] = rawValue;
      if (rawValue) hasValues = true;
    });

  if (!hasValues) return { person: null, hasValues: false };

  const missingRequired = getVisibleFields(peopleTable)
    .filter((field) => field.name !== "venture" && field.required)
    .find((field) => !String(person[field.name] ?? "").trim());
  if (missingRequired) {
    return { error: `${missingRequired.label} is required for the new primary contact.`, person: null, hasValues: true };
  }

  return { person, hasValues: true };
}

function buildRecordFromForm(table) {
  const formData = new FormData(el.formElement);
  const record = {};

  getVisibleFields(table).forEach((field) => {
    if (field.type === "checkbox") {
      record[field.name] = el.formElement.elements[field.name].checked;
      return;
    }

    if (table.key === "tasks" && (field.name === "estimate" || field.name === "time_logged")) {
      const rawAmount = String(formData.get(`${field.name}_value`) ?? "").trim();
      const amount = Number(rawAmount);
      const unit = String(formData.get(`${field.name}_unit`) ?? "h").trim();
      record[field.name] = rawAmount && Number.isFinite(amount) && amount > 0
        ? formatDurationValue(amount, unit === "d" ? "d" : "h")
        : "";
      return;
    }

    const relation = getRelationConfig(field.name);
    const isPeopleRelation = Boolean(relation) && (
      relation.table === "people" || (Array.isArray(relation.tables) && relation.tables.includes("people"))
    );

    if (isPeopleRelation) {
      if (relation?.multiple) {
        record[field.name] = formData.getAll(field.name).map((value) => String(value).trim()).filter(Boolean);
      } else {
        record[field.name] = String(formData.get(field.name) ?? "").trim();
      }
      return;
    }

    if (relation?.multiple) {
      record[field.name] = formData.getAll(field.name).map((value) => String(value).trim()).filter(Boolean);
      return;
    }

    const rawValue = String(formData.get(field.name) ?? "").trim();
    if (!rawValue) {
      record[field.name] = "";
      return;
    }

    if (table.key === "transactions" && field.name === "amount") {
      record[field.name] = formatIndianNumber(rawValue);
      return;
    }

    if (arrayFields.has(field.name)) {
      record[field.name] = rawValue.split(",").map((item) => item.trim()).filter(Boolean);
      return;
    }

    if (field.type === "number") {
      record[field.name] = Number(rawValue);
      return;
    }

    record[field.name] = rawValue;
  });

  if (table.key === "tasks") {
    const linkedProject = data.projects.find((item) => item.name === record.project) ?? null;
    if (linkedProject?.venture) {
      record.venture = linkedProject.venture;
    }
  }

  return normalizeHierarchicalRecord(table.key, record, state.editingRecordId ?? "");
}

function validateRecordBeforeSave(table, record) {
  return { valid: true, message: "" };
}

function applySupabaseRecordToTable(tableKey, record, localRecordId = "") {
  const rows = data[tableKey] ?? [];
  const remoteId = String(record?.id ?? "");
  const localId = String(localRecordId ?? "");
  let replaced = false;

  data[tableKey] = rows.map((row) => {
    const rowId = String(row?.id ?? "");
    if ((remoteId && rowId === remoteId) || (localId && rowId === localId)) {
      replaced = true;
      return record;
    }
    return row;
  });

  if (!replaced) {
    data[tableKey].unshift(record);
  }
}

async function saveRecord() {
  const table = tables.find((item) => item.key === state.activeTable);
  if (!table) return;

  const payload = buildRecordFromForm(table);
  const inlinePrimaryContactDraft = table.key === "ventures" ? buildInlinePrimaryContactPersonDraft() : { person: null, hasValues: false };
  if (inlinePrimaryContactDraft?.error) {
    setFormMessage(inlinePrimaryContactDraft.error);
    return;
  }
  if (table.key === "ventures" && inlinePrimaryContactDraft.person) {
    payload.primary_contact = "";
  }
  const validation = validateRecordBeforeSave(table, payload);
  if (!validation.valid) {
    setFormMessage(validation.message);
    return;
  }
  let nextRecord = null;
  const isEdit = state.modalMode === "edit" && state.editingRecordId;
  const normalizedPeopleName = table.key === "people" ? String(payload.name ?? "").trim() : "";
  const existingPeopleRow = !isEdit && table.key === "people" && normalizedPeopleName
    ? data.people.find((item) => String(item.name ?? "").trim() === normalizedPeopleName) ?? null
    : null;

  if (isEdit && state.editingRecordId) {
    const index = data[table.key].findIndex((item) => item.id === state.editingRecordId);
    if (index >= 0) {
      nextRecord = { ...data[table.key][index], ...payload };
    }
  } else if (existingPeopleRow) {
    nextRecord = { ...existingPeopleRow, ...payload };
  } else {
    nextRecord = {
      id: `${table.key.slice(0, 3)}_${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...payload,
    };
  }

  if (!nextRecord) return;

  setFormMessage("");
  setSaveButtonLoading(true);
  try {
    let syncedRecord = await syncRecordToSupabase(table.key, nextRecord, { mode: isEdit ? "update" : "insert" });
    if (table.key === "ventures" && inlinePrimaryContactDraft.person) {
      const ventureName = String(syncedRecord.name ?? payload.name ?? "").trim();
      const personDraft = {
        id: `ppl_${Date.now()}`,
        createdAt: new Date().toISOString(),
        ...inlinePrimaryContactDraft.person,
        venture: ventureName,
      };
      let syncedPerson = null;

      try {
        syncedPerson = await syncRecordToSupabase("people", personDraft, { mode: "insert" });
        applySupabaseRecordToTable("people", syncedPerson, personDraft.id);
        await writeAuditLogSafe({
          action: "add",
          tableKey: "people",
          record: syncedPerson,
          details: {
            source: "inline_primary_contact",
            parent_table: "ventures",
            parent_record_id: syncedRecord.id,
          },
        });
        syncedRecord = await syncRecordToSupabase("ventures", {
          ...syncedRecord,
          primary_contact: syncedPerson.name,
        }, { mode: "update" });
      } catch (error) {
        error.ventureSavedRecord = syncedRecord;
        throw error;
      }
    }

    applySupabaseRecordToTable(table.key, syncedRecord, nextRecord.id);
    await writeAuditLogSafe({
      action: isEdit || existingPeopleRow ? "edit" : "add",
      tableKey: table.key,
      record: syncedRecord,
    });
    normalizeAllHierarchyData();
    closeForm();
    renderAll();
    await refreshRemoteData({ syncHierarchy: true, render: true });
  } catch (error) {
    console.error("Supabase save failed", error);
    if (error?.ventureSavedRecord) {
      applySupabaseRecordToTable("ventures", error.ventureSavedRecord, nextRecord.id);
      state.modalMode = "edit";
      state.editingRecordId = error.ventureSavedRecord.id;
      await refreshRemoteData({ syncHierarchy: true, render: true });
      setFormMessage(`Venture saved in Supabase, but primary contact failed: ${error?.message ?? "Unknown error"}`);
      return;
    }
    setFormMessage(`Supabase is not taking this data: ${error?.message ?? "Unknown error"}`);
  } finally {
    setSaveButtonLoading(false);
  }
}

async function saveAdminUser() {
  const formData = new FormData(el.formElement);
  const payload = {
    name: String(formData.get("user_name") ?? "").trim(),
    email: String(formData.get("user_email") ?? "").trim(),
    password: String(formData.get("user_password") ?? "").trim(),
    role: String(formData.get("user_role") ?? "Employee").trim(),
    status: String(formData.get("user_status") ?? "Active").trim(),
    venture_scope: String(formData.get("user_venture_scope") ?? "All ventures").trim(),
    table_access: formData.getAll("user_table_access").map((value) => String(value)),
  };

  if (!payload.password) {
    setAdminFormMessage("Password is required.");
    return false;
  }

  if (!payload.role) {
    setAdminFormMessage("Role is required.");
    return false;
  }

  const duplicateUsers = getPasswordMatches(payload.password, state.modalMode === "edit" ? state.editingUserId : null);
  if (duplicateUsers.length > 0) {
    setAdminFormMessage(`Password already exists for ${duplicateUsers.map((user) => user.name || user.email || user.id).join(", ")}. Passwords are case-insensitive and must be unique.`);
    return false;
  }

  const isEdit = state.modalMode === "edit" && state.editingUserId;
  const existingUser = isEdit ? userAccounts.find((item) => item.id === state.editingUserId) ?? null : null;
  const nextUser = isEdit
    ? {
      ...existingUser,
      ...payload,
      id: state.editingUserId,
      createdAt: existingUser?.createdAt ?? new Date().toISOString(),
      createdBy: existingUser?.createdBy ?? "System",
    }
    : {
      id: `usr_${Date.now()}`,
      ...payload,
      createdAt: new Date().toISOString(),
      createdBy: state.currentUser?.name || state.currentUser?.email || "System",
    };

  setAdminFormMessage("");
  setSaveButtonLoading(true);
  try {
    const savedUser = await saveAdminUserToSupabase(nextUser, { mode: isEdit ? "update" : "insert" });
    applyAdminUserToRuntime(savedUser);
    await writeAuditLogSafe({
      action: isEdit ? "edit_user" : "add_user",
      tableKey: ADMIN_USERS_TABLE,
      record: savedUser,
    });
    await refreshAdminUsersFromSupabase();
    if (state.currentUser?.id === savedUser.id) {
      state.currentUser = savedUser;
      state.role = savedUser.role;
      setStoredAuthUser(savedUser);
    }
    closeForm();
    renderAll();
    return true;
  } catch (error) {
    console.error("Supabase user save failed", error);
    setAdminFormMessage(`Supabase is not taking this user: ${error?.message ?? "Unknown error"}`);
    return false;
  } finally {
    setSaveButtonLoading(false);
  }
}

async function deleteAdminUser(userId) {
  const user = userAccounts.find((item) => item.id === userId);
  if (!user) return false;
  const approved = await openDeleteConfirm(`Delete ${user.name}?`);
  if (!approved) return false;
  const isDeletingCurrentUser = state.currentUser?.id === userId;

  try {
    await deleteAdminUserFromSupabase(userId);
    await writeAuditLogSafe({
      action: "delete_user",
      tableKey: ADMIN_USERS_TABLE,
      record: user,
    });
    await refreshAdminUsersFromSupabase();
    if (isDeletingCurrentUser) {
      state.currentUser = null;
      state.isAuthenticated = false;
      setStoredAuthState(false);
      setStoredAuthUser(null);
      renderLoginScreen("Your admin user was deleted in Supabase.");
      return true;
    }
    renderSidebarNav();
    renderMeta();
    renderHeroPanel();
    return true;
  } catch (error) {
    console.error("Supabase user delete failed", error);
    state.adminUserError = `Supabase is not taking this delete: ${error?.message ?? "Unknown error"}`;
    renderHeroPanel();
    return false;
  }
}

async function setRecordArchived(tableKey, recordId, archived) {
  if (!canArchiveRecord(tableKey)) return false;
  const table = tables.find((item) => item.key === tableKey);
  if (!table) return false;
  const row = data[tableKey].find((item) => item.id === recordId);
  if (!row) return false;
  if (isRecordArchived(row) === archived) return true;

  const label = row?.name || row?.title || row?.reference || table.singular || table.title;
  const approved = await openConfirmDialog({
    title: archived ? "Archive record?" : "Restore record?",
    message: archived
      ? `Do you want to archive ${label}? It will move to Archived records and can be restored later.`
      : `Do you want to restore ${label}? It will move back to active records.`,
    confirmLabel: archived ? "Archive" : "Restore",
  });
  if (!approved) return false;

  const nextRecord = {
    ...row,
    archived,
    custom_fields: {
      ...(isPlainObject(row.custom_fields) ? row.custom_fields : {}),
      archived,
    },
  };

  try {
    const syncedRecord = await syncRecordToSupabase(tableKey, nextRecord, { mode: "update" });
    applySupabaseRecordToTable(tableKey, syncedRecord, recordId);
    await writeAuditLogSafe({
      action: archived ? "archive" : "restore",
      tableKey,
      record: syncedRecord,
    });
    normalizeAllHierarchyData();
    renderAll();
    await refreshRemoteData({ syncHierarchy: true, render: true });
    return true;
  } catch (error) {
    console.error("Supabase archive update failed", error);
    window.alert(`Supabase is not taking this archive change: ${error?.message ?? "Unknown error"}`);
    return false;
  }
}

async function deleteRecord(tableKey, recordId) {
  if (canArchiveRecord(tableKey)) {
    return setRecordArchived(tableKey, recordId, true);
  }
  const table = tables.find((item) => item.key === tableKey);
  if (!table) return false;
  const row = data[tableKey].find((item) => item.id === recordId);
  const label = row?.name || row?.title || row?.reference || table.singular || table.title;
  const approved = await openDeleteConfirm(`Delete ${label}?`);
  if (!approved) return false;
  const taskIdsToDelete = tableKey === "tasks" ? getTaskDescendantIds(recordId) : [recordId];
  const deletedRows = taskIdsToDelete
    .map((id) => data[tableKey].find((item) => item.id === id))
    .filter(Boolean);

  try {
    if (tableKey === "tasks") {
      await Promise.all(taskIdsToDelete.map((id) => removeRecordFromSupabase("tasks", id)));
      data.tasks = data.tasks.filter((item) => !taskIdsToDelete.includes(item.id));
    } else {
      await removeRecordFromSupabase(tableKey, recordId);
      data[tableKey] = data[tableKey].filter((item) => item.id !== recordId);
    }
    await Promise.all(deletedRows.map((deletedRow) => writeAuditLogSafe({
      action: "delete",
      tableKey,
      record: deletedRow,
    })));
    normalizeAllHierarchyData();
    renderAll();
    await refreshRemoteData({ syncHierarchy: true, render: true });
  } catch (error) {
    console.error("Supabase delete failed", error);
    window.alert(`Supabase is not taking this delete: ${error?.message ?? "Unknown error"}`);
    return false;
  }
  return true;
}

function bindEvents() {
  el.loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await loginApp(String(el.loginPassword?.value ?? "").trim());
  });

  el.loginPasswordToggle?.addEventListener("click", () => {
    const isVisible = el.loginPassword?.type === "text";
    if (!el.loginPassword) return;
    el.loginPassword.type = isVisible ? "password" : "text";
    el.loginPasswordToggle.setAttribute("aria-label", isVisible ? "Show password" : "Hide password");
    el.loginPasswordToggle.setAttribute("aria-pressed", isVisible ? "false" : "true");
  });

  el.homeButton.addEventListener("click", () => {
    state.activeNav = "dashboard";
    state.search = "";
    state.detailTableKey = null;
    state.detailRecordId = null;
    state.detailTreeOpen = false;
    clearDetailHistory();
    if (state.isMobileViewport) {
      state.isMobileNavOpen = false;
      applySidebarState();
    }
    syncCurrentViewUrl();
    renderMeta();
    renderSidebarNav();
    renderHeroPanel();
  });

  el.sidebarToggle.addEventListener("click", () => {
    if (state.isMobileViewport) {
      state.isMobileNavOpen = false;
    } else {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    }
    applySidebarState();
  });

  el.mobileNavButton?.addEventListener("click", () => {
    state.isMobileNavOpen = !state.isMobileNavOpen;
    if (state.isMobileNavOpen) closeFormBuilderTableMenu();
    applySidebarState();
  });

  el.mobileNavScrim?.addEventListener("click", closeMobileNav);

  if (el.projectSelect) {
    el.projectSelect.addEventListener("change", (event) => {
      state.projectId = event.target.value;
    });
  }

  if (el.taskSelect) {
    el.taskSelect.addEventListener("change", (event) => {
      state.taskId = event.target.value;
      const task = data.tasks.find((item) => item.id === state.taskId);
      const project = data.projects.find((item) => item.name === task?.project);
      if (project) state.projectId = project.id;
    });
  }

  el.confirmModal.addEventListener("click", (event) => {
    if (event.target === el.confirmModal) closeDeleteConfirm(false);
  });

  el.closeButton.addEventListener("click", closeForm);
  el.confirmCancelButton.addEventListener("click", () => closeDeleteConfirm(false));
  el.confirmDeleteButton.addEventListener("click", () => closeDeleteConfirm(true));
  el.formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (state.modalEntity === "user") await saveAdminUser();
    else {
      try {
        await saveRecord();
      } catch (error) {
        console.error("Failed to save record", error);
        window.alert(`Save failed: ${error?.message ?? "Unknown error"}`);
      }
    }
  });

  el.heroPanel.addEventListener("click", (event) => {
    if (event.target instanceof Element) {
      const ganttViewAllButton = event.target.closest("[data-gantt-view-all]");
      if (ganttViewAllButton instanceof HTMLElement) {
        event.stopPropagation();
        const nextTable = ganttViewAllButton.dataset.ganttViewAll;
        if (!nextTable) return;
        state.ganttSidebarExpanded = {
          ...state.ganttSidebarExpanded,
          [nextTable]: !state.ganttSidebarExpanded?.[nextTable],
        };
        renderHeroPanel();
        return;
      }

      const ganttWorkstreamsToggle = event.target.closest("[data-gantt-workstreams-toggle]");
      if (ganttWorkstreamsToggle instanceof HTMLElement) {
        event.stopPropagation();
        const currentCollapsed = state.ganttWorkstreamsCollapsed ?? state.isMobileViewport;
        state.ganttWorkstreamsCollapsed = !currentCollapsed;
        renderHeroPanel();
        return;
      }

      const ganttFilterButton = event.target.closest("[data-gantt-filter]");
      if (ganttFilterButton instanceof HTMLElement) {
        event.stopPropagation();
        const nextTable = ganttFilterButton.dataset.ganttFilter;
        setGanttVisibleTable(nextTable);
        syncCurrentViewUrl();
        renderHeroPanel();
        return;
      }

    }

    const target = event.target instanceof Element ? event.target.closest("[data-gantt-shift],[data-gantt-today],[data-gantt-month-shift],[data-gantt-nav-shift],[data-gantt-open]") : null;
    if (!(target instanceof HTMLElement) || state.activeNav !== "gantt") return;

    if (target.dataset.ganttShift) {
      shiftGanttWindow(Number(target.dataset.ganttShift || 0));
      return;
    }

    if (target.dataset.ganttToday) {
      resetGanttToday();
      return;
    }

    if (target.dataset.ganttMonthShift) {
      jumpGanttMonth(Number(target.dataset.ganttMonthShift || 0));
      return;
    }

    if (target.dataset.ganttNavShift) {
      shiftGanttWindow(Number(target.dataset.ganttNavShift || 0));
      return;
    }

    if (target.dataset.ganttOpen) {
      const recordId = target.dataset.ganttOpen;
      const tableKey = target.dataset.ganttTable;
      if (!recordId || !tableKey) return;
      openRecordDetail(tableKey, recordId, { preserveNav: true });
    }
  });

  el.heroPanel.addEventListener("change", (event) => {
    if (state.activeNav !== "gantt") return;

    if (event.target instanceof HTMLSelectElement && event.target.dataset.ganttScale) {
      setGanttScale(event.target.value);
      syncGanttUrl(getGanttWeekStart());
      renderHeroPanel();
      return;
    }

    const target = event.target instanceof HTMLInputElement ? event.target : null;
    if (!target?.dataset.ganttDate) return;

    const nextStart = getDateAtDayStart(target.value);
    if (!nextStart) return;
    setGanttWeekStart(nextStart);
    syncGanttUrl(nextStart);
    renderHeroPanel();
  });

  window.addEventListener("popstate", () => {
    applyUrlState();
    if (state.isSharedView) {
      state.sharedBundle = null;
      loadSharedBundle();
      return;
    }
    renderMeta();
    renderSidebarNav();
    renderHeroPanel();
  });

  document.addEventListener("keydown", (event) => {
    if (el.confirmModal.classList.contains("open") && event.key === "Enter") {
      event.preventDefault();
      closeDeleteConfirm(true);
      return;
    }
    if (event.key !== "Escape") return;
    if (state.isMobileViewport && state.isMobileNavOpen) {
      closeMobileNav();
      return;
    }
    if (el.confirmModal.classList.contains("open")) {
      closeDeleteConfirm(false);
      return;
    }
    closeForm();
  });

  window.addEventListener("resize", syncViewportState);
  window.addEventListener("focus", () => {
    if (!state.isSharedView) scheduleRemoteRefresh({ syncHierarchy: true, render: true });
  });
  document.addEventListener("visibilitychange", () => {
    if (!state.isSharedView && document.visibilityState === "visible") {
      scheduleRemoteRefresh({ syncHierarchy: true, render: true });
    }
  });
}

function renderAll() {
  if (state.isSharedView) {
    renderSharedPage();
    return;
  }
  if (!state.isAuthenticated) {
    renderLoginScreen(el.loginError?.textContent ?? "");
    return;
  }
  renderMeta();
  applySidebarState();
  renderSidebarNav();
  renderSidebarFooter();
  renderHeroPanel();
  renderSelectors();
  renderDashboard();
  renderSearch();
}

async function init() {
  el.loginScreen = document.getElementById("login-screen");
  el.loginForm = document.getElementById("login-form");
  el.loginPassword = document.getElementById("login-password");
  el.loginPasswordToggle = document.getElementById("login-password-toggle");
  el.loginError = document.getElementById("login-error");
  el.layout = document.querySelector(".layout");
  el.sidebarNav = document.getElementById("sidebar-nav");
  el.sidebarFooter = document.getElementById("sidebar-footer");
  el.homeButton = document.getElementById("home-button");
  el.sidebarToggle = document.getElementById("sidebar-toggle");
  el.mobileNavButton = document.getElementById("mobile-nav-button");
  el.mobileNavTitle = document.getElementById("mobile-nav-title");
  el.mobileNavScrim = document.getElementById("mobile-nav-scrim");
  el.heroPanel = document.getElementById("hero-panel");
  el.modal = document.getElementById("modal");
  el.modalTitle = document.getElementById("modal-title");
  el.modalSubtitle = document.getElementById("modal-subtitle");
  el.formElement = document.querySelector(".form");
  el.form = document.getElementById("form");
  el.closeButton = document.getElementById("close-button");
  el.saveButton = document.getElementById("save-button");
  el.confirmModal = document.getElementById("confirm-modal");
  el.confirmTitle = document.getElementById("confirm-title");
  el.confirmMessage = document.getElementById("confirm-message");
  el.confirmCancelButton = document.getElementById("confirm-cancel");
  el.confirmDeleteButton = document.getElementById("confirm-delete");

  applyUrlState();
  state.isMobileViewport = window.innerWidth <= MOBILE_BREAKPOINT;
  bindEvents();
  if (state.isSharedView) {
    state.sharedAuthorKey = getSharedAuthorKey(state.sharedToken);
    showSharedShell();
    await loadSharedBundle();
    return;
  }
  if (!supabaseClient) {
    state.isAuthenticated = false;
    setStoredAuthState(false);
    setStoredAuthUser(null);
    clearLegacyWorkflowStorage();
    normalizeAllHierarchyData();
    renderLoginScreen(SUPABASE_UNCONFIGURED_MESSAGE);
    renderAll();
    return;
  }
  try {
    await refreshAdminUsersFromSupabase();
  } catch (error) {
    console.error("Supabase users load failed", error);
    state.isAuthenticated = false;
    setStoredAuthState(false);
    setStoredAuthUser(null);
  }
  state.isAuthenticated = getStoredAuthState();
  const storedUser = state.isAuthenticated ? getStoredAuthUser() : null;
  state.currentUser = storedUser
    ? userAccounts.find((user) => user.id === storedUser.id) ?? null
    : null;
  if (!state.currentUser) {
    state.isAuthenticated = false;
    setStoredAuthState(false);
    setStoredAuthUser(null);
  } else {
    state.role = state.currentUser.role;
  }
  const validation = validateUniquePasswords();
  if (!validation.valid) console.error(`Duplicate passwords found for: ${validation.users.join(", ")} (${validation.password})`);
  try {
    await loadFormConfigFromSupabase();
  } catch (error) {
    console.error("Supabase form settings load failed", error);
    if (state.isAuthenticated) {
      window.alert(`Supabase form settings load failed: ${error?.message ?? "Unknown error"}`);
    }
  }
  clearLegacyWorkflowStorage();
  void sendKeepalivePing({ source: "app-boot" });
  if (state.isAuthenticated) {
    try {
      await refreshRemoteData({ syncHierarchy: true, render: false });
    } catch (error) {
      console.error("Supabase data load failed", error);
      window.alert(`Supabase data load failed: ${error?.message ?? "Unknown error"}`);
    }
    showAppShell();
    renderAll();
    setupSupabaseRealtime();
  } else {
    renderLoginScreen(state.adminUserError || "");
    normalizeAllHierarchyData();
    renderAll();
  }
}

init().catch((error) => {
  console.error("App boot failed", error);
  document.body.dataset.bootError = error?.message ?? String(error);
});
