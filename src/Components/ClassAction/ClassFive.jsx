import React from 'react';
import Frame from "../../assets/xray.png";

function ClassFive() {
    return (
        <div className="relative">
            {/* Desktop View */}
            <div className="hidden md:flex overflow-hidden">
                <div className="absolute z-10 ml-[15%] mt-[10%]">
                    <div className="text-[#023437] w-[960px] font-['Playfair_Display'] text-[76px] font-extrabold leading-[100px]">
                    Who Is Eligible to Join the Rideshare Class Action?
                    </div>
                    <div className="text-[#023437] font-open-sans text-2xl font-normal leading-none w-[504px] mt-10">
                    If you or a loved one were impacted by unfair treatment or safety failures while using or working with a rideshare platform, you may be eligible to join an active class action lawsuit. Eligibility may apply even if your involvement ended years ago.
                    </div>
                </div>
                <div className="w-[619px] h-[640px] ml-[60%]">
                    <img src={Frame} alt="Frame" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center px-3 py-8 overflow-hidden">
                <div className="text-[#023437] text-center font-['Playfair_Display'] text-3xl font-extrabold leading-tight mb-6">
                Who Is Eligible to Join the Rideshare Class Action?
                </div>
                <div className="text-[#023437] font-open-sans text-lg font-normal leading-relaxed text-center">
                If you or a loved one were impacted by unfair treatment or safety failures while using or working with a rideshare platform, you may be eligible to join an active class action lawsuit. Eligibility may apply even if your involvement ended years ago.
                </div>
                <div className="w-full mb-8">
                    <img src={Frame} alt="Frame" className="w-full h-auto object-contain" />
                </div>
                
            </div>
        </div>
    );
}

export default ClassFive;