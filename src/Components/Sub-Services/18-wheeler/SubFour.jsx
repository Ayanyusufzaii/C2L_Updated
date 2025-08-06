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
                <h2 className="w-full text-[#023437] font-['Open Sans'] text-lg md:text-xl lg:text-l font-semibold tracking-widest uppercase ] mt-1 mb-1">18-Wheeler & Heavy Vehicle Accident </h2>
                <h1 className="w-full text-[#C09F53] font-['Playfair_Display'] text-[40px] md:text-[64px] lg:text-[96px] font-extrabold leading-[48px] md:leading-[70px] lg:leading-[100px]">
                    <span className='text-[#023437]'>Over</span>view <br />
                </h1>

                <p className="text-[#023437] font-open-sans text-base md:text-[18px] lg:text-[24px]  w-full mb-6 mt-6 md:mt-10">
                 Heavy vehicle accidents involve collisions or incidents with large trucks, including 18-wheelers, which often result in serious injuries or fatalities. These accidents can cause devastating physical, emotional, and financial consequences. Legal action helps victims hold negligent parties accountable and seek justice. 
                </p>
             
                <h2 className="w-full text-[24px] md:text-[32px] lg:text-[42px] font-bold leading-normal text-[#C09F53] font-['Playfair_Display'] mb-6 mt-10 md:mt-24">
                   <span className='text-[#023437]'> Types of</span> Claims
                </h2>
                <p className="text-[#023437] font-open-sans text-base md:text-[18px] lg:text-[24px] leading-normal w-full">
                   Victims can pursue claims for driver negligence, vehicle defects, improper maintenance, and unsafe operating practices. These claims may cover injuries, emotional trauma, and wrongful death caused by heavy vehicle accidents. 

                </p>
                   <p className="text-[#023437] font-open-sans text-base md:text-[18px] lg:text-[24px] font-bold w-full mb-6 mt-6 md:mt-24 italic">
                   If you or loved ones have been diagnosed with mesothelioma, <span className='text-[#C09F53]'>Call Us Today for a Free Consultation.</span>
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
                <h3 className="text-[#C09F53] font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold not-italic leading-none mb-12"><span className='text-[#023437]'>18-Wheeler Accident  </span> <br />Types & Key Evidence</h3>
                <div className="mb-0 inline-flex p-4 md:p-6 lg:p-10 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)] md:-ml-[2%] bg-[#023437]">
                      <ul className=" w-full">
                        <li className="text-base md:text-[18px] lg:text-[24px] font-['Playfair_Display'] font-extrabold leading-6 md:leading-[32px] lg:leading-[44px] text-[#ffffff] mb-4">Types of 18-Wheeler Accidents <span className='text-[#023437]'>...............</span></li>
                    </ul>
                  <ul className="list-disc pl-4 w-full space-y-6">
  {[
    " Jackknife Accidents",
    " Rollover Accidents ",
    "Tire Blowouts ",
    "Blind Spot Collisions ",
    "Rear-End Collisions ",
    "Underride Accidents ",
    "T-Bone Accidents",
  ].map((item, index) => (
    <li
      key={index}
      className="text-sm md:text-base lg:text-lg font-opensans  leading-snug text-white"
    >
      {item}
    </li>
  ))}
</ul>

                    
                </div>
           <div className="mb-8 inline-flex p-4 md:p-6 lg:p-10 flex-col justify-end items-start gap-2 border border-[rgba(2,52,55,0.41)] md:-ml-[2%] bg-[#023437]">
                      <ul className=" w-full">
                        <li className="text-base md:text-[18px] lg:text-[24px] font-['Playfair_Display'] font-extrabold leading-6 md:leading-[32px] lg:leading-[44px] text-[#ffffff] mb-4">Evidence Required to Support a Lawsuit <span className='text-[#023437]'></span></li>
                    </ul>
                  <ul className="list-disc pl-4 w-full space-y-6">
  {[
  "Police and accident reports",
  "Witness statements",
  "Vehicle maintenance and inspection records",
  "Driver logs and employment records",
  "Medical records documenting injuries",
  "Photographs of the accident scene and damages",
  "CCTV or dashcam footage",
  "Expert analysis reports",
  "Communication records with insurance companies",
].map((item, index) => (
    <li
      key={index}
      className="text-sm md:text-base lg:text-lg font-opensans  leading-snug text-white"
    >
      {item}
    </li>
  ))}
</ul>

                    
                </div>
            </div>
            
        </div>
            </div> 



            {/* Mobile View */}

            <div className="block md:hidden p-6 bg-[#FFFBF3]">                
                <h2 className="w-full text-[#023437] font-['Playfair_Display'] text-sm font-semibold tracking-widest uppercase mb-2 mt-[-2px]">Rideshare Sexual Assault</h2>
                <h1 className="text-[#C09F53] font-['Playfair_Display'] text-5xl font-extrabold leading-tight mb-2">Over<span className='text-[#023437]'>view</span></h1>

                <p className="text-[#023437] font-open-sans text-base font-semibold mb-10">
                  Rideshare sexual assault involves passengers who were sexually assaulted or harassed during rideshare trips. These traumatic incidents have serious physical, emotional, and financial impacts. Legal action allows survivors to hold rideshare companies accountable and seek justice.  
                </p>
                <p className="text-[#023437] font-open-sans text-base font-semibold  mb-4 text-xl text-center italic ">
                   If you or loved ones have been diagnosed with mesothelioma, <span className='text-[#C09F53]'>Call Us Today for a Free Consultation.</span>
                </p>
                <h2 className="w-full text-[46px] font-['Playfair_Display'] font-bold leading-normal text-[#C09F53] mb-4 mt-8"><span className='text-[#023437]'>Types of </span>Claims</h2>
                <p className="text-[#023437] font-opensans text-base font-normal leading-normal mb-6">
                    Victims can pursue claims against rideshare companies for negligence, failure to provide a safe environment, and breach of duty of care. These claims may involve personal injury, emotional distress, and psychological trauma resulting from the assault. 
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
                <h3 className="text-[#C09F53] font-['Playfair_Display'] text-5xl font-bold not-italic leading-normal mb-4 mt-8"><span className='text-[#023437]'>Evidence Required to </span>Support a Lawsuit </h3>
                {/* Pleural Mesothelioma */}
                <div className="mb-6 inline-flex p-4 flex-col justify-end items-start gap-2 border border-[#023437] bg-[#023437]">
                    <ul className="list-disc pl-4 w-full space-y-6">
  {[
    "Screenshots of Uber ride details",
    "Texts or emails between driver and passenger",
    "GPS data from the Uber app",
    "CCTV footage of the incident",
    "Photographs documenting injuries",
    "Medical records related to the assault",
    "Psychological evaluations and reports",
    "Forensic evidence supporting claims",
    "Internal Uber documents acknowledging assaults",
    "Expert testimony from professionals",
    "Work records showing impact on employment",
  ].map((item, index) => (
    <li
      key={index}
      className="text-sm md:text-base lg:text-lg font-opensans  leading-snug text-white"
    >
      {item}
    </li>
  ))}
</ul>

                </div>
               

               
</div>            </div>
    );
}

export default SubFour;