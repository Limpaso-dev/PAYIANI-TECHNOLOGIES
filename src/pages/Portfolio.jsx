import MainLayout from '../components/layout/MainLayout.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import ProjectCard from '../components/portfolio/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Portfolio() {
  return (
    <MainLayout>
      <PageHeader title="Portfolio">
        <p className="mt-6">
          We use accessible digital solutions to support climate justice, helping communities, schools, and organizations build knowledge, share local priorities, and take informed action for a more sustainable future.
        </p>
      </PageHeader>
      <section className="section-shell">
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
