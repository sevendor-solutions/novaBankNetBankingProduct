import { useState } from 'react';
import { FiChevronRight, FiLock } from 'react-icons/fi';
import { BANK_CARDS } from '../data/mockCards';

export function CardsPage() {
  const [cards, setCards] = useState(BANK_CARDS);

  const toggleCard = (id: string) => {
    setCards((current) => current.map((card) => (card.id === id ? { ...card, status: card.status === 'Active' ? 'Frozen' : 'Active' } : card)));
  };

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Card management</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Manage debit and credit cards securely.</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            Total cards: {cards.length}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <div key={card.id} className="rounded-[28px] border border-slate-200 px-6 py-7 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{card.type} Card</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{card.brand}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${card.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-200' : 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-200'}`}>
                  {card.status}
                </span>
              </div>

              <div className="mt-8 rounded-[24px] bg-gradient-to-r from-slate-950 to-slate-900 px-6 py-8 text-white shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Card number</p>
                <p className="mt-5 text-2xl font-semibold tracking-[0.22em]">{card.maskedNumber}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Card holder</p>
                    <p className="mt-2 text-sm font-medium">{card.holder}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Expiry</p>
                    <p className="mt-2 text-sm font-medium">{card.expiry}</p>
                  </div>
                </div>
              </div>

              {card.type === 'Credit' ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-slate-700 dark:text-slate-300">
                  <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Limit</p>
                    <p className="mt-2 text-lg font-semibold">₹{card.limit?.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Available</p>
                    <p className="mt-2 text-lg font-semibold">₹{card.available?.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => toggleCard(card.id)}
                  className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                >
                  <FiLock className="h-4 w-4" /> {card.status === 'Active' ? 'Freeze card' : 'Unfreeze card'}
                </button>
                <button className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800">
                  <FiChevronRight className="h-4 w-4" /> View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
