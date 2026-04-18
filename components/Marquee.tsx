"use client";

type Props = {
  items: string[];
  speed?: number;
};

export default function Marquee({ items, speed = 40 }: Props) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-wrap" aria-hidden>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {loop.map((it, i) => (
          <span key={i} className="marquee-item">
            <span className="label-dot">●</span>
            <span>{it}</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        .marquee-wrap {
          overflow: hidden;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          mask-image: linear-gradient(
            90deg,
            transparent 0,
            black 8%,
            black 92%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0,
            black 8%,
            black 92%,
            transparent 100%
          );
        }
        .marquee-track {
          display: flex;
          gap: 3rem;
          white-space: nowrap;
          animation: marquee linear infinite;
          padding: 1rem 0;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--foreground);
        }
        .label-dot {
          color: var(--accent);
          font-size: 0.7rem;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
