import SectionTitle from '../common/SectionTitle.jsx'

const reasons = [
  ['Professional Expertise', 'Practical experience across design, engineering, infrastructure, and security.'],
  ['Client-Centered Approach', 'Solutions shaped around your users, priorities, timelines, and growth plans.'],
  ['Secure Solutions', 'Security and responsible data handling considered throughout delivery.'],
  ['Affordable Pricing', 'Clear, scalable options designed to deliver strong business value.'],
  ['Ongoing Support', 'A dependable technical partner beyond launch and handover.'],
  ['Modern Technologies', 'Proven tools selected for performance, maintainability, and scale.'],
]

export default function WhyChooseUs() {
  return (
    <section className="bg-dark text-white">
      <div className="section-shell">
        <SectionTitle
          // eyebrow="Why choose PAYIANI"
          title="Why Choose Payiani Technologies?"
          description="We combine technical depth with clear communication, disciplined delivery, and support that lasts."
          inverse
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, description], index) => (
            <article key={title} className="bg-dark p-6 md:p-8">
              <span className="text-xs font-bold text-primary">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-white/60">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
