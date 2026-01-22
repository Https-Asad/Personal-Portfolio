import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Certificate from "./components/certificates"

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificate/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
