import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  Monitor,
  Package,
  Palette,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import type { Service } from '../../types'
import { Button } from '../common/Button'

interface ServiceCardProps {
  service: Service
}

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Monitor,
  Package,
  Palette,
  Target,
  Users,
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = iconMap[service.iconName] ?? Sparkles

  return (
    <article className="flex h-full flex-col rounded-3xl border border-neutralBorder bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emeraldDeep text-warmWhite">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-softBlack">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-charcoal">
        {service.includes.slice(0, 3).map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-mutedGold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href={service.ctaHref} variant="outline">
          {service.ctaLabel}
        </Button>
      </div>
    </article>
  )
}
