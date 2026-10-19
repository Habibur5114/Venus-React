import React from 'react';

const blogPosts = [
  {
    id: 1,
    tag: 'Pricing',
    title: 'Business from the brink of ruin by optimizing our website....',
    date: '08 Nov 2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    tag: 'Pricing',
    title: 'The work is top-notch and I consistently outrank all my...',
    date: '08 Nov 2024',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    tag: 'Pricing',
    title: 'Grow my business through organic search and marketing...',
    date: '08 Nov 2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', // Replace with your 3D cartoon avatar image
  },
];

export default function LatestBlogNews() {
  return (
    <section id="blog" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 dark:bg-slate-900 transition-colors duration-300 flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2851] tracking-tight dark:text-white">
            Latest blog &amp; news
          </h2>
          <a
            href="#more"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0f2851] hover:text-blue-600 transition-colors duration-200"
          >
            <span className="dark:text-white">View More</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 dark:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col">
              {/* Card Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Floating Tag */}
                <span className="absolute top-3.5 left-3.5 bg-[#2563eb] text-white text-xs font-medium px-3 py-1 rounded-md shadow-sm">
                  {post.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="pt-5 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-snug dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium text-slate-500 dark:text-white">
                  {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}