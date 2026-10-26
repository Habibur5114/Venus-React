import React, { Component } from 'react';

export default class DashNavbar extends Component {
  state = {
    isSidebarOpen: true,
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  render() {
    const { isSidebarOpen } = this.state;

    return (
      <div className="flex h-screen bg-gray-100 font-sans antialiased overflow-hidden">
        
        {/* ===================== SIDEBAR ===================== */}
        <aside
          className={`${
            isSidebarOpen ? 'w-64' : 'w-20'
          } bg-slate-900 text-slate-300 transition-all duration-300 ease-in-out flex flex-col justify-between shrink-0 shadow-xl`}
        >
          <div>
            {/* Sidebar Logo / Brand */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                {isSidebarOpen && (
                  <span className="font-semibold text-lg text-white tracking-wide truncate">
                    AdminHub
                  </span>
                )}
              </div>
            </div>

            {/* Sidebar Navigation Links */}
            <nav className="p-3 space-y-1">
              <a
                href="#dashboard"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                <span className="text-xl">📊</span>
                {isSidebarOpen && <span className="font-medium">Dashboard</span>}
              </a>

              <a
                href="#users"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span className="text-xl">👥</span>
                {isSidebarOpen && <span>Users</span>}
              </a>

              <a
                href="#orders"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span className="text-xl">📦</span>
                {isSidebarOpen && <span>Orders</span>}
              </a>

              <a
                href="#analytics"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span className="text-xl">📈</span>
                {isSidebarOpen && <span>Analytics</span>}
              </a>

              <a
                href="#settings"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span className="text-xl">⚙️</span>
                {isSidebarOpen && <span>Settings</span>}
              </a>
            </nav>
          </div>

          {/* Sidebar Footer / User Info */}
          <div className="p-4 border-t border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-white font-semibold">
              AD
            </div>
            {isSidebarOpen && (
              <div className="truncate">
                <p className="text-sm font-medium text-white truncate">Admin Account</p>
                <p className="text-xs text-slate-400 truncate">admin@example.com</p>
              </div>
            )}
          </div>
        </aside>

        {/* ===================== RIGHT CONTENT AREA ===================== */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          
          {/* ===================== HEADER / NAVBAR ===================== */}
          <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm z-10 shrink-0">
            {/* Toggle Button & Search */}
            <div className="flex items-center gap-4">
              <button
                onClick={this.toggleSidebar}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors"
                title="Toggle Sidebar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pl-9 pr-4 py-1.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none w-64"
                />
                <span className="absolute left-3 top-2 text-gray-400 text-sm">🔍</span>
              </div>
            </div>

            {/* Profile & Notifications */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
                <span className="text-lg">🔔</span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="h-8 w-px bg-gray-200"></div>

              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                  alt="Admin Avatar"
                  className="w-8 h-8 rounded-full border border-gray-200"
                />
                <span className="text-sm font-semibold text-gray-700 hidden sm:inline-block">
                  John Doe
                </span>
              </div>
            </div>
          </header>

          {/* ===================== MAIN CONTENT ===================== */}
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto space-y-6">
              
              {/* Page Title */}
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, here is your summary for today.</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Sales</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">$45,230</p>
                    <span className="text-xs font-medium text-emerald-600">+12% this month</span>
                  </div>
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg text-xl">💰</div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Users</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">2,450</p>
                    <span className="text-xs font-medium text-emerald-600">+8.5% new users</span>
                  </div>
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg text-xl">👥</div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">1,280</p>
                    <span className="text-xs font-medium text-red-500">-2.3% this week</span>
                  </div>
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-lg text-xl">📦</div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Pending Issues</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">14</p>
                    <span className="text-xs font-medium text-gray-500">Requires review</span>
                  </div>
                  <div className="p-3 bg-rose-50 text-rose-600 rounded-lg text-xl">⚠️</div>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="font-semibold text-gray-800">Recent Orders</h2>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View all</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase font-semibold">
                      <tr>
                        <th className="px-6 py-3">Order ID</th>
                        <th className="px-6 py-3">Customer</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">#ORD-0921</td>
                        <td className="px-6 py-4">Rahim Ahmed</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Completed</span>
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900">$120.00</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">#ORD-0920</td>
                        <td className="px-6 py-4">Sadia Islam</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">Pending</span>
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900">$85.50</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">#ORD-0919</td>
                        <td className="px-6 py-4">Tanvir Hasan</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700">Cancelled</span>
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900">$210.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </main>
        </div>

      </div>
    );
  }
}
