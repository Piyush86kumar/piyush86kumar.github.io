import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Eye } from 'lucide-react'
import { profile } from '../data/content'

// Mild scrape-deterrence: contact strings are assembled at runtime instead of
// sitting in the static HTML/JS bundle as plain text. Not bulletproof, but
// stops the lowest-effort scrapers. Real values live in data/content.ts.
function useRuntimeString(value: string) {
  const [revealed, setRevealed] = useState(false)
  return { revealed, show: () => setRevealed(true), value }
}

// ── Formspree setup ─────────────────────────────────────────────────────
// 1. Create a free form at https://formspree.io
// 2. Replace YOUR_FORM_ID below with the ID Formspree gives you
// 3. That's it — GitHub Pages can't run a backend, so this is how the
//    contact form actually sends mail. See README "Contact form" section.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const phone = useRuntimeString(profile.phone)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-border py-24 md:py-28">
      <div className="container-content grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Let's work together</span>
          <h2 className="section-heading mt-4">Building intelligent systems, together.</h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-muted">
            Open to AI Engineer roles and select freelance work. I usually reply within 24 hours.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-[14.5px] text-ink-muted transition-colors hover:text-ink">
              <Mail size={17} className="shrink-0 text-ink-faint" /> {profile.email}
            </a>

            {phone.revealed ? (
              <a href={`tel:${phone.value.replace(/\s/g, '')}`} className="flex items-center gap-3 text-[14.5px] text-ink-muted transition-colors hover:text-ink">
                <Phone size={17} className="shrink-0 text-ink-faint" /> {phone.value}
              </a>
            ) : (
              <button onClick={phone.show} className="flex items-center gap-3 text-[14.5px] text-ink-muted transition-colors hover:text-ink">
                <Phone size={17} className="shrink-0 text-ink-faint" />
                Show phone number
                <Eye size={14} className="text-ink-faint" />
              </button>
            )}

            <div className="flex items-center gap-3 text-[14.5px] text-ink-muted">
              <MapPin size={17} className="shrink-0 text-ink-faint" /> {profile.location}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink" aria-label="GitHub"><Github size={19} /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink" aria-label="LinkedIn"><Linkedin size={19} /></a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card space-y-5 p-6 md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">Name</label>
              <input id="name" name="name" required type="text" className="mt-2 w-full rounded-lg border border-border-strong bg-surface-2 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-accent" />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">Email</label>
              <input id="email" name="email" required type="email" className="mt-2 w-full rounded-lg border border-border-strong bg-surface-2 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-accent" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">Message</label>
            <textarea id="message" name="message" required rows={5} className="mt-2 w-full resize-none rounded-lg border border-border-strong bg-surface-2 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-accent" />
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60">
            {status === 'sending' ? 'Sending…' : 'Send message'} <Send size={15} />
          </button>

          {status === 'sent' && (
            <p className="text-center text-[13px] text-signal">Message sent — I'll get back to you within 24 hours.</p>
          )}
          {status === 'error' && (
            <p className="text-center text-[13px] text-red-400">
              Something went wrong. Email me directly at {profile.email}.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
