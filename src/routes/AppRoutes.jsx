import { useEffect } from 'react'
import { matchRoute, pageTitle } from '../seo/routes.js'

// `path` is passed explicitly during build-time prerendering; in the browser
// it falls back to the current URL.
export default function AppRoutes({ path }) {
  const pathname = path ?? window.location.pathname
  const route = matchRoute(pathname)
  const Page = route.component

  // Prerendered HTML already has the right <title>; this keeps the dev server
  // (which serves a bare index.html) in sync.
  useEffect(() => {
    document.title = pageTitle(route)
  }, [route])

  return <Page {...(route.props ?? {})} />
}
