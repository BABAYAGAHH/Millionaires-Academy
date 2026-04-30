import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ChoiceCardProps {
  title: string
  description: string
  href: string
}

export const ChoiceCard = ({ title, description, href }: ChoiceCardProps) => (
  <Link
    className="group flex h-full flex-col rounded-3xl border border-neutralBorder bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emeraldDeep hover:shadow-premium"
    to={href}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mutedGold">
      Start Here
    </p>
    <h3 className="mt-4 text-2xl font-semibold text-softBlack">{title}</h3>
    <p className="mt-3 flex-1 text-sm leading-7 text-muted">{description}</p>
    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emeraldDeep">
      Explore path
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </div>
  </Link>
)
