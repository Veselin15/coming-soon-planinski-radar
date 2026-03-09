export function FooterSection() {
  return (
    <footer className="relative border-t border-white/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-slate-200 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Планински Радар</p>
        <p>Създадено за по-сигурни преходи в българските планини.</p>
      </div>
    </footer>
  );
}
