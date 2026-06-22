import MainLayout from '../components/layout/MainLayout.jsx'
import ProjectCard from '../components/portfolio/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Portfolio() {
  return (
    <MainLayout>
      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-16">
        <div className="grid gap-6 rounded-3xl border border-dark/10 bg-white p-6 shadow-2xl shadow-black/10 md:p-8">
          <h1 className="text-4xl font-semibold text-dark md:text-6xl">Portfolio</h1>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}