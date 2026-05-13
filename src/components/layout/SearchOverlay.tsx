import { useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react'
import { ArrowRight, Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  activeProducts,
  getProductImage,
  getProductPriceLabel,
} from '../../utils/productUtils'
import { Badge } from '../common/Badge'
import { Button } from '../common/Button'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query.trim().toLowerCase())

  const handleClose = useCallback(() => {
    setQuery('')
    onClose()
  }, [onClose])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClose, isOpen])

  const results = useMemo(() => {
    if (!deferredQuery) {
      return activeProducts.filter((product) => product.featured).slice(0, 6)
    }

    return activeProducts
      .filter((product) => {
        const haystack =
          `${product.title} ${product.product_type} ${product.description} ${product.tags.join(' ')}`.toLowerCase()

        return haystack.includes(deferredQuery)
      })
      .slice(0, 6)
  }, [deferredQuery])

  if (!isOpen) {
    return null
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[80] bg-softBlack/45 px-4 py-5 backdrop-blur-sm sm:px-6 sm:py-6"
      onClick={handleClose}
      role="dialog"
    >
      <div
        className="mx-auto flex h-full max-w-3xl flex-col overflow-hidden rounded-[2rem] border border-neutralBorder bg-warmWhite shadow-premium"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-neutralBorder px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mutedGold">
                Search Products
              </p>
              <h2 className="mt-2 font-heading text-2xl text-softBlack sm:text-3xl">
                Find the right product faster.
              </h2>
            </div>
            <button
              aria-label="Close search"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutralBorder bg-white text-emeraldDeep transition hover:border-emeraldDeep hover:bg-cream"
              onClick={handleClose}
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <label className="relative mt-5 block">
            <span className="sr-only">Search products</span>
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              autoFocus
              className="w-full rounded-full border border-neutralBorder bg-cream/60 py-3.5 pl-11 pr-4 text-sm text-charcoal"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search courses, vendor lists, blueprints, or tools."
              type="search"
              value={query}
            />
          </label>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
          {!deferredQuery ? (
            <div className="rounded-[1.5rem] border border-neutralBorder bg-cream/72 px-4 py-4 text-sm leading-7 text-charcoal">
              Search trainings, vendor lists, launch blueprints, and business
              tools. Start with the featured products below.
            </div>
          ) : null}

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-muted">
              {deferredQuery ? 'Matching products' : 'Popular products'}
            </p>
            <Button href="/shop" onClick={handleClose} variant="ghost">
              Browse all
            </Button>
          </div>

          {results.length ? (
            <div className="mt-4 grid gap-3">
              {results.map((product) => {
                const image = getProductImage(product)

                return (
                  <Link
                    className="rounded-[1.5rem] border border-neutralBorder bg-white p-4 transition hover:border-emeraldDeep hover:bg-cream/40"
                    key={product.id}
                    onClick={handleClose}
                    to={`/product/${product.id}`}
                  >
                    <div className="flex items-start gap-4">
                      <img
                        alt={image.alt}
                        className="h-20 w-20 rounded-[1.2rem] object-cover"
                        src={image.src}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="light">{product.product_type}</Badge>
                          <span className="text-sm font-semibold text-emeraldDeep">
                            {getProductPriceLabel(product)}
                          </span>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold leading-tight text-softBlack">
                          {product.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted">
                          {product.description}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 hidden h-4 w-4 shrink-0 text-emeraldDeep sm:block" />
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="mt-4 rounded-[1.5rem] border border-dashed border-neutralBorder bg-white px-5 py-10 text-center">
              <p className="font-heading text-2xl text-softBlack">
                No matching products yet.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">
                Try a different keyword, or use the contact page if you need
                help choosing the right next step for your business.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/shop" onClick={handleClose} variant="outline">
                  Browse Products
                </Button>
                <Button href="/contact" onClick={handleClose} variant="secondary">
                  Ask for Guidance
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
