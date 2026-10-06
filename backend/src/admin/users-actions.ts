"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "./auth";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH, hashPassword } from "./password";
import { createAdmin, deleteAdmin } from "./users";

export type AddAdminState = {
  error?: string;
  /** Email of the admin that was just added. */
  added?: string;
  /** Goes up by one after each success, which is what clears the form. */
  count: number;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Server Actions can be called by anyone who knows their address, so each one proves the caller is logged in first.

export async function addAdminAction(previous: AddAdminState, formData: FormData): Promise<AddAdminState> {
  const me = await requireAdmin();
  const fail = (error: string): AddAdminState => ({ error, count: previous.count });

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!EMAIL_PATTERN.test(email) || email.length > 254) return fail("Please enter a valid email address.");
  if (email === (process.env.ADMIN_USERNAME ?? "").toLowerCase()) return fail("That name belongs to the owner account.");
  if (password.length < MIN_PASSWORD_LENGTH) return fail(`The password needs at least ${MIN_PASSWORD_LENGTH} characters.`);
  if (password.length > MAX_PASSWORD_LENGTH) return fail(`The password can be at most ${MAX_PASSWORD_LENGTH} characters.`);

  try {
    const result = await createAdmin(email, await hashPassword(password), me.username);
    if (result === "exists") return fail("That email already has access.");
  } catch {
    return fail("Could not save the new admin. Please try again.");
  }

  revalidatePath("/admin/users");
  return { added: email, count: previous.count + 1 };
}

export async function removeAdminAction(email: string) {
  const me = await requireAdmin();
  const target = String(email).trim().toLowerCase();

  // you cannot remove yourself (that could leave nobody able to sign in); the owner is not in the database at all
  if (target === me.username.toLowerCase()) return;

  await deleteAdmin(target);
  revalidatePath("/admin/users");
}
