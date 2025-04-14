import React from 'react'

function Navbar() {
  return (
    <div className='container mx-auto px-3 tablet:px-0 my-5 sticky top-2'>

      <div className='flex justify-between items-center border border-red-700'>

        <div className='border'>
          <img src="/images/logo/logo.png" className='w-10' alt="logo" />
        </div>

        <ul className='hidden tablet:flex border gap-4'>
          <li>Home</li>
          <li>Services</li>
          <li>Resume</li>
          <li>Work</li>
          <li>Contact</li>
          <li>Hire Me</li>
        </ul>

        <div className='flex tablet:hidden border'>
          <button>menu</button>
        </div>

      </div>


    </div>
  )
}

export default Navbar