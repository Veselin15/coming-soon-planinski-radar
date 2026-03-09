import { mountainMoments } from "./data";

export function MountainMomentsSection() {
  return (
    <section id="moments" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Идеи за планинския ден
        </h2>
        <p className="mt-2 text-slate-600">
          Малко вдъхновение как Планински Радар може да ти помогне в различни
          сценарии още преди старта.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {mountainMoments.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
          >
            <div
              className={`mb-4 h-2 w-24 rounded-full bg-gradient-to-r ${item.accent}`}
            />
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
