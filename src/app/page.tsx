import {
  education,
  experience,
  navLinks,
  profile,
  projects,
  skills,
} from "@/data/profile";

const mono = "font-mono text-xs tracking-[0.12em] uppercase";
const btn =
  "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors";
const btnSolid = `${btn} bg-ink text-paper hover:bg-accent`;
const btnLine = `${btn} border border-rule text-ink hover:border-ink`;

function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="grid gap-6 border-t border-rule py-16 md:grid-cols-[180px_1fr] md:gap-12 md:py-24">
      <p className={`${mono} text-ink-3 md:sticky md:top-24 md:self-start`}>
        <span className="text-accent">{index}</span> / {label}
      </p>
      <div>
        <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-6xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
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
              i === steps.length - 1 ? "border-accent bg-accent-soft text-ink" : "border-rule bg-paper"
            }`}
          >
            {s}
          </span>
          {i < steps.length - 1 && <span className="px-1.5 text-ink-3">→</span>}
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
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="mt-16 h-24 w-full md:h-32" aria-hidden>
      <path d={ecgPath} pathLength={1000} fill="none" stroke="var(--rule)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      <path
        d={ecgPath}
        pathLength={1000}
        className="ecg-pulse"
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Home() {
  const [lead, last] = [
    profile.headline.split(" ").slice(0, -1).join(" "),
    profile.headline.split(" ").at(-1),
  ];

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-rule bg-paper/80 backdrop-blur">
        <nav className="relative mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 md:px-8">
          <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-10 font-serif text-3xl text-ink-2 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="decoration-accent decoration-2 underline-offset-8 hover:text-ink hover:italic hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className={`${btnSolid} ml-auto !py-2`}>Contact</a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-[1200px] px-4 md:px-8">
        {/* hero */}
        <section className="relative py-20 md:py-32">
          <div className="grid-paper pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden />
          <p className="relative inline-block font-serif text-5xl md:text-6xl">
            {profile.name.split(" ")[0]} <em>{profile.name.split(" ").slice(1).join(" ")}</em>
            <span className="text-accent">.</span>
            <svg viewBox="0 0 300 16" preserveAspectRatio="none" className="absolute -bottom-3 left-0 h-3 w-full" aria-hidden>
              <path
                d="M2 11 C 60 3, 140 3, 200 8 S 280 13, 298 5"
                pathLength={1}
                className="name-underline"
                fill="none"
                stroke="var(--accent)"
                strokeWidth={3}
                strokeLinecap="round"
              />
            </svg>
          </p>
          <h1 className="mt-10 font-serif text-6xl leading-[0.95] tracking-[-0.02em] md:text-[9rem]">
            {lead} <em className="text-accent">{last}</em>
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-lg text-ink-2">
              <span className="text-ink">{profile.role}.</span> {profile.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className={btnSolid}>View projects ↓</a>
              <a href="/resume.pdf" className={btnLine}>Résumé</a>
            </div>
          </div>
          <Heartbeat />
        </section>

        <div className="marquee -mx-4 overflow-hidden border-y border-rule py-5 md:-mx-8" aria-label="Tech stack">
          <ul className="marquee-track flex w-max gap-10 font-serif text-3xl text-ink-2">
            {[...stack, ...stack].map((t, i) => (
              <li key={i} className="flex items-center gap-10" aria-hidden={i >= stack.length}>
                {t}
                <span className="text-accent">✦</span>
              </li>
            ))}
          </ul>
        </div>

        <Section id="about" index="01" label="About" title={<>I care about what happens <em>after the demo.</em></>}>
          <p className="max-w-3xl font-serif text-3xl leading-snug md:text-4xl">{profile.about[0]}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{profile.about[1]}</p>
        </Section>

        <Section id="skills" index="02" label="Skills" title={<>What I <em>work with</em></>}>
          <dl className="divide-y divide-rule border-y border-rule">
            {skills.map((g) => (
              <div key={g.title} className="grid gap-3 py-6 md:grid-cols-[280px_1fr] md:gap-8">
                <dt>
                  <p className="font-medium">{g.title}</p>
                  <p className="mt-1 text-sm text-ink-3">{g.blurb}</p>
                </dt>
                <dd className="flex flex-wrap content-start gap-2">
                  {g.items.map((i) => (
                    <span key={i} className="rounded-full border border-rule px-3 py-1 text-sm text-ink-2">
                      {i}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" index="03" label="Experience" title={<>Where I&apos;ve <em>shipped</em></>}>
          <ol className="border-t border-rule">
            {experience.map((e, idx) => (
              <li key={e.company} className="grid gap-4 border-b border-rule py-8 md:grid-cols-[200px_1fr] md:gap-8">
                <div className={`${mono} text-ink-3`}>
                  <p>{e.period}</p>
                  <p className="mt-1">{e.location}</p>
                  {idx === 0 && <p className="mt-3 text-accent">● Current</p>}
                </div>
                <div>
                  <h3 className="font-serif text-3xl">{e.company}</h3>
                  <p className="text-ink-2">{e.role}</p>
                  <ul className="mt-4 space-y-2 text-ink-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-accent">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" index="04" label="Projects" title={<>Selected <em>projects</em></>}>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p, i) => (
              <article key={p.title} className="flex flex-col rounded-2xl border border-rule bg-paper-2 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className={`${mono} text-ink-3`}>P.{String(i + 1).padStart(2, "0")}</span>
                  <span className={`${mono} rounded-full bg-ink px-3 py-1 text-paper`}>{p.metric}</span>
                </div>
                <h3 className="mt-6 font-serif text-4xl leading-tight">{p.title}</h3>
                <div className="mt-5">
                  <Flow steps={p.flow} />
                </div>
                <p className="mt-6 text-ink-2">{p.blurb}</p>
                <p className={`${mono} mt-auto pt-6 text-ink-3`}>{p.stack.join(" · ")}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" index="05" label="Education" title={<>Where I <em>learned</em></>}>
          <ul className="border-t border-rule">
            {education.map((e) => (
              <li key={e.degree} className="grid gap-1 border-b border-rule py-6 md:grid-cols-[1fr_auto] md:items-baseline">
                <div>
                  <p className="font-serif text-2xl">{e.degree}</p>
                  <p className="text-ink-2">{e.school}</p>
                </div>
                <p className={`${mono} text-ink-3`}>{e.period}</p>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      {/* contact */}
      <footer id="contact" className="mt-8 bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-4 py-20 md:px-8 md:py-28">
          <p className={`${mono} text-paper/60`}>
            <span className="text-accent">06</span> / Contact
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-none md:text-8xl">
            Let&apos;s build <em className="text-accent">something.</em>
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-block border-b border-paper/30 pb-1 text-xl break-all hover:border-accent hover:text-accent md:text-3xl"
          >
            {profile.email} ↗
          </a>
          <div className="mt-16 flex flex-col gap-6 border-t border-paper/15 pt-8 text-sm text-paper/60 md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-6">
              <li><a href={profile.github} className="hover:text-paper">GitHub ↗</a></li>
              <li><a href={profile.linkedin} className="hover:text-paper">LinkedIn ↗</a></li>
              <li><a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-paper">{profile.phone}</a></li>
            </ul>
            <p>{profile.location} · © 2026 {profile.name}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
