'use client'

import { useEffect, useState } from 'react'
import { navLinks, profile } from '@/lib/data'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

/**
 * Floating pill nav. On small screens it opens a full height panel whose
 * links rise in one after another (60ms apart, capped at 400ms).
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  // Which section is under the reading line
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n))
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
          else setActive((cur) => (cur === entry.target.id ? '' : cur))
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  // Lock page scroll and allow Escape while the panel is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4"
      style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 16px)' }}
    >
      <nav
        aria-label="Primary"
        className="pointer-events-auto relative z-50 flex h-12 w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-border bg-background/70 py-1 pl-6 pr-1 backdrop-blur-md"
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="press text-base font-semibold tracking-tight text-foreground"
        >
          {profile.short}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'press inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'bg-accent text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href="#contact"
            className="press hidden h-10 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90 md:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="press relative inline-flex size-10 items-center justify-center rounded-full text-foreground hover:bg-accent md:hidden"
          >
            <span
              aria-hidden="true"
              className={cn(
                'absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]',
                open ? 'rotate-45' : '-translate-y-1',
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                'absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]',
                open ? '-rotate-45' : 'translate-y-1',
              )}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          'pointer-events-auto fixed inset-0 z-40 flex flex-col justify-center bg-background/95 px-6 backdrop-blur-xl md:hidden',
          '[transition-property:opacity,visibility] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        style={{
          paddingTop: 'calc(env(safe-area-inset-top, 0px) + 80px)',
          paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 32px)',
        }}
      >
        <ul className="flex flex-col gap-2">
          {[...navLinks, { label: 'Hire me', href: '#contact' }].map((link, i, all) => {
            const last = i === all.length - 1
            return (
              <li
                key={link.href + link.label}
                className={cn(
                  'transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
                )}
                style={{ transitionDelay: open ? `${Math.min(i * 60, 400)}ms` : '0ms' }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'press block rounded-2xl px-4 py-3 text-4xl font-semibold tracking-tight',
                    last ? 'mt-4 bg-primary text-center text-2xl text-primary-foreground' : 'text-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
