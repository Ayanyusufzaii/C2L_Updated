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
import Seo from "../Seo/Seo"

function ClassService() {
  return (
    <div className='overflow-hidden'>
       <Seo pageKey="homepage" />
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