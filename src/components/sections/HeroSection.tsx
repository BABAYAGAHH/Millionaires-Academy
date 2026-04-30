import { ArrowRight, Check } from 'lucide-react'
import academyHeroPlaceholder from '../../assets/images/academy-hero-placeholder.svg'
import founderPlaceholder from '../../assets/images/founder-placeholder.svg'
import { AnimatedSection } from '../common/AnimatedSection'
import { Badge } from '../common/Badge'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

const bullets = [
  'Business mentorship',
  'Vendor guidance',
  'Shopify website support',
  'Digital launch blueprints',
]

export const HeroSection = () => (
  <AnimatedSection className="overflow-hidden pt-8 sm:pt-12">
    <Container>
      <div className="luxury-gradient noise-bg relative overflow-hidden rounded-[2rem] px-6 py-12 text-warmWhite shadow-premium sm:px-10 sm:py-16 lg:px-14 lg:py-[4.5rem]">
        <div className="relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14">
          <div className="max-w-3xl">
            <Badge variant="light">Premium Business Academy & Resource Hub</Badge>
            <h1 className="text-balance mt-6 text-4xl font-semibold leading-tight text-warmWhite sm:text-5xl lg:text-[4.15rem] lg:leading-[1.04]">
              Build the Business, Brand, and Income System You&apos;re Ready For.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-warmWhite/82 sm:text-lg">
              Millionaires Academy helps aspiring entrepreneurs and women in
              business launch, structure, and scale with practical mentorship,
              vendor guidance, Shopify website support, and digital business
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

          <div className="relative">
            <div className="absolute -left-5 top-10 hidden h-32 w-32 rounded-full bg-mutedGold/20 blur-3xl sm:block" />
            <div className="absolute -right-6 bottom-6 hidden h-40 w-40 rounded-full bg-burntOrange/20 blur-3xl sm:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
              <img
                alt="Luxury hero placeholder showcasing Millionaires Academy brand direction"
                className="h-full w-full rounded-[1.6rem] object-cover"
                src={academyHeroPlaceholder}
              />
              <div className="absolute bottom-6 left-6 right-6 max-w-sm rounded-[1.5rem] border border-white/16 bg-white/88 p-5 text-emeraldDeep shadow-soft sm:left-8 sm:right-auto">
                <div className="flex items-center gap-4">
                  <img
                    alt="Founder-style portrait placeholder for Millionaires Academy"
                    className="h-14 w-14 rounded-2xl object-cover"
                    src={founderPlaceholder}
                  />
                  <div>
                    <p className="font-heading text-xl text-softBlack">
                      Nickie Nicole
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mutedGold">
                      Founder & Mentor
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-charcoal">
                  Practical systems, premium storefront strategy, and structured
                  education for ambitious founders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </AnimatedSection>
)
