import React, { useState, useEffect } from 'react';
import NavBar from "../../NavBar";
import Footer from '../../Footer';
import FaqClassAction from '../../FAQClassAction';
import ClassActionHero from './ClassActionHero';
import ClassActionTwo from './ClassActionTwo';
import { Class } from 'leaflet';


function ClassAction() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <NavBar />
            <div className="relative w-full">
                <ClassActionHero />
                <ClassActionTwo /> 
                <FaqClassAction />
                <Footer />
            </div>
        </div>
    );
}

export default ClassAction;
