import { ArrowUpRight, DollarSign, Gift, Shield, Sparkles } from 'lucide-react';
import type { ActionItem, CreditCard, SummaryMetric } from '../types/index';
import { useState } from 'react';

interface DashboardScreenProps {
  summary: SummaryMetric[];
  card: CreditCard;
  quickActions: ActionItem[];
}

const iconMap = {
  Transfer: ArrowUpRight,
  Pay: DollarSign,
  Deposit: Shield,
  Exchange: Gift,
};

const DashboardScreen = ({ summary, card, quickActions }: DashboardScreenProps) => {
  const [revealCvv, setRevealCvv] = useState(false);
  const visibleCvv = revealCvv ? card.cvv : '•••';

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summary.map((metric) => (
          <div key={metric.title} className="glass-card p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400/80">{metric.title}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-50">{metric.value}</p>
              </div>
              <span className={`rounded-2xl px-3 py-1 text-xs font-semibold ${metric.accent}`}>{metric.trendLabel}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">{metric.trend} since last month</p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="glass-card p-6 shadow-2xl shadow-cyan-500/10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Digital vault</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-50">Elite card access</h2>
            </div>
            <span className="rounded-3xl bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-100">Verified</span>
          </div>

          <div className="mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-950/90 via-cyan-500/10 to-slate-950/90 p-5 shadow-xl shadow-cyan-500/10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400/70">{card.provider}</p>
                <p className="mt-2 text-xl font-semibold text-slate-50">{card.cardHolder}</p>
              </div>
              <div className="rounded-3xl bg-white/10 px-4 py-3 text-sm text-slate-50">Platinum</div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-3 text-slate-300">
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400/80">Card number</p>
                  <p className="mt-2 text-base font-semibold text-slate-50">{card.cardNumber}</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400/80">Expiry</p>
                  <p className="mt-2 text-base font-semibold text-slate-50">{card.expiryDate}</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400/80">CVV</p>
                  <p className="mt-2 text-base font-semibold text-slate-50">{visibleCvv}</p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setRevealCvv((current) => !current)}
              className="mt-6 inline-flex items-center justify-center rounded-3xl bg-white/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-white/15"
            >
              {revealCvv ? 'Hide CVV' : 'Reveal CVV'}
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Quick actions</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {quickActions.map((action) => {
                const Icon = iconMap[action.icon as keyof typeof iconMap] ?? Sparkles;
                return (
                  <button
                    key={action.id}
                    className="glass-panel flex items-center gap-4 rounded-3xl border border-white/10 p-4 text-left transition hover:-translate-y-0.5 hover:bg-cyan-500/10"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-3xl bg-cyan-500/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-50">{action.label}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Spending snapshot</p>
                <p className="mt-2 text-2xl font-semibold text-slate-50">$2,180 saved</p>
              </div>
              <span className="rounded-3xl bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-200">+8.4%</span>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">Your liquidity remains stable after last week’s deposit schedule and high-value transfer executions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
