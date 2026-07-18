import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-content flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-[12px] text-ink-faint">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-accent/15 text-[10px] text-accent-bright">
            {profile.initials}
          </span>
          © {new Date().getFullYear()} {profile.name}
        </div>
        <div className="font-mono text-[12px] text-ink-faint">
          Built with React · Tailwind · deployed on GitHub Pages
        </div>
      </div>
    </footer>
  )
}
