import React from 'react'
import AnimatedTitle from '../AnimatedTitle'

const Contact = () => {
  return (
    <div className='min-h-dvh w-full '>
        <div  className='bg-black h-[95vh] w-[95%] mx-auto  rounded-md mt-24 relative'>
          <div style={
            {
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
            }
        } className='w-[35%] h-[80%] absolute top-[50px] right-10'>
          <img src='/img/swordman.webp' alt='contact' className='w-full h-full object-cover' />
          </div>

          <div className='flex flex-col justify-center items-center pt-24 '>
          <p className="mb-10 font-[general] text-[10px] uppercase text-white">
            Join Zentry
          </p>  
          <div>
            <AnimatedTitle 
            
                        title="lets build the <br/> new era of <br/> gaming together"
                      containerClass='font-[zentry] text-[6rem] leading-[5rem] text-white text-center'
/>
          </div>

          <button className=" mt-10 px-7 py-4 hover:bg-yellow-600 hover:text-sm transition-all duration-300 bg-yellow-400 text-xs font-medium rounded-full">
          {" "}
      CONTACT US
        </button>
          </div>
        </div> 
        
        </div>
  )
}

export default Contact