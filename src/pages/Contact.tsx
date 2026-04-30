import { Mail, MapPin, Phone } from 'lucide-react'
import { ApplicationForm } from '../components/forms/ApplicationForm'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { FAQSection } from '../components/sections/FAQSection'
import { faqs } from '../data/faqs'
import { usePageTitle } from '../utils/usePageTitle'

const contactFaqs = faqs.filter(
  (item) => item.category === 'contact' || item.category === 'general',
)

export const Contact = () => {
  usePageTitle('Contact | Millionaires Academy')

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:p-10">
            <SectionHeader
              description="Tell us what stage your business is in and what kind of support you need."
              eyebrow="Contact"
              title="Apply or Contact Millionaires Academy"
            />
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ApplicationForm />
            <div className="space-y-6">
              <article className="rounded-3xl border border-neutralBorder bg-white p-7 shadow-soft">
                <h2 className="text-2xl font-semibold text-softBlack">
                  Contact details
                </h2>
                <ul className="mt-6 space-y-4 text-sm text-muted">
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-teal" />
                    <span>hello@millionairesacademy.co</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-teal" />
                    <span>Business inquiries by request</span>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-teal" />
                    <span>Serving clients remotely</span>
                  </li>
                </ul>
              </article>

              <article className="rounded-3xl border border-neutralBorder bg-cream/72 p-7 shadow-soft">
                <h2 className="text-2xl font-semibold text-softBlack">
                  Need guidance before applying?
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Start with the resource library or book a strategy session if
                  you want clarity before committing to a larger support offer.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href="/shop" variant="outline">
                    Explore Resources
                  </Button>
                  <Button href="/book-session" variant="secondary">
                    Book Strategy Session
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <FAQSection
        description="A few final notes before you submit your application."
        items={contactFaqs}
        title="Contact FAQs"
      />
    </>
  )
}
