/* eslint-disable */
'use client';
import {gsap} from "gsap";
import { motion } from "framer-motion";

import {  useEffect, useRef, useState } from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin,MotionPathPlugin,CSSRulePlugin } from 'gsap/all';
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,CSSRulePlugin);

const Gallery = () => {
  useEffect(()=>{
    // let rule = CSSRulePlugin.getRule(".reveal:after");
    // const t111=gsap.timeline({
    //   scrollTrigger:{
    //     trigger:'#gallery',
    //     start:"top center",
    //     end:"top center",
    //     markers:true,
    //     toggleActions: "restart none none reset",

    //   }
    // })
    // .set(".reveal", { autoAlpha: 1 })

    // .from(".reveal",  {
    //   xPercent: -100,
    //   ease: "easeOut",
    //   duration:1.5
    // })
    // .from(".img1",  {
    //   xPercent: 100,
    //   scale: 1.3,
    //   delay: -1.5,
    //   ease: "easeOut",
    //   duration:1.5
    // });

    let cursorScale = document.querySelectorAll('.menus')
    var cursor = document.querySelector('.cursor')
         cursorScale.forEach(link => {
          link.addEventListener('mouseleave', () => {
              cursor.classList.remove('grow');
              cursor.classList.remove('grow-small');
          });
          link.addEventListener('mousemove', () => {
              cursor.classList.add('grow');
              if(link.classList.contains('small')){
                  cursor.classList.remove('grow');
                  cursor.classList.add('grow-small');
              }
          });
      });

    const t2=gsap.timeline({
      scrollTrigger:{
        trigger:'#main_gallery',
        start:"bottom bottom",
      }
      })
    var mySplitText = new SplitType(".gallery_texts"),
 
    lines=(mySplitText.words)

    t2.to(".gallery_text",{
      autoAlpha:1,
    })
  // .fromTo(lines,{opacity:0, y:80} , {duration: 1 ,opacity:1, y:0 ,  ease:"easeIn",stagger:0.1, delay:2.3, })
  .from(lines,{
    autoAlpha: 0,
      y:40,
    
      transform:'bottom',
      ease:"easeOut",
    
      stagger:0.05,
    })
  .to("#_0",{
    opacity:1,
    duration:0.08,
  },">")
  .fromTo("#_1",{
    x:-7,
  },{
    opacity:1,
    x:0,
    duration:0.08,
  },">").fromTo("#_2",{
    x:-5,
    
  
  },{
    x:0,
    opacity:1,
    duration:0.08,
  },).fromTo("#_3",{
    x:-5,
   
  
  },{
    x:0,
    opacity:1,
    duration:0.08,
  
  }).fromTo("#_4",{
    x:-5,
  },{
    x:0,
    opacity:1,
    duration:0.08,
  
  

    
})
  
  },[])
  
  return(
  <section  className="md:min-h-screen flex flex-col bg-[#463838]  gap-6"> 
    <div className="w-[90%] self-center" >
      <h1 className="gallery_header menus">Our Studio<span className="text-[#FFD551] font-black">/</span>
      </h1>
    </div>
    <div id="gallery" className="flex flex-col bg-[#]">
      <div className="flex  bg-[#]">
        {/* <div className="bg-[#fff] relative">
          <div className="reveal bg-[#000]">
        <img src="/gallery_1.png" className="w-2/3 img1 " alt="img"/>
        </div>
        </div> */}
        <img src="/gallery_1.png" className="w-2/3 menus " alt="img"/>

        <img src="/gallery_2.png" className="w-1/3 menus"  alt="img"/>

      </div>
      <div className="flex ">
        <img src="/gallery_3.png" className="w-1/3 menus" alt="img"/>
        <img src="/gallery_4.png" className="w-2/3 menus" alt="img"/>

      </div>
    </div>
    <div  id="main_gallery" className="w-[90%] flex flex-col self-center pt-6 pb-6">
<div className=" self-center w-[90%]">
      <span
     
    
      className="gallery_text  w-[80%]  ">
        <span className="gallery_texts min-w-[70%] menus">We’re forged in the heartbeat of Malaysia, proudly servicing a global portfolio of brands. &nbsp;
        <motion.svg  className="svg_01 menus" width="58" height="35" viewBox="0 0 58 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="_0" className="opacity-0" cx="17.1205" cy="17.1205" r="16.4699" stroke="#FFD551" strokeWidth="1.3012"/>

<circle id="_1" className="opacity-0" cx="23.0604" cy="17.1205" r="16.4699" stroke="#FFD551" strokeWidth="1.3012"/>
<circle id="_2" className="opacity-0" cx="29.0004" cy="17.1205" r="16.4699" stroke="#FFD551" strokeWidth="1.3012"/>
<circle id="_3" className="opacity-0" cx="34.9403" cy="17.1205" r="16.4699" stroke="#FFD551" strokeWidth="1.3012"/>
<circle id="_4" className="opacity-0" cx="40.8796" cy="17.1205" r="16.4699" stroke="#FFD551" strokeWidth="1.3012"/>
</motion.svg></span>
     
      </span>
    </div>
    </div>
  </section>
);
}
export default Gallery;
