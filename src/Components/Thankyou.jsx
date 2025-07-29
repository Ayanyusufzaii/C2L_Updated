import React from 'react';
import Group51 from "../assets/Group 51.png";

function Thankyou() {
    return (
        <>
            {/* Desktop Version (lg and above) */}
            <div className="hidden lg:flex flex-col justify-center items-center min-h-[80vh]">
                <div className="text-center">
                    <h1 className="text-[#023437] font-serif text-6xl lg:text-[94px] font-bold leading-tight">
                        Thank you
                    </h1>
                    <h3 className="text-[#023437] font-serif text-3xl lg:text-[40px] font-bold leading-tight mt-4">
                        for submitting your case!
                    </h3>
                    <p className="text-[#023437] font-sans text-xl lg:text-[33px] font-normal leading-normal w-full lg:w-[500px] mt-8 lg:mt-16 mx-auto">
                        We're on it and will be in touch shortly to assist you.
                    </p>
                </div>
                <img 
                    src={Group51} 
                    alt="case" 
                    className="w-40 lg:w-[200px] h-auto mt-12 lg:mt-16" 
                />
            </div>

            {/* Mobile Version (below lg) */}
            <div className="lg:hidden flex flex-col items-center justify-center min-h-[80vh] px-4">
                <div className="text-center">
                    <h1 className="text-[#023437] font-serif text-5xl font-bold leading-tight">
                        Thank you
                    </h1>
                    <h3 className="text-[#023437] font-serif text-2xl font-bold leading-tight mt-4">
                        for submitting your case!
                    </h3>
                    <p className="text-[#023437] font-sans text-lg font-normal leading-normal mt-8">
                        We're on it and will be in touch shortly to assist you.
                    </p>
                </div>
                <img 
                    src={Group51} 
                    alt="case" 
                    className="w-32 h-auto mt-12" 
                />
            </div>
        </>
    );
}

export default Thankyou;