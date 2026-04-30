import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'light' | 'dark'
  className?: string
}

const badgeVariants = {
  default: 'bg-emeraldDeep/8 text-emeraldDeep border border-emeraldDeep/10',
  accent: 'bg-burntOrange/12 text-burntOrange border border-burntOrange/20',
  light: 'bg-warmWhite/90 text-emeraldDeep border border-white/40',
  dark: 'bg-forest text-warmWhite border border-emeraldDeep/20',
}

export const Badge = ({ children, variant = 'default', className }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-[0.18em]',
      badgeVariants[variant],
      className,
    )}
  >
    {children}
  </span>
)
