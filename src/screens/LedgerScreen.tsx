import { ArrowDownRight, ArrowUpRight, Banknote, Clock3, ShoppingBag } from 'lucide-react';
import type { Transaction } from '../types/index';
import { useMemo, useState } from 'react';

interface LedgerScreenProps {
  transactions: Transaction[];
}

const iconMap = {
  Salary: Banknote,
  Travel: Clock3,
  Shopping: ShoppingBag,
  Transfer: ArrowUpRight,
  Payment: ArrowDownRight,
};

const LedgerScreen = ({ transactions }: LedgerScreenProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Income' | 'Expense'>('All');
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const filteredTransactions = useMemo(() => {
    return transactions
      .filter((item) => filterType === 'All' || item.type === filterType)
      .filter((item) => item.merchantName.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [filterType, searchTerm, transactions]);

  const pageCount = Math.max(1, Math.ceil(filteredTransactions.length / pageSize));
  const pageItems = filteredTransactions.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-8">
      <div className="glass-card p-6">
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400/80">Transaction ledger</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50">Income and expense history</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[1.2fr_1fr]">
            <input
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setPage(1);
              }}
              placeholder="Search merchants"
              className="glass-input"
            />
            <select
              value={filterType}
              onChange={(event) => {
                setFilterType(event.target.value as 'All' | 'Income' | 'Expense');
                setPage(1);
              }}
              className="glass-input"
            >
              <option value="All">All transactions</option>
              <option value="Income">Income only</option>
              <option value="Expense">Expense only</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-[32px] border border-white/10 bg-slate-950/70 shadow-2xl shadow-slate-950/40">
        <table className="min-w-[760px] w-full border-separate border-spacing-0 text-sm text-slate-300">
          <thead className="bg-slate-950/80 text-slate-400">
            <tr>
              <th className="px-6 py-4 text-left uppercase tracking-[0.3em]">Status</th>
              <th className="px-6 py-4 text-left uppercase tracking-[0.3em]">Date</th>
              <th className="px-6 py-4 text-left uppercase tracking-[0.3em]">Merchant</th>
              <th className="px-6 py-4 text-left uppercase tracking-[0.3em]">Category</th>
              <th className="px-6 py-4 text-right uppercase tracking-[0.3em]">Amount</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((transaction) => {
              const Icon = iconMap[transaction.category as keyof typeof iconMap] ?? Banknote;
              return (
                <tr key={transaction.id} className="border-t border-white/5 bg-slate-950/70">
                  <td className="px-6 py-5 align-top">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        transaction.status === 'Success'
                          ? 'bg-emerald-500/15 text-emerald-200'
                          : transaction.status === 'Pending'
                          ? 'bg-amber-500/15 text-amber-200'
                          : 'bg-rose-500/15 text-rose-200'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 align-top text-slate-300">{transaction.date}</td>
                  <td className="px-6 py-5 align-top">
                    <p className="font-semibold text-slate-50">{transaction.merchantName}</p>
                    <p className="mt-1 text-xs text-slate-400">{transaction.title}</p>
                  </td>
                  <td className="px-6 py-5 align-top">
                    <div className="flex items-center gap-3 text-slate-300">
                      <span className="grid h-10 w-10 place-items-center rounded-3xl bg-slate-900/80 text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{transaction.category}</span>
                    </div>
                  </td>
                  <td
                    className={`px-6 py-5 align-top text-right font-semibold ${
                      transaction.type === 'Income' ? 'text-emerald-300' : 'text-slate-100'
                    }`}
                  >
                    {transaction.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 rounded-[28px] border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Showing <span className="text-slate-100">{pageItems.length}</span> of <span className="text-slate-100">{filteredTransactions.length}</span> transactions.
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            className="rounded-3xl border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-slate-200">Page {page} / {pageCount}</span>
          <button
            type="button"
            disabled={page === pageCount}
            onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
            className="rounded-3xl border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LedgerScreen;
