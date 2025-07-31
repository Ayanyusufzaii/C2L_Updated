import React from 'react'
import ClassOne from "./ClassOne"
import ClassTwo from './ClassTwo'
import ClassThree from './ClassThree'
import ClassFour from './ClassFour'
import Footer from '../Footer'
import ClassFive from './ClassFive'
import ClassSix from './ClassSix'
import NavBar from "../NavBar"
import HomeSeven from '../Home/HomeSeven'
import FaqClassAction from '../FAQClassAction'

function ClassService() {
  return (
    <div className='overflow-hidden'>
        <NavBar />
        <ClassOne />
        <ClassTwo />
        <ClassThree />
        <ClassFour />
        <ClassFive />
        <ClassSix />
        <FaqClassAction />
        <HomeSeven />
        <Footer />
    </div>
  )
}

export default ClassService