import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

export function SectionHeading({
  id,
  title,
  description,
}: {
  id?: string
  title: ReactNode
  description?: string
}) {
  return (
    <Reveal className="max-w-[680px]">
      <h2
        id={id}
        className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg text-muted-foreground">{description}</p>
      )}
    </Reveal>
  )
}
