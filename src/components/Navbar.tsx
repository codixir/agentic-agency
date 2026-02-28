import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  return (
    <header className="border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight text-white">
            {siteConfig.name}
          </Link>
          <p className="text-xs text-slate-400">Agentic Engineering Studio</p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
          {siteConfig.primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-400"
        >
          Book a Strategy Call
        </Link>
      </div>
    </header>
  );
}
