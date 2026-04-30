import { ArrowRight, Check } from 'lucide-react'
import founderPlaceholder from '../../assets/images/founder-placeholder.svg'
import { AnimatedSection } from '../common/AnimatedSection'
import { Badge } from '../common/Badge'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

const bullets = [
  'Business mentorship',
  'Vendor guidance',
  'Custom website support',
  'Digital launch blueprints',
]

export const HeroSection = () => (
  <AnimatedSection className="overflow-hidden pt-4 sm:pt-6">
    <Container>
      <div className="luxury-gradient noise-bg relative overflow-hidden rounded-[2rem] px-5 py-10 text-warmWhite shadow-premium sm:px-8 sm:py-12 lg:px-14 lg:py-16">
        <div className="relative grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-14">
          <div className="max-w-3xl">
            <Badge variant="light">Premium Business Academy & Resource Hub</Badge>
            <h1 className="text-balance mt-6 text-4xl font-semibold leading-tight text-warmWhite sm:text-5xl lg:text-[4.15rem] lg:leading-[1.04]">
              Build the Business, Brand, and Income System You&apos;re Ready For.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-warmWhite/82 sm:text-lg">
              Millionaires Academy helps aspiring entrepreneurs and women in
              business launch, structure, and scale with practical mentorship,
              vendor guidance, custom website support, and digital business
              resources.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/shop" size="lg" variant="secondary">
                Explore Resources
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/book-session" size="lg" variant="outline">
                Book a Strategy Session
              </Button>
            </div>
            <p className="mt-4 text-sm font-medium text-warmWhite/78">
              Practical resources. Structured guidance. Premium business support.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-warmWhite/78 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li className="flex items-center gap-3" key={bullet}>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-mutedGold">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:pl-6">
            <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-mutedGold/18 blur-3xl lg:block" />
            <div className="absolute -right-8 bottom-10 hidden h-28 w-28 rounded-full bg-teal/20 blur-3xl lg:block" />
            <div className="relative rounded-[2rem] border border-white/14 bg-white/8 p-4 shadow-premium backdrop-blur-sm sm:p-5">
              <div className="rounded-[1.6rem] bg-white/92 p-5 text-emeraldDeep sm:p-6">
                <div className="flex items-center gap-4">
                  <img
                    alt="Founder portrait placeholder for Millionaires Academy"
                    className="h-14 w-14 rounded-2xl object-cover"
                    src={founderPlaceholder}
                  />
                  <div>
                    <p className="font-heading text-xl text-softBlack">
                      Nickie Nicole
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mutedGold">
                      Founder &amp; Mentor
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-mutedGold">
                  Millionaires Academy
                </p>
                <h2 className="mt-3 font-heading text-3xl leading-tight text-softBlack sm:text-[2.15rem]">
                  Practical systems for ambitious founders.
                </h2>
                <p className="mt-4 text-sm leading-7 text-charcoal">
                  Mentorship, vendor guidance, custom website support, and launch
                  blueprints designed to move your business from idea to
                  execution with more structure.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Mentorship', 'Resources', 'Website Support'].map((item) => (
                    <span
                      className="inline-flex items-center rounded-full bg-emeraldDeep/8 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-emeraldDeep"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  'Structured launch planning',
                  'Premium brand presentation',
                  'Clear next-step guidance',
                ].map((item) => (
                  <div
                    className="rounded-[1.4rem] border border-white/14 bg-white/10 px-4 py-4 text-sm font-medium text-warmWhite/86"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </AnimatedSection>
)
