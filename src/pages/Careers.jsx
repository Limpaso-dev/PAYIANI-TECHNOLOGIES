import MainLayout from '../components/layout/MainLayout.jsx'

export default function Careers() {
  return (
    <MainLayout>
      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-16">
        <div className="rounded-3xl border border-dark/10 bg-white p-6 shadow-2xl shadow-black/10 md:p-8">
          <h1 className="text-4xl font-semibold text-dark md:text-6xl">Careers</h1>
          <p className="mt-3 text-muted">Add hiring information and open roles here.</p>
        </div>
      </section>
    </MainLayout>
  )
}