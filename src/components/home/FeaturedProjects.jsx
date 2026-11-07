import SectionTitle from '../common/SectionTitle.jsx'
import { projects } from '../../data/projects.js'

export default function FeaturedProjects() {
  return (
    <section className="section-shell">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          title="Featured Projects"
          description="Digital experiences shaped around each organization’s identity, audience, and operational goals."
        />
        <a href="/portfolio" className="text-sm font-semibold text-dark underline decoration-primary decoration-2 underline-offset-4">
          Explore our portfolio
        </a>
      </div>
      <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className="border-t border-dark/15 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              0{index + 1} · {project.category}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-dark">{project.title}</h3>
            <p className="mt-3 leading-7 text-muted">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
