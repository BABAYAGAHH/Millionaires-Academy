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
      <main className="flex-1 pb-24 md:pb-0">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          key={location.pathname}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  )
}
