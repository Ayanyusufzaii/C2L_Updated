import React, { useRef, useState } from 'react';
import Frame176 from "../../assets/Active lawsuits set.png";
import Framem176 from "../../assets/Active lawsuits set.png";
import bg from "../../assets/MesoImage.png";
<<<<<<< HEAD
import MesoGroup from "../../assets/MesoGroup.png";
import ClassAction from "../../assets/ClassAction.png";
import bPersonalInjury from "../../assets/PersonalInjury.png";
import MassTort from "../../assets/MesoLaww.png";
=======
import masstortlap from "../../assets/masstortlap.png";
import classactionlap from "../../assets/classactionlap.png";
import personallap from "../../assets/personallap.png";
import ClassAction from "../../assets/classactionbg.png";
import bPersonalInjury from "../../assets/personalinjurybg.png";
import MassTort from "../../assets/masstortbg.png";
>>>>>>> 01d88ce365a0a4a2ac1151d2283b27cf69eed9cd
function HomeThree() {
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

    const handleLearnMoreClick = () => {
        console.log('Learn More clicked');
    };

    const expertiseTags = [
        { text: 'Mass Tort' },
        { text: 'Class Action' },
        { text: 'Personal Injury' }
    ];

    const steps = [
        {
            number: "Step 1",
            title: "Submit your claim",
            description: "Get a free case review from experienced professionals."
        },
        {
            number: "Step 2", 
            title: "We take action",
            description: "We will begin a detailed review of your case as soon as your claim is received."
        },
        {
            number: "Step 3",
            title: "Justice drives us", 
            description: "If we represent you, our team works tirelessly to secure the results you're entitled to."
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
                <div className="flex flex-wrap gap-2 md:gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-4 md:mb-8">
                    {expertiseTags.map((tag, index) => (
                        <button
                            key={index}
                            className={`
                                rounded-full px-4 md:px-6 py-2 md:py-3
                                font-['Open_Sans'] text-sm md:text-base font-semibold
                                transition-all duration-300
                                ${activeTab === tag.text
                                    ? 'bg-[#C09F53] text-[#023437]'
                                    : 'border border-[#FFFBF3] text-[#FFFBF3] bg-transparent hover:bg-[#FFFBF3] hover:text-[#023437]'
                                }
                            `}
                            onClick={() => setActiveTab(tag.text)}
                        >
                            {tag.text}
                        </button>
                    ))}
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
                                      className="rounded-full border-2 border-white px-6 md:px-8 py-3 md:py-4 text-white font-['Open_Sans'] text-base md:text-lg font-semibold bg-transparent self-start transition-all duration-300 hover:bg-white hover:text-[#C09F53] cursor-pointer drop-shadow-md"
                                      onClick={handleLearnMoreClick}
                                  >
                                      Learn More
                                  </button>
                              </div>
                          </div>
                          
                          {/* Tablet/Laptop: overlay text on image, left-aligned */}
                          <div className="hidden md:flex w-full overflow-hidden lg:rounded-none relative min-h-[400px] items-center justify-start">
                              <img
<<<<<<< HEAD
                                  src={MesoGroup}
=======
                                  src={masstortlap}
>>>>>>> 01d88ce365a0a4a2ac1151d2283b27cf69eed9cd
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
                                      className="rounded-full border-2 border-white px-6 md:px-8 py-3 md:py-4 text-white font-['Open_Sans'] font-semibold bg-transparent transition-all duration-300 hover:bg-white hover:text-[#C09F53] cursor-pointer drop-shadow-md text-left"
                                      style={{fontSize: '20px'}}
                                      onClick={handleLearnMoreClick}
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
                              Class Action
                            </h2>
                            <p className="text-white font-['Open_Sans'] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-full">
                              Support for individuals impacted by unsafe systems, with legal guidance designed to help you drive change through collective action.
                            </p>
                            <button
                              className="rounded-full border-2 border-white px-6 md:px-8 py-3 md:py-4 text-white font-['Open_Sans'] text-base md:text-lg font-semibold bg-transparent self-start transition-all duration-300 hover:bg-white hover:text-[#C09F53] cursor-pointer drop-shadow-md"
                              onClick={handleLearnMoreClick}
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                        <div className="hidden md:flex w-full overflow-hidden lg:rounded-none relative min-h-[400px] items-center justify-start">
                          <img
<<<<<<< HEAD
                            src={MesoGroup}
=======
                            src={classactionlap}
>>>>>>> 01d88ce365a0a4a2ac1151d2283b27cf69eed9cd
                            alt="Class Action"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover lg:rounded-none"
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 w-full">
                            <h2 className="text-white font-['Playfair_Display'] font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg text-left whitespace-nowrap overflow-hidden text-ellipsis" style={{fontSize: 'min(6vw, 100px)'}}>
                              Class Action
                            </h2>
                            <p className="text-white font-['Open_Sans'] font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-[50%] text-left" style={{fontSize: '20px'}}>
                             Support for individuals impacted by unsafe systems, with legal guidance designed to help you drive change through collective action.
                            </p>
                            <button
                              className="rounded-full border-2 border-white px-6 md:px-8 py-3 md:py-4 text-white font-['Open_Sans'] font-semibold bg-transparent transition-all duration-300 hover:bg-white hover:text-[#C09F53] cursor-pointer drop-shadow-md text-left"
                              style={{fontSize: '20px'}}
                              onClick={handleLearnMoreClick}
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
                              Personal Injury
                            </h2>
                            <p className="text-white font-['Open_Sans'] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-full">
                              Helping people recover after serious accidents by offering direction, support, and a path toward rebuilding what’s been lost. 
                            </p>
                            <button
                              className="rounded-full border-2 border-white px-6 md:px-8 py-3 md:py-4 text-white font-['Open_Sans'] text-base md:text-lg font-semibold bg-transparent self-start transition-all duration-300 hover:bg-white hover:text-[#C09F53] cursor-pointer drop-shadow-md"
                              onClick={handleLearnMoreClick}
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                        <div className="hidden md:flex w-full overflow-hidden lg:rounded-none relative min-h-[400px] items-center justify-start">
                          <img
<<<<<<< HEAD
                            src={MesoGroup}
=======
                            src={personallap}
>>>>>>> 01d88ce365a0a4a2ac1151d2283b27cf69eed9cd
                            alt="Personal Injury"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover lg:rounded-none"
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 w-full">
                            <h2 className="text-white font-['Playfair_Display'] font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg text-left whitespace-nowrap overflow-hidden text-ellipsis" style={{fontSize: 'min(6vw, 100px)'}}>
                              Personal Injury
                            </h2>
                            <p className="text-white font-['Open_Sans'] font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-[50%] text-left" style={{fontSize: '20px'}}>
                             Helping people recover after serious accidents by offering direction, support, and a path toward rebuilding what’s been lost. 
                            </p>
                            <button
                              className="rounded-full border-2 border-white px-6 md:px-8 py-3 md:py-4 text-white font-['Open_Sans'] font-semibold bg-transparent transition-all duration-300 hover:bg-white hover:text-[#C09F53] cursor-pointer drop-shadow-md text-left"
                              style={{fontSize: '20px'}}
                              onClick={handleLearnMoreClick}
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
            <section className="w-full bg-[#023437] py-12 lg:py-20">
                <div ref={targetRef}></div>
                
               <section className="w-full bg-[#023437] py-12 lg:py-20">
  <div ref={targetRef}></div>
  
  {/* Section Header */}
  <div className="flex flex-row items-end gap-4 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-8 lg:mb-16">
    <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight whitespace-nowrap mb-0">
      How It Works
    </h1>
    <div className="flex-1 flex justify-end items-end">
      <div className="max-w-md">
        <p className="text-[#FFFBF3] font-['Open_Sans'] text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed text-left">
          Start in just a few steps,<br />
          where your rights come first.
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
                            onClick={handleConsultationClick}
                        >
                            <p className="text-[#FFFBF3] font-['Open_Sans'] text-lg md:text-xl lg:text-2xl font-semibold">
                                {step.number}
                            </p>
                            <h4 className="text-[#C09F53] font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-tight underline">
                                {step.title}
                            </h4>
                            <p className="text-[#FFFBF3] font-['Open_Sans'] text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
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