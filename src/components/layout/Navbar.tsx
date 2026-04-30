import { useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import logoPlaceholder from '../../assets/images/logo-placeholder.svg'
import { navigationItems } from '../../data/navigation'
import { cn } from '../../utils/cn'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutralBorder/70 bg-warmWhite/88 backdrop-blur-xl">
      <Container className="relative">
        <div className="flex items-center justify-between gap-4 py-4 lg:gap-8 lg:py-5">
          <Link className="min-w-0" onClick={closeMenu} to="/">
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                alt="Millionaires Academy monogram"
                className="h-11 w-11 rounded-2xl object-cover sm:h-12 sm:w-12"
                src={logoPlaceholder}
              />
              <div className="flex min-w-0 flex-col">
                <span className="truncate font-heading text-[1.55rem] font-semibold leading-none text-emeraldDeep sm:text-[1.9rem]">
                  Millionaires Academy
                </span>
                <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-mutedGold sm:text-[0.68rem]">
                  Learn. Build. Scale. Become.
                </span>
              </div>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-6">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'text-sm font-medium transition hover:text-emeraldDeep',
                        isActive ? 'text-emeraldDeep' : 'text-muted',
                      )
                    }
                    to={item.href}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              aria-label="Search resources"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutralBorder bg-white/80 text-emeraldDeep transition hover:border-emeraldDeep hover:bg-cream"
              to="/shop"
            >
              <Search className="h-4 w-4" />
            </Link>
            <Link
              aria-label="Cart placeholder with zero items"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutralBorder bg-white/80 text-emeraldDeep transition hover:border-emeraldDeep hover:bg-cream"
              to="/shop"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-burntOrange px-1 text-[10px] font-semibold text-warmWhite">
                0
              </span>
            </Link>
            <Button href="/contact" size="sm">
              Apply Now
            </Button>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutralBorder bg-white/90 text-emeraldDeep transition hover:border-emeraldDeep hover:bg-cream lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div
            className="absolute inset-x-4 top-[calc(100%-0.2rem)] rounded-[1.9rem] border border-neutralBorder bg-warmWhite p-5 shadow-premium lg:hidden"
            id="mobile-menu"
          >
            <div className="mb-4 rounded-[1.5rem] bg-cream/72 px-4 py-4">
              <p className="font-heading text-xl text-emeraldDeep">
                Millionaires Academy
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">
                Premium business education, launch systems, and practical support.
              </p>
            </div>
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      className={({ isActive }) =>
                        cn(
                          'block rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-cream',
                          isActive ? 'bg-cream text-emeraldDeep' : 'text-charcoal',
                        )
                      }
                      onClick={closeMenu}
                      to={item.href}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Button fullWidth href="/shop" onClick={closeMenu} variant="secondary">
                Explore Resources
              </Button>
              <Button
                fullWidth
                href="/book-session"
                onClick={closeMenu}
                variant="outline"
              >
                Book Session
              </Button>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  )
}
