export function SupportSection() {
  return (
    <section
      id="support"
      className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"
    >
      <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Проектът е безплатен</h2>
        <p className="mt-3 text-slate-100">
          Планински Радар се изгражда с мисия за достъпна и по-сигурна планина
          за всички. Ако искаш да подкрепиш развитието, можеш да го направиш с
          едно натискане.
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
    </section>
  );
}
