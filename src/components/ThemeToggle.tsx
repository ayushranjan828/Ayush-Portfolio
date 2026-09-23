"use client";

import { Moon, Sun } from "lucide-react";

/**
 * The theme lives on `<html data-theme>`, set before paint by the inline script in
 * the layout. Keeping it out of React state avoids a hydration mismatch — CSS picks
 * which icon to show, and the click handler reads the current value from the DOM.
 */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode — falls back to the default on the next visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      <Sun className="icon-when-dark h-4 w-4" />
      <Moon className="icon-when-light h-4 w-4" />
    </button>
  );
}
