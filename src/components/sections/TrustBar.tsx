import { CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '../common/AnimatedSection'
import { Container } from '../common/Container'

const items = [
  'Instant digital resources',
  'One-on-one mentorship',
  'Shopify website support',
  'Vendor guidance and sourcing tools',
]

export const TrustBar = () => (
  <AnimatedSection className="pt-8">
    <Container>
      <div className="overflow-hidden rounded-[1.75rem] border border-neutralBorder bg-white px-4 py-4 shadow-soft">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              className="flex items-center gap-3 rounded-2xl bg-cream/70 px-4 py-3"
              key={item}
            >
              <CheckCircle2 className="h-5 w-5 text-teal" />
              <span className="text-sm font-medium text-charcoal">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </AnimatedSection>
)
