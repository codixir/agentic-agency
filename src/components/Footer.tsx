import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-3 text-sm text-slate-400">{siteConfig.description}</p>
            <p className="mt-3 text-sm text-slate-400">Contact: {siteConfig.email}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Navigate
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
              {siteConfig.primaryNav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Services
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
              {siteConfig.servicesLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Social
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
              <Link href={siteConfig.social.linkedin} className="hover:text-white">
                LinkedIn
              </Link>
              <Link href={siteConfig.social.x} className="hover:text-white">
                X / Twitter
              </Link>
              <Link href={siteConfig.social.github} className="hover:text-white">
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. Operated worldwide from {siteConfig.location}.
        </p>
      </div>
    </footer>
  );
}
