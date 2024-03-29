'use client'
import React from 'react'
import { Feedback, Gallery, HeroAbout } from '../../sections'
import Footer from '../../components/Footer'
import {gsap} from "gsap";
import { motion } from "framer-motion";

import {  useEffect, useRef, useState } from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { Observer } from "gsap/Observer";
import { fadeIn } from '../../utils/motion';
gsap.registerPlugin(ScrollTrigger,Observer);
function AboutUs() {
  // const [targetElement,setTargerElement]=useState(0)
  let targetElement=0
  let targetElement1=0
  let animating1=false
  let animating2=false
  let toogle=false



    useEffect(()=>{

      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

        const contextCreate=gsap.context(()=>{

            var tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ".wrapper",
                  start: "top top",
                  scrub: 1,
                }
              })

              let mm = gsap.matchMedia();
             
              const section_2 = document.getElementById("checkCon1");

              mm.add("(min-width:768px)",()=>{
                  const pin = gsap.timeline(
               
                {
          
                  scrollTrigger: {
                    trigger: ".fourth_container",
                    pin: true,
                    start: "top top",
                    end:"+=" + section_2.offsetWidth,
                    pinReparent: true,
                    invalidateOnRefresh:true,
                    // pinSpacing: false,
                    preventOverlaps: "group1"
                  }
          
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
                  ease:'power3.inOut',
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

                const pinCenterFirst = gsap.timeline(
             
                  {
            
                    scrollTrigger: {
                      trigger: ".fourth_container",
                      start: "top 0%",
                      end:'top -60%',
                     
                    //   snap: {
                    //         snapTo: 0.2,
                    //         duration: 0.3,
                    //         delay: 0,
                    //         },
                    onLeave:()=>{const ts=gsap.timeline()
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
                                        // rotation:180,
                                        scale:1.5,
                                          opacity:1,
                                          y:0,
                                          x:100,
                                              ease:'power3.inOut',
                                          rotation:180,
                                      },0.2).to("#green4",{
                                        rotation:180,
                                        scale:1,
                                          opacity:0.4,
                                          y:0,
                                          x:0
                                      },0)
                                      .to("#text_cont_1",{
                                        opacity:0,
                                        
                                          yPercent:-100,
                                          x:0
                                      },0)
                                      .to("#text_cont_2",{
                                        opacity:1,
                                        
                                        yPercent:-100,
                                        x:0
                                    },0.1)
                                    
                    
                    },
                    onEnterBack:()=>{
                      const ts=gsap.timeline()
                        ts.to('#green',{
                                          rotation:"-90",
                                          repeat:0,
                                           
                        
                                        },0).to("#green1",{
                                          ease:'power3.inOut',
                                       
                                          rotation:90,
                                          scale:1.5,
                                          opacity:1,
                                          y:-100,
                                          x:0
                                        },0.1)
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
                                          opacity:0,
    
                                          yPercent:0,
                                          x:0
                                      },0)
                                      .to("#text_cont_1",{
                                        opacity:1,
                                        
                                        yPercent:0,
                                        x:0
                                    },0.1)
                                      
                    }
                    },
            
                  })
  
                  const pinCenterSecond = gsap.timeline(
               
                    {
              
                      scrollTrigger: {
                        trigger: ".fourth_container",
                        start: "top 0%",
                        end:'top -120%',
                       
                      //   snap: {
                      //         snapTo: 0.2,
                      //         duration: 0.3,
                      //         delay: 0,
                      //         },
                      onLeave:()=>{const ts=gsap.timeline()
                          ts.to('#green',{
                                            rotation:"-270",
                                            repeat:0, 
                                            //  ease:'power4.in',
                                            // duration:0.5,

                          
                                          },0).to("#green1",{
                                            rotation:270,
                                            scale:1,
                                            opacity:0.4,
                                            y:0,
                                            x:0
            
                                          },0)
                                          .to("#green2",{
                                            scale:1.5,
                                            y:100,
                                            x:0,
                                          
                                            ease:'power3.inOut',
                                            rotation:270,
                                            
                                            opacity:1,
                                          },0.1)
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
                                          opacity:1,
                                          yPercent:-200,
                                          x:0
                                      },0.1).to("#text_cont_2",{
                                        opacity:0,
                                       
                                    })
                                        
                                      
                      
                      },
                      onEnterBack:()=>{
                        const ts=gsap.timeline()
                          ts.to('#green',{
                                            rotation:"-180",
                                            repeat:0,
                                            // ease:'power4.in',
                                        
                                          },0).to("#green1",{
                                            rotation:180,
                                            scale:1,
                                           y:0,
                                            opacity:0.4,
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
                                            x:100,
                                            ease:'power3.inOut',
                                          },0).to("#green4",{
                                            rotation:180,
                                            scale:1,
                                            opacity:0.4,
                                            y:0,
                                            x:0
          
                                          },0).to("#text_cont_2",{
                                            opacity:1,
                          
                                            yPercent:-100,
                                            x:0
                                        },0)
                                        .to("#text_cont_3",{
                                          opacity:0,
                                          
                                          yPercent:-100,
                                          x:0
                                      },0.1)
                                        
                                        
                      }
                      },
              
                    })
                    const pinCenterThird = gsap.timeline(
               
                      {
                
                        scrollTrigger: {
                          trigger: ".fourth_container",
                          start: "top 0%",
                          end:'top -180%',
                         
                        //   snap: {
                        //         snapTo: 0.2,
                        //         duration: 0.3,
                        //         delay: 0,
                        //         },
                       
                      
                        onLeave:()=>{const ts=gsap.timeline()    
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
                                            ease:'power3.inOut',

                                              y:0,
                                              x:-100
                                            },0).to("#text_cont_3",{
              
                                              yPercent:-300,
                                              x:0,
                                              opacity:0
                                          },0)
                                          .to("#text_cont_4",{
                                            
                                            yPercent:-300,
                                            x:0,
                                            opacity:1,
                                        },0.1).to("#text_cont_3",{
              
                              
                                          opacity:0
                                      })
                                          
                                          
                                        
                        
                        },
                        onEnterBack:()=>{
                          const ts=gsap.timeline()
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
                                            ease:'power3.inOut',
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
                                              x:0,
                                              opacity:1,
                                          },0)
                                          .to("#text_cont_4",{
                                            opacity:0,
                                            
                                            yPercent:-200,
                                            x:0
                                        },0.1)
                                    
                                          
                                          
                                          
                        }
                        },
                
                      })


                
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
                                    opacity:0.4,
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
                  end:"+=190%",
                  // snap: {
                  //       snapTo: 0.2,
                  //       duration: 0.3,
                  //       delay: 0,
                  //       },
                },
        
              },0)
