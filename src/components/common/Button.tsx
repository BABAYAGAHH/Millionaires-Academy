import type { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  target?: string
  rel?: string
  ariaLabel?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-emeraldDeep text-warmWhite shadow-soft hover:-translate-y-0.5 hover:bg-forest hover:shadow-premium',
  secondary:
    'bg-burntOrange text-warmWhite shadow-soft hover:-translate-y-0.5 hover:bg-[#dc5a1f] hover:shadow-premium',
  outline:
    'border border-neutralBorder bg-transparent text-emeraldDeep hover:border-emeraldDeep hover:bg-emeraldDeep/5',
  ghost: 'bg-transparent text-emeraldDeep hover:bg-emeraldDeep/5',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm sm:text-base',
  lg: 'px-6 py-4 text-base sm:text-lg',
}

export const Button = ({
  children,
  href,
  onClick,
  type = 'button',
  disabled,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth,
  target,
  rel,
  ariaLabel,
}: ButtonProps) => {
  const sharedClassName = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-300 will-change-transform disabled:cursor-not-allowed disabled:opacity-60',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className,
  )

  if (href) {
    const isExternalLike =
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#')

    if (isExternalLike) {
      const targetValue = target ?? (href.startsWith('http') ? '_blank' : undefined)
      const relValue =
        rel ?? (href.startsWith('http') ? 'noreferrer noopener' : undefined)

      return (
        <a
          aria-label={ariaLabel}
          className={sharedClassName}
          href={href}
          onClick={onClick}
          rel={relValue}
          target={targetValue}
        >
          {children}
        </a>
      )
    }

    return (
      <Link
        aria-label={ariaLabel}
        className={sharedClassName}
        onClick={onClick}
        to={href}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      aria-label={ariaLabel}
      className={sharedClassName}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
