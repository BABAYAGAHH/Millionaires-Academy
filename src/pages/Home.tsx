import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { ProductGrid } from '../components/store/ProductGrid'
import { activeProducts } from '../utils/productUtils'
import { usePageTitle } from '../utils/usePageTitle'

export const Home = () => {
  usePageTitle('Millionaires Academy | Digital Store')

  const featuredProducts = activeProducts.filter((product) => product.featured).slice(0, 6)

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-neutralBorder bg-white shadow-soft">
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mutedGold">
                  Millionaires Academy Store
                </p>
                <h1 className="text-balance mt-5 text-4xl font-semibold leading-tight text-softBlack sm:text-5xl lg:text-6xl">
                  Digital products for building your online income empire.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  Curated trainings, vendor lists, launch blueprints, and business
                  tools designed for founders who want clear next steps without
                  the clutter.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/shop" size="lg" variant="secondary">
                    Shop Products
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/cart" size="lg" variant="outline">
                    View Cart
                  </Button>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-cream/72 p-5">
                <div className="rounded-[1.45rem] border border-neutralBorder bg-warmWhite p-6 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emeraldDeep">
                    Product-first setup
                  </p>
                  <div className="mt-6 grid gap-4">
                    {['Digital courses', 'Vendor lists', 'Launch blueprints', 'Business tools'].map(
                      (item) => (
                        <div
                          className="rounded-2xl border border-neutralBorder bg-white px-5 py-4 text-lg font-semibold text-softBlack"
                          key={item}
                        >
                          {item}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mutedGold">
                Featured Products
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-softBlack sm:text-4xl">
                Start with the best sellers.
              </h2>
            </div>
            <Button href="/shop" variant="outline">
              Browse full catalog
            </Button>
          </div>
        </Container>
      </AnimatedSection>

      <ProductGrid className="pt-8" products={featuredProducts} />
    </>
  )
}
