'use client'
import React from 'react'
import { Gallery, Hero } from '../../sections'
import Footer from '../../components/Footer'
import {gsap} from "gsap";
import { motion } from "framer-motion";

import {  useEffect, useRef, useState } from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from 'gsap/all';
import SplitType from "split-type";
import { Observer } from "gsap/Observer";
import Lenis from '@studio-freight/lenis';
import { fadeIn } from '../../utils/motion';
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,Observer);
function AboutUs() {
  // const [targetElement,setTargerElement]=useState(0)
  let targetElement=0
  let targetElement1=0
  let animating1=false
  let animating2=false


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

              let mm = gsap.matchMedia();
             

              mm.add("(min-width:768px)",()=>{

                  const pin = gsap.timeline(
               
                {
          
                  scrollTrigger: {
                    trigger: ".fourth_container",
                    pin: true,
                    start: "top top",
                    end:"+=200%",
                    snap: {
                          snapTo: 0.2,
                          duration: 0.3,
                          delay: 0,
                          },
                  },
          
                },0)

                
                const pinCenter = gsap.timeline(
               
                  {
            
                    scrollTrigger: {
                      trigger: ".fourth_container",
                      start: "top 20%",
                    //   snap: {
                    //         snapTo: 0.2,
                    //         duration: 0.3,
                    //         delay: 0,
                    //         },
                    },
            
                  },0)
                .to('#green',{
                  rotation:"-90",
                  repeat:0,
                  autoAlpha:1,
                }
                ,0)
                .to("#green1",{
                  scale:1.5,
                  opacity:1,
                  y:-100,
                  rotation:90,
                },0)
                .to("#green2",{
                  scale:1,
                  opacity:0.4,
                  y:0,
                  x:0,
                  rotation:90,
                },0)
                .to("#green3",{
                  scale:1,
                    opacity:0.4,
                    y:0,
                    x:0,
                    rotation:90,
                },0).to("#green4",{
                  scale:1,
                  opacity:0.4,
                  y:0,
                  x:0,
                  rotation:90,
                },0).fromTo("#text_cont_1",{
                  y:100,
                  ease:"easeIn",
                  duration:0.2,

                  
                },{autoAlpha:1,
                  onStart:()=>{animating2=true},
                y:0,
                },0)
                
function keyUp(e){
  if(targetElement<4){
   
    targetElement=targetElement+1 
      }

const ts=gsap.timeline()
// if(targetElement==1){
//   ts.set("#green",{autoAlpha:1})
  
//   .to('#green',{
//                     rotation:"-90",
//                     repeat:0,
                  
  
//                   },0).to("#green1",{
//                     rotation:90,
//                     scale:1.5,
//                   opacity:1,
//                   y:-100,
//                   rotation:90,
//                   },0)
//                   .to("#green2",{
//                     rotation:90,
//                       scale:1,
//                       opacity:0.4,
//                       y:0,
//                       x:0
//                   },0)
//                   .to("#green3",{
//                     rotation:90,
//                     scale:1,
//                       opacity:0.4,
//                       y:0,
//                       x:0
//                   },0).to("#green4",{
//                     rotation:90,
//                     scale:1,
//                       opacity:0.4,
//                       y:0,
//                       x:0
//                   },0)
//                   .to("#text_cont_1",{
//                     autoAlpha:1,
//                       ease:Power3.easeInOut,
//                   },0)
//                 //   .to("#text_cont_2",{
                    
//                 //     yPercent:-0,
//                 //     x:0
//                 // },0.1)
//                 }
if(targetElement==1){
ts.to('#green',{
                  rotation:"-180",
                  repeat:0,

                },0).to("#green1",{
                  rotation:180,
                  scale:1,
                    opacity:0.4,
                    y:0,
                    x:0
                },0)
                .to("#green2",{
                  rotation:180,
                    scale:1,
                    opacity:0.4,
                    y:0,
                    x:0
                },0)
                .to("#green3",{
                  rotation:180,
                  scale:1.5,
                    opacity:1,
                    y:0,
                    x:100
                },0).to("#green4",{
                  rotation:180,
                  scale:1,
                    opacity:0.4,
                    y:0,
                    x:0
                },0)
                .to("#text_cont_1",{
                  
                    yPercent:-100,
                    x:0
                },0)
                .to("#text_cont_2",{
                  
                  yPercent:-100,
                  x:0
              },0.1)
              }
              if(targetElement==2){
                ts.to('#green',{
                                  rotation:"-270",
                                  repeat:0,
                
                                },0).to("#green1",{
                                  rotation:270,
                                  scale:1,
                                  opacity:0.4,
                                  y:0,
                                  x:0

                                },0)
                                .to("#green2",{
                                  rotation:270,
                                  scale:1.5,
                                  opacity:1,
                                  y:100,
                                  x:0
                                },0)
                                .to("#green3",{
                                  rotation:270,
                                  scale:1,
                                  opacity:0.4,
                                  y:0,
                                  x:0
                                },0).to("#green4",{
                                  rotation:270,
                                  scale:1,
                                  opacity:0.4,
                                  y:0,
                                  x:0
                                },0).to("#text_cont_2",{
                  
                                  yPercent:-200,
                                  x:0
                              },0)
                              .to("#text_cont_3",{
                                
                                yPercent:-200,
                                x:0
                            },0.1)
                              }
                              if(targetElement==3){
                                
                                ts.to('#green',{
                                                  rotation:"-360",
                                                  repeat:0,
                                
                                                },0).to("#green1",{
                                                  rotation:360,
                                                  scale:1,
                                                  opacity:0.4,
                                                  y:0,
                                                  x:0
                                                },0)
                                                .to("#green2",{
                                                  rotation:360,
                                                  scale:1,
                                                  opacity:0.4,
                                                  y:0,
                                                  x:0
                                                },0)
                                                .to("#green3",{
                                                  rotation:360,
                                                  scale:1,
                                                  opacity:0.4,
                                                  y:0,
                                                  x:0
                                                },0).to("#green4",{
                                                  rotation:360,
                                                  scale:1.5,
                                                  opacity:1,
                                                  y:0,
                                                  x:-100
                                                },0).to("#text_cont_3",{
                  
                                                  yPercent:-300,
                                                  x:0
                                              },0)
                                              .to("#text_cont_4",{
                                                
                                                yPercent:-300,
                                                x:0
                                            },0.1)
                                              }
 }

function keyDown(e){

  
  const ts=gsap.timeline()
  if(e==3){
  ts.to('#green',{
                    rotation:"-270",
                    repeat:0,
                  },0)
                  .to("#green1",{
                    rotation:"270",
                    scale:1,
                    opacity:0.4,
                    y:0,
                    x:0

                  },0)
                  .to("#green2",{
                    rotation:"270",
                    scale:1.5,
                    y:100,
                    x:0,
                   opacity:1,
                  },0)
                  .to("#green3",{
                    rotation:"270",
                    scale:1,
                    opacity:0.4,
                    y:0,
                    x:0
                  },0).to("#green4",{
                    rotation:"270",
                    scale:1,
                    opacity:0.4,
                    y:0,
                    x:0
                  },0).to("#text_cont_3",{
                  
                    yPercent:-200,
                    x:0
                },0)
                .to("#text_cont_4",{
                  
                  yPercent:-200,
                  x:0
              },0.1)
                }
                if(e==2){
                  ts.to('#green',{
                                    rotation:"-180",
                                    repeat:0,
                                   
                                
                                  },0).to("#green1",{
                                    rotation:180,
                                    scale:1,
                                   y:0,
                                    opacity:1,
                                  },0.1)
                                  .to("#green2",{
                                    rotation:180,
                                    scale:1,
                                    opacity:0.4,
                                    y:0,
                                   x:0
                                  },0)
                                  .to("#green3",{
                                    rotation:180,
                                    scale:1.5,
                                    opacity:1,
                                    y:0,
                                    x:100

                                  },0).to("#green4",{
                                    rotation:180,
                                    scale:1,
                                    opacity:0.4,
                                    y:0,
                                    x:0

                                  },0).to("#text_cont_2",{
                  
                                    yPercent:-100,
                                    x:0
                                },0)
                                .to("#text_cont_3",{
                                  
                                  yPercent:-100,
                                  x:0
                              },0.1)
                                }
                                if(e==1){
                                  ts.to('#green',{
                                                    rotation:"-90",
                                                    repeat:0,
                                  
                                                  },0).to("#green1",{
                                                    rotation:90,
                                                    scale:1.5,
                                                    opacity:1,
                                                    y:-100,
                                                    x:0
                                                  },0)
                                                  .to("#green2",{
                                                    rotation:90,
                                                    scale:1,
                                                    opacity:0.4,
                                                    y:0,
                                                    x:0
                                                  },0)
                                                  .to("#green3",{
                                                    rotation:90,
                                                    opacity:0.4,
                                                    scale:1,
                                                    y:0,
                                                    x:0
                                                  },0).to("#green4",{
                                                    rotation:90,
                                                    scale:1,
                                                    x:0,
                                                    opacity:0.4,
                                                  },0).to("#text_cont_2",{
                  
                                                    yPercent:0,
                                                    x:0
                                                },0)
                                                .to("#text_cont_1",{
                                                  
                                                  yPercent:0,
                                                  x:0
                                              },0.1)
                                                }
}

                Observer.create({
                  type: "wheel,touch,pointer",
                  target:'.another_containaer',
                  wheelSpeed: -1,
               
                  onDown: () => {
                    
                    keyDown(targetElement)
                    if(targetElement>0){
                      targetElement=targetElement-1 
                        }
                      },
                  onUp: () => {
                    
                  animating2&&  keyUp(targetElement)
                   
                  },
                  tolerance: 10,
                  preventDefault: true
                });
              
                return () => {
                  {/* A return function for killing the animation on component unmount */ }
                 
                    pin.kill();

                };
              })

              

              mm.add("(max-width:768px)",()=>{

              

                const pin = gsap.timeline(
             
              {
        
                scrollTrigger: {
                  trigger: ".fourth_container",
                  pin: true,
                  start: "top top",
                  end:"+=150%",
                  // markers:true,
                  // snap: {
                  //       snapTo: 0.2,
                  //       duration: 0.3,
                  //       delay: 0,
                  //       },
                },
        
              },0)

              
              const pinCenter = gsap.timeline(
             
                {
          
                  scrollTrigger: {
                    trigger: ".fourth_container",
                    start: "top 20%",
                  //   snap: {
                  //         snapTo: 0.2,
                  //         duration: 0.3,
                  //         delay: 0,
                  //         },
                  },
          
                },0)
              .to('#green',{
                rotation:"-90",
                repeat:0,
                autoAlpha:1,
              }
              ,0)
              .to("#green1",{
                scale:1.5,
                opacity:1,
                y:-40,
                rotation:90,
              },0)
              .to("#green2",{
                scale:1,
                opacity:0.4,
                y:0,
                x:0,
                rotation:90,
              },0)
              .to("#green3",{
                scale:1,
                  opacity:0.4,
                  y:0,
                  x:0,
                  rotation:90,
              },0).to("#green4",{
                scale:1,
                opacity:0.4,
                y:0,
                x:0,
                rotation:90,
              },0).fromTo("#text_cont_1",{
                y:100,
                ease:"easeIn",
                duration:0.2,

                
              },{autoAlpha:1,
                onStart:()=>{animating2=true},
              y:0,
              },0)
              
function keyUp(e){
if(targetElement<4){
 
  targetElement=targetElement+1 
    }

const ts=gsap.timeline()

if(targetElement==1){
ts.to('#green',{
                rotation:"-180",
                repeat:0,

              },0).to("#green1",{
                rotation:180,
                scale:1,
                  opacity:0.4,
                  y:0,
                  x:0
              },0)
              .to("#green2",{
                rotation:180,
                  scale:1,
                  opacity:0.4,
                  y:0,
                  x:0
              },0)
              .to("#green3",{
                rotation:180,
                scale:1.5,
                  opacity:1,
                  y:0,
                  x:50
              },0).to("#green4",{
                rotation:180,
                scale:1,
                  opacity:0.4,
                  y:0,
                  x:0
              },0)
              .to("#text_cont_1",{
                
                  yPercent:-100,
                  x:0
              },0)
              .to("#text_cont_2",{
                
                yPercent:-100,
                x:0
            },0.1)
            }
            if(targetElement==2){
              ts.to('#green',{
                                rotation:"-270",
                                repeat:0,
              
                              },0).to("#green1",{
                                rotation:270,
                                scale:1,
                                opacity:0.4,
                                y:0,
                                x:0

                              },0)
                              .to("#green2",{
                                rotation:270,
                                scale:1.5,
                                opacity:1,
                                y:50,
                                x:0
                              },0)
                              .to("#green3",{
                                rotation:270,
                                scale:1,
                                opacity:0.4,
                                y:0,
                                x:0
                              },0).to("#green4",{
                                rotation:270,
                                scale:1,
                                opacity:0.4,
                                y:0,
                                x:0
                              },0).to("#text_cont_2",{
                
                                yPercent:-200,
                                x:0
                            },0)
                            .to("#text_cont_3",{
                              
                              yPercent:-200,
                              x:0
                          },0.1)
                            }
                            if(targetElement==3){
                              
                              ts.to('#green',{
                                                rotation:"-360",
                                                repeat:0,
                              
                                              },0).to("#green1",{
                                                rotation:360,
                                                scale:1,
                                                opacity:0.4,
                                                y:0,
                                                x:0
                                              },0)
                                              .to("#green2",{
                                                rotation:360,
                                                scale:1,
                                                opacity:0.4,
                                                y:0,
                                                x:0
                                              },0)
                                              .to("#green3",{
                                                rotation:360,
                                                scale:1,
                                                opacity:0.4,
                                                y:0,
                                                x:0
                                              },0).to("#green4",{
                                                rotation:360,
                                                scale:1.5,
                                                opacity:1,
                                                y:0,
                                                x:-50
                                              },0).to("#text_cont_3",{
                
                                                yPercent:-300,
                                                x:0
                                            },0)
                                            .to("#text_cont_4",{
                                              
                                              yPercent:-300,
                                              x:0
                                          },0.1)
                                            }
}

function keyDown(e){


const ts=gsap.timeline()
if(e==3){
ts.to('#green',{
                  rotation:"-270",
                  repeat:0,
                },0)
                .to("#green1",{
                  rotation:"270",
                  scale:1,
                  opacity:0.4,
                  y:0,
                  x:0

                },0)
                .to("#green2",{
                  rotation:"270",
                  scale:1.5,
                  y:50,
                  x:0,
                 opacity:1,
                },0)
                .to("#green3",{
                  rotation:"270",
                  scale:1,
                  opacity:0.4,
                  y:0,
                  x:0
                },0).to("#green4",{
                  rotation:"270",
                  scale:1,
                  opacity:0.4,
                  y:0,
                  x:0
                },0).to("#text_cont_3",{
                
                  yPercent:-200,
                  x:0
              },0)
              .to("#text_cont_4",{
                
                yPercent:-200,
                x:0
            },0.1)
              }
              if(e==2){
                ts.to('#green',{
                                  rotation:"-180",
                                  repeat:0,
                                 
                              
                                },0).to("#green1",{
                                  rotation:180,
                                  scale:1,
                                 y:0,
                                  opacity:1,
                                },0.1)
                                .to("#green2",{
                                  rotation:180,
                                  scale:1,
                                  opacity:0.4,
                                  y:0,
                                 x:0
                                },0)
                                .to("#green3",{
                                  rotation:180,
                                  scale:1.5,
                                  opacity:1,
                                  y:0,
                                  x:50

                                },0).to("#green4",{
                                  rotation:180,
                                  scale:1,
                                  opacity:0.4,
                                  y:0,
                                  x:0

                                },0).to("#text_cont_2",{
                
                                  yPercent:-100,
                                  x:0
                              },0)
                              .to("#text_cont_3",{
                                
                                yPercent:-100,
                                x:0
                            },0.1)
                              }
                              if(e==1){
                                ts.to('#green',{
                                                  rotation:"-90",
                                                  repeat:0,
                                
                                                },0).to("#green1",{
                                                  rotation:90,
                                                  scale:1.5,
                                                  opacity:1,
                                                  y:-50,
                                                  x:0
                                                },0)
                                                .to("#green2",{
                                                  rotation:90,
                                                  scale:1,
                                                  opacity:0.4,
                                                  y:0,
                                                  x:0
                                                },0)
                                                .to("#green3",{
                                                  rotation:90,
                                                  opacity:0.4,
                                                  scale:1,
                                                  y:0,
                                                  x:0
                                                },0).to("#green4",{
                                                  rotation:90,
                                                  scale:1,
                                                  x:0,
                                                  opacity:0.4,
                                                },0).to("#text_cont_2",{
                
                                                  yPercent:0,
                                                  x:0
                                              },0)
                                              .to("#text_cont_1",{
                                                
                                                yPercent:0,
                                                x:0
                                            },0.1)
                                              }
}

              Observer.create({
                type: "wheel,touch,pointer",
                target:'.another_containaer',
                wheelSpeed: -1,
             
                onDown: () => {
                  
                  keyDown(targetElement)
                  if(targetElement>0){
                    targetElement=targetElement-1 
                      }
                    },
                onUp: () => {
                  
                animating2&&  keyUp(targetElement)
                 
                },
                tolerance: 10,
                preventDefault: true
              });
              return () => {
                {/* A return function for killing the animation on component unmount */ }
               
                pin.kill();
               
              };


            })
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


                const newT1=gsap.timeline({
                  scrollTrigger:{
                    trigger:'.first_containerss',
                    start: "top top",
                    end:'=+120%',
                    pin:true,
                    // markers:true,
                    // snap: {
                    //   snapTo: 0.2,
                    //   duration: 0.3,
                    //   delay: 0,
                    //   },
                  }
                })
                
                const newT1Center=gsap.timeline({
                  scrollTrigger:{
                    trigger:'.first_containerss',
                    start: "top center",
                   // snap: {
                    //   snapTo: 0.2,
                    //   duration: 0.3,
                    //   delay: 0,
                    //   },
                  }
                }).to("#_10",{
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
                  onStart:()=>{animating1=true}

              
          },0.3)

      Observer.create({
                  type: "wheel,touch",
                  target:'.firstss_another_containaer',
                  // wheelSpeed: -1,
                  // onDown: () => !animating && gotoSection(currentIndex - 1, -1),
                  // onUp: () => !animating && gotoSection(currentIndex + 1, 1),
                  onUp: () => {
                    
                   
                    if(targetElement1>0){
                      targetElement1=targetElement1-1 
                        }
                        circleKeyDown(targetElement1)
                      },
                  onDown:() => {
                    
                  animating1&&circleKeyUp(targetElement1)
                   
                  },
                  wheelSpeed: -1,
                  tolerance: 10,
                  preventDefault: true,
                  onPress: self => {
                    // on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
                    ScrollTrigger.isTouch && self.event.preventDefault()
                  }
                
                });

                function circleKeyUp(e){
                  if(targetElement1<3){
   
                    targetElement1=targetElement1+1 
                      }
                const tss=gsap.timeline()
                if(targetElement1==1){
                     tss.to("#firstCircleCont",{
                      yPercent:-100,
                      ease:"easeOut",

                     }).to("#secondCircleCont",{
                      yPercent:-100,
                      ease:"easeOut",
                      
                     },0.1).to("#_00",{
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
                }
                if(targetElement1==2){
                  tss.to("#secondCircleCont",{
                    yPercent:-200,
                    ease:"easeOut",

                   }).to("#thirdCircleCont",{
                    yPercent:-200,
                    ease:"easeOut",
                    
                   },0.1) .to("#_000",{
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
                }
              }
                function circleKeyDown(e){
                 

                const tss=gsap.timeline()
                if(e==0){
                     tss.to("#secondCircleCont",{
                      yPercent:0,
                      ease:"easeOut",

                     }).to("#firstCircleCont",{
                      yPercent:0,
                      ease:"easeOut",
                      
                     },0.1)
                }
                if(e==1){
                  tss.to("#thirdCircleCont",{
                    yPercent:-100,
                    ease:"easeOut",

                   }).to("#secondCircleCont",{
                    yPercent:-100,
                    ease:"easeOut",
                    
                   },0.1)
                }
                }

                return () => {
                  {/* A return function for killing the animation on component unmount */ }
                  t5.kill();
                  tl.kill();
                  newT1.kill();

                };
  
  
    
    })
    return ()=>contextCreate.revert();
      
      
      },[])
  return (
    <div className='philosophi overflow-hidden'>
         <Hero />
       <section id="about" className=' flex flex-col bg-[#463838] philosophie'>
            <div className='contianer_about   flex flex-col wrapper'>
             
{/* <div className='md:hidden'>
                <div className=' first_container min-h-screen flex gap-11 flex flex-col point justify-center ' >
                    <div className=' flex justify-between self-center w-[90%] gap-11 '>
                      <div className='flex flex-col justify-start gap-6'>
            <h1 className='count count_text_container_1 '>01</h1>
            <h1 className='container_about_header'>
    The Consultancy Approach
    </h1>
    
            </div>
            
 <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_04' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_03' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_02' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_01' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_10' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>

    </div>
    <div className='flex flex-col  gap-4 text_container  text_container_1  '>
<p className='container_about_description w-[90%] self-center'>
    Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.

    </p>
 
   
   
    </div>
</div>
</div>

<div className='md:hidden'>
                <div className=' first_container min-h-screen flex gap-11 flex flex-col point justify-center ' >
                    <div className=' flex justify-between self-center w-[90%] gap-11 '>
                      <div className='flex flex-col justify-start gap-6'>
            <h1 className='count count_text_container_1 '>02</h1>
            <h1 className='container_about_header'>
            Communicating From Within
    </h1>
    
            </div>
            
 <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_04' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_03' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_02' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_01' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_10' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>

    </div>
    <div className='flex flex-col  gap-4 text_container  text_container_1  '>
<p className='container_about_description w-[90%] self-center'>
In a world where brand identity is paramount, the essence of messaging from within the brand cannot be overstated. It's vital for brands to cultivate their messaging from their core, ensuring authenticity remains consistent and unambiguous.
</p>
 
   
   
    </div>
</div>
</div> */}
 
{/* <div className='md:hidden'>
                <div className=' first_container min-h-screen flex gap-11 flex flex-col point justify-center ' >
                    <div className=' flex justify-between self-center w-[90%] gap-11 '>
                      <div className='flex flex-col justify-start gap-6'>
            <h1 className='count count_text_container_1 '>03</h1>
            <h1 className='container_about_header'>
            Hollistic Guardianship
    </h1>
    
            </div>
            
 <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_04' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_03' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_02' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_01' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_10' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>

    </div>
    <div className='flex flex-col  gap-4 text_container  text_container_1  '>
<p className='container_about_description w-[90%] self-center'>
In a world where brand identity is paramount, the essence of messaging from within the brand cannot be overstated. It's vital for brands to cultivate their messaging from their core, ensuring authenticity remains consistent and unambiguous.
</p>
 
   
   
    </div>
</div>
</div> */}

            </div>
             <div className=' '>
                <div className=' min-h-[220vh] ' >
                  <div className='first_containerss firstss_another_containaer min-h-[100vh] flex gap-11 flex flex-col point justify-center'>
                    <div className='flex flex-col h-[700px] md:h-[400px] overflow-hidden '>
<div id="firstCircleCont"  className=' self-center hidden md:block'>

                    <div  className=' flex flex-col justify-center self-center  hidden md:block min-h-[400px] w-[70%]  gap-11 '>
                      <div className='flex self-center  gap-11'>
                      <div className='flex flex-col justify-start'>
            <h1 className='count count_text_container_1 '>01</h1>
            </div>

            
 <svg width="256" height="200" className='md:w-[400px] w-[200px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_04' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_03' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_02' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_01' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_10' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>
<div className='flex flex-col justify-center gap-4 text_container text_container_1   '>

    <h1 className='container_about_header'>
    The Consultancy Approach
    </h1>
    <p className='container_about_description'>
    Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.

    </p>
   
    </div>
    </div>
    
    </div>
    </div>
    <div id="firstCircleCont" className=' min-h-[700px] md:hidden  flex gap-11 flex flex-col point justify-center ' >
                    <div className=' flex justify-between self-center w-[90%] gap-11 '>
                      <div className='flex flex-col justify-start gap-6'>
            <h1 className='count count_text_container_1 '>01</h1>
            <h1 className='container_about_header'>
            The Consultancy Approach

    </h1>
    
            </div>
            
 <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_04' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_03' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_02' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_01' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_10' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>

    </div>
    <div className='flex flex-col  gap-4 text_container  text_container_1  '>
<p className='container_about_description w-[90%] self-center'>
Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.
</p>
 
   
   
    </div>
</div>

<div id="secondCircleCont" className=' self-center hidden md:block'>
    <div  className=' flex flex-col  justify-center self-center  min-h-[400px] w-[70%]  gap-11 '>
                      <div className='flex self-center  gap-11'>
                      <div className='flex flex-col justify-start'>
            <h1 className='count count_text_container_2 '>02</h1>
            </div>

            
 <svg width="256" height="200" className='md:w-[400px] w-[200px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_44' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_33' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_22' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_11' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_00' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>
<div className='flex flex-col justify-center gap-4 text_container text_container_2   '>

    <h1 className='container_about_header'>
    The Consultancy Approach
    </h1>
    <p className='container_about_description'>
    Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.
    </p>
   
    </div>
    </div>
    </div>
    </div>
    <div id="secondCircleCont" className=' min-h-[700px] md:hidden flex gap-11 flex flex-col point justify-center ' >
                    <div className=' flex justify-between self-center w-[90%] gap-11 '>
                      <div className='flex flex-col justify-start gap-6'>
            <h1 className='count count_text_container_1 '>02</h1>
            <h1 className='container_about_header'>
            The Consultancy Approach
    </h1>
    
            </div>
            
 <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_44' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_33' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_22' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_11' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_00' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>

    </div>
    <div className='flex flex-col  gap-4 text_container  text_container_1  '>
<p className='container_about_description w-[90%] self-center'>
Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.
</p>
 
   
   
    </div>
</div>
<div id="thirdCircleCont" className=' self-center hidden md:block'>

    <div  className=' flex flex-col justify-center self-center  min-h-[400px] w-[70%]  gap-11 '>
                      <div className='flex self-center  gap-11'>
                      <div className='flex flex-col justify-start'>
            <h1 className='count count_text_container_3 '>03</h1>
            </div>

            
 <svg width="256" height="200" className='md:w-[400px] w-[200px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_444' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_333' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_222' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_111' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_000' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>
<div className='flex flex-col justify-center gap-4 text_container text_container_3   '>

    <h1 className='container_about_header'>
    The Consultancy Approach
    </h1>
    <p className='container_about_description'>
    Building a brand is not an overnight endeavor; it's a long-term process requiring ongoing reflection on its purpose and vision. At Herbet, we partner with brands to empower them. Through our internal training solutions, we ensure that each brand fully understands its vision and is equipped to operate independently.

    </p>
   
    </div>
    </div>
    </div>
    </div>
    <div id="thirdCircleCont" className=' min-h-[700px] md:hidden flex gap-11 flex flex-col point justify-center ' >
                    <div className=' flex justify-between self-center w-[90%] gap-11 '>
                      <div className='flex flex-col justify-start gap-6'>
            <h1 className='count count_text_container_1 '>03</h1>
            <h1 className='container_about_header'>
            Hollistic Guardianship
    </h1>
    
            </div>
            
 <svg width="256" height="200" className='w-[400px] ' viewBox="0 0 256 432" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle id='_444' cx="127.519" cy="127.518" r="126.093" className='opacity-0' transform="rotate(90 127.519 127.518)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_333' cx="127.519" cy="171.761" r="126.093" className='opacity-0' transform="rotate(90 127.519 171.761)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_222' cx="127.519" cy="216.002" r="126.093" className='opacity-0'  transform="rotate(90 127.519 216.002)" stroke="#FFD551" stroke-width="2.85008"/> 
<circle id='_111' cx="127.519" cy="260.245" r="126.093" className='opacity-0' transform="rotate(90 127.519 260.245)" stroke="#FFD551" stroke-width="2.85008"/>
<circle id='_000' cx="127.519" cy="304.482" r="126.093" className='opacity-0' transform="rotate(90 127.519 304.482)" stroke="#FFD551" stroke-width="2.85008"/>
</svg>

    </div>
    <div className='flex flex-col  gap-4 text_container  text_container_1  '>
<p className='container_about_description w-[90%] self-center'>
In a world where brand identity is paramount, the essence of messaging from within the brand cannot be overstated. It's vital for brands to cultivate their messaging from their core, ensuring authenticity remains consistent and unambiguous.
</p>
 
   
   
    </div>
</div>
    </div>
    </div>
</div>

</div>






        </section>
        <div className=''>
        <section className=' md:min-h-[300vh] min-h-[200vh]    bg-[#463838]  ' >
          <div className=' flex flex-col justify-center another_containaer fourth_container min-h-[100vh] '>
          <div className='flex md:flex-row flex-col md:justify-between self-center w-[90%] '>
            <div className='flex flex-col self-center  h-[400px] overflow-hidden'>
                    <div id='text_cont_1' className='text_cont_1 flex justify-center   w-[90%] gap-11 min-h-[400px] '>
                      <div className='flex flex-col justify-center'>
                      <h1 className='count_1 count_text_container_ '>01</h1>
            </div>
           
<div  className='flex flex-col justify-center gap-4  text_container_  '>


    <h1 className='container_about_header'>
    Identity    </h1>
    <p className='container_about_description'>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
   
    </div>
   


    </div>
    <div id='text_cont_2' className=' flex justify-center  w-[90%]  gap-11 min-h-[400px] '>
                      <div className='flex flex-col justify-center'>
                      <h1 className='count_1 count_text_container_ '>02</h1>
            </div>
           
<div  className='flex flex-col justify-center gap-4  text_container_  '>


    <h1 className='container_about_header'>
    Strategy    </h1>
    <p className='container_about_description'>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
   
    </div>
   


    </div>
    <div id='text_cont_3' className=' flex justify-center  w-[90%]  gap-11 min-h-[400px] '>
                      <div className='flex flex-col justify-center'>
                      <h1 className='count_1 count_text_container_ '>03</h1>
            </div>
           
<div  className='flex flex-col justify-center gap-4  text_container_  '>


    <h1 className='container_about_header'>
    Experience    </h1>
    <p className='container_about_description'>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
   
    </div>
   


    </div>
    <div id='text_cont_4' className=' flex justify-center  w-[90%]  gap-11 min-h-[400px] '>
                      <div className='flex flex-col justify-center'>
                      <h1 className='count_1 count_text_container_ '>04</h1>
            </div>
           
<div  className='flex flex-col justify-center gap-4  text_container_  '>


    <h1 className='container_about_header'>
    Communication    </h1>
    <p className='container_about_description'>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
   
    </div>
   


    </div>
    
    </div>
    <div  id="green" className="circle_main_container flex mt-11 md:mt-0 md:justify-end w-fit self-center  md:w-[60%] items-center relative left-[200px] md:left-[450px]   ">
          <div id="green4"  className="circle_container_new circle3  relative left-[15%]  ">
            <h1   className="circle_text_new self-center ">Communication</h1>
          </div>
          <div   className='flex flex-col gap-6'>
          <div id="green1" className="circle_container_new circle3  relative   ">
            <h1   className="circle_text_new self-center "> Identity </h1>
          </div>
          <div id="green2" className="circle_container_new circle3  relative   ">
            <h1   className="circle_text_new self-center ">  Experience</h1>
          </div>
          </div>
          <div id="green3" className="circle_container_new circle3  relative left-[-15%]  ">
            <h1   className="circle_text_new self-center ">Strategy</h1>
          </div>
       
        </div>

    </div>
    </div>
</section> 
</div>

{/* <div className='md:hidden'>
<section className='    bg-[#463838]  ' >
          <div className=' flex flex-col justify-center another_containaer fourth_container min-h-[100vh] '>
          <div className='flex flex-col justify-around   self-center w-[90%] '>
            <div className='flex flex-col self-center mt-24  h-[400px] overflow-hidden'>
                    <div id='text_cont_1' className='text_cont_1 flex justify-center   w-[90%] gap-11 min-h-[400px] '>
                      <div className='flex flex-col justify-center'>
                      <h1 className='count_1 count_text_container_ '>01</h1>
            </div>
           
<div  className='flex flex-col justify-center gap-4  text_container_  '>


    <h1 className='container_about_header'>
    Identity    </h1>
    <p className='container_about_description'>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
   
    </div>
   


    </div>
    <div id='text_cont_2' className=' flex justify-center  w-[90%]  gap-11 min-h-[400px] '>
                      <div className='flex flex-col justify-center'>
                      <h1 className='count_1 count_text_container_ '>02</h1>
            </div>
           
<div  className='flex flex-col justify-center gap-4  text_container_  '>


    <h1 className='container_about_header'>
    Strategy    </h1>
    <p className='container_about_description'>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
   
    </div>
   


    </div>
    <div id='text_cont_3' className=' flex justify-center  w-[90%]  gap-11 min-h-[400px] '>
                      <div className='flex flex-col justify-center'>
                      <h1 className='count_1 count_text_container_ '>03</h1>
            </div>
           
<div  className='flex flex-col justify-center gap-4  text_container_  '>


    <h1 className='container_about_header'>
    Experience    </h1>
    <p className='container_about_description'>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
   
    </div>
   


    </div>
    <div id='text_cont_4' className=' flex justify-center  w-[90%]  gap-11 min-h-[400px] '>
                      <div className='flex flex-col justify-center'>
                      <h1 className='count_1 count_text_container_ '>04</h1>
            </div>
           
<div  className='flex flex-col justify-center gap-4  text_container_  '>


    <h1 className='container_about_header'>
    Communication    </h1>
    <p className='container_about_description'>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
   
    </div>
   


    </div>
    
    </div>
    <div  id="green" className="circle_main_container flex justify-center  w-fit self-center  w-[60%] items-center relative left-[200px]   ">
          <div id="green4"  className="circle_container_new circle3  relative left-[35%] md:left-[15%]  ">
            <h1   className="circle_text_new self-center ">Communication</h1>
          </div>
          <div   className='flex flex-col gap-6 relative'>
          <div id="green1" className="circle_container_new circle3  relative   ">
            <h1   className="circle_text_new self-center "> Identity </h1>
          </div>
          <div id="green2" className="circle_container_new circle3  relative   ">
            <h1   className="circle_text_new self-center ">  Experience</h1>
          </div>
          </div>
          <div id="green3" className="circle_container_new circle3  relative left-[-35%] md:left-[-15%] ">
            <h1   className="circle_text_new self-center ">Strategy</h1>
          </div>
       
        </div>

    </div>
    </div>
</section> 
</div> */}
<section id="main2" className='min-h-screen flex flex-col justify-center bg-[#463838] pb-11'>
<div className='md:w-[80%] flex flex-col gap-11 self-center'>
  <div className='hide_profile_text p-2 md:p-0   self-center'>
  <h1 className='header_profile pr-6 md:pr-0 '>
  Herbet is spearheaded by its founding members 
together with a global and diverse team.
  </h1>
  </div>
  <div className='flex justify-center md:flex-row flex-col gap-6'>
    <motion.div
       variants={fadeIn("up", "tween",.2,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} className='flex flex-col'>
      <img src='/profile_1.png' className='md:block hidden' alt="pic"/>
      <img src='/profile_1_mob.png' className='md:hidden w-64'  alt="pic"/>

      <h1 className='card_header_about'>
      Saravanan Sahadevan
      </h1>
      <p className='card_description_about'>
      CEO & FOUNDER
      </p>
    </motion.div>
    <motion.div
       variants={fadeIn("up", "tween",.3,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} className='flex flex-col '>
        <img src='/profile_1.png' className='md:block hidden' alt="pic"/>
      <img src='/profile_1_mob.png' className='md:hidden w-64 md:slef-start self-end'  alt="pic"/>
      <h1 className='card_header_about md:self-start self-end'>
      Amir Norman
      </h1>
      <p className='card_description_about md:self-start self-end'>
      COO & CO-FOUNDER
      </p>
    </motion.div>
    <motion.div
       variants={fadeIn("up", "tween",.4,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} className='flex flex-col'>
       <img src='/profile_1.png' className='md:block hidden' alt="pic"/>
      <img src='/profile_1_mob.png' className='md:hidden w-64'  alt="pic"/>
      <h1 className='card_header_about'>
      Farra Khalili
      </h1>
      <p className='card_description_about'>
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