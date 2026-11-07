import Breadcrumbs from './Breadcrumbs.jsx'

// Full-width page header band used at the top of inner pages.
export default function PageHeader({ eyebrow, title, breadcrumbs, dark = false, children }) {
  return (
    <section className={dark ? 'bg-dark text-white' : 'border-b border-dark/10 bg-white text-dark'}>
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))] py-14 md:py-20">
        {breadcrumbs ? (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} inverse={dark} />
          </div>
        ) : null}
        {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
        <div className={`max-w-3xl text-lg leading-8 ${dark ? 'text-white/70' : 'text-muted'}`}>{children}</div>
      </div>
    </section>
  )
}
