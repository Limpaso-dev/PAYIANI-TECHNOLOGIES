export default function ProjectCard({ title, category, description }) {
  return (
    <article className="border-t border-dark/15 pt-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{category}</p>
      <h2 className="mt-3 text-2xl font-semibold text-dark">{title}</h2>
      {description ? <p className="mt-3 leading-7 text-muted">{description}</p> : null}
    </article>
  )
}
