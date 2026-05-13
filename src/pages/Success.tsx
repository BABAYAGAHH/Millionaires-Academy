import { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { useCart } from '../context/cartStore'
import { usePageTitle } from '../utils/usePageTitle'

export const Success = () => {
  usePageTitle('Order Confirmation | Millionaires Academy')

  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <AnimatedSection className="pt-10 sm:pt-14">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-neutralBorder bg-white px-6 py-14 text-center shadow-soft sm:px-10">
          <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal/10 text-teal">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-mutedGold">
            Order Confirmation
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-softBlack sm:text-5xl">
            Thank you for your order.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
            Your payment provider will send the official receipt and access details. If this was a test checkout, the cart has still been cleared for this browser session.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/shop" variant="secondary">
              Continue Shopping
            </Button>
            <Button href="/contact" variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}
