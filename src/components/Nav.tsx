"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] origin-left"
        style={{
          scaleX: progress,
          background:
            "linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3))",
        }}
      />

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-bg/72 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8">
          <a
            href="#top"
            className="group flex items-center gap-2.5 font-display text-sm font-semibold tracking-tight"
          >
            <span className="conic-ring grid h-8 w-8 place-items-center rounded-lg bg-bg-soft text-[13px] font-bold">
              AR
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                    isActive ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-line bg-surface-strong"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`mailto:${profile.email}`}
              className="hidden rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent sm:inline-flex"
            >
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-muted md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-5 pb-6 pt-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="border-b border-line/60 py-3.5 text-base text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-5 rounded-full border border-accent/40 bg-accent/10 px-4 py-3 text-center text-sm font-medium text-accent"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
