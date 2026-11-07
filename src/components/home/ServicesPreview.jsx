import SectionTitle from '../common/SectionTitle.jsx'
import { pillars } from '../../data/pillars.js'
import { getServiceDetail } from '../../data/serviceDetails.js'

// Home page overview of the five service pillars, linking to each service page.
export default function ServicesPreview() {
  return (
    <section className="section-shell" id="services">
      <SectionTitle
        eyebrow="What we do"
        title="Technology solutions for organizations in Kenya"
        description="Our services are organized around five pillars, from software engineering to digital education, so every organization finds the right starting point."
      />
      <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <article key={pillar.id} className="border-t-2 border-primary pt-6">
            <span className="text-xs font-bold tracking-widest text-primary">0{index + 1}</span>
            <h3 className="mt-3 text-xl font-semibold text-dark">{pillar.name}</h3>
            <p className="mt-3 leading-7 text-muted">{pillar.description}</p>
            <ul className="mt-4 grid gap-2">
              {pillar.services.map((slug) => {
                const service = getServiceDetail(slug)
                return (
                  <li key={slug}>
                    <a href={`/services/${slug}`} className="group inline-flex items-center gap-2 font-medium text-dark transition hover:text-primary">
                      {service.name}
                      <span aria-hidden="true" className="text-primary transition group-hover:translate-x-1">→</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
