"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/profile";

export default function Experience() {
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start 72%", "end 62%"],
  });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Three roles, one thread: <span className="text-gradient">shipping LLM systems</span>.
        </>
      }
    >
      <div ref={track} className="relative">
        {/* rail */}
        <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block">
          <motion.div
            style={{ scaleY: line }}
            className="h-full w-full origin-top"
          >
            <div className="h-full w-full bg-gradient-to-b from-accent via-accent-2 to-accent-3" />
          </motion.div>
        </div>

        <div className="space-y-6 sm:space-y-8 sm:pl-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={0.06 * i}>
              <article className="card group relative p-6 transition-colors hover:border-line-strong sm:p-7">
                {/* node */}
                <span className="absolute -left-12 top-8 hidden h-4 w-4 items-center justify-center sm:flex">
                  <span
                    className={`h-[15px] w-[15px] rounded-full border-2 border-bg ${
                      job.current
                        ? "bg-accent shadow-[0_0_0_4px_color-mix(in_oklab,var(--accent)_25%,transparent)]"
                        : "bg-faint"
                    }`}
                  />
                </span>

                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-accent">
                      {job.company}
                      <span className="text-faint"> · {job.location}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {job.current && (
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                        Current
                      </span>
                    )}
                    <span className="font-mono text-xs text-faint">{job.period}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-faint"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
