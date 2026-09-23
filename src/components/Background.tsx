/** Fixed ambient layer: grid, drifting colour orbs and a faint noise wash. */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* grid, faded out toward the edges */}
      <div
        className="grid-bg absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 35%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 35%, transparent 78%)",
        }}
      />

      {/* colour orbs */}
      <div
        className="float-slow absolute -top-40 left-[-10%] h-[36rem] w-[36rem] rounded-full opacity-[0.28] blur-[110px]"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="float-slow absolute -right-32 top-[18%] h-[30rem] w-[30rem] rounded-full opacity-[0.22] blur-[120px]"
        style={{ background: "var(--accent-2)", animationDelay: "-4s" }}
      />
      <div
        className="float-slow absolute bottom-[-12rem] left-[30%] h-[34rem] w-[34rem] rounded-full opacity-[0.16] blur-[130px]"
        style={{ background: "var(--accent-3)", animationDelay: "-7s" }}
      />

      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.028] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
