import { CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '../common/AnimatedSection'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { LeadCaptureForm } from '../forms/LeadCaptureForm'

const checklistPoints = [
  'Organize your business idea',
  'Clarify your vendor search',
  'Map your brand setup',
  'Define product direction',
  'Build a practical launch plan',
]

export const LeadMagnetSection = () => (
  <AnimatedSection className="pt-24">
    <Container>
      <div className="grid gap-8 rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:grid-cols-[1fr_0.92fr] lg:p-10">
        <div>
          <SectionHeader
            description="A practical checklist to help you organize your idea, vendor search, brand setup, product direction, and launch plan."
            eyebrow="Free Resource"
            title="Get the Free Business Launch Checklist"
          />
          <ul className="mt-8 space-y-4">
            {checklistPoints.map((item) => (
              <li className="flex items-center gap-3" key={item}>
                <CheckCircle2 className="h-5 w-5 text-teal" />
                <span className="text-sm leading-7 text-charcoal">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.75rem] bg-cream/78 p-6">
          <LeadCaptureForm />
        </div>
      </div>
    </Container>
  </AnimatedSection>
)
