import React from 'react';
import Frame136 from "../../../assets/Frame 136.png";
import Marquee from "../../../assets/Ellipse 13.png";
import MesoOverview from "../../../assets/MesoOverview.png";

function SubFour() {
    return (
        <div className='bg-[rgba(192,159,83,0.25)]'>
            {/* Desktop View */}
       
        <div className="hidden md:block">
                <div className="flex flex-col md:flex-row w-full">
            {/* Left Column */}
            <div className="w-full md:w-6/12 lg:w-7/12 p-6 md:p-8 lg:p-12 bg-[#EFE4CB]">
                <h1 className="w-full text-[#C09F53] font-['Playfair_Display'] text-[40px] md:text-[64px] lg:text-[96px] font-extrabold leading-[48px] md:leading-[70px] lg:leading-[100px]">
                    Overview <br />
                </h1>
                <h2 className="w-full text-[#023437] font-['Playfair_Display'] text-lg md:text-xl lg:text-l font-bold tracking-widest uppercase mb-4 mt-[-2px]">MESOTHELIOMA</h2>
                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-base md:text-[18px] lg:text-[24px] font-semibold w-full mb-6 mt-6 md:mt-10">
                    Mesothelioma is a rare, aggressive cancer affecting the mesothelium, the thin lining of body cavities and organs, primarily caused by asbestos exposure. Symptoms may take 20 to 60 years to appear, making early detection challenging. Each year, fewer than 3,000 cases are diagnosed, mostly in patients aged 75 to 79. While usually malignant, rare benign cases have been reported. 
                </p>
                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-base md:text-[18px] lg:text-[24px] font-bold w-full mb-6 mt-6 md:mt-10">
                    If you or loved ones have been diagnosed with mesothelioma, call us today for a free consultation. 
                </p>
                <h2 className="w-full text-[24px] md:text-[32px] lg:text-[42px] font-bold leading-normal text-[#C09F53] font-['Playfair_Display'] mb-8 mt-8 md:mt-20">
                    Types of Claims
                </h2>
                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-base md:text-[18px] lg:text-[24px] font-semibold leading-normal w-full">
                    Mesothelioma lawsuits aim to hold responsible parties accountable for their negligence in exposing individuals to asbestos, the primary cause of this devastating cancer. To navigate the legal process effectively, it is essential to comprehend the various aspects of mesothelioma lawsuits.
                </p>
            </div>
            {/* Middle Image - always visible, responsive */}
            <div className="hidden md:flex flex-col items-center justify-center bg-[#023437] relative h-auto min-h-[500px] lg:min-h-[700px] xl:min-h-[900px] w-[56px] md:w-[70px] lg:w-[80px]">
                {/* Vertical marquee text animation - smaller, spaced, with dot */}
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full flex flex-col items-center z-20 overflow-hidden h-full">
                    <div
                        className="flex flex-col items-center"
                        style={{
                            animation: 'vertical-marquee 18s linear infinite',
                            height: '200%',
                        }}
                    >
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="flex flex-col items-center mb-8">
                                <span
                                    className="block text-white font-['Playfair_Display'] font-extrabold tracking-widest"
                                    style={{
                                        writingMode: 'vertical-rl',
                                        transform: 'rotate(-180deg)',
                                        fontSize: '28px',
                                        lineHeight: 1,
                                        letterSpacing: '0.1em',
                                    }}
                                >
                                    Exposure
                                </span>
                                <span style={{height: '16px'}}></span>
                                <span
                                    className="block text-white font-['Playfair_Display'] font-extrabold tracking-widest"
                                    style={{
                                        writingMode: 'vertical-rl',
                                        transform: 'rotate(-180deg)',
                                        fontSize: '28px',
                                        lineHeight: 1,
                                        letterSpacing: '0.1em',
                                    }}
                                >
                                     Asbestos
                                </span>
                                <span style={{height: '16px'}}></span>
                                <span
                                    className="block text-white font-['Playfair_Display'] font-extrabold"
                                    style={{
                                        writingMode: 'vertical-rl',
                                        transform: 'rotate(-180deg)',
                                        fontSize: '52px', // Increased from 22px
                                        lineHeight: 1,
                                    }}
                                >
                                    •
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Add keyframes for vertical marquee */}
                <style>{`
                    @keyframes vertical-marquee {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }
                `}</style>
            </div>
            {/* Right Column */}
            <div className="w-full md:w-5/12 lg:w-6/12 p-6 md:p-8 lg:p-16 mt-6 md:mt-10 bg-[#EFE4CB]">
                <h3 className="text-[#C09F53] font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold not-italic leading-normal mb-6">Types of Mesothelioma <br />and Symptoms </h3>
                {/* Card 1 */}
                <div className="mb-8 inline-flex p-4 md:p-6 lg:p-10 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)] md:-ml-[2%]">
                    <ul className="list-disc pl-4 w-full">
                        <li className="text-base md:text-[18px] lg:text-[24px] font-['Playfair_Display'] font-extrabold leading-6 md:leading-[32px] lg:leading-[44px] text-[#023437] mb-0">Pleural Mesothelioma</li>
                    </ul>
                    <span className="text-xs md:text-base text-[#023437] font-semibold mb-1 mt-0">(lungs’ lining)</span>
                    <p className="w-full text-[#023437] font-open-sans text-sm md:text-[16px] lg:text-[20px] font-normal leading-normal">
                        <span className="font-bold">Symptoms:</span> abdominal pain, swelling, fluid buildup, constipation, nausea, weight loss, fever, and fatigue.
                    </p>
                </div>
                {/* Card 2 */}
                <div className="mb-8 inline-flex p-4 md:p-6 lg:p-10 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)] md:-ml-[2%]">
                    <ul className="list-disc pl-4 w-full">
                        <li className="text-base md:text-[18px] lg:text-[24px] font-['Playfair_Display'] font-extrabold leading-6 md:leading-[32px] lg:leading-[44px] text-[#023437] mb-0">Peritoneal Mesothelioma</li>
                    </ul>
                    <span className="text-xs md:text-base text-[#023437] font-semibold mb-1 mt-0">(abdominal lining)</span>
                    <p className="w-full text-[#023437] font-open-sans text-sm md:text-[16px] lg:text-[20px] font-normal leading-normal">
                        <span className="font-bold">Symptoms:</span> abdominal pain, swelling, fluid buildup, constipation, nausea, weight loss, fever, and fatigue.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="mb-8 inline-flex p-4 md:p-6 lg:p-10 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)] md:-ml-[2%]">
                    <ul className="list-disc pl-4 w-full">
                        <li className="text-base md:text-[18px] lg:text-[24px] font-['Playfair_Display'] font-extrabold leading-6 md:leading-[32px] lg:leading-[44px] text-[#023437] mb-0">Testicular Mesothelioma</li>
                    </ul>
                    <span className="text-xs md:text-base text-[#023437] font-semibold mb-1 mt-0">(testes lining, very rare)</span>
                    <p className="w-full text-[#023437] font-open-sans text-sm md:text-[16px] lg:text-[20px] font-normal leading-normal">
                        <span className="font-bold">Symptoms:</span> lumps or swelling in the scrotum, testicular pain, hydrocele, and hernia.
                    </p>
                </div>
            </div>
        </div>
            </div> 



            {/* Mobile View */}
            <div className="block md:hidden p-6 bg-[#EFE4CB]">
                <h1 className="text-[#C09F53] font-['Playfair_Display'] text-4xl font-extrabold leading-tight mb-2">Overview</h1>
                <h2 className="w-full text-[#023437] font-['Playfair_Display'] text-lg font-bold tracking-widest uppercase mb-4 mt-[-2px]">MESOTHELIOMA</h2>
                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-base font-semibold mb-4">
                    Mesothelioma is a rare, aggressive cancer affecting the mesothelium, the thin lining of body cavities and organs, primarily caused by asbestos exposure. Symptoms may take 20 to 60 years to appear, making early detection challenging. Each year, fewer than 3,000 cases are diagnosed, mostly in patients aged 75 to 79. While usually malignant, rare benign cases have been reported.
                </p>
                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-base font-bold mb-4">
                    If you or loved ones have been diagnosed with mesothelioma, call us today for a free consultation.
                </p>
                <h2 className="w-full text-[22px] font-['Playfair_Display'] font-bold leading-normal text-[#C09F53] mb-4 mt-8">Types of Claims</h2>
                <p className="text-[rgba(2,52,55,0.69)] font-open-sans text-base font-semibold leading-normal mb-6">
                    Mesothelioma lawsuits aim to hold responsible parties accountable for their negligence in exposing individuals to asbestos, the primary cause of this devastating cancer. To navigate the legal process effectively, it is essential to comprehend the various aspects of mesothelioma lawsuits.
                </p>



                 <div className="flex w-[1200px] h-[60px] -ml-11 mb-10 z-10 justify-end items-center gap-8 bg-[#023437] overflow-hidden relative mt-16">
                    <div className="w-full overflow-hidden py-2">
                        <div className="flex whitespace-nowrap animate-marquee">
                            {[...Array(40)].map((_, index) => (
                                <div key={index} className="flex items-center mt-16">
                                    <span className="w-[350px] h-[121px] flex-shrink-0 text-[#FFF] text-center font-['Playfair_Display'] text-[30px] font-[800] leading-none mt-[5%]">
                                        Asbestos Exposure
                                    </span>
                                    <img src={Marquee} alt="Banner" className="h-[30px] w-[100px] object-cover justify-between mt-[-15%] mr-10" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <h3 className="text-[#C09F53] font-['Playfair_Display'] text-2xl font-bold not-italic leading-normal mb-4 mt-8">Types of Mesothelioma and Symptoms</h3>
                {/* Pleural Mesothelioma */}
                <div className="mb-6 inline-flex p-4 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)]">
                    <ul className="list-disc pl-4 w-full">
                        <li className="text-base font-['Playfair_Display'] font-extrabold leading-6 text-[#023437] mb-0">Pleural Mesothelioma</li>
                    </ul>
                    <span className="text-xs text-[#023437] font-semibold mb-1 mt-0">(lungs’ lining)</span>
                    <p className="w-full text-[#023437] font-open-sans text-sm font-normal leading-normal">
                        <span className="font-bold">Symptoms:</span> abdominal pain, swelling, fluid buildup, constipation, nausea, weight loss, fever, and fatigue.
                    </p>
                </div>
                {/* Peritoneal Mesothelioma */}
                <div className="mb-6 inline-flex p-4 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)]">
                    <ul className="list-disc pl-4 w-full">
                        <li className="text-base font-['Playfair_Display'] font-extrabold leading-6 text-[#023437] mb-0">Peritoneal Mesothelioma</li>
                    </ul>
                    <span className="text-xs text-[#023437] font-semibold mb-1 mt-0">(abdominal lining)</span>
                    <p className="w-full text-[#023437] font-open-sans text-sm font-normal leading-normal">
                        <span className="font-bold">Symptoms:</span> abdominal pain, swelling, fluid buildup, constipation, nausea, weight loss, fever, and fatigue.
                    </p>
                </div>
                {/* Testicular Mesothelioma */}
                <div className="mb-6 inline-flex p-4 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)]">
                    <ul className="list-disc pl-4 w-full">
                        <li className="text-base font-['Playfair_Display'] font-extrabold leading-6 text-[#023437] mb-0">Testicular Mesothelioma</li>
                    </ul>
                    <span className="text-xs text-[#023437] font-semibold mb-1 mt-0">(testes lining, very rare)</span>
                    <p className="w-full text-[#023437] font-open-sans text-sm font-normal leading-normal">
                        <span className="font-bold">Symptoms:</span> lumps or swelling in the scrotum, testicular pain, hydrocele, and hernia.
                    </p>
                </div>

               
</div>            </div>
    );
}

export default SubFour;