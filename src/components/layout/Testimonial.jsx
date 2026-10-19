import React from 'react';
import vectorSmart from '../../assets/images/vector-smart.png';

export default function Testimonial() {
  return (
    <section className="min-h-screen bg-[#f9fafc] flex items-center justify-center px-4 py-16">
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
        <p className="text-[#0f2851] text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto mb-16">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea
          commodo consequat.
        </p>

        {/* Author Details */}
        <div className="space-y-1">
          <h4 className="text-[#0f2851] font-bold text-sm md:text-base tracking-wide">
            Jonathan Diesel
          </h4>
          <p className="text-[#0f2851]/80 text-xs md:text-sm">
            Happy Customer, Apple inc
          </p>
        </div>
      </div>
    </section>
  );
}