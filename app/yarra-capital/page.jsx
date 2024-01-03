
'use client';
import { FooterWork } from '../../components';
export default function yarra () {

  return (
    <div className='min-h-screen bg-[#F9F9F9]  overflow-hidden'>
        <div className='flex justify-end'>
            <img src="/logo.svg" className='p-3 w-16' alt='logo'/>
          
        </div>
        <div className='flex flex-col w-[90%]'>
            <div className='flex flex-col self-center w-[90%] gap-4'>
                <h1 className='work_header'>Yarra Capital</h1>
                <p className='work_description'>&#123;<span className='font-light'>Branding, Web Development, Branded Content</span>&#125;</p>
            </div>
        </div>
        <div className='flex flex-col gap-3 mt-11 overflow-hidden'>
            <img src='/show_1.png' className='' alt='show case'/>
            <div className='flex gap-3'>

                 <div className='basis-1/2 h-[600px] bg-[#828FA3] flex flex-col justify-center'>
                    <div className='self-center flex flex-col  gap-6 w-[80%]'>
                        <h1 className='show_card_header'>Redefining finance solutions for foreign investors</h1>
                        <p className='show_card_description'>Yarra provides finance brokerage services for non-Australian resident borrowers looking to 
                        procure investments in Australia, their focus includes loan applications, in-depth 
                        consultation and sourcing of the best financing products available on the market to suit the borrowers' objectives.</p>
                    </div>
                    </div>
                                  
            <div className='basis-1/2 h-[600px]'>
                    <img src="/show_2.png" className=' ' alt="show2"/>
                </div> 
            </div>``
            <div className='flex gap-3'>
            <img src='/show_3.png' className='w-3/5 ' alt='show case'/>
            <img src='/show_4.png' className='w-2/5' alt='show case'/>

            </div>
            <img src='/show_5.png' className='' alt='show case'/>
            
        </div>
        <div className='flex flex-col  gap-6 mt-11 mb-11'>
            <div className='w-[70%] self-center gap-6'>
            <h1 className='work1_text_header'>
            Challenges
            </h1>
<div className='flex flex-col gap-3'>
    <h1 className='work1_text_subtitle'>
    Timeline
    </h1>
    <p className='work1_text_description'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </p>
</div>
<div className='flex flex-col gap-3'>
    <h1 className='work1_text_subtitle'>
    Product
    </h1>
    <p className='work1_text_description'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </p>
</div>
</div>
        </div>
        <div className='bg-[#363645] flex'>
    <img className='w-1/2 pt-6 pb-6 pl-6 pr-3' src="/show_6.png" alt="news"/>
    <img className='w-1/2 pb-6 pl-3 pr-6 pt-6' src="/show_7.png" alt="news"/>


        </div>

        {/* <div className=''> */}
        {/* <div ref={gallery} className="gallery">
        <Column images={[images[0]]} y={y3}/>
        <Column images={[images[1], images[2]]}y={y3} />
        <Column images={[images[3], images[4]]} y={y3}/>
        <Column images={[images[5], images[6]]} y={y4}/>
      </div>
        </div> */}
<div className='flex gap-1 bg-white mt-2 mb-11'>
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

</div>
<FooterWork />
    </div>
  )
}

