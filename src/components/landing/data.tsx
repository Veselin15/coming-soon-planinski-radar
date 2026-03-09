export const featureCards = [
  {
    title: "Карта на опасностите",
    description:
      "Подавай и преглеждай сигнали за лавини, лед, паднали дървета и други рискове, за да планираш по-безопасен маршрут.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 7.5 12 3l9 4.5-9 4.5L3 7.5Z" />
        <path d="M3 12l9 4.5 9-4.5" />
        <path d="M3 16.5 12 21l9-4.5" />
      </svg>
    ),
  },
  {
    title: "Официални бюлетини",
    description:
      "Автоматично събиране на предупреждения от ПСС и паркови институции за актуална и надеждна картина на ситуацията.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3v18" />
        <path d="M5.5 8.5h13l-2 4h-9l-2-4Z" />
        <path d="M7 21h10" />
      </svg>
    ),
  },
  {
    title: "Хижи и уебкамери",
    description:
      "Провери условията около хижите с последни кадри от уебкамери и допълнителни метео индикатори преди тръгване.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="6" width="17" height="12" rx="2" />
        <path d="m9 12 2 2 4-4" />
        <path d="M8 3h8" />
      </svg>
    ),
  },
];

export const roadmapItems = [
  "1) Интерактивна карта с рискови сигнали от общността.",
  "2) Автоматично обновяване на официални предупреждения от ПСС.",
  "3) Маркери за хижи с последен кадър от уебкамера и метео контекст.",
  "4) PWA версия с приоритет за мобилна употреба и офлайн достъп.",
];
