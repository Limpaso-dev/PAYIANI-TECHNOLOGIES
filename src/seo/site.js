// Single source of truth for business details used in meta tags,
// structured data (JSON-LD), the sitemap and robots.txt.
//
// SITE_URL must be the preferred (canonical) domain. If the live site is
// served from www, change it here — every canonical URL follows this value.

export const SITE_URL = 'https://payianitechnologies.com'

export const BUSINESS = {
  name: 'Payiani Technologies',
  legalName: 'Payiani Technologies',
  tagline: 'Your Tech World Starts Here.',
  email: 'payianitech@gmail.com',
  telephone: '+254757358237',
  telephoneDisplay: '+254 757 358 237',
  logo: '/logo.jpg',
  defaultImage: '/logo.jpg',
  address: {
    streetAddress: 'Karen',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    addressCountry: 'KE',
  },
  // Only list places where services are genuinely delivered.
  areaServed: ['Kenya', 'Nairobi', 'Kajiado'],
  // Add official social profile URLs (LinkedIn, Facebook, X, etc.) here.
  sameAs: [],
}

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//.test(path)) return path
  if (path === '/') return SITE_URL + '/'
  return SITE_URL + (path.startsWith('/') ? path : `/${path}`)
}
