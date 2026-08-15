import { GithubIcon, LinkedinIcon } from './Icons'
import { social } from '../data/personal'

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Pradnesh A. Built with precision.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-text-primary"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-text-primary"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${social.email}`}
            className="text-text-muted transition-colors hover:text-text-primary"
            aria-label="Email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
