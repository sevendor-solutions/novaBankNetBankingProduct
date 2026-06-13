import { FiBell, FiCheckCircle, FiClock } from 'react-icons/fi';
import { NOTIFICATIONS } from '../data/mockNotifications';

export function NotificationsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Notifications</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Important alerts and banking updates.</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
            <FiBell className="h-4 w-4" /> Mark all read
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {NOTIFICATIONS.map((notification) => (
            <div key={notification.id} className={`rounded-[28px] border px-6 py-5 shadow-sm transition ${notification.unread ? 'border-sky-300/60 bg-sky-50/70 dark:border-sky-500/30 dark:bg-slate-900' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950'}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                    <FiCheckCircle className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                    {notification.title}
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{notification.message}</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  <FiClock className="h-3.5 w-3.5" /> {notification.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