// gsap.quickSetter("green2",{
//   scale:1,
//   opacity:0.4,
//   y:0,
//   x:0,
//   rotation:90,
// })
              const pinCenter = gsap.timeline(
             
                {
          
                  scrollTrigger: {
                    trigger: ".fourth_container",
                    start: "top top",
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

              const pinCenterFirst = gsap.timeline(
             
                {
          
                  scrollTrigger: {
                    trigger: ".fourth_container",
                    start: "top 0%",
                    end:'top -50%',
                   
                  //   snap: {
                  //         snapTo: 0.2,
                  //         duration: 0.3,
                  //         delay: 0,
                  //         },
                  onLeave:()=>{const ts=gsap.timeline()
                    alert("zz")
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
                                  
                  
                  },
                  onEnterBack:()=>{
                    const ts=gsap.timeline()
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
                  },
          
                })

                const pinCenterSecond = gsap.timeline(
             
                  {
            
                    scrollTrigger: {
                      trigger: ".fourth_container",
                      start: "top 0%",
                      end:'top -90%',
                     
                    //   snap: {
                    //         snapTo: 0.2,
                    //         duration: 0.3,
                    //         delay: 0,
                    //         },
                    onLeave:()=>{const ts=gsap.timeline()
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
                                        opacity:1,
                                        yPercent:-200,
                                        x:0
                                    },0.1).to("#text_cont_2",{
                          
                                     opacity:0
                                  })
                                      
                                    
                    
                    },
                    onEnterBack:()=>{
                      const ts=gsap.timeline()
                        ts.to('#green',{
                                          rotation:"-180",
                                          repeat:0,
                                         
                                      
                                        },0).to("#green1",{
                                          rotation:180,
                                          scale:1,
                                         y:0,
                                          opacity:0.4,
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
                                          opacity:1,
                                          yPercent:-100,
                                          x:0
                                      },0)
                                      .to("#text_cont_3",{
                                        opacity:1,
                                        
                                        yPercent:-100,
                                        x:0
                                    },0.1)
                                      
                                      
                    }
                    },
            
                  })
                  const pinCenterThird = gsap.timeline(
             
                    {
              
                      scrollTrigger: {
                        trigger: ".fourth_container",
                        start: "top 0%",
                        end:'top -130%',
                       
                      //   snap: {
                      //         snapTo: 0.2,
                      //         duration: 0.3,
                      //         delay: 0,
                      //         },
                      onLeave:()=>{const ts=gsap.timeline()  
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
                                      },0.1).to("#text_cont_3",{
            
                                       opacity:0
                                    })
                                        
                                        
                                      
                      
                      },
                      onEnterBack:()=>{
                        const ts=gsap.timeline()
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
                                          opacity:1,
                                            yPercent:-200,
                                            x:0
                                        },0)
                                        .to("#text_cont_4",{
                                          opacity:1,
                                          
                                          yPercent:-200,
                                          x:0
                                      },0.1)
                                        
                                        
                                        
                      }
                      },
              
                    })
              
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
                              alert("jjj")
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

                return () => {
                  {/* A return function for killing the animation on component unmount */ }
                  t5.kill();
                  tl.kill();

                };
  
  
    
    })
    return ()=>contextCreate.revert();
      
      
      })
  return (
    <div className='bg-[#463838] overflow-hidden'>
         <HeroAbout />
         <Feedback />
    
        <div className=''>
        <section id="checkCon1" className=' md:min-h-[300vh] min-h-[300vh]    bg-[#463838]  ' >
          <div className=' flex flex-col justify-center another_containaer fourth_container min-h-[100vh] '>
          <div className='flex md:flex-row flex-col md:justify-between self-center w-[90%] '>
            <div it="text_cont" className='flex flex-col self-center   h-[300px]  md:h-[400px] overflow-hidden'>
                    <div id='text_cont_1' className='text_cont_1 flex justify-center w-[90%] gap-11 min-h-[300px] md:min-h-[400px] '>
                    
           


<div className='flex flex-col  justify-center gap-4'>
  <div className='flex items-center gap-6'>
  <h1 className='count_1 count_text_container_ menus small self-start mt-2'>01</h1>
<div className='flex flex-col gap-4'>
    <h1 className='container_about_header1 menus '>
    Identity    </h1>
    <p className='container_about_description menus small '>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
    </div>
    </div>
  
   

   


    </div>
    </div>
    <div id='text_cont_2' className=' flex justify-center  w-[90%]  gap-11 min-h-[300px] md:min-h-[400px] '>
    <div className='flex flex-col  justify-center gap-4'>
  <div className='flex items-center gap-6'>
  <h1 className='count_1 count_text_container_ menus small self-start mt-2'>02</h1>
<div className='flex flex-col gap-4'>
    <h1 className='container_about_header1 menus '>
    Strategy    </h1>
    <p className='container_about_description menus small '>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
    </div>
    </div>
  
   

   


    </div>
    </div>
    <div id='text_cont_3' className=' flex justify-center     w-[90%]  gap-11 min-h-[300px] md:min-h-[400px] '>
    <div className='flex flex-col  justify-center gap-4'>
  <div className='flex items-center gap-6'>
  <h1 className='count_1 count_text_container_ menus small self-start mt-2'>03</h1>
<div className='flex flex-col gap-4'>
    <h1 className='container_about_header1 menus '>
    Experience    </h1>
    <p className='container_about_description menus small '>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
    </div>
    </div>
   </div>
    </div>
    <div id='text_cont_4' className=' flex justify-center  w-[90%]  gap-11 min-h-[300px] md:min-h-[400px] '>
    <div className='flex flex-col  justify-center gap-4'>
  <div className='flex items-center gap-6'>
  <h1 className='count_1 count_text_container_ menus small self-start mt-2'>04</h1>
<div className='flex flex-col gap-4'>
    <h1 className='container_about_header1 menus '>
    Communication    </h1>
    <p className='container_about_description menus small '>
    We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong
    </p>
    </div>
    </div>
   </div>
           

   


    </div>
    
    </div>
    <div  id="green" className="circle_main_container flex relative md:mt-0 md:justify-end w-fit self-center  items-center  left-[200px] md:left-[450px]   ">
          <div id="green4"  className="circle_container_new circle3  relative left-[15%] menus ">
            <h1   className="circle_text_new self-center ">Communication</h1>
          </div>
          <div   className='flex flex-col gap-6'>
          <div id="green1" className="circle_container_new circle3  relative  menus ">
            <h1   className="circle_text_new self-center "> Identity </h1>
          </div>
          <div id="green2" className="circle_container_new circle3  relative menus  ">
            <h1   className="circle_text_new self-center ">  Experience</h1>
          </div>
          </div>
          <div id="green3" className="circle_container_new circle3  relative left-[-15%] menus ">
            <h1   className="circle_text_new self-center ">Strategy</h1>
          </div>
       
        </div>

    </div>
    </div>
</section> 
</div>  

<section id="main2" className='min-h-screen flex flex-col justify-center bg-[#463838] pt-11 mt-32 md:pt-0 pb-11'>
<div className='md:w-[80%] flex flex-col gap-11 self-center'>
  <div className='hide_profile_text p-2 md:p-0  menus self-center'>
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
      <img src='/profile_1.jpg' className='md:block hidden' alt="pic"/>
      <img src='/profile_1.jpg' className='md:hidden w-64'  alt="pic"/>

      <h1 className='card_header_about menus small'>
      Saravanan Sahadevan
      </h1>
      <p className='card_description_about menus small'>
      CEO & FOUNDER
      </p>
    </motion.div>
    <motion.div
       variants={fadeIn("up", "tween",.3,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} className='flex flex-col '>
        <img src='/profile_2.jpg' className='md:block hidden ' alt="pic"/>
      <img src='/profile_2.jpg' className='md:hidden w-64 md:slef-start self-end'  alt="pic"/>
      <h1 className='card_header_about md:self-start self-end menus small'>
      Amir Norman
      </h1>
      <p className='card_description_about md:self-start self-end menus small'>
      COO & CO-FOUNDER
      </p>
    </motion.div>
    <motion.div
       variants={fadeIn("up", "tween",.4,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} className='flex flex-col'>
       <img src='/profile_3.jpg' className='md:block hidden ' alt="pic"/>
      <img src='/profile_3.jpg' className='md:hidden w-64'  alt="pic"/>
      <h1 className='card_header_about menus small'>
      Farra Khalili
      </h1>
      <p className='card_description_about menus small'>
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