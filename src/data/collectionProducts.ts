import type { Product } from '../types'

const collectionBaseUrl = 'https://hustlerssquare.com/collections/vendor-list-collections/products'

interface CollectionProductInput {
  index: number
  title: string
  handle: string
  description: string
  price: string
  image: string
  category: string
  details: string[]
}

const makeCollectionProduct = ({
  index,
  title,
  handle,
  description,
  price,
  image,
  category,
  details,
}: CollectionProductInput): Product => ({
  id: `collection_${handle}`,
  handle,
  title,
  description,
  product_type: 'Vendor List',
  vendor: 'Millionaire Square',
  images: [
    {
      src: image,
      alt: `${title} cover`,
    },
  ],
  variants: [
    {
      id: `collection_${handle}_download`,
      title: 'Digital Download',
      price,
      available: true,
      inventory_quantity: 100,
      sku: `MS-VLC-${String(index).padStart(2, '0')}`,
      payment_link_url: `${collectionBaseUrl}/${handle}`,
    },
  ],
  tags: ['collections', 'vendor-list', category],
  status: 'active',
  featured: false,
  details,
  delivery_method: 'Instant digital vendor list access after checkout.',
})

export const collectionProducts: Product[] = [
  makeCollectionProduct({
    index: 1,
    title: 'EVENT DECOR VENDOR (RENTALCHAIRS, ARTIFICIAL FLOWERS, & EVENT DECOR)',
    handle: 'event-decor-vendor-rentalchairs-artificial-flowers-event-decor',
    description:
      'Access event décor vendors for rental chairs, artificial flowers, centerpieces, props, backdrops, and event styling essentials.',
    price: '19.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/ev.jpg?v=1778082624',
    category: 'events',
    details: [
      'Rental event chairs and event décor accessories',
      'Artificial flowers, floral centerpieces, and arches',
      'Backdrop stands, styling frames, vases, and props',
      'Best for event planners, decorators, rental businesses, and wedding vendors',
    ],
  }),
  makeCollectionProduct({
    index: 2,
    title: 'PET FOOD & PET SUPPLIES VENDOR',
    handle: 'pet-food-pet-supplies-vendor',
    description:
      'A vendor resource for pet food, treats, grooming tools, toys, collars, leashes, feeding bowls, and everyday pet care supplies.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/pv.jpg?v=1778082828',
    category: 'pets',
    details: [
      'Dry food, wet food, canned food, and treats',
      'Feeding bowls, dispensers, leashes, collars, and harnesses',
      'Grooming tools, toys, litter, and pet care essentials',
      'Best for pet stores, online pet shops, resellers, and pet care entrepreneurs',
    ],
  }),
  makeCollectionProduct({
    index: 3,
    title: 'DENIM WEAR (TURKEY VENDOR)',
    handle: 'denim-wear-turkey-vendor',
    description:
      'A Turkey-based denim vendor list for premium jeans, jackets, shirts, skirts, trousers, and denim fabric bundles.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/HUSTLERSQUARE.jpg?v=1778083226',
    category: 'fashion',
    details: [
      'Premium denim jeans, jackets, shirts, skirts, and trousers',
      'High-quality denim fabric bundles',
      'Export-quality denim materials and refined finishing',
      'Best for fashion brands, boutiques, denim retailers, and online sellers',
    ],
  }),
  makeCollectionProduct({
    index: 4,
    title: 'DENIM WEAR (CHINA VENDOR)',
    handle: 'denim-wear-china-vendor',
    description:
      'A China denim sourcing list for everyday denim pieces, wholesale production, diverse styles, and resale-friendly denim supply.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/CV.jpg?v=1778085245',
    category: 'fashion',
    details: [
      'Denim jeans, jackets, skirts, shorts, shirts, and fabric bundles',
      'Cost-effective denim sourcing and high-volume production',
      'Wide variety of denim styles and washes',
      'Best for fashion retailers, wholesalers, boutiques, and online fashion stores',
    ],
  }),
  makeCollectionProduct({
    index: 5,
    title: 'FOOT WEAR VENDOR (LEATHER SHOES, HEELS, & SNEAKERS)',
    handle: 'foot-wear-vendor-leather-shoes-heels-sneakers',
    description:
      'A footwear vendor list for leather shoes, heels, sneakers, casual footwear, and lifestyle shoe products with resale demand.',
    price: '19.99',
    image:
      'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/ChatGPTImageMay6_2026_09_24_52AM.png?v=1778085965',
    category: 'fashion',
    details: [
      'Men’s leather shoes, women’s leather shoes, heels, and fashion sneakers',
      'Casual and lifestyle footwear options',
      'High-demand footwear styles for retail and resale',
      'Best for shoe retailers, boutiques, online footwear stores, and resellers',
    ],
  }),
  makeCollectionProduct({
    index: 6,
    title: 'MEDICAL SUPPLIERS VENDOR',
    handle: 'medical-suppliers-vendor',
    description:
      'A medical supplies vendor list for gloves, masks, gowns, syringes, thermometers, monitors, stethoscopes, and first-aid essentials.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/MV.jpg?v=1778157944',
    category: 'medical',
    details: [
      'Disposable gloves, face masks, gowns, and protective wear',
      'Syringes, thermometers, blood pressure monitors, and stethoscopes',
      'First-aid kits, bandages, gauze, and alcohol wipes',
      'Best for clinics, pharmacies, laboratories, healthcare groups, and resellers',
    ],
  }),
  makeCollectionProduct({
    index: 7,
    title: 'SHAPEWEAR, SLIMMING PRODUCTS & GYM EQUIPMENT',
    handle: 'shapewear-slimming-products-gym-equipment',
    description:
      'A fitness and wellness vendor resource for shapewear, slimming products, tumblers, flasks, dumbbells, bands, ropes, and workout accessories.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/SWV.jpg?v=1778158663',
    category: 'wellness',
    details: [
      'Shapewear, waist trainers, body shapers, and compression wear',
      'Slimming tea, wellness products, tumblers, and insulated flasks',
      'Dumbbells, kettlebells, resistance bands, skipping ropes, and fitness accessories',
      'Best for fitness entrepreneurs, gym owners, wellness brands, and lifestyle stores',
    ],
  }),
  makeCollectionProduct({
    index: 8,
    title: 'SLIMMING PRODUCTS VENDOR',
    handle: 'slimming-products-vendor',
    description:
      'A vendor list for slimming tea, wellness sachets, tumblers, insulated flasks, shaker bottles, and hydration accessories.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/SPV.png?v=1778282201',
    category: 'wellness',
    details: [
      'Slimming herbal tea and wellness tea products',
      'Reusable tumblers, insulated flasks, shaker bottles, and hydration accessories',
      'Lifestyle-friendly products with repeat purchase potential',
      'Best for wellness entrepreneurs, fitness communities, retail shops, and resellers',
    ],
  }),
  makeCollectionProduct({
    index: 9,
    title: 'POWER BANK STATION & IPHONE GADGETS',
    handle: 'power-bank-station-iphone-gadgets',
    description:
      'A tech accessories vendor resource for power bank stations, portable chargers, iPhone cables, adapters, MagSafe accessories, and mobile gadgets.',
    price: '19.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/BV.jpg?v=1778283818',
    category: 'technology',
    details: [
      'Power bank stations, portable power banks, and fast-charging power banks',
      'iPhone charging cables, charging adapters, and MagSafe accessories',
      'Phone holders, mounts, and mobile tech accessories',
      'Best for gadget stores, kiosks, tech resellers, retail shops, and online sellers',
    ],
  }),
  makeCollectionProduct({
    index: 10,
    title: 'LACE MATERIALS & GEORGE WRAPPERS',
    handle: 'lace-materials-george-wrappers',
    description:
      'A fabric vendor list for lace materials, embroidered lace, beaded lace, patterned textiles, George wrappers, and premium fabric bundles.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/LV.jpg?v=1778284073',
    category: 'fashion',
    details: [
      'Lace fabrics, embroidered lace, beaded lace, and patterned lace cloths',
      'George wrappers and premium textile fabric bundles',
      'High-demand fashion fabrics with rich textures and premium finishing',
      'Best for fashion designers, tailors, fabric stores, bridal boutiques, and resellers',
    ],
  }),
  makeCollectionProduct({
    index: 11,
    title: 'INTERIOR DECOR VENDOR',
    handle: 'interior-decor-vendor',
    description:
      'A home décor vendor resource for ceramic vases, home accents, furniture pieces, mattresses, bed frames, bedsheets, duvets, and soft furnishings.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/RV.png?v=1778336258',
    category: 'home',
    details: [
      'Decorative ceramic vases, ornaments, and home décor accessories',
      'Furniture pieces, mattresses, bed frames, bedsheets, and duvets',
      'Throw pillows and soft furnishings for modern spaces',
      'Best for interior decorators, home décor stores, short-let owners, and resellers',
    ],
  }),
  makeCollectionProduct({
    index: 12,
    title: 'CAN SEALING MACHINES',
    handle: 'can-sealing-machines',
    description:
      'A vendor list for manual and electric can sealing machines, tabletop sealers, can lids, cans, spare parts, and sealing accessories.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/CV_1.jpg?v=1778337372',
    category: 'equipment',
    details: [
      'Manual can sealing machines, electric can sealing machines, and tabletop can sealers',
      'Can lids, metal cans, sealed sample cans, rollers, spare parts, and accessories',
      'Reliable sealing solutions for food and beverage packaging',
      'Best for food processors, beverage producers, factories, packaging businesses, and startups',
    ],
  }),
  makeCollectionProduct({
    index: 13,
    title: 'BABY & PERSONAL CARE VENDOR',
    handle: 'baby-personal-care-vendor',
    description:
      'A vendor resource for baby wipes, diapers, sanitary pads, panty liners, feminine hygiene products, wellness, and personal care supplies.',
    price: '59.99',
    image:
      'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/CV_1_9ceac60c-22aa-459c-80f4-c6e66722b519.jpg?v=1778337903',
    category: 'personal-care',
    details: [
      'Baby wipes, disposable diapers, sanitary pads, panty liners, and pants-style pads',
      'Feminine hygiene wash products and personal hygiene solutions',
      'Everyday essentials with clean packaging and repeat demand',
      'Best for retailers, pharmacies, supermarkets, online stores, and personal care resellers',
    ],
  }),
  makeCollectionProduct({
    index: 14,
    title: 'BEAUTY & MAKEUP PRODUCTS VENDOR',
    handle: 'beauty-makeup-products-vendor',
    description:
      'A beauty vendor list for lashes, eyelash glue, lash serums, palettes, foundations, lip products, makeup brushes, and cosmetic tools.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/MV_1.jpg?v=1778339457',
    category: 'beauty',
    details: [
      'False eyelashes, eyelash glue, and lash growth serums',
      'Makeup palettes, foundations, face products, lipsticks, and glosses',
      'Makeup brushes and cosmetic tools',
      'Best for beauty entrepreneurs, makeup artists, cosmetic retailers, salons, and resellers',
    ],
  }),
  makeCollectionProduct({
    index: 15,
    title: 'KOREAN BEAUTY PRODUCTS VENDOR',
    handle: 'korean-beauty-products-vendor',
    description:
      'A K-beauty vendor list for cleansers, toners, essences, serums, moisturizers, sheet masks, ampoules, and skin repair treatments.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/KBP.jpg?v=1778340768',
    category: 'beauty',
    details: [
      'Facial cleansers, toners, essences, serums, and moisturizers',
      'Sheet masks, treatment masks, ampoules, and skin repair products',
      'High-demand K-beauty products for retail and private branding',
      'Best for skincare resellers, salons, spas, beauty stores, and e-commerce sellers',
    ],
  }),
  makeCollectionProduct({
    index: 16,
    title: 'SKINCARE TRAINING VENDOR / COURSE LIST',
    handle: 'skincare-training-vendor-course-list',
    description:
      'A skincare training resource for founders who want verified skincare education, product knowledge, application guidance, and client-care direction.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/SKV.jpg?v=1778363880',
    category: 'beauty',
    details: [
      'Verified skincare training for beginner to advanced learners',
      'Product knowledge and application guidance',
      'Easy-to-start education without certification barriers',
      'Best for estheticians, skincare entrepreneurs, and beauty founders',
    ],
  }),
  makeCollectionProduct({
    index: 17,
    title: 'CHILDREN’S CLOTHES & SHOES VENDOR LIST',
    handle: 'children-s-clothes-amp-shoes-vendor-list',
    description:
      'A children’s clothing and shoes vendor list for baby, toddler, and kidswear suppliers with comfortable, parent-approved styles.',
    price: '0.00',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/CLV.jpg?v=1778364569',
    category: 'kids-fashion',
    details: [
      'Children’s clothing and shoe vendor access',
      'Baby, toddler, and kidswear supplier direction',
      'Trendy everyday kidswear and bulk order opportunities',
      'Best for kids fashion brands, boutiques, online stores, and resellers',
    ],
  }),
  makeCollectionProduct({
    index: 18,
    title: 'HAIR VENDOR LIST – CHINA & VIETNAM',
    handle: 'hair-vendor-list-china-amp-vietnam',
    description:
      'A premium hair vendor list connecting beauty founders with China and Vietnam suppliers for bundles, wigs, closures, frontals, and custom textures.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/HLV.jpg?v=1778365199',
    category: 'beauty',
    details: [
      'China and Vietnam hair vendor access',
      'Raw, virgin, and luxury-grade hair options',
      'Bundles, wigs, closures, frontals, and custom textures',
      'Best for hair businesses, beauty brands, boutiques, and online sellers',
    ],
  }),
  makeCollectionProduct({
    index: 19,
    title: 'SHAPEWEAR VENDOR LIST – CHINA',
    handle: 'shapewear-vendor-list-china',
    description:
      'A China shapewear vendor list for waist trainers, bodysuits, shorts, seamless styles, private label sourcing, and bulk production.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/RLV.jpg?v=1778365705',
    category: 'fashion',
    details: [
      'China-based shapewear manufacturer access',
      'High-compression and seamless shapewear styles',
      'Waist trainers, bodysuits, shorts, private label, and bulk options',
      'Best for shapewear brands, boutiques, wellness sellers, and resellers',
    ],
  }),
  makeCollectionProduct({
    index: 20,
    title: 'CLOTHING VENDOR LIST – CHINA',
    handle: 'clothing-vendor-list-china',
    description:
      'A China clothing vendor list for boutique-ready apparel, everyday fashion, private label sourcing, custom production, and bulk orders.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/LLV.jpg?v=1778366022',
    category: 'fashion',
    details: [
      'China apparel manufacturer access',
      'Trendy boutique-ready styles and everyday fashion pieces',
      'No reseller permit requirement for beginner-friendly sourcing',
      'Best for clothing brands, boutiques, private labels, and online sellers',
    ],
  }),
  makeCollectionProduct({
    index: 21,
    title: 'JEWELRY VENDOR LIST – CHINA ONLY',
    handle: 'jewelry-vendor-list-china-only',
    description:
      'A China jewelry vendor list for fashion jewelry, rings, necklaces, bracelets, earrings, custom designs, and luxury-inspired pieces.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/JLV.jpg?v=1778366639',
    category: 'jewelry',
    details: [
      'China-based fashion jewelry vendor access',
      'Luxury-inspired pieces, rings, necklaces, bracelets, earrings, and custom designs',
      'Factory pricing, bulk options, and private label opportunities',
      'Best for jewelry boutiques, online brands, fashion sellers, and resellers',
    ],
  }),
  makeCollectionProduct({
    index: 22,
    title: 'HAIR AND PERFUME VENDOR',
    handle: 'hair-and-perfume-vendor',
    description:
      'A beauty vendor list for hair and perfume suppliers across the U.S., China, and Vietnam, including luxury hair products and premium fragrances.',
    price: '59.99',
    image:
      'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/JEV_c2b1f11a-889b-492d-8d1e-56ce397c25a0.jpg?v=1778367185',
    category: 'beauty',
    details: [
      'U.S., China, and Vietnam supplier access',
      'Luxury hair products and premium fragrance sourcing',
      'Private-label perfume and raw hair vendor direction',
      'Best for beauty entrepreneurs, hair brands, perfume sellers, and online stores',
    ],
  }),
  makeCollectionProduct({
    index: 23,
    title: "CHILDREN'S CLOTHES & SHOES VENDORS",
    handle: 'children-s-clothes-shoes-vendors',
    description:
      'A children’s fashion vendor list for baby, toddler, and kids apparel and footwear suppliers with comfort, safety, and style in mind.',
    price: '59.99',
    image:
      'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/LLV_7b1e6c2a-7339-4f97-b078-d85702f46887.jpg?v=1778367007',
    category: 'kids-fashion',
    details: [
      'Verified children’s clothing and shoe vendors',
      'Baby, toddler, and kids fashion suppliers',
      'Private label and wholesale options for resale businesses',
      'Best for kids fashion brands, children boutiques, online stores, and e-commerce sellers',
    ],
  }),
  makeCollectionProduct({
    index: 24,
    title: 'SKINCARE TRAINING VENDOR',
    handle: 'skincare-training-vendor',
    description:
      'A skincare training vendor resource covering skincare knowledge, product usage, skin types, routines, and practical business-ready techniques.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/SEV.jpg?v=1778367866',
    category: 'beauty',
    details: [
      'Verified skincare education and practical training',
      'Clear explanations of skin types, concerns, and product application',
      'Beginner-friendly lessons for personal or business use',
      'Best for skincare beginners, beauty entrepreneurs, estheticians, and creators',
    ],
  }),
  makeCollectionProduct({
    index: 25,
    title: 'PHONE AND ELECTRONICS VENDOR',
    handle: 'phone-and-electronics-vendor',
    description:
      'A vendor list for smartphones, electronics, accessories, wearables, smart gadgets, private label opportunities, and resale-ready tech essentials.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/PEV.jpg?v=1778367574',
    category: 'technology',
    details: [
      'Verified phone and electronics suppliers',
      'Smartphones, accessories, wearables, and smart gadgets',
      'Wholesale pricing and private label opportunities on accessories',
      'Best for electronics resellers, phone accessory brands, tech stores, and gadget entrepreneurs',
    ],
  }),
  makeCollectionProduct({
    index: 26,
    title: 'SHOES VENDOR',
    handle: 'shoes-vendor',
    description:
      'A China shoe vendor list for men’s, women’s, and kids’ footwear suppliers with private label, custom designs, and wholesale sourcing.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/SHEV.jpg?v=1778368252',
    category: 'fashion',
    details: [
      'Verified shoe manufacturers in China',
      'Men’s, women’s, and kids’ footwear suppliers',
      'Private label, custom design, wholesale pricing, and flexible MOQ options',
      'Best for footwear brands, online shoe stores, private label businesses, and resellers',
    ],
  }),
  makeCollectionProduct({
    index: 27,
    title: 'LUXURY GOODS VENDORS',
    handle: 'luxury-goods-vendors',
    description:
      'A luxury-inspired goods vendor list for premium clone-quality bags, shoes, watches, accessories, and high-margin resale products.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/LHEV.jpg?v=1778368680',
    category: 'fashion',
    details: [
      'Verified luxury clone-quality vendor access',
      'Luxury-inspired bags, shoes, watches, and accessories',
      'High-grade materials, premium finishing, and wholesale pricing for resellers',
      'Best for luxury resellers, fashion entrepreneurs, online boutiques, and social media sellers',
    ],
  }),
  makeCollectionProduct({
    index: 28,
    title: 'KITCHEN ASSESORIES VENDOR',
    handle: 'kitchen-assesories-vendor',
    description:
      'A kitchen accessories vendor list for cookware, utensils, appliances, storage products, private label sourcing, and modern home essentials.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/KHEV.jpg?v=1778369165',
    category: 'home',
    details: [
      'Verified kitchen accessories manufacturers and suppliers',
      'Cookware, utensils, appliances, storage solutions, and modern kitchen products',
      'Private label, custom branding, wholesale, and bulk sourcing options',
      'Best for kitchen brands, e-commerce sellers, private label businesses, and home décor stores',
    ],
  }),
  makeCollectionProduct({
    index: 29,
    title: 'US & CHINA PACKAGING VENDORS',
    handle: 'us-china-packaging-vendors',
    description:
      'A U.S. and China packaging vendor list for boxes, bags, jars, containers, mailers, logo printing, private label packaging, and custom branding.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/KV.jpg?v=1778369406',
    category: 'packaging',
    details: [
      'Verified U.S. and China packaging manufacturers',
      'Custom logo printing, private label packaging, boxes, bags, jars, containers, and mailers',
      'Eco-friendly, luxury packaging, low MOQ, and bulk pricing options',
      'Best for beauty brands, clothing businesses, e-commerce sellers, and product-based entrepreneurs',
    ],
  }),
  makeCollectionProduct({
    index: 30,
    title: 'TURKEY CLOTHING VENDORS',
    handle: 'turkey-clothing-vendors',
    description:
      'A Turkey clothing vendor list for premium fabrics, modern designs, women’s wear, modest wear, ready-to-wear clothing, and private label production.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/TV.jpg?v=1778369657',
    category: 'fashion',
    details: [
      'Verified Turkish clothing manufacturers and suppliers',
      'Private label and custom branding options',
      'High-quality fabrics, modern designs, wholesale pricing, and export-ready vendors',
      'Best for fashion startups, boutiques, online clothing brands, modest fashion lines, and private labels',
    ],
  }),
  makeCollectionProduct({
    index: 31,
    title: 'MEDICAL SCRUB VENDORS',
    handle: 'medical-scrub-vendor',
    description:
      'A medical scrub vendor list for high-quality scrubs with private labeling, custom packaging, multiple fabric options, and wholesale sourcing.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/MV_2.jpg?v=1778370033',
    category: 'medical',
    details: [
      'Verified medical scrub manufacturers and suppliers',
      'Private label, custom branding, and custom packaging options',
      'Breathable, stretch, and moisture-resistant fabric options',
      'Best for medical apparel brands, healthcare entrepreneurs, online scrub stores, and clinics',
    ],
  }),
  makeCollectionProduct({
    index: 32,
    title: 'BEAUTY BRAND VENDOR',
    handle: 'beauty-brand-vendor',
    description:
      'An accessories starter kit with U.S. and China vendor access, startup guidance, packaging vendors, and a how-to-start accessories business eBook.',
    price: '59.99',
    image: 'https://cdn.shopify.com/s/files/1/0963/5948/1654/files/BV_1.jpg?v=1778370204',
    category: 'beauty',
    details: [
      'U.S. and China-based vendors for jewelry, sunglasses, handbags, hair accessories, and more',
      'No-permit and reseller-permit vendor options',
      'Custom packaging vendors for earring cards, jewelry cards, boxes, branded mailers, and more',
      'Includes a how-to-start accessories business eBook',
    ],
  }),
]
