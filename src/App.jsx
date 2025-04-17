import React from 'react'
import Navbar from './components/Navbar'
import ThemeSwitcher from './components/ThemeSwitcher'
import Home from './components/Home'

function App() {
  return (
    <>
    <Navbar/>

    <Home />
    <div>
      <ThemeSwitcher />
    </div>
    <div className='h-screen border'>App</div>
    <div className='h-screen border'>App</div>
    </>
  )
}

export default App