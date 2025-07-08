import React from 'react'

function Contacts() {
  return (
    <div className='container mx-auto px-4 tablet:px-0 my-12 border border-red-500'>

      <div className='grid grid-cols-1 laptop:grid-cols-2 gap-3 laptop:gap-12 '>
        <div className='p-4 border border-zinc-200 rounded-md order-2 laptop:order-1'>
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



        <div className='border flex flex-col justify-center gap-4 order-1 laptop:order-2'>

          <div className='flex gap-3 justify-start items-center'>
            <div className='w-[50px] h-[50px] flex justify-center items-center bg-green-100 rounded-sm'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-fill text-green-500" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
            </div>
            <div>
              <span className='text-sm font-semibold opacity-70'>Phone</span>
              <p className='font-semibold leading-4'>+998 (93) 009 11 66</p>
            </div>
          </div>

          <div className='flex gap-3 justify-start items-center'>
            <div className='w-[50px] h-[50px] flex justify-center items-center bg-green-100 rounded-sm'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill text-green-500" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
            </div>
            <div>
              <span className='text-sm font-semibold opacity-70'>Email</span>
              <p className='font-semibold leading-4'>shahboz.sh.b@gmail.com</p>
            </div>
          </div>

          <div className='flex gap-3 justify-start items-center'>
            <div className='w-[50px] h-[50px] flex justify-center items-center bg-green-100 rounded-sm'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-geo-alt-fill text-green-500" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </div>
            <div>
              <span className='text-sm font-semibold opacity-70'>Address</span>
              <p className='font-semibold leading-4'>Toshkent sh, Bektemir tum, Musaffo mas.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Contacts