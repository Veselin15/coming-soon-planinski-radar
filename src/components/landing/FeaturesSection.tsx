import { FeatureCard } from "./FeatureCard";
import { featureCards } from "./data";

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-24 space-y-6"
    >
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
  );
}
