import React from 'react';

export default function Stats() {
  return (
    <section className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Review & Rating */}
          <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.9 6.2 6.8.9-5 4.8 1.2 6.8-5.9-3.3-5.9 3.3 1.2-6.8-5-4.8 6.8-.9L12 2z" fill="#2563EB" />
                <path d="M12 2v15.4l-5.9 3.3 1.2-6.8-5-4.8 6.8-.9L12 2z" fill="#93C5FD" />
              </svg>
            </div>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-[#0D2036] dark:text-white tracking-tight leading-none mb-3">
              4.86
            </h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-[260px]">
              Out of 5 stars from 3896 reviews on Google platform
            </p>
          </div>

          {/* Card 2: Testimonials */}
          <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#93C5FD" />
                <circle cx="12" cy="9" r="3.5" fill="#2563EB" />
                <path d="M6 18.5c0-2.5 2.7-4.5 6-4.5s6 2 6 4.5" fill="#2563EB" />
              </svg>
            </div>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-[#0D2036] dark:text-white tracking-tight leading-none mb-3">
              364
            </h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-[260px]">
              Client testimonials received in the year 2021
            </p>
          </div>

          {/* Card 3: Revenue */}
          <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="7" width="18" height="13" rx="2" fill="#93C5FD" />
                <rect x="3" y="11" width="18" height="9" rx="2" fill="#2563EB" />
                <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                <rect x="11" y="10" width="2" height="3" rx="0.5" fill="white" />
              </svg>
            </div>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-[#0D2036] dark:text-white tracking-tight leading-none mb-3">
              45<span className="text-[#1D68FE] ml-0.5">M+</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-[260px]">
              Revenue generated through new projects &amp; marketing
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}