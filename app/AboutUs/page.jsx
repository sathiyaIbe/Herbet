'use client'
import React from 'react'
import { Gallery, Hero } from '../../sections'
import Footer from '../../components/Footer'
import {gsap} from "gsap";
import { motion } from "framer-motion";

import {  useEffect, useRef, useState } from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin,MotionPathPlugin } from 'gsap/all';
import SplitType from "split-type";
import Lenis from '@studio-freight/lenis';
import { fadeIn } from '../../utils/motion';
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);
function AboutUs() {
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

          const t1=  gsap.timeline({
                scrollTrigger:{
                    trigger:".first_container",
                    start:'top center',
                   
                }
              })  .to("#_10",{
                opacity:1,
                duration:0.08,
                delay:1,
              },)
              .fromTo("#_01",{
                y:30,
              },{
                opacity:1,
                y:0,
                duration:0.08,
              })
              .fromTo("#_02",{
                y:30,
                
              
              },{
                y:0,
                opacity:1,
                duration:0.08,
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
                duration:0.08,
              
              
            
                
            
              
              
            
                
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

        const t2=  gsap.timeline({
            scrollTrigger:{
                trigger:".second_container",
                start:'top center',
                delay:1,
            }
        })  .to("#_00",{
            opacity:1,
            duration:0.08,
            delay:1,
          },)
          .fromTo("#_11",{
            y:30,
          },{
            opacity:1,
            y:0,
            duration:0.08,
          })
          .fromTo("#_22",{
            y:30,
            
          
          },{
            y:0,
            opacity:1,
            duration:0.08,
          },).fromTo("#_33",{
            y:30,
           
          
          },{
            y:0,
            opacity:1,
            duration:0.08,
          
          })
       .fromTo("#_44",{
            y:30,
          },{
            y:0,
            opacity:1,
            duration:0.08,
          
          
        
            
        }).fromTo('.text_container_2',
            {
                y:30,
              },{
                y:0,
                autoAlpha:1,
                duration:0.08,
              
              
            
        },1).fromTo('.count_text_container_2',
        {
            y:30,
          },{
            y:0,
            autoAlpha:1,
            duration:0.08,
          
          
        
    },1)

    const t3=  gsap.timeline({
        scrollTrigger:{
            trigger:".third_container",
            start:'top center',
           
        }
    })  .to("#_000",{
        opacity:1,
        duration:0.08,
        delay:1,
      },)
      .fromTo("#_111",{
        y:30,
      },{
        opacity:1,
        y:0,
        duration:0.08,
      },">")
      .fromTo("#_222",{
        y:30,
        
      
      },{
        y:0,
        opacity:1,
        duration:0.08,
      },).fromTo("#_333",{
        y:30,
       
      
      },{
        y:0,
        opacity:1,
        duration:0.08,
      
      })
   .fromTo("#_444",{
        y:30,
      },{
        y:0,
        opacity:1,
        duration:0.08,
      
      
    
        
    }).fromTo('.text_container_3',
        {
            y:30,
          },{
            y:0,
            autoAlpha:1,
            duration:0.08,
          
          
        
    },1).fromTo('.count_text_container_3',
    {
        y:30,
      },{
        y:0,
        autoAlpha:1,
        duration:0.08,
      
      
    
},1)

            var points = gsap.utils.toArray('.point');
            var points1 = gsap.utils.toArray('.point1');

            
            var height = 100 * points.length;

            // function goToSection(i) {
            //   gsap.to(window, {
            //     scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
            //     duration: 0.85
            //   });
            // }
            // points.forEach((eachPanel, i) => {
            //   // const mainAnim = gsap.timeline({ paused: true });
            
            //   ScrollTrigger.create({
            //     trigger: eachPanel,
            //     onEnter: () => goToSection(i)
            //   });
            
            //   ScrollTrigger.create({
            //     trigger: eachPanel,
            //     start: "bottom bottom",
            //     onEnterBack: () => goToSection(i)
            //   });
            // });
            
            var tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ".wrapper",
                  start: "top top",
                  // end: "+="+height+"%",
                  scrub: 1,
                //  pin:true,
                  // snap: 1/(points.length-1)*1.5,

                }
              })
