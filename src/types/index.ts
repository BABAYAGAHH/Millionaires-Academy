export interface Product {
  id: string
  slug: string
  title: string
  category: string
  price: number
  priceLabel: string
  image: string
  shortDescription: string
  longDescription: string
  includes: string[]
  whoItIsFor: string
  deliveryMethod: string
  featured: boolean
  checkoutUrl?: string
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
