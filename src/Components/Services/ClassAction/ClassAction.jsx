import React, { useState, useEffect } from 'react';
import NavBar from "../../NavBar";
import Footer from '../../Footer';
import FaqClassAction from '../../FAQClassAction';
import ClassActionHero from './ClassActionHero';
import ClassActionTwo from './ClassActionTwo';
import Homeseven from '../../Home/HomeSeven'
import { Class } from 'leaflet';
import Seo from "../../Seo/Seo"


function ClassAction() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Seo pageKey="classAction" />

            <NavBar />
            <div className="relative w-full">
                <ClassActionHero />
                <ClassActionTwo /> 
                <FaqClassAction />
                <Homeseven/>
                <Footer />
            </div>
        </div>
    );
}

export default ClassAction;
