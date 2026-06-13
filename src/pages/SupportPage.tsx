import { FiMessageSquare } from 'react-icons/fi';
import { SUPPORT_TICKETS } from '../data/mockTickets';

const faqs = [
  { question: 'How do I reset my password?', answer: 'Use the Forgot Password flow from the login page and follow OTP verification.' },
  { question: 'How can I add a beneficiary?', answer: 'Go to Beneficiaries and use Add Beneficiary to register new payees.' },
  { question: 'Where can I download statements?', answer: 'Statements are accessible from Dashboard and Accounts sections as PDF downloads.' },
];

export function SupportPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Customer support</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Help center and ticket history.</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
            <FiMessageSquare className="h-4 w-4" /> Raise ticket
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Frequently asked questions</p>
            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <p className="font-semibold text-slate-950 dark:text-white">{faq.question}</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Ticket history</p>
            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              {SUPPORT_TICKETS.map((ticket) => (
                <div key={ticket.id} className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-950 dark:text-white">{ticket.subject}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Updated {ticket.updated}</p>
                    </div>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-200">{ticket.status}</span>
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