ScrollTrigger.create( {
                  trigger: ".first_container",
                  start: "top bottom",
                  end:"bottom bottom",
                  scrub: true,
                  id: "points",
                 snap: {
                  snapTo: 1,
                  duration: 0.3,
                  delay: 0,
                },

                
              })

              ScrollTrigger.create( {
                trigger: ".second_container",
                start: "top bottom",
                end:"bottom bottom",
                scrub: true,
                id: "points",
               snap: {
                snapTo: 1,
                duration: 0.3,
                delay: 0,
              },

              
            })
            ScrollTrigger.create( {
              trigger: ".third_container",
              start: "top bottom",
              end:"bottom bottom",
              scrub: true,
              id: "points",
             snap: {
                   snapTo: 1,
                   duration: 0.3,
                   delay: 0,
                 },
                 toggleActions: "play restart none none"
            
            
          })
              
           
                        const pin = gsap.timeline(
               
                {
          
                  scrollTrigger: {
                    trigger: ".fourth_container",
                    pin: true,
                    scrub:1,
                    start: "top top",
                    end: "+=0%",
                    
                  },
          
                })
              // .to('#green', {
              //   duration:10,
              //   repeat:0,
              //  motionPath:{
              //   path:'#path',
              //   align:"#path",
              //   alignOrigin:[0.5,0.5],
              //  },
              //  transformOrigin: "50% 50%",
              // },0) .to('#green1', {
              //   duration:10,
              //   repeat:0,
              //  motionPath:{
              //   path:'#path',
              //   align:"#path",
              //   alignOrigin:[0.5,0.5],
              //  },
              //  transformOrigin: "50% 50%",
              // },0)

              
              var mySplitText = new SplitType(".header_profile")
 
             var lines=(mySplitText.words)
              const t5=gsap.timeline({
                scrollTrigger:{
                  trigger:'#main2',
                  start:"top top",
                 
                  
                }
                },)
                const t55=gsap.timeline({
                  scrollTrigger:{
                    trigger:'#main2',
                    start:"top center",
                  
                  }
                  },)
                .to(".hide_profile_text",{
                  autoAlpha:1,
                },0)
              
              .from(lines,{
                autoAlpha: 0,
                  y:40,
                
                  transform:'bottom',
                  ease:"easeOut",
                
                  stagger:0.05,
                })
                return () => {
                  {/* A return function for killing the animation on component unmount */ }
                  t5.kill();
                  pin.kill();
                  tl.kill();
                };
  
  
    
    })
    return ()=>contextCreate.revert();
      
      
      },[])
  return (
    <div className='philosophi'>
         <Hero />
       <section id="about" className=' flex flex-col bg-[#463838] philosophie'>
            <div className='contianer_about   flex flex-col wrapper'>
                <div className=' first_container min-h-screen flex gap-11 flex flex-col point justify-center ' >
                    <div className=' flex justify-center self-center w-[70%] gap-11 '>
                      <div className='flex flex-col justify-start'>
            <h1 className='count count_text_container_1 '>01</h1>
            </div>
            {/* <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_4' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_3' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_2' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_1' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_0' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg> */}
 <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_04' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_03' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_02' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_01' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_10' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>
<div className='flex flex-col justify-center gap-4 text_container text_container_1  '>

    <h1 className='container_about_header'>
    The Consultancy Approach
    </h1>
    <p className='container_about_description'>
    Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.

    </p>
   
    </div>
    </div>
</div>

 <div className='second_container min-h-screen flex gap-11 flex flex-col justify-center  point point1 philosophie1' >
                    <div className=' flex justify-center self-center w-[70%] gap-11 '>
                      <div className='flex flex-col justify-start'>
                      <h1 className='count count_text_container_2 '>02</h1>
            </div>
            <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_44' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_33' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_22' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_11' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_00' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>
<div className='flex flex-col justify-center gap-4  text_container_2  '>

    <h1 className='container_about_header'>
    Communicating From Within
    </h1>
    <p className='container_about_description'>
    In a world where brand identity is paramount, the essence of messaging from within the brand cannot be overstated. It's vital for brands to cultivate their messaging from their core, ensuring authenticity remains consistent and unambiguous.
    </p>
   
    </div>
    </div>
</div>
<div className='third_container min-h-screen flex gap-11 flex flex-col justify-center point point1' >
                    <div className=' flex justify-center self-center w-[70%] gap-11 '>
                      <div className='flex flex-col justify-start'>
                      <h1 className='count count_text_container_3 '>03</h1>
            </div>
            <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_444' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_333' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_222' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_111' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_000' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>
<div className='flex flex-col justify-center gap-4  text_container_3  '>


    <h1 className='container_about_header'>
    Hollistic Guardianship
    </h1>
    <p className='container_about_description'>
    Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.
    </p>
   
    </div>
    </div>
</div> 
            </div>
        </section>
        <section className='fourth_container min-h-screen flex gap-11  bg-[#463838] flex flex-col justify-center point point1' >
          <div className='flex justify-between self-center w-[90%] '>
                    <div className=' flex justify-center self-center w-[60%] gap-11 '>
                      <div className='flex flex-col justify-start'>
                      <h1 className='count count_text_container_3 '>04</h1>
            </div>
           
<div className='flex flex-col justify-center gap-4  text_container_3  '>


    <h1 className='container_about_header'>
    Identity    </h1>
    <p className='container_about_description'>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
   
    </div>
   


    </div>
    <div  id="green" className="circle_main_container flex  justify-end w-fit self-center  w-[60%] items-center relative left-[40%]   ">
          <div   className="circle_container_new circle3  relative left-[15%]  ">
            <h1   className="circle_text_new self-center ">Identity</h1>
          </div>
          <div   className='flex flex-col gap-6'>
          <div  className="circle_container_new circle3  relative   ">
            <h1   className="circle_text_new self-center ">Identity</h1>
          </div>
          <div className="circle_container_new circle3  relative   ">
            <h1   className="circle_text_new self-center "></h1>
          </div>
          </div>
          <div id="gree" className="circle_container_new circle3  relative left-[-15%]  ">
            <h1   className="circle_text_new self-center "></h1>
          </div>
       
        </div>

    </div>
</section> 
<section id="main2" className='min-h-screen flex flex-col justify-center bg-[#463838] pb-11'>
<div className='w-[80%] flex flex-col gap-11 self-center'>
  <div className='hide_profile_text self-center'>
  <h1 className='header_profile '>
  Herbet is spearheaded by its founding members 
together with a global and diverse team.
  </h1>
  </div>
  <div className='flex justify-center  gap-4'>
    <motion.div
       variants={fadeIn("up", "tween",.2,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} className='flex flex-col'>
      <img src='/profile_1.png' className='' alt="pic"/>
      <h1 className='card_header'>
      Saravanan Sahadevan
      </h1>
      <p className='card_description'>
      CEO & FOUNDER
      </p>
    </motion.div>
    <motion.div
       variants={fadeIn("up", "tween",.3,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} className='flex flex-col'>
      <img src='/profile_1.png' className='' alt="pic"/>
      <h1 className='card_header'>
      Amir Norman
      </h1>
      <p className='card_description'>
      COO & CO-FOUNDER
      </p>
    </motion.div>
    <motion.div
       variants={fadeIn("up", "tween",.4,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} className='flex flex-col'>
      <img src='/profile_1.png' className='' alt="pic"/>
      <h1 className='card_header'>
      Farra Khalili
      </h1>
      <p className='card_description'>
      CCO 
      </p>
    </motion.div>
  </div>
</div>
</section>
<Gallery />
        <Footer />
    </div>
  )
}

export default AboutUs