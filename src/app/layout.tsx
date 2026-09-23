import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://ayushranjan.dev";
const description =
  "Ayush Ranjan — AI/ML Engineer, Data Scientist and Software Engineer. Generative AI and RAG pipelines, deep learning and statistical modelling, and the FastAPI backends, tests and CI that ship them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: `${profile.name} — AI/ML Engineer · Data Scientist · Software Engineer`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Ayush Ranjan",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Software Development Engineer",
    "SDE",
    "Backend Developer",
    "Generative AI",
    "RAG",
    "LangGraph",
    "LangChain",
    "FastAPI",
    "Python",
    "Deep Learning",
    "Data Analysis",
    "MCP",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: SITE }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: SITE,
    title: `${profile.name} — AI/ML Engineer · Data Scientist · Software Engineer`,
    description,
    siteName: `${profile.name} · Portfolio`,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI/ML Engineer · Data Scientist · Software Engineer`,
    description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07080d" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
  ],
};

/** Applies the stored theme before paint so there is no flash of the wrong one. */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    document.documentElement.dataset.theme = (t === 'light' || t === 'dark') ? t : 'dark';
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: ["AI/ML Engineer", "Data Scientist", "Software Development Engineer"],
  email: `mailto:${profile.email}`,
  url: SITE,
  sameAs: [profile.github, profile.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Darbhanga", addressRegion: "Bihar", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Lovely Professional University" },
  knowsAbout: [
    "Generative AI",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
    "Statistical Modeling",
    "NLP",
    "Computer Vision",
    "Python",
    "FastAPI",
    "REST API Design",
    "Data Structures and Algorithms",
    "Docker",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
