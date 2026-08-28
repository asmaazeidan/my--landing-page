import { Coffee, Heart, Gem } from 'lucide-react'

const tags = [
  { icon: Gem, label: 'جمالك… أولويتنا' },
  { icon: Heart, label: 'أجواء مريحة' },
  { icon: Coffee, label: 'كافيه راقي' },
]

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-ivory py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">
          من نحن
        </span>

        <h2 className="mt-4 font-display text-3xl leading-[1.5] text-charcoal sm:text-4xl">
          مساحة واحدة… لجمالك وراحتك معاً
        </h2>

        <p className="mx-auto mt-7 max-w-2xl font-body text-base leading-9 text-charcoal/70 sm:text-lg">
          في <span className="font-bold text-rose-deep">AMALY COMMUNITY</span>، لا نقدّم خدمة
          تجميل فقط، بل نصمّم تجربة متكاملة: صالون تجميل راقٍ بأيادٍ محترفة، إلى جانب
          كافيه هادئ تحتسين فيه فنجان قهوتك المفضّلة بينما تستعدّين لتألقك. كل تفصيل هنا
          — من الإضاءة إلى الرائحة — اخترناه ليشعرك أنكِ في مكانك الحقيقي.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {tags.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-gold/30 bg-cream px-5 py-2.5 text-sm font-bold text-charcoal/80"
            >
              <Icon size={16} className="text-rose-deep" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
