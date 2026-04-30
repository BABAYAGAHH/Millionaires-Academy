import type { Package } from '../types'

export const packages: Package[] = [
  {
    id: 'academy-starter',
    name: 'Academy Starter',
    priceLabel: '$49',
    description:
      'For beginners who need clarity, simple direction, and practical resources to organize their business idea.',
    includes: [
      'Business starter checklist',
      'One digital launch blueprint',
      'Vendor and resource direction',
      'Launch preparation guide',
    ],
    ctaLabel: 'Start Here',
    ctaHref: '/shop',
  },
  {
    id: 'brand-builder',
    name: 'Brand Builder',
    priceLabel: '$199',
    description:
      'For entrepreneurs ready to launch with stronger structure, brand direction, and focused strategy.',
    includes: [
      'Strategy session',
      'Vendor guidance',
      'Brand direction checklist',
      'Website planning roadmap',
      'Launch action plan',
    ],
    ctaLabel: 'Book Now',
    ctaHref: '/book-session',
    highlighted: true,
  },
  {
    id: 'premium-launch-partner',
    name: 'Premium Launch Partner',
    priceLabel: 'Custom',
    description:
      'For serious clients who want high-touch support with business structure, Shopify planning, and launch preparation.',
    includes: [
      'Business strategy support',
      'Shopify website setup planning',
      'Product and category structure',
      'Launch guidance',
      'Premium implementation support',
    ],
    ctaLabel: 'Apply Now',
    ctaHref: '/contact',
  },
]
