import MainLayout from '../components/layout/MainLayout.jsx'
import { faq } from '../data/faq.js'

export default function FAQ() {
  return (
    <MainLayout>
      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-16">
        <div className="grid gap-6 rounded-3xl border border-dark/10 bg-white p-6 shadow-2xl shadow-black/10 md:p-8">
          <h1 className="text-4xl font-semibold text-dark md:text-6xl">FAQ</h1>
          <div className="grid gap-4">
            {faq.map((item) => (
              <article key={item.question} className="grid gap-3 rounded-2xl border border-dark/10 bg-light p-5">
                <h3 className="text-lg font-semibold text-dark">{item.question}</h3>
                <p className="text-muted">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}