/* eslint-disable */
'use client';
import {gsap} from "gsap";
import { motion } from "framer-motion";
import { fadeIn,ImgWave, staggerContainer } from "../utils/motion";
import {  useEffect, useRef, useState } from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
const Resource = () => {
  const circleRef=useRef(null)
  const [svgIcon,setSvgIcon]=useState(false)
  useEffect(()=>{
    // gsap.to('.resourse_texts', {opacity:0})
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
    const contextCreate=gsap.context(()=>{

  
      const mm=gsap.matchMedia()
mm.add("(min-width:768px)",()=>{

    let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(2, -2); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
onUpdate: (self) => {
  let skew = clamp(self.getVelocity() / -10);
  // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
  if (Math.abs(skew) > Math.abs(proxy.skew)) {
  
    proxy.skew = skew;

    gsap.to(proxy, {skew: 0, duration: 1.5, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
  }
}
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

})
const t2=gsap.timeline({
  scrollTrigger:{
    trigger:'#main2',
    start:"top center",
  }
  })
  // const t11=gsap.timeline({
  //   scrollTrigger:{
  //     trigger:'#main1',
  //     start:"80% 80%",
  //    
  //     onEnter:()=>{
  //       let proxy = { skew: 0 },
  //       skewSetter = gsap.quickSetter(".skewElem1", "skewY", "deg"), // fast
  //       clamp = gsap.utils.clamp(2, -2); // don't let the skew go beyond 20 degrees. 
      
  //     ScrollTrigger.create({
  //     onUpdate: (self) => {
  //       let skew = clamp(self.getVelocity() / -10);
  //       // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
  //       if (Math.abs(skew) > Math.abs(proxy.skew)) {
        
  //         proxy.skew = skew;
      
  //         gsap.to(proxy, {skew: 0, duration: 2, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
  //       }
  //     }
  //     });
      
  //     // make the right edge "stick" to the scroll bar. force3D: true improves performance
  //     gsap.set(".skewElem1", {transformOrigin: "right center", force3D: true});
      
  //     }
  //   }
  //   })
    const t1=gsap.timeline({
      scrollTrigger:{
        trigger:'#main1',
        start:"top center",
      }
      })
    const t3=gsap.timeline({
      scrollTrigger:{
        trigger:'#main3',
      start:"top center",
      }
      })
    let targets = gsap.utils.toArray(".circle"); 
  var circle_header = new SplitType(".circle_header")
  var main_3_header = new SplitType(".main_3_header")


t1.fromTo(".circle1",{
  opacity:0,
  y:300,},{
    opacity:1,
    y:0,
  duration:1,
  ease: "power2.out",
})
.fromTo(".circle2",{
  opacity:0,
  y:300,},{
    opacity:1,
    y:0,
    duration:1,
    ease: "power2.out",
},0.3).fromTo(".circle3",{
  opacity:0,
  y:300,},{
    opacity:1,
    y:0,
    
    duration:1,
    ease: "power2.out",
},0.6)
// .set(".circle_text",{
//   className:'circle_text_animation circle_text'
// })
.from(".text_3_glow",{
  opacity:1,

},0.9) .from(".text_2_glow",{
  opacity:1,
  
},0.9) .from(".text_1_glow",{
  opacity:1,
  
},0.9) 


.from(circle_header.words,{
  autoAlpha: 0,
    y:40,
  
    transform:'bottom',
    ease:"easeOut",
  
    stagger:0.05,
})

    //   const pin = gsap.to(
    //     circleRef,
    //   {

    //     scrollTrigger: {
    //       trigger:circleRef.current,
    //       pin:true,
    //      
    //       start: "top top",
    //       end:"+=1000",
    //       toggleActions: "play none none reverse"
    //     },

    //   }
    // );

  var mySplitText = new SplitType(".resourse_texts"),
 
    lines=(mySplitText.words)

    t2.to(".resourse_text",{
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

t3.from(main_3_header.words,{
  autoAlpha: 0,
    y:40,
  
    transform:'bottom',
    ease:"easeOut",
  
    stagger:0.05,
  })

})
return ()=>contextCreate.revert();
  
  
  },[])
  function skew(a,s){ 
gsap.to(a,
 
  { x:s},


)
  }



  return(
    <div id="resourse" className=" flex flex-col">
       <div className="flex justify-between self-center w-[95%] ">
          <h1 className="work_text menus small">OUR WORK</h1>
          <h1 className="work_text menus small">2023</h1>
        </div>
  <section  className="min-h-screen image_container bg-[#463838]">
    <div data-lenis-prevent className="flex flex-col  waves ">
     <motion.div
        viewport={{ once: true }}
         whileInView={()=>{skew('.skewElem')}} className='flex flex-col md:flex-row skewElem'>
        <img
        src='/work_6.png' alt='work' className="w-2/3 menus  hidden md:block " />
        <img
         src='/work_1.png' alt='work' className="w-1/3  hidden md:block" />
<img
         src='/work_1_mob.png' alt='work' className=" md:hidden" />
      </motion.div>
      <motion.div
        viewport={{ once: true }}
         whileInView={()=>{skew('.skewElem1')}} className='flex skewElem'>
        <img
       
         src='/work_2.png' alt='work' className="w-1/3 hidden md:block" />
        <img 
         
         src='/work_3.png' alt='work' className="w-2/3 hidden md:block" />
         <img
         src='/work_2_mob.png' alt='work' className=" md:hidden" />

      </motion.div>
      <motion.div
        viewport={{ once: true }}
         whileInView={()=>{skew('.skewElem2')}} className='flex skewElem'>
        <img 
         
         src='/work_4.png' alt='work' className="w-2/3  hidden md:block" />
        <img 
        
           src='/work_5.png' alt='work' className="w-1/3  hidden md:block" />
           <img
         src='/work_3_mob.png' alt='work' className=" md:hidden" />

      </motion.div>
    </div>
  </section>
<section data-lenis-prevent id="main1" className="md:min-h-screen min-h-[50vh] max-w-[100vw] flex flex-col gap-11 justify-center  bg-[#463838] skewEle">
  <div className="flex flex-col justify-center  mt-6 gap-9 self-center w-[80%]">
        <div  ref={circleRef}  className="circle_main_containe flex  justify-between w-fit self-center ">
      
          <div className="circle_container circle3  relative left-[6%]  ">
          <div className="circle_container absolute   blur-xl opacity-0 text_1_glow  ">
            <h1   className="circle_text self-center ">1. Strengthening your identity</h1>
          </div>
            <h1   className="circle_text self-center ">1. Strengthening your identity</h1>
          </div>
          <div className="circle_container circle2  "  >
          <div className="circle_container absolute   blur-xl opacity-0 text_2_glow  ">
            <h1   className="circle_text self-center ">2. Building a connection</h1>
          </div>

            <h1  className="circle_text self-center">2. Building a connection</h1>
          </div>
          <div className="circle_container circle1 relative right-[6%]   "  >
          <div className="circle_container absolute   blur-xl opacity-0 text_3_glow  ">
            <h1   className="circle_text self-center ">3. Planning for consistency</h1>
          </div>

            <h1  className="circle_text self-center">3. Planning for consistency</h1>
          </div>
        </div>
        <div className=" flex flex-col self-center w-[90%] md:w-[800px]">
        <h1  className="circle_header self-center text-center ">
          Your brand can become more than just a logo
        </h1>
        </div>
        </div>
</section>

  <section id="main2" className="md:min-h-screen min-h-[50vh] max-w-[100vw] flex flex-col gap-11 justify-center  bg-[#463838] skewEle">

<div className="w-[90%] flex flex-col self-center">
<div className=" self-center w-[90%]">
      <span
     
    
      className="resourse_text  w-[50%]  ">
        <span className="resourse_texts min-w-[70%]">From the next big thing to the world's best-known brands, we're at the heart of visionary &nbsp;
        <motion.svg  className="svg_01 " width="58" height="35" viewBox="0 0 58 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="_0" className="opacity-0" cx="17.1205" cy="17.1205" r="16.4699" stroke="#FFD551" stroke-width="1.3012"/>

<circle id="_1" className="opacity-0" cx="23.0604" cy="17.1205" r="16.4699" stroke="#FFD551" stroke-width="1.3012"/>
<circle id="_2" className="opacity-0" cx="29.0004" cy="17.1205" r="16.4699" stroke="#FFD551" stroke-width="1.3012"/>
<circle id="_3" className="opacity-0" cx="34.9403" cy="17.1205" r="16.4699" stroke="#FFD551" stroke-width="1.3012"/>
<circle id="_4" className="opacity-0" cx="40.8796" cy="17.1205" r="16.4699" stroke="#FFD551" stroke-width="1.3012"/>
</motion.svg>&nbsp;partnerships.</span>
     
      </span>
    </div>
    </div>
    <div className="flex self-center   justify-around w-[90%] ">
      <motion.img
       variants={fadeIn("up", "tween",.1,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }}
      src='/co_logo_1.png ' className="hidden md:block w-1/5 " alt='logo' />
      <motion.img
       variants={fadeIn("up", "tween",.2,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} src='/co_logo_2.png' className="hidden md:block w-1/5" alt='logo' />
      <motion.img
       variants={fadeIn("up", "tween",.3,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} src='/co_logo_3.png' className="hidden md:block w-1/5 " alt='logo' />
      <motion.img
       variants={fadeIn("up", "tween",.4,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} src='/co_logo_4.png' className="hidden md:block w-1/5" alt='logo' />
      <motion.img
       variants={fadeIn("up", "tween",.5,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} src='/co_logo_5.png' className="hidden md:block w-1/5" alt='logo' />
    </div>
    {/* <div className="flex flex-col gap-6 justify-around md:hidden self-center ">
      <div className="flex justify-center">
      <motion.img
       variants={fadeIn("up", "tween",.1,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }}
      src='/co_logo_1.png ' className="md:w-1/5 w-1/3" alt='logo' />
      <motion.img
       variants={fadeIn("up", "tween",.2,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} src='/co_logo_2.png' className="w-1/3" alt='logo' />
      <motion.img
       variants={fadeIn("up", "tween",.3,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} src='/co_logo_3.png' className="w-1/3 " alt='logo' />
      </div>
      <div className="flex justify-center">
      <motion.img
       variants={fadeIn("up", "tween",.4,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} src='/co_logo_4.png' className="w-1/3" alt='logo' />
      <motion.img
       variants={fadeIn("up", "tween",.5,1)}
       initial="hidden"
       whileInView="show"
      viewport={{ once: true }} src='/co_logo_5.png' className="w-1/3" alt='logo' />
      </div>
    </div> */}
  </section>
  <section id='main3' className="min-h-[75vh] flex flex-col justify-center bg-white skewEle">
   <div className="md:w-[90%] self-center flex flex-col gap-11 ">
    <div className="w-[90%] self-center md:self-start md:w-[100%]">
    <h1 className="main_3_header self-center flex pt-11 menus ">What we’ve been thinking lately. <a id="underline" className="main_3_header_span">See more.</a> </h1>
    </div>
   <div className="self-center hidden md:block">
    <div className="flex self-center pb-11">
      <motion.div variants={fadeIn("up", "tween",.1,1)}
       initial="hidden"
       viewport={{once:true}}
       whileInView="show" className="md:basis-1/2 flex md:flex-row flex-col border border-[#CDCDCD]">
      <img className="md:w-1/2 menus" alt='img_1' src="/img_1.png"/>
      <div className="flex flex-col justify-center w-1/2">
        <div className="w-[90%] self-center flex flex-col justify-center mt-11 gap-4 ">
        <h1 className="card_header  menus small">Herbet Blog</h1>
        <h1 className="card_header_2 menus">An interview with Learning Designer, Goldie Chaudhuri</h1>
        <p className="card_description  menus small">In our first ever podcast, we talk to Goldie Chaudhuri, about her experience as our Learning Designer, as well as on wider themes around design and its role in society today. You can access the full conversation via Podcast (Spotify / Apple Podcasts) Also enjoy a written summary of the conversation.</p>
        <div className="flex flex-col pb-4">
        <p className="card_bottom_header  menus small">Read More</p>
        <p className="card_bottom_text  menus small">Aug 2023</p>
        </div>
        </div>
      </div>
      </motion.div>
      <motion.div variants={fadeIn("up", "tween",.3,1)}
       initial="hidden"
       whileInView="show"
       viewport={{once:true}}
       className="basis-1/2  flex border border-[#CDCDCD]">
      <img className="w-1/2 menus" alt='img_1' src="/img_2.png"/>
      <div className="flex flex-col justify-center  w-1/2">
        <div className="w-[90%] self-center flex flex-col justify-center mt-11 gap-4 ">
        <h1 className="card_header  menus small">Herbet Blog</h1>
        <h1 className="card_header_2 menus">An interview with Learning Designer, Goldie Chaudhuri</h1>
        <p className="card_description">In our first ever podcast, we talk to Goldie Chaudhuri, about her experience as our Learning Designer, as well as on wider themes around design and its role in society today. You can access the full conversation via Podcast (Spotify / Apple Podcasts) Also enjoy a written summary of the conversation.</p>
        <div className="flex flex-col pb-4">
        <p className="card_bottom_header  menus small">Read More</p>
        <p className="card_bottom_text  menus small">Aug 2023</p>
        </div>
        </div>
      </div>
      </motion.div>
    </div>
    </div>
    <div className="self-center md:hidden">
    <motion.div variants={fadeIn("up", "tween",.1,1)}
       initial="hidden"
       viewport={{once:true}}
       whileInView="show" className="md:basis-1/2 flex md:flex-row flex-col ">
      <img className="" alt='img_1' src="/img_1_mob.png"/>
      <div className="flex flex-col justify-center ">
        <div className="w-[90%] self-center flex flex-col justify-center mt-11 gap-4 ">
        <h1 className="card_header ">Herbet Blog</h1>
        <h1 className="card_header_2">An interview with Learning Designer, Goldie Chaudhuri</h1>
        <p className="card_description">In our first ever podcast, we talk to Goldie Chaudhuri, about her experience as our Learning Designer, as well as on wider themes around design and its role in society today. You can access the full conversation via Podcast (Spotify / Apple Podcasts) Also enjoy a written summary of the conversation.</p>
        <div className="flex flex-col pb-4">
        <p className="card_bottom_header">Read More</p>
        <p className="card_bottom_text">Aug 2023</p>
        </div>
        </div>
      </div>
      </motion.div>
    </div>
   </div>
  </section>
  </div>
);
  }

export default Resource;
