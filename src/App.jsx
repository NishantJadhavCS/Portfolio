import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
