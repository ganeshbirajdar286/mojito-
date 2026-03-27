import gsap from "gsap"
import {ScrollTrigger,SplitText} from "gsap/all"
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero1"
import Cocktails from "./components/Cocktails"

gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {
   

  return (
    <>
    <Navbar/>
    <Hero/>
    <Cocktails/>
    </>
  )
}

export default App
