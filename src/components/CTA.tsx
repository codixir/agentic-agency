import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto max-w-4xl rounded-3xl border border-sky-500/40 bg-gradient-to-br from-slate-900 to-slate-950 px-6 py-12 text-center shadow-2xl shadow-sky-500/10">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
        Final call
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-white">
        Ready to ship an agentic application that works in production?
      </h2>
      <p className="mt-4 text-base text-slate-300">
        We lead architecture, build the core experience, and stay through launch readiness. Async-first, milestone-driven, and accountable from design to deployment.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
        >
          Book Strategy Call
        </Link>
        <a href="mailto:hello@yourdomain.com" className="text-sm font-medium text-sky-300">
          hello@yourdomain.com
        </a>
      </div>
    </section>
  );
}
