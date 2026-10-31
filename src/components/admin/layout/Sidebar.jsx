import {
  BarChart3,
  BriefcaseBusiness,
  ChevronDown,
  CircleHelp,
  LayoutDashboard,
  LifeBuoy,
  MessageSquare,
  Tags,
  Settings,
  Users,
  X,
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const navigation = [
  { label: 'Overview', href: '#overview', icon: LayoutDashboard, active: true },
  { label: 'Categories', href: '/admin/category', icon: Tags, route: true },
  { label: 'Analytics', href: '#analytics', icon: BarChart3 },
  { label: 'Projects', href: '#projects', icon: BriefcaseBusiness, badge: '8' },
  { label: 'Messages', href: '#messages', icon: MessageSquare, badge: '4' },
  { label: 'Team members', href: '#team', icon: Users },
];

export default function Sidebar({ isCollapsed = false, isMobileOpen = false, onClose }) {
  const { pathname } = useLocation();
  const isCategoryPage = pathname === '/admin/category';

  return (
    <>
      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800 bg-slate-950 text-slate-300 transition-[width,transform] duration-300 md:static md:z-auto md:h-screen md:translate-x-0 ${
          isCollapsed ? 'md:w-[76px]' : 'md:w-64'
        } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        aria-label="Admin sidebar"
      >
        <div
          className={`flex h-[76px] shrink-0 items-center border-b border-slate-800 ${
            isCollapsed ? 'md:justify-center md:px-3' : 'gap-3 px-5'
          }`}
        >
          <a href="#overview" className="flex min-w-0 flex-1 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white shadow-lg shadow-indigo-950/50">
              V
            </span>
            <span className={`min-w-0 ${isCollapsed ? 'md:hidden' : ''}`}>
              <span className="block truncate text-base font-semibold tracking-wide text-white">
                VENUS
              </span>
              <span className="block text-[10px] font-medium tracking-[0.18em] text-slate-500">
                ADMIN PANEL
              </span>
            </span>
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        <div className={`px-4 pt-5 ${isCollapsed ? 'md:hidden' : ''}`}>
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-left transition hover:border-slate-700 hover:bg-slate-900"
            aria-label="Current workspace"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-sm font-bold text-cyan-300">
              W
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] tracking-wider text-slate-500">WORKSPACE</span>
              <span className="block truncate text-sm font-medium text-slate-100">
                Workspace one
              </span>
            </span>
            <ChevronDown size={16} className="shrink-0 text-slate-500" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pt-7">
          <p
            className={`mb-3 px-3 text-[10px] font-semibold tracking-[0.18em] text-slate-500 ${
              isCollapsed ? 'md:hidden' : ''
            }`}
          >
            WORKSPACE
          </p>
          <ul className="space-y-1">
            {navigation.map(({ label, href, icon: Icon, active, badge, route }) => {
              const isActive = route ? isCategoryPage : active && !isCategoryPage;
              const linkClassName = `group flex min-h-11 items-center rounded-xl transition-colors ${
                isCollapsed ? 'md:justify-center md:px-2' : 'gap-3 px-3'
              } ${
                isActive
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-950/40'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-white'
              }`;

              const linkContent = (
                <>
                  <Icon size={19} strokeWidth={1.8} className="shrink-0" aria-hidden="true" />
                  <span className={`flex-1 text-[13px] font-medium ${isCollapsed ? 'md:hidden' : ''}`}>
                    {label}
                  </span>
                  {badge && (
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                        isActive ? 'bg-white/15 text-white' : 'bg-slate-800 text-slate-400'
                      } ${isCollapsed ? 'md:hidden' : ''}`}
                    >
                      {badge}
                    </span>
                  )}
                </>
              );

              return (
              <li key={label}>
                {route ? (
                  <NavLink
                    to={href}
                    end
                    aria-current={isActive ? 'page' : undefined}
                    title={isCollapsed ? label : undefined}
                    onClick={onClose}
                    className={linkClassName}
                  >
                    {linkContent}
                  </NavLink>
                ) : (
                  <a
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    title={isCollapsed ? label : undefined}
                    onClick={onClose}
                    className={linkClassName}
                  >
                    {linkContent}
                  </a>
                )}
              </li>
              );
            })}
          </ul>

          <p
            className={`mb-3 mt-8 px-3 text-[10px] font-semibold tracking-[0.18em] text-slate-500 ${
              isCollapsed ? 'md:hidden' : ''
            }`}
          >
            PREFERENCES
          </p>
          <a
            href="#settings"
            title={isCollapsed ? 'Settings' : undefined}
            onClick={onClose}
            className={`flex min-h-11 items-center rounded-xl text-slate-400 transition-colors hover:bg-slate-900 hover:text-white ${
              isCollapsed ? 'md:justify-center md:px-2' : 'gap-3 px-3'
            }`}
          >
            <Settings size={19} strokeWidth={1.8} aria-hidden="true" />
            <span className={`text-[13px] font-medium ${isCollapsed ? 'md:hidden' : ''}`}>
              Settings
            </span>
          </a>
        </nav>

        <div className="shrink-0 border-t border-slate-800 p-3">
          <div className={`mb-3 rounded-xl bg-gradient-to-br from-indigo-500/15 to-cyan-500/10 p-3 ${isCollapsed ? 'md:hidden' : ''}`}>
            <div className="mb-2 flex items-center gap-2 text-indigo-200">
              <CircleHelp size={16} aria-hidden="true" />
              <span className="text-xs font-semibold">Habib Support</span>
            </div>
            <p className="mb-3 text-[11px] leading-relaxed text-slate-400">
              Need help? Get in touch with Habib.
            </p>
            <a
              href="#support"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition hover:text-cyan-200"
            >
              <LifeBuoy size={14} aria-hidden="true" />
              Contact Habib
            </a>
          </div>

          <div
            className={`flex items-center rounded-xl py-2 ${
              isCollapsed ? 'md:justify-center' : 'gap-3 px-2'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face"
              alt=""
              className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-slate-700"
            />
            <span className={`min-w-0 flex-1 ${isCollapsed ? 'md:hidden' : ''}`}>
              <span className="block truncate text-xs font-semibold text-white">John Doe</span>
              <span className="block truncate text-[11px] text-slate-500">Administrator</span>
            </span>
            <button
              type="button"
              className={`rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-800 hover:text-white ${
                isCollapsed ? 'md:hidden' : ''
              }`}
              aria-label="Open profile menu"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}