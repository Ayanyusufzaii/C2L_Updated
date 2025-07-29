import React, { useRef } from 'react';
import Frame176 from "../../assets/Frame 176 (2).png";
import Framem176 from "../../assets/ACTIVE LAWSUIT.png";
import bg from "../../assets/xray.png";
import { text } from 'framer-motion/client';


function HomeThree() {
    const targetRef = useRef(null);
    
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
        { text: 'Mesothelioma Lawsuits', active: true },
        { text: '18-Wheeler & Heavy Vehicle Accidents ', active: false },
        { text: 'Rideshare Accident Claims', active: false },
        { text: 'Learn More', active: false },
    ];



    return (
        <div className="w-full">
            {/* Our Expertise Section */}
            <section className="w-full bg-[#EFE4CB] relative py-8 md:py-16">
                {/* Section Header */}
                <div className="pt-8 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    <h1 className="text-[#023437] font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4 md:mb-8">
                        Our Expertise in NSW
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
    text-left whitespace-nowrap
    transition-all duration-300
    ${tag.active 
      ? 'bg-[#C09F53] text-[#ffffff]' 
      : 'border border-[#C09F53] text-[#023437] bg-transparent hover:bg-[#C09F53] hover:text-[#ffffff]'}
  `}
>
  {tag.text}
</button>

  ))}
</div>


                {/* Main Content Area */}
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-[#EFE4CB]">
  {/* Top Heading */}
  <div className="w-full bg-[#023437] py-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
    <h2 className="text-white font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center drop-shadow-lg">
      Asbestos Exposure & Mesothelioma Lawsuits
    </h2>
  </div>

  {/* Image Section */}
  <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] overflow-hidden">
    <img
      src={bg}
      alt="X-ray or Medical Illustration"
      className="w-full h-full object-cover object-top"
    />
  </div>

  {/* Info Section */}
  <div className="w-full flex flex-col gap-12 py-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 bg-[#023437]">
    {/* Tiles Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Tile 1 */}
      <div className="bg-transparent p-8 border border-gray-300 shadow-md">
        <h4 className="text-[#C09F53] font-['Playfair_Display'] text-xl sm:text-2xl font-bold mb-3">
          Lawsuit Type: 
        </h4>
        <p className="text-[#ffffff] font-['Open_Sans'] text-base sm:text-lg leading-relaxed">
          Dust Diseases Tribunal claims
        </p>
      </div>

      {/* Tile 2 */}
      <div className="bg-transparent p-8 border border-gray-300 shadow-md">
        <h4 className="text-[#C09F53] font-['Playfair_Display'] text-xl sm:text-2xl font-bold mb-3">
          Industries: 
        </h4>
        <p className="text-[#ffffff] font-['Open_Sans'] text-base sm:text-lg leading-relaxed">
          Construction, Shipyards, Power Plants, Renovation 
        </p>
      </div>
    </div>
    {/* Who it Helps */}
    <div className="max-w-5xl mx-auto text-left">
      <h3 className="text-[#C09F53] font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
        Who it helps:
      </h3>
      <p className="text-white font-['Open_Sans'] text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
        Workers or residents exposed to asbestos who are now diagnosed with mesothelioma or related diseases
      </p>

      {/* CTA Button */}
 <button
                                className="
                                    rounded-full border-2 border-white px-6 md:px-8 py-3 md:py-4 
                                    text-white font-['Open_Sans'] text-base md:text-lg font-semibold
                                    bg-[#C09F53] self-start transition-all duration-300
                                    hover:bg-[#C09F53] hover:text-[#ffffff] cursor-pointer drop-shadow-md
                                "
                                onClick={handleLearnMoreClick}
                            >
                                Learn More
                            </button>

    </div>

    
  </div>
</div>

            </section>

           

            
        </div>
    );
}

export default HomeThree;