'use client'
import '../styles/globals.css';
import { Observer } from "gsap/Observer";
import {gsap} from "gsap";
import { useEffect } from 'react';
gsap.registerPlugin(Observer);

const RootLayout = ({ children }) => {
  let mouseX = 0
  let   mouseY = 0
  useEffect(()=>{
    const contextCreate=gsap.context(()=>{

      gsap.to({},  {
        repeat: -1,
    duration:0.016,
    delay:0.01,
        onRepeat: function () {
            gsap.set(".cursor", {
              
                css: {
                    left: mouseX+10,
                    top: mouseY+10
                },
                
                ease:"back.inOut",
                delay:'0.05',
            })
        }
    });
    

      Observer.create({
        type: "wheel,touch,pointer",
        target:'#body',
        // wheelSpeed: -1,
     
        onMove:(self)=>{
          mouseX = self.x;
          mouseY = self.y;
        },
        // tolerance: 10,
        // preventDefault: true
      });
    })
    return ()=>contextCreate.revert();
  })
  return(
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
<script src="./page.js"></script>
    </head>
    <body id="body">
      <div className='cursor hidden md:block'> </div>
      {children}
     
      </body>
  </html>
);
  }
export default RootLayout;
