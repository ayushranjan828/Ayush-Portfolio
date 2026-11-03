"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";

function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  // both icons are rendered and swapped with CSS, so server and client markup always match
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="grid size-10 place-items-center rounded-full border border-rule bg-surface text-ink-2 transition hover:border-primary hover:text-primary"
    >
      <Sun className="hidden size-[18px] dark:block" />
      <Moon className="size-[18px] dark:hidden" />
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // highlight the nav link of the section currently in the middle of the viewport
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) io.observe(el);
    });

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled || open ? "border-b border-rule bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="bg-gradient grid size-9 place-items-center rounded-xl font-display text-sm font-bold text-white shadow-lg shadow-primary/30">
            AR
          </span>
          <span className="hidden font-display text-lg font-semibold sm:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-rule bg-surface/70 p-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`block rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  active === l.href ? "bg-gradient text-white shadow" : "text-ink-2 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-rule bg-surface text-ink md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-4 mb-4 grid gap-1 rounded-2xl border border-rule bg-surface p-2 shadow-xl md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 font-medium ${
                  active === l.href ? "bg-gradient text-white" : "text-ink-2 hover:bg-surface-2"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <motion.div style={{ scaleX: progress }} className="bg-gradient absolute inset-x-0 bottom-0 h-0.5 origin-left" />
    </header>
  );
}
