import { AnimatedSection } from '../components/common/AnimatedSection'
import { Container } from '../components/common/Container'
import { usePageTitle } from '../utils/usePageTitle'

export const PrivacyPolicy = () => {
  usePageTitle('Privacy Policy | Millionaires Academy')

  return (
    <AnimatedSection className="pt-10 sm:pt-14">
      <Container>
        <div className="rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:p-10">
          <h1 className="text-4xl font-semibold text-softBlack">Privacy Policy</h1>
          <div className="mt-8 space-y-6 text-sm leading-8 text-muted">
            <p>
              Millionaires Academy respects your privacy and is committed to
              handling your information with care. This overview explains how
              information shared through the website may be collected, used, and
              protected while final legal language is prepared for launch.
            </p>
            <p>
              Information submitted through forms may include your name, contact
              information, business information, and messages. That information
              may be used to respond to inquiries, review fit, and support
              service delivery.
            </p>
            <p>
              Digital resources, contact forms, and newsletters may later be
              connected to third-party tools for delivery, analytics, and email
              communication. Final legal review will confirm platform-specific
              policy details before launch.
            </p>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}
