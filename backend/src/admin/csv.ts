import { leadStatusLabels, leadTypeLabels, pageLabel, type Lead } from "@shared/leads/types";
import { fieldLabel, formatDateTime, formatValue } from "@shared/leads/format";

/**
 * Spreadsheet programs run text that starts with = + - @ as a formula. Form answers come from the public, so those
 * cells are made harmless with a leading apostrophe.
 */
function cell(value: string) {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${safe.replace(/"/g, '""')}"`;
}

const header = ["Received (Oklahoma time)", "Form", "Sent from", "Name", "Email", "Phone", "Status", "Private note", "Everything they sent"];

/** The leads as the text of a CSV file (with a byte-order mark so Excel reads the accents correctly). */
export function leadsToCsv(leads: Lead[]) {
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

  return "﻿" + [header.map(cell).join(","), ...rows].join("\r\n");
}
