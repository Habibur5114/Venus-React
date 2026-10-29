import { Bell, ChevronDown, Menu, Search } from 'lucide-react';

export default function Navbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-[76px] shrink-0 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3 sm:gap-5">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="Toggle navigation menu"
        >
          <Menu size={20} />
        </button>
        <div className="min-w-0">
          <p className="hidden text-xs font-medium text-slate-400 sm:block">Workspace / Admin</p>
          <h1 className="truncate text-lg font-semibold text-slate-900 sm:text-xl">Dashboard</h1>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <label className="relative hidden md:block">
          <Search
            size={17}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search anything..."
            className="h-10 w-56 rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 lg:w-64"
          />
        </label>

        <button
          type="button"
          className="relative rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="Notifications"
        >
          <Bell size={19} />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>

        <div className="hidden h-8 w-px bg-slate-200 sm:block" />

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-100"
          aria-label="Open account menu"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
            JD
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-xs font-semibold text-slate-800">John Doe</span>
            <span className="block text-[11px] text-slate-400">Administrator</span>
          </span>
          <ChevronDown size={15} className="hidden text-slate-400 sm:block" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}