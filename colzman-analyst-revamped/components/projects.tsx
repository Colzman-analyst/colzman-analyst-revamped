import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { projects } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 md:px-8 md:py-24"
    >
      <SectionHeading
        id="projects-title"
        title="Projects"
        description="Two machine learning projects with a business outcome attached, then the analysis and reporting work I do day to day."
      />

      <div className="mt-12 flex flex-col gap-6">
        {featured.map((project) => (
          <Reveal key={project.title}>
            <article className="grid gap-8 rounded-2xl border border-border bg-card p-6 md:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-primary">{project.badge}</p>
                <h3 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-4 text-pretty text-base text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-6 font-mono text-sm text-muted-foreground">
                  {project.tags.join(', ')}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group press mt-6 inline-flex items-center gap-1 self-start rounded-full py-2 text-base font-semibold text-foreground hover:text-primary"
                >
                  {project.cta}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              {project.metrics && (
                <dl className="grid divide-y divide-border self-start overflow-hidden rounded-xl border border-border bg-background">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex items-baseline justify-between gap-4 px-4 py-3">
                      <dt className="text-sm text-muted-foreground">{m.label}</dt>
                      <dd className="font-mono text-xl font-semibold text-foreground tabular">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </article>
          </Reveal>
        ))}

        <Reveal>
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {rest.map((project) => (
              <li key={project.title}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-2 px-6 py-6 transition-colors duration-200 hover:bg-accent/60 active:bg-accent md:grid-cols-[1fr_1.4fr_11rem] md:items-start md:gap-8 md:px-8"
                >
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-mono text-sm text-muted-foreground">
                      {project.tags.join(', ')}
                    </p>
                  </div>
                  <p className="text-pretty text-base text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-base font-semibold text-foreground group-hover:text-primary md:justify-end">
                    {project.cta}
                    <ArrowUpRight
                      className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
