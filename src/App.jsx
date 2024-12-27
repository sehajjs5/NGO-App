import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar3 from './components/Navbar3'
import Footer from './pages/Footer'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Contact className= 'font-primary' />
    <Navbar3 className= 'font-primary' />
      <main className='min-h-screen max-w-screen-2xl font-primary'>
      <Outlet/>
      </main>
      <Footer className= 'font-primary' />
    </>
  )
}

export default App
