"use client";

import { useEffect, useRef, useState } from "react";

const H = 280;
/** grid cell size; the plot's width follows its container, so the column count does too */
const CELL = H / 8;
const SAMPLES = 320;
/** seconds each graph plays before switching to the next */
const CYCLE = 8;

type Pt = [number, number];
type Graph = {
  name: string;
  formula: string;
  x: [number, number];
  y: [number, number];
  /** main curve, faint reference curve and tracer dot at time t (0..CYCLE) */
  frame: (t: number) => { main: Pt[]; ref?: Pt[]; dot: Pt };
};

const sample = (x0: number, x1: number, f: (x: number) => number): Pt[] =>
  Array.from({ length: SAMPLES + 1 }, (_, i) => {
    const x = x0 + ((x1 - x0) * i) / SAMPLES;
    return [x, f(x)];
  });

// a dot that walks left to right along the curve once per cycle
const walk = (t: number, [x0, x1]: [number, number], f: (x: number) => number): Pt => {
  const x = x0 + Math.min(1, t / CYCLE) * (x1 - x0);
  return [x, f(x)];
};

const graphs: Graph[] = [
  {
    name: "Fourier series",
    formula: "f(x) = 4/π · Σ sin((2k+1)x) / (2k+1)",
    x: [-2 * Math.PI, 2 * Math.PI],
    y: [-1.6, 1.6],
    frame: (t) => {
      // add one harmonic at a time, reaching 12 by the end of the cycle
      const n = Math.min(12, 1 + Math.floor((t / CYCLE) * 12));
      const f = (x: number) => {
        let s = 0;
        for (let k = 0; k < n; k++) s += Math.sin((2 * k + 1) * x) / (2 * k + 1);
        return (4 / Math.PI) * s;
      };
      return {
        main: sample(-2 * Math.PI, 2 * Math.PI, f),
        ref: sample(-2 * Math.PI, 2 * Math.PI, (x) => Math.sign(Math.sin(x))),
        dot: walk(t, [-2 * Math.PI, 2 * Math.PI], f),
      };
    },
  },
  {
    name: "Sigmoid",
    formula: "σ(x) = 1 / (1 + e^(−kx))",
    x: [-6, 6],
    y: [-0.2, 1.2],
    frame: (t) => {
      const k = 0.6 + 1.7 * (1 + Math.sin(t * 0.9));
      const f = (x: number) => 1 / (1 + Math.exp(-k * x));
      return {
        main: sample(-6, 6, f),
        // derivative σ' = σ(1−σ)·k, scaled to sit under the curve
        ref: sample(-6, 6, (x) => (f(x) * (1 - f(x)) * k) / Math.max(1, k / 2)),
        dot: walk(t, [-6, 6], f),
      };
    },
  },
  {
    name: "Gaussian",
    formula: "N(x) = e^(−(x−μ)² / 2σ²) / σ√(2π)",
    x: [-5, 5],
    y: [-0.06, 0.62],
    frame: (t) => {
      const mu = 1.6 * Math.sin(t * 0.7);
      const sd = 1 + 0.35 * Math.sin(t * 1.3);
      const pdf = (m: number, s: number) => (x: number) =>
        Math.exp(-((x - m) ** 2) / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI));
      return {
        main: sample(-5, 5, pdf(mu, sd)),
        ref: sample(-5, 5, pdf(0, 1)),
        dot: walk(t, [-5, 5], pdf(mu, sd)),
      };
    },
  },
  {
    name: "Lissajous",
    formula: "x = sin(3s + δ),  y = sin(2s)",
    x: [-2.2, 2.2],
    y: [-1.25, 1.25],
    frame: (t) => {
      const d = t * 0.45;
      const p = (s: number): Pt => [1.6 * Math.sin(3 * s + d), Math.sin(2 * s)];
      return {
        main: Array.from({ length: SAMPLES + 1 }, (_, i) => p((2 * Math.PI * i) / SAMPLES)),
        dot: p((2 * Math.PI * t) / CYCLE),
      };
    },
  },
];

