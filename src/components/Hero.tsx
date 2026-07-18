import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { heroStats, profile } from '../data/content'
import TelemetryPanel from './TelemetryPanel'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[150px] pb-20 md:pt-[170px] md:pb-28">
      <div className="container-content grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {profile.role} · {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 font-display text-[40px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[54px]"
          >
            I build AI systems that make it to production —
            <span className="text-accent-bright"> not just to a notebook.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-muted"
          >
            Agentic RAG pipelines, fine-tuned LLMs, and real-time inference APIs running in
            industrial environments. Five years across ML engineering and enterprise
            AI solutioning — so I build for the constraint that actually matters to the business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's talk <Mail size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-7 max-w-lg"
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-semibold text-ink">{s.value}</div>
                <div className="mt-1 font-mono text-[11px] leading-tight text-ink-faint">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <TelemetryPanel />
        </div>
      </div>
    </section>
  )
}
