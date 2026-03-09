import { roadmapItems } from "./data";

export function RoadmapSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-md sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Какво предстои
        </h2>
        <p className="mt-2 text-slate-600">
          Развиваме платформата на етапи, за да осигурим стабилност, точност и
          максимална стойност.
        </p>

      <div className="relative mt-8 space-y-4">
        <div
          aria-hidden="true"
          className="absolute left-10 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-slate-200 sm:block"
        />
        {roadmapItems.map((item) => (
          <article
            key={item.step}
            className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
          >
            <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
              {item.step}
            </span>
            <div className="ml-14">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
