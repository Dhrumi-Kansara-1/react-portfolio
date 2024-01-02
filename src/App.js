import Eduction from "./components/Eduction"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="bg-[#1C1C27] w-screen h-screen text-white overflow-x-hidden ">
      <Navbar />
      <div className="mt-28">
        <div className="mb-10">
          <Hero />
        </div>
        <div class="linear-gradient flex flex-col">
          <Skills />
          <Experience />
        </div> 
          <Projects />
          <Eduction />
      </div>
    </div>
  )
}

export default App
