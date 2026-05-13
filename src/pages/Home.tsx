import { ArrowDown, BadgeCheck, ExternalLink, Sparkles, Star } from 'lucide-react'
import logoPlaceholder from '../assets/images/logo-placeholder.svg'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { ProductGrid } from '../components/store/ProductGrid'
import { activeProducts } from '../utils/productUtils'
import { usePageTitle } from '../utils/usePageTitle'

export const Home = () => {
  usePageTitle('Millionaires Academy | Digital Store')

  const featuredProducts = activeProducts.filter((product) => product.featured).slice(0, 6)
  const profileStats = ['Instant access', 'Digital downloads', 'Founder tools']

  return (
    <>
      <AnimatedSection className="pt-7 sm:pt-10">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-[2.25rem] border border-stanBlack/10 bg-white p-3 shadow-stan">
              <div className="relative overflow-hidden rounded-[1.9rem] bg-stanBlack px-5 py-8 text-center text-warmWhite sm:px-8 sm:py-10">
                <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-mutedGold/20 blur-3xl" />
                <div className="absolute -right-12 bottom-4 h-40 w-40 rounded-full bg-burntOrange/20 blur-3xl" />
                <div className="relative">
                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white shadow-premium">
                    <img
                      alt="Millionaires Academy"
                      className="h-full w-full object-cover"
                      src={logoPlaceholder}
                    />
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-extrabold backdrop-blur">
                    @millionairesacademy
                    <BadgeCheck className="h-4 w-4 text-mutedGold" />
                  </div>
                  <h1 className="mx-auto mt-5 max-w-lg text-balance text-4xl font-black leading-tight text-white sm:text-5xl">
                    Digital products for building income online.
                  </h1>
                  <p className="mx-auto mt-4 max-w-xl text-base font-semibold leading-7 text-white/78">
                    Trainings, vendor lists, launch blueprints, and business tools
                    for founders who want clear next steps without the clutter.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {profileStats.map((item) => (
                      <span
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white/82"
                        key={item}
                      >
                        <Sparkles className="h-3.5 w-3.5 text-mutedGold" />
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                    <Button href="#featured-products" size="lg" variant="secondary">
                      Shop the offers
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-4 text-sm font-extrabold text-white transition hover:bg-white/15"
                      href="https://instagram.com/millionairesacademy"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 px-2 py-4 sm:grid-cols-3">
                {['Trusted resources', 'Simple checkout', 'Action-first'].map((item) => (
                  <div
                    className="flex items-center justify-center gap-2 rounded-2xl bg-stanSurface px-4 py-3 text-sm font-extrabold text-stanBlack"
                    key={item}
                  >
                    <Star className="h-4 w-4 fill-mutedGold text-mutedGold" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-10 sm:pt-12" id="featured-products">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-mutedGold">
              Featured Products
            </p>
            <h2 className="mt-3 text-3xl font-black text-stanBlack sm:text-4xl">
              Start here.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm font-semibold leading-7 text-muted">
              Pick the resource that matches your next move and add it to your cart.
            </p>
          </div>
        </Container>
      </AnimatedSection>

      <ProductGrid className="pt-8" products={featuredProducts} />
    </>
  )
}
