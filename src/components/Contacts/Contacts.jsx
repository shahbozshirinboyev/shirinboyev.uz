import React from 'react'

function Contacts() {
  return (
    <div className='container mx-auto px-4 tablet:px-0 my-12 border border-red-500'>

      <div className='grid grid-cols-1 laptop:grid-cols-2 gap-3 laptop:gap-12'>
        <div className='p-4 border border-zinc-200 rounded-md'>
          <h4 className='font-semibold text-green-500 text-2xl'>Let's work together</h4>
          <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nisi nobis fuga iure debitis officia aliquid incidunt expedita velit voluptates!</p>

          <form action="">
            <div className='grid grid-cols-2 gap-4'>
              <input type="text" placeholder="Type here" className="input input-sm tablet:input-md" />
              <input type="text" placeholder="Type here" className="input input-sm tablet:input-md" />
              <input type="text" placeholder="Type here" className="input input-sm tablet:input-md" />
              <input type="text" placeholder="Type here" className="input input-sm tablet:input-md" />
            </div>

            <div>
              <input type="text" placeholder="Type here" className="input w-full my-4" />
              <textarea className="textarea w-full" placeholder="Bio"></textarea>
            </div>

            <button className='btn rounded-full mt-4 btn-sm tablet:btn-md'>Send Message</button>

          </form>
        </div>
      </div>


      <div className='border'>
      
      </div>



    </div>
  )
}

export default Contacts