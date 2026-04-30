import { AnimatedSection } from '../components/common/AnimatedSection'
import { Container } from '../components/common/Container'
import { usePageTitle } from '../utils/usePageTitle'

export const Terms = () => {
  usePageTitle('Terms | Millionaires Academy')

  return (
    <AnimatedSection className="pt-10 sm:pt-14">
      <Container>
        <div className="rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:p-10">
          <h1 className="text-4xl font-semibold text-softBlack">Terms & Conditions</h1>
          <div className="mt-8 space-y-6 text-sm leading-8 text-muted">
            <p>
              These terms outline the current business expectations for using
              Millionaires Academy resources and services. Final legal review
              will confirm any platform-specific language before launch.
            </p>
            <p>
              By purchasing digital products or submitting an application, users
              agree to provide accurate information and understand that final
              delivery timelines, support scope, and service details may be
              clarified during onboarding.
            </p>
            <p>
              Digital products are intended for business education and practical
              support. Service outcomes depend on client implementation,
              readiness, and participation. Final payment, refund, and service
              policies will be confirmed during legal review.
            </p>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}
