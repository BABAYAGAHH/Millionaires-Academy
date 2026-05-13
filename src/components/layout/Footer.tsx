import { Link } from 'react-router-dom'
import logoPlaceholder from '../../assets/images/logo-placeholder.svg'
import { footerOfferLinks, footerQuickLinks } from '../../data/navigation'
import { Container } from '../common/Container'

export const Footer = () => (
  <footer className="mt-16 pb-8">
    <Container>
      <div className="mx-auto max-w-2xl rounded-[2.25rem] border border-stanBlack/10 bg-stanBlack p-6 text-warmWhite shadow-stan sm:p-8">
        <div className="grid gap-8 sm:grid-cols-[1fr_0.75fr]">
          <div>
            <div className="flex items-center gap-4">
            <img
              alt="Millionaires Academy monogram"
              className="h-14 w-14 rounded-full border-2 border-white object-cover"
              src={logoPlaceholder}
            />
            <div>
              <p className="text-2xl font-black text-warmWhite">
                Millionaires Academy
              </p>
              <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.24em] text-mutedGold">
                Creator Store
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm font-semibold leading-7 text-warmWhite/72">
            Millionaires Academy is a product-first digital store for ambitious
            founders who want practical trainings, vendor lists, launch
            blueprints, and business tools they can use immediately.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-mutedGold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-warmWhite/82">
            {footerQuickLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-mutedGold" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2">
          <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-mutedGold">
            Offers
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-warmWhite/82">
            {footerOfferLinks.map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 transition hover:bg-white/15 hover:text-mutedGold"
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-warmWhite/72">
            <p>hello@millionairesacademy.co</p>
            <p>@millionairesacademy</p>
            <p>Remote support worldwide</p>
          </div>
        </div>

        </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-warmWhite/56 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Copyright {new Date().getFullYear()} Millionaires Academy. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <Link className="transition hover:text-mutedGold" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="transition hover:text-mutedGold" to="/terms">
            Terms
          </Link>
        </div>
      </div>
      </div>
    </Container>
  </footer>
)
