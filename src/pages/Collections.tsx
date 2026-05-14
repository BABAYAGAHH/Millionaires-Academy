import { ArrowDown, BadgeCheck, Boxes, ShieldCheck, Sparkles } from 'lucide-react'
import { ProductCard } from '../components/cards/ProductCard'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { collectionProducts } from '../data/collectionProducts'
import { usePageTitle } from '../utils/usePageTitle'

const collectionStats = [
  { label: 'Vendor lists', value: collectionProducts.length },
  { label: 'Digital access', value: 'Instant' },
  { label: 'Starting at', value: '$19.99' },
]

const collectionHighlights = [
  'Verified supplier categories for fashion, beauty, tech, wellness, home, events, packaging, medical, and more.',
  'Designed to help new and growing entrepreneurs save research time and source with more confidence.',
  'Every item can be opened, added to cart, or purchased through the product checkout flow.',
]

export const Collections = () => {
  usePageTitle('Collections | Millionaires Academy')

  return (
    <>
      <AnimatedSection className="pt-7 sm:pt-10">
        <Container>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-[2.25rem] border border-stanBlack/10 bg-white p-3 shadow-stan">
            <div className="relative overflow-hidden rounded-[1.9rem] bg-stanBlack px-5 py-10 text-center text-warmWhite sm:px-8 sm:py-12">
              <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-mutedGold/20 blur-3xl" />
              <div className="absolute -right-12 bottom-4 h-40 w-40 rounded-full bg-burntOrange/20 blur-3xl" />
              <div className="relative">
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-stanBlack shadow-premium">
                  <Boxes className="h-7 w-7" />
                </div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-extrabold backdrop-blur">
                  Vendor List Collections
                  <BadgeCheck className="h-4 w-4 text-mutedGold" />
                </div>
                <h1 className="mx-auto mt-5 max-w-lg text-balance text-4xl font-black leading-tight text-white sm:text-5xl">
                  Collections built to help you source smarter.
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-base font-semibold leading-7 text-white/78">
                  Get access to verified, trusted vendors that help you launch and
                  scale your online business with confidence.
                </p>
                <div className="mt-7">
                  <Button href="#vendor-list-collections" size="lg" variant="secondary">
                    Shop Collections
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid gap-3 px-2 py-4 sm:grid-cols-3">
              {collectionStats.map((item) => (
                <div
                  className="rounded-2xl bg-stanSurface px-4 py-4 text-center text-stanBlack"
                  key={item.label}
                >
                  <p className="text-2xl font-black">{item.value}</p>
                  <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-8 sm:pt-10">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[2.25rem] border border-stanBlack/10 bg-white p-5 shadow-stan sm:p-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-mutedGold">
              What is inside
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-stanBlack sm:text-4xl">
              Vendor resources for product-based entrepreneurs.
            </h2>
            <div className="mt-6 grid gap-3">
              {collectionHighlights.map((item) => (
                <div
                  className="flex gap-3 rounded-[1.5rem] border border-stanBlack/10 bg-stanSurface px-4 py-4"
                  key={item}
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-stanBlack" />
                  <p className="text-sm font-semibold leading-7 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-10 sm:pt-12" id="vendor-list-collections">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-mutedGold">
              All Collections
            </p>
            <h2 className="mt-3 text-3xl font-black text-stanBlack sm:text-4xl">
              Choose your next vendor list.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm font-semibold leading-7 text-muted">
              Browse every item from the vendor list collection and add the right
              resource to your cart.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4">
            {collectionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-[1.5rem] border border-stanBlack/10 bg-white px-5 py-5 shadow-stan">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-mutedGold" />
            <p className="text-sm font-semibold leading-7 text-muted">
              If you need help choosing the right list, start with the category
              closest to your business model or contact Millionaires Academy for
              direction.
            </p>
          </div>
        </Container>
      </AnimatedSection>
    </>
  )
}
