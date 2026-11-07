import MainLayout from '../components/layout/MainLayout.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { faq } from '../data/faq.js'

export default function FAQ() {
  return (
    <MainLayout>
      <PageHeader title="Frequently Asked Questions" />
      <section className="section-shell">
        <div className="divide-y divide-dark/10 border-y border-dark/10">
          {faq.map((item) => (
            <article key={item.question} className="py-6">
              <h2 className="text-lg font-semibold text-dark">{item.question}</h2>
              <p className="mt-3 max-w-3xl leading-7 text-muted">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
