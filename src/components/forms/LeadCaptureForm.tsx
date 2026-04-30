import type { FormEvent } from 'react'
import { useState } from 'react'
import { cn } from '../../utils/cn'
import { Button } from '../common/Button'

interface LeadCaptureFormProps {
  compact?: boolean
  theme?: 'light' | 'dark'
  buttonLabel?: string
  successMessage?: string
}

export const LeadCaptureForm = ({
  compact,
  theme = 'light',
  buttonLabel = 'Get the Checklist',
  successMessage = 'Your checklist request has been received. Millionaires Academy will follow up with the next steps.',
}: LeadCaptureFormProps) => {
  const [formState, setFormState] = useState({ name: '', email: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const labelClassName = theme === 'dark' ? 'text-warmWhite/82' : 'text-charcoal'
  const inputClassName = cn(
    'rounded-2xl border px-4 py-3 text-sm transition placeholder:text-muted focus-visible:border-mutedGold',
    theme === 'dark'
      ? 'border-white/10 bg-white/8 text-warmWhite'
      : 'border-neutralBorder bg-white text-charcoal',
  )

  const handleChange = (field: 'name' | 'email', value: string) => {
    setFormState((current) => ({ ...current, [field]: value }))
    setIsSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormState({ name: '', email: '' })
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className={cn('grid gap-4', compact ? 'sm:grid-cols-2' : undefined)}>
        <label className="space-y-2">
          <span className={cn('block text-sm font-medium', labelClassName)}>Name</span>
          <input
            className={inputClassName}
            name="name"
            onChange={(event) => handleChange('name', event.target.value)}
            placeholder="Your name"
            required
            type="text"
            value={formState.name}
          />
        </label>
        <label className="space-y-2">
          <span className={cn('block text-sm font-medium', labelClassName)}>Email</span>
          <input
            className={inputClassName}
            name="email"
            onChange={(event) => handleChange('email', event.target.value)}
            placeholder="you@example.com"
            required
            type="email"
            value={formState.email}
          />
        </label>
      </div>
      <Button fullWidth size={compact ? 'sm' : 'md'} type="submit" variant="secondary">
        {buttonLabel}
      </Button>
      {isSubmitted ? (
        <p
          className={cn(
            'text-sm leading-6',
            theme === 'dark' ? 'text-mutedGold' : 'text-emeraldDeep',
          )}
        >
          {successMessage}
        </p>
      ) : null}
    </form>
  )
}
