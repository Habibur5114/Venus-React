import React, { useState, useEffect } from 'react';
import { ChevronDown, Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  
  // Theme state: defaults to saved preference or system preference
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  // Sync theme with HTML class and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className="w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Branding */}
          <div className="flex items-center gap-2 cursor-pointer flex-shrink-0">
            <div className="flex gap-0.5">
              <span className="w-2 h-7 bg-blue-500 rounded-bl-lg rounded-tr-lg transform -skew-x-12"></span>
              <span className="w-3 h-7 bg-blue-500 rounded-tr-lg rounded-bl-lg transform -skew-x-12 translate-y-1"></span>
            </div>
            <span className="text-2xl font-bold text-[#0F2942] dark:text-white tracking-wide ml-1 font-sans">
              venus
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8 font-medium text-gray-700 dark:text-gray-200 text-[15px]">
            <a href="#home" className="text-blue-600 dark:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Portfolio</a>
            
            
            <div className="relative group py-6">
              <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer focus:outline-none">
                <span>Blog</span>
                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-[85%] left-0 w-44 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-100 dark:border-slate-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a
                  href="#blog-list"
                  className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog List
                </a>
                <a
                  href="#blog-details"
                  className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog Details
                </a>
              </div>
            </div>

            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            <a href="#documentation" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentation</a>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Dark Mode Switcher */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="text-gray-700 dark:text-amber-400 hover:text-blue-600 dark:hover:text-amber-300 transition-colors p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {darkMode ? <Sun className="w-5 h-5 fill-current" /> : <Moon className="w-5 h-5 fill-current" />}
            </button>
            
            {/* Sign In */}
            <a 
              href="#signin" 
              className="px-6 py-2.5 text-blue-600 dark:text-blue-400 font-medium border border-blue-500 rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 transition-all text-sm"
            >
              Sign In
            </a>
            
            {/* Sign Up */}
            <a 
              href="#signup" 
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all shadow-sm text-sm"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-amber-400 p-2"
            >
              {darkMode ? <Sun className="w-5 h-5 fill-current" /> : <Moon className="w-5 h-5 fill-current" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 focus:outline-none p-1"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 font-medium text-gray-700 dark:text-gray-200">
            <a href="#home" className="block px-3 py-2 text-blue-600 dark:text-blue-400 rounded-md bg-blue-50 dark:bg-slate-800">Home</a>
            <a href="#about" className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md">About</a>
            <a href="#services" className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md">Services</a>
            <a href="#portfolio" className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md">Portfolio</a>
            
            <div>
              <button
                onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md text-left"
              >
                <span>Blog</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileBlogOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''}`} />
              </button>
              {mobileBlogOpen && (
                <div className="pl-6 pr-3 py-1 space-y-1 bg-gray-50 dark:bg-slate-800/60 rounded-md mt-1">
                  <a href="#blog-list" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">Blog List</a>
                  <a href="#blog-details" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600">Blog Details</a>
                </div>
              )}
            </div>

            <a href="#contact" className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md">Contact</a>
            <a href="#documentation" className="block px-3 py-2 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md">Documentation</a>
            
            <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-3">
              <a 
                href="#signin" 
                className="w-full text-center py-2.5 text-blue-600 dark:text-blue-400 border border-blue-500 rounded-md font-medium text-sm"
              >
                Sign In
              </a>
              <a 
                href="#signup" 
                className="w-full text-center py-2.5 bg-blue-600 text-white rounded-md font-medium text-sm"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}