import { FiBell, FiMoon, FiSearch, FiSun } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function BankTopbar() {
  const { session, theme, toggleTheme, logout } = useAuth();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  return (
    <header className="bg-slate-950 text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
      <div className="mx-auto max-w-[1560px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.8fr_1fr] lg:items-center">
          <div className="rounded-[32px] bg-slate-900/95 p-6 shadow-xl shadow-slate-950/20">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Welcome back</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-white">{session?.fullName || 'Rahul Sharma'}</h1>
              <span className="rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                {session?.customerId ?? 'NOVA10001'}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">Your premium banking dashboard is ready for payments, transfers and investment planning.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="flex items-center gap-3 rounded-[28px] bg-slate-950/80 px-4 py-3 text-slate-300 shadow-xl shadow-slate-950/20">
              <FiSearch className="h-5 w-5 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search transactions"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button onClick={toggleTheme} className="rounded-[28px] bg-slate-900/90 p-3 text-white shadow-xl shadow-slate-950/20 transition hover:bg-slate-800">
                {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
              </button>
              <button onClick={() => navigate('/notifications')} className="rounded-[28px] bg-slate-900/90 p-3 text-white shadow-xl shadow-slate-950/20 transition hover:bg-slate-800">
                <FiBell className="h-5 w-5" />
              </button>
              <button onClick={logout} className="rounded-[28px] bg-gradient-to-r from-sky-500 to-cyan-400 p-3 text-white shadow-xl shadow-cyan-500/20 transition hover:opacity-95">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
