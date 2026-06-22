const steps = [
  ['01', 'Discover', 'We clarify your goals, users, requirements, constraints, and measures of success.'],
  ['02', 'Plan', 'We define the right solution, delivery scope, architecture, milestones, and timeline.'],
  ['03', 'Build', 'We design, develop, integrate, and test with clear progress communication.'],
  ['04', 'Launch & Support', 'We deploy carefully, hand over clearly, and remain available after launch.'],
]

export default function Process() {
  return (
    <section className="section-shell">
      <div className="surface-card bg-dark p-6 text-white md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">How we work</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A clear path from idea to launch.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, description]) => (
            <article key={title} className="border-t border-white/15 pt-5">
              <span className="text-xs font-bold text-primary">{number}</span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
