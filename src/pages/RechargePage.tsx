import { FiSmartphone } from 'react-icons/fi';

const operators = ['Jio', 'Airtel', 'Vi', 'BSNL'];
const plans = [
  { id: 'plan-199', value: '₹199', label: 'Local + Unlimited' },
  { id: 'plan-299', value: '₹299', label: 'Unlimited + 3GB/day' },
  { id: 'plan-499', value: '₹499', label: 'Unlimited + 5GB/day' },
  { id: 'plan-999', value: '₹999', label: 'Unlimited + 10GB/day' },
];

export function RechargePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Recharge portal</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Recharge mobile with NovaBank digital ease.</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            Operator selection
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Choose operator</p>
            <div className="mt-6 grid gap-3">
              {operators.map((operator) => (
                <button key={operator} className="rounded-3xl border border-slate-200 bg-white px-4 py-4 text-left text-sm font-semibold text-slate-900 transition hover:border-cyan-400 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
                  {operator}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="rounded-3xl bg-cyan-100 p-3 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200"><FiSmartphone className="h-5 w-5" /></span>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Mobile recharge</p>
                <h2 className="mt-2 text-2xl font-semibold">Pay with one tap.</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {plans.map((plan) => (
                <div key={plan.id} className="rounded-3xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-950">
                  <p className="text-xl font-semibold text-slate-950 dark:text-white">{plan.value}</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400">{plan.label}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:opacity-95">
              Proceed to recharge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
