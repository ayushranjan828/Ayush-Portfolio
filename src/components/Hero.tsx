"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight, Check, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { marquee, profile } from "@/data/profile";
import { useTrack } from "./TrackContext";
import TrackSwitcher from "./TrackSwitcher";

/** Types the role list out one character at a time, then deletes it. */
function useTypewriter(words: readonly string[], enabled: boolean) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";

    const delay = done ? 1900 : cleared ? 220 : deleting ? 32 : 62;

    const timer = setTimeout(() => {
      if (done) {
        setDeleting(true);
      } else if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else if (!deleting && !word.startsWith(text)) {
        // The track changed mid-word: rewind before typing the new title.
        setDeleting(true);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, enabled]);

  return enabled ? text : words[0];
}

export default function Hero() {
  const reduce = useReducedMotion();
  const { track } = useTrack();
  const typed = useTypewriter(track.typed, !reduce);

  // Pointer-driven tilt on the portrait.
  const frame = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 140, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 140, damping: 18 });
  const sheenX = useTransform(mx, [0, 1], ["25%", "75%"]);
  const sheenY = useTransform(my, [0, 1], ["20%", "80%"]);
  const sheen = useMotionTemplate`radial-gradient(420px circle at ${sheenX} ${sheenY}, color-mix(in oklab, var(--accent) 22%, transparent), transparent 62%)`;

  function onMove(e: React.PointerEvent) {
    if (reduce) return;
    const r = frame.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  const socials = [
    { href: profile.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  ];

  return (
    <section id="top" className="relative pt-32 sm:pt-40">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* ---------------------------- copy ---------------------------- */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.available}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl"
            >
              <span className="block text-muted text-2xl font-normal tracking-normal sm:text-3xl">
                Hi, I&rsquo;m
              </span>
              <span className="text-gradient mt-1 block">{profile.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 font-mono text-lg text-fg sm:text-xl"
            >
              <span className="text-faint">&gt;_ </span>
              {typed}
              <span className="caret ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[3px] bg-accent" />
            </motion.p>

            <div className="mt-6 max-w-xl">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-base leading-relaxed text-muted sm:text-lg">
                    {track.headline}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {track.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              <TrackSwitcher className="mt-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Résumé
              </a>

              <div className="ml-1 flex items-center gap-1.5">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-7 inline-flex items-center gap-2 text-sm text-faint"
            >
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </motion.p>
          </div>

          {/* --------------------------- portrait --------------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              ref={frame}
              onPointerMove={onMove}
              onPointerLeave={onLeave}
              style={{ perspective: 1000 }}
            >
              <motion.div
                style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
                className="conic-ring relative overflow-hidden rounded-[1.75rem]"
              >
                <Image
                  src="/ayush-portrait.jpg"
                  alt={`${profile.name} — ${profile.role}`}
                  width={1000}
                  height={1250}
                  priority
                  sizes="(max-width: 1024px) 88vw, 420px"
                  className="h-auto w-full select-none rounded-[1.75rem] object-cover"
                />

                {/* pointer sheen */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[1.75rem] mix-blend-soft-light"
                  style={{ background: sheen }}
                />

                {/* caption */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5">
                  <div>
                    <p className="font-display text-sm font-semibold text-white">
                      {profile.name}
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300">
                      {track.label}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 font-mono text-[10px] text-white/85 backdrop-blur">
                    2026
                  </span>
                </div>
              </motion.div>
            </div>

            {/* floating chips */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="card absolute -left-4 top-10 z-10 hidden bg-bg-soft/92 px-3 py-2 font-mono text-[11px] text-muted shadow-xl sm:block lg:-left-10"
            >
              <span className="text-accent">{track.chips[0].split("|")[0]}</span>
              {track.chips[0].split("|")[1]}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.82 }}
              className="card absolute -right-4 bottom-28 z-10 hidden bg-bg-soft/92 px-3 py-2 font-mono text-[11px] text-muted shadow-xl sm:block lg:-right-10"
            >
              <span className="text-accent-2">{track.chips[1].split("|")[0]}</span>
              {track.chips[1].split("|")[1]}
            </motion.div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-20 hidden w-fit items-center gap-2 text-xs text-faint transition-colors hover:text-accent sm:flex"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll
        </motion.a>
      </div>

      {/* tech marquee */}
      <div className="marquee relative mt-14 overflow-hidden border-y border-line py-4 sm:mt-20">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-10 font-mono text-sm uppercase tracking-[0.14em] text-faint"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-accent/60" />
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
      </div>
    </section>
  );
}
