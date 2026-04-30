import { Link } from 'react-router-dom'
import logoPlaceholder from '../../assets/images/logo-placeholder.svg'
import { footerOfferLinks, footerQuickLinks } from '../../data/navigation'
import { Container } from '../common/Container'
import { LeadCaptureForm } from '../forms/LeadCaptureForm'

export const Footer = () => (
  <footer className="mt-24 bg-forest text-warmWhite">
    <Container className="py-16 sm:py-20">
      <div className="grid gap-12 xl:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <img
              alt="Millionaires Academy monogram"
              className="h-14 w-14 rounded-[1.1rem] object-cover"
              src={logoPlaceholder}
            />
            <div>
              <p className="font-heading text-3xl text-warmWhite">
                Millionaires Academy
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-mutedGold">
                Learn. Build. Scale. Become.
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-warmWhite/78">
            Millionaires Academy is a premium business education and resource
            platform created to help ambitious entrepreneurs build with clarity,
            structure, and confidence. From vendor resources to digital
            blueprints, custom website support, and one-on-one strategy
            sessions, the academy gives business owners practical tools for
            moving from idea to execution.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-mutedGold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-warmWhite/82">
            {footerQuickLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-mutedGold" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-mutedGold">
            Offers
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-warmWhite/82">
            {footerOfferLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-mutedGold" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 text-sm text-warmWhite/78">
            <p>hello@millionairesacademy.co</p>
            <p>@millionairesacademy</p>
            <p>Remote support worldwide</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-mutedGold">
            Newsletter
          </h3>
          <p className="mt-5 text-sm leading-7 text-warmWhite/78">
            Join the academy list for launch notes, premium resources, and
            mentorship updates.
          </p>
          <div className="mt-5">
            <LeadCaptureForm
              buttonLabel="Join the Academy"
              compact
              successMessage="You're on the list. Millionaires Academy will share updates soon."
              theme="dark"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-warmWhite/60 sm:flex-row sm:items-center sm:justify-between">
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
    </Container>
  </footer>
)
