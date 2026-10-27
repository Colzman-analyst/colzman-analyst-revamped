import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const siteUrl = 'https://colzman-analyst-github-io.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Collins Iorbee, Data Analyst and Data Scientist',
    template: '%s · Collins Iorbee',
  },
  description:
    'Collins Iorbee is a data analyst, business analyst and data scientist based in Abuja, Nigeria. He turns data into decisions with SQL, Python, Power BI and machine learning.',
  keywords: [
    'Collins Iorbee',
    'Data Analyst',
    'Business Analyst',
    'Data Scientist',
    'Machine Learning',
    'Power BI',
    'SQL',
    'Python',
    'Abuja',
    'Nigeria',
  ],
  authors: [{ name: 'Collins Iorbee' }],
  creator: 'Collins Iorbee',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Collins Iorbee, Data Analyst and Data Scientist',
    description:
      'Machine learning models, dashboards and analytics with measurable business impact.',
    siteName: 'Collins Iorbee',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Collins Iorbee, Data Analyst and Data Scientist',
    description:
      'Machine learning models, dashboards and analytics with measurable business impact.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f6f8' },
    { media: '(prefers-color-scheme: dark)', color: '#181818' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
