"use client";

import { motion, type PanInfo } from "motion/react";
import { useState, useSyncExternalStore } from "react";
import ProjectArt from "@/components/ProjectArt";
import { projects } from "@/data/profile";

const mono = "font-mono text-xs tracking-[0.14em] uppercase";
const chip = "rounded-full border border-rule bg-surface-2 px-3 py-1 text-xs font-medium text-ink-2";
const wide = "(min-width: 1024px)";

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-y-2 font-mono text-[11px] text-ink-2">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center">
          <span
            className={`rounded-md border px-2 py-1 ${
              i === steps.length - 1
                ? "border-transparent bg-gradient font-semibold text-white"
                : "border-rule bg-bg"
            }`}
          >
            {s}
          </span>
          {i < steps.length - 1 && <span className="px-1.5 text-primary">→</span>}
        </li>
      ))}
    </ol>
  );
}

// cards in view: two side by side on desktop, one on smaller screens
function usePerView() {
  return useSyncExternalStore(
    (cb) => {
      const mq = matchMedia(wide);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => (matchMedia(wide).matches ? 2 : 1),
    () => 2,
  );
}

/** A row of project cards; swipe/drag (or ←/→ when focused) slides it one card at a time. */
export default function ProjectCarousel() {
  const perView = usePerView();
  const last = projects.length - perView;
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const active = Math.min(index, last);

  const go = (step: number) => setIndex((i) => {
    const next = Math.min(i, last) + step;
    return next > last ? 0 : next < 0 ? last : next;
  });
  const onPanEnd = (_: unknown, { offset, velocity }: PanInfo) => {
    setDragX(0);
    if (offset.x < -60 || velocity.x < -400) go(1);
    else if (offset.x > 60 || velocity.x > 400) go(-1);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Projects"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      className="-my-4 overflow-x-clip rounded-3xl py-4 outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* one step = one card plus the 24px gap: full width on mobile, half the row on desktop */}
      <motion.div
        onPan={(_, { offset }) => setDragX(offset.x * 0.8)}
        onPanEnd={onPanEnd}
        style={{ transform: `translateX(calc(var(--step) * ${-active} + ${dragX}px))` }}
        className={`flex cursor-grab touch-pan-y gap-6 select-none [--step:calc(100%+24px)] active:cursor-grabbing lg:[--step:calc(50%+12px)] ${
          dragX ? "" : "transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none"
        }`}
      >
        {projects.map((p, i) => (
          <article
            key={p.title}
            inert={i < active || i >= active + perView}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${projects.length}: ${p.title}`}
            className="glow-card flex shrink-0 basis-full flex-col overflow-hidden rounded-3xl lg:basis-[calc(50%-12px)]"
          >
            <div className="relative h-52 overflow-hidden bg-[#0b0d1f] sm:h-60">
              <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_0%,rgba(143,120,255,0.35),transparent_70%),radial-gradient(50%_70%_at_100%_100%,rgba(34,211,238,0.22),transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
              <div className="relative flex items-start justify-between gap-4 p-5 sm:p-6">
                <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur">
                  <p.icon className="size-5" />
                </span>
                <span className="rounded-full bg-gradient px-3 py-1 text-xs font-bold text-white shadow-md shadow-primary/30">
                  {p.metric}
                </span>
              </div>
              <div className="absolute inset-x-4 top-16 bottom-3 sm:inset-x-8 sm:top-[4.5rem]">
                <ProjectArt art={p.art} />
              </div>
            </div>
            <div className="bg-gradient h-1" />
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className={`${mono} text-ink-3`}>
                P.{String(i + 1).padStart(2, "0")} · {p.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{p.title}</h3>
              <p className="mt-3 text-ink-2">{p.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span className="text-primary">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-rule bg-surface-2/60 p-3">
                <Flow steps={p.flow} />
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {p.stack.map((s) => (
                  <span key={s} className={chip}>{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}
