import { FeatureCard } from "./FeatureCard";
import { featureCards } from "./data";

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mb-8 text-center sm:mb-10">
        <h2
          id="features-heading"
          className="text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Основни възможности
        </h2>
        <p className="mt-2 text-slate-600">
          Всичко необходимо, за да планираш по-умно и да се движиш по-сигурно в
          планината.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {featureCards.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            tag={feature.tag}
          />
        ))}
      </div>
    </section>
  );
}
