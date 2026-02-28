import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";

export function CaseStudyPreview({ study }: { study: CaseStudy }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-950/80 p-6">
      <p className="text-sm font-semibold text-sky-400">{study.industry}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{study.title}</h3>
      <p className="mt-3 text-sm text-slate-300">{study.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
        {study.impacts.map((impact) => (
          <span key={impact} className="rounded-full border border-white/10 px-3 py-1">
            {impact}
          </span>
        ))}
      </div>
      <Link
        href={`/case-studies/${study.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-sky-300"
      >
        Read the build notes →
      </Link>
    </div>
  );
}
