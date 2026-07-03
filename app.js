const tables = [
  {
    key: "ventures",
    title: "Ventures",
    singular: "Venture",
    summary: "Companies, SPVs, clients, partners",
    listColumns: ["name", "type", "status", "verticals", "date"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "type", label: "Type", type: "select", options: ["Self", "SPV", "Subsidiary", "Client", "Partner", "Vendor", "JV", "Prospect"], required: true },
      { name: "status", label: "Status", type: "select", options: ["Prospect", "Active", "Dormant", "Closed"] },
      { name: "verticals", label: "Verticals", type: "text", placeholder: "Comma separated" },
      { name: "entity_form", label: "Entity form", type: "select", options: ["PvtLtd", "LLP", "Proprietorship", "Trust", "Other"] },
      { name: "reg_no", label: "Reg no.", type: "text", placeholder: "CIN / LLPIN / GST" },
      { name: "primary_contact", label: "Primary contact", type: "text" },
      { name: "tags", label: "Tags", type: "text", placeholder: "Comma separated" },
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
      { name: "type", label: "Type", type: "select", options: ["Founder", "Investor", "Partner", "Client", "Vendor", "Consultant", "Contractor", "Employee"], required: true },
      { name: "role_title", label: "Role title", type: "select", options: ["Managing Director", "Project Manager", "Site Engineer", "Architect", "Client SPOC", "Finance Head", "Vendor Coordinator", "Legal Consultant"] },
      { name: "status", label: "Status", type: "select", options: ["Active", "Inactive"], value: "Active" },
      { name: "access_level", label: "Access level", type: "select", options: ["Founder", "Partner", "Employee", "Client", "Contractor"] },
    ],
  },
  {
    key: "projects",
    title: "Projects",
    singular: "Project",
    summary: "Execution layers across ventures",
    listColumns: ["name", "venture", "status", "lead", "target_date"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "venture", label: "Venture", type: "text" },
      { name: "vertical", label: "Vertical", type: "text" },
      { name: "type", label: "Type", type: "select", options: ["Development", "Marketing", "Acquisition", "Leasing", "Infra", "CapitalRaise", "Logistics", "Internal"] },
      { name: "asset", label: "Asset", type: "text" },
      { name: "stage", label: "Stage", type: "select", options: ["Origination", "Scoping", "Mandate", "Execution", "Delivery", "Closure"] },
      { name: "status", label: "Status", type: "select", options: ["Active", "On-Hold", "Blocked", "Completed", "Cancelled"] },
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
    listColumns: ["title", "venture_project", "body", "type", "status", "date"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project", label: "Project", type: "select" },
      { name: "task", label: "Task", type: "select" },
      { name: "related_assets", label: "Assets", type: "select" },
      { name: "related_events", label: "Events", type: "select" },
      { name: "related_transactions", label: "Transactions", type: "select" },
      { name: "type", label: "Type", type: "select", options: ["Note", "Report", "Agreement", "Drawing", "Photo", "Model", "Proposal", "Research", "Comms"] },
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
    title: "Assets",
    singular: "Asset",
    summary: "Buildings, land, and units",
    listColumns: ["name", "type", "status", "owner_ventures", "date"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project", label: "Project", type: "select" },
      { name: "task", label: "Task", type: "select" },
      { name: "type", label: "Type", type: "select", options: ["Building", "Land", "Unit", "Theatre", "Warehouse", "Mixed"] },
      { name: "address", label: "Address", type: "textarea" },
      { name: "lat", label: "lat", type: "number", step: "any" },
      { name: "lng", label: "lng", type: "number", step: "any" },
      { name: "area", label: "Area", type: "text" },
      { name: "unit", label: "Unit", type: "text" },
      { name: "owner_ventures", label: "Owner ventures", type: "text" },
      { name: "status", label: "Status", type: "select", options: ["Under-Acquisition", "Owned", "Under-Development", "Operational", "Disposed"] },
    ],
  },
  {
    key: "events",
    title: "Events",
    singular: "Event",
    summary: "Meetings, visits, and calls",
    listColumns: ["title", "type", "start", "duration", "date"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project", label: "Project", type: "select" },
      { name: "task", label: "Task", type: "select" },
      { name: "type", label: "Type", type: "select", options: ["Meeting", "FieldVisit", "Call", "Inspection", "Other"] },
      { name: "start", label: "Start", type: "datetime-local" },
      { name: "end", label: "End", type: "datetime-local" },
      { name: "participants", label: "Participants", type: "text", placeholder: "Comma separated people" },
      { name: "location", label: "Location", type: "select", options: ["Google Meet", "Zoom", "Discord", "Office", "Client Location"] },
      { name: "summary", label: "Summary", type: "textarea" },
      { name: "calendar_ref", label: "Calendar ref", type: "text" },
    ],
  },
  {
    key: "transactions",
    title: "Transactions",
    singular: "Transaction",
    summary: "Receivables, payables, invoices",
    listColumns: ["reference", "direction", "status", "amount", "due_date"],
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

const SUPABASE_URL = "https://enozxcriirsytgrjcxbt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_tULBf6UJrmdpNRdeb5SQmw_VOAoUhpr";
const APP_TIMEZONE = "Asia/Kolkata";
const REMOTE_TABLE_KEYS = new Set(tables.map((table) => table.key));
const APP_SESSION_KEY = "atit.appAuthenticated";
const supabaseClientFactory = globalThis.supabase?.createClient ?? null;
const supabaseClient = supabaseClientFactory
  ? supabaseClientFactory(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

const data = {
  ventures: [
    {
      id: "ven_1",
      name: "v1",
      type: "Self",
      status: "Active",
      verticals: ["core"],
      date: "2026-06-28",
      entity_form: "PvtLtd",
    },
    {
      id: "ven_2",
      name: "v2",
      type: "SPV",
      status: "Active",
      verticals: ["asset"],
      date: "2026-06-28",
      entity_form: "LLP",
    },
    {
      id: "ven_3",
      name: "ATit",
      type: "Self",
      status: "Active",
      verticals: ["core"],
      date: "2026-06-28",
      entity_form: "PvtLtd",
    },
  ],
  people: [
    {
      id: "ppl_1",
      name: "v1_p1",
      type: "Founder",
      email: "v1_p1@atit.com",
      phone: "9000000001",
      venture: "v1",
      role_title: "Managing Director",
      access_level: "Founder",
      status: "Active",
    },
    {
      id: "ppl_2",
      name: "v1_p2",
      type: "Partner",
      email: "v1_p2@atit.com",
      phone: "9000000002",
      venture: "v1",
      role_title: "Project Manager",
      access_level: "Partner",
      status: "Active",
    },
    {
      id: "ppl_3",
      name: "v2_p1",
      type: "Partner",
      email: "v2_p1@atit.com",
      phone: "9000000003",
      venture: "v2",
      role_title: "Finance Head",
      access_level: "Partner",
      status: "Active",
    },
    {
      id: "ppl_4",
      name: "v1_p3",
      type: "Employee",
      email: "v1_p3@atit.com",
      phone: "9000000004",
      venture: "v1",
      role_title: "Site Engineer",
      access_level: "Employee",
      status: "Active",
    },
    {
      id: "ppl_5",
      name: "v1_p4",
      type: "Employee",
      email: "v1_p4@atit.com",
      phone: "9000000005",
      venture: "v1",
      role_title: "Architect",
      access_level: "Employee",
      status: "Active",
    },
    {
      id: "ppl_6",
      name: "v2_p2",
      type: "Contractor",
      email: "v2_p2@atit.com",
      phone: "9000000006",
      venture: "v2",
      role_title: "Vendor Coordinator",
      access_level: "Contractor",
      status: "Active",
    },
    {
      id: "ppl_7",
      name: "at_p1",
      type: "Founder",
      email: "at_p1@atit.com",
      phone: "9000000007",
      venture: "ATit",
      role_title: "Managing Director",
      access_level: "Founder",
      status: "Active",
    },
    {
      id: "ppl_8",
      name: "at_p2",
      type: "Partner",
      email: "at_p2@atit.com",
      phone: "9000000008",
      venture: "ATit",
      role_title: "Project Manager",
      access_level: "Partner",
      status: "Active",
    },
    {
      id: "ppl_9",
      name: "at_p3",
      type: "Employee",
      email: "at_p3@atit.com",
      phone: "9000000009",
      venture: "ATit",
      role_title: "Architect",
      access_level: "Employee",
      status: "Active",
    },
  ],
  projects: [
    {
      id: "prj_1",
      name: "p1",
      venture: "v1",
      vertical: "core",
      type: "Development",
      stage: "Execution",
      status: "Active",
      start_date: "2026-06-28",
      target_date: "2026-07-12",
      lead: "v1_p1",
      client_shareable: true,
    },
    {
      id: "prj_2",
      name: "p2",
      venture: "v1",
      vertical: "ops",
      type: "Marketing",
      stage: "Scoping",
      status: "Active",
      start_date: "2026-06-28",
      target_date: "2026-07-20",
      lead: "v1_p2",
      client_shareable: false,
    },
    {
      id: "prj_3",
      name: "p3",
      venture: "v2",
      vertical: "asset",
      type: "Internal",
      stage: "Origination",
      status: "Blocked",
      start_date: "2026-06-28",
      target_date: "2026-07-31",
      lead: "v2_p1",
      client_shareable: false,
    },
  ],
  tasks: [
    {
      id: "tsk_1",
      title: "t1",
      venture: "v1",
      project: "p1",
      status: "To-Do",
      priority: "High",
      owner: "v1_p3",
      assignees: ["at_p1", "at_p2"],
      due_date: "2026-07-02",
      estimate: "2h",
      time_logged: "0h",
    },
    {
      id: "tsk_2",
      title: "t2",
      venture: "v1",
      project: "p1",
      status: "In-Progress",
      priority: "Medium",
      owner: "v1_p4",
      due_date: "2026-07-04",
      estimate: "4h",
      time_logged: "1h",
    },
    {
      id: "tsk_3",
      title: "t3",
      venture: "v1",
      project: "p2",
      status: "Blocked",
      priority: "High",
      owner: "v1_p3",
      due_date: "2026-07-08",
      estimate: "3h",
      time_logged: "0h",
    },
    {
      id: "tsk_4",
      title: "t4",
      venture: "v2",
      project: "p3",
      status: "Backlog",
      priority: "Low",
      owner: "v2_p2",
      due_date: "2026-07-15",
      estimate: "1h",
      time_logged: "0h",
    },
    {
      id: "tsk_5",
      title: "t1.1",
      venture: "v1",
      project: "p1",
      parent_task: "t1",
      status: "To-Do",
      priority: "Medium",
      owner: "at_p1",
      due_date: "2026-07-01",
      estimate: "1h",
      time_logged: "0h",
    },
    {
      id: "tsk_6",
      title: "t1.2",
      venture: "v1",
      project: "p1",
      parent_task: "t1",
      status: "Backlog",
      priority: "Low",
      owner: "at_p2",
      due_date: "2026-07-02",
      estimate: "1h",
      time_logged: "0h",
    },
    {
      id: "tsk_7",
      title: "t2.1",
      venture: "v1",
      project: "p1",
      parent_task: "t2",
      status: "In-Progress",
      priority: "Medium",
      owner: "v1_p4",
      due_date: "2026-07-03",
      estimate: "2h",
      time_logged: "1h",
    },
    {
      id: "tsk_8",
      title: "t2.2",
      venture: "v1",
      project: "p1",
      parent_task: "t2",
      status: "To-Do",
      priority: "Low",
      owner: "at_p1",
      due_date: "2026-07-04",
      estimate: "1h",
      time_logged: "0h",
    },
    {
      id: "tsk_9",
      title: "t3.1",
      venture: "v1",
      project: "p2",
      parent_task: "t3",
      status: "Blocked",
      priority: "High",
      owner: "v1_p3",
      due_date: "2026-07-06",
      estimate: "2h",
      time_logged: "0h",
    },
    {
      id: "tsk_10",
      title: "t3.2",
      venture: "v1",
      project: "p2",
      parent_task: "t3",
      status: "To-Do",
      priority: "Medium",
      owner: "at_p2",
      due_date: "2026-07-07",
      estimate: "1h",
      time_logged: "0h",
    },
  ],
  documents: [
    {
      id: "doc_1",
      title: "d1",
      date: "2026-06-28",
      venture: "v1",
      type: "Note",
      body: "venture level",
      version: 1,
      status: "Draft",
      links: ["v1"],
      permission: "Internal",
      tags: ["seed"],
    },
    {
      id: "doc_2",
      title: "d2",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      type: "Agreement",
      body: "project level",
      version: 1,
      status: "Final",
      links: ["p1"],
      permission: "Restricted",
      tags: ["seed"],
    },
    {
      id: "doc_3",
      title: "d3",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      task: "t1",
      type: "Report",
      body: "task level",
      version: 1,
      status: "Signed",
      links: ["t1"],
      permission: "Client-visible",
      tags: ["seed"],
    },
  ],
  events: [
    {
      id: "evt_1",
      title: "e1",
      date: "2026-06-28",
      venture: "v1",
      type: "Meeting",
      start: "2026-06-28T09:00",
      end: "2026-06-28T09:30",
      participants: [],
      location: "HQ",
      summary: "venture level",
      calendar_ref: "cal-v1",
    },
    {
      id: "evt_2",
      title: "e2",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      type: "Call",
      start: "2026-06-28T10:00",
      end: "2026-06-28T10:30",
      participants: [],
      location: "site",
      summary: "project level",
      calendar_ref: "cal-p1",
    },
    {
      id: "evt_3",
      title: "e3",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      task: "t1",
      type: "Inspection",
      start: "2026-06-28T11:00",
      end: "2026-06-28T11:30",
      participants: [],
      location: "field",
      summary: "task level",
      calendar_ref: "cal-t1",
    },
  ],
  assets: [
    {
      id: "ast_1",
      name: "Indiranagar Corner Plot",
      date: "2026-06-28",
      venture: "v1",
      type: "Land",
      address: "100 Feet Road, Indiranagar, Bengaluru",
      lat: 12.9719,
      lng: 77.6412,
      area: "1 ac",
      unit: "lot",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Owned",
    },
    {
      id: "ast_2",
      name: "Whitefield Commerce Block",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      type: "Building",
      address: "ITPL Main Road, Whitefield, Bengaluru",
      lat: 12.9698,
      lng: 77.7499,
      area: "5000 sqft",
      unit: "b1",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Under-Development",
    },
    {
      id: "ast_3",
      name: "Jayanagar Residential Unit",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      task: "t1",
      type: "Unit",
      address: "4th Block, Jayanagar, Bengaluru",
      lat: 12.9279,
      lng: 77.5839,
      area: "1200 sqft",
      unit: "u1",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Operational",
    },
    {
      id: "ast_4",
      name: "Koramangala Studio Block",
      date: "2026-06-29",
      venture: "v1",
      project: "p1",
      type: "Building",
      address: "80 Feet Road, Koramangala, Bengaluru",
      lat: 12.9352,
      lng: 77.6245,
      area: "4200 sqft",
      unit: "k1",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Operational",
    },
    {
      id: "ast_5",
      name: "HSR Layout Office Suite",
      date: "2026-06-29",
      venture: "v1",
      project: "p2",
      type: "Unit",
      address: "27th Main Road, HSR Layout, Bengaluru",
      lat: 12.9116,
      lng: 77.6474,
      area: "1800 sqft",
      unit: "hsr-2a",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Operational",
    },
    {
      id: "ast_6",
      name: "Hebbal Logistics Yard",
      date: "2026-06-30",
      venture: "v2",
      project: "p3",
      type: "Warehouse",
      address: "Outer Ring Road, Hebbal, Bengaluru",
      lat: 13.0352,
      lng: 77.5970,
      area: "2.4 ac",
      unit: "yard-1",
      owner_ventures: [{ venture: "v2", stake: "100" }],
      status: "Under-Development",
    },
    {
      id: "ast_7",
      name: "Electronic City Plant Parcel",
      date: "2026-06-30",
      venture: "v2",
      project: "p3",
      type: "Land",
      address: "Phase 1, Electronic City, Bengaluru",
      lat: 12.8456,
      lng: 77.6603,
      area: "3 ac",
      unit: "ec-plot",
      owner_ventures: [{ venture: "v2", stake: "100" }],
      status: "Under-Acquisition",
    },
    {
      id: "ast_8",
      name: "Malleshwaram Heritage House",
      date: "2026-07-01",
      venture: "v1",
      type: "Building",
      address: "Sampige Road, Malleshwaram, Bengaluru",
      lat: 13.0035,
      lng: 77.5706,
      area: "3200 sqft",
      unit: "mh-1",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Owned",
    },
    {
      id: "ast_9",
      name: "Rajajinagar Mixed Block",
      date: "2026-07-01",
      venture: "v1",
      project: "p2",
      type: "Mixed",
      address: "Chord Road, Rajajinagar, Bengaluru",
      lat: 12.9914,
      lng: 77.5544,
      area: "7600 sqft",
      unit: "rj-7",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Operational",
    },
    {
      id: "ast_10",
      name: "Sarjapur Growth Parcel",
      date: "2026-07-01",
      venture: "v2",
      project: "p3",
      type: "Land",
      address: "Sarjapur Road, Bengaluru",
      lat: 12.9077,
      lng: 77.6871,
      area: "1.8 ac",
      unit: "sg-4",
      owner_ventures: [{ venture: "v2", stake: "100" }],
      status: "Under-Development",
    },
    {
      id: "ast_11",
      name: "Yelahanka Storage Hub",
      date: "2026-07-02",
      venture: "v2",
      type: "Warehouse",
      address: "Bellary Road, Yelahanka, Bengaluru",
      lat: 13.1005,
      lng: 77.5963,
      area: "6800 sqft",
      unit: "yh-3",
      owner_ventures: [{ venture: "v2", stake: "100" }],
      status: "Operational",
    },
    {
      id: "ast_12",
      name: "Marathahalli Tech Loft",
      date: "2026-07-02",
      venture: "v1",
      project: "p1",
      type: "Unit",
      address: "Outer Ring Road, Marathahalli, Bengaluru",
      lat: 12.9591,
      lng: 77.6974,
      area: "2100 sqft",
      unit: "mt-9",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Operational",
    },
    {
      id: "ast_13",
      name: "Banashankari Corner Site",
      date: "2026-07-02",
      venture: "v1",
      type: "Land",
      address: "Banashankari 2nd Stage, Bengaluru",
      lat: 12.9255,
      lng: 77.5468,
      area: "0.75 ac",
      unit: "bs-2",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Owned",
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
      reference: "rent-01",
      venture: "v2",
      direction: "Payable",
      amount: "45000",
      currency: "INR",
      status: "Overdue",
      counterparty: "landlord",
      project_asset: "a1",
      due_date: "2026-07-01",
      documents: [],
    },
    {
      id: "txn_16",
      reference: "rent-02",
      venture: "v1",
      project: "p1",
      direction: "Payable",
      amount: "28000",
      currency: "INR",
      status: "Raised",
      counterparty: "landlord",
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
        ["Upcoming touchpoints", "2 meetings and 1 field visit ahead"],
        ["Next move", "Clear the blocked rollout brief branch"],
      ],
    },
  },
};

const userAccounts = [
  {
    id: "usr_1",
    name: "ATIT Admin",
    email: "admin@atit.com",
    password: "atit1234",
    role: "Admin",
    status: "Active",
    venture_scope: "All ventures",
    table_access: tables.map((table) => table.key),
  },
  {
    id: "usr_2",
    name: "Dev Malik",
    email: "dev@atit.com",
    password: "atit1234",
    role: "Founder",
    status: "Active",
    venture_scope: "ATIT",
    table_access: ["ventures", "people", "projects", "tasks", "documents", "events", "transactions"],
  },
  {
    id: "usr_3",
    name: "Meera Sethi",
    email: "meera@atit.com",
    password: "atit1234",
    role: "Employee",
    status: "Active",
    venture_scope: "ATIT",
    table_access: ["projects", "tasks", "documents", "events", "assets"],
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

function getUserByPassword(password) {
  const normalized = String(password ?? "").trim();
  if (!normalized) return null;
  return userAccounts.find((user) => String(user.password ?? "").trim() === normalized) ?? null;
}

function validateUniquePasswords() {
  return { valid: true, password: "", users: [] };
}

const state = {
  role: "Founder",
  projectId: "prj_1",
  taskId: "tsk_1",
  search: "",
  activeTable: "projects",
  activeNav: "dashboard",
  assetsView: "table",
  assetMapKeyEditorOpen: false,
  assetMapExpanded: false,
  assetMapRenderToken: 0,
  modalMode: "create",
  modalEntity: "table",
  editingRecordId: null,
  editingUserId: null,
  sidebarCollapsed: true,
  detailTableKey: null,
  detailRecordId: null,
  detailTreeOpen: false,
  detailHistory: [],
  recordFilters: {},
  taskExpanded: {},
  ganttWeekStart: null,
  ganttScale: "week",
  googleMapsApiKey: "",
  isAuthenticated: false,
  isMobileViewport: false,
  isMobileNavOpen: false,
};

const el = {};
let confirmResolve = null;
const MOBILE_BREAKPOINT = 820;
const GOOGLE_MAPS_API_KEY_STORAGE_KEY = "atit.googleMapsApiKey";
const LOCAL_TABLE_CACHE_STORAGE_KEY = "atit.localTableCache";
const googleMapsRuntime = {
  loaderPromise: null,
  map: null,
  markers: [],
  labels: [],
  infoWindow: null,
};
const leafletRuntime = {
  loaderPromise: null,
  map: null,
  markers: [],
};

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
  tasks: { assignees: [], depends_on: [] },
  documents: { links: [], related_assets: [], related_events: [], related_transactions: [], tags: [] },
  assets: { owner_ventures: [] },
  events: { participants: [] },
  transactions: { documents: [] },
};

const remoteTableColumns = {
  ventures: ["id", "name", "type", "status", "lead", "primary_contact", "verticals", "founded", "hq", "website", "notes", "tags", "created_at"],
  people: ["id", "name", "email", "phone", "venture", "role", "type", "status", "location", "timezone", "notes", "created_at"],
  projects: ["id", "name", "venture", "status", "lead", "target_date", "budget", "summary", "priority", "created_at"],
  tasks: ["id", "title", "venture", "project", "parent_task", "status", "priority", "owner", "assignees", "depends_on", "due_date", "estimate", "time_logged", "external_shared_with", "created_at"],
  documents: ["id", "title", "date", "venture", "project", "task", "type", "body", "file_ref", "version", "status", "links", "permission", "tags", "created_at"],
  assets: ["id", "name", "type", "status", "venture", "project", "task", "address", "lat", "lng", "area", "unit", "owner_ventures", "date", "notes", "created_at"],
  events: ["id", "title", "type", "venture", "project", "task", "date", "start", "duration", "location", "participants", "notes", "created_at"],
  transactions: ["id", "reference", "direction", "status", "venture", "project_asset", "counterparty", "amount", "currency", "due_date", "documents", "notes", "created_at"],
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
}

async function syncRecordToSupabase(tableKey, record) {
  if (!REMOTE_TABLE_KEYS.has(tableKey) || !supabaseClient) return;
  const payload = mapRecordToSupabase(tableKey, record);
  const hasExistingRecord = data[tableKey]?.some((item) => item.id === record.id);
  const query = hasExistingRecord
    ? supabaseClient.from(tableKey).update(payload).eq("id", record.id)
    : supabaseClient.from(tableKey).insert(payload);
  const { error } = await query;
  if (error) throw error;
}

async function removeRecordFromSupabase(tableKey, recordId) {
  if (!REMOTE_TABLE_KEYS.has(tableKey) || !supabaseClient) return;
  const { error } = await supabaseClient.from(tableKey).delete().eq("id", recordId);
  if (error) throw error;
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

    if (table.key === "documents" && filters.type !== "all") {
      if (String(row.type || "") !== filters.type) return false;
    }

    if (table.key === "documents" && filters.status !== "all") {
      if (String(row.status || "") !== filters.status) return false;
    }

    return true;
  });

  rows = rows.slice().sort((left, right) => {
    const diff = getRecordAddedAt(right) - getRecordAddedAt(left);
    return filters.order === "oldest" ? -diff : diff;
  });

  return rows;
}

function getGoogleMapsApiKey() {
  const runtimeKey = String(globalThis.ATIT_GOOGLE_MAPS_API_KEY ?? globalThis.GOOGLE_MAPS_API_KEY ?? "").trim();
  if (runtimeKey) return runtimeKey;

  try {
    return String(globalThis.localStorage?.getItem(GOOGLE_MAPS_API_KEY_STORAGE_KEY) ?? "").trim();
  } catch {
    return "";
  }
}

function persistGoogleMapsApiKey(value) {
  const normalized = String(value ?? "").trim();
  state.googleMapsApiKey = normalized;
  try {
    if (normalized) globalThis.localStorage?.setItem(GOOGLE_MAPS_API_KEY_STORAGE_KEY, normalized);
    else globalThis.localStorage?.removeItem(GOOGLE_MAPS_API_KEY_STORAGE_KEY);
  } catch {
    // Ignore storage failures and keep the in-memory value.
  }
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

function hasValidAssetCoordinates(row) {
  const lat = getAssetLatitude(row);
  const lng = getAssetLongitude(row);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return false;
  if (lat === 0 && lng === 0) return false;
  return true;
}

function getMappableAssets(rows) {
  return rows.filter((row) => hasValidAssetCoordinates(row));
}

function getUnmappedAssets(rows) {
  return rows.filter((row) => !hasValidAssetCoordinates(row));
}

function getAssetLatitude(asset) {
  return Number(asset?.lat ?? asset?.latitude);
}

function getAssetLongitude(asset) {
  return Number(asset?.lng ?? asset?.longitude);
}

function getAssetMapAddress(asset) {
  const address = String(asset?.address ?? asset?.location ?? "").trim();
  if (address) return address;
  const lat = asset?.lat ?? asset?.latitude ?? "—";
  const lng = asset?.lng ?? asset?.longitude ?? "—";
  return `${lat}, ${lng}`;
}

function getAssetMarkerLabelText(asset) {
  const name = String(asset?.name ?? "").trim();
  if (!name) return "Asset";
  return name.length > 28 ? `${name.slice(0, 28).trim()}...` : name;
}

function getAssetMarkerStatusText(asset) {
  return String(asset?.status ?? "").trim();
}

function getAssetMarkerStatusClass(asset) {
  const normalized = getStatusClassName(getAssetMarkerStatusText(asset));
  return normalized ? ` asset-map-label-status-${normalized}` : "";
}

function getAssetStatusColor(status) {
  const normalized = getStatusClassName(status);
  const colors = {
    owned: "#2f9e44",
    "under-development": "#f08c00",
    "under-acquisition": "#2563eb",
    operational: "#0f766e",
    disposed: "#c92a2a",
  };
  return colors[normalized] ?? "#2f6fb1";
}

function getAssetMarkerLabelMarkup(asset) {
  const name = escapeHtml(getAssetMarkerLabelText(asset));
  const status = escapeHtml(getAssetMarkerStatusText(asset));
  return `
    <span class="asset-map-label-copy">
      <span class="asset-map-label-name">${name}</span>
      ${status ? `<span class="asset-map-label-status${getAssetMarkerStatusClass(asset)}">${status}</span>` : ""}
    </span>
  `;
}

function setAssetMapLoading(isLoading, message = "Loading map...") {
  const shell = document.querySelector(".asset-map-stage-inner");
  const status = document.getElementById("asset-map-loading");
  if (shell) {
    shell.classList.toggle("is-loading", Boolean(isLoading));
  }
  if (status) {
    status.hidden = !isLoading;
    const copy = status.querySelector("span");
    if (copy) copy.textContent = message;
  }
}

function shouldUseLeafletMapFirst() {
  const host = String(globalThis.location?.hostname ?? "").trim().toLowerCase();
  return host === "127.0.0.1" || host === "localhost";
}

function createLeafletAssetIcon(L, color = "#2f6fb1") {
  return L.divIcon({
    className: "asset-map-leaflet-marker-wrap",
    html: `
      <span class="asset-map-leaflet-marker" aria-hidden="true" style="--asset-map-marker-color: ${escapeHtml(color)}">
        <span class="asset-map-leaflet-marker-core"></span>
      </span>
    `,
    iconSize: [24, 32],
    iconAnchor: [12, 30],
    popupAnchor: [0, -26],
    tooltipAnchor: [0, -24],
  });
}

function createGoogleMapLabelOverlay(maps, map, asset) {
  class AssetMapLabelOverlay extends maps.OverlayView {
    constructor() {
      super();
      this.position = new maps.LatLng(getAssetLatitude(asset), getAssetLongitude(asset));
      this.element = null;
    }

    onAdd() {
      const element = document.createElement("div");
      element.className = "asset-map-marker-label";
      element.innerHTML = getAssetMarkerLabelMarkup(asset);
      this.element = element;
      const panes = this.getPanes();
      panes?.overlayMouseTarget?.appendChild(element);
    }

    draw() {
      if (!this.element) return;
      const projection = this.getProjection();
      if (!projection) return;
      const point = projection.fromLatLngToDivPixel(this.position);
      if (!point) return;
      this.element.style.left = `${point.x}px`;
      this.element.style.top = `${point.y}px`;
    }

    onRemove() {
      this.element?.remove();
      this.element = null;
    }
  }

  const overlay = new AssetMapLabelOverlay();
  overlay.setMap(map);
  return overlay;
}

function createGoogleMapPinIcon(maps, asset) {
  const color = getAssetStatusColor(asset?.status);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="42" viewBox="0 0 30 42">
      <path d="M15 41s12-14.6 12-24.2C27 8.4 21.6 3 15 3S3 8.4 3 16.8C3 26.4 15 41 15 41Z" fill="${color}" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="15" cy="16.8" r="4.8" fill="#ffffff"/>
    </svg>
  `;
  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new maps.Size(30, 42),
    anchor: new maps.Point(15, 41),
  };
}

function resetAssetMap() {
  googleMapsRuntime.markers.forEach((marker) => {
    if (marker?.setMap) marker.setMap(null);
  });
  googleMapsRuntime.markers = [];
  googleMapsRuntime.labels.forEach((label) => {
    if (label?.setMap) label.setMap(null);
  });
  googleMapsRuntime.labels = [];
  googleMapsRuntime.map = null;
  googleMapsRuntime.infoWindow = null;
  leafletRuntime.markers.forEach((marker) => {
    if (marker?.remove) marker.remove();
  });
  leafletRuntime.markers = [];
  if (leafletRuntime.map?.remove) leafletRuntime.map.remove();
  leafletRuntime.map = null;
}

function loadGoogleMapsApi() {
  if (globalThis.google?.maps) return Promise.resolve(globalThis.google.maps);
  if (googleMapsRuntime.loaderPromise) return googleMapsRuntime.loaderPromise;

  const apiKey = getGoogleMapsApiKey();
  if (!apiKey) {
    return Promise.reject(new Error("Google Maps API key not configured"));
  }

  googleMapsRuntime.loaderPromise = new Promise((resolve, reject) => {
    const callbackName = `initGoogleMaps${Date.now()}`;
    const script = document.createElement("script");

    globalThis[callbackName] = () => {
      delete globalThis[callbackName];
      resolve(globalThis.google.maps);
    };

    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      delete globalThis[callbackName];
      googleMapsRuntime.loaderPromise = null;
      reject(new Error("Google Maps failed to load"));
    };

    document.head.appendChild(script);
  });

  return googleMapsRuntime.loaderPromise;
}

function loadLeafletAssets() {
  if (globalThis.L?.map) return Promise.resolve(globalThis.L);
  if (leafletRuntime.loaderPromise) return leafletRuntime.loaderPromise;

  leafletRuntime.loaderPromise = new Promise((resolve, reject) => {
    const existingStylesheet = document.querySelector('link[data-leaflet-stylesheet="true"]');
    if (!existingStylesheet) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      stylesheet.dataset.leafletStylesheet = "true";
      document.head.appendChild(stylesheet);
    }

    const existingScript = document.querySelector('script[data-leaflet-script="true"]');
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(globalThis.L));
      existingScript.addEventListener("error", () => reject(new Error("Leaflet failed to load")));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.defer = true;
    script.dataset.leafletScript = "true";
    script.onload = () => resolve(globalThis.L);
    script.onerror = () => {
      leafletRuntime.loaderPromise = null;
      reject(new Error("Leaflet failed to load"));
    };
    document.head.appendChild(script);
  });

  return leafletRuntime.loaderPromise;
}

function focusAssetMarker(recordId) {
  const marker = googleMapsRuntime.markers.find((entry) => entry.assetId === recordId);
  if (marker && googleMapsRuntime.map && googleMapsRuntime.infoWindow) {
    googleMapsRuntime.map.panTo(marker.getPosition());
    googleMapsRuntime.map.setZoom(Math.max(googleMapsRuntime.map.getZoom() ?? 14, 14));
    globalThis.google?.maps?.event?.trigger(marker, "click");
    return;
  }

  const leafletMarker = leafletRuntime.markers.find((entry) => entry.assetId === recordId);
  if (leafletMarker && leafletRuntime.map) {
    leafletRuntime.map.setView(leafletMarker.getLatLng(), Math.max(leafletRuntime.map.getZoom() ?? 14, 14));
    leafletMarker.openPopup();
  }
}

async function initializeAssetMap(rows) {
  const renderToken = ++state.assetMapRenderToken;
  const canvas = document.getElementById("asset-map-canvas");
  if (!canvas || state.activeNav !== "assets" || state.assetsView !== "map") return;
  setAssetMapLoading(true, "Loading map...");

  const mappableAssets = getMappableAssets(rows);
  if (!mappableAssets.length) {
    resetAssetMap();
    setAssetMapLoading(false);
    return;
  }

  const maps = await loadGoogleMapsApi();
  if (!document.getElementById("asset-map-canvas") || state.activeNav !== "assets" || state.assetsView !== "map" || renderToken !== state.assetMapRenderToken) return;

  resetAssetMap();
  const bounds = new maps.LatLngBounds();
  googleMapsRuntime.map = new maps.Map(canvas, {
    center: { lat: getAssetLatitude(mappableAssets[0]), lng: getAssetLongitude(mappableAssets[0]) },
    zoom: 12,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  });
  googleMapsRuntime.infoWindow = new maps.InfoWindow();

  mappableAssets.forEach((asset) => {
    const marker = new maps.Marker({
      map: googleMapsRuntime.map,
      position: { lat: getAssetLatitude(asset), lng: getAssetLongitude(asset) },
      title: String(asset.name || "Asset"),
      icon: createGoogleMapPinIcon(maps, asset),
      optimized: false,
    });
    marker.assetId = asset.id;
    marker.addListener("click", () => {
      googleMapsRuntime.infoWindow?.setContent(`
        <div class="asset-map-info-window">
          <strong>${escapeHtml(asset.name || "Asset")}</strong>
          <div>${escapeHtml(asset.type || "Unknown type")}</div>
          <div>${escapeHtml(getAssetMapAddress(asset))}</div>
        </div>
      `);
      googleMapsRuntime.infoWindow?.open({
        anchor: marker,
        map: googleMapsRuntime.map,
      });
    });
    googleMapsRuntime.markers.push(marker);
    googleMapsRuntime.labels.push(createGoogleMapLabelOverlay(maps, googleMapsRuntime.map, asset));
    bounds.extend(marker.getPosition());
  });

  if (mappableAssets.length === 1) {
    googleMapsRuntime.map.setCenter(bounds.getCenter());
    googleMapsRuntime.map.setZoom(14);
  } else {
    googleMapsRuntime.map.fitBounds(bounds, 64);
  }

  globalThis.setTimeout(() => {
    if (!googleMapsRuntime.map || state.activeNav !== "assets" || state.assetsView !== "map" || renderToken !== state.assetMapRenderToken) return;
    globalThis.google?.maps?.event?.trigger(googleMapsRuntime.map, "resize");
    if (mappableAssets.length === 1) {
      googleMapsRuntime.map.setCenter(bounds.getCenter());
      googleMapsRuntime.map.setZoom(14);
    } else {
      googleMapsRuntime.map.fitBounds(bounds, 64);
    }
  }, 250);

  globalThis.setTimeout(() => {
    if (!googleMapsRuntime.map || state.activeNav !== "assets" || state.assetsView !== "map" || renderToken !== state.assetMapRenderToken) return;
    const activeCanvas = document.getElementById("asset-map-canvas");
    const visibleText = String(activeCanvas?.textContent ?? "").trim();
    if (visibleText.includes("Oops! Something went wrong.")) return;
    setAssetMapLoading(false);
  }, 500);

  globalThis.setTimeout(() => {
    const activeCanvas = document.getElementById("asset-map-canvas");
    if (!activeCanvas || state.activeNav !== "assets" || state.assetsView !== "map" || renderToken !== state.assetMapRenderToken) return;
    const visibleText = String(activeCanvas.textContent ?? "").trim();
    if (!visibleText.includes("Oops! Something went wrong.")) return;
    setAssetMapLoading(true, "Switching to backup map...");
    initializeLeafletAssetMap(rows).catch((fallbackError) => {
      console.error("Leaflet fallback failed after Google Maps error surface", fallbackError);
      setAssetMapLoading(false);
    });
  }, 1200);
}

async function initializeLeafletAssetMap(rows) {
  const renderToken = ++state.assetMapRenderToken;
  const canvas = document.getElementById("asset-map-canvas");
  if (!canvas || state.activeNav !== "assets" || state.assetsView !== "map") return;
  setAssetMapLoading(true, "Loading map...");

  const mappableAssets = getMappableAssets(rows);
  if (!mappableAssets.length) {
    resetAssetMap();
    setAssetMapLoading(false);
    return;
  }

  const L = await loadLeafletAssets();
  if (!document.getElementById("asset-map-canvas") || state.activeNav !== "assets" || state.assetsView !== "map" || renderToken !== state.assetMapRenderToken) return;

  resetAssetMap();
  leafletRuntime.map = L.map(canvas, {
    zoomControl: true,
    attributionControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(leafletRuntime.map);

  const bounds = [];
  mappableAssets.forEach((asset) => {
    const markerIcon = createLeafletAssetIcon(L, getAssetStatusColor(asset?.status));
    const marker = L.marker([getAssetLatitude(asset), getAssetLongitude(asset)], {
      title: String(asset.name || "Asset"),
      icon: markerIcon,
    }).addTo(leafletRuntime.map);
    marker.bindPopup(`
      <div class="asset-map-info-window">
        <strong>${escapeHtml(asset.name || "Asset")}</strong>
        <div>${escapeHtml(asset.type || "Unknown type")}</div>
        <div>${escapeHtml(getAssetMapAddress(asset))}</div>
      </div>
    `);
    marker.bindTooltip(getAssetMarkerLabelMarkup(asset), {
      permanent: true,
      direction: "top",
      offset: [0, -14],
      className: "asset-map-leaflet-tooltip",
    });
    marker.assetId = asset.id;
    leafletRuntime.markers.push(marker);
    bounds.push([getAssetLatitude(asset), getAssetLongitude(asset)]);
  });

  if (bounds.length === 1) {
    leafletRuntime.map.setView(bounds[0], 14);
  } else {
    leafletRuntime.map.fitBounds(bounds, { padding: [48, 48] });
  }

  globalThis.setTimeout(() => {
    if (!leafletRuntime.map || state.activeNav !== "assets" || state.assetsView !== "map" || renderToken !== state.assetMapRenderToken) return;
    leafletRuntime.map.invalidateSize();
    if (bounds.length === 1) {
      leafletRuntime.map.setView(bounds[0], 14);
    } else {
      leafletRuntime.map.fitBounds(bounds, { padding: [48, 48] });
    }
    setAssetMapLoading(false);
  }, 250);
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
    addConnection(
      "documents",
      getLinkedDocumentsForRecord("assets", rowLabel).map((item) => ({
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
    if (!ventureName || ventureName === "ATIT") return "";
    return getVentureTone(ventureName);
  }

  if (tableKey === "ventures") {
    const ventureName = record?.name || "";
    if (!ventureName || ventureName === "ATIT") return "";
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

function getStructuredLeafNodes(tableKey, rows) {
  return rows.map((row) => createTreeLeafNode(tableKey, row, getRecordReferenceLabel(tableKey, row)));
}

function pushStructuredGroup(children, label, tableKey, rows) {
  const nodes = getStructuredLeafNodes(tableKey, rows);
  if (!nodes.length) return;
  children.push({
    isGroup: true,
    label,
    children: nodes,
  });
}

function buildStructuredTaskNode(taskRow, options = {}) {
  const children = [];

  if (options.includeProject && taskRow.project) {
    const projectRow = data.projects.find((item) => item.name === taskRow.project) ?? null;
    if (projectRow) {
      children.push({
        isGroup: true,
        label: "Projects",
        children: [createTreeLeafNode("projects", projectRow, getRecordReferenceLabel("projects", projectRow))],
      });
    }
  }

  const peopleNodes = getTaskPeopleTreeNodes(taskRow);
  if (peopleNodes.length) {
    children.push({
      isGroup: true,
      label: "People",
      children: peopleNodes,
    });
  }

  const subtaskNodes = (data.tasks ?? [])
    .filter((item) => String(item.parent_task || "") === String(taskRow.title || ""))
    .map((item) => buildStructuredTaskNode(item));

  pushStructuredGroup(
    children,
    "Assets",
    "assets",
    (data.assets ?? []).filter((item) => item.task === taskRow.title),
  );

  pushStructuredGroup(
    children,
    "Events",
    "events",
    (data.events ?? []).filter((item) => item.task === taskRow.title),
  );

  pushStructuredGroup(
    children,
    "Documents",
    "documents",
    (data.documents ?? []).filter((item) => item.task === taskRow.title || (Array.isArray(item.links) && item.links.includes(taskRow.title))),
  );

  pushStructuredGroup(
    children,
    "Transactions",
    "transactions",
    (data.transactions ?? []).filter((item) => item.task === taskRow.title),
  );

  if (subtaskNodes.length) {
    children.push({
      isGroup: true,
      label: "Tasks",
      children: subtaskNodes,
    });
  }

  return {
    id: taskRow.id,
    tableKey: "tasks",
    label: getRecordLabel("tasks", taskRow),
    iconKey: "tasks",
    toneClass: "",
    isRoot: false,
    children,
  };
}

function buildStructuredProjectNode(projectRow, options = {}) {
  const children = [];

  if (options.includeVenture && projectRow.venture) {
    const ventureRow = data.ventures.find((item) => item.name === projectRow.venture) ?? null;
    if (ventureRow) {
      children.push({
        isGroup: true,
        label: "Ventures",
        children: [createTreeLeafNode("ventures", ventureRow, getRecordReferenceLabel("ventures", ventureRow))],
      });
    }
  }

  const taskNodes = (data.tasks ?? [])
    .filter((item) => item.project === projectRow.name && !item.parent_task)
    .map((item) => buildStructuredTaskNode(item));

  pushStructuredGroup(
    children,
    "Assets",
    "assets",
    (data.assets ?? []).filter((item) => item.project === projectRow.name),
  );

  pushStructuredGroup(
    children,
    "Events",
    "events",
    (data.events ?? []).filter((item) => item.project === projectRow.name),
  );

  pushStructuredGroup(
    children,
    "Documents",
    "documents",
    (data.documents ?? []).filter((item) => item.project === projectRow.name || (Array.isArray(item.links) && item.links.includes(projectRow.name))),
  );

  pushStructuredGroup(
    children,
    "Transactions",
    "transactions",
    (data.transactions ?? []).filter((item) => item.project === projectRow.name),
  );

  if (taskNodes.length) {
    children.push({
      isGroup: true,
      label: "Tasks",
      children: taskNodes,
    });
  }

  return {
    id: projectRow.id,
    tableKey: "projects",
    label: getRecordLabel("projects", projectRow),
    iconKey: "projects",
    toneClass: getTreeNodeToneClass("projects", projectRow),
    isRoot: false,
    children,
  };
}

function buildStructuredTree(tableKey, record) {
  if (tableKey === "ventures") {
    const children = [];
    const venturePeople = getVentureLinkedPeople(record);
    if (venturePeople.length) {
      children.push({
        isGroup: true,
        label: "People",
        children: venturePeople,
      });
    }

    const projectNodes = (data.projects ?? [])
      .filter((item) => item.venture === record.name)
      .map((item) => buildStructuredProjectNode(item));

    if (projectNodes.length) {
      children.push({
        isGroup: true,
        label: "Projects",
        children: projectNodes,
      });
    }

    pushStructuredGroup(
      children,
      "Events",
      "events",
      (data.events ?? []).filter((item) => item.venture === record.name),
    );

    pushStructuredGroup(
      children,
      "Assets",
      "assets",
      (data.assets ?? []).filter((item) => item.venture === record.name),
    );

    pushStructuredGroup(
      children,
      "Documents",
      "documents",
      (data.documents ?? []).filter((item) => item.venture === record.name || (Array.isArray(item.links) && item.links.includes(record.name))),
    );

    pushStructuredGroup(
      children,
      "Transactions",
      "transactions",
      (data.transactions ?? []).filter((item) => item.venture === record.name),
    );

    return {
      id: record.id,
      tableKey,
      label: getRecordLabel(tableKey, record),
      iconKey: tableKey,
      toneClass: getTreeNodeToneClass(tableKey, record),
      isRoot: true,
      children,
    };
  }

  if (tableKey === "projects") {
    const root = buildStructuredProjectNode(record, { includeVenture: true });
    return { ...root, isRoot: true };
  }

  if (tableKey === "tasks") {
    const root = buildStructuredTaskNode(record, { includeProject: true });
    return { ...root, isRoot: true };
  }

  return null;
}

function buildConnectionTree(tableKey, record, depth = 0, visited = new Set(), rootTableKey = tableKey) {
  const structuredRoot = depth === 0 ? buildStructuredTree(tableKey, record) : null;
  if (structuredRoot) return structuredRoot;

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
          return {
            id: item.id,
            tableKey: item.tableKey,
            label: item.label || getRecordLabel(item.tableKey, item.row),
            iconKey: item.tableKey,
            toneClass: getTreeNodeToneClass(item.tableKey, item.row),
            isRoot: false,
            children: [],
          };
        }

        return buildConnectionTree(item.tableKey, item.row, depth + 1, nextVisited, rootTableKey);
      })
      .filter(Boolean);

    if (!branchChildren.length) return;

    children.push({
      isGroup: true,
      label: connection.label,
      children: branchChildren,
    });
  });

  return {
    id: record.id,
    tableKey,
    label: getRecordLabel(tableKey, record),
    iconKey: tableKey,
    toneClass: getTreeNodeToneClass(tableKey, record),
    isRoot: depth === 0,
    children,
  };
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

  return `
    <li${shouldStackChildren ? ' class="tree-group-stack-vertical"' : ""}>
      ${node.isGroup
        ? `<div class="${nodeClass}"><span>${escapeHtml(node.label)}</span></div>`
        : `<button class="${nodeClass}" ${attrs}>${iconMarkup}<span>${escapeHtml(node.label)}</span></button>`}
      ${node.children?.length ? `<ul>${node.children.map((child) => renderConnectionTreeNode(child)).join("")}</ul>` : ""}
    </li>
  `;
}

function renderDetailTree(tableKey, record) {
  const root = buildStructuredTree(tableKey, record) ?? buildConnectionTree(tableKey, record);

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
  const root = buildStructuredTree(tableKey, record) ?? buildConnectionTree(tableKey, record);
  if (!root) return [];

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
  const rows = detailFields.map((field) => {
    const value = getFieldDisplayValue(field, record);
    const display = Array.isArray(record?.[field.name]) ? record[field.name].join(", ") : value || "—";
    return `
      <div class="detail-field">
        <div class="detail-field-label">${escapeHtml(field.label)} :</div>
        <div class="detail-field-value">${escapeHtml(display)}</div>
      </div>
    `;
  }).join("");

  const connections = table.key === "ventures"
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
            <button class="record-action-button" type="button" data-detail-action="edit">Edit</button>
            <button class="record-action-button" type="button" data-detail-action="delete">Delete</button>
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
  const user = getUserByPassword(password);
  if (!user) {
    renderLoginScreen("Invalid password.");
    return false;
  }

  state.isAuthenticated = true;
  state.role = user.role;
  setStoredAuthState(true);
  if (el.loginError) el.loginError.textContent = "";
  showAppShell();
  renderAll();
  return true;
}

function logoutApp() {
  state.isAuthenticated = false;
  setStoredAuthState(false);
  state.activeNav = "dashboard";
  state.assetsView = "table";
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

  const options = includeTime
    ? { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }
    : { day: "2-digit", month: "short" };

  return new Intl.DateTimeFormat("en-GB", options).format(date);
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

  if (activeView === "assets") {
    url.searchParams.set("assets_view", state.assetsView === "map" ? "map" : "table");
  } else {
    url.searchParams.delete("assets_view");
  }

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
  const assetsView = params.get("assets_view");

  state.activeNav = isKnownSidebarView(view) ? view : "dashboard";
  if (isTableView(state.activeNav)) {
    state.activeTable = state.activeNav;
  }
  state.assetsView = assetsView === "map" ? "map" : "table";
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
  if (tableKey === "documents" && column === "status" && value !== "—") {
    return renderDocumentStatusBadge(value, "records");
  }
  if (tableKey === "transactions" && column === "direction" && value !== "—") {
    return renderDirectionBadge(value, "records");
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

function getDocumentVisitUrl(record) {
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
  return rows.map((row, index) => `
    <tr data-open-detail="${escapeHtml(table.key)}" data-record-id="${escapeHtml(row.id)}">
      <td class="records-serial-cell">${renderSerialNumber(index + 1)}</td>
      ${table.listColumns.map((column) => `<td>${renderCellMarkup(table.key, column, row)}</td>`).join("")}
      <td class="records-actions-cell">
        ${table.key === "documents" && getDocumentVisitUrl(row)
          ? `<button class="record-action-button" type="button" data-record-action="visit" data-record-id="${escapeHtml(row.id)}">Visit</button>`
          : ""}
        <button class="record-action-button" type="button" data-record-action="edit" data-record-id="${escapeHtml(row.id)}">Edit</button>
        <button class="record-action-button" type="button" data-record-action="delete" data-record-id="${escapeHtml(row.id)}">Delete</button>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="${table.listColumns.length + 2}">No records</td></tr>`;
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
  if (!rows.length) return `<div class="people-empty">No records</div>`;

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
              <button class="record-action-button" type="button" data-record-action="edit" data-record-id="${escapeHtml(row.id)}">Edit</button>
              <button class="record-action-button" type="button" data-record-action="delete" data-record-id="${escapeHtml(row.id)}">Delete</button>
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
  if (!rows.length) return `<tr><td colspan="7">No records</td></tr>`;
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
          <button class="record-action-button" type="button" data-record-action="edit" data-record-id="${escapeHtml(row.id)}">Edit</button>
          <button class="record-action-button" type="button" data-record-action="delete" data-record-id="${escapeHtml(row.id)}">Delete</button>
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
            <button class="record-action-button" type="button" data-record-action="edit" data-record-id="${escapeHtml(child.id)}">Edit</button>
            <button class="record-action-button" type="button" data-record-action="delete" data-record-id="${escapeHtml(child.id)}">Delete</button>
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
  if (table.key === "assets" && state.assetsView === "map") {
    renderHeroPanel();
    return;
  }
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

function bindAssetMapActions(rows) {
  document.querySelectorAll("[data-assets-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextView = button.dataset.assetsView === "map" ? "map" : "table";
      if (state.assetsView === nextView) return;
      state.assetsView = nextView;
      state.assetMapExpanded = false;
      state.detailTableKey = null;
      state.detailRecordId = null;
      syncCurrentViewUrl();
      renderHeroPanel();
    });
  });

  if (state.activeNav !== "assets" || state.assetsView !== "map") return;

  document.querySelectorAll("[data-asset-map-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const recordId = button.getAttribute("data-asset-map-open");
      if (!recordId) return;
      openRecordDetail("assets", recordId, { preserveNav: true });
    });
  });

  document.querySelector("[data-asset-map-expand]")?.addEventListener("click", () => {
    state.assetMapExpanded = !state.assetMapExpanded;
    renderHeroPanel();
  });

  const initializeMap = shouldUseLeafletMapFirst()
    ? initializeLeafletAssetMap(rows)
    : initializeAssetMap(rows).catch((error) => {
      console.error("Google Maps failed, falling back to Leaflet", error);
      return initializeLeafletAssetMap(rows).catch((fallbackError) => {
        const canvas = document.getElementById("asset-map-canvas");
        if (!canvas) return;
        canvas.outerHTML = `
          <div class="asset-map-empty">
            <strong>Map failed to load</strong>
            <p>${escapeHtml(fallbackError?.message ?? error?.message ?? "Unknown error")}</p>
          </div>
        `;
      });
    });

  Promise.resolve(initializeMap).catch((error) => {
    const canvas = document.getElementById("asset-map-canvas");
    if (!canvas) return;
    canvas.outerHTML = `
      <div class="asset-map-empty">
        <strong>Map failed to load</strong>
        <p>${escapeHtml(error?.message ?? "Unknown error")}</p>
      </div>
    `;
  });
}

function renderRecordsToolbar(table, rows, filters, ventureOptions, projectOptions) {
  const showVentureFilter = ventureOptions.length > 0;
  const showProjectFilter = projectOptions.length > 0;
  const documentTypeOptions = table.key === "documents" ? getFilterOptions("documents", "type") : [];
  const documentStatusOptions = table.key === "documents" ? getFilterOptions("documents", "status") : [];
  const searchPlaceholder = `Search ${escapeHtml(table.title.toLowerCase())}...`;
  const showAssetsViewToggle = table.key === "assets";

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
          <label class="records-filter">
            <select id="records-order-filter">
              <option value="newest" ${filters.order === "newest" ? "selected" : ""}>Newest first</option>
              <option value="oldest" ${filters.order === "oldest" ? "selected" : ""}>Oldest first</option>
            </select>
          </label>
        </div>
        ${showAssetsViewToggle ? `
          <div class="records-view-toggle" role="tablist" aria-label="Assets views">
            <button class="records-view-button ${state.assetsView === "table" ? "active" : ""}" type="button" data-assets-view="table" aria-label="Table view" title="Table view">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3.5" y="4.5" width="17" height="15" rx="2"></rect>
                <path d="M3.5 10h17"></path>
                <path d="M9 4.5v15"></path>
                <path d="M15 4.5v15"></path>
              </svg>
            </button>
            <button class="records-view-button ${state.assetsView === "map" ? "active" : ""}" type="button" data-assets-view="map" aria-label="Map view" title="Map view">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 18 3.8 20.2A.6.6 0 0 1 3 19.64V6.4a1 1 0 0 1 .62-.92L9 3"></path>
                <path d="M15 6 9 3v15l6 3m0-15 5.2-2.2a.6.6 0 0 1 .8.56v13.24a1 1 0 0 1-.62.92L15 21"></path>
                <path d="M15 6v15"></path>
                <path d="M12 11.5a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8Z"></path>
              </svg>
            </button>
          </div>
        ` : ""}
        <button id="new-record-button" class="new-record-button" type="button">+</button>
      </div>
    </div>
  `;
}

function renderAssetMapPanel(rows) {
  const mappableAssets = getMappableAssets(rows);
  const unmappedAssets = getUnmappedAssets(rows);
  const apiKey = state.googleMapsApiKey || getGoogleMapsApiKey();
  const stageToolbar = `
    <div class="asset-map-stage-toolbar">
      <button class="record-action-button asset-map-expand-button" type="button" data-asset-map-expand aria-label="${state.assetMapExpanded ? "Restore map size" : "Expand map"}" title="${state.assetMapExpanded ? "Restore map size" : "Expand map"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          ${state.assetMapExpanded
            ? `<path d="M9 15H5v4"></path>
               <path d="M15 9h4V5"></path>
               <path d="M19 9l-5-5"></path>
               <path d="M5 15l5 5"></path>`
            : `<path d="M15 5h4v4"></path>
               <path d="M9 19H5v-4"></path>
               <path d="M19 5l-6 6"></path>
               <path d="M5 19l6-6"></path>`}
        </svg>
      </button>
    </div>
  `;
  const mapBody = !apiKey
    ? `
      <div class="asset-map-empty">
        <strong>Google Maps API key required</strong>
        <p>Google Maps is unavailable without a valid key. The fallback map will appear automatically when available.</p>
      </div>
    `
    : !mappableAssets.length
      ? `
        <div class="asset-map-empty">
          <strong>No mapped assets yet</strong>
          <p>Add valid latitude and longitude values to asset records. Assets with coordinates set to 0, 0 are ignored.</p>
        </div>
      `
      : `
        <div class="asset-map-stage-inner">
          ${stageToolbar}
          <div id="asset-map-canvas" class="asset-map-canvas" aria-label="Asset locations map"></div>
          <div id="asset-map-loading" class="asset-map-loading" aria-live="polite">
            <div class="asset-map-loading-card">
              <span>Loading map...</span>
            </div>
          </div>
        </div>
      `;

  return `
    <div class="asset-map-shell ${state.assetMapExpanded ? "is-expanded" : ""}">
      <div class="asset-map-summary">
        <article class="asset-map-stat">
          <span>Visible assets</span>
          <strong>${rows.length}</strong>
        </article>
        <article class="asset-map-stat">
          <span>Pinned on map</span>
          <strong>${mappableAssets.length}</strong>
        </article>
        <article class="asset-map-stat">
          <span>Missing coordinates</span>
          <strong>${unmappedAssets.length}</strong>
        </article>
      </div>
      <div class="asset-map-layout">
        <section class="asset-map-stage">
          ${mapBody}
        </section>
        <aside class="asset-map-list">
          <div class="asset-map-list-head">
            <h3>Visible assets</h3>
            <p>${mappableAssets.length} with coordinates and labels</p>
          </div>
          <div class="asset-map-list-body">
            ${rows.map((asset) => `
              <article class="asset-map-card ${hasValidAssetCoordinates(asset) ? "" : "is-unmapped"}">
                <div class="asset-map-card-copy">
                  <strong>${escapeHtml(asset.name || "Untitled asset")}</strong>
                  <span>${escapeHtml(asset.type || "Unknown type")}</span>
                  <span>${escapeHtml(getAssetMapAddress(asset))}</span>
                </div>
                <div class="asset-map-card-actions">
                  <button class="record-action-button" type="button" data-asset-map-open="${escapeHtml(asset.id)}">Open</button>
                </div>
              </article>
            `).join("") || `<div class="asset-map-empty-list">No assets match the current filters.</div>`}
          </div>
        </aside>
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

  if (table.key === "assets" && state.assetsView === "map") {
    return `
      <div class="page-view page-view-records">
        ${toolbar}
        <div id="records-content" class="asset-map-records">
          ${renderAssetMapPanel(rows)}
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
        const visitUrl = getDocumentVisitUrl(record);
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
    assetsView: state.assetsView,
    assetMapExpanded: state.assetMapExpanded,
    detailTableKey: state.detailTableKey,
    detailRecordId: state.detailRecordId,
    detailTreeOpen: state.detailTreeOpen,
  };
}

function restoreView(view = null) {
  const targetView = view ?? {
    activeNav: "dashboard",
    activeTable: state.activeTable,
    assetsView: state.assetsView,
    detailTableKey: null,
    detailRecordId: null,
    detailTreeOpen: false,
  };

  state.activeNav = targetView.activeNav;
  state.activeTable = targetView.activeTable;
  state.assetsView = targetView.assetsView ?? "table";
  state.assetMapExpanded = Boolean(targetView.assetMapExpanded);
  state.detailTableKey = targetView.detailTableKey;
  state.detailRecordId = targetView.detailRecordId;
  state.detailTreeOpen = targetView.detailTreeOpen;
  syncCurrentViewUrl(true);
  renderSidebarNav();
  renderMeta();
  renderHeroPanel();
  if (state.activeNav === "assets" && state.assetsView === "map" && !state.detailRecordId) {
    globalThis.requestAnimationFrame(() => {
      globalThis.scrollTo({ top: 0, behavior: "auto" });
    });
  }
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
  const detail = getActiveDetailRecord();
  el.heroPanel.classList.toggle("hero-panel-gantt", state.activeNav === "gantt" && !detail);
  if (state.activeNav !== "assets" || state.assetsView !== "map" || detail) {
    state.assetMapRenderToken += 1;
    resetAssetMap();
  }
  if (detail && (detail.table.key === state.activeNav || state.activeNav === "gantt")) {
    el.heroPanel.innerHTML = renderRecordDetail(detail.table, detail.record);
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
          <div class="panel-head admin-panel-head">
            <div>
              <h2>Admin</h2>
              <p>Create users, passwords, and access control.</p>
            </div>
          </div>
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
  bindAssetMapActions(getFilteredAndSortedRows(table));
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

  return `
    <div class="admin-workspace">
      <div class="records-toolbar admin-workspace-head">
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
              <th>Name</th>
              <th>Password</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
        ${filteredUsers.map((user) => {
          return `
            <tr data-user-id="${escapeHtml(user.id)}">
              <td>
                <div class="admin-user-name-cell">
                  <strong>${escapeHtml(user.name)}</strong>
                  <span>${escapeHtml(user.email)}</span>
                </div>
              </td>
              <td>${escapeHtml(user.password)}</td>
              <td><span class="admin-user-role">${escapeHtml(user.role)}</span></td>
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
            <td colspan="4" class="admin-user-empty">No users found.</td>
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
      <span>Name *</span>
      <input name="user_name" type="text" value="${escapeHtml(user?.name ?? "")}" required />
    </label>
    <label class="form-field">
      <span>Email *</span>
      <input name="user_email" type="email" value="${escapeHtml(user?.email ?? "")}" required />
    </label>
    <label class="form-field">
      <span>Password *</span>
      <input name="user_password" type="text" value="${escapeHtml(user?.password ?? "")}" required />
    </label>
    <label class="form-field">
      <span>Role *</span>
      <select name="user_role" required>
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
  el.confirmCancelButton.focus();

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
  };

  ventureSelect.addEventListener("change", syncProjectOptions);
  projectSelect.addEventListener("change", syncTaskOptions);
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

function normalizeHierarchicalRecord(tableKey, record) {
  if (tableKey === "tasks") {
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
  const hierarchy = getHierarchyContext();

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

  return normalizeHierarchicalRecord(table.key, record);
}

async function saveRecord() {
  const table = tables.find((item) => item.key === state.activeTable);
  if (!table) return;

  const payload = buildRecordFromForm(table);
  let nextRecord = null;
  let syncPromise = Promise.resolve();

  if (state.modalMode === "edit" && state.editingRecordId) {
    const index = data[table.key].findIndex((item) => item.id === state.editingRecordId);
    if (index >= 0) {
      nextRecord = { ...data[table.key][index], ...payload };
      data[table.key][index] = nextRecord;
      syncPromise = syncRecordToSupabase(table.key, nextRecord);
    }
  } else {
    nextRecord = {
      id: `${table.key.slice(0, 3)}_${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...payload,
    };
    data[table.key].unshift(nextRecord);
    syncPromise = syncRecordToSupabase(table.key, nextRecord);
  }

  persistLocalTableCache();
  closeForm();
  renderAll();
  syncPromise.catch((error) => {
    console.error("Background sync failed", error);
    window.alert(`Saved locally. Supabase sync failed: ${error?.message ?? "Unknown error"}`);
  });
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
  if (state.modalMode === "edit" && state.editingUserId) {
    const index = userAccounts.findIndex((item) => item.id === state.editingUserId);
    if (index >= 0) userAccounts[index] = { ...userAccounts[index], ...payload };
  } else {
    userAccounts.unshift({
      id: `usr_${Date.now()}`,
      ...payload,
    });
  }

  closeForm();
  renderAll();
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
  await removeRecordFromSupabase(tableKey, recordId);
  data[tableKey] = data[tableKey].filter((item) => item.id !== recordId);
  persistLocalTableCache();
  renderAll();
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

  state.googleMapsApiKey = getGoogleMapsApiKey();
  applyUrlState();
  state.isMobileViewport = window.innerWidth <= MOBILE_BREAKPOINT;
  bindEvents();
  state.isAuthenticated = getStoredAuthState();
  const validation = validateUniquePasswords();
  if (!validation.valid) {
    console.error(`Duplicate passwords found for: ${validation.users.join(", ")} (${validation.password})`);
  }
  if (state.isAuthenticated) showAppShell();
  else renderLoginScreen("");
  applyLocalTableCache();
  renderAll();
  hydrateDataFromSupabase()
    .then(() => {
      applyLocalTableCache();
      renderAll();
    })
    .catch((error) => {
      console.error("Falling back to local seed data", error);
    });
}

init().catch((error) => {
  console.error("App boot failed", error);
  document.body.dataset.bootError = error?.message ?? String(error);
});
