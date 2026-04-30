import type { FormEvent } from 'react'
import { useState } from 'react'
import { Button } from '../common/Button'

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <form
      className="space-y-4 rounded-3xl border border-neutralBorder bg-white p-6 shadow-soft"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-semibold text-softBlack">
        Request your strategy session
      </h3>
      <p className="text-sm leading-7 text-muted">
        Share what kind of guidance you need and Millionaires Academy can follow
        up with next steps.
      </p>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-charcoal">Name</span>
        <input
          className="w-full rounded-2xl border border-neutralBorder bg-white px-4 py-3 text-sm"
          name="name"
          onChange={(event) =>
            setFormState((current) => ({ ...current, name: event.target.value }))
          }
          placeholder="Your name"
          required
          type="text"
          value={formState.name}
        />
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-charcoal">Email</span>
        <input
          className="w-full rounded-2xl border border-neutralBorder bg-white px-4 py-3 text-sm"
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
      <label className="block space-y-2">
        <span className="text-sm font-medium text-charcoal">Message</span>
        <textarea
          className="min-h-[140px] w-full rounded-2xl border border-neutralBorder bg-white px-4 py-3 text-sm"
          name="message"
          onChange={(event) =>
            setFormState((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Tell us what support you need."
          required
          value={formState.message}
        />
      </label>
      <Button type="submit">Request Booking</Button>
      {isSubmitted ? (
        <p className="text-sm text-emeraldDeep">
          Your message has been received by Millionaires Academy.
        </p>
      ) : null}
    </form>
  )
}
