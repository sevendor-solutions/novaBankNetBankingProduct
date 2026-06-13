import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [customerId, setCustomerId] = useState('NOVA10001');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = login(customerId, password);
    if (!result.ok) {
      setError(result.message ?? 'Unable to sign in.');
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="glass-panel p-10 text-slate-950 shadow-2xl shadow-slate-950/10 sm:p-12 dark:bg-slate-950 dark:text-white">
        <div className="mb-8 max-w-xl">
          <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-200">
            NovaBank Premium
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight">Modern banking, elevated for NovaBank customers.</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Secure login for NovaBank customers with fast access to accounts, transfers, payments, rewards, and financial planning.</p>
        </div>

        <div className="space-y-5 rounded-[28px] border border-slate-200/70 bg-slate-50/90 p-6 shadow-inner shadow-slate-900/5 dark:border-slate-700/70 dark:bg-slate-900/80">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Demo credentials</p>
          </div>
          <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-lg shadow-slate-950/20">
            <p className="text-sm font-medium text-slate-300">Customer ID</p>
            <p className="mt-2 text-lg font-semibold">NOVA10001</p>
            <p className="mt-4 text-sm font-medium text-slate-300">Password</p>
            <p className="mt-2 text-lg font-semibold">Password@123</p>
            <p className="mt-4 text-sm text-slate-400">Use these credentials to sign in to the mock banking dashboard.</p>
          </div>
          <div className="rounded-3xl bg-slate-900/95 p-5 text-sm text-slate-200">
            <p className="font-semibold">New to NovaBank?</p>
            <Link to="/register" className="mt-4 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:opacity-95">
              Register now
            </Link>
          </div>
        </div>
      </section>

      <section className="glass-panel p-10 shadow-2xl shadow-slate-950/10 sm:p-12 dark:bg-slate-950 dark:text-white">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Customer login</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Secure access to your NovaBank account.</h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Enter your credentials to continue. Use the demo credentials listed on the left.</p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Customer ID</label>
            <input
              value={customerId}
              onChange={(event) => setCustomerId(event.target.value)}
              placeholder="NOVA10001"
              className="glass-input"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300">
              <span>Password</span>
              <Link to="/forgot-password" className="text-cyan-600 hover:text-cyan-500 dark:text-cyan-300">Forgot Password?</Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password@123"
                className="glass-input pr-14"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute inset-y-0 right-3 flex items-center text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="inline-flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} className="h-4 w-4 rounded border-slate-300 text-cyan-500 focus:ring-cyan-500" />
              Remember Me
            </label>
            <Link to="/otp" className="text-sm font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-300">Use OTP</Link>
          </div>

          {error ? <p className="rounded-3xl bg-rose-100 px-4 py-3 text-sm text-rose-700 dark:bg-rose-950/60 dark:text-rose-200">{error}</p> : null}

          <button className="glass-button w-full rounded-3xl px-5 py-3 text-sm text-slate-950 dark:text-slate-950">
            Login Securely
          </button>
        </form>
      </section>
    </div>
  );
}
