import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '../../types'
import {
  getCompareAtPriceLabel,
  getDefaultVariant,
  getProductImage,
  getProductPriceLabel,
} from '../../utils/productUtils'
import { Badge } from '../common/Badge'
import { AddToCartButton } from '../store/AddToCartButton'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const image = getProductImage(product)
  const defaultVariant = getDefaultVariant(product)
  const compareAtPrice = getCompareAtPriceLabel(defaultVariant)

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-stanBlack/10 bg-white p-3 shadow-stan transition duration-300 hover:-translate-y-1 hover:border-stanBlack/20">
      <div className="grid gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-stretch">
        <Link
          className="relative block overflow-hidden rounded-[1.55rem] bg-stanSurface"
          to={`/product/${product.id}`}
        >
          <Badge className="absolute left-3 top-3 z-10 bg-white/90 text-[0.66rem]" variant="light">
            {product.product_type}
          </Badge>
          <img
            alt={image.alt}
            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-full sm:min-h-40"
            src={image.src}
          />
        </Link>
        <div className="flex min-w-0 flex-col justify-between px-1 pb-2 sm:py-2 sm:pr-3">
          <div>
            <Link className="group/title inline-flex items-start gap-2" to={`/product/${product.id}`}>
              <h3 className="text-[1.45rem] font-black leading-tight text-stanBlack transition group-hover/title:text-emeraldDeep sm:text-[1.65rem]">
                {product.title}
              </h3>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted transition group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 group-hover/title:text-stanBlack" />
            </Link>
            <p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-muted">
              {product.description}
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 border-t border-stanBlack/10 pt-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-muted">
                Instant access
              </p>
              <div className="mt-1 flex flex-wrap items-baseline gap-2">
                <p className="text-2xl font-black text-stanBlack">
                  {getProductPriceLabel(product)}
                </p>
                {compareAtPrice ? (
                  <p className="text-sm font-semibold text-muted line-through">{compareAtPrice}</p>
                ) : null}
              </div>
            </div>
            <AddToCartButton
              className="w-full shrink-0 sm:w-auto"
              label="Add"
              product={product}
              size="sm"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </article>
  )
}
