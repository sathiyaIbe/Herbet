'use client';

const Footer = () => (
  <footer className="min-h-[60vh] flex flex-col bg-[#FFD551]">
    <div className="w-[90%] self-center flex md:flex-row flex-col gap-11 md:gap-0 pt-11 pb-11">
<div className="basis-1/2">
  <img src='/calendar.svg' className="" alt='calendar'/> 
</div>
<div className="basis-1/2 flex flex-col justify-center">
<ul className="flex flex-col self-center gap-6">
  <li className="calendar_list">Get Faciliated branding workshop</li>
  <li className="calendar_list">Learn design fundamentals</li>
  <li className="calendar_list">Brand with business strategies in mind</li>
  <button type='button' className="button_footer w-fit">Get in touch with us now</button>
</ul>
</div>

    </div>
    <hr className="footer_hr"/>
    <div className="w-[90%] gap-11 self-center flex md:flex-row flex-col md:justify-between pt-4 pb-8">
      <h1 className="footer_bottom_text order-2 md:order-1 text-center">
      Created by © Herbet 2023 
      </h1>
      <div className="flex self-en w-full md:w-fit gap-6 order-1 md:order-2">
<img src='/twitter_icon.svg' className="cursor-pointer" alt="twitter"/>
<img src='/insta_icon.svg' className="cursor-pointer" alt="instagram"/>
<img src='/linkedin_icon.svg' className="cursor-pointer" alt="linkedin"/>
<img src='/youtube_icon.svg' className="cursor-pointer" alt="youtube"/>
<img src='/whatsapp_icon.svg' className="cursor-pointer" alt="whatsapp"/>


      </div>
    </div>
  </footer>
);

export default Footer;
