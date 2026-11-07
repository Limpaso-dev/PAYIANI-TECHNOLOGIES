import MainLayout from '../components/layout/MainLayout.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import { Mail, MapPin, Phone } from 'lucide-react'
import { BUSINESS } from '../seo/site.js'

export default function Contact() {
  return (
    <MainLayout>
      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <aside className="min-w-0">
            <h1 className="text-4xl font-semibold text-dark md:text-5xl">Contact Us</h1>
            <p className="mt-5 leading-7 text-muted">
              Tell us about your website, software, cybersecurity, consultancy or training needs and we’ll get back to you with next steps.
            </p>
            <div className="mt-8 divide-y divide-dark/10 border-y border-dark/10 text-muted">
              <div className="flex items-start gap-3 py-4">
                <MapPin className="mt-1 shrink-0 text-primary" size={20} aria-hidden="true" />
                <span>Karen, Nairobi, Kenya</span>
              </div>
              <a className="flex min-w-0 items-start gap-3 py-4 transition hover:text-dark" href={`tel:${BUSINESS.telephone}`}>
                <Phone className="mt-1 shrink-0 text-primary" size={20} aria-hidden="true" />
                <span className="break-words">{BUSINESS.telephoneDisplay}</span>
              </a>
              <a className="flex min-w-0 items-start gap-3 py-4 transition hover:text-dark" href={`mailto:${BUSINESS.email}`}>
                <Mail className="mt-1 shrink-0 text-primary" size={20} aria-hidden="true" />
                <span className="break-all">{BUSINESS.email}</span>
              </a>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  )
}
