import React, { useState, useEffect } from 'react';
import NavBar from "../../NavBar";
import Footer from '../../Footer';
import FaqMassTort from '../../FAQMassTort';
import MassTortHero from './MassTortHero';
import MassTortTwo from './MassTortTwo';


function MassTort() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <NavBar />
            <div className="relative w-full">
                <MassTortHero />
                <MassTortTwo /> 
                <FaqMassTort />
                <Footer />
            </div>
        </div>
    );
}

export default MassTort;
