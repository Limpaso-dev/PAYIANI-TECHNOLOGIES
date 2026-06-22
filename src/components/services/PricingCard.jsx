export default function PricingCard({ title, price, description }) {
  return (
    <article className="grid gap-3 rounded-2xl border border-dark/10 bg-light p-5">
      <h3 className="text-lg font-semibold text-dark">{title}</h3>
      <p className="text-primary">{price}</p>
      <p className="text-muted">{description}</p>
    </article>
  )
}