import Image from "next/image";

const heroBackgroundImage =
  "https://pavelpronin.com/wp-content/uploads/2023/01/PolezhanZimaZalz.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-green-100 bg-white/85 p-6 shadow-xl shadow-sky-100/60 backdrop-blur sm:p-10">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroBackgroundImage}
          alt="Панорама от Пирин през зимата"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition-transform duration-[2200ms] hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/35 to-white/92" />
      </div>

      <span className="mb-5 inline-flex items-center rounded-full border border-white/40 bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur sm:text-sm">
        В разработка / Очаквайте скоро
      </span>

      <div className="max-w-3xl">
        <h1 className="text-4xl font-black tracking-tight text-white drop-shadow sm:text-5xl lg:text-6xl">
          Планински Радар
        </h1>
        <p className="mt-4 text-xl font-medium text-sky-100 sm:text-2xl">
          Твоят дигитален пазител за безопасност в планината.
        </p>
        <p className="mt-5 text-base leading-7 text-slate-100 sm:text-lg">
          Създаваме динамична топографска карта, която комбинира сигнали от
          общността за реални рискове по маршрутите с официални данни от
          планинските служби. На едно място ще виждаш и актуални бюлетини, и
          живи уебкамери за по-уверени решения преди и по време на преход.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-800 transition-transform duration-300 hover:-translate-y-0.5 sm:text-sm">
          Официални сигнали
        </span>
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-800 transition-transform duration-300 hover:-translate-y-0.5 sm:text-sm">
          Общностни доклади
        </span>
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-700 transition-transform duration-300 hover:-translate-y-0.5 sm:text-sm">
          Рискови зони и инциденти
        </span>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="#waitlist"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-slate-900/30"
        >
          Искам ранен достъп
        </a>
        <a
          href="#support"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-white/60 bg-white/10 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-slate-900/30"
        >
          Подкрепи проекта
        </a>
      </div>
    </section>
  );
}
