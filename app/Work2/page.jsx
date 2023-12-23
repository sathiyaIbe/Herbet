'use client';
import { FooterWork } from '../../components';
export default function Work2 () {

  return (
    <div className='min-h-screen bg-[#F9F9F9]  overflow-hidden'>
        <div className='flex justify-end'>
            <img src="/logo.svg" className='p-3 w-16' alt='logo'/>
          
        </div>
        <div className='flex flex-col w-[90%]'>
            <div className='flex flex-col self-center w-[90%] gap-4'>
                <h1 className='work_header'>Pinkfish</h1>
                <p className='work_description'>&#123;<span className='font-light'>Partial Rebranding, Web Development</span>&#125;</p>
            </div>
        </div>
        <div className='flex flex-col  mt-11 overflow-hidden'>
            <img src='/pf/pf_cover.png' className='' alt='show case'/>
            <div className='flex gap-1 '>

                 <div className=' bg-[#000] w-full flex flex-col justify-center'>
                    <div className='self-center flex justify-center gap-6 w-[80%] mt-24 mb-24'>
                        <h1 className='show_card_header w-[30%]'> Enhancing the pinkfish brand</h1>
                        <div className='flex flex-col gap-6 w-[50%]'>
                        <p className='show_card_description'>The client wanted to expand their brand into sub-brands, and we had to create a base design that wouldn’t clash with the other sub-brand designs.</p>
                        <p className='show_card_description'>We decided to make Black more prominent in their base designs so their sub-brands would pop out more against an inconspicuous color.</p>
                        <p className='show_card_description'>The client’s vibrant pink still manages to shine through the black when needed. </p>
                        </div>
                    </div>
                    </div>
                                  
            
            </div>
            <img src='/pf/pf_1.png' className='' alt='show case'/>

            <div className='flex'>
            <img src='/pf/pf_2.png' className='w-1/3' alt='show case'/>
            <img src='/pf/pf_3.png' className='w-2/3' alt='show case'/>

            </div>
            
        </div>
        {/* <div className='flex flex-col  gap-6 mt-11 mb-11'>
            <div className='w-[70%] self-center gap-6'>
            <h1 className='work1_text_header'>
            Challenges
            </h1>
<div className='flex flex-col gap-1'>
    <h1 className='work1_text_subtitle'>
    Timeline
    </h1>
    <p className='work1_text_description'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </p>
</div>
<div className='flex flex-col gap-1'>
    <h1 className='work1_text_subtitle'>
    Product
    </h1>
    <p className='work1_text_description'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </p>
</div>
</div>
        </div> */}
        <div className='bg-[#000] flex justify-center '>
        <img src='/pf/pf_mob_1.png' className='w-1/3' alt='show case'/>
        <div className='absolute left-[30%] '>
        <img src='/pf/pf_mob_2.png' className=' relative top-[350px] w-[100px] ' alt='show case'/>
        </div>

        </div>

      
{/* <div className='flex gap-1 bg-white mt-2 mb-11'>
    <div className='basis-2/5'>
        <img src='/show_8.png' alt='show'/>
    </div>
    <div className='basis-3/5 flex gap-1'>
        <div className='flex flex-col gap-1'>
        <img src='/show_9.png' alt='show'/>
        <img src='/show_10.png' alt='show'/>

    </div>
    <div className='flex flex-col gap-1'>
        <img src='/show_11.png' alt='show'/>
        <img src='/show_12.png' alt='show'/>

    </div>
    <div className='flex flex-col gap-1'>
        <img src='/show_13.png' alt='show'/>
        <img src='/show_14.png' alt='show'/>

    </div>
    </div>

</div> */}
<FooterWork />
    </div>
  )
}
