import React from 'react'

function App() {
  return (
    <>
      <div className="bg-base-100 shadow-sm">
        <div className='container mx-auto lg:px-18 xl:px-32 navbar'>
        <div className="navbar-start">

          <a className="text-xl font-medium cursor-pointer select-none">Logo.</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-2">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
            <li><a>Item 4</a></li>
            <li><a>Item 5</a></li>
            <li><a className='btn rounded-full'>Item 6</a></li>
          </ul>
        </div>
        <div className="navbar-end flex lg:hidden">
        <div className="dropdown">

            <div tabIndex={0} role="button" className="btn btn-circle btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>

            <ul tabIndex={0} className="menu menu-sm lg:menu dropdown-content bg-base-100 rounded-box z-5 mt-2 w-52 p-2 shadow right-0">
              <li><a>Item 1</a></li>
              <li>
                <a>Item 2</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
              <li><a>Item 4</a></li>
              <li><a>Item 5</a></li>
              <li><a>Item 6</a></li>
            </ul>
            
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App