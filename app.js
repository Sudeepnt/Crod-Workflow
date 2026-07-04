const tables = [
  {
    key: "ventures",
    title: "Ventures",
    singular: "Venture",
    summary: "Every company-shaped entity, including GG itself.",
    listColumns: ["name", "type", "status", "verticals"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "type", label: "Type", type: "select", options: ["Self", "Client", "Publisher", "Partner Studio", "Vendor", "Contractor Studio", "Investor", "Prospect"], required: true },
      { name: "status", label: "Status", type: "select", options: ["Prospect", "Active", "Dormant", "Closed"] },
      { name: "verticals", label: "Verticals", type: "multi-select", options: ["Game Development", "Art Production", "Animation", "Co-Development", "Strategy & Pre-Production", "Publishing", "IP"] },
      { name: "entity_form", label: "Entity form", type: "select", options: ["PvtLtd", "LLP", "Proprietorship", "Trust", "Other"] },
      { name: "reg_no", label: "Reg no.", type: "text", placeholder: "CIN / LLPIN / GST" },
      { name: "primary_contact", label: "Primary contact", type: "text", placeholder: "Lead person here" },
      { name: "tags", label: "Tags", type: "text", placeholder: "Free classification" },
    ],
  },
  {
    key: "people",
    title: "People",
    singular: "Person",
    summary: "Every human. One person can be many types at once.",
    listColumns: ["name", "type", "venture", "role_title", "status"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "type", label: "Type", type: "multi-select", options: ["Founder", "Producer", "Employee", "Client", "Publisher", "Partner", "Investor", "Contractor", "Vendor", "Consultant", "Freelancer"], required: true },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "venture", label: "Venture", type: "text", placeholder: "Company they belong to" },
      { name: "role_title", label: "Role title", type: "text", placeholder: "Game Designer, Animator, Producer, Art Director, Unity Developer" },
      { name: "access_level", label: "Access level", type: "select", options: ["Founder", "Partner", "Employee", "Client", "Contractor"] },
      { name: "status", label: "Status", type: "select", options: ["Active", "Inactive"], value: "Active" },
    ],
  },
  {
    key: "projects",
    title: "Projects",
    singular: "Project",
    summary: "Every piece of work. Internal projects (Marketing, BizDev) link to GG.",
    listColumns: ["name", "venture", "status", "lead", "target_date"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "venture", label: "Venture", type: "text", placeholder: "Owning/relevant client, publisher, partner studio, or internal GG venture" },
      { name: "vertical", label: "Vertical", type: "select", options: ["Game Development", "Art Production", "Animation", "Co-Development", "Strategy & Pre-Production", "Publishing & IP"] },
      { name: "type", label: "Type", type: "select", options: ["Game Development", "Animation", "Art Production", "Co-Development", "Prototype", "LiveOps", "Internal IP", "Client Production", "Strategy"] },
      { name: "asset", label: "Asset", type: "text", placeholder: "Linked creative/IP asset, if any" },
      { name: "stage", label: "Stage", type: "select", options: ["Discovery", "Brief", "Pre-Production", "Production", "Review", "Delivery", "Support", "Close"] },
      { name: "status", label: "Status", type: "select", options: ["Active", "On-Hold", "Blocked", "Completed", "Cancelled"] },
      { name: "start_date", label: "Start date", type: "date" },
      { name: "target_date", label: "Target date", type: "date" },
      { name: "lead", label: "Lead", type: "text", placeholder: "Project owner" },
      { name: "client_shareable", label: "Client shareable", type: "checkbox" },
    ],
  },
  {
    key: "tasks",
    title: "Tasks",
    singular: "Task",
    summary: "Daily execution. A subtask is a task with a parent.",
    listColumns: ["title", "status", "owner", "priority", "due_date"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
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
    title: "Documents",
    singular: "Document",
    summary: "Every note, file, agreement. Never an orphan; always linked.",
    listColumns: ["title", "type", "status", "version"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "type", label: "Type", type: "select", options: ["Brief", "GDD", "Art Bible", "Script", "Storyboard", "Feedback", "Proposal", "Agreement", "Build Notes", "Research", "Report", "Comms", "Pitch Deck"] },
      { name: "body", label: "Body", type: "textarea", placeholder: "Native note" },
      { name: "file_ref", label: "File ref", type: "text", placeholder: "File pointer" },
      { name: "version", label: "Version", type: "number" },
      { name: "status", label: "Status", type: "select", options: ["Draft", "Final", "Signed", "Superseded"] },
      { name: "links", label: "Links", type: "text" },
      { name: "permission", label: "Permission", type: "select", options: ["Internal", "Restricted", "Client-visible", "Contractor-visible"] },
      { name: "tags", label: "Tags", type: "text", placeholder: "Drives search" },
    ],
  },
  {
    key: "assets",
    title: "Game's Assets",
    singular: "Asset",
    summary: "Creative, technical, and IP assets linked to the work.",
    listColumns: ["name", "type", "status", "owner", "due_date"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true, placeholder: "Main Character Rig, Forest Level, Combat Prototype Build" },
      { name: "type", label: "Type", type: "select", options: ["Game IP", "Character", "Environment", "Prop", "Animation", "Rig", "Build", "Level", "UI Kit", "Audio", "VFX", "Source File", "Art Pack", "Tool"] },
      { name: "project", label: "Project", type: "text" },
      { name: "engine", label: "Engine", type: "select", options: ["Unity", "Unreal", "Roblox", "Blender", "Maya", "Godot", "Other"] },
      { name: "format", label: "Format", type: "select", options: ["FBX", "Blend", "Maya", "PNG", "PSD", "MP4", "WAV", "UnityPackage", "UnrealAsset", "GitRepo", "Figma", "Other"] },
      { name: "version", label: "Version", type: "text", placeholder: "v1, v2, v3, etc." },
      { name: "status", label: "Status", type: "select", options: ["Concept", "In-Production", "In-Review", "Approved", "Delivered", "Archived"] },
      { name: "file_ref", label: "File ref / link", type: "text", placeholder: "File, folder, repo, build, or design link" },
      { name: "owner", label: "Owner", type: "text" },
      { name: "reviewer", label: "Reviewer", type: "text" },
      { name: "due_date", label: "Due date", type: "date" },
      { name: "permission", label: "Permission", type: "select", options: ["Internal", "Client-visible", "Contractor-visible", "Restricted"] },
      { name: "tags", label: "Tags", type: "text", placeholder: "character, prototype, enemy, UI, cinematic, trailer, build" },
    ],
  },
  {
    key: "events",
    title: "Events",
    singular: "Event",
    summary: "Meetings, reviews / playtests / production sessions, calls. One table. Duration = time tracking.",
    listColumns: ["title", "type", "start", "end"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "type", label: "Type", type: "select", options: ["Meeting", "Client Review", "Sprint Planning", "Playtest", "Creative Review", "Production Review", "Call", "Delivery Review", "Other"] },
      { name: "start", label: "Start", type: "datetime-local" },
      { name: "end", label: "End", type: "datetime-local" },
      { name: "participants", label: "Participants", type: "text" },
      { name: "links", label: "Links", type: "text" },
      { name: "location", label: "Location", type: "text", placeholder: "Google Meet, Zoom, Discord, office, client location" },
      { name: "summary", label: "Summary", type: "textarea", placeholder: "Minutes; can spawn a document" },
      { name: "calendar_ref", label: "Calendar ref", type: "text", placeholder: "Synced calendar id" },
    ],
  },
  {
    key: "transactions",
    title: "Transactions",
    singular: "Transaction",
    summary: "Money in and out. 'Outstanding from venture X' = one query.",
    listColumns: ["reference", "direction", "status", "amount", "due_date"],
    fields: [
      { name: "reference", label: "Reference", type: "text", required: true },
      { name: "direction", label: "Direction", type: "select", options: ["Receivable", "Payable"] },
      { name: "amount", label: "Amount", type: "text", inputmode: "numeric", data_format: "transaction-amount" },
      { name: "currency", label: "Currency", type: "select", value: "INR", options: ["INR", "USD", "EUR", "GBP", "AED", "SAR", "SGD"] },
      { name: "status", label: "Status", type: "select", options: ["Draft", "Raised", "Partly-Paid", "Paid", "Overdue", "Written-Off"] },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project_asset", label: "Project / asset", type: "text" },
      { name: "due_date", label: "Due date", type: "date" },
      { name: "documents", label: "Documents", type: "text", placeholder: "Invoice / agreement PDF" },
    ],
  },
];

