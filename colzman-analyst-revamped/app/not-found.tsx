import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-center gap-6 px-6 md:px-8"
    >
      <p className="font-mono text-sm text-muted-foreground">404, 0 rows returned</p>
      <h1 className="max-w-[680px] text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        That page is not in this dataset.
      </h1>
      <p className="max-w-[680px] text-pretty text-lg text-muted-foreground">
        The link may be old or mistyped. The portfolio lives on the home page.
      </p>
      <Link
        href="/"
        className="press inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to the portfolio
      </Link>
    </main>
  )
}
