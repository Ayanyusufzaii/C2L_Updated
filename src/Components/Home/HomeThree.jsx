import React, { useRef, useState } from 'react';
import Frame176 from "../../assets/Active lawsuits set.png";
import Framem176 from "../../assets/Active lawsuits set.png";
import bg from "../../assets/MesoImage.png";
import masstortlap from "../../assets/masstortlap.png";
import classactionlap from "../../assets/classactionlap.png";
import personallap from "../../assets/personallap.png";
import ClassAction from "../../assets/classactionbg.png";
import bPersonalInjury from "../../assets/personalinjurybg.png";
import MassTort from "../../assets/masstortbg.png";

import { useNavigate } from "react-router-dom";
function HomeThree() {
    const navigate = useNavigate();
    const targetRef = useRef(null);
    // Add state for active tab
    const [activeTab, setActiveTab] = useState('Mass Tort');

    const handleConsultationClick = () => {
        window.scrollTo({
            top: 2900,
            left: 0,
            behavior: 'smooth'
        });
    };

    const expertiseTags = [
        { text: 'Mass Tort' },
        { text: 'Class Action' },
        { text: 'Personal Injury' },
    ];

    const steps = [
        {
            number: "Step 1",
            title: "Submit your claim",
            description: "Get a free case review from experienced professionals.",
            route: "/Contact-Us"
        },
        {
            number: "Step 2", 
            title: "We take action",
            description: "We will begin a detailed review of your case as soon as your claim is received.",
            route: "/About-Us"
        },
        {
            number: "Step 3",
            title: "Justice drives us", 
            description: "If we represent you, our team works tirelessly to secure the results you're entitled to.",
            route: "/About-Us"
        }
    ];

    return (
        <div className="w-full">
            {/* Our Expertise Section */}
            <section className="w-full bg-[#023437] relative py-8 md:py-16">
                {/* Section Header */}
                <div className="pt-8 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4 md:mb-8">
                        Our Expertise
                    </h1>
                </div>

                {/* Expertise Tags */}
               <div className="flex flex-wrap gap-2 md:gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-4 md:mb-8 items-center justify-between">
    <div className="flex flex-wrap gap-2 md:gap-4">
        {expertiseTags.map((tag, index) => (
            <button
                key={index}
                className={`
                    rounded-full px-4 md:px-6 py-2 md:py-3
                    font-['Open_Sans'] text-sm md:text-base font-semibold
                    transition-all duration-300
                    ${activeTab === tag.text
                        ? 'bg-[#C09F53] text-[#023437]'
                        : 'border border-[#FFFBF3] text-[#FFFBF3] bg-transparent hover:bg-[#C09F53] hover:text-[#023437]'
                    }
                `}
                onClick={() => setActiveTab(tag.text)}
            >
                {tag.text}
            </button>
        ))}
    </div>

    {/* Arrow Button */}
    <button
        onClick={() => window.location.href = '/service'}
        className="flex items-center gap-2 rounded-full px-4 md:px-6 py-2 md:py-3 border border-[#FFFBF3]  bg-[#023437] text-[#ffffff] font-['Open_Sans'] text-sm md:text-base font-semibold transition-all duration-300 hover:bg-[#C09F53] hover:text-[#023437]"
    >
        <span>See All</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </button>
</div>


                {/* Main Content Area */}
                <div>
                  {activeTab === 'Mass Tort' && (
                    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                      {/* Mobile: stacked layout, Tablet/Laptop: overlay left-aligned */}
                      <div className="w-full overflow-hidden  lg:rounded-none relative min-h-[400px] flex flex-col md:flex-row items-stretch">
                          {/* Mobile layout: text below image */}
                          <div className="block md:hidden">
                              <img
                                  src={MassTort}
                                  alt="X-ray or Medical Illustration"
                                  className="w-full h-64 sm:h-80 md:h-96 object-cover "
                              />
                              <div className="bg-[#C09F53] p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                                  <h2 className="text-white font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg">
                                      Mesothelioma Lawsuit
                                  </h2>
                                  <p className="text-white font-['Open_Sans'] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-full">
                                     We help victims file claims for asbestos-related diseases, secure financial compensation for medical expenses and hold companies accountable for toxic exposure.
                                  </p>
                                  <button
                                      className="rounded-full border-2 border-[#023437] px-6 md:px-8 py-3 md:py-4 text-[#023437] font-['Open_Sans'] text-base md:text-lg font-semibold bg-transparent self-start transition-all duration-300 hover:bg-white hover:text-[#023437] cursor-pointer drop-shadow-md"
                                      onClick={() => navigate("Service/MassTort/Mesothelioma-Lawsuit")}
                                  >
                                      Learn More
                                  </button>
                              </div>
                          </div>
                          
                          {/* Tablet/Laptop: overlay text on image, left-aligned */}
                          <div className="hidden md:flex w-full overflow-hidden lg:rounded-none relative min-h-[400px] items-center justify-start">
                              <img
                                  src={masstortlap}
                                  alt="X-ray or Medical Illustration"
                                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover lg:rounded-none"
                              />
                              <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 w-full">
                                  <h2 className="text-white font-['Playfair_Display'] font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg text-left whitespace-nowrap overflow-hidden text-ellipsis" style={{fontSize: 'min(6vw, 100px)'}}>
                                      Mesothelioma Lawsuit
                                  </h2>
                                  <p className="text-white font-['Open_Sans'] font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-[50%] text-left" style={{fontSize: '20px'}}>
                                     We help victims file claims for asbestos-related diseases, secure financial compensation for medical expenses and hold companies accountable for toxic exposure.
                                  </p>
                                  <button
                                      className="rounded-full border-2 border-[#023437] px-6 md:px-8 py-3 md:py-4 text-[#023437] font-['Open_Sans'] font-semibold bg-transparent transition-all duration-300 hover:bg-white hover:text-[#023437] cursor-pointer drop-shadow-md text-left"
                                      style={{fontSize: '20px'}}
                                      onClick={() => navigate("Service/MassTort/Mesothelioma-Lawsuit")}
                                  >
                                      Learn More
                                  </button>


                              </div>
                          </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'Class Action' && (
                    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                      {/* Class Action content */}
                      <div className="w-full overflow-hidden lg:rounded-none relative min-h-[400px] flex flex-col md:flex-row items-stretch">
                        <div className="block md:hidden">
                          <img
                            src={ClassAction}
                            alt="Class Action"
                            className="w-full h-64 sm:h-80 md:h-96 object-cover "
                          />
                          <div className="bg-[#C09F53] p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                            <h2 className="text-white font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg">
                             Rideshare Sexual<br></br>Assault Lawsuit 
                            </h2>
                            <p className="text-white font-['Open_Sans'] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-full">
                             We support survivors in taking legal action against rideshare companies, seeking compensation and accountability for assault and unsafe conditions. 
                            </p>
                            <button
                              className="rounded-full border-2 border-[#023437] px-6 md:px-8 py-3 md:py-4 text-[#023437] font-['Open_Sans'] text-base md:text-lg font-semibold bg-transparent self-start transition-all duration-300 hover:bg-[#023437] hover:text-[#C09F53] cursor-pointer drop-shadow-md"
                              onClick={() => navigate("/Service/MassTort/Rideshare-Lawsuit")}
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                        <div className="hidden md:flex w-full overflow-hidden lg:rounded-none relative min-h-[400px] items-center justify-start">
                          <img
                            src={classactionlap}
                            alt="Class Action"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover lg:rounded-none"
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 w-full">
                            <h2 className="text-white font-['Playfair_Display'] font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg text-left whitespace-nowrap overflow-hidden text-ellipsis" style={{fontSize: 'min(6vw, 100px)'}}>
                              Rideshare Sexual <br></br>Assault Lawsuit 
                            </h2>
                            <p className="text-white font-['Open_Sans'] font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-[50%] text-left" style={{fontSize: '20px'}}>
                             We support survivors in taking legal action against rideshare companies, seeking compensation and accountability for assault and unsafe conditions. 
                            </p>
                            <button
                              className="rounded-full border-2 border-[#023437] px-6 md:px-8 py-3 md:py-4 text-[#023437] font-['Open_Sans'] font-semibold bg-transparent transition-all duration-300 hover:bg-white hover:text-[#023437] cursor-pointer drop-shadow-md text-left"
                              style={{fontSize: '20px'}}
                              onClick={() => navigate("/Service/MassTort/Rideshare-Lawsuit")}
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'Personal Injury' && (
                    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                      {/* Personal Injury content */}
                      <div className="w-full overflow-hidden lg:rounded-none relative min-h-[400px] flex flex-col md:flex-row items-stretch">
                        <div className="block md:hidden">
                          <img
                            src={bPersonalInjury}
                            alt="Personal Injury"
                            className="w-full h-64 sm:h-80 md:h-96 object-cover "
                          />
                          <div className="bg-[#C09F53] p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                            <h2 className="text-white font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg">
                             18-Wheeler <br></br>Accident Lawsuit 
                            </h2>
                            <p className="text-white font-['Open_Sans'] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-full">
                             We help victims of trucking accidents pursue claims for injuries, lost income, and damages caused by driver negligence or vehicle failure. 
                            </p>
                            <button
                              className="rounded-full border-2 border-[#023437] px-6 md:px-8 py-3 md:py-4 text-[#023437] font-['Open_Sans'] text-base md:text-lg font-semibold bg-transparent self-start transition-all duration-300 hover:bg-white hover:text-[#023437] cursor-pointer drop-shadow-md"
                             onClick={() => navigate("/Service/MassTort/18Wheeler-Lawsuit")}
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                        <div className="hidden md:flex w-full overflow-hidden lg:rounded-none relative min-h-[400px] items-center justify-start">
                          <img
                            src={personallap}
                            alt="Personal Injury"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover lg:rounded-none"
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 w-full">
                            <h2 className="text-white font-['Playfair_Display'] font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg text-left whitespace-nowrap overflow-hidden text-ellipsis" style={{fontSize: 'min(6vw, 100px)'}}>
                              18-Wheeler <br></br>Accident Lawsuit 
                            </h2>
                            <p className="text-white font-['Open_Sans'] font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-[50%] text-left" style={{fontSize: '20px'}}>
                             We help victims of trucking accidents pursue claims for injuries, lost income, and damages caused by driver negligence or vehicle failure. 
                            </p>
                            <button
                              className="rounded-full border-2 border-[#023437] px-6 md:px-8 py-3 md:py-4 text-[#023437] font-['Open_Sans'] font-semibold bg-transparent transition-all duration-300 hover:bg-white hover:text-[#023437] cursor-pointer drop-shadow-md text-left"
                              style={{fontSize: '20px'}}
                             onClick={() => navigate("/Service/MassTort/18Wheeler-Lawsuit")}
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="w-full bg-[#023437] py-6 lg:py-10">
                <div ref={targetRef}></div>
                
               <section className="w-full bg-[#023437] py-3 lg:py-5">
  <div ref={targetRef}></div>
  
  {/* Section Header */}
  <div className="flex flex-row items-end gap-4 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-8 lg:mb-16">
    <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight whitespace-nowrap mb-0">
      How It Works
    </h1>
    <div className="flex-1 flex justify-end items-end">
      <div className="max-w-md">
        <p className="text-[#FFFBF3] font-['Open_Sans'] text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed text-left">
          Start in just a few steps,<br />
          where <span className='text-[#C09F53]'>your rights come first.</span>
        </p>
      </div>
    </div>
  </div>

  
</section>

                {/* Steps Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`
                                flex flex-col p-6 md:p-8 lg:p-10 gap-6 md:gap-8 lg:gap-12
                                border border-[#FFFBF3] border-opacity-35 cursor-pointer
                                transition-all duration-300 hover:border-opacity-60
                                ${index === 0 ? 'lg:rounded-l-lg' : ''}
                                ${index === steps.length - 1 ? 'lg:rounded-r-lg' : ''}
                                ${index < steps.length - 1 ? 'lg:border-r-0' : ''}
                                lg:rounded-none rounded-lg
                            `}
                            onClick={() => {
        if (step.route) navigate(step.route);
      }}
                        >
                            <p className="text-[#FFFBF3] font-['Open_Sans'] text-lg md:text-xl lg:text-2xl font-semibold">
                                {step.number}
                            </p>
                            <h4 className="text-[#C09F53] font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-tight underline">
                                {step.title}
                            </h4>
                            <p className="text-[#FFFBF3] font-['Open_Sans'] text-base md:text-lg lg:text-xl leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

          
        </div>
    );
}

export default HomeThree;