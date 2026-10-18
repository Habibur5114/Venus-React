import About from './components/layout/About';
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'
import Services from './components/layout/Services';
import Stats from './components/layout/Stats';
import Portfolio from './components/layout/Portfolio';


function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Stats/>
      <About/>
      <Services/>
      <Portfolio/>
    </div>
  )
}

export default App