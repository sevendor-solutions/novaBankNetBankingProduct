import { FiDollarSign } from 'react-icons/fi';

const categories = [
  { id: 'bill-01', name: 'Electricity', amount: '₹1,850', status: 'Paid' },
  { id: 'bill-02', name: 'Water', amount: '₹550', status: 'Pending' },
  { id: 'bill-03', name: 'Mobile', amount: '₹299', status: 'Paid' },
  { id: 'bill-04', name: 'Broadband', amount: '₹1,099', status: 'Paid' },
  { id: 'bill-05', name: 'Gas', amount: '₹749', status: 'Pending' },
  { id: 'bill-06', name: 'DTH', amount: '₹499', status: 'Paid' },
];

const history = [
  { id: 'history-01', title: 'Electricity Bill', status: 'Paid', amount: '₹1,850', date: '2026-06-07' },
  { id: 'history-02', title: 'Mobile Recharge', status: 'Paid', amount: '₹299', date: '2026-06-01' },
  { id: 'history-03', title: 'DTH Payment', status: 'Paid', amount: '₹499', date: '2026-05-24' },
];

export function BillsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Bill payments</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Pay all your utilities with one click.</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
            <FiDollarSign className="h-4 w-4" /> Pay now
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Popular categories</p>
            <div className="mt-6 grid gap-4">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">{category.name}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{category.amount}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${category.status === 'Paid' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-200' : 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-200'}`}>
                    {category.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Payment history</p>
            <div className="mt-6 space-y-4">
              {history.map((item) => (
                <div key={item.id} className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-950 dark:text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.date}</p>
                    </div>
                    <div className="text-right text-sm text-slate-700 dark:text-slate-300">
                      <p>{item.amount}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{item.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
