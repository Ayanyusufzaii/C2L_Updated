import React from 'react'
import SubOne from "./SubOne"
import SubTwo from './SubTwo'
import SubThree from './SubThree'
import SubFour from './SubFour'
import Footer from '../../Footer'
import SubFive from './SubFive'
import SubSix from './SubSix'
import NavBar from "../../NavBar"
import HomeSeven from '../../Home/HomeSeven'
import Faqmeso from '../../FAQmeso'

function SubService() {
  return (
    <div className='overflow-hidden'>
        <NavBar />
        <SubOne />
        <SubTwo />
        <SubThree />
        <SubFour />
        <SubFive />
        <SubSix />
        <Faqmeso />
        <HomeSeven />
        <Footer />
    </div>
  )
}

export default SubService