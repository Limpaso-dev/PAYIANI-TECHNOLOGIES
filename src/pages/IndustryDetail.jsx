import MainLayout from '../components/layout/MainLayout.jsx'
import Button from '../components/common/Button.jsx'
import CtaBand from '../components/common/CtaBand.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { getIndustry, industries } from '../data/industries.js'

export default function IndustryDetail({ slug }) {
  const industry = getIndustry(slug)
  const others = industries.filter((item) => item.slug !== slug)

  return (
    <MainLayout>
      <PageHeader
        eyebrow={`Industries · ${industry.shortName}`}
        title={industry.h1}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: industry.shortName, path: `/industries/${industry.slug}` },
        ]}
      >
        <p className="mt-6">{industry.intro}</p>
        <div className="mt-8">
          <Button as="a" href="/contact">Talk to Us</Button>
        </div>
      </PageHeader>

      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl font-semibold text-dark">Challenges we help solve</h2>
          <ul className="divide-y divide-dark/10 border-y border-dark/10">
            {industry.challenges.map((challenge) => (
              <li key={challenge} className="flex gap-4 py-4 leading-7 text-dark">
                <span className="font-bold text-primary" aria-hidden="true">—</span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-dark/10 bg-white">
        <div className="section-shell">
          <h2 className="text-3xl font-semibold text-dark md:text-4xl">How we help</h2>
          <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {industry.solutions.map(([title, text, serviceSlug]) => (
              <article key={title} className="border-t border-dark/15 pt-5">
                <h3 className="text-lg font-semibold text-dark">
                  <a href={`/services/${serviceSlug}`} className="transition hover:text-primary">{title}</a>
                </h3>
                <p className="mt-3 leading-7 text-muted">{text}</p>
                <a href={`/services/${serviceSlug}`} className="mt-3 inline-block text-sm font-semibold text-primary">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <p className="mt-12 text-muted">
            Also see:{' '}
            {others.map((item, index) => (
              <span key={item.slug}>
                {index > 0 ? ' · ' : ''}
                <a href={`/industries/${item.slug}`} className="text-dark underline decoration-primary underline-offset-4 hover:text-primary">{item.shortName}</a>
              </span>
            ))}
          </p>
        </div>
      </section>

      <CtaBand title="Ready to digitize your operations?" text="Share your goals and we’ll propose a practical plan." />
    </MainLayout>
  )
}
