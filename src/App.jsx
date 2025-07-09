import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Resume from './components/Resume/Resume'
import Works from './components/Works/Works'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Home />
      <Services />
      <Resume />
      <Works />
      <Contacts />
      <Footer />
    </>
  )
}

export default App