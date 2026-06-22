export default function Button({ as = 'button', children, href, className = '', ...props }) {
  const Component = as
  const baseClassName =
    'inline-flex items-center justify-center rounded-full border border-primary/40 px-5 py-3 text-sm font-semibold text-dark shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'

  if (Component === 'a') {
    return (
      <a className={`${baseClassName} bg-primary ${className}`.trim()} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Component className={`${baseClassName} bg-primary ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}
