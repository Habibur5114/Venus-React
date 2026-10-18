import React from "react";

const Portfolio = () => {
  return (
    <section className="bg-[#f8fafe] dark:bg-slate-900 py-24 px-6 md:px-12 font-sans overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Badge */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#38c172] dark:bg-[#10B981] dark:shadow-[0_0_8px_#10B981]"></span>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#1e2e4f] dark:text-[#10B981] transition-colors duration-300">
            Portfolio
          </span>
        </div>

        {/* Section Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#14233c] dark:text-white mb-4 tracking-tight transition-colors duration-300">
            Explore my portfolio showcase
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
            Dive into a curated collection of my finest work,{" "}
            <br className="hidden md:inline" />
            showcasing expertise across various industries.
          </p>
        </div>

        {/* Staggered Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-start">
          
          {/* Card 1: InnovateX Ventures */}
          <div className="flex flex-col transition-transform duration-500 ease-out hover:-translate-y-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md dark:shadow-lg border border-gray-200/80 dark:border-white/5 relative group mb-4">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                alt="InnovateX Ventures"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            <div className="px-1 text-left">
              <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white tracking-wide leading-tight hover:text-blue-600 dark:hover:text-[#10B981] transition-colors cursor-pointer">
                InnovateX Ventures
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 font-medium transition-colors duration-300">
                Designation
              </p>
            </div>
          </div>

          {/* Card 2: Nebula Holdings (Staggered Lower) */}
          <div className="flex flex-col transition-transform duration-500 ease-out hover:-translate-y-2 md:translate-y-10">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md dark:shadow-lg border border-gray-200/80 dark:border-white/5 relative group mb-4">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                alt="Nebula Holdings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            <div className="px-1 text-left">
              <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white tracking-wide leading-tight hover:text-blue-600 dark:hover:text-[#10B981] transition-colors cursor-pointer">
                Nebula Holdings
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 font-medium transition-colors duration-300">
                Designation
              </p>
            </div>
          </div>

          {/* Card 3: Summit Partners */}
          <div className="flex flex-col transition-transform duration-500 ease-out hover:-translate-y-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md dark:shadow-lg border border-gray-200/80 dark:border-white/5 relative group mb-4">
              <img
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80"
                alt="Summit Partners"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            <div className="px-1 text-left">
              <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white tracking-wide leading-tight hover:text-blue-600 dark:hover:text-[#10B981] transition-colors cursor-pointer">
                Summit Partners
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 font-medium transition-colors duration-300">
                Designation
              </p>
            </div>
          </div>

          {/* Card 4: Apex Strategies (Staggered Lower) */}
          <div className="flex flex-col transition-transform duration-500 ease-out hover:-translate-y-2 md:translate-y-10">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md dark:shadow-lg border border-gray-200/80 dark:border-white/5 relative group mb-4">
              <img
                src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=600&q=80"
                alt="Apex Strategies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            <div className="px-1 text-left">
              <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white tracking-wide leading-tight hover:text-blue-600 dark:hover:text-[#10B981] transition-colors cursor-pointer">
                Apex Strategies
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 font-medium transition-colors duration-300">
                Designation
              </p>
            </div>
          </div>

          {/* Card 5: Cozycasa */}
          <div className="flex flex-col transition-transform duration-500 ease-out hover:-translate-y-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md dark:shadow-lg border border-gray-200/80 dark:border-white/5 relative group mb-4">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                alt="Cozycasa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            <div className="px-1 text-left">
              <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white tracking-wide leading-tight hover:text-blue-600 dark:hover:text-[#10B981] transition-colors cursor-pointer">
                Cozycasa
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 font-medium transition-colors duration-300">
                Designation
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;