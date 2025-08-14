import React, { useState, useEffect } from 'react';
import NavBar from "../../NavBar";
import Footer from '../../Footer';
import FaqPersonalInjury from '../../FAQPersonalInjury';
import PersonalInjuryHero from './PersonalInjuryHero';
import PersonalInjuryTwo from './PersonalInjuryTwo';
import Homeseven from '../../Home/HomeSeven'
import { useMeta } from "../../hooks/useMeta";

import Seo from "../../Seo/Seo"


function PersonalInjury() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
useMeta("personalInjury");

    return (
        <div>
           
            <NavBar />
            <div className="relative w-full">
                <PersonalInjuryHero />
                <PersonalInjuryTwo /> 
                <FaqPersonalInjury />
                <Homeseven/>
                <Footer />
            </div>
        </div>
    );
}

export default PersonalInjury;
