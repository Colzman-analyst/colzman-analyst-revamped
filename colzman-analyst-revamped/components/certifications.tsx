import { certifications } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function Certifications() {
  return (
    <div className="mt-20">
      <Reveal>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">Training and credentials</h3>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="grid gap-2 py-6 md:grid-cols-[1fr_1.4fr_7rem] md:items-start md:gap-8"
            >
              <div>
                <h4 className="text-lg font-semibold tracking-tight text-foreground">{cert.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.org}, {cert.period}
                </p>
              </div>
              <p className="text-pretty text-base text-muted-foreground">{cert.text}</p>
              <p
                className={cn(
                  'w-fit rounded-full border px-3 py-0.5 text-sm font-medium md:justify-self-end',
                  cert.status === 'Completed'
                    ? 'border-primary/40 text-primary'
                    : 'border-border text-muted-foreground',
                )}
              >
                {cert.status}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}
