import React from 'react';
import Frame from "../../../assets/xray.png";

function SubFive() {
    return (
        <div className="relative">
            {/* Desktop View */}
            <div className="hidden md:flex overflow-hidden h-[420px] md:h-[480px] lg:h-[540px] xl:h-[600px] items-stretch">
                <div className="absolute z-10 left-[5vw] md:left-[8vw] lg:left-[12vw] xl:left-[15%] top-1/2 -translate-y-1/2 flex flex-col justify-center h-auto">
                    <div className="text-[#023437] font-['Playfair_Display'] font-extrabold
                        text-[32px] md:text-[48px] lg:text-[64px] xl:text-[86px]
                        leading-tight md:leading-[70px] lg:leading-[100px] xl:leading-[120px]
                        w-[80vw] md:w-[500px] lg:w-[700px] xl:w-[960px]">
                        Who Can File a Claim?
                    </div>
                    <div className="text-[#023437] font-open-sans font-normal
                        text-base md:text-xl lg:text-2xl xl:text-3xl
                        leading-snug md:leading-normal lg:leading-relaxed
                        w-[70vw] md:w-[350px] lg:w-[420px] xl:w-[504px] mt-4">
                        Claims can be filed by individuals directly exposed to asbestos in the workplace and by family members affected through secondary exposure.
                    </div>
                </div>
                <div className="w-[40vw] md:w-[350px] lg:w-[500px] xl:w-[619px] h-full ml-auto">
                    <img src={Frame} alt="Frame" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center px-3 pt-8 pb-8 overflow-hidden"> 
                <div className="text-[#023437] text-center font-['Playfair_Display'] text-3xl font-extrabold leading-tight mb-6">
               Who Can File a Claim? 
                </div>
                <div className="text-[#023437] font-open-sans text-lg font-normal leading-relaxed text-center">
                Claims can be filed by individuals directly exposed to asbestos in the workplace and by family members affected through secondary exposure. 
                </div>
                <div className="w-full mb-8">
                    <img src={Frame} alt="Frame" className="w-full h-auto object-contain" />
                </div>
            
            </div>
        </div>
    );
}

export default SubFive;
