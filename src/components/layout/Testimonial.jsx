import React from 'react';
import vectorSmart from '../../assets/images/vector-smart.png';

export default function Testimonial() {
  return (
   <div>
    
    <section id="testimonials" className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300 flex items-center justify-center">
      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        {/* Illustration Section */}
        <div className="mb-10 w-64 md:w-80">
    
          <img
            src={vectorSmart}
            alt="Customer illustration"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Testimonial Quote */}
        <p className="text-[#0f2851] text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto mb-16 dark:text-white">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea
          commodo consequat.
        </p>

        {/* Author Details */}
        <div className="space-y-1">
          <h4 className="text-[#0f2851] font-bold text-sm md:text-base tracking-wide dark:text-white">
            Jonathan Diesel
          </h4>
          <p className="text-[#0f2851]/80 text-xs md:text-sm dark:text-white">
            Happy Customer, Apple inc
          </p>
        </div>
      </div>
    
    </section>
      </div>
  );
}