const SUPABASE_URL = String(globalThis.GATTABARA_GAMES_SUPABASE_URL ?? "").trim();
const SUPABASE_PUBLISHABLE_KEY = String(globalThis.GATTABARA_GAMES_SUPABASE_PUBLISHABLE_KEY ?? "").trim();
const APP_TIMEZONE = "Asia/Kolkata";
const REMOTE_TABLE_KEYS = new Set(tables.map((table) => table.key));
const APP_SESSION_KEY = "gattabara.appAuthenticated";
const supabaseClientFactory = globalThis.supabase?.createClient ?? null;
const supabaseClient = supabaseClientFactory && SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY
  ? supabaseClientFactory(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

const data = {
  ventures: [
    {
      id: "ven_gg",
      name: "Gattabara Games",
      type: "Self",
      status: "Active",
      verticals: ["Game Development", "IP"],
      entity_form: "PvtLtd",
      reg_no: "CIN-GG-2026-001",
      primary_contact: "Aarya Singh",
      tags: ["core", "internal"],
    },
    {
      id: "ven_pf",
      name: "PixelForge Studio",
      type: "Partner Studio",
      status: "Active",
      verticals: ["Art Production", "Co-Development"],
      entity_form: "LLP",
      reg_no: "LLPIN-PF-7781",
      primary_contact: "Marco Diaz",
      tags: ["partner", "art"],
    },
    {
      id: "ven_ep",
      name: "Emberlane Publishing",
      type: "Publisher",
      status: "Active",
      verticals: ["Publishing"],
      entity_form: "Other",
      reg_no: "GST-ELP-4455",
      primary_contact: "Sofia Chen",
      tags: ["publisher"],
    },
  ],
  people: [
    {
      id: "ppl_aarya",
      name: "Aarya Singh",
      type: ["Founder", "Producer"],
      email: "aarya@gattabaragames.com",
      phone: "9000000001",
      venture: "Gattabara Games",
      role_title: "Executive Producer",
      access_level: "Founder",
      status: "Active",
    },
    {
      id: "ppl_neel",
      name: "Neel Rao",
      type: ["Employee"],
      email: "neel@gattabaragames.com",
      phone: "9000000002",
      venture: "Gattabara Games",
      role_title: "Gameplay Programmer",
      access_level: "Employee",
      status: "Active",
    },
    {
      id: "ppl_marco",
      name: "Marco Diaz",
      type: ["Partner", "Consultant"],
      email: "marco@pixelforge.studio",
      phone: "9000000003",
      venture: "PixelForge Studio",
      role_title: "Art Director",
      access_level: "Partner",
      status: "Active",
    },
    {
      id: "ppl_sofia",
      name: "Sofia Chen",
      type: ["Client", "Publisher"],
      email: "sofia@emberlane.pub",
      phone: "9000000004",
      venture: "Emberlane Publishing",
      role_title: "Publishing Manager",
      access_level: "Client",
      status: "Active",
    },
  ],
  projects: [
    {
      id: "prj_atlas",
      name: "Project Atlas",
      venture: "Gattabara Games",
      vertical: "Game Development",
      type: "Internal IP",
      asset: "Atlas Hero Rig",
      stage: "Production",
      status: "Active",
      start_date: "2026-07-01",
      target_date: "2026-09-15",
      lead: "Aarya Singh",
      client_shareable: false,
    },
    {
      id: "prj_skyline",
      name: "Skyline Port",
      venture: "Emberlane Publishing",
      vertical: "Publishing & IP",
      type: "Client Production",
      asset: "Skyline Demo Build",
      stage: "Review",
      status: "Active",
      start_date: "2026-07-03",
      target_date: "2026-08-08",
      lead: "Marco Diaz",
      client_shareable: true,
    },
    {
      id: "prj_codev",
      name: "CoDev Sprint",
      venture: "PixelForge Studio",
      vertical: "Co-Development",
      type: "Co-Development",
      asset: "UI Combat Kit",
      stage: "Delivery",
      status: "On-Hold",
      start_date: "2026-07-05",
      target_date: "2026-08-20",
      lead: "Neel Rao",
      client_shareable: true,
    },
  ],
  tasks: [
    {
      id: "tsk_gameplay",
      title: "Gameplay Tuning Pass",
      venture: "Gattabara Games",
      project: "Project Atlas",
      status: "In-Progress",
      priority: "High",
      owner: "Neel Rao",
      assignees: ["Neel Rao", "Aarya Singh"],
      depends_on: [],
      due_date: "2026-07-18",
      estimate: "16h",
      time_logged: "6h",
      external_shared_with: "",
    },
    {
      id: "tsk_bossfx",
      title: "Boss VFX Polish",
      venture: "Gattabara Games",
      project: "Project Atlas",
      parent_task: "Gameplay Tuning Pass",
      status: "To-Do",
      priority: "Medium",
      owner: "Marco Diaz",
      assignees: ["Marco Diaz"],
      depends_on: [],
      due_date: "2026-07-21",
      estimate: "8h",
      time_logged: "0h",
      external_shared_with: "Marco Diaz",
    },
    {
      id: "tsk_cert",
      title: "Console Submission Checklist",
      venture: "Emberlane Publishing",
      project: "Skyline Port",
      status: "Blocked",
      priority: "Critical",
      owner: "Aarya Singh",
      assignees: ["Aarya Singh", "Sofia Chen"],
      depends_on: ["Gameplay Tuning Pass"],
      due_date: "2026-07-24",
      estimate: "10h",
      time_logged: "2h",
      external_shared_with: "Sofia Chen",
    },
  ],
  documents: [
    {
      id: "doc_atlas_gdd",
      title: "Atlas GDD",
      type: "GDD",
      body: "Core combat loop, progression beats, and chapter goals for Project Atlas.",
      file_ref: "https://drive.example.com/atlas-gdd",
      version: 3,
      status: "Final",
      links: ["Gattabara Games", "Project Atlas"],
      permission: "Internal",
      tags: ["design", "combat", "core-loop"],
    },
    {
      id: "doc_publish_agreement",
      title: "Publishing Agreement",
      type: "Agreement",
      body: "Commercial structure and milestone obligations for Skyline Port.",
      file_ref: "https://docs.example.com/skyline-agreement.pdf",
      version: 2,
      status: "Signed",
      links: ["Emberlane Publishing", "Skyline Port", "Sofia Chen"],
      permission: "Restricted",
      tags: ["legal", "publisher"],
    },
    {
      id: "doc_art_feedback",
      title: "Art Review Feedback 01",
      type: "Feedback",
      body: "Review notes on the hero rig silhouette and sprint delivery quality.",
      file_ref: "https://figma.example.com/file/art-review-01",
      version: 1,
      status: "Draft",
      links: ["CoDev Sprint", "Atlas Hero Rig", "Marco Diaz"],
      permission: "Contractor-visible",
      tags: ["art", "review"],
    },
  ],
  assets: [
    {
      id: "ast_hero_rig",
      name: "Atlas Hero Rig",
      type: "Character",
      project: "Project Atlas",
      engine: "Blender",
      format: "FBX",
      version: "v3",
      status: "In-Review",
      file_ref: "https://drive.example.com/assets/atlas-hero-rig.fbx",
      owner: "Neel Rao",
      reviewer: "Aarya Singh",
      due_date: "2026-07-20",
      permission: "Internal",
      tags: ["character", "hero", "combat"],
    },
    {
      id: "ast_skyline_build",
      name: "Skyline Demo Build",
      type: "Build",
      project: "Skyline Port",
      engine: "Unity",
      format: "UnityPackage",
      version: "v0.9",
      status: "Delivered",
      file_ref: "https://builds.example.com/skyline-demo-0-9",
      owner: "Aarya Singh",
      reviewer: "Sofia Chen",
      due_date: "2026-07-26",
      permission: "Client-visible",
      tags: ["build", "demo", "publisher"],
    },
    {
      id: "ast_ui_kit",
      name: "UI Combat Kit",
      type: "UI Kit",
      project: "CoDev Sprint",
      engine: "Figma",
      format: "Figma",
      version: "v2",
      status: "Approved",
      file_ref: "https://figma.example.com/file/ui-combat-kit",
      owner: "Marco Diaz",
      reviewer: "Neel Rao",
      due_date: "2026-07-22",
      permission: "Contractor-visible",
      tags: ["ui", "hud", "prototype"],
    },
  ],
  events: [
    {
      id: "evt_sprint",
      title: "Atlas Sprint Planning",
      type: "Sprint Planning",
      start: "2026-07-15T10:00",
      end: "2026-07-15T11:00",
      participants: ["Aarya Singh", "Neel Rao"],
      links: ["Project Atlas", "Gameplay Tuning Pass"],
      location: "Discord",
      summary: "Reviewed sprint goals, combat tuning priorities, and blocker ownership.",
      calendar_ref: "cal-atlas-sprint-01",
    },
    {
      id: "evt_client_review",
      title: "Skyline Publisher Review",
      type: "Client Review",
      start: "2026-07-17T16:00",
      end: "2026-07-17T17:00",
      participants: ["Aarya Singh", "Sofia Chen"],
      links: ["Skyline Port", "Skyline Demo Build"],
      location: "Google Meet",
      summary: "Publisher walkthrough of latest build and milestone sign-off criteria.",
      calendar_ref: "cal-skyline-review-01",
    },
    {
      id: "evt_art_review",
      title: "CoDev Art Review",
      type: "Creative Review",
      start: "2026-07-18T14:30",
      end: "2026-07-18T15:15",
      participants: ["Marco Diaz", "Neel Rao"],
      links: ["CoDev Sprint", "Atlas Hero Rig", "Art Review Feedback 01"],
      location: "Studio Office",
      summary: "Feedback round on key poses, material breakup, and export prep.",
      calendar_ref: "cal-codev-art-01",
    },
  ],
  transactions: [
    {
      id: "txn_milestone",
      reference: "INV-ATLAS-001",
      direction: "Receivable",
      amount: "250000",
      currency: "INR",
      status: "Raised",
      venture: "Gattabara Games",
      project_asset: "Project Atlas",
      due_date: "2026-07-30",
      documents: ["Atlas GDD"],
    },
    {
      id: "txn_publisher_fee",
      reference: "AGR-SKY-002",
      direction: "Payable",
      amount: "90000",
      currency: "INR",
      status: "Draft",
      venture: "Emberlane Publishing",
      project_asset: "Skyline Demo Build",
      due_date: "2026-07-28",
      documents: ["Publishing Agreement"],
    },
    {
      id: "txn_art_vendor",
      reference: "ART-REV-003",
      direction: "Payable",
      amount: "45000",
      currency: "INR",
      status: "Partly-Paid",
      venture: "PixelForge Studio",
      project_asset: "UI Combat Kit",
      due_date: "2026-07-25",
      documents: ["Art Review Feedback 01"],
    },
  ],
  roles: {
    Founder: { title: "Founder view", items: [] },
    Partner: { title: "Partner view", items: [] },
    Employee: { title: "Employee view", items: [] },
  },
};

const userAccounts = [
  {
    id: "usr_1",
    name: "Gattabara Games Admin",
    email: "admin@gattabaragames.com",
    password: "admin1234",
    role: "Admin",
    status: "Active",
    venture_scope: "All ventures",
    table_access: tables.map((table) => table.key),
    createdAt: "2026-06-01T09:00:00.000Z",
    createdBy: "System",
  },
];

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

function purgeLegacyAppStorage() {
  const legacyLocalKeys = ["atit.googleMapsApiKey", "atit.localTableCache", "gattabara.googleMapsApiKey"];
  const legacySessionKeys = ["atit.appAuthenticated", "atit.appUserId"];
  const currentLocalKeys = [LOCAL_TABLE_CACHE_STORAGE_KEY];
  const currentSessionKeys = [APP_SESSION_KEY, APP_SESSION_USER_KEY];

  try {
    legacyLocalKeys.forEach((key) => globalThis.localStorage?.removeItem(key));
    currentLocalKeys.forEach((key) => globalThis.localStorage?.removeItem(key));
  } catch {
    // Ignore storage failures and continue with runtime state.
  }

  try {
    legacySessionKeys.forEach((key) => globalThis.sessionStorage?.removeItem(key));
    currentSessionKeys.forEach((key) => globalThis.sessionStorage?.removeItem(key));
  } catch {
    // Ignore storage failures and continue with runtime state.
  }
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

const state = {
  role: "Founder",
  currentUser: null,
  projectId: null,
  taskId: null,
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
  taskExpanded: {},
  ganttWeekStart: null,
  ganttScale: "week",
  isAuthenticated: false,
  isMobileViewport: false,
  isMobileNavOpen: false,
};

const el = {};
let confirmResolve = null;
let remoteRefreshTimeoutId = null;
let remoteRefreshPromise = null;
let remoteRealtimeChannel = null;
let remoteRefreshIntervalId = null;
const MOBILE_BREAKPOINT = 820;
const LOCAL_TABLE_CACHE_STORAGE_KEY = "gattabara.localTableCache";
const APP_SESSION_USER_KEY = "gattabara.appUserId";
const REMOTE_REFRESH_DEBOUNCE_MS = 350;
const REMOTE_REFRESH_INTERVAL_MS = 5000;

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
  owner_ventures: { table: "ventures", labelField: "name", multiple: true },
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
  ventures: { verticals: [], tags: [] },
  people: { type: [] },
  tasks: { assignees: [], depends_on: [] },
  documents: { links: [], tags: [] },
  assets: { tags: [] },
  events: { participants: [], links: [] },
  transactions: { documents: [] },
};

const remoteTableColumns = {
  ventures: ["id", "name", "type", "status", "verticals", "entity_form", "reg_no", "primary_contact", "tags", "created_at"],
  people: ["id", "name", "type", "email", "phone", "venture", "role_title", "access_level", "status", "created_at"],
  projects: ["id", "name", "venture", "vertical", "type", "asset", "stage", "status", "start_date", "target_date", "lead", "client_shareable", "created_at"],
  tasks: ["id", "title", "venture", "project", "parent_task", "status", "priority", "owner", "assignees", "depends_on", "due_date", "estimate", "time_logged", "external_shared_with", "created_at"],
  documents: ["id", "title", "type", "body", "file_ref", "version", "status", "links", "permission", "tags", "created_at"],
  assets: ["id", "name", "type", "project", "engine", "format", "version", "status", "file_ref", "owner", "reviewer", "due_date", "permission", "tags", "created_at"],
  events: ["id", "title", "type", "start", "end", "participants", "links", "location", "summary", "calendar_ref", "created_at"],
  transactions: ["id", "reference", "direction", "amount", "currency", "status", "venture", "project_asset", "due_date", "documents", "created_at"],
};

const sidebarItems = [
  { key: "dashboard", label: "Dashboard", kind: "dashboard", count: null },
  ...tables.map((table) => ({ key: table.key, label: table.title, kind: "table" })),
  { key: "gantt", label: "Gantt Chart", kind: "gantt", count: null },
  { key: "admin", label: "Admin", kind: "admin", count: null },
];

const peopleTypeHierarchy = ["Founder", "Investor", "Partner", "Client", "Vendor", "Consultant", "Contractor", "Employee"];
const peopleTypeRank = new Map(peopleTypeHierarchy.map((type, index) => [type, index]));
const durationUnits = [
  { value: "h", label: "Hours" },
  { value: "d", label: "Days" },
];

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

function ensurePersonRecord(name, venture = "") {
  const normalizedName = String(name ?? "").trim();
  if (!normalizedName) return null;
  const existing = data.people.find((item) => String(item.name ?? "").trim() === normalizedName) ?? null;
  if (existing) return existing;

  const record = {
    id: `ppl_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name: normalizedName,
    type: "Employee",
    email: "",
    phone: "",
    venture: String(venture ?? "").trim(),
    role_title: "",
    access_level: "Employee",
    status: "Active",
  };
  data.people.unshift(record);
  syncRecordToSupabase("people", record).catch((error) => {
    console.error("Failed to sync person to Supabase", error);
  });
  return record;
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

function mapRecordToSupabase(tableKey, record) {
  const { createdAt, ...rest } = record;
  const defaults = jsonColumnDefaults[tableKey] ?? {};
  const normalized = Object.fromEntries(
    Object.entries(rest).map(([column, value]) => [column, value === "" ? null : value]),
  );
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
  const { created_at, ...rest } = row;
  return {
    ...rest,
    createdAt: created_at ?? null,
  };
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

function cloneRows(rows) {
  if (typeof structuredClone === "function") {
    return structuredClone(rows);
  }
  return JSON.parse(JSON.stringify(rows));
}

async function syncRecordToSupabase(tableKey, record, { mode = "upsert" } = {}) {
  if (!REMOTE_TABLE_KEYS.has(tableKey) || !supabaseClient) return;
  const payload = mapRecordToSupabase(tableKey, record);
  let query = null;

  if (mode === "insert") {
    query = supabaseClient.from(tableKey).insert(payload).select();
  } else if (mode === "update") {
    query = supabaseClient.from(tableKey).update(payload).eq("id", record.id).select();
  } else {
    const hasExistingRecord = data[tableKey]?.some((item) => item.id === record.id);
    query = hasExistingRecord
      ? supabaseClient.from(tableKey).update(payload).eq("id", record.id).select()
      : supabaseClient.from(tableKey).insert(payload).select();
  }

  const { data: rows, error } = await query;
  if (error) throw error;
  const syncedRow = Array.isArray(rows) ? rows[0] ?? null : rows ?? null;
  return syncedRow ? mapRecordFromSupabase(tableKey, syncedRow) : null;
}

async function removeRecordFromSupabase(tableKey, recordId) {
  if (!REMOTE_TABLE_KEYS.has(tableKey) || !supabaseClient) return;
  const { error } = await supabaseClient.from(tableKey).delete().eq("id", recordId);
  if (error) throw error;
}

async function refreshRemoteData({ syncHierarchy = false, render = true } = {}) {
  if (!supabaseClient) return false;
  if (!remoteRefreshPromise) {
    remoteRefreshPromise = hydrateDataFromSupabase()
      .then(() => {
        if (syncHierarchy) normalizeAllHierarchyData({ sync: true });
        else normalizeAllHierarchyData();
        persistLocalTableCache();
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

function setupSupabaseLiveSync() {
  if (!supabaseClient || remoteRealtimeChannel || typeof supabaseClient.channel !== "function") return;

  let channel = supabaseClient.channel("gattabara-live-sync");
  tables.forEach((table) => {
    channel = channel.on(
      "postgres_changes",
      { event: "*", schema: "public", table: table.key },
      () => {
        scheduleRemoteRefresh({ syncHierarchy: true });
      },
    );
  });

  remoteRealtimeChannel = channel.subscribe((status) => {
    if (status === "CHANNEL_ERROR") {
      console.warn("Supabase realtime subscription failed; falling back to fetch refreshes.");
    }
  });
}

function setupRemoteRefreshPolling() {
  if (!supabaseClient || remoteRefreshIntervalId) return;
  remoteRefreshIntervalId = globalThis.setInterval(() => {
    if (!state.isAuthenticated || document.visibilityState !== "visible") return;
    scheduleRemoteRefresh({ syncHierarchy: true, render: true });
  }, REMOTE_REFRESH_INTERVAL_MS);
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

  let rows = data[table.key].filter((row) => {
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

function getPersistableTableData() {
  return Object.fromEntries(
    tables.map((table) => [table.key, data[table.key] ?? []]),
  );
}

function persistLocalTableCache() {
  try {
    globalThis.localStorage?.setItem(LOCAL_TABLE_CACHE_STORAGE_KEY, JSON.stringify(getPersistableTableData()));
  } catch {
    // Ignore storage failures and keep runtime data only.
  }
}

function applyLocalTableCache() {
  try {
    const raw = globalThis.localStorage?.getItem(LOCAL_TABLE_CACHE_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    tables.forEach((table) => {
      if (Array.isArray(parsed?.[table.key])) {
        if (table.key === "assets") {
          const merged = new Map((data[table.key] ?? []).map((row) => [String(row.id ?? ""), row]));
          parsed[table.key].forEach((row) => {
            merged.set(String(row.id ?? ""), row);
          });
          data[table.key] = Array.from(merged.values());
        } else {
          data[table.key] = parsed[table.key];
        }
      }
    });
  } catch {
    // Ignore malformed cache and continue with runtime data.
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

        if (hierarchyAttachmentTables.has(currentTableKey) && fieldName === "project") {
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
  const assetLookup = new Map();
  const addAsset = (value) => {
    const normalized = String(value ?? "").trim();
    if (!normalized || assetLookup.has(normalized)) return;
    const assetRow = data.assets.find((item) => String(item.name ?? "").trim() === normalized) ?? null;
    if (!assetRow) return;
    assetLookup.set(normalized, assetRow);
  };

  (Array.isArray(documentRecord?.related_assets) ? documentRecord.related_assets : []).forEach(addAsset);
  getLinkedRecordsFromDocumentLinks(documentRecord, "assets").forEach((row) => addAsset(row.name));
  getLinkedTransactionsForDocument(documentRecord).forEach((row) => addAsset(row.project_asset));

  return Array.from(assetLookup.values());
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
    if (tableKey === "assets" && fieldName === "owner_ventures") return;
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
    const ownerItems = (Array.isArray(row.owner_ventures) ? row.owner_ventures : [])
      .map((entry) => {
        const ventureName = getEntryLabel(entry);
        if (!ventureName) return null;
        const found = data.ventures.find((item) => item.name === ventureName) ?? null;
        if (!found) return null;
        const stake = getEntryStake(entry);
        return {
          label: `${found.name}${stake ? ` · ${stake}%` : ""}`,
          tableKey: "ventures",
          id: found.id,
          row: found,
        };
      })
      .filter(Boolean);
    addConnection("ventures", ownerItems, "ventures", "context");
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

function renderRecordDetail(table, record) {
  const detailIconTone = getDetailIconTone(table.key, record);
  const detailEyebrow = table.key === "tasks" && String(record?.parent_task ?? "").trim()
    ? "Subtasks"
    : table.title;
  const documentBody = table.key === "documents" ? String(record?.body ?? "").trim() : "";
  const detailFields = table.key === "documents"
    ? table.fields.filter((field) => field.name !== "body")
    : table.fields;
  const renderDetailFieldValue = (field, display) => {
    if ((table.key === "documents" || table.key === "assets") && field.name === "file_ref") {
      const visitUrl = getRecordVisitUrl(record, "file_ref");
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
            ${renderRecordActionIconButton("edit", "Edit", 'data-detail-action="edit"')}
            ${renderRecordActionIconButton("delete", "Delete", 'data-detail-action="delete"')}
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
  const fields = ["venture", "project", "task", "parent_task", "assignees", "depends_on", "external_shared_with", "links", "participants", "owner_ventures"];
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
      : "";
  el.mobileNavTitle.textContent = `${activeItem?.label ?? "Dashboard"}${countSuffix}`;
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

function syncViewportState() {
  const nextIsMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  if (state.isMobileViewport === nextIsMobile) return;
  state.isMobileViewport = nextIsMobile;
  if (!nextIsMobile) state.isMobileNavOpen = false;
  applySidebarState();
}

function renderSidebarNav() {
  el.sidebarNav.innerHTML = sidebarItems.map((item) => {
    const count = item.kind === "table" ? `<span class="sidebar-nav-count">${data[item.key].length}</span>` : "";
    const active = state.activeNav === item.key ? "active" : "";
    const dividerClass = ["dashboard", "transactions"].includes(item.key) ? " sidebar-nav-item-divider" : "";
    return `
      <button class="sidebar-nav-item ${active}${dividerClass}" type="button" data-sidebar-key="${item.key}" data-sidebar-kind="${item.kind}" data-sidebar-label="${escapeHtml(item.label)}" aria-label="${escapeHtml(item.label)}" title="${escapeHtml(item.label)}">
        <span class="sidebar-nav-icon" aria-hidden="true">${getTableIcon(item.key)}</span>
        <span class="sidebar-nav-label">${escapeHtml(item.label)}</span>
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
    });
  });
}

