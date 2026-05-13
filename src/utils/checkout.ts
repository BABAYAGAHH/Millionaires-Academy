import type { CartLine } from '../types'

interface CheckoutResponse {
  url?: string
  error?: string
}

const getPaymentLinkFallback = (items: CartLine[]) => {
  if (items.length !== 1 || items[0].quantity !== 1) {
    return undefined
  }

  return items[0].paymentLinkUrl
}

export const createCheckoutSession = async (items: CartLine[]) => {
  if (!items.length) {
    throw new Error('Add at least one product before checkout.')
  }

  const paymentLink = getPaymentLinkFallback(items)

  if (paymentLink) {
    return paymentLink
  }

  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: items.map((item) => ({
        productId: item.productId,
        variantId: item.variantId,
        quantity: item.quantity,
      })),
    }),
  })

  const data = await response
    .json()
    .then((json) => json as CheckoutResponse)
    .catch((): CheckoutResponse => ({}))

  if (!response.ok || !data.url) {
    throw new Error(
      data.error ??
        'Checkout is not configured yet. Add Stripe credentials on Vercel or attach payment links to product variants.',
    )
  }

  return data.url
}
