const heroBackgroundImage =
  "https://pavelpronin.com/wp-content/uploads/2023/01/PolezhanZimaZalz.jpg";

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundImage: `url('${heroBackgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/40" />
      <div className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <nav className="absolute top-6 hidden rounded-full border border-white/30 bg-white/10 p-1 backdrop-blur-md md:flex md:items-center md:gap-1">
          <a
            href="#waitlist"
            className="rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
          >
            Ранен достъп
          </a>
          <a
            href="#features"
            className="rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
          >
            Възможности
          </a>
          <a
            href="#moments"
            className="rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
          >
            Идеи
          </a>
          <a
            href="#support"
            className="rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
          >
            Подкрепа
          </a>
        </nav>
        <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
          Планински Радар
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-100 sm:text-lg">
          Умно планиране за сигурни изкачвания. Следи условията в планината с
          по-ясна картина, навременни предупреждения и увереност преди всяко
          приключение.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#waitlist"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-sky-500 px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            Ранен достъп
          </a>
          <a
            href="#features"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Виж възможностите
          </a>
          <a
            href="#moments"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Идеи за деня
          </a>
        </div>
        <a
          href="#waitlist"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-100/90 transition-all duration-300 hover:-translate-y-1 hover:text-white"
        >
          Скролни надолу
          <span aria-hidden="true" className="text-base">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
