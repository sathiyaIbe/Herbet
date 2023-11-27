'use client'
import { useEffect } from 'react';
import { Footer, Navbar } from '../components';
import { Resource, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap';
const Page = () =>{

  useEffect(()=>{

  
    const lenis = new Lenis({
     

    })
  
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  
})
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
     <Footer />
  </div>
);
  }
export default Page;
