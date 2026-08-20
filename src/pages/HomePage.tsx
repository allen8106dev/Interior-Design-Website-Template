import { PageContainer } from '@/components/layout/PageContainer'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { Press } from '@/components/sections/Press'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Contact } from '@/components/sections/Contact'
import { useSeo } from '@/hooks/useSeo'
import { siteConfig } from '@/data/siteConfig'

export function HomePage() {
  useSeo({
    description: siteConfig.seo.defaultDescription,
    path: '/',
  })

  return (
    <PageContainer withTopPadding={false}>
      <Hero />
      <Stats />
      <Press />
      <About compact />
      <Services limit={8} />
      <FeaturedProjects limit={4} />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact showMap={false} compact />
    </PageContainer>
  )
}
