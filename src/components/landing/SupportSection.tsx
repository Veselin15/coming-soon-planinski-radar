"use client";

import { ClipboardEvent } from "react";

export function SupportSection() {
  const blockCopy = (event: ClipboardEvent<HTMLElement>) => {
    // Prevent copying of the visible contact email text.
    event.preventDefault();
  };

  return (
    <section className="rounded-3xl border border-green-100 bg-gradient-to-r from-green-50 to-blue-50 p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
        Проектът е безплатен и отворен.
      </h2>
      <p className="mt-3 max-w-3xl text-slate-700">
        Планински Радар ще остане безплатен и с отворен код, без реклами и
        скрити такси. Поддръжката на специализирана инфраструктура за обработка
        на данни и актуализации в реално време обаче изисква постоянни разходи.
        Ако искаш да помогнеш за поддръжката, можеш да ме подкрепиш тук:
      </p>
      <div className="mt-6">
        <a
          href="https://revolut.me/veselin_v06"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 text-emerald-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M4 8.5h16" />
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="M7 14h6" />
          </svg>
          Подкрепи проекта чрез Revolut
        </a>
      </div>
      <p
        className="mt-4 text-sm text-slate-700"
        onCopy={blockCopy}
        onCut={blockCopy}
      >
        За въпроси, идеи или партньорство, пиши ми директно на:{" "}
        <a
          href="mailto:contact@planinskiradar.com"
          className="select-none font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-800"
          draggable={false}
        >
          contact@planinskiradar.com
        </a>
      </p>
    </section>
  );
}
