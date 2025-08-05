import React from 'react'
import Navbar from '../NavBar'
import HomeOne from './HomeOne'
import HomeTwo from './HomeTwo'
import HomeThree from './HomeThree'
import HomeFour from './HomeFour'
import HomeFive from './HomeFive'
import HomeSeven from '../Home/HomeSeven';
import Footer from '../Footer'
const HomePage = () => {
  return (
    <div>
      <Navbar/>
        <HomeOne/>
        <HomeTwo/>
        <HomeThree/>
        <HomeFour/>
        <HomeFive/>
        <HomeSeven/>
        <Footer/>
    </div>
  )
}

export default HomePage