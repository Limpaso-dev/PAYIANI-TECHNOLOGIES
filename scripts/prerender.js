// Build step: renders every route to static HTML with route-specific <head>
// tags, then writes sitemap.xml and robots.txt.
//
// Runs after `vite build` (client) and `vite build --ssr` (server entry).
// Output layout matches vercel.json `cleanUrls`: /about -> dist/about.html,
// /services/web-development -> dist/services/web-development.html.

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')

const { render, routes, notFoundRoute, renderHead, SITE_URL } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
)

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8')
for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) throw new Error(`index.html is missing ${marker}`)
}

// React 19 emits resource hints (e.g. <link rel="preload" as="image">) at the
// start of the rendered markup. Move them into <head> where they belong so
// the body markup matches what the client hydrates.
const LEADING_LINKS = /^(?:<link [^>]*\/?>)+/

function buildPage(route) {
  const appHtml = render(route.path)
  const hints = appHtml.match(LEADING_LINKS)?.[0] ?? ''
  const head = renderHead(route) + (hints ? `\n    ${hints}` : '')
  return template
    .replace('<!--app-head-->', () => head)
    .replace('<!--app-html-->', () => appHtml.slice(hints.length))
}

function outputFile(routePath) {
  return routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`
}

async function write(relative, contents) {
  const file = path.join(distDir, relative)
  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.writeFile(file, contents)
}

for (const route of routes) {
  await write(outputFile(route.path), buildPage(route))
}
// Vercel serves 404.html with a real 404 status for unknown URLs.
await write('404.html', buildPage(notFoundRoute))

const indexable = routes.filter((route) => !route.noindex)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map((route) => `  <url><loc>${route.path === '/' ? `${SITE_URL}/` : SITE_URL + route.path}</loc></url>`)
  .join('\n')}
</urlset>
`
await write('sitemap.xml', sitemap)

await write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

await fs.rm(serverDir, { recursive: true, force: true })

console.log(`Prerendered ${routes.length} routes + 404.html; sitemap has ${indexable.length} URLs.`)
