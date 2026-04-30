import { Check, X } from 'lucide-react'
import { AnimatedSection } from '../common/AnimatedSection'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

const yesItems = [
  'You are ready to take your business seriously.',
  'You want structure, not guesswork.',
  'You need vendor guidance, mentorship, or a professional online presence.',
  'You are willing to learn, implement, and grow with intention.',
]

const noItems = [
  'You want overnight results without implementation.',
  'You are not ready to learn new systems.',
  'You are not open to structure, planning, or accountability.',
  'You are not willing to take action after receiving guidance.',
]

export const QualificationSection = () => (
  <AnimatedSection className="pt-24">
    <Container>
      <SectionHeader
        centered
        description="Millionaires Academy is built for founders who want practical support, professional guidance, and a structure they can actually implement."
        eyebrow="Alignment Check"
        title="Is Millionaires Academy Right for You?"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-neutralBorder bg-white p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-softBlack">
            Yes, this is for you if:
          </h3>
          <ul className="mt-6 space-y-4">
            {yesItems.map((item) => (
              <li className="flex gap-3" key={item}>
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <span className="text-sm leading-7 text-charcoal">{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-3xl border border-neutralBorder bg-cream/72 p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-softBlack">
            This may not be for you if:
          </h3>
          <ul className="mt-6 space-y-4">
            {noItems.map((item) => (
              <li className="flex gap-3" key={item}>
                <X className="mt-0.5 h-5 w-5 shrink-0 text-burntOrange" />
                <span className="text-sm leading-7 text-charcoal">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="mt-8 text-center">
        <Button href="/contact" variant="secondary">
          Apply to Work With Us
        </Button>
      </div>
    </Container>
  </AnimatedSection>
)
