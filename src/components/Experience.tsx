import { motion } from 'framer-motion'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 md:py-28">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="eyebrow">Experience</span>
          <h2 className="section-heading mt-4">Two roles, one throughline.</h2>
        </motion.div>

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[7px]" />

          <div className="space-y-14">
            {experience.map((e, i) => (
              <motion.div
                key={e.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-9"
              >
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-bg bg-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-bg" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-ink">{e.role}</h3>
                  <span className="font-mono text-[12px] text-ink-faint">{e.period}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 text-[14px] text-accent-bright">
                  <span>{e.org}</span>
                  <span className="text-ink-faint">·</span>
                  <span className="text-ink-faint">{e.location}</span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {e.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2.5 text-[14.5px] leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
