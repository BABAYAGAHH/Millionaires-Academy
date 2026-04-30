import { ChoiceCard } from '../cards/ChoiceCard'
import { AnimatedSection } from '../common/AnimatedSection'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

const choices = [
  {
    title: 'I need vendor guidance',
    description:
      'Start with curated vendor direction that helps you source with more confidence.',
    href: '/vendor-lists',
  },
  {
    title: 'I need a premium website',
    description:
      'Explore premium Shopify support if you need a more polished storefront.',
    href: '/shopify-website',
  },
  {
    title: 'I need mentorship',
    description:
      'Book a one-on-one session when you want guidance, structure, and honest strategy.',
    href: '/book-session',
  },
  {
    title: 'I need business resources',
    description:
      'Browse blueprints, checklists, and digital tools built for real implementation.',
    href: '/shop',
  },
  {
    title: 'I am starting from scratch',
    description:
      'See the services that help new entrepreneurs move from idea to structured action.',
    href: '/services',
  },
]

export const StartHereSection = () => (
  <AnimatedSection className="pt-24">
    <Container>
      <SectionHeader
        centered
        description="Whether you need vendors, mentorship, a Shopify website, or business resources, start with the path that matches your current stage."
        eyebrow="Start Here"
        title="Choose Your Next Move"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {choices.map((choice) => (
          <ChoiceCard
            description={choice.description}
            href={choice.href}
            key={choice.title}
            title={choice.title}
          />
        ))}
      </div>
    </Container>
  </AnimatedSection>
)
