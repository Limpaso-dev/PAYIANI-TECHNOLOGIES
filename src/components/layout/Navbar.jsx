import { useState } from "react";
import { Menu, X } from "lucide-react";
import { APP_NAME } from "../../utils/constants.js";
import logo from "../../assets/images/logo.png";

const links = [
  ["HOME", "/"],
  ["ABOUT", "/about"],
  ["SERVICES", "/services"],
  ["PORTFOLIO", "/portfolio"],
  ["CONTACT", "/contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-dark/10 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] items-center justify-between py-5">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 font-bold uppercase tracking-[0.08em] text-dark"
          >
            <img
              src={logo}
              alt={`${APP_NAME} Logo`}
              className="h-12 w-12 object-contain"
            />

            <span className="hidden sm:block">{APP_NAME}</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-2 md:flex"
            aria-label="Primary"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-dark transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-dark/10 bg-white md:hidden">
            <nav className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col py-4">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-dark transition hover:bg-primary/10 hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-[88px]" />
    </>
  );
}