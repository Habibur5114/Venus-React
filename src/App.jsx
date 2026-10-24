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


function AdminDashboard() {
  return (
    <div>
      <DashNavbar />
    
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<HomePage />} />

        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;