import React from 'react';
import Frame from "../../assets/xray.png";

function PIFive() {
    return (
        <div className="relative">
            {/* Desktop View */}
            <div className="hidden md:flex overflow-hidden">
                <div className="absolute z-10 ml-[15%] mt-32">
                    <div className="text-[#023437] w-[960px] font-['Playfair_Display'] text-[76px] font-extrabold leading-[100px]">
                    Who Is Eligible to File a Truck Accident Claim?
                    </div>
                    <div className="text-[#023437] font-open-sans text-2xl font-normal leading-none w-[504px]">
                    You may be eligible for compensation if you’ve suffered injuries or loss due to a truck accident whether as a driver, passenger, pedestrian, or worker
                    </div>
                </div>
                <div className="w-[619px] h-[540px] ml-[60%]">
                    <img src={Frame} alt="Frame" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center px-3 py-8 overflow-hidden">
                <div className="text-[#023437] text-center font-['Playfair_Display'] text-3xl font-extrabold leading-tight mb-6">
                Who Is Eligible to File a Truck Accident Claim?
                </div>
                <div className="text-[#023437] font-open-sans text-lg font-normal leading-relaxed text-center">
                You may be eligible for compensation if you’ve suffered injuries or loss due to a truck accident whether as a driver, passenger, pedestrian, or worker
                </div>
                <div className="w-full mb-8">
                    <img src={Frame} alt="Frame" className="w-full h-auto object-contain" />
                </div>
                
            </div>
        </div>
    );
}

export default PIFive;