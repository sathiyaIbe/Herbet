/* eslint-disable */
'use client';
import {gsap} from "gsap";
import { motion } from "framer-motion";
import {  useEffect, useRef, useState } from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger,Observer);

const Work = () => {

useEffect(()=>{
    const contextCreate=gsap.context(()=>{
        let sections = document.querySelectorAll("section"),
        images = document.querySelectorAll(".bg"),
        headings = gsap.utils.toArray(".section-heading"),
        outerWrappers = gsap.utils.toArray(".outer"),
        innerWrappers = gsap.utils.toArray(".inner"),
        // splitHeadings = headings.map(heading => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" })),
        currentIndex = -1,
        wrap = gsap.utils.wrap(0, sections.length),
        animating;
      
      gsap.set(outerWrappers, { yPercent: 100,  });
      gsap.set(innerWrappers, { yPercent: -100});
      
      function gotoSection(index, direction) {
        index = wrap(index); // make sure it's valid
        console.log(index)
        animating = true;
        let fromTop = direction === -1,
            dFactor = fromTop ? -1 : 1,
            tl = gsap.timeline({
              defaults: { duration: 0.75,  ease: [0.76, 0, 0.24, 1] },
              onComplete: () =>{ animating = false}
            });
        if (currentIndex >= 0) {
          // The first time this function runs, current is -1
          gsap.set(sections[currentIndex], { zIndex: 0 });
          tl.to(images[currentIndex], { yPercent: -15 * dFactor,opacity:0.5,scale:0.9 })
            .set(sections[currentIndex], { autoAlpha: 0 });

        }
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
            yPercent: i => i ? -100 * dFactor : 100 * dFactor
          }, { 
            yPercent: 0 
          }, 0)

         .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)

        //   .fromTo(splitHeadings[index].chars, { 
        //       autoAlpha: 0, 
        //       yPercent: 150 * dFactor
        //   }, {
        //       autoAlpha: 1,
        //       yPercent: 0,
        //       duration: 1,
        //       ease: "power2",
        //       stagger: {
        //         each: 0.02,
        //         from: "random"
        //       }
        //     }, 0.2);
                console.log(outerWrappers[index])
                if (currentIndex >= 0) {
        tl.to(images[currentIndex], {opacity:1,scale:1},0.75)
                }
        currentIndex = index;
      }
      function gotoSection1(index, direction) {
        index = wrap(index); // make sure it's valid
        animating = true;
        let fromTop = direction === -1,
            dFactor = fromTop ? -1 : 1,
            tl = gsap.timeline({
              defaults: { duration: 0.5, ease: "power1.inOut" },
              onComplete: () => animating = false
            });
        if (currentIndex >= 0) {
          // The first time this function runs, current is -1
          gsap.set(sections[currentIndex], { zIndex: 0 });
          tl.to(images[currentIndex], { yPercent: -15 * dFactor })
            .set(sections[currentIndex], { autoAlpha: 0 });
        }
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
            yPercent: i => i ? -100 * dFactor : 100 * dFactor
          }, { 
            yPercent: 0 
          }, 0)
          .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        //   .fromTo(splitHeadings[index].chars, { 
        //       autoAlpha: 0, 
        //       yPercent: 150 * dFactor
        //   }, {
        //       autoAlpha: 1,
        //       yPercent: 0,
        //       duration: 1,
        //       ease: "power2",
        //       stagger: {
        //         each: 0.02,
        //         from: "random"
        //       }
        //     }, 0.2);
      
        currentIndex = index;
      }
      
      Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 10,
        preventDefault: true
      });
      
      gotoSection(0, 1);

    })
    return ()=>contextCreate.revert();

})


  return (
    <div className="bg-black">
        <header className="fixed ">
  <div>Animated Sections</div>
  <div><a href="https://codepen.io/BrianCross/pen/PoWapLP">Original By Brian</a></div>
</header>
<div className="fixed  side_contianer flex flex-col p-3  gap-2"> 
<p>◯</p>
<p>◯</p>
<p>◯</p>
<p>◯</p>
<p>◯</p>
<p>◯</p>


</div>
{/* <div className="bg-black min-h-screen text-white">sdaasdfdfd</div> */}
<section className="first section1 ">
  <div className="outer bg-black">
    <div className="inner bg-black">
      <div className="bg one ">
        <h2 className="section-heading">Scroll down</h2>
      </div>
    </div>
  </div>

</section>
<section className="second section1">
  <div className="outer">
    <div className="inner bg-black">
      <div className="bg">
        <h2 className="section-heading">Animated with GSAP</h2>
      </div>
    </div>
  </div>
</section>

<section className="third section1">
  <div className="outer">
    <div className="inner bg-black">
      <div className="bg">
        <h2 className="section-heading">GreenSock</h2>
      </div>
    </div>
  </div>
</section>

<section className="fourth section1">
  <div className="outer">
    <div className="inner bg-black">
      <div className="bg">
        <h2 className="section-heading">Animation platform</h2>
      </div>
    </div>
  </div>
</section>
<section className="fifth section1">
  <div className="outer">
    <div className="inner bg-black">
      <div className="bg">
        <h2 className="section-heading">Keep scrolling</h2>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Work