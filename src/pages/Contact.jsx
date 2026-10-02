import MainLayout from '../components/layout/MainLayout.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <MainLayout>
      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-16">
        <div className="grid gap-8 rounded-3xl border border-dark/10 bg-white p-5 shadow-2xl shadow-black/10 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:p-10">
          <aside className="min-w-0">
            <h1 className="text-4xl font-semibold text-dark md:text-5xl">Contact Us</h1>
            <div className="mt-8 space-y-6 text-muted">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-primary" size={20} aria-hidden="true" />
                <span>Karen, Nairobi</span>
              </div>
              <a className="flex min-w-0 items-start gap-3 transition hover:text-dark" href="tel:+254757358237">
                <Phone className="mt-1 shrink-0 text-primary" size={20} aria-hidden="true" />
                <span className="break-words">+2547 5735 8237</span>
              </a>
              <a className="flex min-w-0 items-start gap-3 transition hover:text-dark" href="mailto:payianitech@gmail.com">
                <Mail className="mt-1 shrink-0 text-primary" size={20} aria-hidden="true" />
                <span className="break-all">payianitech@gmail.com</span>
              </a>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  )
}
