import { Link } from 'react-router-dom'
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
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-neutralBorder bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <Link
        className="relative block overflow-hidden border-b border-neutralBorder bg-gradient-to-b from-cream to-warmWhite p-4 sm:p-5"
        to={`/product/${product.id}`}
      >
        <Badge className="absolute left-7 top-7 z-10" variant="light">
          {product.product_type}
        </Badge>
        <div className="overflow-hidden rounded-[1.45rem] bg-cream/50">
          <img
            alt={image.alt}
            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            src={image.src}
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="space-y-3">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-[1.55rem] font-semibold leading-tight text-softBlack transition hover:text-emeraldDeep">
              {product.title}
            </h3>
          </Link>
          <p className="line-clamp-3 text-sm leading-7 text-muted">{product.description}</p>
        </div>
        <div className="mt-6 flex flex-1 items-end">
          <div className="w-full border-t border-neutralBorder pt-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  Price
                </p>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <p className="text-2xl font-semibold text-emeraldDeep">
                    {getProductPriceLabel(product)}
                  </p>
                  {compareAtPrice ? (
                    <p className="text-sm text-muted line-through">{compareAtPrice}</p>
                  ) : null}
                </div>
              </div>
              <AddToCartButton
                className="w-full sm:w-auto"
                product={product}
                variant="outline"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
