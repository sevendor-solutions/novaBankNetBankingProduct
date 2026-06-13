export function StatusBadge({ status }: { status: 'Success' | 'Pending' | 'Failed' }) {
  const color =
    status === 'Success' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300' :
    status === 'Pending' ? 'bg-sky-100 text-sky-700 dark:bg-sky-950/70 dark:text-sky-300' :
    'bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300';

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] ${color}`}>{status}</span>;
}
