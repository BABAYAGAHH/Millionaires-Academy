import { cn } from '../../utils/cn'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
  tone?: 'default' | 'inverse'
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  centered,
  className,
  tone = 'default',
}: SectionHeaderProps) => (
  <div className={cn(centered && 'mx-auto text-center', className)}>
    {eyebrow ? (
      <p
        className={cn(
          'mb-4 text-xs font-semibold uppercase tracking-[0.35em]',
          tone === 'inverse' ? 'text-mutedGold' : 'text-teal',
        )}
      >
        {eyebrow}
      </p>
    ) : null}
    <h2
      className={cn(
        'text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-[3rem]',
        tone === 'inverse' && 'text-warmWhite',
      )}
    >
      {title}
    </h2>
    {description ? (
      <p
        className={cn(
          'mt-4 max-w-2xl text-base leading-7 sm:text-lg',
          tone === 'inverse' ? 'text-warmWhite/80' : 'text-muted',
        )}
      >
        {description}
      </p>
    ) : null}
  </div>
)
