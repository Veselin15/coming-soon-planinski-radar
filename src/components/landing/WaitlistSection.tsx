export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative z-10 -mt-14 scroll-mt-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          Присъедини се към списъка с ранни потребители
        </h2>
        <p className="mt-2 text-sm text-slate-100 sm:text-base">
          Запиши се и ще получиш покана веднага щом отворим ранния достъп.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
            Без спам
          </span>
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
            Ранни новини
          </span>
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">
            Приоритетна покана
          </span>
        </div>
        <form
          action="https://formspree.io/f/xpqyqdgv"
          method="POST"
          className="mt-5 flex flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="waitlist-email" className="sr-only">
            Имейл адрес
          </label>
          <input
            id="waitlist-email"
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
        <p className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-slate-300">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300"
          />
          С едно кликване заявяваш интерес. Ще получиш първи достъп, когато
          отворим бета версията.
        </p>
      </div>
    </section>
  );
}
