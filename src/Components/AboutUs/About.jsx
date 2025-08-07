import React from 'react'
import AboutOne from './AboutOne'
import AboutTwo from './AboutTwo'
import AboutThree from './AboutThree'
import AboutFour from './AboutFour'
import AboutFive from './AboutFive'
import HomeSeven from '../Home/HomeSeven'
import NavBar from '../NavBar'
import Footer from '../Footer'

function About() {
  return (
    <div className='overflow-hidden '>
      <NavBar />
      <AboutOne />
      <AboutTwo />
      <AboutThree />
      <AboutFour />
      <AboutFive />
      <HomeSeven />
      <Footer />
    </div>
  )
}

export default About