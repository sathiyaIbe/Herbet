/* eslint-disable */
'use client';

import { useEffect } from "react";

const Footer = () => {
  useEffect(()=>{
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
  return(
  <footer id="footer" className="min-h-[60vh] flex flex-col justify-between bg-[#FFD551] z-40">
    <div className="w-[80%] h-[50vh] self-center flex md:flex-row justify-center flex-col gap-11 md:gap-0 pt-11 pb-11">

<div className="flex flex-col justify-center">
<ul className="flex flex-col self-cente gap-6">
  <li className="calendar_list1 menus">Looking for something similar<span className="font-bold font-[founder]">?</span>
</li>
  
  <button type='button' className=" w-fit menus self-center calendar_list1_talk">Talk to us</button>
</ul>
</div>

    </div>
    <div className="flex flex-col">    <hr className="footer_hr menus small"/>

    <div className="w-[90%] gap-11 self-center flex md:flex-row flex-col md:justify-between pt-4 pb-4">

      <h1 className="footer_bottom_text order-2 md:order-1 text-center menus small">
      Created by © Herbet 2023 
      </h1>
      <div className="flex justify-center md:self-start self-en w-full md:w-fit gap-6 order-1 md:order-2">
<img  src='/twitter_icon.svg' className="cursor-pointer menus small" alt="twitter"/>
<img src='/insta_icon.svg' className="cursor-pointer menus small " alt="instagram"/>
<img src='/linkedin_icon.svg' className="cursor-pointer menus small" alt="linkedin"/>
<img src='/youtube_icon.svg' className="cursor-pointer menus small" alt="youtube"/>
<img src='/whatsapp_icon.svg' className="cursor-pointer menus small" alt="whatsapp"/>


      </div>
    </div>
    </div>
  </footer>
);
  }

export default Footer;
