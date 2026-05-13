import { products } from '../data/products'
import type { Product, ProductImage, ProductVariant } from '../types'
import { formatCurrency } from './formatCurrency'

export const activeProducts = products.filter((product) => product.status === 'active')

export const getProductById = (id: string | undefined) =>
  activeProducts.find((product) => product.id === id || product.handle === id)

export const getDefaultVariant = (product: Product) =>
  product.variants.find((variant) => variant.available) ?? product.variants[0]

export const getVariantById = (product: Product, variantId: string | undefined) =>
  product.variants.find((variant) => variant.id === variantId) ?? getDefaultVariant(product)

export const parseVariantPrice = (variant: ProductVariant | undefined) =>
  Number(variant?.price ?? 0)

export const getProductImage = (product: Product): ProductImage =>
  product.images[0] ?? { src: '/images/products/product-placeholder.svg', alt: product.title }

export const getProductTypes = () =>
  Array.from(new Set(activeProducts.map((product) => product.product_type)))

export const getProductPriceLabel = (product: Product) =>
  formatCurrency(parseVariantPrice(getDefaultVariant(product)))

export const getCompareAtPriceLabel = (variant: ProductVariant | undefined) =>
  variant?.compare_at_price ? formatCurrency(Number(variant.compare_at_price)) : undefined
