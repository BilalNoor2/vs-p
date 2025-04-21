import React from 'react'

const BentoCard = ({src, title, description}) => {
    return (
        <div className="relative size-full  transition-transform duration-500 ease-in-out transform hover:scale-105 ">
          <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center rounded-md border-[1px] border-white border-opacity-50 "
          />
          <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
            <div>
              <h1 className="uppercase text-6xl  font-black font-[zentry]">{title}</h1>
              {description && (
                <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
              )}
            </div>
    
        
          </div>
        </div>
      );
}


const Features = () => {
  return (
    <div className='bg-black min-h-dvh px-24 py-32'>

<div className='h-auto w-auto  text-white'>
    <h4 className='font-[circular-web] text-lg'>Into the Metagame Layer</h4>
    <p className='font-[circular-web] text-lg opacity-50'>Immerse yourself in a rich and ever-expanding universe <br /> where a vibrant array of products converge into an <br /> interconnected overlay experience on your world.</p>
</div>

<div className=" relative mt-24 mb-7  w-full   h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              radia<b>n</b>t
            </>
          }
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          
        />
      </div>
      <div className="flex flex-col gap-6 ">
  <div id='left' className="flex gap-6">
    <div className="w-[50%] h-[80vh] ">

    <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
           
          />
        

    </div>

    <div id='right' className="flex flex-col gap-4 w-[50%] ">
      <div className="h-[38.5vh] ">

      <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                n<b>e</b>xus
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
      </div>
      <div className="h-[38.5vh] ">

      <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                az<b>u</b>l
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
      </div>
    </div>
  </div>

  <div id='bottom' className="flex gap-6">
    <div className=" w-[50%] h-[20vh] transition-transform duration-500 ease-in-out transform hover:scale-105 ">
        <h1 className='text-6xl font-black font-[zentry] px-6 py-6 bg-blue-500 rounded-md border-[1px] border-white border-opacity-50'>MORE <br /> COMING <br /> SOON</h1>
    </div>
    <div className=" w-[50%]  h-[37.7vh] transition-transform duration-500 ease-in-out transform hover:scale-105 ">
    <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center rounded-md border-[1px] border-white border-opacity-50"
          />
    </div>
  </div>
</div>


    </div>
  )
}

export default Features