import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import ServiceOne from './ServiceOne'
import ServiceTwo from './ServiceTwo'
import Faq from '../FAQ'
import HomeSeven from '../Home/HomeSeven';


function ServiceOverview() {
    return (
        <div className="overflow-hidden">
            <NavBar />
            <ServiceOne />
            <ServiceTwo />
            <Faq />
            <HomeSeven />
            <Footer />
        </div>
    )
}

export default ServiceOverview