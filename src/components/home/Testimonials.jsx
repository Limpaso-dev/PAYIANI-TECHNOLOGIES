import SectionTitle from '../common/SectionTitle.jsx'
import { testimonials } from '../../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Client feedback"
        title="Testimonials"
        description="What clients value most about working with Payiani Technologies."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="surface-card flex min-h-72 flex-col p-6">
            <span className="text-5xl font-serif leading-none text-primary" aria-hidden="true">“</span>
            <blockquote className="mt-4 flex-1 leading-8 text-dark">{item.quote}</blockquote>
            <div className="mt-6 border-t border-dark/10 pt-5">
              <p className="font-semibold text-dark">{item.name}</p>
              <p className="mt-1 text-sm text-muted">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
