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
    <AnimatedSection className="pt-7 sm:pt-10">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[2.25rem] border border-stanBlack/10 bg-white p-5 shadow-stan sm:p-7">
          <div className="flex flex-col gap-4 border-b border-stanBlack/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-mutedGold">
                Cart
              </p>
              <h1 className="mt-3 text-4xl font-black text-stanBlack sm:text-5xl">
                Your selected products
              </h1>
            </div>
            <Button href="/shop" variant="outline">
              Continue Shopping
            </Button>
          </div>

          {items.length ? (
            <div className="mt-8 grid gap-5">
              <div className="space-y-4">
                {items.map((item) => (
                  <article
                    className="grid gap-4 rounded-[1.75rem] border border-stanBlack/10 bg-stanSurface p-4 sm:grid-cols-[7rem_minmax(0,1fr)]"
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
                            className="text-xl font-black leading-tight text-stanBlack transition hover:text-emeraldDeep"
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
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stanBlack/10 bg-white text-muted transition hover:border-burntOrange hover:text-burntOrange"
                          onClick={() => removeItem(item.id)}
                          type="button"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="inline-flex w-max items-center rounded-full border border-stanBlack/10 bg-white">
                          <button
                            aria-label={`Decrease ${item.productTitle} quantity`}
                            className="inline-flex h-10 w-10 items-center justify-center text-stanBlack"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            type="button"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 text-center text-sm font-extrabold text-stanBlack">
                            {item.quantity}
                          </span>
                          <button
                            aria-label={`Increase ${item.productTitle} quantity`}
                            className="inline-flex h-10 w-10 items-center justify-center text-stanBlack"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            type="button"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xl font-black text-stanBlack">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="rounded-[1.75rem] border border-stanBlack/10 bg-stanBlack p-6 text-warmWhite shadow-stan">
                <h2 className="text-2xl font-black text-warmWhite">Order summary</h2>
                <div className="mt-6 space-y-4 border-b border-white/10 pb-5 text-sm font-semibold text-warmWhite/82">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-extrabold">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Delivery</span>
                    <span className="font-extrabold">Digital</span>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between text-lg font-black text-warmWhite">
                  <span>Total</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <p className="mt-3 text-xs font-semibold leading-6 text-warmWhite/62">
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
            <div className="mt-8 rounded-[1.75rem] border border-dashed border-stanBlack/15 bg-stanSurface px-6 py-14 text-center">
              <ShoppingBag className="mx-auto h-12 w-12 text-mutedGold" />
              <h2 className="mt-5 text-3xl font-black text-stanBlack">Your cart is empty.</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm font-semibold leading-7 text-muted">
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
