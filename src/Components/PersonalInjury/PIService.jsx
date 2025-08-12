import React from 'react'
import PIOne from "./PIOne"
import PITwo from './PITwo'
import PIThree from './PIThree'
import PIFour from './PIFour'
import Footer from '../Footer'
import PIFive from './PIFive'
import PISix from './PISix'
import NavBar from "../NavBar"
import HomeSeven from '../Home/HomeSeven'
import FaqTruck from '../FAQTruck'
import Seo from "../Seo/Seo"

function PIService() {
  return (
    <div className='overflow-hidden'>
       <Seo pageKey="homepage" />
        <NavBar />
        <PIOne />
        <PITwo />
        <PIThree />
        <PIFour />
        <PIFive />
        <PISix />
        <FaqTruck />
        <HomeSeven />
        <Footer />
    </div>
  )
}

export default PIService