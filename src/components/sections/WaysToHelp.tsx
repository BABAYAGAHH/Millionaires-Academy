import type { LucideIcon } from 'lucide-react'
import { BookOpen, Monitor, Package, Users } from 'lucide-react'
import { AnimatedSection } from '../common/AnimatedSection'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

const cards: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: 'Vendor Guidance',
    description:
      'Access practical vendor resources and sourcing direction for packaging, boutique products, business forms, and launch preparation.',
    icon: Package,
  },
  {
    title: 'Business Mentorship',
    description:
      'Get focused guidance to clarify your idea, organize your next steps, and build your business with confidence.',
    icon: Users,
  },
  {
    title: 'Custom Website Support',
    description:
      'Launch a premium online store or service website with clean structure, polished visuals, and conversion-focused sections.',
    icon: Monitor,
  },
  {
    title: 'Digital Business Blueprints',
    description:
      'Download practical resources that help you move from idea to structure, launch, and growth.',
    icon: BookOpen,
  },
]

export const WaysToHelp = () => (
  <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
    <Container>
      <SectionHeader
        centered
        description="Structured support designed to help you build with more clarity, stronger systems, and a more premium presentation."
        eyebrow="How The Academy Helps"
        title="Ways Millionaires Academy Can Help You"
      />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article
            className="rounded-3xl border border-neutralBorder bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium"
            key={card.title}
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emeraldDeep text-warmWhite">
              <card.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-softBlack">
              {card.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
    </Container>
  </AnimatedSection>
)
