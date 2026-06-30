import SectionTitle from '../common/SectionTitle.jsx'
import { services } from '../../data/services.js'

export default function ServicesPreview() {
  return (
    <section className="section-shell" id="services">
      <SectionTitle
        eyebrow="What we do"
        title="Services"
        description="From a first website to secure enterprise infrastructure, Payiani Technologies brings strategy, engineering, and dependable support together."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <a
            key={service.title}
            href={`/services#${service.id}`}
            className="group rounded-2xl border border-dark/10 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs font-bold tracking-widest text-primary">{service.number}</span>
              <span className="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true">→</span>
            </div>
            <h3 className="mt-8 text-xl font-semibold text-dark">{service.title}</h3>
            <p className="mt-3 leading-7 text-muted">{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
