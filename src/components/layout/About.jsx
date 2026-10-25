import React, { Component } from 'react';
import prograss from '../../assets/images/progress-work.png';

export default class About extends Component {
  render() {
    return (
      <section id="about" className="w-full bg-white py-12 md:py-20 lg:py-24 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
     
       
            <div className="hidden md:flex justify-center items-center">
              <img 
                src={prograss} 
                alt="Mobile Payment Showcase" 
                className="w-full max-w-[420px] md:max-w-[480px] h-auto object-contain drop-shadow-xl" 
              />
            </div>

            <div className="flex flex-col space-y-6 text-left">
     
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-sm font-semibold text-gray-700 dark:text-slate-300 tracking-wide">
                  build everything
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1E48] dark:text-white leading-tight tracking-tight">
                Build amazing websites and landing pages with ease
              </h2>

              <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida.
              </p>

              <div className="space-y-5 pt-3 w-full">
            
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-gray-600 dark:text-slate-300">
                    <span>UX Research and Testing</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                {/* <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-gray-600 dark:text-slate-300">
                    <span>UX Research and Testing</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div> */}

                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-gray-600 dark:text-slate-300">
                    <span>Product Management</span>
                    <span>84%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-gray-600 dark:text-slate-300">
                    <span>UI & Visual Design</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}