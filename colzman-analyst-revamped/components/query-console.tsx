'use client'

import { useState } from 'react'
import { ArrowCounterClockwise } from '@phosphor-icons/react/dist/ssr'
import { heroResults } from '@/lib/data'

/**
 * The hero's one orchestrated moment: a short SQL query types itself out,
 * then the result rows arrive 70ms apart. Every row is a real figure from
 * the portfolio. Replay is user triggered. With reduced motion it is static.
 */

const QUERY = [
  { parts: [['SELECT', 'k'], [' result, figure, source', 't']] },
  { parts: [['FROM', 'k'], [' collins.impact', 't']] },
  { parts: [['ORDER BY', 'k'], [' impact ', 't'], ['DESC', 'k'], [';', 't']] },
] as const

const LINE_LENGTHS = QUERY.map((l) => l.parts.reduce((n, [text]) => n + text.length, 0))
const CHAR_MS = 22
const LINE_GAP_MS = 120
const START_MS = 700

function lineStart(index: number) {
  let t = START_MS
  for (let i = 0; i < index; i++) t += LINE_LENGTHS[i] * CHAR_MS + LINE_GAP_MS
  return t
}

export function QueryConsole() {
  const [run, setRun] = useState(0)
  const rowsStart = lineStart(QUERY.length) + 80

  return (
    <div className="hero-in overflow-hidden rounded-2xl border border-border bg-card" style={{ ['--d' as string]: '450ms' }}>
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-2">
        <p className="font-mono text-sm text-muted-foreground">impact.sql</p>
        <button
          type="button"
          onClick={() => setRun((n) => n + 1)}
          className="press inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <ArrowCounterClockwise className="size-4" aria-hidden="true" />
          Run again
        </button>
      </div>

      {/* key restarts the animations on replay */}
      <div key={run}>
        <pre
          className="overflow-x-auto px-4 py-4 font-mono text-sm md:px-6"
          aria-label="SQL query: select result, figure and source from collins.impact, ordered by impact descending"
        >
          <code className="block">
            {QUERY.map((line, i) => (
              <span
                key={i}
                className="type-line block w-fit whitespace-pre"
                style={{
                  animationDuration: `${LINE_LENGTHS[i] * CHAR_MS}ms`,
                  animationDelay: `${lineStart(i)}ms`,
                  animationTimingFunction: `steps(${LINE_LENGTHS[i]}, end)`,
                }}
              >
                {line.parts.map(([text, kind], j) => (
                  <span key={j} className={kind === 'k' ? 'text-primary' : 'text-foreground'}>
                    {text}
                  </span>
                ))}
              </span>
            ))}
          </code>
        </pre>

        <div className="border-t border-border">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Results of the query</caption>
            <thead>
              <tr className="font-mono text-sm text-muted-foreground">
                <th scope="col" className="px-4 py-3 font-normal md:px-6">result</th>
                <th scope="col" className="px-4 py-3 text-right font-normal md:px-6 md:text-left">figure</th>
                <th scope="col" className="hidden px-4 py-3 font-normal md:table-cell md:px-6">source</th>
              </tr>
            </thead>
            <tbody>
              {heroResults.map((row, i) => (
                <tr
                  key={row.result}
                  className="row-in border-t border-border"
                  style={{ ['--d' as string]: `${rowsStart + i * 70}ms` }}
                >
                  <td className="px-4 py-3 text-base text-foreground md:px-6">
                    {row.result}
                    <span className="mt-0.5 block text-sm text-muted-foreground md:hidden">
                      {row.source}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right align-top font-mono text-lg font-semibold text-primary tabular md:px-6 md:text-left md:align-middle">
                    {row.figure}
                  </td>
                  <td className="hidden px-4 py-3 text-sm text-muted-foreground md:table-cell md:px-6">
                    {row.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p
            className="row-in border-t border-border px-4 py-2 font-mono text-sm text-muted-foreground md:px-6"
            style={{ ['--d' as string]: `${rowsStart + heroResults.length * 70}ms` }}
          >
            {heroResults.length} rows
          </p>
        </div>
      </div>
    </div>
  )
}
