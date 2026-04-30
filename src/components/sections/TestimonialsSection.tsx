import { testimonials } from '../../data/testimonials'
import { brandAssets } from '../../data/brandAssets'
import { TestimonialCard } from '../cards/TestimonialCard'
import { AnimatedSection } from '../common/AnimatedSection'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

export const TestimonialsSection = () => (
  <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
    <Container>
      <div className="rounded-[2rem] bg-cream/58 p-6 shadow-soft sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-start">
          <SectionHeader
            description="Every resource, session, and strategy inside Millionaires Academy is built to help entrepreneurs move with more structure, confidence, and direction."
            eyebrow="CLIENT MOMENTUM"
            title="Proof that clarity changes how founders move."
          />
          <div className="overflow-hidden rounded-[2rem] border border-mutedGold/20 bg-warmWhite p-4 shadow-premium">
            <img
              alt="Client testimonial image for Millionaires Academy"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[center_top] md:aspect-[5/4]"
              loading="lazy"
              src={brandAssets.testimonials.clientProof}
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Container>
  </AnimatedSection>
)
