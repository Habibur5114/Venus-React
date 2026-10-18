import React from 'react';
import habibImg from '../../assets/images/habib.jpg';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Area */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                build everything
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0D2036] dark:text-white leading-[1.15] tracking-tight">
              Unveiling My <br className="hidden sm:inline" />
              Professional Odyssey: <br />
              Portfolio Highlights
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-normal max-w-lg leading-relaxed">
              A brief introduction about myself and my professional objectives.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#get-started"
                className="inline-block px-7 py-3 bg-[#1D68FE] hover:bg-blue-700 text-white font-medium text-sm rounded-md shadow-sm transition-all duration-200 hover:shadow-md"
              >
                Get Started
              </a>
            </div>

            {/* User Avatars & Help Text */}
            <div className="pt-8 flex items-center gap-3">
              {/* Overlapping Avatar Stack */}
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Team member 1"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Team member 2"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Team member 3"
                />
              </div>

              {/* Support Text */}
              <div className="text-xs sm:text-sm leading-snug">
                <p className="text-slate-500 dark:text-slate-400">
                  Need help?{' '}
                  <a href="#contact" className="text-[#1D68FE] hover:underline font-medium">
                    Contact our experts
                  </a>
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  Tell us about your project
                </p>
              </div>
            </div>

          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-sm">
              <img
                src={habibImg}
                alt="Professional working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
