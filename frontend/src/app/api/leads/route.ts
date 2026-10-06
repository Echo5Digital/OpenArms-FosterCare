import { createLeadsHandler } from "@backend/api/leads";
import { siteConfig } from "@/lib/site-config";

// The form handling lives in backend/src/api/leads.ts; this file only gives it its address (/api/leads).
export const POST = createLeadsHandler({ contactPhone: siteConfig.phone });
