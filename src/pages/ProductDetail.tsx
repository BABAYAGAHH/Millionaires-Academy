import { ArrowRight, CheckCircle2, Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { useCart } from '../context/cartStore'
import { createCartLine, normalizeCartQuantity } from '../utils/cartUtils'
import { createCheckoutSession } from '../utils/checkout'
import { formatCurrency } from '../utils/formatCurrency'
import {
  getCompareAtPriceLabel,
  getDefaultVariant,
  getProductById,
  getProductImage,
  getVariantById,
  parseVariantPrice,
} from '../utils/productUtils'
import { usePageTitle } from '../utils/usePageTitle'
import { NotFound } from './NotFound'

export const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const [variantId, setVariantId] = useState(() => product ? getDefaultVariant(product)?.id : '')
  const [quantity, setQuantity] = useState(1)
  const [checkoutError, setCheckoutError] = useState('')
  const [isBuyingNow, setIsBuyingNow] = useState(false)
  const { addItem, items } = useCart()

  usePageTitle(
    product
      ? `${product.title} | Millionaires Academy`
      : 'Product Not Found | Millionaires Academy',
  )

  if (!product) {
    return <NotFound />
  }

  const selectedVariant = getVariantById(product, variantId)
  const image = getProductImage(product)
  const price = parseVariantPrice(selectedVariant)
  const compareAtPrice = getCompareAtPriceLabel(selectedVariant)

  const handleAddToCart = () => {
    if (!selectedVariant) {
      return
    }

    addItem(product, selectedVariant.id, quantity)
  }

  const handleBuyNow = async () => {
    if (!selectedVariant) {
      return
    }

    setCheckoutError('')
    setIsBuyingNow(true)
    addItem(product, selectedVariant.id, quantity)

    try {
      const nextLine = createCartLine(product, selectedVariant, quantity)
      const checkoutItems = items.some((item) => item.id === nextLine.id)
        ? items.map((item) =>
            item.id === nextLine.id
              ? {
                  ...item,
                  quantity: normalizeCartQuantity(
                    item.quantity + nextLine.quantity,
                    selectedVariant.inventory_quantity,
                  ),
                }
              : item,
          )
        : [...items, nextLine]
      const checkoutUrl = await createCheckoutSession(checkoutItems)
      window.location.assign(checkoutUrl)
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : 'Checkout is unavailable.')
    } finally {
      setIsBuyingNow(false)
    }
  }

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] border border-neutralBorder bg-cream/72 p-5 shadow-soft">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  alt={image.alt}
                  className="aspect-[4/4.5] w-full object-cover"
                  src={image.src}
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft">
              <Badge>{product.product_type}</Badge>
              <h1 className="text-balance mt-5 text-4xl font-semibold leading-tight text-softBlack sm:text-5xl">
                {product.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-baseline gap-3">
                <p className="text-3xl font-semibold text-emeraldDeep">
                  {formatCurrency(price)}
                </p>
                {compareAtPrice ? (
                  <p className="text-base text-muted line-through">{compareAtPrice}</p>
                ) : null}
              </div>
              <p className="mt-6 text-base leading-8 text-muted">
                {product.description}
              </p>

              {product.variants.length > 1 ? (
                <label className="mt-7 block">
                  <span className="text-sm font-semibold text-softBlack">Choose option</span>
                  <select
                    className="mt-3 w-full rounded-2xl border border-neutralBorder bg-cream/50 px-4 py-3 text-sm text-charcoal"
                    onChange={(event) => setVariantId(event.target.value)}
                    value={variantId}
                  >
                    {product.variants.map((variant) => (
                      <option disabled={!variant.available} key={variant.id} value={variant.id}>
                        {variant.title} - {formatCurrency(Number(variant.price))}
                      </option>
                    ))}
                  </select>
                </label>
              ) : null}

              <div className="mt-7">
                <p className="text-sm font-semibold text-softBlack">Quantity</p>
                <div className="mt-3 inline-flex items-center rounded-full border border-neutralBorder bg-cream/50">
                  <button
                    aria-label="Decrease quantity"
                    className="inline-flex h-11 w-11 items-center justify-center text-emeraldDeep"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    type="button"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm font-semibold text-charcoal">
                    {quantity}
                  </span>
                  <button
                    aria-label="Increase quantity"
                    className="inline-flex h-11 w-11 items-center justify-center text-emeraldDeep"
                    onClick={() => setQuantity((value) => value + 1)}
                    type="button"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {checkoutError ? (
                <div className="mt-6 rounded-2xl border border-burntOrange/30 bg-burntOrange/10 px-4 py-3 text-sm leading-6 text-charcoal">
                  {checkoutError}
                </div>
              ) : null}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Button fullWidth onClick={handleAddToCart} size="lg" variant="outline">
                  Add to Cart
                </Button>
                <Button
                  disabled={!selectedVariant?.available || isBuyingNow}
                  fullWidth
                  onClick={handleBuyNow}
                  size="lg"
                  variant="secondary"
                >
                  {isBuyingNow ? 'Starting Checkout...' : 'Buy Now'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">
                Checkout redirects to the configured payment provider. Add Stripe
                credentials or payment links before taking live orders.
              </p>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-neutralBorder bg-white p-7 shadow-soft lg:col-span-2">
              <SectionHeader
                description="Everything included in this offer is designed to make execution feel easier and more structured."
                eyebrow="What's Included"
                title="Here's what you'll get."
              />
              <ul className="mt-8 space-y-4">
                {(product.details ?? []).map((item) => (
                  <li className="flex gap-3" key={item}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-sm leading-7 text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <div className="space-y-6">
              <article className="rounded-3xl border border-neutralBorder bg-white p-7 shadow-soft">
                <h2 className="text-2xl font-semibold text-softBlack">
                  Who this is for
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {product.tags.map((tag) => `#${tag}`).join(' · ')}
                </p>
              </article>
              <article className="rounded-3xl border border-neutralBorder bg-cream/72 p-7 shadow-soft">
                <h2 className="text-2xl font-semibold text-softBlack">
                  Delivery method
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {product.delivery_method ?? 'Digital delivery after checkout.'}
                </p>
              </article>
              <article className="rounded-3xl border border-neutralBorder bg-white p-7 shadow-soft">
                <h2 className="text-2xl font-semibold text-softBlack">
                  Support note
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  If you're not sure whether this resource fits your stage, use
                  the contact page and Millionaires Academy can help you choose a
                  better next step.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  )
}
