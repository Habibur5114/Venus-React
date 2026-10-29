import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/layout/About';
import Hero from './components/layout/Hero';
import Navbar from './components/layout/Navbar';
import Services from './components/layout/Services';
import Stats from './components/layout/Stats';
import Portfolio from './components/layout/Portfolio';
import Testimonial from './components/layout/Testimonial';
import LatestBlogNews from './components/layout/LatestBlogNews';
import Footer from './components/layout/Footer';
import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Users, WalletCards } from 'lucide-react';
import AdminNavbar from './components/admin/layout/Navbar';
import Sidebar from './components/admin/layout/Sidebar';


function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="testimonials">
          <Testimonial />
        </section>
        <section id="blog">
          <LatestBlogNews />
        </section>
      </main>
      <Footer />
    </div>
  );
}


function AdminDashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const stats = [
    { label: 'Total revenue', value: '$48,294', change: '+12.8%', icon: WalletCards, positive: true },
    { label: 'Active projects', value: '24', change: '+4.3%', icon: BriefcaseBusiness, positive: true },
    { label: 'Team members', value: '18', change: '-1.2%', icon: Users, positive: false },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminNavbar
          onMenuClick={() => {
            if (window.matchMedia('(min-width: 768px)').matches) {
              setIsSidebarCollapsed((collapsed) => !collapsed);
            } else {
              setIsMobileSidebarOpen((open) => !open);
            }
          }}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
              <p className="text-sm text-slate-500">
                Here&apos;s what&apos;s happening with your workspace.
              </p>
              <button
                type="button"
                className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                + New project
              </button>
            </div>

            <section
              aria-label="Workspace statistics"
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {stats.map(({ label, value, change, icon: Icon, positive }) => (
                <article
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{label}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                        {value}
                      </p>
                    </div>
                    <span className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                  </div>
                  <p
                    className={`mt-4 flex items-center gap-1 text-xs font-medium ${
                      positive ? 'text-emerald-600' : 'text-rose-600'
                    }`}
                  >
                    {positive ? <ArrowUpRight size={15} /> : <ArrowDownRight size={15} />}
                    {change}
                    <span className="font-normal text-slate-400">from last month</span>
                  </p>
                </article>
              ))}
            </section>

            <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
              <h2 className="text-base font-semibold text-slate-900">
                Welcome to your workspace
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Use the sidebar to explore your projects, analytics, messages, and team settings.
                Your latest workspace activity will appear here.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<HomePage />} />

        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;