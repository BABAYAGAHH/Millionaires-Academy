import { motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { useRouteScrollToTop } from '../../utils/scrollToTop'
import { Footer } from './Footer'
import { MobileStickyCTA } from './MobileStickyCTA'
import { Navbar } from './Navbar'

export const PageShell = () => {
  const location = useLocation()

  useRouteScrollToTop()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 overflow-x-hidden pb-28 sm:pb-32 md:pb-0">
        <motion.div initial={false} key={location.pathname}>
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  )
}
