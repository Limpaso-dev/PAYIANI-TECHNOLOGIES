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
      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.name} className="flex flex-col border-l-2 border-primary pl-6">
            <blockquote className="flex-1 leading-8 text-dark">“{item.quote}”</blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold text-dark">{item.name}</p>
              <p className="mt-1 text-sm text-muted">{item.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
