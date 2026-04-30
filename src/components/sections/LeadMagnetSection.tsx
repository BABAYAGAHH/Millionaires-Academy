import { CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '../common/AnimatedSection'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'
import { LeadCaptureForm } from '../forms/LeadCaptureForm'
import { brandAssets } from '../../data/brandAssets'

const checklistPoints = [
  'Organize your business idea',
  'Clarify your vendor search',
  'Map your brand setup',
  'Define product direction',
  'Build a practical launch plan',
]

export const LeadMagnetSection = () => (
  <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
    <Container>
      <div className="grid gap-8 rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:grid-cols-[1fr_0.92fr] lg:p-10">
        <div>
          <SectionHeader
            description="Start with a simple checklist that helps you organize your idea, clarify your offer, prepare your vendor search, and map your next business move."
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
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[1.75rem] border border-neutralBorder bg-cream/78 p-3 shadow-soft">
            <img
              alt="Nickie Nicole, founder of Millionaires Academy"
              className="aspect-[4/4.8] w-full rounded-[1.25rem] object-cover object-[center_18%]"
              loading="lazy"
              src={brandAssets.founder.leadMagnet}
            />
          </div>
          <div className="rounded-[1.75rem] bg-cream/78 p-6">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </Container>
  </AnimatedSection>
)
