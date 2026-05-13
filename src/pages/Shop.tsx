import { useDeferredValue, useState } from 'react'
import { Search } from 'lucide-react'
import { ProductCard } from '../components/cards/ProductCard'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Container } from '../components/common/Container'
import { EmptyState } from '../components/common/EmptyState'
import { SectionHeader } from '../components/common/SectionHeader'
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
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:p-10">
            <SectionHeader
              description="Shop digital trainings, vendor lists, launch blueprints, and simple business tools built for fast, focused execution."
              eyebrow="Products"
              title="Millionaires Academy product catalog"
            />
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-16">
        <Container>
          <div className="rounded-[2rem] border border-neutralBorder bg-white p-6 shadow-soft">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center">
              <label className="relative block">
                <span className="sr-only">Search products</span>
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  className="w-full rounded-full border border-neutralBorder bg-cream/60 py-3 pl-11 pr-4 text-sm"
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search courses, vendor lists, blueprints, or tools"
                  type="search"
                  value={searchTerm}
                />
              </label>
              <label className="flex items-center justify-between gap-3 rounded-full border border-neutralBorder bg-cream/40 px-4 py-3 text-sm text-charcoal">
                <span className="font-medium">Sort</span>
                <select
                  className="bg-transparent text-sm"
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
                      ? 'border-emeraldDeep bg-emeraldDeep text-warmWhite'
                      : 'border-neutralBorder bg-white text-charcoal hover:border-emeraldDeep hover:text-emeraldDeep',
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

      <AnimatedSection className="pt-12">
        <Container>
          {filteredProducts.length ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
