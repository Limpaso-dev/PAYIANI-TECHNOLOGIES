import MainLayout from '../components/layout/MainLayout.jsx'

export default function NotFound() {
  return (
    <MainLayout>
      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-16">
        <div className="rounded-3xl border border-dark/10 bg-white p-6 shadow-2xl shadow-black/10 md:p-8">
          <h1 className="text-4xl font-semibold text-dark md:text-6xl">Page not found</h1>
          <p className="mt-3 text-muted">The requested route does not exist yet.</p>
          <a className="mt-6 inline-flex rounded-full border border-dark/10 bg-light px-4 py-2 text-sm text-dark transition hover:border-primary/40 hover:bg-primary/10" href="/">
            Go home
          </a>
        </div>
      </section>
    </MainLayout>
  )
}