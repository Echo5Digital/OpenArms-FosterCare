"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { isLeadStatus } from "@shared/leads/types";
import { api, BackendError } from "@/lib/backend";
import { asAdmin, clearToken, storeToken } from "@/lib/admin";

export type LoginState = { error?: string };

export async function loginAction(_previous: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  let session;
  try {
    session = await api.login(username, password);
  } catch (error) {
    if (error instanceof BackendError && error.status === 401) return { error: "Incorrect email/username or password." };
    return { error: "The server could not be reached. Please wait a moment and try again." };
  }

  await storeToken(session.token, new Date(session.expiresAt));
  redirect("/admin");
}

export async function logoutAction() {
  await clearToken();
  redirect("/admin/login");
}

// Server actions can be called by anyone who knows their address, so the backend checks the login on every one of them.

export async function setStatusAction(id: string, status: string) {
  if (!isLeadStatus(status)) return;
  await asAdmin((token) => api.updateLead(token, id, { status }));
  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${id}`);
}

export async function saveNoteAction(id: string, note: string) {
  await asAdmin((token) => api.updateLead(token, id, { note: String(note) }));
  revalidatePath(`/admin/leads/${id}`);
}

export async function deleteLeadAction(id: string) {
  await asAdmin((token) => api.deleteLead(token, id));
  revalidatePath("/admin");
  redirect("/admin");
}
