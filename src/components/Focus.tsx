"use client";

import { AnimatePresence, motion } from "motion/react";
import Section from "./Section";
import { focusByTrack } from "@/data/profile";
import { useTrack } from "./TrackContext";

export default function Focus() {
  const { track, trackId } = useTrack();
  const items = focusByTrack[trackId];

  return (
    <Section
      id="focus"
      eyebrow={track.focusEyebrow}
      title={
        <>
          How I <span className="text-gradient">actually work</span>.
        </>
      }
      lead={track.focusLead}
    >
      <div className="overflow-hidden rounded-2xl border border-line bg-line">
        {/* One keyed child per track so mode="wait" has a single element to swap. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={trackId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.36, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full bg-bg p-6 transition-colors hover:bg-bg-soft sm:p-7"
                >
                  <span className="absolute right-6 top-6 font-mono text-xs text-faint/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />

                  <h3 className="mt-4 font-display text-base font-semibold">{f.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{f.body}</p>

                  <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-accent via-accent-2 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
