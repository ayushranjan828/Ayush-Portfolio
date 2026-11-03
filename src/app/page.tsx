import { ArrowDown, ArrowUpRight, Download, GraduationCap, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import CopyEmail from "@/components/CopyEmail";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import {
  education,
  experience,
  focus,
  profile,
  projects,
  skills,
} from "@/data/profile";

const mono = "font-mono text-xs tracking-[0.14em] uppercase";
const btn =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition";
const btnSolid = `${btn} bg-gradient text-white shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40`;
const btnLine = `${btn} border border-rule bg-surface text-ink hover:-translate-y-0.5 hover:border-primary hover:text-primary`;
const chip = "rounded-full border border-rule bg-surface-2 px-3 py-1 text-xs font-medium text-ink-2";

// lucide v1 dropped brand marks, so these two are inlined
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57l-.02-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28">
      <Reveal className="max-w-3xl">
        <p className={`${mono} inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-3 py-1.5 text-ink-2`}>
          <span className="text-gradient font-bold">{index}</span>
          <span className="h-3 w-px bg-rule" />
          {label}
        </p>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {intro && <p className="mt-5 text-base text-ink-2 sm:text-lg">{intro}</p>}
      </Reveal>
      <div className="mt-12 md:mt-16">{children}</div>
    </section>
  );
}

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

const stack = [
  "LangGraph", "FastAPI", "Azure OpenAI", "LangChain", "Pinecone", "ChromaDB",
  "Hugging Face", "TensorFlow", "Pydantic", "OpenCV", "Docker", "MCP",
];

// one heartbeat every 300 units: flat, P wave, QRS spike, T wave
const ecgPath =
  "M0 60" +
  [0, 300, 600, 900]
    .map(
      (o) =>
        ` L${o + 90} 60 Q${o + 105} 48 ${o + 120} 60 L${o + 135} 60 L${o + 142} 72 L${o + 152} 10` +
        ` L${o + 162} 104 L${o + 170} 60 L${o + 190} 60 Q${o + 212} 40 ${o + 234} 60 L${o + 300} 60`,
    )
    .join("");

