import { getAdmin } from "./auth";
import { listAllLeads } from "../leads/store";
import { isLeadStatus, isLeadType, leadStatusLabels, leadTypeLabels, pageLabel } from "../leads/types";
import { fieldLabel, formatDateTime, formatValue } from "../leads/format";

/**
 * Spreadsheet programs run text that starts with = + - @ as a formula. Form answers come from the public, so those
 * cells are made harmless with a leading apostrophe.
 */
function cell(value: string) {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${safe.replace(/"/g, '""')}"`;
}

/** Download of the leads (all of them, or the ones matching the dashboard's current filters) as a CSV file. */
export async function GET(request: Request) {
  if (!(await getAdmin())) return new Response("Please log in first.", { status: 401 });

  const params = new URL(request.url).searchParams;
  const type = params.get("type");
  const status = params.get("status");

  let leads;
  try {
    leads = await listAllLeads({
      type: isLeadType(type) ? type : undefined,
      status: isLeadStatus(status) ? status : undefined,
      q: params.get("q")?.slice(0, 100) || undefined,
    });
  } catch {
    return new Response("The leads could not be loaded.", { status: 503 });
  }

  const header = ["Received (Oklahoma time)", "Form", "Sent from", "Name", "Email", "Phone", "Status", "Private note", "Everything they sent"];
  const rows = leads.map((lead) =>
    [
      formatDateTime(lead.createdAt),
      leadTypeLabels[lead.type],
      pageLabel(lead.page),
      lead.name,
      lead.email,
      lead.phone,
      leadStatusLabels[lead.status],
      lead.note,
      Object.entries(lead.fields)
        .map(([key, value]) => `${fieldLabel(key)}: ${formatValue(value)}`)
        .join("\n"),
    ]
      .map(cell)
      .join(","),
  );

  const stamp = new Date().toISOString().slice(0, 10);
  return new Response("﻿" + [header.map(cell).join(","), ...rows].join("\r\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="open-arms-leads-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
