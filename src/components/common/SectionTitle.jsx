export default function SectionTitle({ eyebrow, title, description, inverse = false }) {
  return (
    <header className="grid gap-2">
      {eyebrow ? <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</span> : null}
      <h2 className={`max-w-3xl text-3xl font-semibold leading-tight md:text-4xl ${inverse ? 'text-white' : 'text-dark'}`}>{title}</h2>
      {description ? <p className={`max-w-2xl leading-7 ${inverse ? 'text-white/60' : 'text-muted'}`}>{description}</p> : null}
    </header>
  )
}
