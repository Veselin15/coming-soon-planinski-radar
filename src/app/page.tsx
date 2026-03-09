export default function Home() {
  const features = [
    {
      title: "Радар за метео условия",
      description:
        "Следи вятър, температура и валежи по планински райони с ясно визуализирани промени.",
    },
    {
      title: "Интелигентни сигнали",
      description:
        "Получавай известия за риск от буря, мъгла или заледяване преди да тръгнеш към маршрута.",
    },
    {
      title: "Планиране на изкачвания",
      description:
        "Сравнявай прозорци с подходящо време и избирай най-безопасния момент за преход.",
    },
    {
      title: "Локален планински фокус",
      description:
        "Създадено за българските планини с акцент върху реалните нужди на планинари и водачи.",
    },
  ];

  const roadmap = [
    {
      step: "01",
      title: "Затворена бета версия",
      description:
        "Тестваме базовата прогноза и визуализациите с ограничен кръг активни планинари.",
    },
    {
      step: "02",
      title: "Персонални предупреждения",
      description:
        "Добавяме известия по предпочитани върхове, маршрути и критични метео прагове.",
    },
    {
      step: "03",
      title: "Общност и сигнали от терен",
      description:
        "Потребителите ще могат да споделят условия в реално време и полезни наблюдения.",
    },
    {
      step: "04",
      title: "Публично стартиране",
      description:
        "Отваряме достъп за всички с подобрен интерфейс, по-висока точност и мобилна оптимизация.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <main className="w-full">
        <section
          className="relative isolate overflow-hidden"
          style={{
            backgroundImage:
              "url('https://pavelpronin.com/wp-content/uploads/2023/01/PolezhanZimaZalz.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/40" />
          <div className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              Планински Радар
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-100 sm:text-lg">
              Умно планиране за сигурни изкачвания. Следи условията в планината
              с по-ясна картина, навременни предупреждения и увереност преди
              всяко приключение.
            </p>
          </div>
        </section>

        <section className="relative z-10 -mt-14 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/25 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-8">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Присъедини се към списъка с ранни потребители
            </h2>
            <p className="mt-2 text-sm text-slate-100 sm:text-base">
              Запиши се и ще получиш покана веднага щом отворим ранния достъп.
            </p>
            <form
              action="https://formspree.io/f/xpqyqdgv"
              method="POST"
              className="mt-5 flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="email" className="sr-only">
                Имейл адрес
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Въведи имейл адрес"
                className="h-12 w-full rounded-xl border border-white/30 bg-white/95 px-4 text-slate-900 shadow-lg outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-xl bg-sky-500 px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                Абонирай ме
              </button>
            </form>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Основни възможности
            </h2>
            <p className="mt-2 text-slate-600">
              Всичко необходимо, за да планираш по-умно и да се движиш по-сигурно
              в планината.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-md sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Какво предстои
            </h2>
            <p className="mt-2 text-slate-600">
              Развиваме платформата на етапи, за да осигурим стабилност, точност
              и максимална стойност.
            </p>

            <div className="relative mt-8 space-y-4">
              <div
                aria-hidden="true"
                className="absolute left-10 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-slate-200 sm:block"
              />
              {roadmap.map((item) => (
                <div
                  key={item.step}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
                >
                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                    {item.step}
                  </span>
                  <div className="ml-14">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative isolate overflow-hidden"
          style={{
            backgroundImage:
              "url('https://gratsielablog.me/wp-content/uploads/2025/01/IMG_E9487_%D0%9F%D0%BE%D0%BB%D0%B5%D0%B6%D0%B0%D0%BD-1024x576.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Проектът е безплатен
              </h2>
              <p className="mt-3 text-slate-100">
                Планински Радар се изгражда с мисия за достъпна и по-сигурна
                планина за всички. Ако искаш да подкрепиш развитието, можеш да
                го направиш с едно натискане.
              </p>
              <a
                href="https://revolut.me/veselin_v06"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-emerald-500 px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Подкрепи чрез Revolut
              </a>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
              <h3 className="text-xl font-semibold">Контакт</h3>
              <p className="mt-2 text-slate-100">
                Имаш идеи, въпроси или искаш да участваш в бета тестовете?
              </p>
              <a
                href="mailto:contact@planinskiradar.com"
                className="mt-4 inline-block text-base font-medium text-sky-200 underline decoration-sky-300 underline-offset-4 transition-all duration-300 hover:text-white"
              >
                contact@planinskiradar.com
              </a>
            </div>
          </div>

          <footer className="relative border-t border-white/20">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-slate-200 sm:flex-row sm:px-6 lg:px-8">
              <p>© {new Date().getFullYear()} Планински Радар</p>
              <p>Създадено за по-сигурни преходи в българските планини.</p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
