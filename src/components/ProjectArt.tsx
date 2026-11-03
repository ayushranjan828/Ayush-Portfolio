// Cover illustrations for the project cards. They sit on an always-dark cover, so colours are fixed rather than themed.

export type Art = "agents" | "rag" | "vision" | "text";

const ink = "#eef0ff";
const dim = "rgba(238,240,255,0.45)";
const line = "rgba(238,240,255,0.16)";
const violet = "#8f78ff";
const cyan = "#22d3ee";
const green = "#34d399";
const red = "#ff5c7a";

function Arrow({ id, color }: { id: string; color: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10z" fill={color} />
    </marker>
  );
}

function Node({ x, label, color }: { x: number; label: string; color: string }) {
  return (
    <g>
      <rect x={x} y={58} width={100} height={34} rx={10} fill="rgba(255,255,255,0.06)" stroke={color} strokeOpacity={0.6} />
      <circle cx={x + 16} cy={75} r={5} fill={color} />
      <text x={x + 28} y={79} fill={ink} fontSize={12}>{label}</text>
    </g>
  );
}

function Agents() {
  return (
    <>
      <defs>
        <Arrow id="a-v" color={violet} />
        <Arrow id="a-c" color={cyan} />
      </defs>
      <Node x={18} label="Builder" color={violet} />
      <Node x={150} label="Reviewer" color={cyan} />
      <Node x={282} label="Human" color={green} />
      <path d="M78 56 Q134 14 186 56" fill="none" stroke={violet} strokeWidth={1.5} markerEnd="url(#a-v)" />
      <text x={116} y={30} fill={dim} fontSize={10}>draft</text>
      <path d="M190 94 Q134 136 82 94" fill="none" stroke={cyan} strokeWidth={1.5} strokeDasharray="4 4" markerEnd="url(#a-c)" />
      <text x={100} y={132} fill={dim} fontSize={10}>rework ≤3×</text>
      <path d="M252 75 L278 75" stroke={cyan} strokeWidth={1.5} markerEnd="url(#a-c)" />
      <path d="M326 100 l6 6 l12 -14" fill="none" stroke={green} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      <text x={300} y={128} fill={dim} fontSize={10}>approved ≤2×</text>
    </>
  );
}

function Rag() {
  const rows = [86, 70, 92, 60, 88, 74, 80];
  return (
    <>
      <defs>
        <Arrow id="r-c" color={cyan} />
      </defs>
      <rect x={34} y={14} width={116} height={128} rx={8} fill="rgba(255,255,255,0.06)" stroke={line} />
      <text x={46} y={33} fill={dim} fontSize={9}>labour_act.pdf</text>
      {rows.map((w, i) => (
        <rect key={i} x={46} y={44 + i * 13} width={w} height={5} rx={2.5} fill={i === 2 || i === 3 ? cyan : line} fillOpacity={i === 2 || i === 3 ? 0.7 : 1} />
      ))}
      <path d="M156 78 L200 78" stroke={cyan} strokeWidth={1.5} strokeDasharray="4 4" markerEnd="url(#r-c)" />
      <rect x={206} y={30} width={164} height={96} rx={12} fill="rgba(143,120,255,0.14)" stroke={violet} strokeOpacity={0.5} />
      <text x={220} y={50} fill={ink} fontSize={11}>Answer</text>
      <rect x={220} y={60} width={134} height={5} rx={2.5} fill={dim} />
      <rect x={220} y={72} width={118} height={5} rx={2.5} fill={dim} />
      <rect x={220} y={84} width={90} height={5} rx={2.5} fill={dim} />
      <rect x={220} y={98} width={78} height={18} rx={9} fill={cyan} />
      <text x={231} y={111} fill="#06141a" fontSize={10} fontWeight={700}>p.42 cited</text>
    </>
  );
}

function Vision() {
  return (
    <>
      {/* viewfinder corners */}
      <path d="M36 34 v-16 h16 M364 34 v-16 h-16 M36 126 v16 h16 M364 126 v16 h-16" fill="none" stroke={dim} strokeWidth={2} />
      {/* apple */}
      <circle cx={128} cy={92} r={24} fill={green} fillOpacity={0.85} />
      <path d="M128 68 q8 -12 18 -8 q-6 10 -18 8" fill={green} />
      <rect x={94} y={58} width={68} height={64} rx={4} fill="none" stroke={green} strokeWidth={1.5} strokeDasharray="5 3" />
      <rect x={94} y={42} width={88} height={16} rx={4} fill={green} />
      <text x={100} y={54} fill="#052016" fontSize={10} fontWeight={700}>organic 0.94</text>
      {/* bottle */}
      <rect x={250} y={46} width={14} height={14} rx={3} fill="#7fb4ff" fillOpacity={0.85} />
      <rect x={240} y={58} width={34} height={64} rx={9} fill="#7fb4ff" fillOpacity={0.7} />
      <rect x={228} y={40} width={58} height={88} rx={4} fill="none" stroke={red} strokeWidth={1.5} strokeDasharray="5 3" />
      <rect x={228} y={24} width={112} height={16} rx={4} fill={red} />
      <text x={234} y={36} fill="#2a0710" fontSize={10} fontWeight={700}>non-organic 0.91</text>
      {/* scan line */}
      <rect x={40} y={100} width={320} height={1.5} fill={cyan} fillOpacity={0.6} />
    </>
  );
}

function Text() {
  const next = [
    ["learn", 0.62],
    ["build", 0.23],
    ["travel", 0.09],
  ] as const;
  return (
    <>
      <defs>
        <linearGradient id="t-g" x1="0" x2="1">
          <stop offset="0" stopColor={violet} />
          <stop offset="1" stopColor={cyan} />
        </linearGradient>
      </defs>
      <rect x={30} y={18} width={340} height={40} rx={10} fill="rgba(255,255,255,0.06)" stroke={line} />
      <text x={46} y={43} fontSize={13}>
        <tspan fill={ink}>I would like to </tspan>
        <tspan fill={dim}>learn</tspan>
      </text>
      <rect x={168} y={29} width={1.5} height={18} fill={cyan} />
      {next.map(([word, p], i) => (
        <g key={word}>
          <text x={46} y={86 + i * 22} fill={i ? dim : ink} fontSize={11}>{word}</text>
          <rect x={104} y={78 + i * 22} width={200} height={8} rx={4} fill={line} />
          <rect x={104} y={78 + i * 22} width={200 * p} height={8} rx={4} fill="url(#t-g)" fillOpacity={i ? 0.55 : 1} />
          <text x={314} y={86 + i * 22} fill={dim} fontSize={10}>{Math.round(p * 100)}%</text>
        </g>
      ))}
    </>
  );
}

const arts = { agents: Agents, rag: Rag, vision: Vision, text: Text };

export default function ProjectArt({ art }: { art: Art }) {
  const Draw = arts[art];
  return (
    <svg viewBox="0 0 400 150" className="h-full w-full font-mono" aria-hidden>
      <Draw />
    </svg>
  );
}
