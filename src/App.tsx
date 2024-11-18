import { Button } from "./components/ui/button"
import HyperText from "./components/ui/hyper-text"
import Contact from "./components/ux/Contact"
import Experiences from "./components/ux/Experiences"
import Hero from "./components/ux/Hero"
import Navbar from "./components/ux/Navbar"
import Projects from "./components/ux/Projects"

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-black to-neutral-800">
        <Hero />
        <Projects />
        <Experiences />
        <Contact />
      </div>
    </div>
  )
}

export default App
