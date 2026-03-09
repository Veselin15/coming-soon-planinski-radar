const faqItems = [
  {
    question: "Как ще получавам известия?",
    answer:
      "При стартиране на бета версията ще можеш да получаваш известия по имейл за важни промени в условията и ключови предупреждения.",
  },
  {
    question: "Ще има ли мобилна версия?",
    answer:
      "Да, интерфейсът е проектиран mobile-first и ще работи гладко на телефон още в първите публични версии.",
  },
  {
    question: "Мога ли да помогна с обратна връзка?",
    answer:
      "Разбира се. Ранните потребители ще имат директен канал за идеи и предложения, за да изградим продукта по реални нужди.",
  },
];

export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Често задавани въпроси
        </h2>
        <p className="mt-2 text-slate-600">
          Бързи отговори за това какво предстои и как можеш да участваш.
        </p>
      </div>

      <div className="space-y-3">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl open:border-sky-400"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900">
              {item.question}
              <span
                aria-hidden="true"
                className="text-slate-500 transition-all duration-300 group-open:rotate-45 group-open:text-sky-600"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
