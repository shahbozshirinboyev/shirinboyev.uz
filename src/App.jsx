import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services/Services'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <div className='container mx-auto px-2 tablet:px-0 h-screen border'>App</div>
      <div className='container mx-auto px-2 tablet:px-0 h-screen border'>App</div>
    </>
  )
}

export default App