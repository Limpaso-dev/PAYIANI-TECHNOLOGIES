import About from '../pages/About.jsx'
import Blog from '../pages/Blog.jsx'
import Careers from '../pages/Careers.jsx'
import Contact from '../pages/Contact.jsx'
import FAQ from '../pages/FAQ.jsx'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'
import Portfolio from '../pages/Portfolio.jsx'
import Policy from '../pages/Policy.jsx'
import Services from '../pages/Services.jsx'
import Terms from '../pages/Terms.jsx'

const routes = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/portfolio': Portfolio,
  '/contact': Contact,
  '/blog': Blog,
  '/careers': Careers,
  '/faq': FAQ,
  '/privacy-policy': Policy,
  '/terms': Terms,
}

function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/'
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

export default function AppRoutes() {
  const pathname = normalizePath(window.location.pathname)
  const Page = routes[pathname] ?? NotFound

  return <Page />
}