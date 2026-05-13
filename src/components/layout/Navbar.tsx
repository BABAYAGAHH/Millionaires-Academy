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
    <header className="sticky top-0 z-50 bg-[#f5f5f5]/78 py-3 backdrop-blur-xl">
      <Container className="relative">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 rounded-full border border-stanBlack/10 bg-white/92 px-3 py-2 shadow-stan sm:px-4">
          <Link
            className="min-w-0 flex-1 min-[1100px]:max-w-[300px] min-[1100px]:flex-none"
            onClick={closeMenu}
            to="/"
          >
            <div className="flex items-center gap-3">
              <img
                alt="Millionaires Academy monogram"
                className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
                src={logoPlaceholder}
              />
              <div className="max-w-[calc(100vw-9.75rem)] min-w-0 min-[1100px]:max-w-none">
                <span className="block truncate text-sm font-black leading-tight text-stanBlack sm:text-base">
                  Millionaires Academy
                </span>
                <span className="mt-0.5 block truncate text-[0.68rem] font-extrabold leading-tight text-muted">
                  @millionairesacademy
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
                        'text-sm font-extrabold leading-5 transition hover:text-stanBlack',
                        isActive ? 'text-stanBlack' : 'text-muted',
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stanBlack/10 bg-stanSurface text-stanBlack transition hover:border-stanBlack"
              onClick={openSearch}
              type="button"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label={`Open cart with ${totalItems} item${totalItems === 1 ? '' : 's'}`}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-stanBlack/10 bg-stanBlack text-white transition hover:bg-softBlack"
              onClick={handleOpenCart}
              type="button"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-burntOrange px-1 text-[10px] font-extrabold text-warmWhite">
                {totalItems}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 min-[1100px]:hidden">
            <button
              aria-label="Open search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stanBlack/10 bg-stanSurface text-stanBlack transition hover:border-stanBlack"
              onClick={openSearch}
              type="button"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label={`Open cart with ${totalItems} item${totalItems === 1 ? '' : 's'}`}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-stanBlack/10 bg-stanBlack text-white transition hover:bg-softBlack"
              onClick={handleOpenCart}
              type="button"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-burntOrange px-1 text-[10px] font-extrabold text-warmWhite">
                {totalItems}
              </span>
            </button>
            <button
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stanBlack/10 bg-stanSurface text-stanBlack transition hover:border-stanBlack"
              onClick={() => setIsOpen((open) => !open)}
              type="button"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div
            className="absolute inset-x-4 top-[calc(100%+0.6rem)] mx-auto max-w-2xl rounded-[1.9rem] border border-stanBlack/10 bg-white p-5 shadow-stan min-[1100px]:hidden"
            id="mobile-menu"
          >
            <div className="mb-4 rounded-[1.5rem] bg-stanSurface px-4 py-4">
              <p className="text-xl font-black leading-tight text-stanBlack">
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
                          'block rounded-2xl px-4 py-3 text-sm font-extrabold transition hover:bg-stanSurface',
                          isActive ? 'bg-stanSurface text-stanBlack' : 'text-charcoal',
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
                className="inline-flex items-center justify-center rounded-full bg-stanBlack px-5 py-3 text-sm font-extrabold text-warmWhite transition hover:bg-softBlack"
                onClick={closeMenu}
                to="/shop"
              >
                Shop Products
              </Link>
              <button
                className="inline-flex items-center justify-center rounded-full border border-stanBlack/10 bg-stanSurface px-5 py-3 text-sm font-extrabold text-stanBlack transition hover:border-stanBlack"
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
