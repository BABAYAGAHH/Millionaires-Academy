import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { products } from '../data/products'
import { formatCurrency } from '../utils/formatCurrency'
import { usePageTitle } from '../utils/usePageTitle'
import { NotFound } from './NotFound'

export const ProductDetail = () => {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  usePageTitle(
    product
      ? `${product.title} | Millionaires Academy`
      : 'Product Not Found | Millionaires Academy',
  )

  if (!product) {
    return <NotFound />
  }

  const hasCheckout = Boolean(product.checkoutUrl)
  const buttonHref = hasCheckout ? product.checkoutUrl : '/contact'
  const buttonLabel = hasCheckout ? 'Buy Now' : 'Request Access'

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] border border-neutralBorder bg-cream/72 p-5 shadow-soft">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  alt={product.title}
                  className="aspect-[4/4.5] w-full object-cover"
                  src={product.image}
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft">
              <Badge>{product.category}</Badge>
              <h1 className="text-balance mt-5 text-4xl font-semibold leading-tight text-softBlack sm:text-5xl">
                {product.title}
              </h1>
              <p className="mt-4 text-3xl font-semibold text-emeraldDeep">
                {product.priceLabel}
              </p>
              <p className="mt-2 text-sm text-muted">
                Base listed price: {formatCurrency(product.price)}
              </p>
              <p className="mt-6 text-base leading-8 text-muted">
                {product.shortDescription}
              </p>
              <p className="mt-5 text-base leading-8 text-charcoal">
                {product.longDescription}
              </p>
              <div className="mt-8">
                <Button href={buttonHref ?? '/contact'} size="lg" variant="secondary">
                  {buttonLabel}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">
                Need help choosing the right resource? Contact Millionaires
                Academy for guidance.
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
                {product.includes.map((item) => (
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
                  {product.whoItIsFor}
                </p>
              </article>
              <article className="rounded-3xl border border-neutralBorder bg-cream/72 p-7 shadow-soft">
                <h2 className="text-2xl font-semibold text-softBlack">
                  Delivery method
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {product.deliveryMethod}
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
