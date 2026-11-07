// Route registry: every page, its component, and its SEO metadata.
// Used by the client router, the build-time prerenderer and the sitemap.
//
// noindex: true  -> page is rendered but kept out of Google and the sitemap
//                   (use for placeholder pages until they have real content).

import About from '../pages/About.jsx'
import Blog from '../pages/Blog.jsx'
import Careers from '../pages/Careers.jsx'
import Contact from '../pages/Contact.jsx'
import FAQ from '../pages/FAQ.jsx'
import Home from '../pages/Home.jsx'
import IndustryDetail from '../pages/IndustryDetail.jsx'
import NotFound from '../pages/NotFound.jsx'
import Policy from '../pages/Policy.jsx'
import Portfolio from '../pages/Portfolio.jsx'
import ServiceDetail from '../pages/ServiceDetail.jsx'
import Services from '../pages/Services.jsx'
import Terms from '../pages/Terms.jsx'
import { serviceDetails } from '../data/serviceDetails.js'
import { industries } from '../data/industries.js'
import { faq } from '../data/faq.js'
import { BUSINESS, SITE_URL, absoluteUrl } from './site.js'

const ORG_ID = `${SITE_URL}/#organization`

function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    slogan: BUSINESS.tagline,
    url: absoluteUrl('/'),
    logo: absoluteUrl(BUSINESS.logo),
    image: absoluteUrl(BUSINESS.defaultImage),
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    address: { '@type': 'PostalAddress', ...BUSINESS.address },
    areaServed: BUSINESS.areaServed.map((name) =>
      name === 'Kenya' ? { '@type': 'Country', name } : { '@type': 'AdministrativeArea', name },
    ),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      contactType: 'customer service',
      areaServed: 'KE',
      availableLanguage: ['English', 'Swahili'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology services',
      itemListElement: serviceDetails.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.name, url: absoluteUrl(`/services/${service.slug}`) },
      })),
    },
    ...(BUSINESS.sameAs.length ? { sameAs: BUSINESS.sameAs } : {}),
  }
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: absoluteUrl('/'),
    name: BUSINESS.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-KE',
  }
}

const crumb = (name, path) => ({ name, path })
const HOME = crumb('Home', '/')

const staticRoutes = [
  {
    path: '/',
    component: Home,
    // Home uses the full title as-is (no " | Payiani Technologies" suffix).
    fullTitle: 'Payiani Technologies | Software Development & IT Solutions in Kenya',
    description:
      'IT solutions company in Kenya: custom software development, websites, digital transformation, IT consultancy, cybersecurity and digital literacy training.',
    schema: () => [organizationSchema(), websiteSchema()],
  },
  {
    path: '/about',
    component: About,
    title: 'About Us – IT Company in Nairobi, Kenya',
    description:
      'Learn about Payiani Technologies, a Nairobi-based technology company building secure software, websites and digital solutions for organizations across Kenya.',
    schema: () => [breadcrumbSchema([HOME, crumb('About Us', '/about')])],
  },
  {
    path: '/services',
    component: Services,
    title: 'IT Solutions & Services in Kenya',
    description:
      'Technology solutions in Kenya: software engineering, digital transformation, cybersecurity, IT consultancy and digital literacy training.',
    schema: () => [breadcrumbSchema([HOME, crumb('Services', '/services')])],
  },
  {
    path: '/portfolio',
    component: Portfolio,
    title: 'Our Projects & Portfolio',
    description:
      'Websites and digital platforms Payiani Technologies has delivered for laboratories, environmental organizations, professional education and e-commerce clients.',
    schema: () => [breadcrumbSchema([HOME, crumb('Portfolio', '/portfolio')])],
  },
  {
    path: '/contact',
    component: Contact,
    title: 'Contact Us – Request a Quote',
    description:
      'Contact Payiani Technologies in Karen, Nairobi. Call +254 757 358 237 or email payianitech@gmail.com to discuss your website, software or IT project.',
    schema: () => [breadcrumbSchema([HOME, crumb('Contact Us', '/contact')])],
  },
  {
    path: '/faq',
    component: FAQ,
    title: 'Frequently Asked Questions',
    description: 'Answers to common questions about working with Payiani Technologies.',
    schema: () => [breadcrumbSchema([HOME, crumb('FAQ', '/faq')]), faqSchema(faq)],
  },
  // Placeholder pages: noindex until they have real content.
  { path: '/blog', component: Blog, title: 'Blog', description: 'News and articles from Payiani Technologies.', noindex: true },
  { path: '/careers', component: Careers, title: 'Careers', description: 'Careers at Payiani Technologies.', noindex: true },
  { path: '/privacy-policy', component: Policy, title: 'Privacy Policy', description: 'Payiani Technologies privacy policy.', noindex: true },
  { path: '/terms', component: Terms, title: 'Terms of Service', description: 'Payiani Technologies terms of service.', noindex: true },
]

const serviceRoutes = serviceDetails.map((service) => {
  const path = `/services/${service.slug}`
  return {
    path,
    component: ServiceDetail,
    props: { slug: service.slug },
    title: service.metaTitle,
    description: service.metaDescription,
    schema: () => [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        serviceType: service.keywords[0],
        description: service.metaDescription,
        url: absoluteUrl(path),
        provider: { '@id': ORG_ID, '@type': 'ProfessionalService', name: BUSINESS.name, url: absoluteUrl('/') },
        areaServed: { '@type': 'Country', name: 'Kenya' },
      },
      breadcrumbSchema([HOME, crumb('Services', '/services'), crumb(service.name, path)]),
      faqSchema(service.faqs),
    ],
  }
})

const industryRoutes = industries.map((industry) => {
  const path = `/industries/${industry.slug}`
  return {
    path,
    component: IndustryDetail,
    props: { slug: industry.slug },
    title: industry.metaTitle,
    description: industry.metaDescription,
    schema: () => [breadcrumbSchema([HOME, crumb(industry.shortName, path)])],
  }
})

export const routes = [...staticRoutes, ...serviceRoutes, ...industryRoutes]

export const notFoundRoute = {
  path: '/404',
  component: NotFound,
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  noindex: true,
}

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'
  const clean = pathname.replace(/\/+$/, '')
  return clean === '' ? '/' : clean
}

export function matchRoute(pathname) {
  const path = normalizePath(pathname)
  return routes.find((route) => route.path === path) ?? notFoundRoute
}

export function pageTitle(route) {
  return route.fullTitle ?? `${route.title} | ${BUSINESS.name}`
}
