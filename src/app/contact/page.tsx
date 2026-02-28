import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { CTA } from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = buildMetadata(pageMeta.contact);

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-16">
      <Section
        eyebrow="Contact"
        title="Tell us about your agentic initiative"
        description="We reply with a short audit plan, timeline, and resourcing recommendation within two business days."
      >
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            <p className="text-base font-semibold text-white">What to expect</p>
            <ul className="mt-4 space-y-3">
              <li>Introductory async intake, optionally followed by a 45-minute strategy call.</li>
              <li>Architecture review or quick build audit if you already have code.</li>
              <li>Clear proposal with milestones, scope, and responsible collaborators.</li>
            </ul>
            <p className="mt-6 text-sm text-slate-400">
              Email us directly at <a className="text-sky-300" href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.
            </p>
          </div>
        </div>
      </Section>

      <CTA />
    </div>
  );
}
