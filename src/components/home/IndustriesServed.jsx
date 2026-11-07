import SectionTitle from '../common/SectionTitle.jsx'

const audiences = [
  ['Schools & Colleges', 'School management systems, ICT consultancy and digital literacy training.', '/industries/education'],
  ['Hospitals & Clinics', 'Hospital management systems and secure handling of patient data.', '/industries/healthcare'],
  ['Companies & SMEs', 'Websites, ERP, CRM and inventory systems, and business automation.', '/industries/business'],
  ['NGOs & Development Organizations', 'Websites, programme and beneficiary systems, and data protection.', '/industries/ngos'],
  ['SACCOs & Cooperatives', 'Cooperative management systems with M-Pesa integration.', '/industries/saccos'],
  ['Startups & Entrepreneurs', 'Websites, MVPs and mobile apps to launch and grow quickly.', '/industries/business'],
]

export default function IndustriesServed() {
  return (
    <section className="border-y border-dark/10 bg-white">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Who we serve"
          title="Technology solutions for businesses and institutions"
          description="We help organizations in Nairobi, Kajiado and across Kenya replace paperwork and outdated tools with secure, modern digital systems."
        />
        <div className="mt-10 grid gap-px bg-dark/10 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(([title, text, href]) => (
            <a key={title} href={href} className="group bg-white p-6 transition hover:bg-primary/5 md:p-8">
              <h3 className="text-lg font-semibold text-dark group-hover:text-primary">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
