import React from 'react'
import Navbar from './components/Navbar'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  return (
    <>
    <Navbar/>
    <div>
      <ThemeSwitcher />
    </div>
    <div className='h-screen border'>App</div>
    <div className='h-screen border'>App</div>
    </>
  )
}

export default App