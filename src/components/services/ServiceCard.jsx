export default function ServiceCard({ id, number, title, description, features }) {
  return (
    <article id={id} className="scroll-mt-6 rounded-3xl border border-dark/10 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-primary">{number}</span>
          <h2 className="mt-4 text-2xl font-semibold text-dark md:text-3xl">{title}</h2>
          <p className="mt-4 leading-7 text-muted">{description}</p>
        </div>
        <ul className="grid content-start gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 rounded-2xl border border-dark/10 bg-light px-4 py-4 font-medium text-dark">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-xs font-bold text-primary" aria-hidden="true">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
