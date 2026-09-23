"use client";

import { AnimatePresence, motion } from "motion/react";
import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/profile";
import { useTrack } from "./TrackContext";

export default function Skills() {
  const { track } = useTrack();

  // Order by relevance to the selected track; the first three are the core ones.
  const ordered = track.skillOrder
    .map((id) => skillGroups.find((g) => g.id === id))
    .filter((g): g is (typeof skillGroups)[number] => Boolean(g));

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          The stack I reach for, <span className="text-gradient">end to end</span>.
        </>
      }
      lead="Reordered for the track you selected above — the three groups that matter most for it are badged Core."
    >
      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {ordered.map((group, gi) => {
            const Icon = group.icon;
            const core = gi < 3;
            return (
              <motion.div
                key={group.id}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                className="h-full"
              >
                <Reveal delay={0.04 * gi} className="h-full">
                  <div
                    className={`card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong ${
                      core ? "border-line-strong" : ""
                    }`}
                  >
                    {/* hover wash */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                      style={{ background: group.accent }}
                    />

                    <div className="flex items-start gap-3">
                      <span
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line"
                        style={{
                          background: `color-mix(in oklab, ${group.accent} 14%, transparent)`,
                          color: group.accent,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>

                      <div className="min-w-0">
                        <h3 className="font-display text-base font-semibold">
                          {group.title}
                        </h3>
                        {group.note ? (
                          <p className="mt-0.5 text-xs text-faint">{group.note}</p>
                        ) : null}
                      </div>

                      {core && (
                        <span className="ml-auto shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                          Core
                        </span>
                      )}
                    </div>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-muted transition-colors group-hover:border-line-strong group-hover:text-fg"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
