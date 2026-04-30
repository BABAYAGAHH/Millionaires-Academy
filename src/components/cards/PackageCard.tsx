import { Check } from 'lucide-react'
import type { Package } from '../../types'
import { cn } from '../../utils/cn'
import { Badge } from '../common/Badge'
import { Button } from '../common/Button'

interface PackageCardProps {
  item: Package
}

export const PackageCard = ({ item }: PackageCardProps) => (
  <article
    className={cn(
      'relative flex h-full flex-col overflow-hidden rounded-[1.95rem] border p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium',
      item.highlighted
        ? 'border-emeraldDeep bg-emeraldDeep text-warmWhite'
        : 'border-neutralBorder bg-white',
    )}
  >
    {item.highlighted ? (
      <>
        <div className="absolute inset-x-0 top-0 h-1 bg-mutedGold" />
        <Badge className="self-start" variant="accent">
          Most Popular
        </Badge>
      </>
    ) : null}
    <h3
      className={cn(
        'mt-5 text-2xl font-semibold',
        item.highlighted ? 'text-warmWhite' : 'text-softBlack',
      )}
    >
      {item.name}
    </h3>
    <p
      className={cn(
        'mt-3 text-3xl font-semibold',
        item.highlighted ? 'text-warmWhite' : 'text-emeraldDeep',
      )}
    >
      {item.priceLabel}
    </p>
    <p
      className={cn(
        'mt-4 text-sm leading-7',
        item.highlighted ? 'text-warmWhite/80' : 'text-muted',
      )}
    >
      {item.description}
    </p>
    <ul className="mt-6 space-y-3">
      {item.includes.map((entry) => (
        <li className="flex gap-3" key={entry}>
          <Check
            className={cn(
              'mt-0.5 h-5 w-5 shrink-0',
              item.highlighted ? 'text-mutedGold' : 'text-teal',
            )}
          />
          <span
            className={cn(
              'text-sm leading-6',
              item.highlighted ? 'text-warmWhite/84' : 'text-charcoal',
            )}
          >
            {entry}
          </span>
        </li>
      ))}
    </ul>
    <div className="mt-8 pt-2">
      <Button href={item.ctaHref} variant={item.highlighted ? 'secondary' : 'outline'}>
        {item.ctaLabel}
      </Button>
    </div>
  </article>
)
