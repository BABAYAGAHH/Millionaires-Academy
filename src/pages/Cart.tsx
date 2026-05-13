import { useState } from 'react'
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { useCart } from '../context/cartStore'
import { createCheckoutSession } from '../utils/checkout'
import { formatCurrency } from '../utils/formatCurrency'
import { usePageTitle } from '../utils/usePageTitle'

export const Cart = () => {
  usePageTitle('Cart | Millionaires Academy')

  const { items, removeItem, subtotal, updateQuantity } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutError, setCheckoutError] = useState('')

  const handleCheckout = async () => {
    setCheckoutError('')
    setIsCheckingOut(true)

    try {
      const checkoutUrl = await createCheckoutSession(items)
      window.location.assign(checkoutUrl)
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : 'Checkout is unavailable.')
    } finally {
      setIsCheckingOut(false)
    }
  }

  return (
    <AnimatedSection className="pt-10 sm:pt-14">
      <Container>
        <div className="rounded-[2rem] border border-neutralBorder bg-white p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 border-b border-neutralBorder pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mutedGold">
                Cart
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-softBlack sm:text-5xl">
                Your selected products
              </h1>
            </div>
            <Button href="/shop" variant="outline">
              Continue Shopping
            </Button>
          </div>

          {items.length ? (
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              <div className="space-y-4">
                {items.map((item) => (
                  <article
                    className="grid gap-4 rounded-[1.5rem] border border-neutralBorder bg-warmWhite p-4 sm:grid-cols-[7rem_minmax(0,1fr)]"
                    key={item.id}
                  >
                    <img
                      alt={item.image.alt}
                      className="aspect-square w-full rounded-[1.2rem] object-cover sm:w-28"
                      src={item.image.src}
                    />
                    <div className="min-w-0">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <Link
                            className="text-xl font-semibold leading-tight text-softBlack transition hover:text-emeraldDeep"
                            to={`/product/${item.productId}`}
                          >
                            {item.productTitle}
                          </Link>
                          <p className="mt-2 text-sm text-muted">
                            {item.productType} · {item.variantTitle}
                          </p>
                        </div>
                        <button
                          aria-label={`Remove ${item.productTitle}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutralBorder bg-white text-muted transition hover:border-burntOrange hover:text-burntOrange"
                          onClick={() => removeItem(item.id)}
                          type="button"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="inline-flex w-max items-center rounded-full border border-neutralBorder bg-white">
                          <button
                            aria-label={`Decrease ${item.productTitle} quantity`}
                            className="inline-flex h-10 w-10 items-center justify-center text-emeraldDeep"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            type="button"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 text-center text-sm font-semibold text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            aria-label={`Increase ${item.productTitle} quantity`}
                            className="inline-flex h-10 w-10 items-center justify-center text-emeraldDeep"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            type="button"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xl font-semibold text-emeraldDeep">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="rounded-[1.75rem] border border-neutralBorder bg-cream/72 p-6 shadow-soft">
                <h2 className="text-2xl font-semibold text-softBlack">Order summary</h2>
                <div className="mt-6 space-y-4 border-b border-neutralBorder pb-5 text-sm text-charcoal">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Delivery</span>
                    <span className="font-semibold">Digital</span>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between text-lg font-semibold text-softBlack">
                  <span>Total</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <p className="mt-3 text-xs leading-6 text-muted">
                  Taxes and payment details are finalized by the configured checkout provider.
                </p>
                {checkoutError ? (
                  <div className="mt-5 rounded-2xl border border-burntOrange/30 bg-burntOrange/10 px-4 py-3 text-sm leading-6 text-charcoal">
                    {checkoutError}
                  </div>
                ) : null}
                <Button
                  className="mt-6"
                  disabled={isCheckingOut}
                  fullWidth
                  onClick={handleCheckout}
                  size="lg"
                  variant="secondary"
                >
                  {isCheckingOut ? 'Starting Checkout...' : 'Checkout'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </aside>
            </div>
          ) : (
            <div className="mt-8 rounded-[1.75rem] border border-dashed border-neutralBorder bg-cream/50 px-6 py-14 text-center">
              <ShoppingBag className="mx-auto h-12 w-12 text-mutedGold" />
              <h2 className="mt-5 text-3xl font-semibold text-softBlack">Your cart is empty.</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-muted">
                Browse the catalog and add a course, vendor list, blueprint, or tool before checkout.
              </p>
              <Button className="mt-7" href="/shop" variant="secondary">
                Shop Products
              </Button>
            </div>
          )}
        </div>
      </Container>
    </AnimatedSection>
  )
}
