"use client";

import Image from "next/image";
import { ClipboardEvent } from "react";

const supportBackgroundImage =
  "https://gratsielablog.me/wp-content/uploads/2025/01/IMG_E9487_%D0%9F%D0%BE%D0%BB%D0%B5%D0%B6%D0%B0%D0%BD-1024x576.jpg";

export function SupportSection() {
  const blockCopy = (event: ClipboardEvent<HTMLElement>) => {
    // Prevent copying of the visible contact email text.
    event.preventDefault();
  };

  return (
    <section
      id="support"
      className="relative overflow-hidden rounded-3xl border border-green-100 p-6 sm:p-8"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={supportBackgroundImage}
          alt="Зимен изглед от Пирин"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/45 to-slate-900/65" />
      </div>

      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        Проектът е безплатен и отворен.
      </h2>
      <p className="mt-3 max-w-3xl text-slate-100">
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
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/90 px-5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900/20"
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
        className="mt-4 text-sm text-slate-100"
        onCopy={blockCopy}
        onCut={blockCopy}
      >
        За въпроси, идеи или партньорство, пиши ми директно на:{" "}
        <a
          href="mailto:contact@planinskiradar.com"
          className="select-none font-semibold text-sky-200 underline decoration-sky-200/70 underline-offset-4 hover:text-white"
          draggable={false}
        >
          contact@planinskiradar.com
        </a>
      </p>
    </section>
  );
}
