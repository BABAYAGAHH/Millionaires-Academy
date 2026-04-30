import { FeaturedOffers } from '../components/sections/FeaturedOffers'
import { FAQSection } from '../components/sections/FAQSection'
import { FinalCTA } from '../components/sections/FinalCTA'
import { FounderIntro } from '../components/sections/FounderIntro'
import { HeroSection } from '../components/sections/HeroSection'
import { LeadMagnetSection } from '../components/sections/LeadMagnetSection'
import { QualificationSection } from '../components/sections/QualificationSection'
import { SignaturePackages } from '../components/sections/SignaturePackages'
import { StartHereSection } from '../components/sections/StartHereSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { TrustBar } from '../components/sections/TrustBar'
import { WaysToHelp } from '../components/sections/WaysToHelp'
import { faqs } from '../data/faqs'
import { usePageTitle } from '../utils/usePageTitle'

export const Home = () => {
  usePageTitle('Home | Millionaires Academy')

  return (
    <>
      <HeroSection />
      <TrustBar />
      <FounderIntro />
      <WaysToHelp />
      <StartHereSection />
      <FeaturedOffers />
      <QualificationSection />
      <SignaturePackages />
      <TestimonialsSection />
      <LeadMagnetSection />
      <FAQSection
        description="A few quick answers to help you understand what Millionaires Academy offers and how the experience works."
        items={faqs}
        title="Common questions before you start."
      />
      <FinalCTA />
    </>
  )
}
