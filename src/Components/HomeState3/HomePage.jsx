import React from 'react'
import NavBar from "../NavBar"
import HomeOne from "./HomeOne"
import HomeTwo from "./HomeTwo"
import HomeSeven from './HomeSeven'
import Footer from '../Footer'
import HomeThree from './HomeThree'

function HomeState3() {
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <HomeOne />
      <HomeThree />
      <HomeTwo />
      <HomeSeven />
      <Footer />
    </div>
  )
}

export default HomeState3