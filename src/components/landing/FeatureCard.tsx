type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
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