function getCurrentSidebarUser() {
  return userAccounts.find((user) => user.role === state.role) ?? userAccounts[0];
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

function renderLoginScreen(message = "") {
  if (!el.loginScreen) return;
  el.loginScreen.hidden = false;
  document.body.classList.remove("app-authenticated");
  if (el.loginError) el.loginError.textContent = message;
  if (el.loginPassword) {
    el.loginPassword.value = "";
    el.loginPassword.focus();
  }
}

function showAppShell() {
  if (!el.loginScreen) return;
  el.loginScreen.hidden = true;
  document.body.classList.add("app-authenticated");
}

function loginApp(password) {
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
  } else {
    url.searchParams.delete("gantt");
    url.searchParams.delete("scale");
  }
  url.searchParams.delete("assets_view");

  return `${url.pathname}${url.search}`;
}

function syncCurrentViewUrl(replace = false) {
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
  return `${url.pathname}${url.search}`;
}

function applyUrlState() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");
  const gantt = params.get("gantt");
  const scale = params.get("scale");

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
  const sections = [
    { key: "events", title: "Events" },
    { key: "tasks", title: "Tasks" },
    { key: "projects", title: "Projects" },
  ];
  return `
    <section class="panel dashboard-attention-panel">
      <div class="panel-head">
        <div>
          <h2>Upcoming</h2>
        </div>
        <div class="attention-panel-meta">
          <div class="attention-today">${escapeHtml(todayLabel)}</div>
          <div class="attention-count">${items.length} items</div>
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
                ${sectionItems.length ? sectionItems.map((item) => `
                  <button class="attention-card ${item.tone}" type="button" data-attention-table="${escapeHtml(item.tableKey)}" data-attention-record="${escapeHtml(item.recordId)}">
                    <div class="attention-card-head">
                      <div class="attention-kind">${escapeHtml(item.kind)}</div>
                      <div class="attention-date-block">
                        <div class="attention-date">${escapeHtml(item.dateLabel)}</div>
                        <div class="attention-date-hint">${escapeHtml(item.timingLabel)}</div>
                      </div>
                    </div>
                    <div class="attention-card-title">${escapeHtml(item.title)}</div>
                    <div class="attention-card-status-row">
                      ${item.tableKey === "tasks"
                        ? renderTaskStatusBadge(item.status, "attention")
                        : item.tableKey === "events"
                          ? renderEventTypeBadge(item.status, "attention")
                        : `<span class="attention-status${getStatusClassName(item.status) ? ` attention-status-${getStatusClassName(item.status)}` : ""}">${escapeHtml(item.status)}</span>`}
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
                `).join("") : `<div class="attention-empty">No upcoming ${escapeHtml(section.title.toLowerCase())}.</div>`}
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
  const projectColors = ["blue", "violet", "green", "amber", "red", "cyan", "pink", "indigo", "orange", "sky"];
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
        color: projectColors[index % projectColors.length],
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
  const gridRows = [
    ...projectRows.map((item) => renderBar(item, "project")),
    ...taskRows.map((item) => renderBar(item, "task")),
    ...eventRows.map((item) => renderBar(item, "event")),
  ];
  const visibleRowCount = gridRows.filter(Boolean).length;
  const sidebarSection = (title, count, rows, overflowText) => `
    <section class="gantt-workstream-section" style="--gantt-section-row-count:${Math.max(rows.length, 1)};">
      <div class="gantt-workstream-head">
        <strong>${escapeHtml(title)}</strong>
        <em>${count}</em>
        <span class="gantt-section-more">•••</span>
      </div>
      <div class="gantt-workstream-list">
        ${rows.map((row, index) => `
          <div class="gantt-workstream-item${row.depth ? " is-subtask" : ""}" style="${row.depth ? `--gantt-indent:${row.depth};` : ""}">
            <span class="gantt-dot ${row.color ? `gantt-dot-${row.color}` : ""}"></span>
            <strong>${escapeHtml(row.key)}</strong>
            <span>${escapeHtml(row.label)}</span>
          </div>
        `).join("")}
        ${overflowText ? `<button class="gantt-view-all" type="button">${escapeHtml(overflowText)}</button>` : ""}
      </div>
    </section>
  `;

  return `
    <div class="page-view page-view-gantt">
      <section class="panel gantt-panel">
        <div class="gantt-app-shell">
          <header class="gantt-topbar">
          <div class="gantt-title-row">
            <span class="gantt-menu-icon">≡</span>
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
            <div><strong>${taskRows.length}</strong><span>TASKS</span></div>
            <div><strong>${eventRows.length}</strong><span>EVENTS</span></div>
          </div>
          </header>
        <div class="gantt-board" style="${columnLineStyle(gridRows.length)}">
          <aside class="gantt-workstreams">
            <div class="gantt-workstream-label">WORKSTREAMS</div>
            ${sidebarSection("PROJECTS", projectRows.length, projectRows, "")}
            ${sidebarSection("TASKS", taskRows.length, taskRows.slice(0, 5), taskRows.length > 5 ? `View all ${taskRows.length} tasks` : "")}
            ${sidebarSection("EVENTS", eventRows.length, eventRows.slice(0, 6), eventRows.length > 6 ? `View all ${eventRows.length} events` : "")}
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
    INR: "INR",
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

