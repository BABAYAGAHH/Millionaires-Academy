import { products } from '../../data/products'
import { ProductCard } from '../cards/ProductCard'
import { AnimatedSection } from '../common/AnimatedSection'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

export const FeaturedOffers = () => (
  <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
    <Container>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          description="Explore digital tools and business resources created to help you plan smarter, launch cleaner, and build with more structure."
          eyebrow="Featured Resources"
          title="Start with the resource that supports your next move."
        />
        <Button href="/shop" variant="outline">
          Explore Resources
        </Button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products
          .filter((product) => product.featured)
          .slice(0, 6)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Container>
  </AnimatedSection>
)
