import { Link } from 'react-router-dom';

export function RegisterPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
      <div className="glass-panel rounded-[32px] p-10 shadow-2xl shadow-slate-950/10 sm:p-12 dark:bg-slate-950 dark:text-white">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Open an account</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Create your NovaBank digital banking profile.</h2>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">This is a static registration experience. Enter your details to preview premium banking workflows.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <input className="glass-input" placeholder="Full Name" />
          <input className="glass-input" placeholder="Email Address" />
          <input className="glass-input" placeholder="Mobile Number" />
          <input className="glass-input" placeholder="Create Password" />
        </div>

        <button className="mt-8 glass-button w-full text-slate-950 dark:text-slate-950">
          Continue to registration
        </button>
      </div>

      <div className="glass-panel rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-[#0A2A66] p-10 text-white shadow-2xl shadow-slate-950/30 sm:p-12">
        <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-200">Welcome Offer</span>
        <h3 className="mt-6 text-3xl font-semibold">Start banking with NovaBank digital ease.</h3>
        <p className="mt-4 max-w-lg text-sm text-slate-300">Register today to manage savings, transfers, bill payments and rewards from one premium portal.</p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Digital savings</p>
            <p className="mt-2 text-xl font-semibold text-white">Instant login and clear account overview.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Secure access</p>
            <p className="mt-2 text-xl font-semibold text-white">Smart OTP, profile security and access controls.</p>
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-300">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-cyan-200 hover:text-white">Sign in now</Link>
        </p>
      </div>
    </div>
  );
}
