import { ProductCard } from '../components/cards/ProductCard'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { FAQSection } from '../components/sections/FAQSection'
import { faqs } from '../data/faqs'
import { products } from '../data/products'
import { usePageTitle } from '../utils/usePageTitle'

const vendorProducts = products.filter((product) =>
  product.category.toLowerCase().includes('vendor'),
)

const vendorFaqs = faqs.filter(
  (item) => item.category === 'vendor' || item.category === 'general',
)

export const VendorLists = () => {
  usePageTitle('Vendor Guidance | Millionaires Academy')

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:p-10">
            <SectionHeader
              description="Access curated vendor resources and practical business tools designed to help you source smarter, launch faster, and build with more confidence."
              eyebrow="Vendor Guidance"
              title="Vendor Guidance & Business Resources"
            />
            <div className="mt-8">
              <Button href="#vendor-resources" variant="outline">
                Explore Vendor Resources
              </Button>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-24" id="vendor-resources">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {vendorProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <FAQSection
        description="A few answers about how the vendor guidance resources work and who they best support."
        items={vendorFaqs}
        title="Questions about vendor resources?"
      />

      <AnimatedSection className="pt-24">
        <Container>
          <div className="rounded-[2rem] border border-neutralBorder bg-cream/72 p-8 shadow-soft lg:p-10">
            <SectionHeader
              description="If you need more custom direction on sourcing, product categories, or vendor preparation, use the contact page to ask about tailored support."
              eyebrow="Need More Support?"
              title="Ask about custom vendor support."
            />
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Contact Millionaires Academy
              </Button>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  )
}
