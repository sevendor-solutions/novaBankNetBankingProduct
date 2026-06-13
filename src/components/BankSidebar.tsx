import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronDown, FiFileText, FiHome, FiPieChart, FiSend, FiShield } from 'react-icons/fi';

type SubmenuItem = {
  label: string;
  path: string;
  featured?: boolean;
};

type NavGroup = {
  label: string;
  path?: string;
  icon: React.ComponentType<{ className?: string }>;
  submenu?: SubmenuItem[];
};

const navGroups: NavGroup[] = [
  { label: 'Home', path: '/dashboard', icon: FiHome },
  {
    label: 'Banking',
    icon: FiFileText,
    submenu: [
      { label: 'Accounts', path: '/accounts', featured: true },
      { label: 'Cards', path: '/cards' },
      { label: 'Loans', path: '/loans' },
      { label: 'Deposits', path: '/deposits' },
    ],
  },
  {
    label: 'Payments',
    icon: FiSend,
    submenu: [
      { label: 'Fund Transfer', path: '/transfer' },
      { label: 'Bill Payments', path: '/bills' },
      { label: 'Recharge', path: '/recharge' },
    ],
  },
  {
    label: 'Wealth',
    icon: FiPieChart,
    submenu: [
      { label: 'Investments', path: '/investments' },
      { label: 'Rewards', path: '/rewards' },
      { label: 'Analytics', path: '/admin-analytics' },
    ],
  },
  {
    label: 'Support',
    icon: FiShield,
    submenu: [
      { label: 'Help Center', path: '/support' },
      { label: 'Notifications', path: '/notifications' },
      { label: 'Profile', path: '/profile' },
      { label: 'Settings', path: '/settings' },
    ],
  },
];

function NavItem({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const Icon = group.icon;

  // No submenu — plain nav link
  if (!group.submenu) {
    return (
      <NavLink
        to={group.path!}
        className={({ isActive }) =>
          `inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
            isActive
              ? 'border-slate-950 bg-slate-950 text-white shadow-[0_16px_40px_rgba(0,0,0,0.12)]'
              : 'border-transparent bg-white text-slate-700 hover:border-slate-200 hover:bg-slate-100 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-700/70 dark:hover:bg-slate-900'
          }`}
      >
        <Icon className="h-4 w-4 text-slate-500" />
        <span>{group.label}</span>
      </NavLink>
    );
  }

  // Has submenu — hover wrapper controls visibility
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger pill */}
      <div
        className={`inline-flex cursor-pointer select-none items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
          open
            ? 'border-slate-950 bg-slate-950 text-white shadow-[0_16px_40px_rgba(0,0,0,0.12)]'
            : 'border-transparent bg-white text-slate-700 hover:border-slate-200 hover:bg-slate-100 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-700/70 dark:hover:bg-slate-900'
        }`}
      >
        <Icon className="h-4 w-4 text-slate-500" />
        <span>{group.label}</span>
        <FiChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown — absolutely positioned, no portal, no timer */}
      {open && (
        <div className="absolute left-0 top-full z-[9999] pt-2">
          <div className="min-w-[200px] rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/15 dark:border-slate-700/70 dark:bg-slate-900">
            {group.submenu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-100 ${
                    isActive
                      ? 'bg-slate-950 text-white'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function BankSidebar() {
  return (
    <div className="relative z-50 border-b border-slate-200/80 bg-white/95 px-4 py-5 shadow-sm shadow-slate-950/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95 lg:px-8">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-4">

        {/* Brand + Reward Points */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-[28px] bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-xl shadow-sky-500/20">
              <span className="text-2xl font-black">N</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">NovaBank Digital</p>
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Net Banking</h2>
            </div>
          </div>

          <div className="hidden rounded-full border border-slate-200/70 bg-slate-950 px-4 py-3 text-sm text-slate-100 shadow-xl shadow-slate-950/10 dark:border-slate-700/70 lg:block">
            <p className="uppercase tracking-[0.3em] text-slate-400">Reward points</p>
            <p className="mt-2 text-xl font-semibold">12,500</p>
          </div>
        </div>

        {/* Nav pill bar — overflow visible so dropdowns are never clipped */}
        <div className="flex w-full flex-wrap items-center gap-3 rounded-[28px] border border-slate-200/70 bg-slate-50 px-3 py-3 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/95">
          {navGroups.map((group) => (
            <NavItem key={group.label} group={group} />
          ))}
        </div>

      </div>
    </div>
  );
}
