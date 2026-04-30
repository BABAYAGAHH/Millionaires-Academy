import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQ } from '../../types'
import { cn } from '../../utils/cn'
import { AnimatedSection } from '../common/AnimatedSection'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

interface FAQSectionProps {
  items: FAQ[]
  eyebrow?: string
  title?: string
  description?: string
}

export const FAQSection = ({
  items,
  eyebrow = 'FAQs',
  title = 'Questions, answered with clarity.',
  description = 'Use this section to answer the most common questions before someone reaches out or buys.',
}: FAQSectionProps) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <AnimatedSection className="pt-24">
      <Container>
        <SectionHeader
          centered
          description={description}
          eyebrow={eyebrow}
          title={title}
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {items.map((item) => {
            const isOpen = item.id === openId

            return (
              <div
                className="overflow-hidden rounded-3xl border border-neutralBorder bg-white shadow-soft"
                key={item.id}
              >
                <button
                  aria-controls={`${item.id}-panel`}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenId((current) => (current === item.id ? null : item.id))}
                  type="button"
                >
                  <span className="text-lg font-semibold text-softBlack">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-emeraldDeep transition',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                  id={`${item.id}-panel`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </AnimatedSection>
  )
}
