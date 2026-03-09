type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-sm backdrop-blur">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-blue-100 text-blue-700">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

const featureCards: FeatureCardProps[] = [
  {
    title: "Карта на опасностите",
    description:
      "Подавай и преглеждай сигнали за лавини, лед, паднали дървета и други рискове, за да планираш по-безопасен маршрут.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 7.5 12 3l9 4.5-9 4.5L3 7.5Z" />
        <path d="M3 12l9 4.5 9-4.5" />
        <path d="M3 16.5 12 21l9-4.5" />
      </svg>
    ),
  },
  {
    title: "Официални бюлетини",
    description:
      "Автоматично събиране на предупреждения от ПСС и паркови институции за актуална и надеждна картина на ситуацията.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3v18" />
        <path d="M5.5 8.5h13l-2 4h-9l-2-4Z" />
        <path d="M7 21h10" />
      </svg>
    ),
  },
  {
    title: "Хижи и уебкамери",
    description:
      "Провери условията около хижите с последни кадри от уебкамери и допълнителни метео индикатори преди тръгване.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="6" width="17" height="12" rx="2" />
        <path d="m9 12 2 2 4-4" />
        <path d="M8 3h8" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-sky-50 to-white text-slate-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-8 sm:px-6 sm:py-12 lg:gap-20 lg:px-8">
        <section className="rounded-3xl border border-green-100 bg-white/85 p-6 shadow-xl shadow-sky-100/60 backdrop-blur sm:p-10">
          <span className="mb-5 inline-flex items-center rounded-full border border-green-200 bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-green-800 sm:text-sm">
            В разработка / Очаквайте скоро
          </span>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Планински Радар
            </h1>
            <p className="mt-4 text-xl font-medium text-sky-900 sm:text-2xl">
              Твоят дигитален пазител за безопасност в планината.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg">
              Създаваме динамична топографска карта, която комбинира сигнали от
              общността за реални рискове по маршрутите с официални данни от
              планинските служби. На едно място ще виждаш и актуални бюлетини,
              и живи уебкамери за по-уверени решения преди и по време на преход.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 sm:text-sm">
              Официални сигнали
            </span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 sm:text-sm">
              Общностни доклади
            </span>
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800 sm:text-sm">
              Рискови зони и инциденти
            </span>
          </div>
        </section>

        <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/60 sm:p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              Запиши се за ранна бета
            </h2>
            <p className="mt-2 text-slate-600">
              Остави своя имейл и ще те уведомим първи, когато пуснем
              приложението.
            </p>
          </div>

          {/* This form submits directly to Formspree and does not require a backend. */}
          <form
            action="https://formspree.io/f/xpqyqdgv"
            method="POST"
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Твоят имейл адрес
            </label>
            <input
              id="waitlist-email"
              type="email"
              name="email"
              required
              placeholder="Твоят имейл адрес"
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:flex-1"
            />
            <button
              type="submit"
              className="inline-flex h-12 min-w-40 items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-blue-600 px-6 text-base font-semibold text-white transition hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              Абонирай ме
            </button>
          </form>
        </section>

        <section aria-labelledby="features-heading" className="space-y-6">
          <div className="max-w-2xl">
            <h2
              id="features-heading"
              className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
            >
              Основни възможности
            </h2>
            <p className="mt-2 text-slate-600">
              Всичко важно за условията в планината, подредено ясно и достъпно
              директно от телефона ти.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/60 sm:p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              Какво предстои в следващите етапи
            </h2>
            <p className="mt-2 text-slate-600">
              Развиваме проекта поетапно, с фокус върху надеждност и полезност в
              реални условия.
            </p>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-slate-700 sm:text-base">
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              1) Интерактивна карта с рискови сигнали от общността.
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              2) Автоматично обновяване на официални предупреждения от ПСС.
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              3) Маркери за хижи с последен кадър от уебкамера и метео контекст.
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              4) PWA версия с приоритет за мобилна употреба и офлайн достъп.
            </li>
          </ul>
        </section>

        <section className="rounded-3xl border border-green-100 bg-gradient-to-r from-green-50 to-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Проектът е безплатен и отворен.
          </h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Планински Радар ще остане безплатен и с отворен код, без реклами и
            скрити такси. Поддръжката на специализирана инфраструктура за
            обработка на данни и актуализации в реално време обаче изисква
            постоянни разходи. Ако искаш да помогнеш за поддръжката, можеш да
            ме подкрепиш тук:
          </p>
          <div className="mt-6">
            <a
              href="https://revolut.me/veselin_v06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 8.5h16" />
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="M7 14h6" />
              </svg>
              Подкрепи проекта чрез Revolut
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-700">
            За въпроси, идеи или партньорство, пиши ми директно на:{" "}
            <a
              href="mailto:contact@planinskiradar.com"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-800"
            >
              contact@planinskiradar.com
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 px-4 py-5 text-center text-sm text-slate-600 sm:px-6">
        © {new Date().getFullYear()} Планински Радар · planinskiradar.com
      </footer>
    </div>
  );
}
