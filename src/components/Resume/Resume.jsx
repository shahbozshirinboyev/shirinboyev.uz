import React from 'react'

function Resume() {
  return (
    <div className='container mx-auto px-2 tablet:px-0 my-12 border border-red-500'>Resume
      <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5'>

        <div className='border border-green-500 w-full'>
          <div>
          <h2 className='text-2xl font-semibold mb-3'>Why hire me?</h2>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-col gap-2 mt-5'>
            <button className="btn w-full">About Me</button>
            <button className="btn w-full">Education</button>
            <button className="btn w-full">Experience</button>
            <button className="btn w-full">Skills</button>
          </div>
        </div>
        <div className='col-span-1 laptop:col-span-2 border border-green-500'>2
          <div>
            <div>
          <h3 className='text-xl font-semibold mb-3'>About me</h3>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi fugit blanditiis ab perspiciatis nostrum excepturi.</p>
          </div>
          <div className='grid grid-cols-1 laptop:grid-cols-2 mt-5 gap-4 h-[300px] border-3 border-green-500 overflow-y-scroll'>
            <div className='border border-green-500'>
              Lorem, ipsum dolor. 1
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 2
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 3
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 4
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 5
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 6
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 7
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 8
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 9
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 10
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 11
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 12
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 13
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 14
            </div><div className='border border-green-500'>
              Lorem, ipsum dolor. 1
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 2
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 3
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 4
            </div>
            <div className='border border-green-500'>
              Lorem ipsum dolor sit amet. 5
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume