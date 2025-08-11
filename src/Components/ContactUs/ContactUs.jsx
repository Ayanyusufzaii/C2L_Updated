import React, { useState, useEffect } from 'react';
import NavBar from "../NavBar";
import Footer from '../Footer';
import HomeSeven from '../Home/HomeSeven';
import ContactUsHero from './ContactUsHero';
import ContactUsTwo from './ContactUsTwo';
import ContactUsForm from './ContactUsForm';
import Seo from "../Seo/Seo"

function ContactUs() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
        <Seo pageKey="contact" />
            <NavBar />
            <div className="relative w-full">
                <ContactUsHero />
                <ContactUsTwo />
                <ContactUsForm />
                <HomeSeven />
                <Footer />
            </div>
        </div>
    );
}

export default ContactUs;
