import logo from './logo.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-cream pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* soft ambient glow — depth without "AI slop" dots */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-rose/25 blur-[100px] animate-float-slow" />
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-gold/20 blur-[100px] animate-float-slower" />
        <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-rose-light/30 blur-[90px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        {/* Text */}
        <div className="text-center lg:text-right">
          <span className="mb-5 inline-flex items-center rounded-full border border-gold/40 bg-ivory/70 px-4 py-1.5 text-xs font-bold tracking-wide text-gold-deep backdrop-blur-sm">
            CAFÉ &amp; BEAUTY LOUNGE — دمشق
          </span>

          <h1 className="font-display text-4xl leading-[1.3] text-charcoal sm:text-5xl lg:text-6xl">
            جمالكِ
            <span className="text-rose"> يستحق </span>
            مكانك
          </h1>

          <p className="mx-auto mt-6 max-w-md font-body text-base leading-8 text-charcoal/70 lg:mr-0">
            صالون تجميل راقٍ يلتقي بكافيه هادئ ومميز — مساحة صُممت خصيصاً لتشعري
            فيها بالراحة والاهتمام، من أول فنجان قهوة حتى آخر لمسة جمال.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://wa.me/963995914479"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-rose px-8 py-3.5 text-center text-sm font-bold text-ivory shadow-md transition-all hover:-translate-y-0.5 hover:bg-rose-deep hover:shadow-lg sm:w-auto"
            >
              احجزي موعدك عبر واتساب
            </a>
            <a
              href="#features"
              className="w-full rounded-full border border-gold/50 bg-transparent px-8 py-3.5 text-center text-sm font-bold text-gold-deep transition-all hover:bg-gold/10 sm:w-auto"
            >
              تصفّحي خدماتنا
            </a>
          </div>
        </div>

        {/* Signature: glassmorphic arch panel wrapping the logo */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* metallic gradient rim */}
          <div className="absolute -inset-[3px] rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-br from-gold-light via-rose-light to-gold opacity-70 blur-[2px]" />

          {/* frosted glass panel */}
          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[2rem] border border-white/40 bg-white/30 p-6 shadow-[0_25px_70px_rgba(156,95,110,0.28)] backdrop-blur-xl sm:p-10">
            {/* inner sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent" />
            <div className="relative flex items-center justify-center overflow-hidden rounded-t-[999px] rounded-b-3xl border border-white/60 bg-ivory/80 shadow-inner">
              <img
                src={logo}
                alt="AMALY COMMUNITY — Café & Beauty Lounge"
                className="h-[400px] w-full object-cover object-center sm:h-[480px]"
              />
            </div>
          </div>

          <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-white/50 bg-white/60 px-6 py-2 text-xs font-bold text-gold-deep shadow-md backdrop-blur-md">
            جمالكِ أولويتنا
          </div>
        </div>
      </div>
    </section>
  )
}
