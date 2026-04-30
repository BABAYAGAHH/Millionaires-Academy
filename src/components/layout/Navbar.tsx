import { useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import logoPlaceholder from '../../assets/images/logo-placeholder.svg'
import { navigationItems } from '../../data/navigation'
import { cn } from '../../utils/cn'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SearchOverlay } from './SearchOverlay'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  const openSearch = () => {
    setIsOpen(false)
    setSearchOpen(true)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutralBorder/70 bg-warmWhite/88 backdrop-blur-xl">
      <Container className="relative">
        <div className="flex items-center justify-between gap-4 py-3 sm:py-4 min-[1100px]:gap-6 xl:gap-8">
          <Link
            className="min-w-0 flex-1 min-[1100px]:max-w-[320px] min-[1100px]:flex-none"
            onClick={closeMenu}
            to="/"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                alt="Millionaires Academy monogram"
                className="h-11 w-11 rounded-2xl object-cover sm:h-12 sm:w-12"
                src={logoPlaceholder}
              />
              <div className="max-w-[calc(100vw-9.75rem)] min-w-0 min-[1100px]:max-w-none">
                <span className="block font-heading text-[1.12rem] font-semibold leading-[1.05] text-emeraldDeep sm:text-[1.35rem] xl:text-[1.75rem]">
                  Millionaires Academy
                </span>
                <span className="mt-1 block text-[0.56rem] font-semibold uppercase leading-tight tracking-[0.2em] text-mutedGold sm:text-[0.62rem] sm:tracking-[0.28em]">
                  Learn. Build. Scale. Become.
                </span>
              </div>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden min-[1100px]:block">
            <ul className="flex items-center gap-4 xl:gap-6">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'text-sm font-medium leading-5 transition hover:text-emeraldDeep',
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

          <div className="hidden items-center gap-3 min-[1100px]:flex">
            <button
              aria-label="Open search"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutralBorder bg-white/80 text-emeraldDeep transition hover:border-emeraldDeep hover:bg-cream"
              onClick={openSearch}
              type="button"
            >
              <Search className="h-4 w-4" />
            </button>
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

          <div className="flex items-center gap-2 min-[1100px]:hidden">
            <button
              aria-label="Open search"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutralBorder bg-white/90 text-emeraldDeep transition hover:border-emeraldDeep hover:bg-cream"
              onClick={openSearch}
              type="button"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutralBorder bg-white/90 text-emeraldDeep transition hover:border-emeraldDeep hover:bg-cream"
              onClick={() => setIsOpen((open) => !open)}
              type="button"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div
            className="absolute inset-x-0 top-[calc(100%+0.6rem)] rounded-[1.9rem] border border-neutralBorder bg-warmWhite p-5 shadow-premium min-[1100px]:hidden"
            id="mobile-menu"
          >
            <div className="mb-4 rounded-[1.5rem] bg-cream/72 px-4 py-4">
              <p className="font-heading text-xl leading-tight text-emeraldDeep">
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
            <div className="mt-5 grid gap-3">
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
              <Button fullWidth href="/contact" onClick={closeMenu}>
                Apply Now
              </Button>
            </div>
          </div>
        ) : null}

        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </Container>
    </header>
  )
}
