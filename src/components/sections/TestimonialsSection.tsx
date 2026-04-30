import { testimonials } from '../../data/testimonials'
import { brandAssets } from '../../data/brandAssets'
import { TestimonialCard } from '../cards/TestimonialCard'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { AnimatedSection } from '../common/AnimatedSection'

export const TestimonialsSection = () => (
  <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
    <Container>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <SectionHeader
          description="Placeholder testimonials can be replaced later with real client proof, but the layout is already ready for that level of trust."
          eyebrow="Client Perspective"
          title="Proof that clarity changes how founders move."
        />
        <div className="overflow-hidden rounded-[2rem] border border-neutralBorder bg-cream/72 p-4 shadow-soft">
          <img
            alt="Nickie Nicole, founder of Millionaires Academy"
            className="aspect-[4/4.8] w-full rounded-[1.5rem] object-cover object-[center_18%]"
            loading="lazy"
            src={brandAssets.founder.testimonials}
          />
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  </AnimatedSection>
)
