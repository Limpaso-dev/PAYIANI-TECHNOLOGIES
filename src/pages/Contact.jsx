import MainLayout from '../components/layout/MainLayout.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'

export default function Contact() {
  return (
    <MainLayout>
      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-16">
        <div className="grid gap-6 rounded-3xl border border-dark/10 bg-white p-6 shadow-2xl shadow-black/10 md:p-8">
          <h1 className="text-4xl font-semibold text-dark md:text-6xl">Contact</h1>
          <p className="text-muted">Place your contact form or email details here.</p>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  )
}