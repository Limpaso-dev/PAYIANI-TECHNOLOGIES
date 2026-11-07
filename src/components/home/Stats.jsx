const stats = [
  ['20+', 'Projects Delivered'],
  ['20+', 'Clients Served'],
  ['10+', 'Systems Developed'],
  ['24/7', 'Support Availability'],
]

export default function Stats() {
  return (
    <section className="border-y border-dark/10 bg-white" aria-label="Company statistics">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="border-dark/10 px-6 py-8 first:pl-0 [&:nth-child(3)]:pl-0 [&:nth-child(odd)]:border-r [&:nth-child(n+3)]:border-t lg:border-r lg:border-t-0 lg:[&:nth-child(3)]:pl-6 lg:last:border-r-0">
            <p className="text-3xl font-bold text-primary md:text-4xl">{value}</p>
            <p className="mt-2 text-sm font-medium text-muted">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
