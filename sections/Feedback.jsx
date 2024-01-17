/* eslint-disable */
'use client';
import {gsap} from "gsap";
import { motion } from "framer-motion";

import {  use, useEffect, useRef, useState } from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from 'gsap/all';
import SplitType from "split-type";
import { Observer } from "gsap/Observer";
import Lenis from '@studio-freight/lenis';
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,Observer);
const Feedback = () => {
  const newRef=useRef(null)
  let animating1=false
  let targetElement1=0
  useEffect(()=>{
    // gsap.to('.resourse_texts', {opacity:0})
    
    const lenis = new Lenis({
 

    })
  
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
    const contextCreate=gsap.context(()=>{

        var tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".wrapper",
              start: "top top",
              scrub: 1,
            }
          })
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
          let mm = gsap.matchMedia();
         
          const section_2 = document.getElementById("checkConMain");



          mm.add("(max-width:768px)",()=>{
            const newT1s=gsap.timeline({
              scrollTrigger:{
                trigger:'#checkCon',
                start: "top top",
                end:'bottom top',
                 pin:true,
              }
            })
            
            const newT1Center=gsap.timeline({
              scrollTrigger:{
                trigger:'#checkCon',
                start: "top 40%",
                ease:'power4.easeeOut'
                // toggleActions:'restart none none reset '

              //  // snap: {
                //   snapTo: 0.2,
                //   duration: 0.3,
                //   delay: 0,
                //   },
              }
            }).to("#_10",{
              opacity:1,
              duration:0.05,
              delay:0.03,
            },)
            .fromTo("#_01",{
              y:30,
            },{
              opacity:1,
              y:0,
              duration:0.05,
            })
            .fromTo("#_02",{
              y:30,
              
            
            },{
              y:0,
              opacity:1,
              duration:0.05,
            },).fromTo("#_03",{
              y:30,
             
            
            },{
              y:0,
              opacity:1,
              duration:0.05,
            
            })
         .fromTo("#_04",{
              y:30,
            },{
              y:0,
              opacity:1,
              duration:0.05, 
          }).fromTo('.text_container_1',
              {
                  y:30,
                },{
                  y:0,
                  autoAlpha:1,
                  duration:0.08,
                
                
              
          },0.3).fromTo('.count_text_container_1',
          {
              y:30,
            },{
              y:0,
              autoAlpha:1,
              duration:0.08,
              

          
      },0.3).to({},{
        onComplete:()=>{animating1=true}
      })
      // Second Trigger
const newT1CenterSecond=gsap.timeline({
  scrollTrigger:{
    trigger:newRef.current,
    start: "top 0%",
    end: "top -40%",

  //  // snap: {
    //   snapTo: 0.2,
    //   duration: 0.3,
    //   delay: 0,
    //   },

    onLeave:()=>{
      const tssFirst=gsap.timeline({
      
      })

tssFirst.to("#firstCircleCont1",{
  yPercent:-100,
  ease:"easeOut",

 }).to("#secondCircleCont1",{
  yPercent:-100,
  ease:"easeOut",
  opacity:1,
 },0.1).to("#_00",{
  opacity:1,
  duration:0.05,
  delay:0.03,
},)
.fromTo("#_11",{
  y:30,
},{
  opacity:1,
  y:0,
  duration:0.05,
},">")
.fromTo("#_22",{
  y:30,
  

},{
  y:0,
  opacity:1,
  duration:0.05,
},).fromTo("#_33",{
  y:30,
 

},{
  y:0,
  opacity:1,
  duration:0.05,

})
.fromTo("#_44",{
  y:30,
},{
  y:0,
  opacity:1,
  duration:0.05,



  
}).fromTo('.text_container_2',
  {
      y:30,
    },{
      y:0,
      autoAlpha:1,
      duration:0.08,
    
    
  
},0.5).fromTo('.count_text_container_2',
{
  y:30,
},{
  y:0,
  autoAlpha:1,
  duration:0.08,



},0.5)
    },
    onEnterBack:()=>{
      const tss=gsap.timeline()
          tss.to("#secondCircleCont1",{
            yPercent:0,
            ease:"easeOut",
            opacity:1,
           }).to("#firstCircleCont1",{
            yPercent:0,
            ease:"easeOut",
            
           },0.1).to("#_00",{          
            opacity:0,
          },0)
          .to("#_11",{          
            opacity:0,
          },0)
          .to("#_22",{          
            opacity:0,
          },0).to("#_33",{          
            opacity:0,
          },0)
          .to("#_44",{          
            opacity:0,
          },0).to('.text_container_2',
          {          
            autoAlpha:0,
          },0).to('.count_text_container_2',
          {          
            autoAlpha:0,
          },0)
           
        
    }
  }
})


// Third Trigger
const newT1CenterThird=gsap.timeline({
  scrollTrigger:{
    trigger:newRef.current,
    start: "top 0%",
    end: "top -80%",

  //  // snap: {
    //   snapTo: 0.2,
    //   duration: 0.3,
    //   delay: 0,
    //   },

    onLeave:()=>{
      const tssSecond=gsap.timeline()
      tssSecond.to("#secondCircleCont1",{
                yPercent:-200,
                ease:"easeOut",
    
               }).to("#thirdCircleCont1",{
                yPercent:-200,
                ease:"easeOut",
                
               },0.1) .to("#_000",{
                opacity:1,
                duration:0.05,
                delay:0.03,
              },)
              .fromTo("#_111",{
                y:30,
              },{
                opacity:1,
                y:0,
                duration:0.05,
              },">")
              .fromTo("#_222",{
                y:30,
                
              
              },{
                y:0,
                opacity:1,
                duration:0.05,
              },).fromTo("#_333",{
                y:30,
               
              
              },{
                y:0,
                opacity:1,
                duration:0.05,
              
              })
           .fromTo("#_444",{
                y:30,
              },{
                y:0,
                opacity:1,
                duration:0.05,
              
              
            
                
            }).fromTo('.text_container_3',
                {
                    y:30,
                  },{
                    y:0,
                    autoAlpha:1,
                    duration:0.08,
                  
                  
                
            },0.5).fromTo('.count_text_container_3',
            {
                y:30,
              },{
                y:0,
                autoAlpha:1,
                duration:0.08,
              
              
            
        },0.5).to("#secondCircleCont1",{
         opacity:0,

         })
    },
    onEnterBack:()=>{
      const tss=gsap.timeline()
            tss.to("#thirdCircleCont1",{
              yPercent:-100,
              ease:"easeOut",
              opacity:1,
             })
             .to("#secondCircleCont1",{
              yPercent:-100,
              ease:"easeOut",
              opacity:1,
             },0.1).to("#_000",{          
              opacity:0,
            },0)
            .to("#_111",{          
              opacity:0,
            })
            .to("#_222",{          
              opacity:0,
            },0).to("#_333",{          
              opacity:0,
            },0)
            .to("#_444",{          
              opacity:0,
            },0).to('.text_container_3',
            {          
              autoAlpha:0,
            },0).to('.count_text_container_3',
            {          
              autoAlpha:0,
            },0)
        
    }
  }
})

            return () => {
              {/* A return function for killing the animation on component unmount */ }
              
              newT1s.kill();

            };
          })
          mm.add("(min-width:768px)",()=>{
            const newT1s=gsap.timeline({
              scrollTrigger:{
                trigger:'#checkCon',
                start: "top top",
                end:"+=160%",
                // end:"bottom top",
                 pin:true,
                //  scrub:true,
                // snap: {
                //   snapTo: 0.2,
                //   duration: 0.3,
                //   delay: 0,
                //   },
              }
            })
            
            const newT1Center=gsap.timeline({
              scrollTrigger:{
                trigger:'#checkCon',
                start: "top 0%",
                  // scrub:true,
                // toggleActions:'restart none none reset '
              //  // snap: {
                //   snapTo: 0.2,
                //   duration: 0.3,
                //   delay: 0,
                //   },
              }
            }).to("#_10",{
              opacity:1,
              duration:0.05,
              delay:0.3,
            },)
            .fromTo("#_01",{
              y:30,
            },{
              opacity:1,
              y:0,
              duration:0.05,
            })
            .fromTo("#_02",{
              y:30,
              
            
            },{
              y:0,
              opacity:1,
              duration:0.05,
            },).fromTo("#_03",{
              y:30,
             
            
            },{
              y:0,
              opacity:1,
              duration:0.08,
            
            })
         .fromTo("#_04",{
              y:30,
            },{
              y:0,
              opacity:1,
              duration:0.05, 
          }).fromTo('.text_container_1',
              {
                  y:30,
                },{
                  y:0,
                  autoAlpha:1,
                  duration:0.08,
                
                
              
          },0.3).fromTo('.count_text_container_1',
          {
              y:30,
            },{
              y:0,
              autoAlpha:1,
              duration:0.08,
              

          
      },0.3)

// Second Trigger
const newT1CenterSecond=gsap.timeline({
  scrollTrigger:{
    trigger:newRef.current,
    start: "top 0%",
    end: "top -60%",

  //  // snap: {
    //   snapTo: 0.2,
    //   duration: 0.3,
    //   delay: 0,
    //   },

    onLeave:()=>{
      const tssFirst=gsap.timeline()
tssFirst.to("#firstCircleCont",{
  yPercent:-100,
  ease:"easeOut",

 }).to("#secondCircleCont",{
  yPercent:-100,
  ease:"easeOut",
  
 },0.1).to("#_00",{
  opacity:1,
  duration:0.05,
  delay:0.03,
},)
.fromTo("#_11",{
  y:30,
},{
  opacity:1,
  y:0,
  duration:0.05,
})
.fromTo("#_22",{
  y:30,
  

},{
  y:0,
  opacity:1,
  duration:0.05,
},).fromTo("#_33",{
  y:30,
 

},{
  y:0,
  opacity:1,
  duration:0.05,

})
.fromTo("#_44",{
  y:30,
},{
  y:0,
  opacity:1,
  duration:0.05,



  
}).fromTo('.text_container_2',
  {
      y:30,
    },{
      y:0,
      autoAlpha:1,
      duration:0.08,
    
    
  
},0.5).fromTo('.count_text_container_2',
{
  y:30,
},{
  y:0,
  autoAlpha:1,
  duration:0.08,



},0.5)
    },
    onEnterBack:()=>{
      const tss=gsap.timeline()
          tss.to("#secondCircleCont",{
            yPercent:0,
            ease:"easeOut",

           }).to("#firstCircleCont",{
            yPercent:0,
            ease:"easeOut",
            
           },0.1).to("#_00",{          
            opacity:0,
          },0)
          .to("#_11",{          
            opacity:0,
          },0)
          .to("#_22",{          
            opacity:0,
          },0).to("#_33",{          
            opacity:0,
          },0)
          .to("#_44",{          
            opacity:0,
          },0).to('.text_container_2',
          {          
            autoAlpha:0,
          },0).to('.count_text_container_2',
          {          
            autoAlpha:0,
          },0)
           
        
    }
  }
})

const newT1CenterThird=gsap.timeline({
  scrollTrigger:{
    trigger:newRef.current,
    start: "top 0%",
    end: "top -120%",

  //  // snap: {
    //   snapTo: 0.2,
    //   duration: 0.3,
    //   delay: 0,
    //   },

    onLeave:()=>{
      const tssSecond=gsap.timeline()
      tssSecond.to("#secondCircleCont",{
                yPercent:-200,
                ease:"easeOut",
    
               }).to("#thirdCircleCont",{
                yPercent:-200,
                ease:"easeOut",
                
               },0.1) .to("#_000",{
                opacity:1,
                duration:0.05,
                delay:0.03,
              },)
              .fromTo("#_111",{
                y:30,
              },{
                opacity:1,
                y:0,
                duration:0.05,
              },">")
              .fromTo("#_222",{
                y:30,
                
              
              },{
                y:0,
                opacity:1,
                duration:0.05,
              },).fromTo("#_333",{
                y:30,
               
              
              },{
                y:0,
                opacity:1,
                duration:0.05,
              
              })
           .fromTo("#_444",{
                y:30,
              },{
                y:0,
                opacity:1,
                duration:0.05,
              
              
            
                
            }).fromTo('.text_container_3',
                {
                    y:30,
                  },{
                    y:0,
                    autoAlpha:1,
                    duration:0.05,
                  
                  
                
            },0.5).fromTo('.count_text_container_3',
            {
                y:30,
              },{
                y:0,
                autoAlpha:1,
                duration:0.05,
              
              
            
        },0.5).to("#secondCircleCont",{
          opacity:0,
        })
    },
    onEnterBack:()=>{
      const tss=gsap.timeline()
            tss.to("#secondCircleCont",{
              opacity:1,
            })
            
            .to("#thirdCircleCont",{
              yPercent:-100,
              ease:"easeOut",
  
             },0.1).to("#secondCircleCont",{
              opacity:1,
              yPercent:-100,
              ease:"easeOut",
              
             },0.1).to("#_000",{          
              opacity:0,
            },0)
            .to("#_111",{          
              opacity:0,
            },0)
            .to("#_222",{          
              opacity:0,
            },0).to("#_333",{          
              opacity:0,
            },0)
            .to("#_444",{          
              opacity:0,
            },0).to('.text_container_3',
            {          
              autoAlpha:0,
            },0).to('.count_text_container_3',
            {          
              autoAlpha:0,
            },0)
        
    }
  }
})

            return () => {
              {/* A return function for killing the animation on component unmount */ }
              
              newT1s.kill();

            };
          })
            return () => {
              {/* A return function for killing the animation on component unmount */ }
              tl.kill();

            };



})
return ()=>contextCreate.revert();
  
  
  },[])

  return(
  <section>

                <div id="checkConMain" className='min-h-[200vh]  md:min-h-[250vh]' >
                  <div ref={newRef} id="checkCon" className='newCont  min-h-[100vh] m-6 flex   justify-center     '>
                  <div className='flex flex-col h-[100vh]  self-center overflow-hidden '>
<div id="firstCircleCont"  className=' self-center hidden md:block'>
<div className="flex flex-col">
<div  className=' flex flex-col  justify-center self-center  min-h-[100vh] w-[70%]  gap-11 '>
                      <div className='flex self-center  gap-11'>
                      <div className='flex flex-col justify-start menus small'>
            <h1 className='count count_text_container_1 '>01</h1>
            </div>

            
 <svg width="256" height="200" className='md:w-[400px] w-[200px] menus' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_04' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_03' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_02' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" strokeWidth="2.85008"/> 
<circle id='_01' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_10' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" strokeWidth="2.85008"/>
</svg>
<div className='flex flex-col justify-center gap-4 text_container text_container_1   '>

    <h1 className='container_about_header menus'>
    The Consultancy Approach
    </h1>
    <p className='container_about_description menus small'>
    Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.
    </p>
   
    </div>
    </div>
    </div>
    </div>
    </div>
    <div id="firstCircleCont1" className=' min-h-[100vh] md:hidden  flex gap-11 flex flex-col  justify-center ' >
                    <div className=' flex justify-between  w-[95%] gap-11 '>
                      <div className='flex flex-col justify-start gap-6'>
            <h1 className='count count_text_container_1 '>01</h1>
            <h1 className='container_about_header'>
            The Consultancy Approach

    </h1>
    
            </div>
            
 <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_04' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_03' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_02' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" strokeWidth="2.85008"/> 
<circle id='_01' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_10' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" strokeWidth="2.85008"/>
</svg>

    </div>
    <div className='flex flex-col  gap-4 text_container  text_container_1  '>
<p className='container_about_description w-[90%] self-cente'>
Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.
</p>
 
   
   
    </div>
</div>

<div id="secondCircleCont" className=' self-center hidden md:block'>
  <div className="flex flex-col">
    <div  className=' flex flex-col  justify-center self-center  min-h-[100vh] w-[70%]  gap-11 '>
                      <div className='flex self-center  gap-11'>
                      <div className='flex flex-col justify-start menus small'>
            <h1 className='count count_text_container_2 '>02</h1>
            </div>

            
 <svg width="256" height="200" className='md:w-[400px] w-[200px] menus ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_44' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_33' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_22' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" strokeWidth="2.85008"/> 
<circle id='_11' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_00' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" strokeWidth="2.85008"/>
</svg>
<div className='flex flex-col justify-center gap-4 text_container text_container_2   '>

    <h1 className='container_about_header menus'>
    Communicating From Within
    </h1>
    <p className='container_about_description menus small'>
    In a world where brand identity is paramount, the essence of messaging from within the brand cannot be overstated. It's vital for brands to cultivate their messaging from their core, ensuring authenticity remains consistent and unambiguous.    </p>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div id="secondCircleCont1" className=' min-h-[100vh] md:hidden flex gap-11 flex flex-col point justify-center ' >
                    <div className=' flex justify-between  w-[95%] gap-11 '>
                      <div className='flex flex-col justify-start gap-6'>
            <h1 className='count count_text_container_1 '>02</h1>
            <h1 className='container_about_header'>
            Communicating From Within    </h1>
    
            </div>
            
 <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_44' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_33' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_22' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" strokeWidth="2.85008"/> 
<circle id='_11' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_00' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" strokeWidth="2.85008"/>
</svg>

    </div>
    <div className='flex flex-col  gap-4 text_container  text_container_1  '>
<p className='container_about_description w-[90%]'>
In a world where brand identity is paramount, the essence of messaging from within the brand cannot be overstated. It's vital for brands to cultivate their messaging from their core, ensuring authenticity remains consistent and unambiguous.</p>
 
    </div>
</div>
<div id="thirdCircleCont" className=' self-center hidden md:block'>
<div className="flex flex-col">

    <div  className=' flex flex-col justify-center self-center  min-h-[100vh] w-[70%]  gap-11 '>
                      <div className='flex self-center  gap-11'>
                      <div className='flex flex-col justify-start'>
            <h1 className='count count_text_container_3 menus small'>03</h1>
            </div>

            
 <svg width="256" height="200" className='md:w-[400px] w-[200px] menus ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_444' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_333' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_222' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" strokeWidth="2.85008"/> 
<circle id='_111' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_000' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" strokeWidth="2.85008"/>
</svg>
<div className='flex flex-col justify-center gap-4 text_container text_container_3   '>

    <h1 className='container_about_header menus'>
    Hollistic Guardianship
    </h1>
    <p className='container_about_description  menus small'>
    Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.

    </p>
   
    </div>
    </div>
    </div>
    </div>

    </div>
    <div id="thirdCircleCont1" className=' min-h-[100vh] md:hidden flex gap-11 flex flex-col point justify-center ' >
                    <div className=' flex justify-between w-[95%] gap-11 '>
                      <div className='flex flex-col justify-start gap-6'>
            <h1 className='count count_text_container_1 '>03</h1>
            <h1 className='container_about_header'>
            Hollistic Guardianship
    </h1>
    
            </div>
            
 <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_444' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_333' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_222' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" strokeWidth="2.85008"/> 
<circle id='_111' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" strokeWidth="2.85008"/>
<circle id='_000' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" strokeWidth="2.85008"/>
</svg>

    </div>
    <div className='flex flex-col  gap-4 text_container  text_container_1  '>
<p className='container_about_description w-[90%] '>
In a world where brand identity is paramount, the essence of messaging from within the brand cannot be overstated. It's vital for brands to cultivate their messaging from their core, ensuring authenticity remains consistent and unambiguous.
</p>
 
   
   
    </div>
</div>
    </div>
    </div>
</div>


  </section>
);
  }

export default Feedback;
