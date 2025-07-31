import React from 'react';
import { useNavigate } from 'react-router-dom';
import Frame from "../../assets/Frame 172.png";
import Frame2 from "../../assets/Group 33.png";

function HomeSeven() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#023437] py-8 px-4 sm:px-6 md:py-16 lg:py-20 xl:py-24 w-full overflow-hidden">

            {/* Mobile and Tablet Layout (below 1024px) */}
            <div className="lg:hidden flex flex-col items-center justify-center text-center">
                <div className="flex items-center justify-center mb-6 sm:mb-8">
                    <img 
                        src={Frame} 
                        alt="Connect2Lawyer Mobile Visual" 
                        className="w-full max-w-xs sm:max-w-sm h-auto object-contain" 
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full px-2 max-w-md sm:max-w-lg mx-auto">
                    <button
                        className="inline-flex h-[44px] px-6 py-[10px] justify-center items-center rounded-[40px] text-[#FFFBF3] font-open-sans text-sm sm:text-base font-bold bg-[#C09F53] hover:bg-amber-600 transition-colors whitespace-nowrap w-full sm:flex-1"
                        onClick={() => navigate("/About")}
                    >
                        Join Us
                    </button>
                    <button
                        className="inline-flex h-[44px] px-6 py-[10px] justify-center items-center rounded-[40px] border border-[rgba(255,251,243,0.8)] text-[#FFFBF3] font-open-sans text-sm sm:text-base font-bold not-italic leading-none hover:bg-gray-700 transition-colors whitespace-nowrap w-full sm:flex-1"
                        onClick={() => navigate("/ContactUs")}
                    >
                        Let's talk
                    </button>
                </div>
            </div>

            {/* Desktop Layout (1024px and above) */}
            <div className="hidden lg:block">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
                        
                        {/* Left Section: Image and Heading */}
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 text-center lg:text-left xl:flex-1 xl:max-w-[50%]">
                            <div className="flex-shrink-0">
                                <img
                                    src={Frame2}
                                    alt="Connect2Lawyer Desktop Visual"
                                    className="w-32 h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-44 2xl:h-44 object-contain"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-white font-['Playfair_Display'] font-bold leading-tight text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                                    Let's work<br className="hidden lg:block" />together
                                </h2>
                            </div>
                        </div>

                        {/* Right Section: Two Equal Cards */}
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-6 2xl:gap-8 w-full xl:flex-1 xl:max-w-[50%] justify-center">
                            
                            {/* Card 1: Looking to hire a lawyer? */}
                            <div className="flex flex-col justify-between items-center p-6 lg:p-8 xl:p-6 2xl:p-8 border border-white border-opacity-40 rounded-lg text-center flex-1 min-h-[280px] lg:min-h-[320px] xl:min-h-[280px] 2xl:min-h-[320px] max-w-sm lg:max-w-none mx-auto lg:mx-0">
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="text-white font-open-sans text-2xl lg:text-3xl 2xl:text-2xl 3xl:text-3xl font-semibold leading-tight mb-6 lg:mb-8">
                                        Looking to hire<br />a lawyer?
                                    </p>
                                </div>
                                <button
                                    className="flex h-[48px] lg:h-[52px] xl:h-[48px] 2xl:h-[52px] px-6 lg:px-8 py-2 justify-center items-center rounded-[60px] bg-[#C09F53] hover:bg-amber-600 text-white text-center font-open-sans text-base lg:text-lg xl:text-base 2xl:text-lg font-semibold leading-normal transition-colors whitespace-nowrap w-full max-w-[160px] lg:max-w-[180px]"
                                    onClick={() => navigate("/ContactUs")}
                                >
                                    Let's Talk
                                </button>
                            </div>

                            {/* Card 2: Work with Connect2Lawyer! */}
                            <div className="flex flex-col justify-between items-center p-6 lg:p-8 xl:p-6 2xl:p-8 border border-white border-opacity-40 rounded-lg text-center flex-1 min-h-[280px] lg:min-h-[320px] xl:min-h-[280px] 2xl:min-h-[320px] max-w-sm lg:max-w-none mx-auto lg:mx-0">
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="text-white font-open-sans text-2xl lg:text-3xl 2xl:text-2xl 3xl:text-3xl font-semibold leading-tight mb-6 lg:mb-8">
                                        Work with<br />Connect2Lawyer!
                                    </p>
                                </div>
                                <button
                                    className="flex h-[48px] lg:h-[52px] xl:h-[48px] 2xl:h-[52px] px-6 lg:px-8 py-2 justify-center items-center rounded-[60px] bg-[#C09F53] hover:bg-amber-600 text-white text-center font-open-sans text-base lg:text-lg xl:text-base 2xl:text-lg font-semibold leading-normal transition-colors whitespace-nowrap w-full max-w-[160px] lg:max-w-[180px]"
                                    onClick={() => navigate("/About")}
                                >
                                    Join Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSeven;