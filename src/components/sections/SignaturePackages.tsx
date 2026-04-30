import { packages } from '../../data/packages'
import { PackageCard } from '../cards/PackageCard'
import { AnimatedSection } from '../common/AnimatedSection'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

export const SignaturePackages = () => (
  <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
    <Container>
      <SectionHeader
        centered
        description="Choose a support level that matches your current stage, from first-step clarity to premium launch partnership."
        eyebrow="Signature Packages"
        title="Choose the Millionaires Academy offer that fits your next move."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {packages.map((item) => (
          <PackageCard item={item} key={item.id} />
        ))}
      </div>
    </Container>
  </AnimatedSection>
)
