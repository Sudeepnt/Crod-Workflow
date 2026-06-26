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
      { name: "type", label: "Type", type: "text", placeholder: "Employee, Founder..." },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "venture", label: "Venture", type: "text" },
      { name: "role_title", label: "Role title", type: "text" },
      { name: "access_level", label: "Access level", type: "select", options: ["Founder", "Partner", "Employee", "Client", "Contractor"] },
      { name: "status", label: "Status", type: "select", options: ["Active", "Inactive"] },
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
      { name: "stage", label: "Stage", type: "text" },
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
      { name: "project", label: "Project", type: "text" },
      { name: "parent_task", label: "Parent task", type: "text" },
      { name: "status", label: "Status", type: "select", options: ["Backlog", "To-Do", "In-Progress", "In-Review", "Blocked", "Done"] },
      { name: "priority", label: "Priority", type: "select", options: ["Low", "Medium", "High", "Critical"] },
      { name: "owner", label: "Owner", type: "text" },
      { name: "due_date", label: "Due date", type: "date" },
      { name: "estimate", label: "Estimate", type: "text" },
      { name: "time_logged", label: "Time logged", type: "text" },
      { name: "external_shared_with", label: "External shared with", type: "text" },
    ],
  },
  {
    key: "documents",
    title: "Documents",
    singular: "Document",
    summary: "Notes, files, and agreements",
    listColumns: ["title", "type", "status", "version", "date"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "type", label: "Type", type: "select", options: ["Note", "Report", "Agreement", "Drawing", "Photo", "Model", "Proposal", "Research", "Comms"] },
      { name: "body", label: "Body", type: "textarea" },
      { name: "file_ref", label: "File ref", type: "text" },
      { name: "version", label: "Version", type: "number" },
      { name: "status", label: "Status", type: "select", options: ["Draft", "Final", "Signed", "Superseded"] },
      { name: "links", label: "Links", type: "text", placeholder: "ventures, projects, tasks..." },
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
      { name: "type", label: "Type", type: "select", options: ["Building", "Land", "Unit", "Theatre", "Warehouse", "Mixed"] },
      { name: "address", label: "Address", type: "textarea" },
      { name: "lat", label: "Latitude", type: "text" },
      { name: "lng", label: "Longitude", type: "text" },
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
      { name: "type", label: "Type", type: "select", options: ["Meeting", "FieldVisit", "Call", "Inspection", "Other"] },
      { name: "start", label: "Start", type: "datetime-local" },
      { name: "end", label: "End", type: "datetime-local" },
      { name: "participants", label: "Participants", type: "text", placeholder: "Comma separated people" },
      { name: "attendees", label: "Attendees", type: "text", placeholder: "Project / task / asset" },
      { name: "location", label: "Location", type: "text" },
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
      { name: "direction", label: "Direction", type: "select", options: ["Receivable", "Payable"] },
      { name: "amount", label: "Amount", type: "text" },
      { name: "currency", label: "Currency", type: "text", value: "INR" },
      { name: "status", label: "Status", type: "select", options: ["Draft", "Raised", "Partly-Paid", "Paid", "Overdue", "Written-Off"] },
      { name: "venture", label: "Venture", type: "text" },
      { name: "counterparty", label: "Counterparty", type: "text" },
      { name: "project_asset", label: "Project / asset", type: "text" },
      { name: "due_date", label: "Due date", type: "date" },
      { name: "documents", label: "Documents", type: "text", placeholder: "Linked docs" },
    ],
  },
];

