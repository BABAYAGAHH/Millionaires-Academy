import productPlaceholder from '../assets/images/product-placeholder.svg'
import shopifyPlaceholder from '../assets/images/shopify-placeholder.svg'
import vendorPlaceholder from '../assets/images/vendor-placeholder.svg'
import type { Product } from '../types'

export const products: Product[] = [
  {
    id: 'us-china-packaging-vendors',
    slug: 'us-china-packaging-vendors',
    title: 'US & China Packaging Vendors',
    category: 'Vendor Guidance',
    price: 49,
    priceLabel: '$49',
    image: vendorPlaceholder,
    shortDescription:
      'A curated Millionaires Academy vendor resource for entrepreneurs who need packaging options for their products.',
    longDescription:
      'This Millionaires Academy resource helps business owners explore packaging vendor options and prepare better for sourcing, branding, and product presentation. It is designed to reduce the trial-and-error phase and help you source with more confidence.',
    includes: [
      'US packaging vendor direction',
      'China packaging vendor direction',
      'Sourcing preparation tips',
      'Branding and packaging checklist',
    ],
    whoItIsFor:
      'Boutique owners, product sellers, beauty brands, and entrepreneurs preparing to launch physical products.',
    deliveryMethod: 'Digital access after purchase.',
    featured: true,
    checkoutUrl: undefined,
  },
  {
    id: 'shopify-masterclass',
    slug: 'shopify-masterclass',
    title: 'Shopify Masterclass',
    category: 'Academy Masterclass',
    price: 129.99,
    priceLabel: '$129.99',
    image: shopifyPlaceholder,
    shortDescription:
      'A practical Millionaires Academy guide to understanding how to build and organize your Shopify store.',
    longDescription:
      'The Millionaires Academy Shopify Masterclass walks through the core structure of a polished online store, from product setup to homepage direction, so you can launch with more clarity and less overwhelm.',
    includes: [
      'Store setup guidance',
      'Product and category planning',
      'Homepage structure',
      'Launch checklist',
    ],
    whoItIsFor:
      'Business owners who want to understand store setup, customer flow, and how to structure Shopify the right way before launch.',
    deliveryMethod: 'Digital course access after purchase.',
    featured: true,
    checkoutUrl: undefined,
  },
  {
    id: 'custom-shopify-website',
    slug: 'custom-shopify-website',
    title: 'Custom Shopify Website',
    category: 'Shopify Support',
    price: 599.99,
    priceLabel: 'Starting at $599.99',
    image: shopifyPlaceholder,
    shortDescription:
      'Premium Shopify website support from Millionaires Academy for business owners ready to launch professionally.',
    longDescription:
      'This Millionaires Academy offer is for founders who need a more elevated, structured Shopify experience with premium page direction, product organization, and launch-ready presentation.',
    includes: [
      'Shopify structure planning',
      'Homepage layout guidance',
      'Product and category setup direction',
      'Brand styling support',
      'Launch preparation checklist',
    ],
    whoItIsFor:
      'Founders ready to move from a DIY-looking storefront to a more polished online shopping experience.',
    deliveryMethod: 'Service-based support with kickoff planning after inquiry.',
    featured: true,
    checkoutUrl: undefined,
  },
  {
    id: 'idea-to-income-roadmap-blueprint',
    slug: 'idea-to-income-roadmap-blueprint',
    title: 'Idea to Income Roadmap Blueprint',
    category: 'Digital Blueprints',
    price: 39,
    priceLabel: '$39',
    image: productPlaceholder,
    shortDescription:
      'A Millionaires Academy roadmap for turning a business idea into an organized launch plan.',
    longDescription:
      'This Millionaires Academy blueprint helps you break a broad idea down into practical business actions so you can move with focus, not confusion.',
    includes: [
      'Launch roadmap',
      'Offer planning prompts',
      'Business structure checklist',
      'Action steps by stage',
    ],
    whoItIsFor:
      'Aspiring entrepreneurs who have an idea but need a realistic path to turn it into a structured launch.',
    deliveryMethod: 'Digital download after purchase.',
    featured: true,
    checkoutUrl: undefined,
  },
  {
    id: 'cleaning-business-internal-forms',
    slug: 'cleaning-business-internal-forms',
    title: 'Cleaning Business Internal Forms',
    category: 'Business Forms',
    price: 29,
    priceLabel: '$29',
    image: productPlaceholder,
    shortDescription:
      'Forms and structure templates from Millionaires Academy for cleaning business owners.',
    longDescription:
      'A clean set of internal forms and templates from Millionaires Academy to help you organize client communication, internal operations, and service expectations with more confidence.',
    includes: [
      'Operational form templates',
      'Internal organization guide',
      'Service workflow prompts',
      'Client-ready structure notes',
    ],
    whoItIsFor:
      'Cleaning business owners who want more internal structure and a more polished client process.',
    deliveryMethod: 'Digital file access after purchase.',
    featured: true,
    checkoutUrl: undefined,
  },
  {
    id: 'move-in-move-out-blueprint',
    slug: 'move-in-move-out-blueprint',
    title: 'Move In Move Out Blueprint',
    category: 'Digital Blueprints',
    price: 35,
    priceLabel: '$35',
    image: productPlaceholder,
    shortDescription:
      'A practical Millionaires Academy blueprint for organizing move-in and move-out cleaning service offers.',
    longDescription:
      'This Millionaires Academy resource helps cleaning business owners package, position, and structure a move-in and move-out offer with more clarity.',
    includes: [
      'Offer structure guide',
      'Service scope prompts',
      'Pricing preparation notes',
      'Delivery and presentation checklist',
    ],
    whoItIsFor:
      'Cleaning business owners who want to build a more intentional service offer for residential move support.',
    deliveryMethod: 'Digital download after purchase.',
    featured: true,
    checkoutUrl: undefined,
  },
  {
    id: 'boutique-vendor-starter-list',
    slug: 'boutique-vendor-starter-list',
    title: 'Boutique Vendor Starter List',
    category: 'Vendor Guidance',
    price: 59,
    priceLabel: '$59',
    image: vendorPlaceholder,
    shortDescription:
      'Millionaires Academy vendor direction for boutique owners preparing to source products.',
    longDescription:
      'This Millionaires Academy starter resource gives boutique owners a clearer path for sourcing with more direction, better questions, and a stronger product planning mindset.',
    includes: [
      'Vendor direction by product type',
      'Boutique sourcing notes',
      'Product planning prompts',
      'Beginner-friendly startup guidance',
    ],
    whoItIsFor:
      'Boutique founders preparing to source products and build an online or in-person retail offer.',
    deliveryMethod: 'Digital access after purchase.',
    featured: false,
    checkoutUrl: undefined,
  },
  {
    id: 'business-launch-checklist',
    slug: 'business-launch-checklist',
    title: 'Business Launch Checklist',
    category: 'Digital Blueprints',
    price: 19,
    priceLabel: '$19',
    image: productPlaceholder,
    shortDescription:
      'A simple Millionaires Academy checklist for organizing your business before launch.',
    longDescription:
      'An easy-to-follow Millionaires Academy checklist that helps you cover the foundational setup details most entrepreneurs overlook before going live.',
    includes: [
      'Launch checklist',
      'Planning checkpoints',
      'Brand setup reminders',
      'Offer readiness prompts',
    ],
    whoItIsFor:
      'Entrepreneurs who want a calmer, more organized start instead of launching without a plan.',
    deliveryMethod: 'Instant digital delivery after purchase.',
    featured: false,
    checkoutUrl: undefined,
  },
]
