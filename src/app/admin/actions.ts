"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { checkCredentials, requireAdmin } from "@/lib/admin/auth";
import { createSession, destroySession } from "@/lib/admin/session";
import { deleteLead, setLeadNote, setLeadStatus } from "@/lib/leads/store";
import { isLeadStatus } from "@/lib/leads/types";

export type LoginState = { error?: string };

export async function loginAction(_previous: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const who = await checkCredentials(username, password);
  if (!who) {
    // a short pause on a wrong password makes rapid guessing slow without ever locking the real user out
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { error: "Incorrect email/username or password." };
  }

  await createSession(who);
  redirect("/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}

// Server actions can be called by anyone who knows their address, so each one proves the caller is logged in first.

export async function setStatusAction(id: string, status: string) {
  await requireAdmin();
  if (!isLeadStatus(status)) return;
  await setLeadStatus(id, status);
  revalidatePath("/admin");
  revalidatePath(`/admin/leads/${id}`);
}

export async function saveNoteAction(id: string, note: string) {
  await requireAdmin();
  await setLeadNote(id, String(note));
  revalidatePath(`/admin/leads/${id}`);
}

export async function deleteLeadAction(id: string) {
  await requireAdmin();
  await deleteLead(id);
  revalidatePath("/admin");
  redirect("/admin");
}
