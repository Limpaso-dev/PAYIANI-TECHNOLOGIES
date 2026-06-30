import SectionTitle from '../common/SectionTitle.jsx'
import { projects } from '../../data/projects.js'

export default function FeaturedProjects() {
  return (
    <section className="section-shell">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          // eyebrow="Featured projects"
          title="Featured Projects"
          description="Digital experiences shaped around each organization’s identity, audience, and operational goals."
        />
        <a href="/portfolio" className="text-sm font-semibold text-dark underline decoration-primary decoration-2 underline-offset-4">
          Explore our portfolio
        </a>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className="group relative min-h-64 overflow-hidden rounded-3xl bg-dark p-7 text-white">
            <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full border-[45px] border-primary/10 transition duration-300 group-hover:scale-110" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{project.category}</p>
            <div className="relative mt-24 max-w-md">
              <span className="text-xs text-white/35">0{index + 1}</span>
              <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
