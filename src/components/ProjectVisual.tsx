import type { Project } from '../data/content'

// Abstract, kind-specific visual used until real project screenshots are added.
// Swap these for actual product screenshots/GIFs in /public/projects/ — see README.
// Each pattern is deliberately non-literal (grid/graph/waveform motifs) so it never
// pretends to be a real screenshot.

function RagVisual() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <defs>
        <radialGradient id="ragGlow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#8B7CFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#ragGlow)" />
      {[
        [80, 70], [200, 50], [320, 90], [110, 150], [260, 170], [200, 130], [340, 190], [60, 200],
      ].map(([x, y], i) => (
        <g key={i}>
          {i > 0 && (
            <line x1={200} y1={130} x2={x} y2={y} stroke="#34343F" strokeWidth="1" />
          )}
        </g>
      ))}
      {[
        [80, 70], [200, 50], [320, 90], [110, 150], [260, 170], [340, 190], [60, 200],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4} fill="#5C5C6B" />
      ))}
      <circle cx={200} cy={130} r={7} fill="#4FE3C9" />
      <circle cx={200} cy={130} r={13} fill="none" stroke="#4FE3C9" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

function MlVisual() {
  const bars = [22, 38, 30, 55, 42, 68, 50, 74, 60, 90, 70, 84]
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <line x1="40" y1="210" x2="380" y2="210" stroke="#26262F" strokeWidth="1" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={50 + i * 27}
          y={210 - h}
          width="14"
          height={h}
          rx="2"
          fill={i === 9 ? '#4FE3C9' : '#3a3a46'}
        />
      ))}
      <path
        d={`M50 ${210 - 20} ${bars.map((h, i) => `L ${57 + i * 27} ${210 - h - 14}`).join(' ')}`}
        fill="none"
        stroke="#8B7CFF"
        strokeWidth="1.5"
        opacity="0.7"
      />
    </svg>
  )
}

function DataVisual() {
  const pts = Array.from({ length: 40 }, () => ({
    x: 30 + Math.random() * 340,
    y: 30 + Math.random() * 200,
    r: 2 + Math.random() * 4,
  }))
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 32} x2="400" y2={i * 32} stroke="#1B1B22" strokeWidth="1" />
      ))}
      {pts.map((p, idx) => (
        <circle key={idx} cx={p.x} cy={p.y} r={p.r} fill={idx % 7 === 0 ? '#4FE3C9' : '#5B4FCB'} opacity={0.55} />
      ))}
    </svg>
  )
}

function GenAiVisual() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <defs>
        <linearGradient id="genaiGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B7CFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4FE3C9" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      {Array.from({ length: 5 }).map((_, i) => (
        <circle
          key={i}
          cx={90 + i * 55}
          cy={130 + Math.sin(i) * 40}
          r={38 - i * 3}
          fill="url(#genaiGrad)"
        />
      ))}
    </svg>
  )
}

const map: Record<Project['kind'], () => JSX.Element> = {
  RAG: RagVisual,
  ML: MlVisual,
  Data: DataVisual,
  GenAI: GenAiVisual,
}

export default function ProjectVisual({ kind }: { kind: Project['kind'] }) {
  const Visual = map[kind]
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-surface-2">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <Visual />
    </div>
  )
}
