export type ProductStatus = 'active' | 'draft' | 'archived'

export interface ProductImage {
  src: string
  alt: string
}

export interface ProductVariant {
  id: string
  title: string
  price: string
  compare_at_price?: string
  available: boolean
  inventory_quantity: number
  sku?: string
  payment_link_url?: string
}

export interface Product {
  id: string
  handle: string
  title: string
  description: string
  description_html?: string
  product_type: string
  vendor?: string
  images: ProductImage[]
  variants: ProductVariant[]
  tags: string[]
  status: ProductStatus
  featured?: boolean
  details?: string[]
  delivery_method?: string
}

export interface CartLine {
  id: string
  productId: string
  productHandle: string
  variantId: string
  productTitle: string
  variantTitle: string
  productType: string
  price: number
  compareAtPrice?: number
  quantity: number
  image: ProductImage
  paymentLinkUrl?: string
}

export interface Service {
  id: string
  title: string
  description: string
  includes: string[]
  ctaLabel: string
  ctaHref: string
  iconName: string
}

export interface Package {
  id: string
  name: string
  priceLabel: string
  description: string
  includes: string[]
  ctaLabel: string
  ctaHref: string
  highlighted?: boolean
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

export interface NavigationItem {
  label: string
  href: string
}
