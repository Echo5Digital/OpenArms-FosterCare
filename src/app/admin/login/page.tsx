import Image from "next/image";
import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/admin/auth";
import { LoginForm } from "@/app/admin/login/login-form";

export default async function AdminLoginPage() {
  // already signed in: go straight to the dashboard
  if (await getAdmin()) redirect("/admin");

  return (
    <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pine-deep via-pine to-[#1f4a36] px-5 py-12">
      <div className="pointer-events-none absolute -left-24 -top-28 -z-10 h-96 w-96 rounded-full bg-leaf/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-10 -z-10 h-96 w-96 rounded-full bg-leaf-deep/30 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)", backgroundSize: "30px 30px" }}
      />

      <div className="w-full max-w-md rounded-[2rem] border-4 border-white bg-[#ebf0ee] p-8 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] sm:p-10">
        <div className="flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow">
            <Image src="/images/fav.png" alt="" width={96} height={96} className="h-[160%] w-[160%] max-w-none -translate-x-[18%] -translate-y-[18%] object-contain" />
          </span>
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-leaf-deep">Open Arms Foster Care</p>
            <h1 className="font-sans text-2xl font-bold leading-tight tracking-tight text-pine-deep">Lead Dashboard</h1>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-ink/70">Sign in to see the requests sent through the website&rsquo;s forms.</p>
        <LoginForm />
      </div>
    </div>
  );
}
