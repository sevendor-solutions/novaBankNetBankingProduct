import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(30,77,183,0.13),_transparent_24%),#f8fbff] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="glass-panel w-full max-w-5xl p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
