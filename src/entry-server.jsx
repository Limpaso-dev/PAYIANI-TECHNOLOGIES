// Server entry used only at build time to prerender every route to HTML.
/* eslint-disable react-refresh/only-export-components -- build-only entry, never hot-reloaded */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export { routes, notFoundRoute } from './seo/routes.js'
export { renderHead } from './seo/head.js'
export { SITE_URL } from './seo/site.js'

export function render(path) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )
}
