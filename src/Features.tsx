import hair from './hair.jpg'
import makeup from './makeup.jpg'
import skincare from './skincare.jpg'
import nails from './nails.jpg'
import cafe from './cafe.jpg'

const services = [
  { title: 'تسريحات', desc: 'تسريحات مناسبات وتسريحات يومية بأيادٍ خبيرة تلائم إطلالتك.', image: hair },
  { title: 'مكياج', desc: 'مكياج احترافي يبرز جمالك الطبيعي لكل مناسبة وسهرة.', image: makeup },
  { title: 'عناية بالبشرة', desc: 'جلسات عناية وتنظيف بشرة تمنحكِ إشراقة ونضارة حقيقية.', image: skincare },
  { title: 'عناية بالأظافر', desc: 'مانيكير وباديكير بلمسة أنيقة ونظافة تامة.', image: nails },
  { title: 'كافيه راقٍ', desc: 'استرخي مع فنجان قهوتك المفضّل بأجواء هادئة قبل أو بعد جلستك.', image: cafe },
]

export default function Features() {
  return (
    <section id="features" className="bg-blush py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">
            خدماتنا
          </span>
          <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
            كل ما تحتاجينه لإطلالة متكاملة
          </h2>
        </div>

        <div className="mt-14 flex flex-wrap items-stretch justify-center gap-8">
          {services.map(({ title, desc, image }) => (
            <div
              key={title}
              className="group flex w-full max-w-[240px] flex-col items-center text-center"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-ivory shadow-[0_10px_30px_rgba(156,95,110,0.25)] ring-1 ring-gold/30 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lg">
                <img src={image} alt={title} className="h-full w-full object-cover" />
              </div>

              <h3 className="mt-5 font-display text-xl text-charcoal">{title}</h3>
              <p className="mt-2 max-w-[220px] text-sm leading-7 text-charcoal/65">{desc}</p>

              <a
                href={`https://wa.me/963995914479?text=${encodeURIComponent(
                  `مرحباً، حابة أحجز موعد لخدمة ${title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full rounded-full border border-rose/40 bg-ivory px-5 py-2 text-xs font-bold text-rose-deep transition-all hover:bg-rose hover:text-ivory hover:shadow-md"
              >
                احجزي موعد
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
