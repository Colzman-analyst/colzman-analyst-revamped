import { ArrowDown } from '@phosphor-icons/react/dist/ssr'
import { profile } from '@/lib/data'
import { QueryConsole } from '@/components/query-console'

export function Hero() {
  // Geist's capital I looks like a lowercase l, so the name is set in Geist Mono
  const intro = profile.intro.split(profile.name)
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 pb-0 pt-24 md:px-8 md:pt-24">
      <h1
        className="hero-in hero-title mt-4 max-w-[680px] text-balance pb-1 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
        style={{ ['--d' as string]: '0ms' }}
      >
        I turn messy data into decisions people act on.
      </h1>

      <p
        className="hero-in mt-6 max-w-[680px] text-pretty text-lg text-muted-foreground"
        style={{ ['--d' as string]: '120ms' }}
      >
        {intro[0]}
        <span className="font-mono text-base font-medium text-foreground">{profile.name}</span>
        {intro[1]}
      </p>

      <div
        className="hero-in mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
        style={{ ['--d' as string]: '240ms' }}
      >
        <a
          href="#projects"
          className="press inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90"
        >
          See the projects
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="press rounded-full py-3 text-base font-semibold text-foreground underline decoration-border decoration-2 underline-offset-8 hover:decoration-primary"
        >
          Get in touch
        </a>
        <p className="text-sm text-muted-foreground">Open to remote and global roles</p>
      </div>

      <div className="mt-16">
        <QueryConsole />
      </div>
    </section>
  )
}
