import MainLayout from '../components/layout/MainLayout.jsx'
import Button from '../components/common/Button.jsx'
import CtaBand from '../components/common/CtaBand.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import Process from '../components/services/Process.jsx'
import { pillars } from '../data/pillars.js'
import { getServiceDetail } from '../data/serviceDetails.js'

export default function Services() {
  return (
    <MainLayout>
      <PageHeader dark eyebrow="Our services" title="IT Solutions & Software Development Services in Kenya">
        <p className="mt-6">
          Payiani Technologies is an IT solutions company in Kenya. We help businesses and institutions digitize their
          operations across five pillars: software engineering, digital transformation, cybersecurity, IT consultancy
          and digital education.
        </p>
        <div className="mt-8">
          <Button as="a" href="/contact">Discuss Your Project</Button>
        </div>
      </PageHeader>

      <nav className="border-b border-dark/10 bg-white" aria-label="Service pillars">
        <ul className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-wrap gap-x-6 gap-y-2 py-4 text-sm">
          {pillars.map((pillar) => (
            <li key={pillar.id}>
              <a href={`#${pillar.id}`} className="text-muted transition hover:text-primary">{pillar.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {pillars.map((pillar, index) => (
        <section key={pillar.id} id={pillar.id} className="section-shell scroll-mt-24 border-b border-dark/10 last-of-type:border-b-0">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr]">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-primary">0{index + 1}</span>
              <h2 className="mt-3 text-3xl font-semibold text-dark">{pillar.name}</h2>
              <p className="mt-4 leading-7 text-muted">{pillar.description}</p>
            </div>
            <div className="divide-y divide-dark/10 border-y border-dark/10">
              {pillar.services.map((slug) => {
                const service = getServiceDetail(slug)
                return (
                  <article key={slug} className="py-6">
                    <h3 className="text-xl font-semibold text-dark">
                      <a href={`/services/${slug}`} className="transition hover:text-primary">{service.name}</a>
                    </h3>
                    <p className="mt-2 leading-7 text-muted">{service.summary}</p>
                    <p className="mt-3 text-sm text-dark/80">{service.highlights.join(' · ')}</p>
                    <a href={`/services/${slug}`} className="mt-4 inline-block text-sm font-semibold text-dark underline decoration-primary decoration-2 underline-offset-4 hover:text-primary">
                      Learn more about {service.name}
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      <Process />

      <CtaBand
        title="Not sure which service fits?"
        text="Tell us what you want to achieve. We’ll help shape the right technical approach."
        label="Talk to Payiani Technologies"
      />
    </MainLayout>
  )
}
