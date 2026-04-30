import {
  CheckCircle2,
  MonitorCheck,
  Palette,
  Smartphone,
  Store,
  Workflow,
} from 'lucide-react'
import { PackageCard } from '../components/cards/PackageCard'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { FAQSection } from '../components/sections/FAQSection'
import { faqs } from '../data/faqs'
import { packages } from '../data/packages'
import { usePageTitle } from '../utils/usePageTitle'

const valueCards = [
  { label: 'Premium homepage structure', icon: Store },
  { label: 'Product and offer organization', icon: Workflow },
  { label: 'Mobile responsive user experience', icon: Smartphone },
  { label: 'Brand color and typography direction', icon: Palette },
  { label: 'Launch preparation support', icon: CheckCircle2 },
  { label: 'Conversion-focused layout guidance', icon: MonitorCheck },
]

const fitItems = [
  'Boutique owners ready to elevate their online presentation',
  'Women launching a business that needs a polished and professional website',
  'Founders who want structure before spending more time redesigning randomly',
]

const processSteps = [
  'Brand discovery',
  'Website structure planning',
  'Visual direction',
  'Custom store or website setup',
  'Review and launch preparation',
]

const customWebsiteFaqs = faqs.filter(
  (item) => item.category === 'website' || item.category === 'general',
)

export const ShopifyWebsite = () => {
  usePageTitle('Custom Website | Millionaires Academy')

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="luxury-gradient rounded-[2rem] px-8 py-12 text-warmWhite shadow-premium lg:px-10 lg:py-16">
            <SectionHeader
              description="Launch a polished online store or service website that reflects your brand, organizes your offers clearly, and gives visitors a professional experience."
              eyebrow="Custom Website"
              tone="inverse"
              title="Premium Custom Websites for Serious Business Owners"
            />
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Apply for Website Support
              </Button>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
        <Container>
          <SectionHeader
            centered
            description="Every part of the custom website support offer is designed to make your brand feel cleaner, more strategic, and more ready to convert."
            eyebrow="Included Value"
            title="What this service includes"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {valueCards.map((item) => (
              <article
                className="rounded-3xl border border-neutralBorder bg-white p-6 shadow-soft"
                key={item.label}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emeraldDeep text-warmWhite">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-2xl font-semibold text-softBlack">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
        <Container>
          <div className="rounded-[2rem] border border-neutralBorder bg-cream/72 p-8 shadow-soft lg:p-10">
            <h2 className="text-3xl font-semibold text-softBlack">Who it is for</h2>
            <ul className="mt-6 space-y-4">
              {fitItems.map((item) => (
                <li className="text-sm leading-7 text-charcoal" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
        <Container>
          <SectionHeader
            centered
            description="The process is intentionally structured so you can move from creative ideas to a more organized website with less guesswork."
            eyebrow="Process"
            title="How the custom website process works."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                className="rounded-3xl border border-neutralBorder bg-white p-6 shadow-soft"
                key={step}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-mutedGold">
                  Step {index + 1}
                </p>
                <p className="mt-4 text-2xl font-semibold leading-tight text-softBlack">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
        <Container>
          <SectionHeader
            centered
            description="Use these package levels as a guide for how to begin, deepen support, or apply for a more premium implementation path."
            eyebrow="Package Options"
            title="Choose the level of support that fits your launch."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <PackageCard item={item} key={item.id} />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <FAQSection
        description="Helpful answers for founders thinking about custom website support, launch timing, and what the process includes."
        items={customWebsiteFaqs}
        title="Custom website support FAQs"
      />

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
        <Container>
          <div className="rounded-[2rem] border border-neutralBorder bg-white p-8 text-center shadow-soft lg:p-10">
            <h2 className="text-balance text-3xl font-semibold text-softBlack sm:text-4xl">
              Ready for a more premium website experience?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted">
              Apply for support if you want a more structured, strategic launch
              with elevated presentation and clearer customer flow.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="secondary">
                Apply Now
              </Button>
              <Button href="/book-session" variant="outline">
                Book a Strategy Session
              </Button>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  )
}
