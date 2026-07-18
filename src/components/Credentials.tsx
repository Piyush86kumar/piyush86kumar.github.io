import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { certifications, education } from '../data/content'

export default function Credentials() {
  return (
    <section className="border-t border-border py-24 md:py-28">
      <div className="container-content grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Certifications</span>
          <h2 className="section-heading mt-4">Formal signal, kept short.</h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-muted">
            I'd rather show three credentials that mean something than a wall of badges.
          </p>
        </motion.div>

        <div>
          <div className="divide-y divide-border rounded-xl border border-border">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-4"
              >
                <div>
                  <div className="text-[14.5px] font-medium text-ink">{c.name}</div>
                  <div className="mt-0.5 text-[13px] text-ink-faint">{c.issuer}</div>
                </div>
                <span className="font-mono text-[12px] text-ink-faint">{c.date}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 flex items-center gap-3 px-1"
          >
            <GraduationCap size={17} className="shrink-0 text-ink-faint" />
            <div className="text-[14px] text-ink-muted">
              <span className="text-ink">{education.degree}</span> — {education.school}
              <span className="ml-2 font-mono text-[12px] text-ink-faint">{education.period}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