/** Animated plot of a few functions behind ML, cycling through them automatically. */
export default function MathGraph() {
  const [t, setT] = useState(6);
  const box = useRef<HTMLDivElement>(null);
  const [W, setW] = useState(800);

  // draw at the container's real pixel width so the plot stretches edge to edge without growing taller
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(Math.max(320, Math.round(e.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // anchor to the first frame's own timestamp: rAF times can precede performance.now(), which made t negative
    let start: number | undefined;
    let id = requestAnimationFrame(function tick(now) {
      start ??= now;
      setT((now - start) / 1000);
      id = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const g = graphs[Math.floor(t / CYCLE) % graphs.length];
  const { main, ref, dot } = g.frame(t % CYCLE);
  const sx = (x: number) => ((x - g.x[0]) / (g.x[1] - g.x[0])) * W;
  const sy = (y: number) => H - ((y - g.y[0]) / (g.y[1] - g.y[0])) * H;
  const path = (pts: Pt[]) =>
    pts.map(([x, y], i) => `${i ? "L" : "M"}${sx(x).toFixed(1)} ${sy(y).toFixed(1)}`).join("");
  // the dot takes the line's colour at its horizontal position
  const blue = Math.round(Math.min(1, Math.max(0, sx(dot[0]) / W)) * 100);
  const dotColor = `color-mix(in srgb, var(--siren-blue) ${blue}%, var(--siren-red))`;

  return (
    // no border or surface: the grid sits straight on the page and fades out at the top and bottom
    <div className="overflow-hidden">
      <div ref={box} className="relative py-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`${g.name}: ${g.formula}`}>
          <defs>
            {/* red on the left fading to blue on the right, matching the siren lights behind the page */}
            <linearGradient id="siren-stroke" gradientUnits="userSpaceOnUse" x1={0} x2={W} y1={0} y2={0}>
              <stop offset="0" style={{ stopColor: "var(--siren-red)" }} />
              <stop offset="1" style={{ stopColor: "var(--siren-blue)" }} />
            </linearGradient>
            {/* glow that keeps the stroke's own colours instead of a single shadow colour */}
            <filter id="siren-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* fades the grid and axes to nothing at the top and bottom edges, so there's no hard line */}
            <linearGradient id="grid-fade" x1={0} x2={0} y1={0} y2={1}>
              <stop offset="0" stopColor="#fff" stopOpacity={0} />
              <stop offset="0.25" stopColor="#fff" stopOpacity={1} />
              <stop offset="0.75" stopColor="#fff" stopOpacity={1} />
              <stop offset="1" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <mask id="grid-mask">
              <rect width={W} height={H} fill="url(#grid-fade)" />
            </mask>
          </defs>

          <g mask="url(#grid-mask)">
            {/* grid */}
            {Array.from({ length: Math.floor(W / CELL) + 1 }, (_, i) => (
              <line key={`v${i}`} x1={CELL * i} x2={CELL * i} y1={0} y2={H} stroke="var(--rule)" strokeOpacity={0.55} strokeWidth={1} />
            ))}
            {Array.from({ length: 9 }, (_, i) => (
              <line key={`h${i}`} x1={0} x2={W} y1={(H / 8) * i} y2={(H / 8) * i} stroke="var(--rule)" strokeOpacity={0.55} strokeWidth={1} />
            ))}

            {/* axes */}
            <line x1={0} x2={W} y1={sy(0)} y2={sy(0)} stroke="var(--ink-3)" strokeWidth={1.5} />
            <line x1={sx(0)} x2={sx(0)} y1={0} y2={H} stroke="var(--ink-3)" strokeWidth={1.5} />
          </g>

          {ref && (
            <path d={path(ref)} fill="none" stroke="var(--ink-3)" strokeWidth={1.5} strokeDasharray="6 6" opacity={0.7} />
          )}
          <path
            d={path(main)}
            fill="none"
            stroke="url(#siren-stroke)"
            strokeWidth={3}
            strokeLinejoin="round"
            filter="url(#siren-glow)"
          />
          <circle cx={sx(dot[0])} cy={sy(dot[1])} r={6} fill={dotColor} style={{ filter: `drop-shadow(0 0 8px ${dotColor})` }} />
        </svg>
        <p className="pt-3 text-center font-mono text-sm text-ink-2">{g.formula}</p>
      </div>
    </div>
  );
}
