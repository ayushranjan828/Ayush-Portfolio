import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: Props) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </Reveal>

        {lead ? (
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {lead}
            </p>
          </Reveal>
        ) : null}

        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
