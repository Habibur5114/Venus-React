import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/layout/About';
import Hero from './components/layout/Hero';
import Navbar from './components/layout/Navbar';
import Services from './components/layout/Services';
import Stats from './components/layout/Stats';
import Portfolio from './components/layout/Portfolio';
import Testimonial from './components/layout/Testimonial';
import LatestBlogNews from './components/layout/LatestBlogNews';
import Footer from './components/layout/Footer';
import DashNavbar from './components/admin/layout/Navbar';

// ১. পাবলিক ল্যান্ডিং পেজ কম্পোনেন্ট
function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="testimonials">
          <Testimonial />
        </section>
        <section id="blog">
          <LatestBlogNews />
        </section>
      </main>
      <Footer />
    </div>
  );
}

// ২. অ্যাডমিন ড্যাশবোর্ড লেআউট কম্পোনেন্ট
function AdminDashboard() {
  return (
    <div>
      <DashNavbar />
    
    </div>
  );
}

// ৩. মেইন App রাউটার
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* মেইন ওয়েবসাইট: http://localhost:5173/ */}
        <Route path="/" element={<HomePage />} />

        {/* অ্যাডমিন প্যানেল: http://localhost:5173/admin */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;