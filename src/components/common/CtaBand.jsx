import Button from './Button.jsx'

// Full-width call-to-action band.
export default function CtaBand({
  eyebrow,
  title = 'Ready to build your next digital solution?',
  text = 'Tell us what you want to achieve and we’ll recommend the right approach.',
  label = 'Request a Quote',
  href = '/contact',
}) {
  return (
    <section className="bg-primary">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] items-center gap-8 py-14 md:grid-cols-[1fr_auto] md:py-16">
        <div>
          {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.2em] text-dark/60">{eyebrow}</p> : null}
          <h2 className="mt-2 max-w-2xl text-3xl font-semibold leading-tight text-dark md:text-4xl">{title}</h2>
          <p className="mt-3 text-dark/70">{text}</p>
        </div>
        <Button as="a" href={href} className="border-dark bg-dark px-7 text-white hover:border-dark hover:bg-dark/90">
          {label}
        </Button>
      </div>
    </section>
  )
}
