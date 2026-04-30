import { testimonials } from '../../data/testimonials'
import { TestimonialCard } from '../cards/TestimonialCard'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { AnimatedSection } from '../common/AnimatedSection'

export const TestimonialsSection = () => (
  <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
    <Container>
      <SectionHeader
        centered
        description="Placeholder testimonials can be replaced later with real client proof, but the layout is already ready for that level of trust."
        eyebrow="Client Perspective"
        title="Proof that clarity changes how founders move."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  </AnimatedSection>
)
