import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#071739] text-white">
      {/* Top 3-Column Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
        
        {/* Column 1: Brand & CTA */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
               <div className="flex gap-0.5">
              <span className="w-2 h-7 bg-blue-500 rounded-bl-lg rounded-tr-lg transform -skew-x-12"></span>
              <span className="w-3 h-7 bg-blue-500 rounded-tr-lg rounded-bl-lg transform -skew-x-12 translate-y-1"></span>
            </div>
              <span className="text-4xl font-bold tracking-tight text-white">
                venus
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-8">
              Ready to get<br />started?
            </h2>
          </div>

          <div>
            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#2563eb] text-white font-medium text-sm hover:bg-blue-600 transition-colors duration-200 shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Column 2: Support Details */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 space-y-8">
          <div>
            <h3 className="text-base font-bold text-white mb-6">Support</h3>

            {/* Phone */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-white/90 mb-1">Phone</p>
              <a
                href="tel:+69025600020"
                className="text-lg text-slate-400 hover:text-white transition-colors"
              >
                +(690) 2560 0020
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="text-sm font-semibold text-white/90 mb-1">Email</p>
              <a
                href="mailto:info@Venus.com"
                className="text-lg text-slate-400 hover:text-white transition-colors"
              >
                info@Venus.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-4">
            {/* Facebook */}
            <a
              href="#facebook"
              aria-label="Facebook"
              className="w-7 h-7 rounded bg-slate-300 hover:bg-white text-[#071739] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="#twitter"
              aria-label="Twitter"
              className="w-7 h-7 rounded bg-slate-300 hover:bg-white text-[#071739] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.162c-.424.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.18 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded bg-slate-300 hover:bg-white text-[#071739] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-start">
          <h3 className="text-xl font-bold text-white mb-3">
            Subscribe newsletter
          </h3>
          <p className="text-sm text-slate-400 mb-8 max-w-xs leading-relaxed">
            To be updated with all the latest trends and product
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full max-w-sm">
            <input
              type="email"
              placeholder="Email*"
              required
              className="w-full h-11 px-4 bg-white text-slate-800 placeholder-slate-400 text-sm rounded-l-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="h-11 px-6 bg-[#2563eb] text-white text-sm font-medium rounded-r-md hover:bg-blue-600 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Navigation Links & Copyright */}
      <div className="max-w-7xl mx-auto py-10 px-4 text-center">
        {/* Navigation Links */}
        <ul className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300 font-normal mb-4">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
          <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
          <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>

        {/* Credits */}
        <p className="text-xs text-slate-400">
          &copy; All rights reserved. Made by GetNextJs Templates &bull; Distributed by ThemeWagon
        </p>
      </div>
    </footer>
  );
}