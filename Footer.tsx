import { Instagram, Facebook, MessageCircle } from 'lucide-react'
import logo from '../assets/logo.jpg'

const quickLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#features' },
  { label: 'موقعنا', href: '#location' },
  { label: 'تواصل معنا', href: '#contact' },
]

const socials = [
  { icon: MessageCircle, href: 'https://wa.me/963995914479', label: 'واتساب' },
  { icon: Instagram, href: 'https://www.instagram.com/amalycommunity', label: 'انستغرام' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1azHRZcppc/', label: 'فيسبوك' },
]

export default function Footer() {
  return (
    <footer className="bg-rose-ink py-14 text-ivory/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:text-right">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <img
              src={logo}
              alt="AMALY COMMUNITY"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/40"
            />
            <p className="max-w-[220px] text-center text-sm leading-7 text-ivory/60 sm:text-right">
              صالون تجميل راقٍ مع كافيه هادئ ومميز — جمالك يستحق مكانك.
            </p>
          </div>

          <div className="text-center sm:text-right">
            <h4 className="font-display text-lg text-ivory">روابط سريعة</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ivory/60 transition-colors hover:text-gold-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-start">
            <h4 className="font-display text-lg text-ivory">تابعينا</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:text-gold-light"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm text-ivory/60" dir="ltr">
              +963 995 914 479
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-6 text-center text-xs text-ivory/45">
          © {new Date().getFullYear()} AMALY COMMUNITY — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  )
}
