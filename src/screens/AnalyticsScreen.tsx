import { CreditCard, Percent, ShoppingBag } from 'lucide-react';
import type { BudgetCategory, SavingsVault } from '../types/index';

interface AnalyticsScreenProps {
  budgets: BudgetCategory[];
  savings: SavingsVault[];
}

const AnalyticsScreen = ({ budgets, savings }: AnalyticsScreenProps) => {
  const getProgressClass = (percent: number) => {
    if (percent < 65) return 'bg-emerald-400';
    if (percent < 90) return 'bg-amber-400';
    return 'bg-rose-400';
  };

  return (
    <div className="space-y-8">
      <div className="glass-card p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Financial analytics</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50">Budget health and savings goals</h2>
          </div>
          <div className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
            <Percent className="h-4 w-4 text-cyan-300" />
            Spending performance monitor
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Category progress</p>
          <div className="mt-6 space-y-6">
            {budgets.map((budget) => {
              const percent = Math.min(100, Math.round((budget.spent / budget.limit) * 100));
              return (
                <div key={budget.id} className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-50">{budget.title}</p>
                      <p className="text-sm text-slate-400">${budget.spent.toLocaleString()} / ${budget.limit.toLocaleString()}</p>
                    </div>
                    <span className="text-sm font-semibold text-slate-100">{percent}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/5">
                    <div className={`h-full rounded-full ${getProgressClass(percent)} transition-all duration-500`} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Savings vaults</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-50">Future goals planning</h3>
            </div>
            <ShoppingBag className="h-5 w-5 text-cyan-300" />
          </div>
          <div className="mt-6 space-y-4">
            {savings.map((vault) => {
              const percent = Math.round((vault.current / vault.goal) * 100);
              return (
                <div key={vault.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-50">{vault.title}</p>
                      <p className="text-sm text-slate-400">${vault.current.toLocaleString()} of ${vault.goal.toLocaleString()}</p>
                    </div>
                    <span className="rounded-2xl bg-cyan-500/10 px-3 py-2 text-sm font-semibold text-cyan-100">{percent}%</span>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/5">
                    <div className={`h-full rounded-full ${getProgressClass(percent)} transition-all duration-500`} style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-3xl border border-white/10 bg-cyan-500/10 p-4 text-slate-200">
            <CreditCard className="h-5 w-5 text-cyan-300" />
            <p className="text-sm">Track targeted savings for strategic liquidity across premium buckets.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsScreen;
