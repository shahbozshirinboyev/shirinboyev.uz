import React from 'react'
import Statistic from './Statistic/Statistic'

function Home() {
  return (
    <>
      <div className='container mx-auto px-2 tablet:px-0 flex flex-col laptop:flex-row gap-4 my-12'>

        <div className='w-full border'>

          <div className='text-center laptop:text-start'>
            <span className='font-semibold'>Software Engineer</span>
            <h2 className='font-extrabold text-5xl'><span className='text-4xl'>Assalomu alaykum!</span><br />Men Shahboz Shirinboyev.</h2>
            <p className='font-normal mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum autem eaque quod et eligendi architecto maxime fugit.</p>
          </div>

          <div className='flex gap-2 mt-5 justify-center laptop:justify-start'>
            <button className='btn rounded-full'>Download CV</button>
            <button className='btn btn-circle'>G</button>
            <button className='btn btn-circle'>T</button>
            <button className='btn btn-circle'>L</button>
            <button className='btn btn-circle'>X</button>
          </div>
        </div>
        <div className='border w-full'>
          <img src="./" alt="" />
          <p>here is have an animation...</p>
        </div>
      </div>

      <Statistic />

    </>
  )
}

export default Home