import { FiChevronRight, FiClock } from 'react-icons/fi';
import { DEPOSITS } from '../data/mockDeposits';
import { formatCurrency } from '../utils/currency';

export function DepositsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Deposit portfolio</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Fixed and recurring deposits.</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            Active deposits: {DEPOSITS.length}
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {DEPOSITS.map((deposit) => (
            <div key={deposit.id} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{deposit.title}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{deposit.accountNumber}</p>
                </div>
                <FiClock className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <p><span className="font-semibold text-slate-900 dark:text-white">Amount:</span> {formatCurrency(deposit.amount)}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">Maturity:</span> {deposit.maturityDate}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">Interest:</span> {deposit.interestRate}</p>
                {deposit.valueAtMaturity ? <p><span className="font-semibold text-slate-900 dark:text-white">Maturity value:</span> {deposit.valueAtMaturity}</p> : null}
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-3xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800">
                <FiChevronRight className="h-4 w-4" /> Manage deposit
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
