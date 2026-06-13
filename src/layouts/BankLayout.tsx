import { Outlet } from 'react-router-dom';
import { BankSidebar } from '../components/BankSidebar';
import { BankTopbar } from '../components/BankTopbar';

export function BankLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <BankTopbar />
      <BankSidebar />
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),_transparent_20%),#f8fbff] px-4 pb-10 pt-6 transition-colors duration-300 dark:bg-slate-950/95 lg:px-8">
        <div className="mx-auto w-full max-w-[1560px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
