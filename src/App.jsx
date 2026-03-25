import gsap from "gsap"
import {ScrollTrigger,SplitText} from "gsap/all"
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/hero"

gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {
   

  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default App
