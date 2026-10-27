import { skillGroups } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Certifications } from '@/components/certifications'

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-24 border-t border-border bg-card"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-24">
        <SectionHeading
          id="skills-title"
          title="Skills and tools"
          description="Built through real projects and self directed learning, from querying and cleaning to modelling and reporting."
        />

        <Reveal>
          <dl className="mt-12 divide-y divide-border border-y border-border">
            {skillGroups.map((group) => (
              <div key={group.title} className="grid gap-1 py-4 md:grid-cols-[14rem_1fr] md:gap-8">
                <dt className="text-base font-semibold text-foreground">{group.title}</dt>
                <dd className="text-pretty text-base text-muted-foreground">
                  {group.items.join(', ')}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Certifications />
      </div>
    </section>
  )
}
