import React from 'react'
import Banner from './Banner'
import Goals from './Goals'
import Gallery from './Gallery'
import Impact from './Impact'
import Testimonials from './Testimonials'
import Team from './Team'
import Collaborations from './Collaborations'
import Footer from './Footer'
import Internships from './Internships'
import Awards from './Awards'
import Contact from '../components/Contact'
import Navbar3 from '../components/Navbar3'
export default function Home() {
  return (
    <div className='bg-[#D9D9D9]'>
        <Banner/>
        <Internships/>
        <Goals/>
        <Gallery/>
        <Awards/>
        <Impact/>
        <Team/>
        <Testimonials/>
        <Collaborations/>
    </div>
  )
}
