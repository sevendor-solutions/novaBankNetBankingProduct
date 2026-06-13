import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { INVESTMENTS } from '../data/mockInvestments';
import { formatCurrency } from '../utils/currency';

const growthData = INVESTMENTS.map((investment) => ({ label: investment.category, value: investment.currentValue }));

export function InvestmentsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Investments</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Track your portfolio performance.</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            Portfolio value: {formatCurrency(INVESTMENTS.reduce((sum, item) => sum + item.currentValue, 0))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.95fr_0.65fr]">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Current allocations</h2>
            <div className="mt-6 space-y-4">
              {INVESTMENTS.map((investment) => (
                <div key={investment.id} className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{investment.category}</p>
                      <p className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{formatCurrency(investment.currentValue)}</p>
                    </div>
                    <div className="text-right text-sm text-slate-600 dark:text-slate-300">
                      <p>{investment.returns}% returns</p>
                      <p className="mt-2">Invested {formatCurrency(investment.invested)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Portfolio trend</p>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00C2FF" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#00C2FF" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                  <Tooltip formatter={(value: any) => formatCurrency(value as number)} />
                  <Area type="monotone" dataKey="value" stroke="#0A2A66" fill="url(#portfolioGradient)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
