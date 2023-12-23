'use client'
import { useEffect } from 'react';
import { Footer, Navbar } from '../components';
import { Resource, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap';
const Page = () =>{

  //  useEffect(()=>{

  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  //     direction: 'vertical', // vertical, horizontal
  //     gestureDirection: 'vertical', // vertical, horizontal, both
  //     smooth: true,
  //     mouseMultiplier: 1,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //     infinite: false,
  //   })
  
  //   function raf(time) {
  //       lenis.raf(time)
  //       requestAnimationFrame(raf)

  //   }
  //   requestAnimationFrame(raf)
  // },[])
  return (
  <div className='bg-[#463838]'>
    {/* <Navbar /> */}
    <Hero />
    <Resource />
    {/* <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
 */}
     {/* <Footer /> */}
  </div>
);
  }
export default Page;
