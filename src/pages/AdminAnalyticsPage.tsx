import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FiTrendingUp } from 'react-icons/fi';

const kpis = [
  { id: 'kpi-01', label: 'Total Customers', value: '25,432', accent: 'bg-sky-500' },
  { id: 'kpi-02', label: 'Total Deposits', value: '₹1,250 Cr', accent: 'bg-cyan-500' },
  { id: 'kpi-03', label: 'Total Loans', value: '₹650 Cr', accent: 'bg-indigo-500' },
  { id: 'kpi-04', label: 'Revenue', value: '₹45 Cr', accent: 'bg-violet-500' },
];

const analyticsTrend = [
  { month: 'Jan', value: 810 },
  { month: 'Feb', value: 890 },
  { month: 'Mar', value: 960 },
  { month: 'Apr', value: 1030 },
  { month: 'May', value: 1120 },
  { month: 'Jun', value: 1200 },
];

export function AdminAnalyticsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Admin analytics</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Bank performance and customer metrics.</h1>
          </div>
          <div className="inline-flex items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <FiTrendingUp className="h-4 w-4" /> Market growth
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {kpis.map((item) => (
            <div key={item.id} className="rounded-[28px] bg-slate-50 p-6 shadow-sm dark:bg-slate-900">
              <div className={`inline-flex rounded-3xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white ${item.accent}`}>
                KPI
              </div>
              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Revenue trend</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">Monthly growth performance</h2>
            </div>
            <span className="rounded-3xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 dark:bg-slate-950 dark:text-slate-200">Jan - Jun 2026</span>
          </div>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsTrend} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <Tooltip formatter={(value: any) => `${value} Cr`} />
                <Line type="monotone" dataKey="value" stroke="#0A2A66" strokeWidth={4} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
