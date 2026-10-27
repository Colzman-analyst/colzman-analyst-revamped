import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Tagline } from '@/components/tagline'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { profile } from '@/lib/data'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.roles.join(', '),
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abuja',
      addressRegion: 'Federal Capital Territory',
      addressCountry: 'Nigeria',
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: ['Data Analysis', 'Machine Learning', 'Power BI', 'SQL', 'Python'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Projects />
        <Tagline />
        <About />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
