import type { AccountSummary } from '../types';

export function StatCard({ title, value, subtitle, accent }: AccountSummary) {
  const accentClasses = {
    blue: 'from-sky-500 to-[#1E4DB7]',
    cyan: 'from-cyan-400 to-sky-500',
    indigo: 'from-indigo-500 to-violet-500',
    emerald: 'from-emerald-400 to-sky-500',
    rose: 'from-rose-400 to-pink-500',
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/90 p-6 shadow-[0_30px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className={`inline-flex rounded-full bg-gradient-to-r ${accentClasses[accent]} px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-lg shadow-slate-950/10`}>{title}</div>
      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-3xl font-semibold text-slate-950 dark:text-white">{value}</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>
        <div className="h-12 w-12 rounded-3xl bg-slate-100/90 text-slate-700 shadow-inner dark:bg-slate-900/80 dark:text-slate-300">
          <span className="flex h-full items-center justify-center text-lg font-bold">✓</span>
        </div>
      </div>
    </div>
  );
}
