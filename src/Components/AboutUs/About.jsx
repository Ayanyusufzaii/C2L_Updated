import React from 'react'
import AboutOne from './AboutOne'
import AboutTwo from './AboutTwo'
import HomeSeven from '../Home/HomeSeven'
import NavBar from '../NavBar'
import Footer from '../Footer'

function About() {
  return (
    <div className='overflow-hidden '>
      <NavBar />
      <AboutOne />
      <AboutTwo />
      <HomeSeven />
      <Footer />
    </div>
  )
}

export default About