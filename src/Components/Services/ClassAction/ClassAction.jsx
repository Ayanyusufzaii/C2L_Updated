import React, { useState, useEffect } from 'react';
import NavBar from "../../NavBar";
import Footer from '../../Footer';
import FaqClassAction from '../../FAQClassAction';
import ClassActionHero from './ClassActionHero';
import ClassActionTwo from './ClassActionTwo';
import Homeseven from '../../Home/HomeSeven'
import { useMeta } from "../../hooks/useMeta";

import Seo from "../../Seo/Seo"


function ClassAction() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
useMeta("classAction");

    return (
        <div>
 

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
