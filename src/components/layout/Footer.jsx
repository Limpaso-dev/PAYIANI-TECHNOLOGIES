import { APP_NAME } from '../../utils/constants.js'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-dark/10 bg-dark text-white">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col gap-3 py-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
        <p><span className="font-semibold text-primary">{APP_NAME}</span> · Digital solutions built for growth.</p>
        <p>Web · Systems · Security · Cloud · Consultancy</p>
      </div>
    </footer>
  )
}
