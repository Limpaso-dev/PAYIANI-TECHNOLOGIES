import { APP_NAME } from '../../utils/constants.js'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  return (
    <header className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
      <a className="inline-flex items-center gap-3 font-bold uppercase tracking-[0.08em] text-dark" href="/">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-dark text-lg font-black text-primary shadow-lg" aria-hidden="true">
          P
        </span>
        <span>{APP_NAME}</span>
      </a>

      <nav className="flex flex-wrap gap-2 md:justify-end" aria-label="Primary">
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-dark transition duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
