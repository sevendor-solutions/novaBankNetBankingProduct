import { Link } from 'react-router-dom';

export function OTPPage() {
  return (
    <div className="mx-auto max-w-3xl glass-panel p-10 shadow-2xl shadow-slate-950/10 dark:bg-slate-950 dark:text-white sm:p-12">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">OTP verification</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Enter the one-time passcode.</h2>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">A secure code has been sent to your registered mobile number. Use it to continue your banking session.</p>
      </div>

      <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-8 dark:border-slate-800/80 dark:bg-slate-900">
        <div className="grid gap-4 sm:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <input
              key={index}
              maxLength={1}
              className="h-16 rounded-3xl border border-slate-300 bg-white text-center text-2xl font-semibold text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          ))}
        </div>

        <button className="glass-button mt-8 w-full text-slate-950 dark:text-slate-950">
          Verify OTP
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
        Didn&apos;t receive the code? <button className="font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-300">Resend OTP</button>
      </p>

      <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
        Back to <Link to="/login" className="font-semibold text-slate-950 hover:text-slate-700 dark:text-white dark:hover:text-slate-200">Login</Link>
      </p>
    </div>
  );
}
