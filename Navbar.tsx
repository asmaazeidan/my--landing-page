import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'

const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#features' },
  { label: 'موقعنا', href: '#location' },
  { label: 'تواصل معنا', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md shadow-[0_2px_20px_rgba(53,40,34,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AMALY COMMUNITY"
            className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40"
          />
          <span className="hidden font-display text-lg text-charcoal sm:block">
            AMALY <span className="text-rose">COMMUNITY</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-charcoal/80 transition-colors hover:text-rose-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/963995914479"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-rose px-6 py-2.5 text-sm font-bold text-ivory shadow-sm transition-all hover:bg-rose-deep hover:shadow-md md:inline-block"
        >
          احجزي الآن
        </a>

        <button
          aria-label="فتح القائمة"
          className="text-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/20 bg-ivory/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base font-medium text-charcoal/85"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <a
              href="https://wa.me/963995914479"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-rose px-6 py-3 text-center text-sm font-bold text-ivory"
            >
              احجزي الآن عبر واتساب
            </a>
          </ul>
        </div>
      )}
    </header>
  )
}
