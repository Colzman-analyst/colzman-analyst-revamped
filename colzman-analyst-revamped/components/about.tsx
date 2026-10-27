import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { aboutHighlights, aboutParagraphs, profile } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 border-y border-border bg-card"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-24">
        <SectionHeading id="about-title" title="The analyst who asks why" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <div className="flex max-w-[680px] flex-col gap-4 text-pretty text-lg text-muted-foreground">
              {aboutParagraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group press inline-flex items-center gap-1 self-start rounded-full py-2 text-base font-semibold text-foreground hover:text-primary"
            >
              Connect on LinkedIn
              <ArrowUpRight
                className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>

          <Reveal delay={80}>
            <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <div key={item.title}>
                  <dt className="text-base font-semibold text-foreground">{item.title}</dt>
                  <dd className="mt-1 text-pretty text-sm text-muted-foreground">{item.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
