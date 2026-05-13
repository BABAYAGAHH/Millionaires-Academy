import type { CartLine, Product, ProductVariant } from '../types'
import { getProductImage } from './productUtils'

export const getCartLineId = (productId: string, variantId: string) =>
  `${productId}:${variantId}`

export const normalizeCartQuantity = (quantity: number, inventoryQuantity?: number) => {
  const safeQuantity = Number.isFinite(quantity) ? Math.floor(quantity) : 1
  const minimumQuantity = Math.max(1, safeQuantity)

  if (typeof inventoryQuantity !== 'number' || inventoryQuantity < 1) {
    return minimumQuantity
  }

  return Math.min(minimumQuantity, inventoryQuantity)
}

export const createCartLine = (
  product: Product,
  variant: ProductVariant,
  quantity: number,
): CartLine => ({
  id: getCartLineId(product.id, variant.id),
  productId: product.id,
  productHandle: product.handle,
  variantId: variant.id,
  productTitle: product.title,
  variantTitle: variant.title,
  productType: product.product_type,
  price: Number(variant.price),
  compareAtPrice: variant.compare_at_price ? Number(variant.compare_at_price) : undefined,
  quantity: normalizeCartQuantity(quantity, variant.inventory_quantity),
  image: getProductImage(product),
  paymentLinkUrl: variant.payment_link_url,
})
