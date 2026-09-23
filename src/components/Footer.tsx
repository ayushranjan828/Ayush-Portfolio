import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS
          and Motion.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          aria-label="Back to top"
          className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
