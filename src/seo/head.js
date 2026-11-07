// Builds the <head> tags for a route as an HTML string. Runs at build time
// (scripts/prerender.js) so every page ships with its own title, description,
// canonical URL, social preview tags and structured data in the raw HTML.

import { BUSINESS, absoluteUrl } from './site.js'
import { pageTitle } from './routes.js'

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function jsonLd(data) {
  // Prevent "</script>" inside strings from closing the tag early.
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return `<script type="application/ld+json">${json}</script>`
}

export function renderHead(route) {
  const title = escapeHtml(pageTitle(route))
  const description = escapeHtml(route.description)
  const url = absoluteUrl(route.path)
  const image = absoluteUrl(route.image ?? BUSINESS.defaultImage)

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
  ]

  if (route.noindex) {
    tags.push('<meta name="robots" content="noindex, follow" />')
  } else {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      '<meta name="robots" content="index, follow, max-image-preview:large" />',
    )
  }

  if (!route.noindex) tags.push(`<meta property="og:url" content="${url}" />`)

  tags.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(BUSINESS.name)}" />`,
    `<meta property="og:locale" content="en_KE" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(BUSINESS.name)} logo" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  )

  const schemas = route.schema ? route.schema() : []
  for (const schema of schemas) tags.push(jsonLd(schema))

  return tags.join('\n    ')
}
