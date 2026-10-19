import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-[#f8fafe] dark:bg-slate-900 py-20 px-4 font-sans transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#38c172]"></span>
          <span className="text-xs font-medium text-[#1e2e4f] dark:text-slate-300 tracking-wide transition-colors duration-300">
            our services
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#14233c] dark:text-white leading-tight mb-14 transition-colors duration-300">
          Services specifically designed to meet your{" "}
          <br className="hidden md:block" />
          business needs
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: UX & Product Design */}
          <div className="bg-white dark:bg-slate-800 dark:border dark:border-slate-700/60 rounded-md p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-lg dark:hover:bg-slate-800/80 transition-all duration-300 flex flex-col items-center text-center">
            <div className="mb-6">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
                  className="fill-[#b3ccf5] dark:fill-blue-900/60 transition-colors"
                />
                <path
                  d="M20 11L28 15.5V24.5L20 29L12 24.5V15.5L20 11Z"
                  className="fill-[#ffffff] dark:fill-slate-800 transition-colors"
                />
                <path
                  d="M20 15L24.5 17.5V22.5L20 25L15.5 22.5V17.5L20 15Z"
                  className="fill-[#2563eb] dark:fill-blue-400 transition-colors"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-snug transition-colors duration-300">
              UX & Product <br /> Design
            </h3>
            <p className="text-xs text-gray-600 dark:text-slate-400 leading-relaxed mb-8 transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#get-started"
              className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
            >
              Get Started
              <span className="text-[10px]">❯</span>
            </a>
          </div>

          {/* Card 2: Performance Optimization */}
          <div className="bg-white dark:bg-slate-800 dark:border dark:border-slate-700/60 rounded-md p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-lg dark:hover:bg-slate-800/80 transition-all duration-300 flex flex-col items-center text-center">
            <div className="mb-6">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 6L26 17H14L20 6Z"
                  className="fill-[#b3ccf5] dark:fill-blue-900/60 transition-colors"
                />
                <path
                  d="M13 19L19 30H7L13 19Z"
                  className="fill-[#93b4f0] dark:fill-blue-600 transition-colors"
                />
                <path
                  d="M27 19L33 30H21L27 19Z"
                  className="fill-[#2563eb] dark:fill-blue-400 transition-colors"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-snug transition-colors duration-300">
              Performance <br /> Optimization
            </h3>
            <p className="text-xs text-gray-600 dark:text-slate-400 leading-relaxed mb-8 transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#get-started"
              className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
            >
              Get Started
              <span className="text-[10px]">❯</span>
            </a>
          </div>

          {/* Card 3: UX & Products Design */}
          <div className="bg-white dark:bg-slate-800 dark:border dark:border-slate-700/60 rounded-md p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-lg dark:hover:bg-slate-800/80 transition-all duration-300 flex flex-col items-center text-center">
            <div className="mb-6">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 22L32 27.5L20 33L8 27.5L20 22Z"
                  className="fill-[#cadbf8] dark:fill-blue-900/60 transition-colors"
                />
                <path
                  d="M20 15L32 20.5L20 26L8 20.5L20 15Z"
                  className="fill-[#93b4f0] dark:fill-blue-600 transition-colors"
                />
                <path
                  d="M20 8L32 13.5L20 19L8 13.5L20 8Z"
                  className="fill-[#2563eb] dark:fill-blue-400 transition-colors"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-snug transition-colors duration-300">
              UX & Products <br /> Design
            </h3>
            <p className="text-xs text-gray-600 dark:text-slate-400 leading-relaxed mb-8 transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#get-started"
              className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
            >
              Get Started
              <span className="text-[10px]">❯</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;