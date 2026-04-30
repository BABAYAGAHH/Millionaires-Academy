import { brandAssets } from '../data/brandAssets'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { SectionHeader } from '../components/common/SectionHeader'
import { usePageTitle } from '../utils/usePageTitle'

const philosophyCards = [
  'Clarity before action',
  'Structure before scaling',
  'Practical support over empty motivation',
  'Premium presentation builds trust',
]

export const About = () => {
  usePageTitle('About | Millionaires Academy')

  return (
    <>
      <AnimatedSection className="pt-10 sm:pt-14">
        <Container>
          <div className="grid gap-10 rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div>
              <SectionHeader
                description="Millionaires Academy was created to make starting and growing a business simpler for ambitious entrepreneurs who need structure, vendor direction, mentorship, and practical tools."
                eyebrow="About"
                title="About Millionaires Academy"
              />
            </div>
            <div className="rounded-[1.75rem] bg-cream/72 p-4">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  alt="Nickie Nicole, founder of Millionaires Academy"
                  className="aspect-[4/5] w-full object-cover object-[center_18%]"
                  loading="lazy"
                  src={brandAssets.founder.about}
                />
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <article className="rounded-3xl border border-neutralBorder bg-white p-8 shadow-soft">
              <h2 className="text-3xl font-semibold text-softBlack">
                Founder story
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                The journey behind Millionaires Academy is rooted in the belief
                that business growth becomes easier when people have access to
                clear guidance, useful resources, and a structured plan. The
                platform exists to help entrepreneurs move from uncertainty to
                action with practical support.
              </p>
            </article>
            <article className="rounded-3xl border border-neutralBorder bg-cream/72 p-8 shadow-soft">
              <h2 className="text-3xl font-semibold text-softBlack">Mission</h2>
              <p className="mt-5 text-base leading-8 text-muted">
                To help women and aspiring entrepreneurs build income-ready
                businesses with clarity, confidence, and structure.
              </p>
            </article>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-24">
        <Container>
          <SectionHeader
            centered
            eyebrow="Business Philosophy"
            title="What Millionaires Academy believes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {philosophyCards.map((card) => (
              <article
                className="rounded-3xl border border-neutralBorder bg-white p-6 shadow-soft"
                key={card}
              >
                <p className="text-2xl font-semibold leading-tight text-softBlack">
                  {card}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pt-24">
        <Container>
          <div className="rounded-[2rem] border border-neutralBorder bg-white p-8 shadow-soft lg:p-10">
            <SectionHeader
              description="Millionaires Academy exists to help ambitious entrepreneurs build with clarity, confidence, and practical structure instead of piecing everything together through guesswork."
              eyebrow="Why It Exists"
              title="This academy was built for founders who want practical growth support."
            />
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Work With Millionaires Academy
              </Button>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  )
}
