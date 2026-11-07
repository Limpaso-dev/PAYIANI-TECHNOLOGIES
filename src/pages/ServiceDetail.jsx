import MainLayout from '../components/layout/MainLayout.jsx'
import Button from '../components/common/Button.jsx'
import CtaBand from '../components/common/CtaBand.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import Process from '../components/services/Process.jsx'
import { getServiceDetail, serviceDetails } from '../data/serviceDetails.js'
import { pillars } from '../data/pillars.js'
import { getIndustry } from '../data/industries.js'
import { BUSINESS } from '../seo/site.js'

export default function ServiceDetail({ slug }) {
  const service = getServiceDetail(slug)
  const pillar = pillars.find((item) => item.id === service.pillar)
  const related = serviceDetails.filter((item) => item.slug !== slug)

  return (
    <MainLayout>
      <PageHeader
        dark
        eyebrow={pillar.name}
        title={service.h1}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      >
        {service.intro.map((paragraph) => (
          <p key={paragraph} className="mt-5">{paragraph}</p>
        ))}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button as="a" href="/contact">Request a Quote</Button>
          <Button as="a" href={`tel:${BUSINESS.telephone}`} className="border-white/30 bg-transparent text-white hover:border-primary">
            Call {BUSINESS.telephoneDisplay}
          </Button>
        </div>
      </PageHeader>

      <section className="section-shell">
        <h2 className="text-3xl font-semibold text-dark md:text-4xl">What we offer</h2>
        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {service.offerings.map(([title, text]) => (
            <article key={title} className="border-t border-dark/15 pt-5">
              <h3 className="text-lg font-semibold text-dark">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-dark/10 bg-white">
        <div className="section-shell grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-dark md:text-3xl">Why work with Payiani Technologies</h2>
            <ul className="mt-6 grid gap-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-dark">
                  <span className="font-bold text-primary" aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-dark md:text-3xl">Who we serve</h2>
            <p className="mt-4 leading-7 text-muted">
              We work with organizations across Kenya, including Nairobi and Kajiado counties.
            </p>
            <ul className="mt-6 grid gap-3">
              {service.industries.map((industrySlug) => {
                const industry = getIndustry(industrySlug)
                return (
                  <li key={industrySlug}>
                    <a href={`/industries/${industry.slug}`} className="font-medium text-dark underline decoration-primary decoration-2 underline-offset-4 hover:text-primary">
                      {industry.shortName}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <Process />

      <section className="section-shell pt-0">
        <h2 className="text-3xl font-semibold text-dark md:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-dark/10 border-y border-dark/10">
          {service.faqs.map((item) => (
            <article key={item.question} className="py-6">
              <h3 className="text-lg font-semibold text-dark">{item.question}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-muted">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <h2 className="text-2xl font-semibold text-dark">Other services</h2>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
          {related.map((item) => (
            <li key={item.slug}>
              <a href={`/services/${item.slug}`} className="text-muted underline decoration-dark/20 underline-offset-4 transition hover:text-primary hover:decoration-primary">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title="Let’s talk about your project" label="Contact Payiani Technologies" />
    </MainLayout>
  )
}
