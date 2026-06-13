export function ActionCard({ label, icon: Icon, onClick }: { label: string; icon: React.ComponentType<{ className?: string }>; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-3xl border border-slate-200/80 bg-white/90 px-4 py-4 text-left text-sm font-medium text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/30 hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-100 text-sky-500 shadow-sm transition group-hover:bg-sky-500 group-hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-cyan-500">
        <Icon className="h-5 w-5" />
      </span>
      <span>{label}</span>
    </button>
  );
}
