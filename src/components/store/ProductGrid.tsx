import type { Product } from '../../types'
import { AnimatedSection } from '../common/AnimatedSection'
import { Container } from '../common/Container'
import { EmptyState } from '../common/EmptyState'
import { ProductCard } from '../cards/ProductCard'

interface ProductGridProps {
  products: Product[]
  className?: string
  emptyTitle?: string
  emptyDescription?: string
}

export const ProductGrid = ({
  products,
  className,
  emptyTitle = 'No products found.',
  emptyDescription = 'Try a different search, filter, or product category.',
}: ProductGridProps) => (
  <AnimatedSection className={className}>
    <Container>
      {products.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState
          actionHref="/shop"
          actionLabel="Browse all products"
          description={emptyDescription}
          title={emptyTitle}
        />
      )}
    </Container>
  </AnimatedSection>
)
