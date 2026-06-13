import { FiGift, FiTag } from 'react-icons/fi';
import { REWARDS } from '../data/mockRewards';

export function RewardsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Rewards center</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Redeem points and offers.</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
            <FiGift className="h-4 w-4" /> Redeem now
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {REWARDS.map((reward) => (
            <div key={reward.id} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{reward.title}</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{reward.available}</p>
                </div>
                <FiTag className="h-7 w-7 text-cyan-600 dark:text-cyan-300" />
              </div>
              <div className="mt-6 grid gap-3 text-sm text-slate-700 dark:text-slate-300">
                <p><strong>Earned:</strong> {reward.earned}</p>
                <p><strong>Redeemed:</strong> {reward.redeemed}</p>
              </div>
              <button className="mt-6 w-full rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:opacity-95">
                Redeem points
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Available offers</p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Fuel cashback</p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Earn 5% back on fuel purchases using your NovaBank credit card.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Bill savings</p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Get 3% cashback on electricity and broadband payments.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Travel offer</p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Redeem reward points for flight or hotel discounts.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
