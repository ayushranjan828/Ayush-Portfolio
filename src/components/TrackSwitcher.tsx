"use client";

import { motion } from "motion/react";
import { tracks } from "@/data/profile";
import { useTrack } from "./TrackContext";

/**
 * Lets a visitor read the same body of work through the lens they're hiring for.
 * Drives the hero copy, skill ordering, project framing and the Focus section.
 */
export default function TrackSwitcher({ className = "" }: { className?: string }) {
  const { trackId, setTrack } = useTrack();

  return (
    <div className={className}>
      <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
        Reading this as a…
      </p>

      <div
        role="tablist"
        aria-label="Career track"
        className="inline-flex flex-wrap gap-1 rounded-full border border-line bg-surface p-1 backdrop-blur"
      >
        {tracks.map((t) => {
          const Icon = t.icon;
          const active = t.id === trackId;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={active}
              onClick={() => setTrack(t.id)}
              className={`relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm transition-colors ${
                active ? "text-bg" : "text-muted hover:text-fg"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="track-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-fg"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon className="h-3.5 w-3.5" />
              {t.short}
            </button>
          );
        })}
      </div>
    </div>
  );
}
