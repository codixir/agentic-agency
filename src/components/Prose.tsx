import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose prose-invert max-w-none">{children}</div>;
}
