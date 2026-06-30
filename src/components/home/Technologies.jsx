import SectionTitle from '../common/SectionTitle.jsx'

const technologies = [
  'React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL',
  'Tailwind CSS', 'Docker', 'AWS', 'Linux', 'GitHub', 'Vercel',
]

export default function Technologies() {
  return (
    <section className="section-shell">
      <div className="surface-card p-6 md:p-10">
        <SectionTitle
          // eyebrow="Our stack"
          title="Our Tech-Stack"
          description="We choose dependable tools that match the product, team, and long-term maintenance needs."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((technology) => (
            <div key={technology} className="grid min-h-24 place-items-center rounded-2xl border border-dark/10 bg-light p-4 text-center font-semibold text-dark transition hover:border-primary/60 hover:bg-primary/10">
              {technology}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
