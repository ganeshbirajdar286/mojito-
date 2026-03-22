import gsap from "gsap"
import {ScrollTrigger,SplitText} from "gsap/all"
import './App.css'

gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {
   

  return (
    <>
     <div className="flex-center h-[100vh]">
       <h1 className="flex-center text-4xl text-indigo-500">GANESH</h1>
     </div>

    </>
  )
}

export default App
