export default function Breadcrumbs({ items, inverse = false }) {
  const base = inverse ? 'text-white/50' : 'text-muted'
  const current = inverse ? 'text-white' : 'text-dark'

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-2 text-sm ${base}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className={current}>{item.name}</span>
              ) : (
                <>
                  <a href={item.path} className="transition hover:text-primary">{item.name}</a>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
