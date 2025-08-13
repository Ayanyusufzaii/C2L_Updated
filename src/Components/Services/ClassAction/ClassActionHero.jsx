import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from "../../../assets/caHeroBg.png";
import heroBgMob from "../../../assets/caHeroBgmob.png";
import backimg from "../../../assets/backimg.png"; 





const ClassActionHero = () => {
  const navigate = useNavigate();

const handleBackClick = () => {
    navigate(-1); // Goes back to the previous page in history
  };
  return (
    <>
      <section className="relative w-full h-[365px] bg-black overflow-hidden">
        {/* Desktop/Tablet Background */}
        <div className="hidden md:block absolute inset-0">
          <img 
            src={heroBg}
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-full h-full
              md:w-auto md:h-full md:min-w-full
              lg:w-auto lg:h-full lg:min-w-full
              xl:w-full xl:h-auto xl:min-h-full
              2xl:w-full 2xl:h-auto 2xl:min-h-full
              object-cover brightness-[1.8] contrast-125 saturate-110"
          />
          {/* Light overlays for brightness */}
          {/* <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" /> */}
        </div>
        
        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <img 
            src={heroBgMob}
            alt=""
            className="w-full h-full object-cover brightness-[1.8] contrast-125 saturate-110"
          />
          {/* Light overlays for brightness */}
          {/* <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" /> */}
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full">
          <div className="h-full flex flex-col max-w-[1920px] mx-auto">
            {/* Back Button - Top Left */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 xl:top-10 xl:left-10 z-20">
          <button
            onClick={handleBackClick}
            style={{ outline: 'none', cursor: 'pointer' }}
            className="transition-transform duration-300 group"
          >
            <img
              src={backimg}
              alt="Back"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </button>
        </div>
            
            {/* Main Content - Bottom Aligned */}
            <div className="flex-1 flex items-end">
              <div className="w-full px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 
                pb-8 sm:pb-7 md:pb-4 lg:pb-8 xl:pb-8">
                {/* Heading */}
                <h1 className="text-white font-['Playfair_Display'] font-bold leading-none">
                  <span className="block 
                    text-[44px]
                    sm:text-[60px]
                    md:text-[82px]
                    lg:text-[98px]
                    xl:text-[122px]
                    2xl:text-[128px]
                    tracking-tight
                    [text-shadow:_0_4px_20px_rgb(0_0_0_/_80%)]">
                    Class Action
                  </span>
                </h1>
                
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 
          bg-gradient-to-t from-black/40 via-black/20 to-transparent pointer-events-none" />
      </section>
    </>
  );
};

export default ClassActionHero;