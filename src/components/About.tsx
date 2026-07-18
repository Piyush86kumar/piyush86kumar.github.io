import { motion } from 'framer-motion'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-28">
      <div className="container-content grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="section-heading mt-4 max-w-lg">{about.heading}</h2>
          </motion.div>

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="max-w-xl text-[16px] leading-relaxed text-ink-muted"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card h-fit divide-y divide-border self-start"
        >
          {about.signals.map((s) => (
            <div key={s.k} className="flex items-center justify-between gap-4 px-5 py-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">{s.k}</span>
              <span className="text-right text-[14px] text-ink">{s.v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
