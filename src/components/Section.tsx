import type { ReactNode } from "react";
import { clsx } from "clsx";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={clsx("mx-auto max-w-6xl px-4 py-16", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400">
          {eyebrow}
        </p>
      )}
      {title && <h2 className="mt-4 text-3xl font-semibold text-white">{title}</h2>}
      {description && <p className="mt-4 max-w-3xl text-base text-slate-300">{description}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
