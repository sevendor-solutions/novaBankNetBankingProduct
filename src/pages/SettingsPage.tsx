import { useAuth } from '../context/AuthContext';
import { FiChevronRight, FiMoon, FiShield, FiSun } from 'react-icons/fi';

export function SettingsPage() {
  const { theme, toggleTheme } = useAuth();

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Application settings</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Control your banking preferences.</h1>
          </div>
          <button onClick={toggleTheme} className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
            {theme === 'dark' ? <FiMoon className="h-4 w-4" /> : <FiSun className="h-4 w-4" />} Toggle theme
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Theme settings</p>
            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <button className="inline-flex items-center justify-between w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-left dark:border-slate-800 dark:bg-slate-950">
                <span>Dark mode</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">{theme}</span>
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Security settings</p>
            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">Session management</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">View active sessions and sign out of other devices.</p>
                  </div>
                  <FiChevronRight className="h-4 w-4 text-slate-400" />
                </div>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">Privacy settings</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Control notification, login, and data preferences.</p>
                  </div>
                  <FiShield className="h-4 w-4 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
