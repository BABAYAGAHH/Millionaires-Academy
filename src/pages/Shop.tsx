import { useDeferredValue, useState } from 'react'
import { Search } from 'lucide-react'
import { ProductCard } from '../components/cards/ProductCard'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Container } from '../components/common/Container'
import { EmptyState } from '../components/common/EmptyState'
import { cn } from '../utils/cn'
import {
  activeProducts,
  getDefaultVariant,
  getProductTypes,
  parseVariantPrice,
} from '../utils/productUtils'
import { usePageTitle } from '../utils/usePageTitle'

const categories = ['All', ...getProductTypes()]

type SortOption = 'featured' | 'low-to-high' | 'high-to-low'

export const Shop = () => {
  usePageTitle('Shop | Millionaires Academy')

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOption, setSortOption] = useState<SortOption>('featured')
  const deferredSearchTerm = useDeferredValue(searchTerm.trim().toLowerCase())

  let filteredProducts = [...activeProducts]

  if (selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter(
      (product) => product.product_type === selectedCategory,
    )
  }

  if (deferredSearchTerm) {
    filteredProducts = filteredProducts.filter((product) => {
      const haystack =
        `${product.title} ${product.product_type} ${product.description} ${product.tags.join(' ')}`.toLowerCase()
      return haystack.includes(deferredSearchTerm)
    })
  }

  if (sortOption === 'low-to-high') {
    filteredProducts.sort(
      (left, right) =>
        parseVariantPrice(getDefaultVariant(left)) - parseVariantPrice(getDefaultVariant(right)),
    )
  } else if (sortOption === 'high-to-low') {
    filteredProducts.sort(
      (left, right) =>
        parseVariantPrice(getDefaultVariant(right)) - parseVariantPrice(getDefaultVariant(left)),
    )
  } else {
    filteredProducts.sort(
      (left, right) => Number(right.featured) - Number(left.featured),
    )
  }

  return (
    <>
      <AnimatedSection className="pt-7 sm:pt-10">
        <Container>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-[2.25rem] border border-stanBlack/10 bg-white p-3 shadow-stan">
            <div className="rounded-[1.9rem] bg-stanBlack px-6 py-8 text-center text-warmWhite">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-mutedGold">
                Products
              </p>
              <h1 className="mt-3 text-balance text-4xl font-black leading-tight text-white sm:text-5xl">
                Pick your next move.
              </h1>
              <p className="mx-auto mt-4 max-w-lg text-sm font-semibold leading-7 text-white/76 sm:text-base">
                Shop trainings, vendor lists, launch blueprints, and simple tools
                built for focused execution.
              </p>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-6">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-stanBlack/10 bg-white p-4 shadow-stan">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center">
              <label className="relative block">
                <span className="sr-only">Search products</span>
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stanBlack" />
                <input
                  className="w-full rounded-full border border-stanBlack/10 bg-stanSurface py-3 pl-11 pr-4 text-sm font-semibold text-stanBlack"
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search courses, vendor lists, blueprints, or tools"
                  type="search"
                  value={searchTerm}
                />
              </label>
              <label className="flex items-center justify-between gap-3 rounded-full border border-stanBlack/10 bg-stanSurface px-4 py-3 text-sm font-semibold text-stanBlack">
                <span>Sort</span>
                <select
                  className="bg-transparent text-sm font-semibold"
                  onChange={(event) => setSortOption(event.target.value as SortOption)}
                  value={sortOption}
                >
                  <option value="featured">Featured</option>
                  <option value="low-to-high">Price Low to High</option>
                  <option value="high-to-low">Price High to Low</option>
                </select>
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-medium transition',
                    selectedCategory === category
                      ? 'border-stanBlack bg-stanBlack text-warmWhite'
                      : 'border-stanBlack/10 bg-stanSurface text-stanBlack hover:border-stanBlack',
                  )}
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-7">
        <Container>
          {filteredProducts.length ? (
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <EmptyState
              actionHref="/contact"
              actionLabel="Ask for help"
              description="Try a different product type or search phrase. If you need help choosing, use the contact page."
              title="No products matched your search."
            />
          )}
        </Container>
      </AnimatedSection>
    </>
  )
}
