import { achievements } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Achievements() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-title"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 md:px-8 md:py-24"
    >
      <SectionHeading
        id="impact-title"
        title="Impact"
        description="Measured outcomes from reporting, data quality, teaching and modelling work."
      />

      <Reveal>
        <ul className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {achievements.map((item) => (
            <li
              key={item.title}
              className="grid gap-2 px-6 py-6 md:grid-cols-[10rem_1fr] md:items-baseline md:gap-8 md:px-8"
            >
              <p className="font-mono text-3xl font-semibold text-primary tabular">{item.value}</p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-1 max-w-[680px] text-pretty text-base text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
