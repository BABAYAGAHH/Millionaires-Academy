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
      <AnimatedSection className="pt-7 sm:pt-10">
        <Container>
          <div className="mx-auto grid max-w-2xl gap-4">
            <div className="overflow-hidden rounded-[2.25rem] border border-stanBlack/10 bg-white p-3 shadow-stan">
              <div className="overflow-hidden rounded-[1.9rem] bg-stanSurface">
                <img
                  alt={image.alt}
                  className="aspect-[4/3] w-full object-cover"
                  src={image.src}
                />
              </div>
            </div>

            <div className="rounded-[2.25rem] border border-stanBlack/10 bg-white p-5 shadow-stan sm:p-7">
              <Badge className="bg-stanSurface text-stanBlack" variant="light">
                {product.product_type}
              </Badge>
              <h1 className="text-balance mt-5 text-4xl font-black leading-tight text-stanBlack sm:text-5xl">
                {product.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-baseline gap-3">
                <p className="text-3xl font-black text-stanBlack">
                  {formatCurrency(price)}
                </p>
                {compareAtPrice ? (
                  <p className="text-base font-semibold text-muted line-through">{compareAtPrice}</p>
                ) : null}
              </div>
              <p className="mt-5 text-base font-semibold leading-8 text-muted">
                {product.description}
              </p>

              {product.variants.length > 1 ? (
                <label className="mt-7 block">
                  <span className="text-sm font-extrabold text-stanBlack">Choose option</span>
                  <select
                    className="mt-3 w-full rounded-2xl border border-stanBlack/10 bg-stanSurface px-4 py-3 text-sm font-semibold text-stanBlack"
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
                <p className="text-sm font-extrabold text-stanBlack">Quantity</p>
                <div className="mt-3 inline-flex items-center rounded-full border border-stanBlack/10 bg-stanSurface">
                  <button
                    aria-label="Decrease quantity"
                    className="inline-flex h-11 w-11 items-center justify-center text-stanBlack"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    type="button"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm font-extrabold text-stanBlack">
                    {quantity}
                  </span>
                  <button
                    aria-label="Increase quantity"
                    className="inline-flex h-11 w-11 items-center justify-center text-stanBlack"
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

              <div className="mt-8 grid gap-3">
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
                <Button fullWidth onClick={handleAddToCart} size="lg" variant="outline">
                  Add to Cart
                </Button>
              </div>
              <p className="mt-4 rounded-2xl bg-stanSurface px-4 py-3 text-sm font-semibold leading-7 text-muted">
                Instant digital delivery after checkout. Final payment is handled
                by the configured payment provider.
              </p>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-6 sm:pt-8">
        <Container>
          <div className="mx-auto grid max-w-2xl gap-4">
            <article className="rounded-[2rem] border border-stanBlack/10 bg-white p-6 shadow-stan sm:p-7">
              <SectionHeader
                description="Everything included in this offer is designed to make execution feel easier and more structured."
                eyebrow="What's Included"
                title="Here's what you'll get."
              />
              <ul className="mt-8 space-y-4">
                {(product.details ?? []).map((item) => (
                  <li className="flex gap-3" key={item}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-stanBlack" />
                    <span className="text-sm font-semibold leading-7 text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-[2rem] border border-stanBlack/10 bg-white p-6 shadow-stan">
                <h2 className="text-2xl font-black text-stanBlack">
                  Who this is for
                </h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-muted">
                  {product.tags.map((tag) => `#${tag}`).join(' · ')}
                </p>
              </article>
              <article className="rounded-[2rem] border border-stanBlack/10 bg-white p-6 shadow-stan">
                <h2 className="text-2xl font-black text-stanBlack">
                  Delivery method
                </h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-muted">
                  {product.delivery_method ?? 'Digital delivery after checkout.'}
                </p>
              </article>
              <article className="rounded-[2rem] border border-stanBlack/10 bg-white p-6 shadow-stan sm:col-span-2">
                <h2 className="text-2xl font-black text-stanBlack">
                  Support note
                </h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-muted">
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
