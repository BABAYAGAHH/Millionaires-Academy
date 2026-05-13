interface CheckoutRequest {
  method?: string
}

interface CheckoutResponse {
  setHeader: (name: string, value: string) => void
  status: (code: number) => {
    json: (body: unknown) => void
  }
}

export default function handler(request: CheckoutRequest, response: CheckoutResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    response.status(405).json({ error: 'Method not allowed' })
    return
  }

  response.status(501).json({
    error:
      'Stripe Checkout is not configured yet. Add Stripe on the server or add payment_link_url values to product variants.',
  })
}
