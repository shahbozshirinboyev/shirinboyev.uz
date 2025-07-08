import React from 'react'
import Statistic from './Statistic/Statistic'

function Home() {
  return (
    <>
      <div className='container mx-auto px-5 tablet:px-0 my-12 border border-red-500'>
        <div className='flex flex-col laptop:flex-row gap-4 '>
          <div className='w-full order-2 laptop:order-1'>

            <div className='text-center laptop:text-start '>
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
          <div className='w-full flex justify-center items-center order-1 laptop:order-2'>
            <img className='rounded-full w-72 h-72 object-cover p-5 border-3 border-dashed' src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2025%2F01%2F21%2Ftravis-scott-4x4-single-premiere-college-football-championship-halftime-show-stream-1.jpg?q=75&w=800&cbr=1&fit=max" alt="" />
          </div>
        </div>
        <Statistic />
      </div>


    </>
  )
}

export default Home