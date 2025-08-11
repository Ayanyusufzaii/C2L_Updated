import React from 'react'
import NavBar from "../../NavBar"
import HomeTwo from "../HomeTwo/HomeTwo"
import HomeSeven from '../../Home/HomeSeven'
import Footer from '../../Footer'
import HomeThree from './HomeThree'
import HomeOne from './HomeOne'
import HomeFour from './HomeFour'
import HomeFive from './HomeFive'
import { Home } from 'lucide-react'
function HomeNewSouthWales() {
  return (
    <div className='overflow-hidden'>
      <NavBar />
      <HomeOne/>
      <HomeThree />
      <HomeFour/>
      <HomeTwo />
      <HomeFive />
      <HomeSeven />
      <Footer />
    </div>
  )
}

export default HomeNewSouthWales