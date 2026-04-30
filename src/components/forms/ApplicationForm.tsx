import type { FormEvent } from 'react'
import { useState } from 'react'
import { Button } from '../common/Button'

const services = [
  'One-on-One Mentorship',
  'Vendor Guidance',
  'Shopify Website Support',
  'Digital Business Resources',
  'Business Launch Strategy',
  'Not Sure Yet',
]

const budgets = [
  'Under $100',
  '$100 - $300',
  '$300 - $600',
  '$600+',
  'I need guidance first',
]

export const ApplicationForm = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    socialLink: '',
    preferredService: services[0],
    budgetRange: budgets[0],
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormState({
      fullName: '',
      email: '',
      phone: '',
      businessName: '',
      socialLink: '',
      preferredService: services[0],
      budgetRange: budgets[0],
      message: '',
    })
  }

  const inputClassName =
    'w-full rounded-2xl border border-neutralBorder bg-white px-4 py-3 text-sm'

  return (
    <form
      className="space-y-5 rounded-3xl border border-neutralBorder bg-white p-6 shadow-soft sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="block text-sm font-medium text-charcoal">Full name</span>
          <input
            className={inputClassName}
            name="fullName"
            onChange={(event) =>
              setFormState((current) => ({
                ...current,
                fullName: event.target.value,
              }))
            }
            placeholder="Your full name"
            required
            type="text"
            value={formState.fullName}
          />
        </label>
        <label className="space-y-2">
          <span className="block text-sm font-medium text-charcoal">Email</span>
          <input
            className={inputClassName}
            name="email"
            onChange={(event) =>
              setFormState((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="you@example.com"
            required
            type="email"
            value={formState.email}
          />
        </label>
        <label className="space-y-2">
          <span className="block text-sm font-medium text-charcoal">Phone</span>
          <input
            className={inputClassName}
            name="phone"
            onChange={(event) =>
              setFormState((current) => ({ ...current, phone: event.target.value }))
            }
            placeholder="Phone number"
            required
            type="tel"
            value={formState.phone}
          />
        </label>
        <label className="space-y-2">
          <span className="block text-sm font-medium text-charcoal">Business name</span>
          <input
            className={inputClassName}
            name="businessName"
            onChange={(event) =>
              setFormState((current) => ({
                ...current,
                businessName: event.target.value,
              }))
            }
            placeholder="Business name"
            required
            type="text"
            value={formState.businessName}
          />
        </label>
        <label className="space-y-2">
          <span className="block text-sm font-medium text-charcoal">
            Instagram or social link
          </span>
          <input
            className={inputClassName}
            name="socialLink"
            onChange={(event) =>
              setFormState((current) => ({
                ...current,
                socialLink: event.target.value,
              }))
            }
            placeholder="https://instagram.com/yourbrand"
            required
            type="url"
            value={formState.socialLink}
          />
        </label>
        <label className="space-y-2">
          <span className="block text-sm font-medium text-charcoal">
            Preferred service
          </span>
          <select
            className={inputClassName}
            name="preferredService"
            onChange={(event) =>
              setFormState((current) => ({
                ...current,
                preferredService: event.target.value,
              }))
            }
            value={formState.preferredService}
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="block text-sm font-medium text-charcoal">Budget range</span>
          <select
            className={inputClassName}
            name="budgetRange"
            onChange={(event) =>
              setFormState((current) => ({
                ...current,
                budgetRange: event.target.value,
              }))
            }
            value={formState.budgetRange}
          >
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="block text-sm font-medium text-charcoal">Message</span>
          <textarea
            className="min-h-[180px] w-full rounded-2xl border border-neutralBorder bg-white px-4 py-3 text-sm"
            name="message"
            onChange={(event) =>
              setFormState((current) => ({ ...current, message: event.target.value }))
            }
            placeholder="Tell us about your business, goals, and the support you want."
            required
            value={formState.message}
          />
        </label>
      </div>
      <Button type="submit">Submit Application</Button>
      {isSubmitted ? (
        <p className="text-sm text-emeraldDeep">
          Thank you. Your application has been received by Millionaires Academy.
        </p>
      ) : null}
    </form>
  )
}
