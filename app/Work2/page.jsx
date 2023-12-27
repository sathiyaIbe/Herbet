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

        <div className='bg-[#000] flex justify-center '>
        <div className=' '>
        <img src='/pf/pf_mob_2.png' className=' relative top-[40%] left-[50%] w-[100px] ' alt='show case'/>
        </div>
        <img src='/pf/pf_mob_1.png' className='w-1/3' alt='show case'/>
       

        </div>

        <div className='bg-black min-h-[50vh] pt-24 pb-24 '>
            <div className=' flex flex-col'>
                <div className='self-center flex  w-[90%]'>
                    <div className='absolute'>

                    <h1 className='show_card_header w-[50%] text-white'>Enhancing the pinkfish brand</h1>
                    <div className='pb-24'>
                                        <img src='/pf/pf_sparkle.svg' className='absolute  left-[55%] w-[150px] ' alt='show'/>
                                        </div>

                {/* <img src='/pf/pf_wave.svg' className=' relative w-[200px] top-[700px] left-[600px]' alt='show'/>
                <img src='/pf/pf_wave.svg' className=' relative w-[200px] top-[40%]' alt='show'/>
                <img src='/pf/pf_wave.svg' className=' relative w-[200px] top-[40%]' alt='show'/> */}
                </div>
              
        <img src='/pf/banner_group.png' className='' alt='show'/>
        <div className='flex flex-col justify-center '>
            <div className='mb-24'>
        <img src='/pf/pf_fish.svg' className='absolute  left-[5%] w-[60px] ' alt='show'/>
        </div>
        <div className='mt-24'>
        <img src='/pf/pf_star.svg' className='absolute  left-[85%] w-[60px] ' alt='show'/>
        </div>
        </div>
        <div className=' flex flex-col justify-end '>
        <img src='/pf/pf_wave.svg' className='absolute  left-[47%] w-[200px] ' alt='show'/>
        <h1 className='show_card_description text-white w-[30%] left-[65%] absolute self-center'>Titae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.</h1>

        </div>
        </div>
        </div>
            {/* <div className='' >
                <h1 className='show_card_head text-white'>Enhancing the pinkfish brand</h1>
            </div>
            <div className='flex flex-col  gap-1 bg-black pt-11 w-[95%]'>

        <img src='/pf/pf_banner_1.png' className=' w-1/2 self-end' alt='show'/>
        <img src='/pf/pf_banner_2.png' className=' w-1/2 relative top-[-200px] left-[-25%] self-end' alt='show'/>
        
        <img src='/pf/pf_banner_3.png' className=' w-1/2 relative top-[-400px] left-[-45%] self-end' alt='show'/>
        <img src='/pf/pf_wave.svg' className=' relative w-[200px] top-[40%]' alt='show'/>

        </div>  */}
       {/* <div className='' >
                <h1 className='banner_text_pf text-white'>Titae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.</h1>
            </div> */}
    </div>
<FooterWork />
    </div>
  )
}
