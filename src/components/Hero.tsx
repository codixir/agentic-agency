import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
        Production-grade delivery
      </p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Production-ready agentic applications. Built to survive real-world scale.
      </h1>
      <p className="mt-6 text-lg text-slate-300">
        We design and deliver secure, observable, and scalable AI systems that move beyond demos.
        Every engagement is grounded in architecture docs, IAM guardrails, and instrumentation plans
        before a single feature ships.
      </p>
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          href="/contact"
          className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
        >
          Book a Strategy Call
        </Link>
        <Link
          href="/case-studies"
          className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/80 hover:text-sky-200"
        >
          View Case Studies
        </Link>
      </div>
    </section>
  );
}
