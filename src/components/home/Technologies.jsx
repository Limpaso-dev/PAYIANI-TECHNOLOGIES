import SectionTitle from '../common/SectionTitle.jsx'

const technologies = [
  'React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL',
  'Tailwind CSS', 'Docker', 'AWS', 'Linux', 'GitHub', 'Vercel',
]

export default function Technologies() {
  return (
    <section className="section-shell">
      <SectionTitle
        title="Our Tech-Stack"
        description="We choose dependable tools that match the product, team, and long-term maintenance needs."
      />
      <ul className="mt-8 grid grid-cols-2 gap-px border border-dark/10 bg-dark/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {technologies.map((technology) => (
          <li key={technology} className="grid min-h-20 place-items-center bg-white p-4 text-center font-semibold text-dark">
            {technology}
          </li>
        ))}
      </ul>
    </section>
  )
}
