/* eslint-disable */
'use client';
import { motion } from "framer-motion";
import SplitType from "split-type";
import MagnetEffect from "../sections/MagnetEffect"
import gsap from "gsap";
import { fadeIn,slideIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "/utils/motion.js";
import { useEffect, useLayoutEffect, useRef } from "react";
import { zoomIn } from "../utils/motion";
import Link from "next/link";
import { Observer } from "gsap/Observer";

const HeroAbout = () =>{
  const text=["aa", "bb", "ccc", "dddd", "eeee", "ffff", "gggg"]

let textRef = useRef();
let circleRef1 = useRef();
 let circleRef2 = useRef();
let circleRef3=useRef()
let circleMenuRef1 = useRef();
 let circleMenuRef2 = useRef();
let circleRefMenu3=useRef()
let circleText1=useRef()
let circleText2=useRef()
let circleText3=useRef()
let wrapperRef=useRef()
let firstRef=useRef()
let secondRef=useRef()


// gsap.set(".ball", {xPercent: -50, yPercent: -50});

// const ball = document.querySelector(".ball");
// const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
// const mouse = { x: pos.x, y: pos.y };
// const speed = 0.2;

// const xSet = gsap.quickSetter(ball, "x", "px");
// const ySet = gsap.quickSetter(ball, "y", "px");

// window.addEventListener("mousemove", e => {    
//   mouse.x = e.x;
//   mouse.y = e.y;  
// });

// gsap.ticker.add(() => {
  
//   // adjust speed for higher refresh monitors
//   const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
//   pos.x += (mouse.x - pos.x) * dt;
//   pos.y += (mouse.y - pos.y) * dt;
//   xSet(pos.x);
//   ySet(pos.y);
// });

useEffect(()=>{
   heroAnimation()
  const ctx3=gsap.context(()=>{
    const circleTimeline=gsap.timeline();
    circleTimeline.fromTo(".menus1",{x:20, rotation:"-5", y:-10},{x: -40,y:10, rotation:5, repeat:-1, duration:2.5,scrub: true, yoyo: true ,  ease: "easeOut(10, 2.3)"})
    circleTimeline.fromTo(".menus2",{x:20, rotation:"-5" , y:-10},{x: -40,y:10, rotation:5, repeat:-1, duration:2.5,scrub: true, yoyo: true ,  ease: "ease.out(1, 2.3)"},0.3)
    circleTimeline.fromTo(".menus3",{x:20, rotation:"-5" , y:-10},{x: -40,y:10, rotation:5, repeat:-1,  duration:2.5,scrub: true, yoyo: true ,  ease: "ease.out(1, 2.3)"},0.6)


   const t1=gsap.timeline()
   var pText = new SplitType(".description_header")
   var hText = new SplitType(".hero_header")

     // t1.from(charss.words,{
  //   opacity:0,
  //   y:40,
  //   transform:'bottom',
  //   ease:"easeOut",
  
  //   stagger:0.2,
  //   duration:1,
  // })


    t1.to(".hide_container",{
      autoAlpha:1
    })
    
    .fromTo(".description_container",
    {y:-300},
    {
     y:-300,
     autoAlpha: 1,
    }).from(pText.words,{
      autoAlpha: 0,
        y:40,
      
        transform:'bottom',
        ease:"easeOut",
      
        stagger:0.05,
        onComplete:containerMove,
      })
      .from(hText.words,{
        autoAlpha: 0,
        y:40,
        transform:'bottom',
        ease:"easeOut",
      
        stagger: 0.05,
        duration:1,
      },)

     function containerMove(){
      gsap.to(".description_container",
      {y:0,
      ease:"easeIn",
    duration:1,})
     }

     let mouseX = 0
     let   mouseY = 0


   
    //  gsap.set(".cursour", {xPercent: -50, yPercent: -50});

    //  let xTo = gsap.quickTo(".cursour", "x", {duration: 0.6, ease: "power3"}),
    //      yTo = gsap.quickTo(".cursour", "y", {duration: 0.6, ease: "power3"});
   
    //      Observer.create({
    //        type: "wheel,touch,pointer",
    //        target:'#container',
    //        // wheelSpeed: -1,
        
    //        onMove:(self)=>{
    //          xTo(self.x);
    //          yTo(self.y);
    //        },
    //        // tolerance: 10,
    //        // preventDefault: true
    //      });
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
      


  })


  return () => ctx3.revert();  //cleaedUp

},[])



function heroAnimation(){
  gsap.fromTo(circleRef1,  {opacity: 0,x:100, y:-200}, {opacity: 1, duration: 1,x:0 , y:0, delay:2.3 });
  gsap.fromTo(circleRef2,  { scaleX:2.5, scaleY:2.5, y:-200}, { scaleX:1, scaleY:1, duration: 1,});
 gsap.fromTo(circleRef2,  {opacity: 0.8,y:-200 , }, {opacity: 1,  duration: 1,y:0, delay:2 });
  gsap.fromTo(circleRef3,  {opacity: 0,x:-100,y:-200}, {opacity: 1, duration: 1,x:0 , y:0, delay:2.3 });
  gsap.fromTo(textRef,  {opacity: 0,x:200}, {opacity: 0.8, duration: 1,x:0 ,delay:3 , ease: Power1.easeIn});
  gsap.fromTo(circleText1,{opacity: 0} , {opacity:1, delay:2.5 , ease: "Power1.easeIn"})
  gsap.fromTo(circleText2,{opacity: 0} , {opacity:1, delay:2.5 , ease: "Power1.easeIn"})
  gsap.fromTo(circleText3,{opacity: 0} , {opacity:1, delay:2.5 , ease: "Power1.easeIn"})
  gsap.to(textRef,{opacity:1})
  var mySplitText = new SplitType("#hero_headers"),
 
  lines=(mySplitText.words)
  function allDone() {
    mySplitText.revert();
   // tl.kill()
  }
  gsap.timeline()
.fromTo(lines,{opacity:0, y:80} , {duration: 2 ,opacity:1, y:0 ,  ease:"easeInOut",stagger:0.1, delay:2.3});
}

// useLayoutEffect(() => {
//   const ctx = gsap.context((self) => {
//     const sections = self.selector("section");

//     const stopPanel = sections.findIndex((section) => section.dataset.pin);
//     const stopPanel2 = sections.findIndex((section) => section.dataset.pin2);

//     const tl = gsap
//       .timeline({
//         defaults: {
//           ease: "easeOut"
//         },
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           pin: true,
//           scrub: 1,
//           end: () => "+=" + wrapperRef.current.offsetWidth
//         }
//       })
//       .to(sections, {
//         xPercent: -(100 * stopPanel),
//         duration: stopPanel,
//         // snap: 1 / (sections.length - 1),


//       })
//       .to(firstRef.current, {
//         duration: 1,
//         scale: 1
//       })

//       .to(sections, {
//         xPercent: -(100 * stopPanel2),
//         duration: stopPanel2
//       })
//       .to(secondRef.current, {
//         scale: 1,
//        duration: 1,
//       })
     
//   }, wrapperRef);
//   return () => ctx.revert();
// }, []);


function getMenu(){
  
  // gsap.to(firstRef,{x:"-100%" , duration:3})
  gsap.to(secondRef,{x:"-100%", duration:2})
  
}

function getBack(){
  
  gsap.to(secondRef,{x:"0%", duration:2})
  
}




  return (


<div   className="flex   mmin-h-screen w-screen overflow-hidden " ref={el=>wrapperRef=el} >
      <section ref={el=>firstRef=el} className=" flex flex-col    bg-[#463838] min-w-[100vw] header">
      <motion.div  className="flex justify-end w-[95%] self-end  md:h-[10vh] ">
        
       <svg onClick={()=>{getMenu()}} width="57" height="64" viewBox="0 0 57 64"  className="p-4 menus" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M55.6875 0C56.3476 0.247752 56.8311 0.659401 56.9616 1.38741C56.9923 1.55512 57 1.73045 57 1.90578C57 18.6309 57 35.3523 57 52.0774C57 53.4915 56.1058 54.5168 54.6667 54.7684C49.4207 55.6908 44.1747 
56.6208 38.9287 57.5394C37.3207 57.8215 35.7089 58.0959 34.0933 58.3589C32.9075 58.5533 32.0018 57.8291 31.9941 56.6399C31.9711 53.8231 31.9826 51.0026 31.9788 48.1858C31.9788 46.7565 31.9788 45.3233 31.9788 
43.894C31.9788 43.7796 31.9788 43.6653 31.9788 43.4747C31.7716 43.6348 31.6142 43.7453 31.4684 43.8635C29.5688 45.4034 27.6845 46.9699 25.7542 48.4755C25.2783 48.849 25.0788 49.1882 25.0864 49.7981C25.1248 52.409 
25.1056 55.0238 25.1018 57.6347C25.1018 59.0526 24.1309 60.1274 22.7148 60.3676C19.9556 60.8326 17.2002 61.3319 14.4409 61.816C12.0463 62.2352 9.65542 62.6545 7.26076 63.0738C5.60675 63.3635 3.95657 63.6455 2.30256 
63.9314C2.21814 63.9466 2.13755 63.9771 2.05312 64H1.66168C0.583316 63.8094 0 63.0624 0 61.6902C0.0115128 55.0352 0.00767522 48.3802 0.00767522 41.7252C0.00767522 32.0133 0.00767522 22.3053 0.0115128 12.5934C0.0115128 
12.1665 0.0345385 11.732 0.122803 11.3165C0.379923 10.1311 1.21268 9.38407 2.42537 9.17825C3.28499 9.03341 4.14078 8.87714 5.0004 8.72849C10.7184 7.72985 16.4403 6.73122 22.1622 5.73259C22.4423 5.68304 22.7186 5.62587 
22.9988 5.59538C24.2498 5.45054 25.0941 6.18998 25.098 7.44399C25.1018 10.3065 25.1056 13.1651 25.0941 16.0276C25.0941 16.2983 25.1862 16.424 25.4242 16.5346C27.5003 17.4875 29.5726 18.4518 31.6449 19.4161C31.7409 19.4619 
31.8368 19.4962 31.975 19.5533C31.975 19.3742 31.975 19.2484 31.975 19.1226C31.975 14.8422 31.975 10.5618 31.975 6.28146C31.975 4.96266 32.8307 3.89542 34.1432 3.64767C36.1656 3.27032 38.1957 2.92728 40.2258 2.569C44.2399 
1.86386 48.2541 1.16634 52.2644 0.461199C53.101 0.312548 53.9338 0.156274 54.7665 0C55.0735 0 55.3767 0 55.6837 0L55.6875 0ZM20.6118 33.0577C20.6118 33.0577 20.6003 33.0577 20.5926 33.0577C20.5926 35.3332 20.5926 37.6087 
20.5926 39.8842C20.5926 41.2183 20.5888 42.5485 20.5926 43.8826C20.5926 44.6525 21.0109 45.1861 21.7055 45.3157C22.2505 45.4186 22.7148 45.228 23.1331 44.8964C23.7548 44.4009 24.3688 43.9016 24.9867 43.3985C29.4575 39.7584 
33.9245 36.1184 38.3953 32.4745C39.0515 31.9371 39.7346 31.4264 40.3486 30.8432C41.3119 29.9284 41.0854 28.6897 39.8881 28.1332C37.3131 26.9325 34.738 25.7395 32.1668 24.5389C29.2196 23.1667 26.2684 21.7945 23.3211 20.4224C22.9796 
20.2623 22.6304 20.167 22.2466 20.2508C21.2987 20.4567 20.6003 21.3067 20.6003 22.2938C20.6003 23.9404 20.6118 25.587 20.6156 27.2336C20.6156 29.1737 20.6156 31.1138 20.6156 33.0539L20.6118 33.0577Z" fill="#FFD551"/>
</svg>

       </motion.div>
        <div  className="flex flex-col justify-center min-h-[80vh] md:h-[90vh] ">
     
       
       <div className="flex flex-col self-center justify-center hide_container gap-6   md:max-w-[850px] w-[80%]">
        <div  className="flex flex-col  gap-6  justify-center">
        <h1  id="hero_headers" className="m hero_header_about text-centr self-center text-[#FFD551]  menus">We help craft transformative brands 
that propel the world forward, 
<a className="text-[#FFD551]">one story at a time. </a></h1>
    </div>
    {/* <div className="description_container self-center flex justify-center md:w-[70%] ">
    <p className="description_header menus small">We're the folks you go to before shooting for the stars. Before aiming high, we ensure your brand's essence is undeniably strong.</p>
        </div> */}
       
    
        </div>
        <div className="flex justify-center  mt-6 self-center">
        <div className="circle_main_containe flex  justify-between w-fit self-center ">
          <div className="circle_container  opacity-0 relative left-[5%] menus  " ref={el=>circleRef1=el}>
            <h1 ref={el=>{circleText1=el}} className="circle_text self-center ">Design</h1>
          </div>
          <div className="circle_container  left-[20%] opacity-[0] menus"  ref={el=>circleRef2=el}>
            <h1 ref={el=>{circleText2=el}} className="circle_text self-center">Culture</h1>
          </div>
          <div className="circle_container relative right-[5%]  opacity-[0] menus "  ref={el=>circleRef3=el}>
            <h1 ref={el=>{circleText3=el}} className="circle_text self-center">Purpose</h1>
          </div>
        </div>
        </div> 
        </div>
     
      </section>

      <section id='container' ref={el=>secondRef=el} className="bg-[#FFD551] min-h-screen flex flex-col min-w-[100vw] menu_conatainer">
      {/* <div className='cursour'>  </div> */}

      <svg onClick={()=>{getBack()}} width="57" height="64" className="p-4 menus cursor-pointer" viewBox="0 0 57 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55.6875 0C56.3476 0.247752 56.8311 0.659401 56.9616 1.38741C56.9923 1.55512 57 1.73045 57 1.90578C57 18.6309 57 35.3523 57 52.0774C57 53.4915 56.1058 54.5168 54.6667 54.7684C49.4207 55.6908 44.1747 
56.6208 38.9287 57.5394C37.3207 57.8215 35.7089 58.0959 34.0933 58.3589C32.9075 58.5533 32.0018 57.8291 31.9941 56.6399C31.9711 53.8231 31.9826 51.0026 31.9788 48.1858C31.9788 46.7565 31.9788 45.3233 31.9788 
43.894C31.9788 43.7796 31.9788 43.6653 31.9788 43.4747C31.7716 43.6348 31.6142 43.7453 31.4684 43.8635C29.5688 45.4034 27.6845 46.9699 25.7542 48.4755C25.2783 48.849 25.0788 49.1882 25.0864 49.7981C25.1248 52.409 
25.1056 55.0238 25.1018 57.6347C25.1018 59.0526 24.1309 60.1274 22.7148 60.3676C19.9556 60.8326 17.2002 61.3319 14.4409 61.816C12.0463 62.2352 9.65542 62.6545 7.26076 63.0738C5.60675 63.3635 3.95657 63.6455 2.30256 
63.9314C2.21814 63.9466 2.13755 63.9771 2.05312 64H1.66168C0.583316 63.8094 0 63.0624 0 61.6902C0.0115128 55.0352 0.00767522 48.3802 0.00767522 41.7252C0.00767522 32.0133 0.00767522 22.3053 0.0115128 12.5934C0.0115128 
12.1665 0.0345385 11.732 0.122803 11.3165C0.379923 10.1311 1.21268 9.38407 2.42537 9.17825C3.28499 9.03341 4.14078 8.87714 5.0004 8.72849C10.7184 7.72985 16.4403 6.73122 22.1622 5.73259C22.4423 5.68304 22.7186 5.62587 
22.9988 5.59538C24.2498 5.45054 25.0941 6.18998 25.098 7.44399C25.1018 10.3065 25.1056 13.1651 25.0941 16.0276C25.0941 16.2983 25.1862 16.424 25.4242 16.5346C27.5003 17.4875 29.5726 18.4518 31.6449 19.4161C31.7409 19.4619 
31.8368 19.4962 31.975 19.5533C31.975 19.3742 31.975 19.2484 31.975 19.1226C31.975 14.8422 31.975 10.5618 31.975 6.28146C31.975 4.96266 32.8307 3.89542 34.1432 3.64767C36.1656 3.27032 38.1957 2.92728 40.2258 2.569C44.2399 
1.86386 48.2541 1.16634 52.2644 0.461199C53.101 0.312548 53.9338 0.156274 54.7665 0C55.0735 0 55.3767 0 55.6837 0L55.6875 0ZM20.6118 33.0577C20.6118 33.0577 20.6003 33.0577 20.5926 33.0577C20.5926 35.3332 20.5926 37.6087 
20.5926 39.8842C20.5926 41.2183 20.5888 42.5485 20.5926 43.8826C20.5926 44.6525 21.0109 45.1861 21.7055 45.3157C22.2505 45.4186 22.7148 45.228 23.1331 44.8964C23.7548 44.4009 24.3688 43.9016 24.9867 43.3985C29.4575 39.7584 
33.9245 36.1184 38.3953 32.4745C39.0515 31.9371 39.7346 31.4264 40.3486 30.8432C41.3119 29.9284 41.0854 28.6897 39.8881 28.1332C37.3131 26.9325 34.738 25.7395 32.1668 24.5389C29.2196 23.1667 26.2684 21.7945 23.3211 20.4224C22.9796 
20.2623 22.6304 20.167 22.2466 20.2508C21.2987 20.4567 20.6003 21.3067 20.6003 22.2938C20.6003 23.9404 20.6118 25.587 20.6156 27.2336C20.6156 29.1737 20.6156 31.1138 20.6156 33.0539L20.6118 33.0577Z" fill="#463838"/>
</svg>
<div className=" md:block hidden">
<div className="flex flex-col justify-center min-h-[90vh] mb-24 ">

        <div className="circle_main_containe gap-11 flex  self-center ">
          <a  onClick={()=>{getBack()}} href="#resourse" className="circle_container_menu relative  menus menus1 left-[-20%] " >
            <h1 className="circle_text_menu circle_cursour self-center  ">Work</h1>
          </a>
         
          <Link href={"AboutUs"} className="circle_container_menu relative menus menus3 left-[20%]  " >
            <h1  className="circle_text_menu circle_cursour self-center">Resources</h1>
          </Link>


        </div>
        <div className="flex justify-center">
        <a  onClick={()=>{getBack()}} href="#footer" className="circle_container_menu  circle_cursour relative menus2 menus left-[0%]  "  >
            <h1  className="circle_text_menu self-center ">Contact</h1>
          </a>
          </div>
      
        
        </div>
        </div>

        <div className="flex flex-col self-center  md:hidden  ">
      
          <div className="circle_container_menu relative   bottom-[20px] " >
            <h1 className="circle_text_menu self-center  ">Design</h1>
          </div>

          
          <div className="circle_container_menu relative   bottom-[75px]   " >
            <h1  className="circle_text_menu self-center">Resources</h1>
          </div>
       
        <div className="circle_container_menu relative  bottom-[130px]  "  >
            <h1  className="circle_text_menu self-center ">Contact</h1>
          </div>
        
        </div>
      </section>
     

      </div>
    
);
}
export default HeroAbout;
