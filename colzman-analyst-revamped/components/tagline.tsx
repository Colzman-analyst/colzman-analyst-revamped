'use client'

import { useEffect, useRef } from 'react'
import { tagline } from '@/lib/data'

/**
 * Each word starts muted (30%) and lights up to full colour as it crosses a
 * trigger line 35% up from the bottom of the viewport, in reading order.
 * One IntersectionObserver for every word. Words stay lit once read.
 */
export function Tagline() {
  const root = useRef<HTMLParagraphElement | null>(null)
  const words = tagline.text.split(' ')

  useEffect(() => {
    const node = root.current
    if (!node) return
    const spans = Array.from(node.querySelectorAll<HTMLElement>('.word'))

    if (typeof IntersectionObserver === 'undefined') {
      spans.forEach((s) => s.setAttribute('data-on', 'true'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // If several words cross at once (anchor jump), keep reading order
        const crossing = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => Number(a.target.getAttribute('data-i')) - Number(b.target.getAttribute('data-i')))
        crossing.forEach((entry, k) => {
          const el = entry.target as HTMLElement
          el.style.transitionDelay = `${Math.min(k * 35, 400)}ms`
          el.setAttribute('data-on', 'true')
          observer.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -35% 0px', threshold: 0 },
    )
    spans.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <section aria-label="Approach" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-24">
      <p
        ref={root}
        className="max-w-[680px] text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
      >
        {words.map((w, i) => (
          <span key={i}>
            <span className="word" data-i={i}>
              {w}
            </span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </p>
    </section>
  )
}
