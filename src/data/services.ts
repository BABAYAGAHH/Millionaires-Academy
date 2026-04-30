import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'business-mentorship',
    title: 'One-on-One Business Mentorship',
    description:
      'Focused support to help you clarify your business idea, organize your next steps, and build with confidence.',
    includes: [
      'Clarity-focused strategy conversation',
      'Implementation guidance',
      'Priority roadmap',
      'Business growth recommendations',
    ],
    ctaLabel: 'Book Strategy Session',
    ctaHref: '/book-session',
    iconName: 'Users',
  },
  {
    id: 'vendor-guidance',
    title: 'Vendor Guidance & Resource Support',
    description:
      'Access practical vendor resources and sourcing direction for packaging, boutique products, business forms, and launch preparation.',
    includes: [
      'Curated sourcing direction',
      'Packaging and product guidance',
      'Resource recommendations',
      'Launch preparation support',
    ],
    ctaLabel: 'Explore Vendor Guidance',
    ctaHref: '/vendor-lists',
    iconName: 'Package',
  },
  {
    id: 'shopify-support',
    title: 'Custom Website Support',
    description:
      'Launch a premium online presence with clean structure, polished visuals, and conversion-focused sections.',
    includes: [
      'Premium homepage structure',
      'Product organization',
      'Brand styling direction',
      'Launch preparation support',
    ],
    ctaLabel: 'View Website Support',
    ctaHref: '/custom-website',
    iconName: 'Monitor',
  },
  {
    id: 'launch-strategy',
    title: 'Business Launch Strategy',
    description:
      'A conversion-focused strategy offer for entrepreneurs who need a clearer launch plan, stronger structure, and practical next steps.',
    includes: [
      'Launch planning',
      'Offer positioning',
      'Action roadmap',
      'Priority recommendations',
    ],
    ctaLabel: 'Apply Now',
    ctaHref: '/contact',
    iconName: 'Target',
  },
  {
    id: 'digital-blueprints',
    title: 'Digital Product & Blueprint Access',
    description:
      'Practical templates, checklists, and business blueprints created to help you move from idea to structure, launch, and growth.',
    includes: [
      'Downloadable resources',
      'Step-by-step guidance',
      'Beginner-friendly tools',
      'Action-ready templates',
    ],
    ctaLabel: 'Explore Resources',
    ctaHref: '/shop',
    iconName: 'BookOpen',
  },
  {
    id: 'brand-direction',
    title: 'Brand Direction Session',
    description:
      'Clarify your visual direction, brand presence, and presentation so your business feels more aligned, premium, and trust-building.',
    includes: [
      'Brand feedback',
      'Presentation guidance',
      'Visual direction',
      'Refinement notes',
    ],
    ctaLabel: 'Apply for Guidance',
    ctaHref: '/contact',
    iconName: 'Palette',
  },
]
