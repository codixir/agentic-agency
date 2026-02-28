import type { ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps {
  title?: string;
  description: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, icon, children, className }: CardProps) {
  return (
    <div className={clsx("rounded-2xl border border-white/10 bg-white/5 p-6", className)}>
      {icon && <div className="text-sky-400">{icon}</div>}
      {title && <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>}
      <p className="mt-3 text-sm text-slate-300">{description}</p>
      {children && <div className="mt-5 text-sm text-slate-200">{children}</div>}
    </div>
  );
}
