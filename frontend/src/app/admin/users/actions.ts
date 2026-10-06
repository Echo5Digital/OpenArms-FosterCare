"use server";

import { revalidatePath } from "next/cache";
import { unstable_rethrow } from "next/navigation";
import { api, BackendError } from "@/lib/backend";
import { asAdmin } from "@/lib/admin";

export type AddAdminState = {
  error?: string;
  /** Email of the admin that was just added. */
  added?: string;
  /** Goes up by one after each success, which is what clears the form. */
  count: number;
};

// Server Actions can be called by anyone who knows their address, so the backend checks the login on every one of them.

export async function addAdminAction(previous: AddAdminState, formData: FormData): Promise<AddAdminState> {
  const fail = (error: string): AddAdminState => ({ error, count: previous.count });

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  try {
    await asAdmin((token) => api.addUser(token, email, password));
  } catch (error) {
    unstable_rethrow(error); // an expired login redirects to the sign-in page by throwing; let that through
    // the backend words its own refusals (bad email, short password, already added, ...)
    if (error instanceof BackendError && [400, 409, 503].includes(error.status)) return fail(error.message);
    return fail("Could not save the new admin. Please try again.");
  }

  revalidatePath("/admin/users");
  return { added: email, count: previous.count + 1 };
}

export async function removeAdminAction(email: string) {
  try {
    await asAdmin((token) => api.removeUser(token, String(email)));
  } catch (error) {
    // removing yourself is refused: nothing to do
    if (!(error instanceof BackendError && error.status === 400)) throw error;
  }
  revalidatePath("/admin/users");
}
