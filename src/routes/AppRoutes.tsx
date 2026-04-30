import { Route, Routes } from 'react-router-dom'
import { PageShell } from '../components/layout/PageShell'
import { About } from '../pages/About'
import { BookSession } from '../pages/BookSession'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'
import { ProductDetail } from '../pages/ProductDetail'
import { Services } from '../pages/Services'
import { Shop } from '../pages/Shop'
import { ShopifyWebsite } from '../pages/ShopifyWebsite'
import { Terms } from '../pages/Terms'
import { VendorLists } from '../pages/VendorLists'

export const AppRoutes = () => (
  <Routes>
    <Route element={<PageShell />}>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Services />} path="/services" />
      <Route element={<VendorLists />} path="/vendor-lists" />
      <Route element={<ShopifyWebsite />} path="/shopify-website" />
      <Route element={<BookSession />} path="/book-session" />
      <Route element={<Shop />} path="/shop" />
      <Route element={<ProductDetail />} path="/shop/:slug" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<PrivacyPolicy />} path="/privacy-policy" />
      <Route element={<Terms />} path="/terms" />
      <Route element={<NotFound />} path="*" />
    </Route>
  </Routes>
)
