import { FiMail, FiMapPin, FiPhone, FiShield, FiUser } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

export function ProfilePage() {
  const { session } = useAuth();

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Profile</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Your NovaBank customer profile.</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
            Customer ID: {session?.customerId ?? 'NOVA10001'}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Personal details</p>
            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <FiUser className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
                <span>{session?.fullName}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                <span>{session?.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                <span>{session?.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                <span>{session?.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiShield className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                <span>PAN: {session?.pan} • Aadhaar: {session?.aadhaar}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Security settings</p>
            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
                <p className="font-semibold text-slate-950 dark:text-white">Change Password</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Update your login password and lock your profile.</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
                <p className="font-semibold text-slate-950 dark:text-white">Security Questions</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Manage recovery options and secure questions.</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
                <p className="font-semibold text-slate-950 dark:text-white">Two-factor authentication</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Enable OTP-based login for added protection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