/** Heart-monitor trace: a faint ECG line with a bright pulse sweeping across it. */
function Heartbeat() {
  return (
    <div className="mt-14" aria-hidden>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-16 w-full md:h-24">
        <path d={ecgPath} pathLength={1000} fill="none" stroke="var(--pulse-dim)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
        <path
          d={ecgPath}
          pathLength={1000}
          className="ecg-pulse"
          fill="none"
          stroke="var(--pulse)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function Hero() {
  const [lead, last] = [
    profile.headline.split(" ").slice(0, -1).join(" "),
    profile.headline.split(" ").at(-1),
  ];

  return (
    <section className="relative pt-10 pb-12 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <h1 className="rise font-display text-4xl leading-none font-extrabold tracking-tight sm:text-5xl xl:text-6xl" style={{ "--d": "0.08s" } as React.CSSProperties}>
            {profile.name}
          </h1>
          <span className="rise bg-gradient mx-auto mt-4 block h-1.5 w-20 rounded-full lg:mx-0" style={{ "--d": "0.12s" } as React.CSSProperties} aria-hidden />

          <p
            className="rise mt-8 font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-7xl xl:text-8xl"
            style={{ "--d": "0.16s" } as React.CSSProperties}
          >
            {lead} <span className="text-gradient">{last}</span>
          </p>

          <p
            className="rise mx-auto mt-6 max-w-xl text-base text-ink-2 sm:text-lg lg:mx-0"
            style={{ "--d": "0.24s" } as React.CSSProperties}
          >
            <span className="font-semibold text-ink">{profile.role}.</span> {profile.intro}
          </p>

          <div
            className="rise mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            style={{ "--d": "0.32s" } as React.CSSProperties}
          >
            <a href="#projects" className={btnSolid}>
              View projects <ArrowDown className="size-4" />
            </a>
            <a href="/resume.pdf" className={btnLine} download>
              <Download className="size-4" /> Download résumé
            </a>
          </div>

          <div
            className="rise mt-8 flex items-center justify-center gap-5 text-ink-3 lg:justify-start"
            style={{ "--d": "0.4s" } as React.CSSProperties}
          >
            <a href={profile.github} aria-label="GitHub" className="transition hover:text-primary">
              <GithubIcon className="size-5" />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="transition hover:text-primary">
              <LinkedinIcon className="size-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-primary">
              <Mail className="size-5" />
            </a>
            <span className="h-4 w-px bg-rule" />
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" /> {profile.location}
            </span>
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-[420px]" style={{ "--d": "0.2s" } as React.CSSProperties}>
          <div className="relative overflow-hidden rounded-3xl p-[2px]">
            <div className="ring-spin absolute -inset-[100%]" aria-hidden />
            <div className="relative rounded-[calc(1.5rem-2px)] bg-[#0b0d1f] p-5 font-mono text-[13px] leading-relaxed text-[#c9cdf0] sm:p-6 sm:text-sm">
              <div className="mb-4 flex items-center gap-1.5">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-white/40">ayush.py</span>
              </div>
              <pre className="overflow-x-auto whitespace-pre">
                <span className="text-[#ff7ab2]">class</span> <span className="text-[#5eead4]">Data_Science</span>:{"\n"}
                {"  "}name   = <span className="text-[#fbbf77]">&quot;{profile.name}&quot;</span>{"\n"}
                {"  "}builds = [<span className="text-[#fbbf77]">&quot;RAG&quot;</span>, <span className="text-[#fbbf77]">&quot;AI agents&quot;</span>,{"\n"}
                {"            "}<span className="text-[#fbbf77]">&quot;Deep learning&quot;</span>,{"\n"}
                {"            "}<span className="text-[#fbbf77]">&quot;Machine Learning&quot;</span>]{"\n"}
                {"  "}stack  = [<span className="text-[#fbbf77]">&quot;LangGraph&quot;</span>, <span className="text-[#fbbf77]">&quot;FastAPI&quot;</span>,{"\n"}
                {"            "}<span className="text-[#fbbf77]">&quot;Azure OpenAI&quot;</span>,{"\n"}
                {"            "}<span className="text-[#fbbf77]">&quot;TensorFlow&quot;</span>]{"\n"}
                {"\n"}
                {"  "}<span className="text-[#ff7ab2]">def</span> <span className="text-[#a594ff]">answer</span>(self, q):{"\n"}
                {"    "}<span className="text-[#ff7ab2]">if not</span> self.grounded(q):{"\n"}
                {"      "}<span className="text-[#ff7ab2]">return</span> <span className="text-[#fbbf77]">&quot;I don&apos;t know&quot;</span>{"\n"}
                {"    "}<span className="text-[#ff7ab2]">return</span> self.cite(q)
              </pre>
            </div>
          </div>
          <div className="bg-gradient absolute -inset-6 -z-10 rounded-full opacity-30 blur-3xl" aria-hidden />

          <span className="float absolute -top-4 -left-2 inline-flex items-center gap-1.5 rounded-full border border-rule bg-surface/90 px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur sm:-left-8">
            <Sparkles className="size-3.5 text-primary" /> RAG & Agents
          </span>
          <span
            className="float absolute -right-2 -bottom-4 rounded-full border border-rule bg-surface/90 px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur sm:-right-6"
            style={{ animationDelay: "1.5s" }}
          >
            🧠 Deep Learning
          </span>
        </div>
      </div>

      <Heartbeat />
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* police-siren ambience: red and blue light glowing in from the screen edges on every scroll position */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div className="siren siren-red absolute inset-0" />
        <div className="siren siren-blue absolute inset-0" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] overflow-hidden" aria-hidden>
        <div className="aurora absolute inset-0" />
        <div className="dot-grid absolute inset-0" />
      </div>

      <Header />

      <main id="top" className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Hero />

        <div className="marquee -mx-4 overflow-hidden border-y border-rule py-5 sm:-mx-6 lg:-mx-8" aria-label="Tech stack">
          <ul className="marquee-track flex w-max gap-4">
            {[...stack, ...stack].map((t, i) => (
              <li
                key={i}
                aria-hidden={i >= stack.length}
                className="rounded-full border border-rule bg-surface px-5 py-2 font-display text-base font-semibold whitespace-nowrap text-ink-2 sm:text-lg"
              >
                <span className="text-gradient mr-2">✦</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Section
          id="about"
          index="01"
          label="About"
          title={<>I care about what happens <span className="text-gradient">after the demo.</span></>}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <Reveal>
              <p className="font-display text-2xl leading-snug font-semibold sm:text-3xl">{profile.about[0]}</p>
              <p className="mt-6 text-base leading-relaxed text-ink-2 sm:text-lg">{profile.about[1]}</p>
            </Reveal>
            <div className="grid gap-4">
              {focus.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1} className="glow-card flex gap-4 rounded-2xl p-5">
                  <span className="bg-gradient grid size-11 shrink-0 place-items-center rounded-xl text-white shadow-md shadow-primary/30">
                    <f.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{f.title}</h3>
                    <p className="mt-1 text-sm text-ink-2">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          index="02"
          label="Skills"
          title={<>What I <span className="text-gradient">work with</span></>}
          intro="From foundation models to the APIs and pipelines around them, the full stack of shipping AI."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 0.08} className="glow-card flex flex-col rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <g.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg leading-tight font-bold">{g.title}</h3>
                </div>
                <p className="mt-3 text-sm text-ink-3">{g.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span key={it} className={chip}>{it}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          index="03"
          label="Experience"
          title={<>Where I&apos;ve <span className="text-gradient">shipped</span></>}
        >
          <ol className="relative space-y-6 border-l-2 border-rule pl-6 sm:pl-10">
            {experience.map((e, idx) => (
              <li key={e.company} className="relative">
                <span
                  className={`absolute top-7 -left-[33px] size-4 rounded-full border-4 border-bg sm:-left-[49px] ${
                    idx === 0 ? "bg-gradient shadow-[0_0_0_4px_var(--glow)]" : "bg-ink-3"
                  }`}
                  aria-hidden
                />
                <Reveal className="glow-card rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold sm:text-3xl">{e.company}</h3>
                      <p className="text-gradient font-semibold">{e.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {idx === 0 && (
                        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          ● Current
                        </span>
                      )}
                      <span className={chip}>{e.period}</span>
                      <span className={chip}>{e.location}</span>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5 text-ink-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="bg-gradient mt-2.5 size-1.5 shrink-0 rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="projects"
          index="04"
          label="Projects"
          title={<>Selected <span className="text-gradient">projects</span></>}
          intro="Agents, retrieval and models, each built with guardrails and an honest metric."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.1} className="glow-card flex flex-col overflow-hidden rounded-3xl">
                <div className="bg-gradient h-1.5" />
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <p.icon className="size-6" />
                    </span>
                    <span className="rounded-full bg-gradient px-3 py-1 text-xs font-bold text-white shadow-md shadow-primary/30">
                      {p.metric}
                    </span>
                  </div>
                  <p className={`${mono} mt-6 text-ink-3`}>
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
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="education" index="05" label="Education" title={<>Where I <span className="text-gradient">learned</span></>}>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.1} className="glow-card flex gap-4 rounded-2xl p-6">
                <span className="bg-gradient grid size-12 shrink-0 place-items-center rounded-2xl text-white">
                  <GraduationCap className="size-6" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold">{e.degree}</p>
                  <p className="text-ink-2">{e.school}</p>
                  <p className={`${mono} mt-2 text-primary`}>{e.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <section id="contact" className="pb-16 md:pb-24">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-[#0b0d1f] px-6 py-14 text-center text-white sm:px-12 md:py-20">
            <div className="bg-gradient absolute -top-32 -left-20 size-80 rounded-full opacity-40 blur-3xl" aria-hidden />
            <div className="absolute -right-20 -bottom-32 size-80 rounded-full bg-[#22d3ee] opacity-25 blur-3xl" aria-hidden />
            <div className="relative">
              <p className={`${mono} text-white/60`}>06 / Contact</p>
              <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                Let&apos;s build{" "}
                <span className="bg-gradient-to-r from-[#a594ff] to-[#22d3ee] bg-clip-text text-transparent">something great.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-white/70 sm:text-lg">
                Hiring for AI / ML, or have an idea that needs RAG, agents or a model in production? My inbox is open.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0d1f] transition hover:-translate-y-0.5"
                >
                  <Mail className="size-4 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                  <ArrowUpRight className="size-4 shrink-0" />
                </a>
                <CopyEmail email={profile.email} />
              </div>
              <ul className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
                <li>
                  <a href={profile.github} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20">
                    <GithubIcon className="size-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a href={profile.linkedin} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20">
                    <LinkedinIcon className="size-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20"
                  >
                    <Phone className="size-4" /> {profile.phone}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-ink-3 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 {profile.name}. Built with Next.js & Tailwind.</p>
          <a href="#top" className="transition hover:text-primary">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
