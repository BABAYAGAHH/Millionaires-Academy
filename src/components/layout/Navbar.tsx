import { useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import logoPlaceholder from '../../assets/images/logo-placeholder.svg'
import { useCart } from '../../context/cartStore'
import { navigationItems } from '../../data/navigation'
import { cn } from '../../utils/cn'
import { Container } from '../common/Container'
import { SearchOverlay } from './SearchOverlay'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { openCart, totalItems } = useCart()
  const closeMenu = () => setIsOpen(false)
  const openSearch = () => {
    setIsOpen(false)
    setSearchOpen(true)
  }
  const handleOpenCart = () => {
    setIsOpen(false)
    openCart()
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
                  Digital Store
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
            <button
              aria-label={`Open cart with ${totalItems} item${totalItems === 1 ? '' : 's'}`}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutralBorder bg-white/80 text-emeraldDeep transition hover:border-emeraldDeep hover:bg-cream"
              onClick={handleOpenCart}
              type="button"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-burntOrange px-1 text-[10px] font-semibold text-warmWhite">
                {totalItems}
              </span>
            </button>
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
              aria-label={`Open cart with ${totalItems} item${totalItems === 1 ? '' : 's'}`}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutralBorder bg-white/90 text-emeraldDeep transition hover:border-emeraldDeep hover:bg-cream"
              onClick={handleOpenCart}
              type="button"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-burntOrange px-1 text-[10px] font-semibold text-warmWhite">
                {totalItems}
              </span>
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
                Curated trainings, vendor lists, blueprints, and business tools.
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
              <Link
                className="inline-flex items-center justify-center rounded-full bg-burntOrange px-5 py-3 text-sm font-medium text-warmWhite transition hover:bg-[#dc5a1f]"
                onClick={closeMenu}
                to="/shop"
              >
                Shop Products
              </Link>
              <button
                className="inline-flex items-center justify-center rounded-full border border-neutralBorder bg-white px-5 py-3 text-sm font-medium text-emeraldDeep transition hover:border-emeraldDeep hover:bg-cream"
                onClick={handleOpenCart}
                type="button"
              >
                View Cart
              </button>
            </div>
          </div>
        ) : null}

        <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </Container>
    </header>
  )
}
