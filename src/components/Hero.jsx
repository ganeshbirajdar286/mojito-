import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import {useMediaQuery} from "react-responsive"
import { SplitText } from "gsap/all";

function hero() {
  const videoRef=useRef();
  const ismobile=useMediaQuery({maxWidth:767})
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars,words",
    });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });
  
    heroSplit.chars.forEach((char)=> char.classList.add("text-gradient"))

    gsap.from(heroSplit.chars,{
    yPercent:100,
    duration:0.8,
    ease:"expo.out",
    stagger:0.06
    })

    gsap.from(paragraphSplit.lines,{
      yPercent:100,
    duration:1.8,
    opacity:0,
    ease:"expo.out",
    stagger:0.06,
    delay:1,
    })

    gsap.timeline({
      scrollTrigger:{
        trigger:"#hero",
        start:"top top ", //"top top"
                            //  ↑     ↑
                            //  |     └── top of viewport
                            //  └──────── top of #hero
        end:"bottom top", 
        scrub:true,
      }
    })
    .to(".right-leaf",{y:200},0) //0 (VERY IMPORTANT)👉  start at beginning of timeline
    .to(".left-leaf",{y:-200},0)

     const startValue=ismobile?'top 50%':'center 60%';
     const endValue=ismobile?'120% top ':'bottom top';

     
	let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
   pin:true, // static the  video  
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};

  }, []);
  return (
   <>
    <div id="hero" className="noisy ">
      <h1 className="title">MOJITO </h1>
      <img
        src="images/hero-left-leaf.png"
        alt="left leaf"
        className="left-leaf"
      ></img>
      <img
        src="images/hero-right-leaf.png"
        alt="left leaf"
        className="right-leaf"
      ></img>

      <div className="body flex flex-row custom-range gap-10 px-6 md:px-16">
        <div className="content space-y-5 hidden  md:block">
          <p>Cool. Crisp. Classic.</p>
          <p className="subtitle">
            Sip the Spirit <br /> of Summer
          </p>
        </div>

        <div className="view-cocktails">
          <p className="subtitle">
            Every cocktail on our menu is a blend of premium ingredients,
            creative flair, and timeless recipes - designed to delight your
            senses.
          </p>
          <a href="#cocktails">View cocktails</a>
        </div>
      </div>
    </div>

    <div className="video absolute inset-0 ">
     <video
     ref={videoRef}
     src="/videos/output.mp4"
     muted
     playsInline // prevents fullscreen on mobile
     preload="auto"
     />
    </div>
   </>

  );
}

export default hero;
