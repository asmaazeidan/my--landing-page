import { MessageCircle, Instagram, Facebook, Phone } from 'lucide-react'

const channels = [
  {
    icon: MessageCircle,
    label: 'واتساب',
    sub: '0995 914 479',
    href: 'https://wa.me/963995914479',
  },
  {
    icon: Instagram,
    label: 'انستغرام',
    sub: '@amalycommunity',
    href: 'https://www.instagram.com/amalycommunity',
  },
  {
    icon: Facebook,
    label: 'فيسبوك',
    sub: 'AMALY COMMUNITY',
    href: 'https://www.facebook.com/share/1azHRZcppc/',
  },
  {
    icon: Phone,
    label: 'اتصال مباشر',
    sub: '0995 914 479',
    href: 'tel:+963995914479',
  },
]

export default function ContactUs() {
  return (
    <section id="contact" className="bg-blush py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">
            تواصل معنا
          </span>
          <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
            لحجوزاتك واستفساراتك
          </h2>
          <p className="mt-4 text-charcoal/70">تواصلي معنا من القناة الأسهل بالنسبة لك</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, label, sub, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-3xl border border-gold/25 bg-ivory px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-rose/40 hover:shadow-lg"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-rose-deep transition-colors group-hover:bg-rose group-hover:text-ivory">
                <Icon size={26} strokeWidth={1.7} />
              </span>
              <span className="font-display text-lg text-charcoal">{label}</span>
              <span className="text-sm text-charcoal/60" dir="ltr">
                {sub}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
