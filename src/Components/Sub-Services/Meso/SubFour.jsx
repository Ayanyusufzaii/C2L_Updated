import React from 'react';
import Frame136 from "../../../assets/Frame 136.png";
import Marquee from "../../../assets/Ellipse 13.png";
import MesoOverview from "../../../assets/MesoOverview.png";
import Marqueee from "../../../assets/manequelogo.png";

function SubFour() {
    return (
        <div className='bg-[#FFFBF3] '>
            {/* Desktop View */}
            <div className="w-full overflow-hidden py-2 bg-[#C09F53]">
    <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center mr-16 md:mr-32">
                <span className="flex-shrink-0 text-[#EFE4CB] text-center font-['Playfair_Display'] text-2xl sm:text-4xl md:text-6xl lg:text-[80px] font-[800] leading-none w-[250px] sm:w-[400px] md:w-[600px] lg:w-[795px] h-auto">
                    Get a free case review
                </span>
                <img
                    src={Marqueee}
                    alt="Banner"
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] object-cover ml-4 sm:ml-8 md:ml-16 mt-0"
                />
            </div>
        ))}
    </div>
</div>

        <div className="hidden md:block ml-16">
                <div className="flex flex-col md:flex-row w-full">
            {/* Left Column */}
            <div className="w-full md:w-5/12 lg:w-6/12 p-6 md:p-8 lg:p-16 pl-0 md:pl-0 lg:pl-0 mt-6 md:mt-10 bg-[#FFFBF3]">

                <h1 className="w-full text-[#C09F53] font-['Playfair_Display'] text-[40px] md:text-[64px] lg:text-[96px] font-extrabold leading-[48px] md:leading-[70px] lg:leading-[100px]">
                    <span className='text-[#023437]'>Over</span>view <br />
                </h1>
                <h2 className="w-full text-[#023437] font-['Open Sans'] text-lg md:text-xl lg:text-l font-semibold tracking-widest uppercase mb-[-22px] mt-8">MESOTHELIOMA</h2>
                <p className="text-[#023437] font-open-sans text-base md:text-[18px] lg:text-[24px]  w-full mb-6 mt-6 md:mt-10">
                   Mesothelioma is a rare, aggressive cancer affecting the mesothelium, the thin lining of body cavities and organs, primarily caused by asbestos exposure. Symptoms may take 20 to 60 years to appear, making early detection challenging. Each year, fewer than 3,000 cases are diagnosed, mostly in patients aged 75 to 79. While usually malignant, rare benign cases have been reported. 
                </p>
                <p className="text-[#023437] font-open-sans text-base md:text-[18px] lg:text-[24px] font-bold w-full mb-6 mt-6 md:mt-24 italic">
                   If you or loved ones have been diagnosed with mesothelioma, <span className='text-[#C09F53]'>Call Us Today for a Free Consultation.</span>
                </p>
                <h2 className="w-full text-[24px] md:text-[32px] lg:text-[42px] font-bold leading-normal text-[#C09F53] font-['Playfair_Display'] mb-6 mt-10 md:mt-24">
                   <span className='text-[#023437]'> Types of</span> Claims
                </h2>
                <p className="text-[#023437] font-open-sans text-base md:text-[18px] lg:text-[24px] leading-normal w-full">
                   Mesothelioma lawsuits aim to hold responsible parties accountable for their negligence in exposing individuals to asbestos, the primary cause of this devastating cancer. To navigate the legal process effectively, it is essential to comprehend the various aspects of mesothelioma lawsuits.
                </p>
            </div>
            {/* Middle Image - always visible, responsive */}
            <div className="hidden md:flex flex-col items-center justify-center bg-[#C09F53] relative h-auto min-h-[500px] lg:min-h-[700px] xl:min-h-[900px] w-[46px] md:w-[60px] lg:w-[70px]">
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
                                    className="block text-[#023437] font-['Playfair_Display'] font-extrabold"
                                    style={{
                                        writingMode: 'vertical-rl',
                                        transform: 'rotate(-180deg)',
                                        fontSize: '52px', 
                                        lineHeight: 1,
                                    }}
                                >
                                    •
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
{/*          
                <style>{`
                    @keyframes vertical-marquee {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }
                `}</style> */}
            </div>
            {/* Right Column */}
            <div className="w-full md:w-5/12 lg:w-6/12 p-6 md:p-8 lg:p-16 mt-6 md:mt-10 bg-[#FFFBF3]">
                <h3 className="text-[#C09F53] font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold not-italic leading-none mb-12"><span className='text-[#023437]'>Types of Mesothelioma</span> <br />and Symptoms </h3>
                {/* Card 1 */}
                <div className="mb-8 inline-flex p-4 md:p-6 lg:p-10 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)] md:-ml-[2%] bg-[#023437]">
                    <ul className="list-disc pl-4 w-full">
                        <li className="text-base md:text-[18px] lg:text-[24px] font-['Playfair_Display'] font-extrabold leading-6 md:leading-[32px] lg:leading-[44px] text-[#ffffff] mb-0">Pleural Mesothelioma</li>
                    </ul>
                    <span className="text-xs md:text-base text-[#ffffff] font-semibold mb-1 mt-0">(lungs’ lining)</span>
                    <p className="w-full text-[#ffffff] font-open-sans text-sm md:text-[16px] lg:text-[20px] font-normal leading-normal">
                        <span className="text-[#C09F53] font-bold">Symptoms:</span> abdominal pain, swelling, fluid buildup, constipation, nausea, weight loss, fever, and fatigue.
                    </p>
                </div>
                {/* Card 2 */}
                <div className="mb-8 inline-flex p-4 md:p-6 lg:p-10 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)] md:-ml-[2%] bg-[#023437]">
                    <ul className="list-disc pl-4 w-full">
                        <li className="text-base md:text-[18px] lg:text-[24px] font-['Playfair_Display'] font-extrabold leading-6 md:leading-[32px] lg:leading-[44px] text-[#ffffff] mb-0">Peritoneal Mesothelioma</li>
                    </ul>
                    <span className="text-xs md:text-base text-[#ffffff] font-semibold mb-1 mt-0">(abdominal lining)</span>
                    <p className="w-full text-[#ffffff] font-open-sans text-sm md:text-[16px] lg:text-[20px] font-normal leading-normal">
                        <span className="text-[#C09F53] font-bold">Symptoms:</span> abdominal pain, swelling, fluid buildup, constipation, nausea, weight loss, fever, and fatigue.
                    </p>
                </div>
                {/* Card 3 */}
                <div className="mb-8 inline-flex p-4 md:p-6 lg:p-10 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)] md:-ml-[2%] bg-[#023437]">
                    <ul className="list-disc pl-4 w-full">
                        <li className="text-base md:text-[18px] lg:text-[24px] font-['Playfair_Display'] font-extrabold leading-6 md:leading-[32px] lg:leading-[44px] text-[#ffffff] mb-0">Testicular Mesothelioma</li>
                    </ul>
                    <span className="text-xs md:text-base text-[#ffffff] font-semibold mb-1 mt-0">(testes lining, very rare)</span>
                    <p className="w-full text-[#ffffff] font-open-sans text-sm md:text-[16px] lg:text-[20px] font-normal leading-normal">
                        <span className=" text-[#C09F53] font-bold">Symptoms:</span> lumps or swelling in the scrotum, testicular pain, hydrocele, and hernia.
                    </p>
                </div>
            </div>
        </div>
            </div> 



            {/* Mobile View */}

            <div className="block md:hidden p-6 bg-[#FFFBF3]">                
                <h2 className="w-full text-[#023437] font-['Playfair_Display'] text-sm font-semibold tracking-widest uppercase mb-2 mt-[-2px]">MESOTHELIOMA</h2>
                <h1 className="text-[#C09F53] font-['Playfair_Display'] text-5xl font-extrabold leading-tight mb-2">Over<span className='text-[#023437]'>view</span></h1>

                <p className="text-[#023437] font-open-sans text-base font-semibold mb-10">
                   Mesothelioma is a rare, aggressive cancer affecting the mesothelium, the thin lining of body cavities and organs, primarily caused by asbestos exposure. Symptoms may take 20 to 60 years to appear, making early detection challenging. Each year, fewer than 3,000 cases are diagnosed, mostly in patients aged 75 to 79. While usually malignant, rare benign cases have been reported. 
                </p>
                <p className="text-[#023437] font-open-sans text-base font-semibold  mb-4 text-xl text-center italic ">
                   If you or loved ones have been diagnosed with mesothelioma, <span className='text-[#C09F53]'>Call Us Today for a Free Consultation.</span>
                </p>
                <h2 className="w-full text-[46px] font-['Playfair_Display'] font-bold leading-normal text-[#C09F53] mb-4 mt-8"><span className='text-[#023437]'>Types of </span>Claims</h2>
                <p className="text-[#023437] font-opensans text-base font-normal leading-normal mb-6">
                    Mesothelioma lawsuits aim to hold responsible parties accountable for their negligence in exposing individuals to asbestos, the primary cause of this devastating cancer. To navigate the legal process effectively, it is essential to comprehend the various aspects of mesothelioma lawsuits.
                </p>



                 <div className="flex w-[1200px] h-[60px] -ml-11 mb-10 z-10 justify-end items-center gap-8 bg-[#C09F53] overflow-hidden relative mt-16">
                    <div className="w-full overflow-hidden py-2">
                        <div className="flex whitespace-nowrap animate-marquee">
                            {[...Array(40)].map((_, index) => (
                                <div key={index} className="flex items-center mt-16">
                                    <span className="w-[350px] h-[121px] flex-shrink-0 text-[#FFF] text-center font-['Playfair_Display'] text-[30px] font-[800] leading-none mt-[5%]">
                                        Asbestos Exposure
                                    </span>
                                    <img src={Marqueee} alt="Banner" className="h-[30px] w-[100px] object-cover justify-between mt-[-15%] mr-10" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <h3 className="text-[#C09F53] font-['Playfair_Display'] text-5xl font-bold not-italic leading-normal mb-4 mt-8"><span className='text-[#023437]'>Types of Mesothelioma</span> and Symptoms</h3>
                {/* Pleural Mesothelioma */}
                <div className="mb-6 inline-flex p-4 flex-col justify-end items-start gap-2 border border-[#023437] bg-[#023437]">
                    <ul className="w-full">
                        <li className=" text-xl text-base font-['Playfair_Display'] font-extrabold leading-6 text-[#ffffff] mb-0">Pleural Mesothelioma</li>
                    </ul>
                    <span className="text-xl text-[#ffffff] font-semibold mb-1 mt-0">(lungs’ lining)</span>
                     <span className="text-xl font-['Playfair_Display'] text-[#C09F53] font-semibold mt-0">Symptoms</span>
                    <p className="w-full text-[#ffffff] font-open-sans text-sm font-normal leading-normal">
                        <span className="font-bold"></span> abdominal pain, swelling, fluid buildup, constipation, nausea, weight loss, fever, and fatigue.
                    </p>
                </div>
                {/* Peritoneal Mesothelioma */}
                <div className="mb-6 inline-flex p-4 flex-col justify-end items-start gap-2 border border-[#023437] bg-[#023437]">
                    <ul className="w-full">
                        <li className="text-xl text-base font-['Playfair_Display'] font-extrabold leading-6 text-[#ffffff] mb-0">Peritoneal Mesothelioma</li>
                    </ul>
                    <span className="text-xl text-[#ffffff] font-semibold mb-1 mt-0">(abdominal lining)</span>
                      <span className="text-xl font-['Playfair_Display'] text-[#C09F53] font-semibold mt-0">Symptoms</span>
                    <p className="w-full text-[#ffffff] font-open-sans text-sm font-normal leading-normal">
                        <span className="font-bold"></span> abdominal pain, swelling, fluid buildup, constipation, nausea, weight loss, fever, and fatigue.
                    </p>
                </div>
                {/* Testicular Mesothelioma */}
                <div className="mb-6 inline-flex p-4 flex-col justify-end items-start gap-2 border border-[#023437] bg-[#023437]">
                    <ul className="w-full">
                        <li className="text-xl text-base font-['Playfair_Display'] font-extrabold leading-6 text-[#ffffff] mb-0">Testicular Mesothelioma</li>
                    </ul>
                    <span className="text-xl text-[#ffffff] font-semibold mb-1 mt-0">(testes lining, very rare)</span>
                      <span className="text-xl font-['Playfair_Display'] text-[#C09F53] font-semibold mt-0">Symptoms</span>
                    <p className="w-full text-[#ffffff] font-open-sans text-sm font-normal leading-normal">
                        <span className="font-bold"></span> lumps or swelling in the scrotum, testicular pain, hydrocele, and hernia.
                    </p>
                </div>

               
</div>            </div>
    );
}

export default SubFour;