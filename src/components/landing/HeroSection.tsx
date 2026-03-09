import Image from "next/image";
import { pirinWinterImages } from "./data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-green-100 bg-white/85 p-6 shadow-xl shadow-sky-100/60 backdrop-blur sm:p-10">
      <div className="absolute inset-0 -z-10">
        <Image
          src={pirinWinterImages[0].src}
          alt={pirinWinterImages[0].alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-white/92" />
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
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-800 sm:text-sm">
          Официални сигнали
        </span>
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-800 sm:text-sm">
          Общностни доклади
        </span>
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-700 sm:text-sm">
          Рискови зони и инциденти
        </span>
      </div>
    </section>
  );
}
