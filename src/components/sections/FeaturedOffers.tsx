import { products } from '../../data/products'
import { ProductCard } from '../cards/ProductCard'
import { AnimatedSection } from '../common/AnimatedSection'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

export const FeaturedOffers = () => (
  <AnimatedSection className="pt-24">
    <Container>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          description="A curated mix of vendor guidance, launch blueprints, Shopify education, and practical business resources."
          eyebrow="Featured Resources"
          title="Start with one resource that supports your next move."
        />
        <Button href="/shop" variant="outline">
          Explore Resources
        </Button>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
