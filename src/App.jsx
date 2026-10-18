import About from './components/layout/About';
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'
import Stats from './components/layout/Stats';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Stats/>
      <About/>
    </div>
  )
}

export default App