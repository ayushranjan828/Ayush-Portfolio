"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile, projects } from "@/data/profile";
import type { Project } from "@/data/profile";
import { useTrack } from "./TrackContext";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { trackId } = useTrack();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${mx}px ${my}px, color-mix(in oklab, var(--accent) 13%, transparent), transparent 70%)`;

  function onMove(e: React.PointerEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  const Icon = project.icon;
  const featured = index === 0;

  return (
    <motion.article
      ref={ref}
      onPointerMove={onMove}
      className="card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong sm:p-8"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-accent">
            <Icon className="h-5 w-5" />
          </span>
          <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-accent">
            {project.metric}
          </span>
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-balance sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {project.blurb}
        </p>

        {/* Reframed for whichever track the visitor selected in the hero. */}
        <div className="mt-4 rounded-xl border border-line bg-surface/60 p-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={trackId}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.26 }}
              className="text-sm leading-relaxed text-muted"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Why it matters here —{" "}
              </span>
              {project.lens[trackId]}
            </motion.p>
          </AnimatePresence>
        </div>

        <ul className={`mt-5 gap-2.5 ${featured ? "grid sm:grid-cols-2" : "space-y-2.5"}`}>
          {project.points.map((p) => (
            <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-2/80" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-faint"
            >
              {s}
            </span>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            Code
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Things I&rsquo;ve <span className="text-gradient">built and broken</span>.
        </>
      }
      lead="Three projects, one pattern: taken past the notebook into something that runs. Each card is reframed below for the track you selected."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.05 * i} className={`h-full ${i === 0 ? "lg:col-span-2" : ""}`}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex items-center justify-center gap-2.5 rounded-2xl border border-dashed border-line bg-surface/40 px-6 py-5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon className="h-4 w-4" />
          More on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </Section>
  );
}
