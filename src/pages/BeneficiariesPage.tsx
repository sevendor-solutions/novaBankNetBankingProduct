import { useMemo, useState } from 'react';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';
import { BENEFICIARIES } from '../data/mockBeneficiaries';
import type { Beneficiary } from '../types';

export function BeneficiariesPage() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>(BENEFICIARIES);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState({ name: '', bank: '', accountNumber: '', ifsc: '', nickname: '' });

  const handleAdd = () => {
    setIsAdding((value) => !value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBeneficiaries((current) => [
      ...current,
      {
        id: `ben-${current.length + 1}`,
        name: form.name || 'New Beneficiary',
        bank: form.bank || 'NovaBank',
        accountNumber: form.accountNumber || 'XXXXXXXX0000',
        ifsc: form.ifsc || 'NOVA0000000',
        nickname: form.nickname || 'New',
      },
    ]);
    setForm({ name: '', bank: '', accountNumber: '', ifsc: '', nickname: '' });
    setIsAdding(false);
  };

  const handleDelete = (id: string) => setBeneficiaries((current) => current.filter((item) => item.id !== id));

  const beneficiaryCount = useMemo(() => beneficiaries.length, [beneficiaries]);

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Beneficiary management</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Add, edit or remove beneficiaries.</h1>
          </div>
          <button onClick={handleAdd} className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
            <FiPlus className="h-4 w-4" /> {isAdding ? 'Close form' : 'Add beneficiary'}
          </button>
        </div>

        {isAdding ? (
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="grid gap-4 sm:grid-cols-2">
              <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} placeholder="Beneficiary name" className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
              <input value={form.bank} onChange={(event) => setForm((current) => ({ ...current, bank: event.target.value }))} placeholder="Bank name" className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input value={form.accountNumber} onChange={(event) => setForm((current) => ({ ...current, accountNumber: event.target.value }))} placeholder="Account number" className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
              <input value={form.ifsc} onChange={(event) => setForm((current) => ({ ...current, ifsc: event.target.value }))} placeholder="IFSC code" className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
            </div>
            <div>
              <input value={form.nickname} onChange={(event) => setForm((current) => ({ ...current, nickname: event.target.value }))} placeholder="Nickname" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:opacity-95">
              Save beneficiary
            </button>
          </form>
        ) : null}

        <div className="mt-8 grid gap-5">
          <div className="rounded-[28px] bg-slate-50 p-6 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Total beneficiaries</p>
            <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{beneficiaryCount}</p>
          </div>

          <div className="space-y-4">
            {beneficiaries.map((benefit) => (
              <div key={benefit.id} className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-slate-950 dark:text-white">{benefit.name}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{benefit.bank} • {benefit.accountNumber}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-3xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800">
                      <FiEdit className="inline-block h-4 w-4" /> Edit
                    </button>
                    <button onClick={() => handleDelete(benefit.id)} className="rounded-3xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 dark:border-rose-600 dark:bg-rose-950/40 dark:text-rose-200 dark:hover:bg-rose-900">
                      <FiTrash2 className="inline-block h-4 w-4" /> Delete
                    </button>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-600 dark:text-slate-400">
                  <span><strong>Nickname:</strong> {benefit.nickname}</span>
                  <span><strong>IFSC:</strong> {benefit.ifsc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
