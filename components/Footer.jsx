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
  <footer className="min-h-[60vh] flex flex-col bg-[#FFD551]">
    <div className="w-[90%] self-center flex md:flex-row flex-col gap-11 md:gap-0 pt-11 pb-11">
<div className="basis-1/2">
  <img src='/calendar.svg' className="" alt='calendar'/> 
</div>
<div className="basis-1/2 flex flex-col justify-center">
<ul className="flex flex-col self-center gap-6">
  <li className="calendar_list menus">Get Faciliated branding workshop</li>
  <li className="calendar_list menus">Learn design fundamentals</li>
  <li className="calendar_list menus">Brand with business strategies in mind</li>
  <button type='button' className="button_footer w-fit">Get in touch with us now</button>
</ul>
</div>

    </div>
    <hr className="footer_hr"/>
    <div className="w-[90%] gap-11 self-center flex md:flex-row flex-col md:justify-between pt-4 pb-8">
      <h1 className="footer_bottom_text order-2 md:order-1 text-center">
      Created by © Herbet 2023 
      </h1>
      <div className="flex justify-center md:self-start self-en w-full md:w-fit gap-6 order-1 md:order-2">
<img  src='/twitter_icon.svg' className="cursor-pointer menus small" alt="twitter"/>
<img src='/insta_icon.svg' className="cursor-pointer menus " alt="instagram"/>
<img src='/linkedin_icon.svg' className="cursor-pointer menus" alt="linkedin"/>
<img src='/youtube_icon.svg' className="cursor-pointer menus" alt="youtube"/>
<img src='/whatsapp_icon.svg' className="cursor-pointer menus" alt="whatsapp"/>


      </div>
    </div>
  </footer>
);
  }

export default Footer;
