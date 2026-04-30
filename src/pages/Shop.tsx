import { useDeferredValue, useState } from 'react'
import { Search } from 'lucide-react'
import { ProductCard } from '../components/cards/ProductCard'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Container } from '../components/common/Container'
import { EmptyState } from '../components/common/EmptyState'
import { SectionHeader } from '../components/common/SectionHeader'
import { brandAssets } from '../data/brandAssets'
import { products } from '../data/products'
import { cn } from '../utils/cn'
import { usePageTitle } from '../utils/usePageTitle'

const categories = ['All', ...new Set(products.map((product) => product.category))]

type SortOption = 'featured' | 'low-to-high' | 'high-to-low'

export const Shop = () => {
  usePageTitle('Shop | Millionaires Academy')

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOption, setSortOption] = useState<SortOption>('featured')
  const deferredSearchTerm = useDeferredValue(searchTerm.trim().toLowerCase())

  let filteredProducts = [...products]

  if (selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory,
    )
  }

  if (deferredSearchTerm) {
    filteredProducts = filteredProducts.filter((product) => {
      const haystack = `${product.title} ${product.category} ${product.shortDescription}`.toLowerCase()
      return haystack.includes(deferredSearchTerm)
    })
  }

  if (sortOption === 'low-to-high') {
    filteredProducts.sort((left, right) => left.price - right.price)
  } else if (sortOption === 'high-to-low') {
    filteredProducts.sort((left, right) => right.price - left.price)
  } else {
    filteredProducts.sort(
      (left, right) => Number(right.featured) - Number(left.featured),
    )
  }

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:p-10">
            <div>
              <SectionHeader
                description="Explore vendor resources, launch guides, custom website support, and business tools created to help you build with structure."
                eyebrow="Resources"
                title="Business Resources & Digital Blueprints"
              />
            </div>
            <div className="overflow-hidden rounded-[1.75rem] bg-cream/72 p-4">
              <img
                alt="Nickie Nicole, founder of Millionaires Academy"
                className="aspect-[4/4.8] w-full rounded-[1.5rem] object-cover object-[center_18%]"
                loading="lazy"
                src={brandAssets.founder.resources}
              />
            </div>
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
                  placeholder="Search resources, vendor guidance, or blueprints"
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
              actionLabel="Need something custom?"
              description="Try a different category or search phrase. If you need a more specific resource, use the contact page to ask about tailored support."
              title="No products matched your search."
            />
          )}
        </Container>
      </AnimatedSection>
    </>
  )
}