function getBadgeToneClass(value, variant = "records") {
  const normalized = getStatusClassName(value);
  if (!normalized) return "";

  let hash = 0;
  for (let index = 0; index < normalized.length; index += 1) {
    hash = (hash * 31 + normalized.charCodeAt(index)) % 5;
  }

  return `${variant}-badge-tone-${hash + 1}`;
}

function renderBadge(value, variant = "records", prefix = "status") {
  const badgeClass = getStatusClassName(value);
  if (!badgeClass) return escapeHtml(String(value || "—"));
  const toneClass = getBadgeToneClass(value, variant);
  return `<span class="${variant}-${prefix}-badge ${variant}-${prefix}-${badgeClass} ${toneClass}">${escapeHtml(String(value))}</span>`;
}

function renderTaskStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "status");
}

function renderTypeBadge(type, variant = "records") {
  return renderBadge(type, variant, "type");
}

function renderBadgeList(values, variant = "records", prefix = "type") {
  if (!Array.isArray(values) || !values.length) return "—";
  return values
    .map((value) => renderBadge(value, variant, prefix))
    .join(" ");
}

function renderEventTypeBadge(type, variant = "records") {
  return renderBadge(type, variant, "event");
}

function renderDocumentStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "document-status");
}

function renderDirectionBadge(direction, variant = "records") {
  return renderBadge(direction, variant, "direction");
}

function renderAssetStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "asset-status");
}

function renderVentureStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "venture-status");
}

function formatCell(tableKey, column, row) {
  if (tableKey === "documents" && column === "venture_project") {
    return getDocumentLocationLabel(row);
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
  if (Array.isArray(value)) return formatList(value);
  if (tableKey === "transactions" && column === "amount") return formatTransactionAmount(value, row.currency);
  return String(value);
}

function renderCellMarkup(tableKey, column, row) {
  const rawValue = row?.[column];
  const value = formatCell(tableKey, column, row);
  if (tableKey === "documents" && column === "body") {
    return `<span class="document-body-preview">${escapeHtml(value === "—" ? "" : value)}</span>`;
  }
  if (tableKey === "documents" && (column === "venture" || column === "project") && value === "—") {
    return "-";
  }
  if (column === "type") {
    if (Array.isArray(rawValue)) {
      return renderBadgeList(rawValue, "records", "type");
    }
    if (value !== "—") {
      return renderTypeBadge(value, "records");
    }
  }
  if (column === "status" && value !== "—") {
    return renderTaskStatusBadge(value, "records");
  }
  if (tableKey === "transactions" && column === "direction" && value !== "—") {
    return renderDirectionBadge(value, "records");
  }
  return escapeHtml(value);
}

function renderSerialNumber(value) {
  return `<span class="record-serial">${escapeHtml(String(value))}</span>`;
}

function getRecordVisitUrl(record, fieldName = "file_ref") {
  const raw = String(record?.[fieldName] ?? "").trim();
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
        ${table.key === "documents" && getRecordVisitUrl(row, "file_ref")
          ? `<button class="record-action-button" type="button" data-record-action="visit" data-record-id="${escapeHtml(row.id)}">Visit</button>`
          : ""}
        ${renderRecordActionIconButton("edit", `Edit ${row.name || row.title || row.reference || "record"}`, `data-record-action="edit" data-record-id="${escapeHtml(row.id)}"`)}
        ${renderRecordActionIconButton("delete", `Delete ${row.name || row.title || row.reference || "record"}`, `data-record-action="delete" data-record-id="${escapeHtml(row.id)}"`)}
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
              <strong class="person-card-name">${escapeHtml(row.name || "Unnamed")}</strong>
              <span class="person-card-type">${escapeHtml(formatCell("people", "type", row))}</span>
              ${renderPersonStatus(row.status || "No status")}
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
  if (!rows.length) return `<tr class="records-empty-row"><td colspan="7"><div class="records-empty-state">No records</div></td></tr>`;
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

function renderRecordsToolbar(table, rows, filters, ventureOptions, projectOptions) {
  const showVentureFilter = ventureOptions.length > 0;
  const showProjectFilter = projectOptions.length > 0;
  const documentTypeOptions = table.key === "documents" ? getFilterOptions("documents", "type") : [];
  const documentStatusOptions = table.key === "documents" ? getFilterOptions("documents", "status") : [];
  const eventTypeOptions = table.key === "events" ? getFilterOptions("events", "type") : [];
  const assetStatusOptions = table.key === "assets" ? getFilterOptions("assets", "status") : [];
  const searchPlaceholder = `Search ${escapeHtml(table.title.toLowerCase())}...`;

  return `
    <div class="records-toolbar">
      <div class="records-toolbar-title">
        <h2>${escapeHtml(table.title)} <span class="records-title-count">(${rows.length})</span></h2>
        <p id="records-count">${rows.length} records</p>
      </div>
      <div class="records-toolbar-search">
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
    ? `<th class="records-serial-head">S. No.</th><th>Title</th><th>Status</th><th>Owner</th><th>Priority</th><th>Due date</th><th>Actions</th>`
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
        const visitUrl = getRecordVisitUrl(record, "file_ref");
        if (visitUrl) window.open(visitUrl, "_blank", "noopener,noreferrer");
      }
      if (recordAction === "edit") {
        openForm(table.key, recordId);
      }
      if (recordAction === "delete") {
        deleteRecord(table.key, recordId);
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
    el.heroPanel.querySelectorAll("[data-detail-action]").forEach((button) => {
      button.addEventListener("click", async () => {
        const action = button.dataset.detailAction;
        if (action === "back") {
          goBackFromDetail();
          return;
        }
        if (action === "edit") openForm(detail.table.key, detail.record.id);
        if (action === "delete") {
          const deleted = await deleteRecord(detail.table.key, detail.record.id);
          if (deleted) {
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
            <div class="hero-kicker">create</div>
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
  const query = state.search.trim().toLowerCase();
  const filteredUsers = userAccounts.filter((user) => {
    if (!query) return true;
    return [user.name, user.email, user.role, user.password]
      .some((value) => String(value ?? "").toLowerCase().includes(query));
  });
  const currentCount = userAccounts.length;

  return `
    <div class="admin-workspace">
      <div class="records-toolbar admin-workspace-head">
        <div class="admin-workspace-title">
          <h2>Admin</h2>
          <span>${currentCount} ${currentCount === 1 ? "user" : "users"}</span>
        </div>
        <div class="records-toolbar-search">
          <input id="admin-search" class="records-search" type="search" placeholder="Search users..." value="${escapeHtml(state.search)}" />
        </div>
        <div class="records-toolbar-actions">
          <button class="new-record-button" type="button" id="add-user-button">+</button>
        </div>
      </div>
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
          <tbody>
        ${filteredUsers.map((user, index) => {
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
            <td colspan="6" class="admin-user-empty">No users found.</td>
          </tr>
        `}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function bindAdminWorkspaceEvents() {
  document.getElementById("add-user-button")?.addEventListener("click", () => {
    openAdminUserForm();
  });

  document.getElementById("admin-search")?.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderHeroPanel();
    bindAdminWorkspaceEvents();
  });

  document.querySelectorAll("[data-user-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { userAction, userId } = button.dataset;
      if (userAction === "edit") openAdminUserForm(userId);
      if (userAction === "delete") deleteAdminUser(userId);
    });
  });
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

function sanitizeStakeInput(value, { finalize = false } = {}) {
  let normalized = String(value ?? "")
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1");

  const parts = normalized.split(".");
  if (parts.length > 2) {
    normalized = `${parts[0]}.${parts.slice(1).join("")}`;
  }

  if (parts[1] != null) {
    normalized = `${parts[0]}.${parts[1].slice(0, 2)}`;
  }

  if (!finalize) return normalized;
  if (!normalized || normalized === ".") return "";

  const numeric = Number(normalized);
  if (Number.isNaN(numeric)) return "";
  const clamped = Math.min(Math.max(numeric, 0), 100);
  return String(clamped).replace(/\.0+$/, "").replace(/(\.\d*[1-9])0+$/, "$1");
}

function renderOwnershipRow(entry = {}, index = 0, options = []) {
  const label = entry.venture ?? entry.name ?? entry.label ?? "";
  const stake = sanitizeStakeInput(entry.stake ?? "", { finalize: true });
  const sortedOptions = sortOptionsAlpha(options);
  return `
    <div class="ownership-row" data-ownership-row>
      <label class="ownership-field">
        <span>Venture</span>
        <select name="owner_ventures_venture_${index}">
          <option value="">Select venture</option>
          ${sortedOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${label === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
      <label class="ownership-field stake-field">
        <span>Stake %</span>
        <input name="owner_ventures_stake_${index}" class="ownership-stake-input" type="text" inputmode="decimal" value="${escapeHtml(stake)}" placeholder="0.00" />
      </label>
      <button class="ownership-remove" type="button" data-ownership-remove aria-label="Remove venture">×</button>
    </div>
  `;
}

function renderOwnershipRepeater(record = null, currentTableKey = "") {
  const ventureOptions = getRelationOptions("owner_ventures", currentTableKey, record);
  const values = Array.isArray(record?.owner_ventures) && record.owner_ventures.length
    ? record.owner_ventures.map((entry) => (typeof entry === "object" && entry !== null ? entry : { venture: entry, stake: "" }))
    : [{ venture: "", stake: "" }];

  return `
    <div class="ownership-repeater" data-ownership-repeater>
      <div class="ownership-repeater-head">
        <span>Owner ventures</span>
        <button class="ownership-add" type="button" data-ownership-add>+ Add venture</button>
      </div>
      <div class="ownership-repeater-list" data-ownership-list>
        ${values.map((entry, index) => renderOwnershipRow(entry, index, ventureOptions)).join("")}
      </div>
      <small class="form-hint">Choose a venture, enter stake %, and add another row if needed.</small>
    </div>
  `;
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
          ${durationUnits.map((option) => `<option value="${option.value}" ${unit === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </div>
      <small class="form-hint">${hint}</small>
    </label>
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

  if (currentTableKey === "assets" && field.name === "owner_ventures") {
    return renderOwnershipRepeater(record, currentTableKey);
  }

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
    const isProjectSelect = field.name === "project" && (currentTableKey === "tasks" || hierarchyAttachmentTables.has(currentTableKey));
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
    const fieldOptions = field.options ?? [];
    return `
      <label class="form-field">
        <span>${label}</span>
        <select name="${escapeHtml(field.name)}" ${required}>
          <option value="">Select</option>
          ${fieldOptions.map((option) => `<option value="${escapeHtml(option)}" ${fieldValue === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
        </select>
      </label>
    `;
  }

  if (field.type === "multi-select") {
    const fieldOptions = field.options ?? [];
    const summaryText = selectedValues.length
      ? selectedValues.join(", ")
      : "Select one or more";

    return `
      <label class="form-field">
        <span>${label}</span>
        <details class="multi-select-dropdown">
          <summary class="multi-select-summary">${escapeHtml(summaryText)}</summary>
          <div class="multi-select-menu">
            ${fieldOptions.map((option) => `
              <label class="multi-select-option">
                <input type="checkbox" name="${escapeHtml(field.name)}" value="${escapeHtml(option)}" ${selectedValues.includes(option) ? "checked" : ""} />
                <span>${escapeHtml(option)}</span>
              </label>
            `).join("")}
          </div>
        </details>
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
  el.modalSubtitle.textContent = `${table.fields.length} fields`;
  el.form.innerHTML = table.fields.map((field) => renderField(field, record, key)).join("");
  el.saveButton.textContent = `${record ? "Save" : "Create"} ${entityLabel}`;
  el.modal.classList.add("open");
  syncBodyModalState();
  bindFormattedInputs();
  bindOwnershipRepeater(key);
  bindHierarchyFilters(record);
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
  setAdminFormMessage("");
}

function setAdminFormMessage(message = "") {
  const messageEl = el.form?.querySelector("#admin-form-message");
  if (messageEl) messageEl.textContent = message;
}

function syncBodyModalState() {
  if (el.modal?.classList.contains("open") || el.confirmModal?.classList.contains("open")) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

function openDeleteConfirm(message, confirmLabel = "Delete") {
  if (confirmResolve) {
    confirmResolve(false);
    confirmResolve = null;
  }

  el.confirmTitle.textContent = "Delete item?";
  el.confirmMessage.textContent = message;
  el.confirmDeleteButton.textContent = confirmLabel;
  el.confirmModal.classList.add("open");
  syncBodyModalState();
  el.confirmDeleteButton.focus();

  return new Promise((resolve) => {
    confirmResolve = resolve;
  });
}

function closeDeleteConfirm(result = false) {
  if (!confirmResolve) {
    el.confirmModal.classList.remove("open");
    syncBodyModalState();
    return;
  }

  const resolve = confirmResolve;
  confirmResolve = null;
  el.confirmModal.classList.remove("open");
  syncBodyModalState();
  resolve(result);
}

function bindOwnershipRepeater(tableKey) {
  const repeater = el.formElement.querySelector("[data-ownership-repeater]");
  if (!repeater || tableKey !== "assets") return;
  const list = repeater.querySelector("[data-ownership-list]");
  const addButton = repeater.querySelector("[data-ownership-add]");
  const ventureOptions = getRelationOptions("owner_ventures", tableKey);
  let rowIndex = list.querySelectorAll("[data-ownership-row]").length;

  const bindStakeInput = (row) => {
    const input = row.querySelector(".ownership-stake-input");
    if (!(input instanceof HTMLInputElement)) return;

    input.addEventListener("input", () => {
      input.value = sanitizeStakeInput(input.value);
    });

    input.addEventListener("blur", () => {
      input.value = sanitizeStakeInput(input.value, { finalize: true });
    });
  };

  const buildRow = (entry = {}) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderOwnershipRow(entry, rowIndex, ventureOptions).trim();
    rowIndex += 1;
    const row = wrapper.firstElementChild;
    bindStakeInput(row);
    row.querySelector("[data-ownership-remove]")?.addEventListener("click", () => {
      if (list.querySelectorAll("[data-ownership-row]").length <= 1) {
        row.querySelectorAll("select,input").forEach((input) => {
          if (input.tagName === "SELECT") input.value = "";
          else input.value = "";
        });
        return;
      }
      row.remove();
    });
    return row;
  };

  addButton?.addEventListener("click", () => {
    list.appendChild(buildRow());
  });

  list.querySelectorAll("[data-ownership-row]").forEach((row) => {
    bindStakeInput(row);
    row.querySelector("[data-ownership-remove]")?.addEventListener("click", () => {
      if (list.querySelectorAll("[data-ownership-row]").length <= 1) {
        row.querySelectorAll("select,input").forEach((input) => {
          if (input.tagName === "SELECT") input.value = "";
          else input.value = "";
        });
        return;
      }
      row.remove();
    });
  });
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
    const options = getRelationOptions("task", state.activeTable, record);

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
    const options = getRelationOptions("parent_task", state.activeTable, record);

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
    const options = getRelationOptions("project", state.activeTable, record);

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

function normalizeAllHierarchyData({ sync = false } = {}) {
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

  if (changedRecords.length) {
    persistLocalTableCache();
    if (sync) {
      Promise.allSettled(
        changedRecords.map(({ tableKey, row }) => syncRecordToSupabase(tableKey, row)),
      ).catch((error) => {
        console.error("Background hierarchy repair sync failed", error);
      });
    }
  }

  return changedRecords;
}

function closeForm() {
  el.modal.classList.remove("open");
  syncBodyModalState();
  state.modalMode = "create";
  state.modalEntity = "table";
  state.editingRecordId = null;
  state.editingUserId = null;
}

function buildRecordFromForm(table) {
  const formData = new FormData(el.formElement);
  const record = {};

  table.fields.forEach((field) => {
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

    if (table.key === "assets" && field.name === "owner_ventures") {
      const rows = Array.from(el.formElement.querySelectorAll("[data-ownership-row]"));
      record[field.name] = rows
        .map((row) => {
          const venture = row.querySelector(`select[name^="owner_ventures_venture_"]`)?.value?.trim() ?? "";
          const rawStake = row.querySelector(`input[name^="owner_ventures_stake_"]`)?.value?.trim() ?? "";
          const stake = sanitizeStakeInput(rawStake, { finalize: true });
          if (!venture) return null;
          return { venture, stake };
        })
        .filter(Boolean);
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

    if (field.type === "multi-select") {
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

async function saveRecord() {
  const table = tables.find((item) => item.key === state.activeTable);
  if (!table) return;

  const payload = buildRecordFromForm(table);
  const validation = validateRecordBeforeSave(table, payload);
  if (!validation.valid) {
    window.alert(validation.message);
    return;
  }
  const previousRows = cloneRows(data[table.key] ?? []);
  let nextRecord = null;
  const isEdit = state.modalMode === "edit" && state.editingRecordId;

  if (isEdit && state.editingRecordId) {
    const index = data[table.key].findIndex((item) => item.id === state.editingRecordId);
    if (index >= 0) {
      nextRecord = { ...data[table.key][index], ...payload };
      data[table.key][index] = nextRecord;
    }
  } else {
    nextRecord = {
      id: `${table.key.slice(0, 3)}_${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...payload,
    };
    data[table.key].unshift(nextRecord);
  }

  normalizeAllHierarchyData();
  persistLocalTableCache();
  closeForm();
  renderAll();

  if (!nextRecord) return;

  try {
    const syncedRecord = await syncRecordToSupabase(table.key, nextRecord, { mode: isEdit ? "update" : "insert" });
    if (syncedRecord) {
      data[table.key] = (data[table.key] ?? []).map((row) => (row.id === syncedRecord.id ? syncedRecord : row));
    }
    await refreshRemoteData({ syncHierarchy: true, render: true });
  } catch (error) {
    data[table.key] = previousRows;
    normalizeAllHierarchyData();
    persistLocalTableCache();
    renderAll();
    console.error("Supabase save failed", error);
    window.alert(`Save failed to sync with Supabase: ${error?.message ?? "Unknown error"}`);
  }
}

function saveAdminUser() {
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

  if (state.modalMode === "edit" && state.editingUserId) {
    const index = userAccounts.findIndex((item) => item.id === state.editingUserId);
    if (index >= 0) {
      userAccounts[index] = {
        ...userAccounts[index],
        ...payload,
        createdAt: userAccounts[index].createdAt ?? new Date().toISOString(),
        createdBy: userAccounts[index].createdBy ?? "System",
      };
    }
  } else {
    userAccounts.unshift({
      id: `usr_${Date.now()}`,
      ...payload,
      createdAt: new Date().toISOString(),
      createdBy: state.currentUser?.name || state.currentUser?.email || "System",
    });
  }

  setAdminFormMessage("");
  closeForm();
  renderAll();
  return true;
}

async function deleteAdminUser(userId) {
  const user = userAccounts.find((item) => item.id === userId);
  if (!user) return false;
  const approved = await openDeleteConfirm(`Delete ${user.name}?`);
  if (!approved) return false;
  const index = userAccounts.findIndex((item) => item.id === userId);
  if (index >= 0) userAccounts.splice(index, 1);
  renderAll();
  return true;
}

async function deleteRecord(tableKey, recordId) {
  const table = tables.find((item) => item.key === tableKey);
  if (!table) return false;
  const row = data[tableKey].find((item) => item.id === recordId);
  const label = row?.name || row?.title || row?.reference || table.singular || table.title;
  const approved = await openDeleteConfirm(`Delete ${label}?`);
  if (!approved) return false;
  const previousRows = cloneRows(data[tableKey] ?? []);

  const taskIdsToDelete = tableKey === "tasks" ? getTaskDescendantIds(recordId) : [recordId];

  if (tableKey === "tasks") {
    data.tasks = data.tasks.filter((item) => !taskIdsToDelete.includes(item.id));
  } else {
    data[tableKey] = data[tableKey].filter((item) => item.id !== recordId);
  }

  normalizeAllHierarchyData();
  persistLocalTableCache();
  renderAll();

  try {
    if (tableKey === "tasks") {
      await Promise.all(taskIdsToDelete.map((id) => removeRecordFromSupabase("tasks", id)));
    } else {
      await removeRecordFromSupabase(tableKey, recordId);
    }
    await refreshRemoteData({ syncHierarchy: true, render: true });
  } catch (error) {
    data[tableKey] = previousRows;
    normalizeAllHierarchyData();
    persistLocalTableCache();
    renderAll();
    window.alert(`Delete failed to sync with Supabase: ${error?.message ?? "Unknown error"}`);
    return false;
  }
  return true;
}

function bindEvents() {
  el.loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const duplicatePasswords = validateUniquePasswords();
    if (!duplicatePasswords.valid) {
      renderLoginScreen("Duplicate passwords exist. Fix user passwords in Admin first.");
      return;
    }
    loginApp(String(el.loginPassword?.value ?? "").trim());
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
    if (state.modalEntity === "user") saveAdminUser();
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
  window.addEventListener("focus", () => scheduleRemoteRefresh({ syncHierarchy: true, render: true }));
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      scheduleRemoteRefresh({ syncHierarchy: true, render: true });
    }
  });
}

function renderAll() {
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

  purgeLegacyAppStorage();
  applyUrlState();
  state.isMobileViewport = window.innerWidth <= MOBILE_BREAKPOINT;
  bindEvents();
  state.isAuthenticated = getStoredAuthState();
  state.currentUser = state.isAuthenticated ? getStoredAuthUser() : null;
  if (state.currentUser) state.role = state.currentUser.role;
  const validation = validateUniquePasswords();
  if (!validation.valid) {
    console.error(`Duplicate passwords found for: ${validation.users.join(", ")} (${validation.password})`);
  }
  if (state.isAuthenticated) showAppShell();
  else renderLoginScreen("");
  applyLocalTableCache();
  normalizeAllHierarchyData();
  persistLocalTableCache();
  renderAll();
  setupSupabaseLiveSync();
  setupRemoteRefreshPolling();
  refreshRemoteData({ syncHierarchy: true, render: true })
    .then(() => {
      persistLocalTableCache();
    })
    .catch((error) => {
      console.error("Falling back to local seed data", error);
    });
}

init().catch((error) => {
  console.error("App boot failed", error);
  document.body.dataset.bootError = error?.message ?? String(error);
});
