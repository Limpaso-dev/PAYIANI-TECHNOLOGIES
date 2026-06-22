import Button from '../common/Button.jsx'

const capabilities = [
  'Web Development',
  'Cybersecurity',
  'Hosting',
  'Payment Integrations',
  'ICT Consultancy',
  'Enterprise Solutions',
]

export default function Hero() {
  return (
    <section className="section-shell pt-8 md:pt-12">
      <div className="surface-card relative overflow-hidden bg-dark px-6 py-12 text-white md:px-12 md:py-16">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border-[70px] border-primary/10" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 h-1/2 w-1/3 bg-gradient-to-tl from-primary/20 to-transparent" aria-hidden="true" />

        <div className="relative grid items-end gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-primary">PAYIANI TECHNOLOGIES</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] md:text-6xl lg:text-7xl">
              Transforming Ideas Into <span className="text-primary">Digital Solutions.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Web Development, Cybersecurity, Hosting, Payment Integrations, ICT Consultancy, and Enterprise Solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="/contact">Request a Quote</Button>
              <Button as="a" href="/services" className="border-white/20 bg-white/5 text-white hover:border-primary hover:bg-primary/10">
                View Our Services
              </Button>
            </div>
          </div>

          <div className="grid gap-2 border-l border-white/15 pl-5">
            {capabilities.map((capability, index) => (
              <div key={capability} className="flex items-center gap-3 py-2 text-sm text-white/75">
                <span className="text-xs font-bold text-primary">0{index + 1}</span>
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
