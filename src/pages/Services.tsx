import { ServiceCard } from '../components/cards/ServiceCard'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { brandAssets } from '../data/brandAssets'
import { services } from '../data/services'
import { usePageTitle } from '../utils/usePageTitle'

export const Services = () => {
  usePageTitle('Services | Millionaires Academy')

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:p-10">
            <div>
              <SectionHeader
                description="Structured support inside Millionaires Academy for entrepreneurs who need practical direction, professional guidance, and clearer next steps."
                eyebrow="Services"
                title="Professional support for founders building with intention."
              />
            </div>
            <div className="overflow-hidden rounded-[1.75rem] bg-cream/72 p-4">
              <img
                alt="Nickie Nicole, founder of Millionaires Academy"
                className="aspect-[4/4.8] w-full rounded-[1.5rem] object-cover object-[center_18%]"
                loading="lazy"
                src={brandAssets.founder.services}
              />
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
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
