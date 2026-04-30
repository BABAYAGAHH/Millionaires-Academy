import { Button } from './Button'

interface EmptyStateProps {
  title: string
  description: string
  actionLabel?: string
  actionHref?: string
}

export const EmptyState = ({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) => (
  <div className="rounded-3xl border border-dashed border-neutralBorder bg-cream/60 px-6 py-12 text-center shadow-soft">
    <h3 className="text-2xl font-semibold text-softBlack">{title}</h3>
    <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted">
      {description}
    </p>
    {actionLabel && actionHref ? (
      <div className="mt-6">
        <Button href={actionHref} variant="outline">
          {actionLabel}
        </Button>
      </div>
    ) : null}
  </div>
)
