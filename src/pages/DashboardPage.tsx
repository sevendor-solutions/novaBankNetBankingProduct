import { FiArrowUpRight, FiCreditCard, FiDownload, FiSend, FiShield, FiStar, FiTrendingUp, FiZap, FiUsers, FiHeart } from 'react-icons/fi';
import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ActionCard } from '../components/ActionCard';
import { StatCard } from '../components/StatCard';
import { formatCurrency } from '../utils/currency';
import type { AccountSummary } from '../types';

const summaryCards: AccountSummary[] = [
  { id: 'metric-01', title: 'Total Balance', value: '₹12,85,000', subtitle: 'All accounts consolidated', accent: 'blue' },
  { id: 'metric-02', title: 'Savings Balance', value: '₹4,50,000', subtitle: 'Savings account savings', accent: 'cyan' },
  { id: 'metric-03', title: 'Current Balance', value: '₹2,35,000', subtitle: 'Current account funds', accent: 'indigo' },
  { id: 'metric-04', title: 'Fixed Deposit', value: '₹5,00,000', subtitle: 'FD holding value', accent: 'emerald' },
  { id: 'metric-05', title: 'Credit Due', value: '₹35,000', subtitle: 'Outstanding credit bills', accent: 'rose' },
];

const quickActions = [
  { id: 'action-01', label: 'Fund Transfer', icon: FiSend },
  { id: 'action-02', label: 'Pay Bills', icon: FiDownload },
  { id: 'action-03', label: 'Open FD', icon: FiCreditCard },
  { id: 'action-04', label: 'Download Statement', icon: FiArrowUpRight },
  { id: 'action-05', label: 'Recharge Mobile', icon: FiZap },
  { id: 'action-06', label: 'Request Cheque Book', icon: FiCreditCard },
  { id: 'action-07', label: 'View Score', icon: FiTrendingUp },
  { id: 'action-08', label: 'Insurance Offers', icon: FiShield },
];

const featureCards = [
  { id: 'feature-01', title: 'Smart Savings', description: 'Set auto-save goals and save more every month.', icon: FiStar },
  { id: 'feature-02', title: 'Loan Pre-Approval', description: 'Check your instant eligibility for personal loans.', icon: FiTrendingUp },
  { id: 'feature-03', title: 'Family Wallet', description: 'Share spend limits with trusted family members.', icon: FiUsers },
  { id: 'feature-04', title: 'Bill Reminders', description: 'Get alerts for upcoming payments and due dates.', icon: FiDownload },
  { id: 'feature-05', title: 'Investment Planner', description: 'Build a personalized plan for wealth growth.', icon: FiCreditCard },
  { id: 'feature-06', title: 'Rewards Hub', description: 'Redeem cashback, vouchers and partner deals.', icon: FiHeart },
];

const spendingData = [
  { label: 'Jan', value: 185000 },
  { label: 'Feb', value: 132000 },
  { label: 'Mar', value: 148000 },
  { label: 'Apr', value: 167000 },
  { label: 'May', value: 193000 },
  { label: 'Jun', value: 175000 },
];

const incomeData = [
  { label: 'Jan', value: 165000 },
  { label: 'Feb', value: 175000 },
  { label: 'Mar', value: 201000 },
  { label: 'Apr', value: 215000 },
  { label: 'May', value: 220000 },
  { label: 'Jun', value: 240000 },
];

const categoryData = [
  { label: 'EMI', value: 23 },
  { label: 'Shopping', value: 17 },
  { label: 'Bills', value: 19 },
  { label: 'Groceries', value: 15 },
  { label: 'Travel', value: 13 },
  { label: 'Others', value: 13 },
];

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Dashboard overview</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Hello Rahul, your banking insights are ready.</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-5 py-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Today</p>
            <p className="mt-1 text-xl font-semibold">₹12,85,000</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          {summaryCards.map((metric) => (
            <StatCard key={metric.id} {...metric} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Quick actions</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">Instant banking workflows</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {quickActions.map((action) => (
              <ActionCard key={action.id} label={action.label} icon={action.icon} onClick={() => {}} />
            ))}
          </div>
        </div>

      </section>

      <section className="grid gap-6">
        <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">More features</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">Explore our expanded banking tools</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 dark:bg-slate-900 dark:text-slate-200">New</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/80">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-lg shadow-slate-950/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Rewards</p>
          <div className="mt-4 rounded-[28px] bg-gradient-to-br from-sky-500 to-cyan-400 p-6 text-white shadow-xl shadow-cyan-500/20">
            <p className="text-sm uppercase tracking-[0.35em] opacity-80">Total cashback</p>
            <p className="mt-4 text-4xl font-semibold">₹4,200</p>
            <p className="mt-3 max-w-xs text-sm text-slate-100/90">Use reward points on bill payments, recharge offers and premium banking benefits.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80 xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Monthly spending</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">Spending trend</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:bg-slate-900 dark:text-slate-300">June 2026</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={spendingData} margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
                <defs>
                  <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1E4DB7" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#1E4DB7" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <Tooltip formatter={(value: any) => formatCurrency(value as number)} />
                <Area type="monotone" dataKey="value" stroke="#1E4DB7" fill="url(#spendGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Monthly income</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">₹2,40,000</h3>
            <div className="mt-4 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={incomeData} margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                  <Tooltip formatter={(value: any) => formatCurrency(value as number)} />
                  <Line type="monotone" dataKey="value" stroke="#0A2A66" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Expense categories</p>
            <div className="mt-4 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} dataKey="value" nameKey="label" innerRadius={44} outerRadius={80} paddingAngle={4} stroke="none">
                    {categoryData.map((entry, index) => (
                      <Cell key={entry.label} fill={['#1E4DB7', '#00C2FF', '#0A2A66', '#60A5FA', '#22C55E', '#F472B6'][index]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
