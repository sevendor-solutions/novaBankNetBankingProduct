import { Search, Sparkle } from 'lucide-react';
import type { UserSession } from '../types/index';

interface TopHeaderProps {
  currentTime: string;
  currentDate: string;
  session: UserSession;
}

export const TopHeader = ({ currentTime, currentDate, session }: TopHeaderProps) => {
  return (
    <header className="mb-8 space-y-5">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-200/80">
            <Sparkle className="h-4 w-4 text-cyan-300" />
            <span>Luxury banking designed for digital executives.</span>
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Your financial command center</h1>
            <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
              Monitor cash flow, protect your portfolio, and move funds with polished glassmorphism experiences.
            </p>
          </div>
        </div>

        <div className="hidden rounded-[32px] border border-white/10 bg-slate-950/60 p-4 shadow-lg shadow-slate-950/20 lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="glass-panel flex items-center justify-between gap-4 p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400/80">Today</p>
              <p className="mt-2 text-lg font-semibold text-slate-50">{currentDate}</p>
            </div>
            <span className="rounded-3xl bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100">{currentTime}</span>
          </div>
          <div className="glass-panel flex items-center justify-between gap-4 p-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400/80">Premium User</p>
              <p className="text-lg font-semibold text-slate-50">{session.fullName}</p>
            </div>
            <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 p-0.5 shadow-xl shadow-cyan-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-slate-950 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950/5">
                {session.fullName.split(' ').map((part: string) => part[0]).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:hidden">
        <div className="glass-panel flex items-center justify-between gap-4 p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400/80">Today</p>
            <p className="mt-2 text-base font-semibold text-slate-50">{currentDate}</p>
          </div>
          <span className="rounded-3xl bg-cyan-500/10 px-3 py-2 text-sm font-semibold text-cyan-100">{currentTime}</span>
        </div>
        <div className="glass-panel flex items-center justify-between gap-4 p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400/80">Premium User</p>
            <p className="mt-2 text-base font-semibold text-slate-50">{session.fullName}</p>
          </div>
          <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 p-0.5 shadow-xl shadow-cyan-500/20">
            <div className="flex h-full w-full items-center justify-center rounded-3xl bg-slate-950 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950/5">
              {session.fullName.split(' ').map((part: string) => part[0]).join('')}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel flex flex-col gap-3 border border-white/10 p-4 shadow-lg shadow-slate-950/20 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-300/80" />
          <input
            type="search"
            placeholder="Search payments, transfers, or statements"
            className="glass-input pl-12"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="glass-input flex items-center justify-between gap-3 p-3">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400/80">Alerts</span>
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-100">4 new</span>
          </div>
          <div className="glass-input flex items-center justify-between gap-3 p-3">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400/80">Balance</span>
            <span className="text-sm font-semibold text-slate-50">$24,480</span>
          </div>
        </div>
      </div>
    </header>
  );
};
