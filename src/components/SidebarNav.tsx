import type { Dispatch, SetStateAction } from 'react';
import { BarChart3, FileText, Home, LogOut, ShieldCheck } from 'lucide-react';

interface SidebarNavProps {
  active: 'dashboard' | 'ledger' | 'security' | 'analytics';
  onNavigate: Dispatch<SetStateAction<'dashboard' | 'ledger' | 'security' | 'analytics'>>;
  onLogout: () => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'ledger', label: 'Ledger', icon: FileText },
  { id: 'security', label: 'Security', icon: ShieldCheck },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
] as const;

export const SidebarNav = ({ active, onNavigate, onLogout }: SidebarNavProps) => {
  return (
    <>
      <aside className="hidden lg:flex h-full w-72 flex-col gap-8 border-r border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
        <div className="space-y-3">
          <div className="rounded-3xl border border-cyan-400/10 bg-slate-950/70 p-4 shadow-xl shadow-cyan-500/10">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">FinVault</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50">Executive Suite</h2>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex w-full items-center gap-4 rounded-3xl border px-4 py-4 text-left transition duration-300 ${
                    isActive
                      ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-100 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.85)]'
                      : 'border-white/5 bg-white/5 text-slate-300 hover:border-cyan-300/20 hover:bg-cyan-400/5'
                  }`}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900/70 text-cyan-300 shadow-lg shadow-cyan-500/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-inner shadow-slate-950/30">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400/70">Account status</p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-200">Premium Tier</p>
              <p className="text-2xl font-semibold text-cyan-100">Platinum</p>
            </div>
            <span className="rounded-2xl bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-200">Active</span>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-sm font-semibold text-slate-100 transition hover:border-rose-300/20 hover:bg-rose-500/10"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </aside>

      <nav className="lg:hidden fixed inset-x-4 bottom-4 z-50 mx-auto max-w-[calc(100vw-2rem)] rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-3 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="grid grid-cols-4 gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center gap-1 rounded-3xl px-3 py-3 transition ${
                  isActive ? 'bg-cyan-400/10 text-cyan-200' : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[11px] uppercase tracking-[0.23em]">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
