import { useMemo, useState } from 'react';
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (email: string, password: string) => string | void;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState('');

  const isButtonDisabled = useMemo(() => !emailPattern.test(email) || password.length < 6, [email, password]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailPattern.test(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setValidationError('Password must be at least 6 characters.');
      return;
    }
    const message = onLogin(email, password);
    if (typeof message === 'string') {
      setValidationError(message);
      return;
    }
    setValidationError('');
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_20%),radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.14),transparent_18%),linear-gradient(180deg,_rgba(11,19,43,1)_0%,_rgba(12,22,52,1)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-4 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative w-full max-w-md rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-3xl">
        <div className="mb-8 space-y-4 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-cyan-500/15 text-cyan-200 shadow-lg shadow-cyan-500/10">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">FinVault</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-50">Secure login</h1>
            <p className="mt-2 text-sm text-slate-400">Access your premium banking command center with ironclad security.</p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block text-sm text-slate-300">
            <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-slate-500">Email</span>
            <div className="glass-input flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
              <Mail className="h-5 w-5 text-cyan-300" />
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="user@bank.com"
                className="w-full bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
              />
            </div>
          </label>

          <label className="block text-sm text-slate-300">
            <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-slate-500">Password</span>
            <div className="glass-input flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
              <Lock className="h-5 w-5 text-cyan-300" />
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="text-slate-400 transition hover:text-slate-100"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </label>

          {validationError ? (
            <div className="rounded-3xl border border-rose-400/15 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
              {validationError}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isButtonDisabled}
            className="glass-button w-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            Sign in securely
          </button>
        </form>

        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-400">
          <p className="font-medium text-slate-100">Demo credentials</p>
          <p className="mt-2">Email: <span className="text-cyan-200">user@bank.com</span></p>
          <p>Password: <span className="text-cyan-200">password123</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
