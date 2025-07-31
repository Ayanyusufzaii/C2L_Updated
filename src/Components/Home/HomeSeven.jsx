import React from 'react';
import { useNavigate } from 'react-router-dom';
import Frame from "../../assets/Frame 172.png";
import Frame2 from "../../assets/Group 33.png";

function HomeSeven() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#023437] py-8 px-4 sm:px-6 md:py-16 lg:py-20 xl:py-24 w-full overflow-hidden">

            {/* Desktop and Mobile Layout: Unified Content */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-full px-1 sm:px-2 lg:max-w-[1600px] mx-auto text-left">
                {/* Left Section: Image and Heading */}
                <div className="flex flex-row items-center gap-3 sm:gap-5 flex-1 min-w-0 max-w-full lg:max-w-[48%] justify-center w-full">
                    <img
                        src={Frame2}
                        alt="Connect2Lawyer Visual"
                        className="w-16 h-16 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 2xl:w-52 2xl:h-52 object-contain flex-shrink-0"
                    />
                    <div className="flex flex-col justify-center min-w-0 w-full">
                        <h2 className="text-white font-['Playfair_Display'] font-bold leading-tight text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[80px] 2xl:text-[100px] whitespace-nowrap lg:whitespace-normal leading-[1.1] lg:leading-[1.15] xl:leading-[1.18] 2xl:leading-[1.2] w-full">
                            Need 
                        </h2>
                        <h2 className="text-white font-['Playfair_Display'] font-bold leading-tight text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[80px] 2xl:text-[100px] mt-0 whitespace-nowrap lg:whitespace-normal leading-[1.1] lg:leading-[1.15] xl:leading-[1.18] 2xl:leading-[1.2] w-full">
                            Legal Help?
                        </h2>
                    </div>
                </div>
                {/* Right Section: Tile/Card (same content for all breakpoints) */}
                <div className="flex flex-col justify-between items-start p-3 sm:p-4 lg:p-8 xl:p-10 border border-white border-opacity-40 rounded-none text-left w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-[420px] xl:max-w-[480px] 2xl:max-w-[520px] text-base lg:text-lg xl:text-xl 2xl:text-2xl font-open-sans bg-transparent flex-shrink-0 mx-auto">
                    <div className="flex-1 flex flex-col justify-center w-full">
                        <h2 className="text-white text-lg sm:text-2xl lg:text-3xl font-semibold leading-tight mb-3 lg:mb-6 text-left">
                            We’re here to help you claim justice!
                        </h2>
                    </div>
                    <button
                        className="flex h-[40px] sm:h-[44px] lg:h-[52px] xl:h-[56px] px-6 lg:px-8 xl:px-10 py-2 justify-start items-center rounded-[60px] bg-[#C09F53] hover:bg-amber-600 text-white text-center font-open-sans text-base lg:text-lg xl:text-xl font-semibold leading-normal transition-colors whitespace-nowrap w-full max-w-[120px] sm:max-w-[140px] lg:max-w-[150px] xl:max-w-[170px]"
                        onClick={() => navigate("/ContactUs")}
                    >
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeSeven;
