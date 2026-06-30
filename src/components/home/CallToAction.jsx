import Button from '../common/Button.jsx'

export default function CallToAction() {
  return (
    <section className="section-shell">
      <div className="surface-card relative overflow-hidden bg-primary px-6 py-12 md:px-12 md:py-14">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[60px] border-white/15" aria-hidden="true" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-dark/60">Let’s build together</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-dark md:text-5xl">
              Ready to Build Your Next Digital Solution?
            </h2>
            <p className="mt-4 text-dark/70">Contact Payiani Technologies Today.</p>
          </div>
          <Button as="a" href="/contact" className="border-dark bg-dark px-7 text-white hover:border-dark hover:bg-dark/90">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
