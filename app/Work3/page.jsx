'use client';
import { FooterWork } from '../../components';
export default function Work3 () {

  return (
    <div className='min-h-screen bg-[#F9F9F9]  overflow-hidden'>
        <div className='flex justify-end'>
            <img src="/logo.svg" className='p-3 w-16' alt='logo'/>
          
        </div>
        <div className='flex flex-col w-[90%]'>
            <div className='flex flex-col self-center w-[90%] gap-4'>
                <h1 className='work_header'>Ad Labs</h1>
                <p className='work_description'>&#123;<span className='font-light'>Partial Rebranding, Web Development</span>&#125;</p>
            </div>
        </div>
        <div className='flex flex-col  mt-11 overflow-hidden'>
            <img src='/al/al_cover.png' className='' alt='show case'/>
            <div className='flex gap-1 '>

                 <div className=' bg-[#0618DE] flex flex-col w-full '>
                    <div className='w-[80%] flex flex-col'>
                        <div className='self-center flex'>
                            <div className='basis-1/2'>
                              
                                <img className='' src='/al/al_logo_animation.gif' alt="logo"/>
                                
                    </div>

                    <div className='self-center flex flex-col gap-6  mt-24 mb-24 basis-1/2'>
                        <h1 className='show_card_header '> The Client needed it ASAP</h1>
                        <div className='flex flex-col gap-6 '>
                        <p className='show_card_description'>Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place</p>
                        <p className='show_card_description'>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className='flex justify-between pb-24'>
                      
                    <img className='w-2/4' src='/al/al_gallery_1.png' alt="logo"/>
                   
                    <div className='al_gif_play_1 w-1/4'>
                   
                    </div>
                    <div className= 'al_gif_play w-1/4'>
                    {/* <img className='w-1/4 hover:opacity-0 absolute' src='/al/al_gallery_3.png' alt="logo"/>
                    <img className='' src='/al/al_gif_2.gif' alt="logo"/> */}

                    </div>


                    </div>
                    <div className='flex justify-center pb-24' >
                        <img className='w-1/2' src="/al/al_logo.png" alt="logo_text"/>
                    </div>
                    <div className='flex flex-col  gap-3 pb-24'>
                        <div className='w-[80%] self-center flex flex-col justify-center gap-3'>
                    <div className='al_gif_play_2  self-center max-w-[100vw]   h-[100vh]'>
                  
                    </div>
                    <div className='flex gap-3 w-full'>
                    <img src='/al/al_demo_pic_2.png' className=' w-1/3 h-[302vh]' alt='show case'/>
                    <div className='flex flex-col   w-2/3 gap-2'>
                    <img src='/al/al_demo_pic_3.png' className='h-[100vh]' alt='show case'/>
                    <img src='/al/al_demo_pic_4.png' className='h-[100vh]' alt='show case'/>
                    <img src='/al/al_demo_pic_5.png' className='h-[100vh]' alt='show case'/>

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                                  
            
            </div>

           
        </div>

        

       
<FooterWork />
    </div>
  )
}
