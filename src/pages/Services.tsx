import { ServiceCard } from '../components/cards/ServiceCard'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { services } from '../data/services'
import { usePageTitle } from '../utils/usePageTitle'

export const Services = () => {
  usePageTitle('Services | Millionaires Academy')

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:p-10">
            <SectionHeader
              description="Structured support inside Millionaires Academy for entrepreneurs who need practical direction, professional guidance, and clearer next steps."
              eyebrow="Services"
              title="Professional support for founders building with intention."
            />
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-24">
        <Container>
          <div className="luxury-gradient rounded-[2rem] px-8 py-12 text-center text-warmWhite shadow-premium">
            <h2 className="text-3xl font-semibold text-warmWhite sm:text-4xl">
              Need help choosing the right service?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-warmWhite/82">
              Start with a one-on-one session if you need clarity before
              deciding which path or package fits your current business stage.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/book-session" variant="secondary">
                Book Strategy Session
              </Button>
              <Button href="/contact" variant="outline">
                Apply for Support
              </Button>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  )
}
