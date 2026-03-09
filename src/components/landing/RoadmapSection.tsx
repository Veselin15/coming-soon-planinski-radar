import { roadmapItems } from "./data";

export function RoadmapSection() {
  return (
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
        {roadmapItems.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
