import { useEffect, useState } from 'react'
import { Github, Linkedin, Menu, X, Download } from 'lucide-react'
import { profile, nav } from '../data/content'

function HFIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="10.5" r="1.1" fill="currentColor" />
      <circle cx="15.5" cy="10.5" r="1.1" fill="currentColor" />
      <path d="M8 14.2c1.1 1.4 2.4 2.1 4 2.1s2.9-.7 4-2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-content flex h-[76px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/15 text-[13px] font-mono text-accent-bright">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] tracking-wide text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-muted transition-colors hover:text-ink">
            <Github size={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-muted transition-colors hover:text-ink">
            <Linkedin size={18} />
          </a>
          <a href={profile.links.huggingface} target="_blank" rel="noreferrer" aria-label="HuggingFace" className="text-ink-muted transition-colors hover:text-ink">
            <HFIcon />
          </a>
          <a href={profile.resumeFile} download className="btn-primary !py-2.5 !px-4 !text-[13px]">
            Resume <Download size={14} />
          </a>
        </div>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden">
          <div className="container-content flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 font-mono text-sm text-ink-muted hover:bg-surface hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-5 px-2">
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-ink">
                <Github size={19} />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-ink">
                <Linkedin size={19} />
              </a>
              <a href={profile.links.huggingface} target="_blank" rel="noreferrer" aria-label="HuggingFace" className="text-ink-muted hover:text-ink">
                <HFIcon />
              </a>
            </div>
            <a href={profile.resumeFile} download className="btn-primary mt-3 justify-center !py-2.5 !text-[13px]">
              Resume <Download size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
