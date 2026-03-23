import React from 'react'
import { navLinks } from '../constants'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function Navbar() {

  useGSAP(() => {

    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        toggleActions: "play none none reverse" // toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
      }
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        duration: 0.5,
        ease: "power1.inOut"
      }
    );

  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-t border-white/10">

      <div className="flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="w-6 h-6" />
          <p className="font-modern-negra text-lg">Velvet Pour</p>
        </a>

        {/* Links */}
        <ul className="flex items-center gap-10 text-white/80">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-white transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

      </div>

    </nav>
  )
}

export default Navbar