import React, { useState, useEffect } from 'react';
import NavBar from "../../NavBar";
import Footer from '../../Footer';
import FaqMassTort from '../../FAQMassTort';
import MassTortHero from './MassTortHero';
import Homeseven from '../../Home/HomeSeven'
import MassTortTwo from './MassTortTwo';
import Seo from "../../Seo/Seo"


function MassTort() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Seo pageKey="massTort" />

            <NavBar />
            <div className="relative w-full">
                <MassTortHero />
                <MassTortTwo /> 
                <FaqMassTort />
                <Homeseven/>
                <Footer />
            </div>
        </div>
    );
}

export default MassTort;
