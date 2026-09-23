import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "in/ayush-ranjan",
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "ayushranjan828",
    href: profile.github,
    Icon: GithubIcon,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Got an AI problem worth <span className="text-gradient">solving properly</span>?
        </>
      }
      lead="I'm open to AI/ML engineering roles and collaborations on generative AI products. The fastest way to reach me is email."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <Reveal className="h-full">
          <div className="conic-ring card relative flex h-full flex-col justify-between overflow-hidden p-8 sm:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Say hello
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-4 inline-flex items-start gap-2 font-display text-xl font-semibold tracking-tight break-all transition-colors hover:text-accent sm:text-2xl"
              >
                {profile.email}
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-faint">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.05 * i} className="h-full">
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card group flex h-full flex-col justify-between p-5 transition-all hover:-translate-y-1 hover:border-accent"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors group-hover:text-accent">
                  <c.Icon className="h-4 w-4" />
                </span>
                <span className="mt-6 block text-xs uppercase tracking-[0.16em] text-faint">
                  {c.label}
                </span>
                <span className="mt-1 block break-all text-sm font-medium">{c.value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
