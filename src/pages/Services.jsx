import MainLayout from '../components/layout/MainLayout.jsx'
import Button from '../components/common/Button.jsx'
import Process from '../components/services/Process.jsx'
import ServiceCard from '../components/services/ServiceCard.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <MainLayout>
      <section className="section-shell pt-8 md:pt-12">
        <div className="surface-card overflow-hidden bg-dark px-6 py-12 text-white md:px-12 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Our services</p>
          <div className="mt-4 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Digital capability for every stage of growth.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                Design, engineering, payments, security, infrastructure, and strategic guidance delivered by one focused technology partner.
              </p>
            </div>
            <Button as="a" href="/contact">Discuss Your Project</Button>
          </div>
        </div>
      </section>

      <nav className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-wrap gap-2 pb-8" aria-label="Services on this page">
        {services.map((service) => (
          <a key={service.id} href={`#${service.id}`} className="rounded-full border border-dark/10 bg-white px-4 py-2 text-sm text-muted transition hover:border-primary hover:text-dark">
            {service.title}
          </a>
        ))}
      </nav>

      <section className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-5 py-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </section>

      <Process />

      <section className="section-shell pt-0">
        <div className="rounded-3xl bg-primary p-7 md:flex md:items-center md:justify-between md:p-10">
          <div>
            <h2 className="text-3xl font-semibold text-dark">Not sure which service fits?</h2>
            <p className="mt-3 text-dark/70">Tell us what you want to achieve. We’ll help shape the right technical approach.</p>
          </div>
          <Button as="a" href="/contact" className="mt-6 border-dark bg-dark text-white md:mt-0">Talk to PAYIANI</Button>
        </div>
      </section>
    </MainLayout>
  )
}
