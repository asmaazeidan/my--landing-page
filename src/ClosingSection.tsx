export default function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-deep to-rose py-24 text-center">
      {/* arch signature, echoing the logo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-b-full border border-ivory/20 sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-2xl px-6">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-ivory/80">
          AMALY COMMUNITY
        </span>
        <h2 className="mt-5 font-display text-3xl leading-[1.5] text-ivory sm:text-4xl">
          جمالكِ يستحق مكانك… فلننتظرك بفنجان قهوتك المفضّل
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-8 text-ivory/85">
          احجزي موعدك اليوم، وامنحي نفسك لحظة اهتمام تستحقينها في أجواء راقية وهادئة.
        </p>

        <a
          href="https://wa.me/963995914479"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-full bg-ivory px-10 py-4 text-sm font-bold text-rose-deep shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          احجزي موعدك الآن
        </a>
      </div>
    </section>
  )
}
