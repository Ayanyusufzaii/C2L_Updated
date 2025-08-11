import React from 'react'
import SubOne from "./SubOne"
import SubTwo from './SubTwo'
import SubThree from './SubThree'
import SubFour from './SubFour'
import Footer from '../../Footer'
import SubFive from './SubFive'

import NavBar from "../../NavBar"
import HomeSeven from '../../Home/HomeSeven'
import Faqmeso from '../../faqrideshare'
import Seo from "../../Seo/Seo"

function SubServiceRideshare() {
  return (
    <div className='overflow-hidden'>
      <Seo pageKey="rideshare" />

        <NavBar />
        <SubOne />
        <SubTwo />
        <SubThree />
        <SubFour />
        <SubFive />
        
        <Faqmeso />
        <HomeSeven />
        <Footer />
    </div>
  )
}

export default SubServiceRideshare