import { Link } from 'react-router-dom';

export function ForgotPasswordPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
      <div className="glass-panel rounded-[32px] p-10 shadow-2xl shadow-slate-950/10 sm:p-12 dark:bg-slate-950 dark:text-white">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Forgot password</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Recover your NovaBank profile quickly.</h2>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Enter your registered Customer ID and we will guide you through a mock password reset flow.</p>
        </div>

        <div className="space-y-5">
          <input className="glass-input" placeholder="Customer ID" />
          <button className="glass-button w-full text-slate-950 dark:text-slate-950">
            Send recovery link
          </button>
        </div>
      </div>

      <div className="glass-panel rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-[#1E4DB7] p-10 text-white shadow-2xl shadow-slate-950/30 sm:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Security first</p>
        <h3 className="mt-6 text-3xl font-semibold">Recover your account with confidence.</h3>
        <p className="mt-4 max-w-lg text-sm text-slate-300">This mock flow is built to reflect secure banking practices with OTP and identity checks.</p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Verified identity</p>
            <p className="mt-2 text-xl font-semibold text-white">Customer support and recovery details.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-300">OTP verification</p>
            <p className="mt-2 text-xl font-semibold text-white">Your next step is secure verification.</p>
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-300">
          Remembered your password?{' '}
          <Link to="/login" className="font-semibold text-cyan-200 hover:text-white">Sign in now</Link>
        </p>
      </div>
    </div>
  );
}
