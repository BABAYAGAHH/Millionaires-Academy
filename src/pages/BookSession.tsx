import { CalendarDays, Compass, Lightbulb, NotebookPen } from 'lucide-react'
import { ContactForm } from '../components/forms/ContactForm'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { FAQSection } from '../components/sections/FAQSection'
import { brandAssets } from '../data/brandAssets'
import { faqs } from '../data/faqs'
import { usePageTitle } from '../utils/usePageTitle'

const benefits = [
  { title: 'Focused guidance', icon: Compass },
  { title: 'Vendor and launch clarity', icon: Lightbulb },
  { title: 'Custom website direction', icon: NotebookPen },
  { title: 'Actionable next steps', icon: CalendarDays },
]

const whoShouldBook = [
  'Entrepreneurs who need help organizing an idea',
  'Business owners who want guidance on vendors or storefront structure',
  'Founders who are launching soon and want a clearer action plan',
]

const whatToPrepare = [
  'A short overview of your business idea or current stage',
  'Any questions about vendors, custom websites, branding, or launch structure',
  'A realistic picture of what feels blocked right now',
]

const bookingFaqs = faqs.filter(
  (item) => item.category === 'booking' || item.category === 'general',
)

export const BookSession = () => {
  usePageTitle('Book Session | Millionaires Academy')

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:p-10">
            <div>
              <SectionHeader
                description="Get focused guidance for your business idea, vendor search, custom website direction, or launch plan."
                eyebrow="Book a Strategy Session"
                title="Book a One-on-One Business Strategy Session"
              />
              <div className="mt-8">
                <Button href="/contact" variant="secondary">
                  Book Strategy Session
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] bg-cream/72 p-4">
              <img
                alt="Nickie Nicole, founder of Millionaires Academy"
                className="aspect-[4/4.8] w-full rounded-[1.5rem] object-cover object-[center_18%]"
                loading="lazy"
                src={brandAssets.founder.mentorship}
              />
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                className="rounded-3xl border border-neutralBorder bg-white p-6 shadow-soft"
                key={benefit.title}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emeraldDeep text-warmWhite">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-2xl font-semibold text-softBlack">
                  {benefit.title}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-neutralBorder bg-white p-8 shadow-soft">
              <h2 className="text-3xl font-semibold text-softBlack">
                Who should book
              </h2>
              <ul className="mt-6 space-y-4">
                {whoShouldBook.map((item) => (
                  <li className="text-sm leading-7 text-charcoal" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-neutralBorder bg-cream/72 p-8 shadow-soft">
              <h2 className="text-3xl font-semibold text-softBlack">
                What to prepare
              </h2>
              <ul className="mt-6 space-y-4">
                {whatToPrepare.map((item) => (
                  <li className="text-sm leading-7 text-charcoal" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20" id="booking">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div>
              <SectionHeader
                description="Use the inquiry form below to request your session and share the kind of guidance you need. Millionaires Academy will follow up with the next booking steps."
                eyebrow="Booking CTA"
                title="Book Strategy Session"
              />
              <div className="mt-8">
                <Button href="/contact" variant="secondary">
                  Request Booking
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </AnimatedSection>

      <FAQSection
        description="Helpful notes before you book your strategy session."
        items={bookingFaqs}
        title="Session FAQs"
      />
    </>
  )
}
