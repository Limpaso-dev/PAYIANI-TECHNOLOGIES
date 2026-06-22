const stats = [
  ['20+', 'Projects Delivered'],
  ['15+', 'Clients Served'],
  ['10+', 'Systems Developed'],
  ['24/7', 'Support Availability'],
]

export default function Stats() {
  return (
    <section className="section-shell py-8 md:py-10" aria-label="Company statistics">
      <div className="grid overflow-hidden rounded-3xl border border-dark/10 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="border-b border-dark/10 p-6 last:border-b-0 sm:border-r lg:border-b-0 lg:last:border-r-0">
            <p className="text-3xl font-bold text-primary md:text-4xl">{value}</p>
            <p className="mt-2 text-sm font-medium text-muted">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
