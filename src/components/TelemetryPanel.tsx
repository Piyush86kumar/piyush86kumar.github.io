import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { telemetryLines } from '../data/content'

function useTicker(base: number, jitter: number, intervalMs: number) {
  const [value, setValue] = useState(base)
  useEffect(() => {
    const id = setInterval(() => {
      setValue(Math.round((base + (Math.random() - 0.5) * jitter) * 10) / 10)
    }, intervalMs)
    return () => clearInterval(id)
  }, [base, jitter, intervalMs])
  return value
}

function Sparkline() {
  const points = useRef(
    Array.from({ length: 24 }, () => 30 + Math.random() * 30)
  )
  const [path, setPath] = useState('')

  useEffect(() => {
    const draw = () => {
      const pts = points.current
      const step = 220 / (pts.length - 1)
      const d = pts.map((y, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${60 - y}`).join(' ')
      setPath(d)
    }
    draw()
    const id = setInterval(() => {
      points.current = [...points.current.slice(1), 20 + Math.random() * 35]
      draw()
    }, 900)
    return () => clearInterval(id)
  }, [])

  return (
    <svg viewBox="0 0 220 60" className="h-14 w-full overflow-visible">
      <path d={path} fill="none" stroke="#4FE3C9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function TelemetryPanel() {
  const latency = useTicker(92, 40, 1800)
  const rps = useTicker(6.2, 2.4, 2200)
  const [logIdx, setLogIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setLogIdx((i) => (i + 1) % telemetryLines.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  const visibleLogs = [0, 1, 2].map((offset) => telemetryLines[(logIdx + offset) % telemetryLines.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      className="relative w-full max-w-md rounded-2xl border border-border bg-surface shadow-[0_0_0_1px_rgba(139,124,255,0.06),0_20px_60px_-20px_rgba(139,124,255,0.25)]"
    >
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[11px] tracking-wide text-ink-muted">system · online</span>
        </div>
        <span className="font-mono text-[11px] text-ink-faint">prod-inference-01</span>
      </div>

      {/* stat row */}
      <div className="grid grid-cols-2 gap-px border-b border-border bg-border">
        <div className="bg-surface px-4 py-3.5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">p50 latency</div>
          <div className="mt-1 font-display text-xl font-semibold text-ink">{latency}<span className="text-sm text-ink-faint">ms</span></div>
        </div>
        <div className="bg-surface px-4 py-3.5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">requests / sec</div>
          <div className="mt-1 font-display text-xl font-semibold text-ink">{rps}</div>
        </div>
      </div>

      {/* sparkline */}
      <div className="border-b border-border px-4 pt-3">
        <Sparkline />
      </div>

      {/* scrolling log */}
      <div className="space-y-2 px-4 py-4">
        {visibleLogs.map((line, i) => (
          <motion.div
            key={`${logIdx}-${i}`}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1 - i * 0.28, x: 0 }}
            transition={{ duration: 0.4 }}
            className="truncate font-mono text-[11px] text-ink-muted"
          >
            <span className="text-signal">›</span> {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
