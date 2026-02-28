export function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/hello@yourdomain.com"
      method="POST"
      className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-white">
          Work email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500"
        />
      </div>
      <div>
        <label htmlFor="company" className="text-sm font-medium text-white">
          Company / Organization
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500"
        />
      </div>
      <div>
        <label htmlFor="timeline" className="text-sm font-medium text-white">
          Timeline and success criteria
        </label>
        <textarea
          id="timeline"
          name="timeline"
          rows={4}
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500"
        />
      </div>
      <div>
        <label htmlFor="context" className="text-sm font-medium text-white">
          What workflows should the agent own first?
        </label>
        <textarea
          id="context"
          name="context"
          rows={5}
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
      >
        Book Strategy Call
      </button>
      <p className="text-center text-xs text-slate-400">
        We respond within two business days. For sensitive details, request our encrypted intake folder at {" "}
        <a href="mailto:hello@yourdomain.com" className="text-sky-300 underline">
          hello@yourdomain.com
        </a>
        .
      </p>
    </form>
  );
}
