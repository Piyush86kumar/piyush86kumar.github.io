import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/content'
import ProjectVisual from './ProjectVisual'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 md:py-28">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="eyebrow">Featured Projects</span>
          <h2 className="section-heading mt-4">What I've actually shipped.</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
            Four systems, four different problems — a common thread of taking things from
            "it works on my machine" to something running against real traffic or real stakes.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <ProjectVisual kind={p.kind} />

              <div>
                <span className="chip">{p.kind}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{p.name}</h3>
                <p className="mt-1 text-[14px] text-ink-faint">{p.tagline}</p>

                <div className="mt-5 inline-flex items-baseline gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2.5">
                  <span className="font-display text-xl font-semibold text-signal">{p.metric.value}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">{p.metric.label}</span>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {p.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2.5 text-[14.5px] leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>

                {(p.links.demo || p.links.code || p.links.report) && (
                  <div className="mt-6 flex flex-wrap gap-5">
                    {p.links.demo && (
                      <a href={p.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent-bright hover:underline">
                        Live demo <ExternalLink size={14} />
                      </a>
                    )}
                    {p.links.code && (
                      <a href={p.links.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent-bright hover:underline">
                        View code <Github size={14} />
                      </a>
                    )}
                    {p.links.report && (
                      <a href={p.links.report} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent-bright hover:underline">
                        Read report <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
