export default function ProjectCard({ title, category, description }) {
  return (
    <article className="grid gap-3 rounded-2xl border border-dark/10 bg-light p-5">
      <p className="text-sm text-primary">{category}</p>
      <h3 className="text-lg font-semibold text-dark">{title}</h3>
      {description ? <p className="leading-7 text-muted">{description}</p> : null}
    </article>
  )
}
