import { FiChevronRight } from 'react-icons/fi';
import { ACCOUNTS } from '../data/mockAccounts';
import { formatCurrency } from '../utils/currency';

export function AccountsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Account overview</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Manage your linked NovaBank accounts.</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            Total Accounts: {ACCOUNTS.length}
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          {ACCOUNTS.map((account) => (
            <div key={account.id} className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{account.title}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{account.number}</p>
                </div>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-200">{account.type}</span>
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p><span className="font-semibold text-slate-900 dark:text-white">Balance:</span> {formatCurrency(account.balance)}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">IFSC:</span> {account.ifsc}</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">Branch:</span> {account.branch}</p>
                {account.interestRate ? <p><span className="font-semibold text-slate-900 dark:text-white">Interest:</span> {account.interestRate}</p> : null}
                {account.maturityDate ? <p><span className="font-semibold text-slate-900 dark:text-white">Maturity:</span> {account.maturityDate}</p> : null}
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-200">
                View details <FiChevronRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
