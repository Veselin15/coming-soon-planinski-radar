type FeatureCardProps = {
  title: string;
  description: string;
  tag: string;
};

export function FeatureCard({ title, description, tag }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl">
      <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
        {tag}
      </span>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-800">
        Научи повече
        <span aria-hidden="true">→</span>
      </div>
    </article>
  );
}
