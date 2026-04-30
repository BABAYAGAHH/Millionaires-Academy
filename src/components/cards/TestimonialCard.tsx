import { Quote } from 'lucide-react'
import type { Testimonial } from '../../types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <article className="h-full rounded-3xl border border-neutralBorder bg-white/90 p-7 shadow-soft">
    <Quote className="h-8 w-8 text-mutedGold" />
    <p className="mt-5 text-lg leading-8 text-charcoal">"{testimonial.quote}"</p>
    <div className="mt-6 border-t border-neutralBorder pt-5">
      <p className="font-semibold text-softBlack">{testimonial.name}</p>
      <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
    </div>
  </article>
)
