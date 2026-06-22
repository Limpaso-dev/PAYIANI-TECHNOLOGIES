import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import ScrollToTop from '../common/ScrollToTop.jsx'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen overflow-hidden bg-light text-dark">
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
