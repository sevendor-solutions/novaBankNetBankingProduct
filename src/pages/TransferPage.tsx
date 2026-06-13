import { useMemo, useState } from 'react';
import { FiCheckCircle, FiSend } from 'react-icons/fi';
import { ACCOUNTS } from '../data/mockAccounts';
import { BENEFICIARIES } from '../data/mockBeneficiaries';
import type { AccountRecord } from '../types';
import { formatCurrency } from '../utils/currency';

export function TransferPage() {
  const [fromAccount, setFromAccount] = useState('acc-01');
  const [beneficiary, setBeneficiary] = useState('ben-01');
  const [amount, setAmount] = useState('5000');
  const [remarks, setRemarks] = useState('Monthly transfer');
  const [successReference, setSuccessReference] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedAccount = useMemo(
    () => ACCOUNTS.find((account) => account.id === fromAccount) as AccountRecord,
    [fromAccount],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessReference(`TXN${Math.floor(100000000 + Math.random() * 900000000)}`);
    setSubmitted(true);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Fund transfer</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Send money with instant confirmation.</h1>
          </div>
          <div className="rounded-3xl bg-cyan-50 px-4 py-3 text-sm text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-100">
            Available Balance: {formatCurrency(selectedAccount.balance)}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5 rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 dark:border-slate-800/80 dark:bg-slate-900">
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-200">From Account</label>
              <select value={fromAccount} onChange={(event) => setFromAccount(event.target.value)} className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition dark:border-slate-800 dark:bg-slate-950 dark:text-white">
                {ACCOUNTS.filter((account) => account.type !== 'Fixed Deposit').map((account) => (
                  <option key={account.id} value={account.id}>{`${account.title} • ${account.number}`}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-200">Beneficiary</label>
              <select value={beneficiary} onChange={(event) => setBeneficiary(event.target.value)} className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition dark:border-slate-800 dark:bg-slate-950 dark:text-white">
                {BENEFICIARIES.map((benefit) => (
                  <option key={benefit.id} value={benefit.id}>{`${benefit.name} • ${benefit.bank}`}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-200">Amount</label>
              <input value={amount} onChange={(event) => setAmount(event.target.value)} type="number" min="1" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition dark:border-slate-800 dark:bg-slate-950 dark:text-white" placeholder="Enter amount" />
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-200">Remarks</label>
              <input value={remarks} onChange={(event) => setRemarks(event.target.value)} className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition dark:border-slate-800 dark:bg-slate-950 dark:text-white" placeholder="Enter note" />
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 dark:border-slate-800/80 dark:bg-slate-900">
            <div className="mb-6 rounded-[28px] bg-gradient-to-br from-sky-500 to-cyan-400 p-6 text-white shadow-lg shadow-cyan-500/20">
              <p className="text-sm uppercase tracking-[0.35em]">Transfer summary</p>
              <p className="mt-4 text-3xl font-semibold">{formatCurrency(Number(amount) || 0)}</p>
              <p className="mt-2 text-sm text-slate-200">Secure transfer powered by NovaBank, with instant notification and reference ID.</p>
            </div>
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-4 shadow-sm dark:bg-slate-950">
                <span>Account</span>
                <span>{selectedAccount.title}</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-4 shadow-sm dark:bg-slate-950">
                <span>Beneficiary</span>
                <span>{BENEFICIARIES.find((item) => item.id === beneficiary)?.name}</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-4 shadow-sm dark:bg-slate-950">
                <span>Mode</span>
                <span>NEFT / IMPS</span>
              </div>
            </div>
            <button type="submit" className="mt-8 inline-flex items-center justify-center gap-2 w-full rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
              <FiSend className="h-4 w-4" /> Confirm Transfer
            </button>
            {submitted ? (
              <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-100">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="h-5 w-5" />
                  <span>Transfer successful. Reference ID: <strong>{successReference}</strong></span>
                </div>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
