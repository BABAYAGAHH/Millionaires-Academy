import type { Product } from '../../types'
import { Badge } from '../common/Badge'
import { Button } from '../common/Button'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-neutralBorder bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium">
    <div className="relative overflow-hidden border-b border-neutralBorder bg-gradient-to-b from-cream to-warmWhite p-4 sm:p-5">
      <Badge className="absolute left-7 top-7 z-10" variant="light">
        {product.category}
      </Badge>
      <div className="overflow-hidden rounded-[1.45rem] bg-cream/50">
        <img
          alt={product.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-56"
          src={product.image}
        />
      </div>
    </div>
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <div className="space-y-3">
        <h3 className="text-[1.7rem] font-semibold leading-tight text-softBlack">
          {product.title}
        </h3>
        <p className="text-sm leading-7 text-muted">{product.shortDescription}</p>
      </div>
      <div className="mt-6 flex flex-1 items-end">
        <div className="w-full border-t border-neutralBorder pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Investment
              </p>
              <p className="mt-2 text-2xl font-semibold text-emeraldDeep">
                {product.priceLabel}
              </p>
            </div>
            <Button className="w-full sm:w-auto" href={`/shop/${product.slug}`} variant="outline">
              View Resource
            </Button>
          </div>
        </div>
      </div>
    </div>
  </article>
)
