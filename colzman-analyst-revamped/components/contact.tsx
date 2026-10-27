'use client'

import { useRef, useState, type FormEvent } from 'react'
import {
  Check,
  Copy,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  PaperPlaneRight,
  Phone,
} from '@phosphor-icons/react/dist/ssr'
import { profile } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const inputClass =
  'w-full rounded-lg border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30'

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied('ok')
    } catch {
      setCopied('fail')
    }
    window.setTimeout(() => setCopied('idle'), 2200)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const next: Errors = {}
    if (!name) next.name = 'Enter your name.'
    if (!email) next.email = 'Enter your email address.'
    else if (!EMAIL_RE.test(email)) next.email = 'That email address looks incomplete. Check it and try again.'
    if (!message) next.message = 'Write a short message so I know what you need.'
    setErrors(next)
    setSent(false)

    const firstInvalid = (['name', 'email', 'message'] as const).find((k) => next[k])
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const details = [
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location },
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 border-t border-border"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-24">
        <SectionHeading
          id="contact-title"
          title="Hiring for a data role? Let's talk."
          description="I'm looking for data analyst, business analyst and data scientist roles, remote or global. If you have an opening or a question about my work, write to me."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-8">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-xl font-semibold tracking-tight text-foreground underline decoration-border decoration-2 underline-offset-8 hover:decoration-primary sm:text-2xl"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="press inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-foreground hover:bg-accent"
                >
                  {copied === 'ok' ? (
                    <Check className="size-4 text-primary" aria-hidden="true" />
                  ) : (
                    <Copy className="size-4" aria-hidden="true" />
                  )}
                  {copied === 'ok' ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p aria-live="polite" className={cn('mt-2 text-sm text-muted-foreground', copied === 'fail' ? '' : 'sr-only')}>
                {copied === 'ok' && 'Email address copied.'}
                {copied === 'fail' && 'Copy failed. Select the address and copy it manually.'}
              </p>
            </div>

            <dl className="flex flex-col gap-4">
              {details.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <Icon className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <dt className="sr-only">{item.label}</dt>
                    <dd className="text-base text-foreground">
                      {item.href ? (
                        <a href={item.href} className="hover:text-primary">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                )
              })}
            </dl>

            <div className="flex gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="press inline-flex size-12 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
              >
                <GithubLogo className="size-6" aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="press inline-flex size-12 items-center justify-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
              >
                <LinkedinLogo className="size-6" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={cn(inputClass, errors.name ? 'border-destructive' : 'border-input')}
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={cn(inputClass, errors.email ? 'border-destructive' : 'border-input')}
                  />
                </Field>
              </div>
              <Field id="message" label="Message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about the role or project"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={cn(inputClass, 'resize-y', errors.message ? 'border-destructive' : 'border-input')}
                />
              </Field>

              <button
                type="submit"
                className="press inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90"
              >
                Send message
                <PaperPlaneRight className="size-4" aria-hidden="true" />
              </button>

              <p aria-live="polite" className={cn('text-sm text-muted-foreground', sent ? '' : 'sr-only')}>
                {sent &&
                  `Your email app should open with the message ready to send. If it does not, write to ${profile.email}.`}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
