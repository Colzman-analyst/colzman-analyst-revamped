import { ArrowUp } from '@phosphor-icons/react/dist/ssr'
import { profile } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div
        className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:px-8"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 32px)' }}
      >
        <p>
          © {new Date().getFullYear()} <span className="font-mono text-foreground">{profile.name}</span>. Built in {profile.location}.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary"
          >
            {profile.githubHandle}
          </a>
          <a href="#top" className="press inline-flex items-center gap-1 font-medium text-foreground hover:text-primary">
            Back to top
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
