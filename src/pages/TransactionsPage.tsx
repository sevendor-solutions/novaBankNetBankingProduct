import { useMemo, useState } from 'react';
import { FiDownload, FiFilter, FiSearch } from 'react-icons/fi';
import { TRANSACTIONS } from '../data/mockTransactions';
import { exportTransactionsAsCsv } from '../utils/csv';
import { StatusBadge } from '../components/StatusBadge';
import { formatCurrency } from '../utils/currency';

const PAGE_SIZE = 8;

export function TransactionsPage() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [type, setType] = useState('All');
  const plan = 'Latest';
  const [page, setPage] = useState(1);

  const filteredTransactions = useMemo(() => {
    return TRANSACTIONS.filter((transaction) => {
      const matchesSearch = [transaction.description, transaction.category, transaction.id]
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus = status === 'All' || transaction.status === status;
      const matchesType = type === 'All' || transaction.type === type;
      return matchesSearch && matchesStatus && matchesType;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [search, status, type]);

  const pageCount = Math.ceil(filteredTransactions.length / PAGE_SIZE);
  const currentTransactions = filteredTransactions.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleExport = () => {
    exportTransactionsAsCsv(filteredTransactions);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Transaction history</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Review recent spending and payments.</h1>
          </div>
          <button onClick={handleExport} className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
            <FiDownload /> Export CSV
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_0.9fr_0.9fr_0.8fr]">
          <label className="relative block rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
            <FiSearch className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search transactions"
              className="w-full bg-transparent pl-11 text-sm text-slate-900 outline-none dark:text-white"
            />
          </label>
          <select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white">
            <option>All</option>
            <option>Success</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
          <select value={type} onChange={(event) => setType(event.target.value)} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white">
            <option>All</option>
            <option>Credit</option>
            <option>Debit</option>
            <option>UPI</option>
            <option>NEFT</option>
            <option>IMPS</option>
            <option>RTGS</option>
          </select>
          <button className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
            <FiFilter /> Sort: {plan}
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 dark:border-slate-800">
          <table className="min-w-full divide-y divide-slate-200 bg-white text-left dark:bg-slate-950 dark:divide-slate-800">
            <thead className="bg-slate-100 dark:bg-slate-900">
              <tr>
                <th className="px-6 py-4 text-xs uppercase tracking-[0.35em] text-slate-500">Transaction ID</th>
                <th className="px-6 py-4 text-xs uppercase tracking-[0.35em] text-slate-500">Date</th>
                <th className="px-6 py-4 text-xs uppercase tracking-[0.35em] text-slate-500">Description</th>
                <th className="px-6 py-4 text-xs uppercase tracking-[0.35em] text-slate-500">Amount</th>
                <th className="px-6 py-4 text-xs uppercase tracking-[0.35em] text-slate-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white dark:bg-slate-950 dark:divide-slate-800">
              {currentTransactions.map((transaction) => (
                <tr key={transaction.id} className="transition hover:bg-slate-50 dark:hover:bg-slate-900/80">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-200">{transaction.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{transaction.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">{transaction.description}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(transaction.amount)}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={transaction.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
          <p>Showing {currentTransactions.length} of {filteredTransactions.length} transactions</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page === 1}
              className="rounded-3xl border border-slate-200 bg-white px-4 py-2 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
              disabled={page === pageCount}
              className="rounded-3xl border border-slate-200 bg-white px-4 py-2 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
