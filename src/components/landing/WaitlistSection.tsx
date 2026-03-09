export function WaitlistSection() {
  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/60 sm:p-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Запиши се за ранна бета
        </h2>
        <p className="mt-2 text-slate-600">
          Остави своя имейл и ще те уведомим първи, когато пуснем приложението.
        </p>
      </div>

      {/* This form submits directly to Formspree and does not require a backend. */}
      <form
        action="https://formspree.io/f/xpqyqdgv"
        method="POST"
        className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Твоят имейл адрес
        </label>
        <input
          id="waitlist-email"
          type="email"
          name="email"
          required
          placeholder="Твоят имейл адрес"
          className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:flex-1"
        />
        <button
          type="submit"
          className="inline-flex h-12 min-w-40 items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-blue-600 px-6 text-base font-semibold text-white transition hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
        >
          Абонирай ме
        </button>
      </form>
    </section>
  );
}
