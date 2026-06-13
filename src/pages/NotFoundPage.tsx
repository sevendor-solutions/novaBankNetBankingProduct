import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="grid min-h-[calc(100vh-4rem)] place-items-center px-4 py-12 text-center">
      <div className="max-w-2xl rounded-[32px] border border-slate-200/80 bg-white/90 p-10 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/90">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">404 error</p>
        <h1 className="mt-6 text-5xl font-semibold text-slate-950 dark:text-white">Page not found</h1>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">The page you are looking for does not exist or has been moved. Return to your dashboard to continue banking.</p>
        <Link to="/dashboard" className="mt-8 inline-flex rounded-3xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
