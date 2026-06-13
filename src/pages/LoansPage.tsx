import { FiChevronRight } from 'react-icons/fi';
import { LOANS } from '../data/mockLoans';
import { formatCurrency } from '../utils/currency';

export function LoansPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Loan summary</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Your current loan portfolio.</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            Active loans: {LOANS.length}
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {LOANS.map((loan) => (
            <div key={loan.id} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{loan.title}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{loan.loanNumber}</p>
                </div>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-200">{loan.status}</span>
              </div>
              <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <p><span className="font-semibold text-slate-900 dark:text-white">Loan amount:</span> {formatCurrency(loan.amount)}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">Outstanding:</span> {formatCurrency(loan.outstanding)}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">EMI:</span> {formatCurrency(loan.emi)}</p>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-3xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800">
                <FiChevronRight className="h-4 w-4" /> View payment history
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
