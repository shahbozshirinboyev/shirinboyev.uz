import React from 'react'
import Statistic from './Statistic/Statistic'

function Home() {
  return (
    <>
      <div className='container mx-auto px-2 tablet:px-0 flex flex-col laptop:flex-row gap-2 border my-12'>
        <div className='border w-full'>

          <div>
            <span>Software Engineer</span>
            <h2>Assalomu alaykum! Men Shahboz Shirinboyev!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum autem eaque quod et eligendi architecto maxime fugit.</p>
          </div>

          <div className='flex gap-2'>
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