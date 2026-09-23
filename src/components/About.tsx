"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import Section from "./Section";
import Reveal from "./Reveal";
import { education, profile, stats } from "@/data/profile";
import { useTrack } from "./TrackContext";

/** Counts up to the numeric part of a stat while keeping its prefix/suffix. */
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  // Parsed once per value — keeping the match array out of the effect deps
  // matters: a fresh array each render would restart the animation forever.
  const parsed = useMemo(() => {
    const m = value.match(/^(\D*)(\d+)(.*)$/);
    return m
      ? { prefix: m[1], target: Number(m[2]), suffix: m[3] }
      : { prefix: "", target: null as number | null, suffix: "" };
  }, [value]);

  const [n, setN] = useState(0);

  useEffect(() => {
    const target = parsed.target;
    if (target === null || reduce || !inView) return;

    const duration = 1100;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, parsed.target]);

  if (parsed.target === null) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {parsed.prefix}
      {reduce ? parsed.target : n}
      {parsed.suffix}
    </span>
  );
}

export default function About() {
  const { track } = useTrack();

  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          I work on the part of this job that has to{" "}
          <span className="text-gradient">{track.aboutTitle}</span>.
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="space-y-5">
          {profile.summary.map((p, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.18}>
            <div className="card mt-8 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Education
              </p>
              <ul className="mt-4 space-y-4">
                {education.map((e) => (
                  <li
                    key={e.degree}
                    className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1"
                  >
                    <div className="min-w-0">
                      <p className="font-medium">{e.degree}</p>
                      <p className="mt-0.5 text-sm text-muted">
                        {e.school}
                        <span className="text-faint"> · {e.location}</span>
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-faint">
                      {e.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i} className="h-full">
              <div className="card group h-full p-5 transition-colors hover:border-line-strong">
                <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  <span className="text-gradient">
                    <Counter value={s.value} />
                  </span>
                </p>
                <p className="mt-1.5 text-sm font-medium">{s.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-faint">{s.hint}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