const data = {
  ventures: [
    { id: "ven_1", name: "ATIT", date: "2026-06-02", type: "Self", status: "Active", verticals: ["Capital", "Operations"], entity_form: "PvtLtd", primary_contact: "Dev Malik", reg_no: "U70100KA2020PTC441210", tags: ["core", "hq"] },
    { id: "ven_2", name: "Cedar Ridge SPV", date: "2026-06-05", type: "SPV", status: "Active", verticals: ["Real Estate"], entity_form: "LLP", primary_contact: "Ishita Rao", reg_no: "AAT-8821", tags: ["fitout"] },
    { id: "ven_3", name: "Meridian Foods Client", date: "2026-06-08", type: "Client", status: "Active", verticals: ["Leasing", "Logistics"], entity_form: "PvtLtd", primary_contact: "Kavya Menon", reg_no: "U55101MH2018PTC210991", tags: ["retail"] },
    { id: "ven_4", name: "Bluepeak Works", date: "2026-06-12", type: "Vendor", status: "Prospect", verticals: ["Operations"], entity_form: "Proprietorship", primary_contact: "Farhan Ali", reg_no: "GST29BPW7211Q1Z2", tags: ["field"] },
  ],
  people: [
    { id: "peo_1", name: "Dev Malik", type: ["Founder"], email: "dev@atit.com", phone: "+91-90000-11001", venture: "ATIT", role_title: "Founder", access_level: "Founder", status: "Active" },
    { id: "peo_2", name: "Ishita Rao", type: ["Employee"], email: "ishita@cedarridge.com", phone: "+91-90000-11002", venture: "Cedar Ridge SPV", role_title: "Site Lead", access_level: "Employee", status: "Active" },
    { id: "peo_3", name: "Kavya Menon", type: ["Partner"], email: "kavya@meridian.com", phone: "+91-90000-11003", venture: "Meridian Foods Client", role_title: "Expansion Partner", access_level: "Partner", status: "Active" },
    { id: "peo_4", name: "Farhan Ali", type: ["Contractor"], email: "farhan@bluepeak.com", phone: "+91-90000-11004", venture: "Bluepeak Works", role_title: "Mobilisation Lead", access_level: "Contractor", status: "Active" },
    { id: "peo_5", name: "Meera Sethi", type: ["Employee"], email: "meera@atit.com", phone: "+91-90000-11005", venture: "ATIT", role_title: "Operations Manager", access_level: "Employee", status: "Active" },
    { id: "peo_6", name: "Nikhil Bansal", type: ["Client"], email: "nikhil@meridian.com", phone: "+91-90000-11006", venture: "Meridian Foods Client", role_title: "Portfolio Head", access_level: "Client", status: "Active" },
  ],
  projects: [
    { id: "prj_1", name: "Cedar Ridge Fitout", venture: "Cedar Ridge SPV", vertical: "Real Estate", type: "Development", stage: "Execution", status: "Active", lead: "Ishita Rao", target_date: "2026-07-19", client_shareable: true },
    { id: "prj_2", name: "Meridian Rollout", venture: "Meridian Foods Client", vertical: "Logistics", type: "Internal", stage: "Scoping", status: "Active", lead: "Dev Malik", target_date: "2026-07-23", client_shareable: false },
    { id: "prj_3", name: "ATIT Control Desk", venture: "ATIT", vertical: "Operations", type: "Internal", stage: "Delivery", status: "Blocked", lead: "Meera Sethi", target_date: "2026-07-31", client_shareable: false },
    { id: "prj_4", name: "Bluepeak Mobilisation", venture: "Bluepeak Works", vertical: "Operations", type: "Internal", stage: "Execution", status: "Active", lead: "Farhan Ali", target_date: "2026-07-21", client_shareable: false },
    { id: "prj_5", name: "Meridian Renewal Window", venture: "Meridian Foods Client", vertical: "Leasing", type: "Leasing", stage: "Execution", status: "Active", lead: "Kavya Menon", target_date: "2026-07-28", client_shareable: true },
  ],
  tasks: [
    { id: "tsk_1", title: "Mark handover punchlist", project: "Cedar Ridge Fitout", parent_task: null, status: "In-Progress", priority: "High", owner: "Meera Sethi", external_shared_with: "Ishita Rao", due_date: "2026-06-29" },
    { id: "tsk_2", title: "Collect landlord approvals", project: "Cedar Ridge Fitout", parent_task: null, status: "To-Do", priority: "Critical", owner: "Dev Malik", external_shared_with: "Ishita Rao", due_date: "2026-06-30" },
    { id: "tsk_3", title: "Draft rollout brief", project: "Meridian Rollout", parent_task: null, status: "Blocked", priority: "Medium", owner: "Meera Sethi", external_shared_with: "Kavya Menon", due_date: "2026-07-01" },
    { id: "tsk_4", title: "Open vendor checklist", project: "Bluepeak Mobilisation", parent_task: null, status: "Backlog", priority: "Low", owner: "Dev Malik", external_shared_with: "Farhan Ali", due_date: "2026-07-03" },
    { id: "tsk_5", title: "Review exit language", project: "Cedar Ridge Fitout", parent_task: "Mark handover punchlist", status: "In-Review", priority: "High", owner: "Meera Sethi", external_shared_with: "Ishita Rao", due_date: "2026-07-02" },
    { id: "tsk_6", title: "Confirm renewal budget", project: "Meridian Renewal Window", parent_task: null, status: "To-Do", priority: "Medium", owner: "Dev Malik", external_shared_with: "Nikhil Bansal", due_date: "2026-07-04" },
    { id: "tsk_7", title: "Share outlet count", project: "Meridian Renewal Window", parent_task: "Confirm renewal budget", status: "Backlog", priority: "Low", owner: "Meera Sethi", external_shared_with: "Kavya Menon", due_date: "2026-07-05" },
  ],
  documents: [
    { id: "doc_1", title: "Fitout Handover Log", date: "2026-06-15", type: "Agreement", status: "Draft", version: 3, links: ["Cedar Ridge Fitout", "Cedar Ridge SPV", "Ishita Rao", "Farhan Ali"] },
    { id: "doc_2", title: "Rollout Decision Note", date: "2026-06-19", type: "Note", status: "Final", version: 1, links: ["Meridian Rollout", "Meridian Foods Client", "Dev Malik", "Nikhil Bansal"] },
    { id: "doc_3", title: "Control Desk Weekly Sheet", date: "2026-06-23", type: "Report", status: "Draft", version: 2, links: ["ATIT Control Desk", "ATIT", "Meera Sethi"] },
    { id: "doc_4", title: "Bluepeak Onboarding File", date: "2026-06-24", type: "Report", status: "Draft", version: 1, links: ["Bluepeak Mobilisation", "Bluepeak Works", "Farhan Ali"] },
    { id: "doc_5", title: "Renewal Budget Model", date: "2026-06-26", type: "Model", status: "Draft", version: 1, links: ["Meridian Renewal Window", "Meridian Foods Client", "Nikhil Bansal", "Kavya Menon"] },
  ],
  events: [
    { id: "evt_1", title: "Snag walk", date: "2026-06-25", type: "FieldVisit", start: "2026-06-25 11:00", duration: "35m", project: "Cedar Ridge Fitout", task: "Mark handover punchlist", participants: ["Ishita Rao", "Farhan Ali"] },
    { id: "evt_2", title: "Approval call", date: "2026-06-25", type: "Call", start: "2026-06-25 16:00", duration: "25m", project: "Cedar Ridge Fitout", task: "Collect landlord approvals", participants: ["Dev Malik", "Ishita Rao"] },
    { id: "evt_3", title: "Rollout review huddle", date: "2026-06-26", type: "Meeting", start: "2026-06-26 09:45", duration: "30m", project: "Meridian Rollout", task: "Draft rollout brief", participants: ["Meera Sethi", "Nikhil Bansal", "Dev Malik"] },
    { id: "evt_4", title: "Vendor kickoff meet", date: "2026-06-27", type: "Meeting", start: "2026-06-27 14:30", duration: "40m", project: "Bluepeak Mobilisation", task: "Open vendor checklist", participants: ["Farhan Ali", "Meera Sethi"] },
    { id: "evt_5", title: "Renewal number check-in", date: "2026-06-28", type: "Meeting", start: "2026-06-28 10:30", duration: "30m", project: "Meridian Renewal Window", task: "Confirm renewal budget", participants: ["Kavya Menon", "Nikhil Bansal"] },
  ],
  assets: [
    { id: "ast_1", name: "Cedar Ridge Block A", date: "2026-05-30", type: "Building", status: "Operational", owner_ventures: ["Cedar Ridge SPV"] },
    { id: "ast_2", name: "Meridian Outlet 12", date: "2026-06-10", type: "Unit", status: "Under-Development", owner_ventures: ["Meridian Foods Client"] },
    { id: "ast_3", name: "Bluepeak Yard Plot", date: "2026-06-16", type: "Land", status: "Under-Acquisition", owner_ventures: ["Bluepeak Works"] },
  ],
  transactions: [
    { id: "txn_1", reference: "RCV-311", direction: "Receivable", amount: "₹9,80,000", due_date: "2026-07-06", status: "Raised", venture: "Meridian Foods Client", documents: ["Renewal Budget Model"] },
    { id: "txn_2", reference: "PAY-088", direction: "Payable", amount: "₹1,75,000", due_date: "2026-07-10", status: "Draft", venture: "ATIT", documents: ["Control Desk Weekly Sheet"] },
    { id: "txn_3", reference: "ADV-204", direction: "Payable", amount: "₹3,10,000", due_date: "2026-07-02", status: "Raised", venture: "Cedar Ridge SPV", documents: ["Fitout Handover Log"] },
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
    password: "atit-admin-01",
    role: "Admin",
    status: "Active",
    venture_scope: "All ventures",
    table_access: tables.map((table) => table.key),
  },
  {
    id: "usr_2",
    name: "Dev Malik",
    email: "dev@atit.com",
    password: "atit-founder-01",
    role: "Founder",
    status: "Active",
    venture_scope: "ATIT",
    table_access: ["ventures", "people", "projects", "tasks", "documents", "events", "transactions"],
  },
  {
    id: "usr_3",
    name: "Meera Sethi",
    email: "meera@atit.com",
    password: "atit-ops-01",
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

const state = {
  role: "Founder",
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
  detailHistory: [],
  recordFilters: {},
};

const el = {};
let confirmResolve = null;

const arrayFields = new Set(["verticals", "tags"]);

const relationFields = {
  venture: { table: "ventures", labelField: "name" },
  asset: { table: "assets", labelField: "name" },
  lead: { table: "people", labelField: "name" },
  primary_contact: { table: "people", labelField: "name" },
  project: { table: "projects", labelField: "name" },
  parent_task: { table: "tasks", labelField: "title" },
  owner: { table: "people", labelField: "name" },
  owner_ventures: { table: "ventures", labelField: "name", multiple: true },
  participants: { table: "people", labelField: "name", multiple: true },
  attendees: { tables: ["ventures", "projects", "tasks", "assets"], multiple: true },
  links: { tables: ["ventures", "people", "projects", "tasks", "documents", "assets", "events", "transactions"], multiple: true },
  counterparty: { table: "ventures", labelField: "name" },
  project_asset: { tables: ["projects", "assets"] },
  documents: { table: "documents", labelField: "title", multiple: true },
};

const sidebarItems = [
  { key: "dashboard", label: "Dashboard", kind: "dashboard", count: null },
  ...tables.map((table) => ({ key: table.key, label: table.title, kind: "table" })),
  { key: "admin", label: "Admin", kind: "admin", count: null },
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

function getRecordLabel(tableKey, row) {
  if (!row) return "";
  return row.name || row.title || row.reference || row.id || "";
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

function getRecordAddedAt(row) {
  return row?.createdAt ? new Date(row.createdAt).getTime() : 0;
}

function getRecordFilterState(tableKey) {
  if (!state.recordFilters[tableKey]) {
    state.recordFilters[tableKey] = {
      venture: "all",
      project: "all",
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

    return true;
  });

  rows = rows.slice().sort((left, right) => {
    const diff = getRecordAddedAt(right) - getRecordAddedAt(left);
    return filters.order === "oldest" ? -diff : diff;
  });

  return rows;
}

function getRelationConfig(fieldName) {
  return relationFields[fieldName] ?? null;
}

function getRelationOptions(fieldName, currentTableKey, record = null) {
  const relation = getRelationConfig(fieldName);
  if (!relation) return [];

  const sourceTables = relation.tables ?? [relation.table];
  return sourceTables.flatMap((tableKey) => {
    const table = tables.find((item) => item.key === tableKey);
    const rows = data[tableKey] ?? [];
    return rows
      .filter((row) => !(fieldName === "parent_task" && currentTableKey === "tasks" && row.id === record?.id))
      .map((row) => {
        const value = relation.labelField ? row[relation.labelField] : getRecordLabel(tableKey, row);
        const display = sourceTables.length > 1 && table ? `${value} (${table.title})` : value;
        return {
          value: String(value ?? ""),
          label: String(display ?? ""),
        };
      })
      .filter((option) => option.value);
  });
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

function getRecordReferenceLabel(tableKey, row) {
  const table = getTableByKey(tableKey);
  const primary = row.name || row.title || row.reference || row.id;
  const subtitle = table?.title ? table.title : tableKey;
  return `${primary} · ${subtitle}`;
}

function getRecordConnections(tableKey, record) {
  const connections = [];
  const row = record ?? {};
  const rowLabel = getRecordLabel(tableKey, row);
  const getConnectionLabel = (targetKey, fallback = "") => getTableByKey(targetKey)?.title ?? titleCaseKey(fallback || targetKey);
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
      row.venture ? [{
        label: row.venture,
        tableKey: "ventures",
        id: data.ventures.find((item) => item.name === row.venture)?.id ?? null,
        row: data.ventures.find((item) => item.name === row.venture) ?? null,
      }].filter((item) => item.row) : [],
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
      getRowsByFieldValue("tasks", "owner", rowLabel).map((item) => ({
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
    const peopleItems = [row.owner, row.external_shared_with]
      .filter(Boolean)
      .map((name) => {
        const found = data.people.find((item) => item.name === name) ?? null;
        if (!found) return null;
        return {
          label: name,
          tableKey: "people",
          id: found.id,
          row: found,
        };
      })
      .filter((item, index, array) => item && array.findIndex((candidate) => candidate.id === item.id) === index);

    addConnection(
      "projects",
      row.project ? [{
        label: row.project,
        tableKey: "projects",
        id: data.projects.find((item) => item.name === row.project)?.id ?? null,
        row: data.projects.find((item) => item.name === row.project) ?? null,
      }].filter((item) => item.row) : [],
      "projects",
      "context",
    );
    addConnection(
      "people",
      peopleItems,
      "people",
      "context",
    );
  }

  return normalizeConnections(connections);
}

function getTreeNodeKey(tableKey, record) {
  return `${tableKey}:${record?.id ?? record?.name ?? record?.title ?? ""}`;
}

function shouldExpandTreeItem(rootTableKey, parentTableKey, depth, childTableKey) {
  if (rootTableKey !== "ventures") return false;
  if (depth === 0) return childTableKey === "projects";
  if (depth === 1 && parentTableKey === "projects") {
    return ["tasks", "events", "documents"].includes(childTableKey);
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

function buildConnectionTree(tableKey, record, depth = 0, visited = new Set(), rootTableKey = tableKey) {
  const nodeKey = getTreeNodeKey(tableKey, record);
  const nextVisited = new Set(visited);
  nextVisited.add(nodeKey);

  if (depth >= 3) {
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
            label: getRecordLabel(item.tableKey, item.row),
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

  const attrs = node.isGroup
    ? ""
    : `type="button" data-tree-open="${escapeHtml(node.tableKey)}" data-tree-record="${escapeHtml(node.id ?? "")}"`;

  const iconMarkup = !node.isGroup && node.iconKey
    ? `<span class="connection-node-icon" aria-hidden="true">${getTableIcon(node.iconKey)}</span>`
    : "";

  return `
    <li>
      ${node.isGroup
        ? `<div class="${nodeClass}"><span>${escapeHtml(node.label)}</span></div>`
        : `<button class="${nodeClass}" ${attrs}>${iconMarkup}<span>${escapeHtml(node.label)}</span></button>`}
      ${node.children?.length ? `<ul>${node.children.map((child) => renderConnectionTreeNode(child)).join("")}</ul>` : ""}
    </li>
  `;
}

function renderDetailTree(tableKey, record) {
  const root = buildConnectionTree(tableKey, record);

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
  const root = buildConnectionTree(tableKey, record);
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
  const rows = table.fields.map((field) => {
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

  return `
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
              <div class="detail-eyebrow">${escapeHtml(table.title)}</div>
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
      <section class="detail-linked">
        <div class="detail-linked-head">
          <h3>Linked records - auto-assembled</h3>
        </div>
        ${state.detailTreeOpen ? `<div class="detail-tree">${renderDetailTree(table.key, record)}</div>` : `
          <div class="detail-linked-groups">
            ${connections.map((connection) => `
              <div class="detail-linked-group">
                <div class="detail-linked-group-head">${escapeHtml(connection.label)} (${connection.items.length})</div>
                <div class="detail-linked-list">
                  ${connection.items.map((item, index) => `
                    <button class="linked-record-row" type="button" data-tree-open="${escapeHtml(item.tableKey)}" data-tree-record="${escapeHtml(item.id ?? "")}">
                      <span class="linked-record-serial">${renderSerialNumber(index + 1)}</span>
                      <span class="linked-record-label">${escapeHtml(item.label)}</span>
                      <span class="linked-record-arrow">›</span>
                    </button>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        `}
      </section>
    </div>
  `;
}

function allRecords() {
  return Object.entries(data)
    .filter(([, value]) => Array.isArray(value))
    .flatMap(([table, rows]) => rows.map((row) => ({ table, ...row })));
}

function countLinks() {
  const fields = ["venture", "project", "task", "links", "participants", "owner_ventures"];
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
  return;
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
  el.layout.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);
  el.sidebarToggle.innerHTML = getSidebarToggleIcon();
  el.sidebarToggle.setAttribute("aria-expanded", String(!state.sidebarCollapsed));
  el.sidebarToggle.setAttribute("aria-label", state.sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar");
}

function renderSidebarNav() {
  el.sidebarNav.innerHTML = sidebarItems.map((item) => {
    const count = item.kind === "table" ? `<span class="sidebar-nav-count">${data[item.key].length}</span>` : "";
    const active = state.activeNav === item.key ? "active" : "";
    const dividerClass = item.key === "transactions" ? " sidebar-nav-item-divider" : "";
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
        renderHeroPanel();
      }
      if (sidebarKind === "dashboard") {
        renderHeroPanel();
      }
      if (sidebarKind === "admin") {
        renderHeroPanel();
      }
    });
  });
}

function renderBoard() {
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

function getTodayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
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
        { label: "Lead", value: project.lead || "Unassigned" },
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
        { label: "Owner", value: task.owner || "Unassigned" },
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
        { label: "Task owner", value: linked.taskOwner || "Unassigned" },
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
          <p>Projects, tasks, and events with the dates and linked context that need review.</p>
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
            <section class="attention-group">
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

function formatCell(tableKey, column, row) {
  const value = row[column];
  if (value == null || value === "") return "—";
  if (Array.isArray(value)) return formatList(value);
  if (tableKey === "people" && column === "type") return formatList(value);
  return String(value);
}

function renderCellMarkup(tableKey, column, row) {
  const value = formatCell(tableKey, column, row);
  if ((tableKey === "tasks" || tableKey === "projects") && column === "status" && value !== "—") {
    return renderTaskStatusBadge(value, "records");
  }
  if (tableKey === "events" && column === "type" && value !== "—") {
    return renderEventTypeBadge(value, "records");
  }
  return escapeHtml(value);
}

function renderSerialNumber(value) {
  return `<span class="record-serial">${escapeHtml(String(value))}</span>`;
}

function renderRecordsBody(table, rows) {
  return rows.map((row, index) => `
    <tr data-open-detail="${escapeHtml(table.key)}" data-record-id="${escapeHtml(row.id)}">
      <td class="records-serial-cell">${renderSerialNumber(index + 1)}</td>
      ${table.listColumns.map((column) => `<td>${renderCellMarkup(table.key, column, row)}</td>`).join("")}
      <td class="records-actions-cell">
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

function getDetailIconTone(tableKey, record) {
  if (tableKey !== "ventures") return "";
  return getVentureTone(record?.name || "");
}

function renderPeopleRecords(rows) {
  if (!rows.length) return `<div class="people-empty">No records</div>`;

  const serialById = new Map(rows.map((row, index) => [row.id, index + 1]));
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
        ${people.map((row) => `
          <article class="person-card ${getVentureTone(venture)}" data-open-detail="people" data-record-id="${escapeHtml(row.id)}">
            <div class="person-card-main">
              <div class="person-card-title-row">
                ${renderSerialNumber(serialById.get(row.id) ?? "—")}
                <strong>${escapeHtml(row.name || "Unnamed")}</strong>
              </div>
              <div class="person-card-meta">
                <span>${escapeHtml(formatCell("people", "type", row))}</span>
                <span>${escapeHtml(row.access_level || "No access")}</span>
                <span>${escapeHtml(row.status || "No status")}</span>
              </div>
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

function updateRecordsTable(table) {
  const rows = getFilteredAndSortedRows(table);
  el.recordsCount.textContent = `${rows.length} records`;
  if (table.key === "people") {
    el.recordsContent.innerHTML = renderPeopleRecords(rows);
  } else {
    el.recordsTableBody.innerHTML = renderRecordsBody(table, rows);
  }
  bindRecordRowActions(table);
  bindRecordOpenActions(table);
}

function renderRecordsToolbar(table, rows, filters, ventureOptions, projectOptions) {
  const showVentureFilter = ventureOptions.length > 0;
  const showProjectFilter = projectOptions.length > 0;
  const searchPlaceholder = `Search ${escapeHtml(table.title.toLowerCase())}...`;

  return `
    <div class="records-toolbar">
      <div class="records-toolbar-title">
        <h2>${escapeHtml(table.title)}</h2>
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
          <label class="records-filter">
            <select id="records-order-filter">
              <option value="newest" ${filters.order === "newest" ? "selected" : ""}>Newest first</option>
              <option value="oldest" ${filters.order === "oldest" ? "selected" : ""}>Oldest first</option>
            </select>
          </label>
        </div>
        <button id="new-record-button" class="new-record-button" type="button">+ Add</button>
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

  if (table.key === "people") {
    return `
      ${toolbar}
      <div id="records-content" class="people-records">
        ${renderPeopleRecords(rows)}
      </div>
    `;
  }

  const headers = `<th class="records-serial-head">S. No.</th>${table.listColumns.map((column) => `<th>${escapeHtml(titleCaseKey(column))}</th>`).join("")}<th>Actions</th>`;

  return `
    ${toolbar}
    <div class="records-table-wrap">
      <table class="records-table">
        <thead>
          <tr>${headers}</tr>
        </thead>
        <tbody id="records-table-body">
          ${renderRecordsBody(table, rows)}
        </tbody>
      </table>
    </div>
  `;
}

function bindRecordRowActions(table) {
  el.heroPanel.querySelectorAll("[data-record-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const { recordAction, recordId } = button.dataset;
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
  renderSidebarNav();
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
  state.activeNav = tableKey;
  state.activeTable = tableKey;
  state.detailTableKey = tableKey;
  state.detailRecordId = recordId;
  state.detailTreeOpen = false;
  renderSidebarNav();
  renderHeroPanel();
}

function bindRecordOpenActions(table) {
  el.heroPanel.querySelectorAll("[data-open-detail]").forEach((item) => {
    item.addEventListener("click", () => {
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
  if (detail && detail.table.key === state.activeNav) {
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
      <div class="hero-minimal">
        <div class="hero-head">
          <div class="hero-kicker">create</div>
        </div>
        <div id="board" class="board" aria-label="Create tables"></div>
        ${renderDashboardAttention()}
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
      <section class="panel admin-panel">
        <div class="panel-head">
          <div>
            <h2>Admin</h2>
            <p>Create users, passwords, and access control.</p>
          </div>
        </div>
        ${renderAdminWorkspace()}
      </section>
    `;
    bindAdminWorkspaceEvents();
    return;
  }

  const table = tables.find((item) => item.key === state.activeNav) ?? tables[0];
  el.heroPanel.innerHTML = renderRecordsTable(table);
  el.recordsSearch = document.getElementById("records-search");
  el.recordsCount = document.getElementById("records-count");
  el.recordsContent = document.getElementById("records-content");
  el.recordsTableBody = document.getElementById("records-table-body");
  el.newRecordButton = document.getElementById("new-record-button");
  el.recordsSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    updateRecordsTable(table);
  });
  el.recordsVentureFilter = document.getElementById("records-venture-filter");
  el.recordsProjectFilter = document.getElementById("records-project-filter");
  el.recordsOrderFilter = document.getElementById("records-order-filter");
  if (el.recordsVentureFilter) {
    el.recordsVentureFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).venture = event.target.value;
      updateRecordsTable(table);
    });
  }
  if (el.recordsProjectFilter) {
    el.recordsProjectFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).project = event.target.value;
      updateRecordsTable(table);
    });
  }
  if (el.recordsOrderFilter) {
    el.recordsOrderFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).order = event.target.value;
      updateRecordsTable(table);
    });
  }
  el.newRecordButton.addEventListener("click", () => openForm(table.key));
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
  return `
    <div class="admin-workspace">
      <div class="admin-workspace-head">
        <button class="new-record-button" type="button" id="add-user-button">+ Add user</button>
      </div>
      <div class="admin-user-list">
        ${userAccounts.map((user) => `
          <article class="admin-user-card" data-user-id="${escapeHtml(user.id)}">
            <div class="admin-user-main">
              <div class="admin-user-title-row">
                <strong>${escapeHtml(user.name)}</strong>
                <span class="admin-user-role">${escapeHtml(user.role)}</span>
              </div>
              <div class="admin-user-meta">
                <span>${escapeHtml(user.email)}</span>
                <span>${escapeHtml(user.status)}</span>
                <span>${escapeHtml(user.venture_scope || "All ventures")}</span>
              </div>
              <div class="admin-user-password">Password: ${escapeHtml(user.password)}</div>
              <div class="admin-user-access">
                ${user.table_access.map((tableKey) => `<span class="admin-access-chip">${escapeHtml(getTableByKey(tableKey)?.title ?? tableKey)}</span>`).join("")}
              </div>
            </div>
            <div class="admin-user-actions">
              <button class="record-action-button" type="button" data-user-action="edit" data-user-id="${escapeHtml(user.id)}">Edit</button>
              <button class="record-action-button" type="button" data-user-action="delete" data-user-id="${escapeHtml(user.id)}">Delete</button>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function bindAdminWorkspaceEvents() {
  document.getElementById("add-user-button")?.addEventListener("click", () => {
    openAdminUserForm();
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
  if (record.due_date) parts.push(`Due ${record.due_date}`);
  if (record.direction) parts.push(`Direction ${record.direction}`);
  return parts.join(" · ") || "Linked record";
}

function getFieldDisplayValue(field, record) {
  const rawValue = record?.[field.name];
  if (rawValue == null) return "";
  if (Array.isArray(rawValue)) return formatList(rawValue);
  return String(rawValue);
}

function renderOwnershipRow(entry = {}, index = 0, options = []) {
  const label = entry.venture ?? entry.name ?? entry.label ?? "";
  const stake = entry.stake ?? "";
  return `
    <div class="ownership-row" data-ownership-row>
      <label class="ownership-field">
        <span>Venture</span>
        <select name="owner_ventures_venture_${index}">
          <option value="">Select venture</option>
          ${options.map((option) => `<option value="${escapeHtml(option.value)}" ${label === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
      <label class="ownership-field stake-field">
        <span>Stake %</span>
        <input name="owner_ventures_stake_${index}" type="number" min="0" step="0.01" value="${escapeHtml(stake)}" placeholder="0" />
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

function renderField(field, record = null, currentTableKey = "") {
  const required = field.required ? "required" : "";
  const fieldValue = record ? getFieldDisplayValue(field, record) : field.value ?? "";
  const valueAttr = fieldValue ? `value="${escapeHtml(fieldValue)}"` : "";
  const placeholder = field.placeholder ? `placeholder="${escapeHtml(field.placeholder)}"` : "";
  const label = `${escapeHtml(field.label)}${field.required ? " *" : ""}`;
  const relation = getRelationConfig(field.name);
  const relationOptions = relation ? getRelationOptions(field.name, currentTableKey, record) : [];
  const selectedValues = Array.isArray(record?.[field.name])
    ? record[field.name].map((value) => String(value))
    : fieldValue
      ? [String(fieldValue)]
      : [];

  if (currentTableKey === "assets" && field.name === "owner_ventures") {
    return renderOwnershipRepeater(record, currentTableKey);
  }

  if (relation) {
    const multiple = relation.multiple ? "multiple" : "";
    const multipleClass = relation.multiple ? " relation-select" : "";
    const hint = relation.multiple ? `<small class="form-hint">Select one or more existing records.</small>` : "";
    return `
      <label class="form-field">
        <span>${label}</span>
        <select class="${multipleClass.trim()}" name="${escapeHtml(field.name)}" ${required} ${multiple}>
          ${relation.multiple ? "" : `<option value="">Select</option>`}
          ${relationOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${selectedValues.includes(option.value) ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
        ${hint}
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
    return `
      <label class="form-field">
        <span>${label}</span>
        <select name="${escapeHtml(field.name)}" ${required}>
          <option value="">Select</option>
          ${field.options.map((option) => `<option value="${escapeHtml(option)}" ${fieldValue === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
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
      <input name="${escapeHtml(field.name)}" type="${escapeHtml(field.type)}" ${required} ${valueAttr} ${placeholder} />
    </label>
  `;
}

function renderAdminUserForm(user = null) {
  const ventureOptions = ["All ventures", ...data.ventures.map((venture) => venture.name)];
  const selectedTables = user?.table_access ?? [];

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
        ${accessRoles.map((roleKey) => `<option value="${escapeHtml(roleKey)}" ${user?.role === roleKey ? "selected" : ""}>${escapeHtml(roleKey)}</option>`).join("")}
      </select>
    </label>
    <label class="form-field">
      <span>Status *</span>
      <select name="user_status" required>
        ${["Active", "Suspended"].map((status) => `<option value="${status}" ${user?.status === status ? "selected" : ""}>${status}</option>`).join("")}
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
  state.activeTable = key;
  state.modalEntity = "table";
  state.modalMode = record ? "edit" : "create";
  state.editingRecordId = record?.id ?? null;
  state.editingUserId = null;
  el.modalTitle.textContent = record ? "Edit" : "Add";
  el.modalSubtitle.textContent = `${table.fields.length} fields`;
  el.form.innerHTML = table.fields.map((field) => renderField(field, record, key)).join("");
  el.saveButton.textContent = record ? "Save changes" : "Create";
  el.modal.classList.add("open");
  syncBodyModalState();
  bindOwnershipRepeater(key);
}

function openAdminUserForm(userId = null) {
  const user = userId ? userAccounts.find((item) => item.id === userId) ?? null : null;
  state.modalEntity = "user";
  state.modalMode = user ? "edit" : "create";
  state.editingUserId = user?.id ?? null;
  state.editingRecordId = null;
  el.modalTitle.textContent = user ? "Edit user" : "Add user";
  el.modalSubtitle.textContent = "Password and access control";
  el.form.innerHTML = renderAdminUserForm(user);
  el.saveButton.textContent = user ? "Save user" : "Create user";
  el.modal.classList.add("open");
  syncBodyModalState();
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

  const buildRow = (entry = {}) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderOwnershipRow(entry, rowIndex, ventureOptions).trim();
    rowIndex += 1;
    const row = wrapper.firstElementChild;
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

    if (table.key === "assets" && field.name === "owner_ventures") {
      const rows = Array.from(el.formElement.querySelectorAll("[data-ownership-row]"));
      record[field.name] = rows
        .map((row) => {
          const venture = row.querySelector(`select[name^="owner_ventures_venture_"]`)?.value?.trim() ?? "";
          const stake = row.querySelector(`input[name^="owner_ventures_stake_"]`)?.value?.trim() ?? "";
          if (!venture) return null;
          return { venture, stake };
        })
        .filter(Boolean);
      return;
    }

    const relation = getRelationConfig(field.name);
    if (relation?.multiple) {
      record[field.name] = formData.getAll(field.name).map((value) => String(value).trim()).filter(Boolean);
      return;
    }

    const rawValue = String(formData.get(field.name) ?? "").trim();
    if (!rawValue) {
      record[field.name] = "";
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

  return record;
}

function saveRecord() {
  const table = tables.find((item) => item.key === state.activeTable);
  if (!table) return;

  const payload = buildRecordFromForm(table);

  if (state.modalMode === "edit" && state.editingRecordId) {
    const index = data[table.key].findIndex((item) => item.id === state.editingRecordId);
    if (index >= 0) {
      data[table.key][index] = { ...data[table.key][index], ...payload };
    }
  } else {
    data[table.key].unshift({
      id: `${table.key.slice(0, 3)}_${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...payload,
    });
  }

  closeForm();
  renderAll();
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
  data[tableKey] = data[tableKey].filter((item) => item.id !== recordId);
  renderAll();
  return true;
}

function bindEvents() {
  el.homeButton.addEventListener("click", () => {
    state.activeNav = "dashboard";
    state.search = "";
    state.detailTableKey = null;
    state.detailRecordId = null;
    state.detailTreeOpen = false;
    clearDetailHistory();
    renderSidebarNav();
    renderHeroPanel();
  });

  el.sidebarToggle.addEventListener("click", () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    applySidebarState();
  });

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

  el.modal.addEventListener("click", (event) => {
    if (event.target === el.modal) closeForm();
  });

  el.confirmModal.addEventListener("click", (event) => {
    if (event.target === el.confirmModal) closeDeleteConfirm(false);
  });

  el.closeButton.addEventListener("click", closeForm);
  el.confirmCancelButton.addEventListener("click", () => closeDeleteConfirm(false));
  el.confirmDeleteButton.addEventListener("click", () => closeDeleteConfirm(true));
  el.formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    if (state.modalEntity === "user") saveAdminUser();
    else saveRecord();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (el.confirmModal.classList.contains("open")) {
      closeDeleteConfirm(false);
      return;
    }
    closeForm();
  });
}

function renderAll() {
  renderMeta();
  applySidebarState();
  renderSidebarNav();
  renderHeroPanel();
  renderSelectors();
  renderDashboard();
  renderSearch();
}

function init() {
  el.layout = document.querySelector(".layout");
  el.sidebarNav = document.getElementById("sidebar-nav");
  el.homeButton = document.getElementById("home-button");
  el.sidebarToggle = document.getElementById("sidebar-toggle");
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

  bindEvents();
  renderAll();
}

init();
