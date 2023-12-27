'use client';
import { FooterWork } from '../../components';
export default function Work4 () {

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
            <div className='flex '>
            <img src='/haw/haw_cover_1.png' className='w-2/3' alt='show case'/>
            <img src='/haw/haw_cover_2.png' className='w-1/3' alt='show case'/>

            </div>
            <div className='flex gap-1 '>

                 <div className=' bg-[#1B1518] flex flex-col w-full '>
                    <div className='  flex flex-col  '>
                        <div className='self-center w-[80%] flex gap-24 mt-24 mb-24 '>
                        <div className='flex basis-1/2'>
                              
                              <img className='' src='/haw/haw_show_1.png ' alt="logo"/>
                              <img className='object-contain w-2/5 self-end  relative left-[-25%] top-[10%]' src='/haw/haw_show_1_1.png ' alt="logo"/>

                              
                  </div> 

                    <div className='self-center flex flex-col gap-6 basis-1/2 '>
                        <h1 className='show_card_header '> A Need for Consistency in Social Media</h1>
                        <div className='flex flex-col gap-6 '>
                        <p className='show_card_description'>Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. </p>
                        <p className='show_card_description'>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                        </div>
                    </div>
                 
                    </div>
                    <div className='w-[90%] self-end flex gap-24 mt-24 mb-24'>
                            

                    <div className='self-center flex flex-col gap-6  basis-1/2   '>
                        <h1 className='show_card_header '>Campaign Key Visuals</h1>
                        <div className='flex flex-col gap-6 '>
                        <p className='show_card_description'>Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. </p>
                        <p className='show_card_description'>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                        </div>
                    </div>
                    <div className='flex basis-1/2'>
                              
                                <img className='object-contai w-1/2' src='/haw/haw_show_2.png ' alt="logo"/>
                                <img className='object-contai w-1/2' src='/haw/haw_show_2.png ' alt="logo"/>

                                {/* <img className='object-contain w-64 ' src='/haw/haw_show_1_1.png ' alt="logo"/> */}

                                
                    </div>
                    </div>
                    </div>
                

                    </div>
                                  
            
            </div>

           
        </div>
        <div className='flex justify-center bg-[#C10815] pb-24 pt-24'>
            <h1 className=' w-[750px] text-center haw_header capitalize'>A Need for Consistency
in Social Media</h1>
        </div>
        <div className='flex '>
            <img src='/haw/haw_gallery_1.png' className='w-2/3' alt='show case'/>
            <img src='/haw/haw_gallery_2.png' className='w-1/3' alt='show case'/>

            </div>
            
        

       
<FooterWork />
    </div>
  )
}
