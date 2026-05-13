import { useEffect, useState } from 'react'
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cartStore'
import { createCheckoutSession } from '../../utils/checkout'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../common/Button'

export const CartDrawer = () => {
  const { closeCart, isCartOpen, items, removeItem, subtotal, updateQuantity } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutError, setCheckoutError] = useState('')

  useEffect(() => {
    if (!isCartOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCart()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeCart, isCartOpen])

  if (!isCartOpen) {
    return null
  }

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
    <div
      aria-modal="true"
      className="fixed inset-0 z-[90] bg-stanBlack/45 backdrop-blur-sm"
      onClick={closeCart}
      role="dialog"
    >
      <aside
        className="ml-auto flex h-full w-full max-w-md flex-col bg-[#f5f5f5] shadow-premium"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="m-3 flex items-center justify-between rounded-[1.7rem] border border-stanBlack/10 bg-white px-5 py-5 shadow-stan">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-mutedGold">
              Your Cart
            </p>
            <h2 className="mt-1 text-2xl font-black text-stanBlack">Ready to checkout</h2>
          </div>
          <button
            aria-label="Close cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stanBlack/10 bg-stanSurface text-stanBlack transition hover:border-stanBlack"
            onClick={closeCart}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-3">
          {items.length ? (
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 rounded-[1.75rem] border border-stanBlack/10 bg-white p-3 shadow-stan"
                  key={item.id}
                >
                  <img
                    alt={item.image.alt}
                    className="h-20 w-20 rounded-[1.15rem] object-cover"
                    src={item.image.src}
                  />
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          className="font-extrabold leading-snug text-stanBlack transition hover:text-emeraldDeep"
                          onClick={closeCart}
                          to={`/product/${item.productId}`}
                        >
                          {item.productTitle}
                        </Link>
                        <p className="mt-1 text-xs text-muted">{item.variantTitle}</p>
                      </div>
                      <button
                        aria-label={`Remove ${item.productTitle}`}
                        className="text-muted transition hover:text-burntOrange"
                        onClick={() => removeItem(item.id)}
                        type="button"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center rounded-full border border-stanBlack/10 bg-stanSurface">
                        <button
                          aria-label={`Decrease ${item.productTitle} quantity`}
                          className="inline-flex h-8 w-8 items-center justify-center text-stanBlack"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          type="button"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-extrabold text-stanBlack">
                          {item.quantity}
                        </span>
                        <button
                          aria-label={`Increase ${item.productTitle} quantity`}
                          className="inline-flex h-8 w-8 items-center justify-center text-stanBlack"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          type="button"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="font-black text-stanBlack">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-stanBlack/15 bg-white px-6 py-12 text-center shadow-stan">
              <ShoppingBag className="mx-auto h-10 w-10 text-mutedGold" />
              <h3 className="mt-4 text-2xl font-black text-stanBlack">Your cart is empty.</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-muted">
                Add a digital training, vendor list, blueprint, or business tool to begin.
              </p>
              <Button className="mt-6" href="/shop" onClick={closeCart}>
                Browse Products
              </Button>
            </div>
          )}
        </div>

        <div className="m-3 rounded-[1.7rem] border border-stanBlack/10 bg-white px-5 py-5 shadow-stan">
          <div className="flex items-center justify-between text-base font-black text-stanBlack">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs font-semibold leading-6 text-muted">
            Taxes, shipping, and final delivery details are confirmed during checkout.
          </p>
          {checkoutError ? (
            <div className="mt-4 rounded-2xl border border-burntOrange/30 bg-burntOrange/10 px-4 py-3 text-sm leading-6 text-charcoal">
              {checkoutError}
            </div>
          ) : null}
          <div className="mt-5 grid gap-3">
            <Button
              disabled={!items.length || isCheckingOut}
              fullWidth
              onClick={handleCheckout}
              variant="secondary"
            >
              {isCheckingOut ? 'Starting Checkout...' : 'Checkout'}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button fullWidth href="/cart" onClick={closeCart} variant="outline">
              View Cart
            </Button>
          </div>
        </div>
      </aside>
    </div>
  )
}
