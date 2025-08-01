import React from 'react';
import { ArrowLeft } from 'lucide-react';
import heroBg from "../../../assets/massTortHerobg.png";
import heroBgMob from "../../../assets/massTortHeroBgmob.png";

const MassTortHero = () => {
  return (
    <>
      {/* Spacer for navbar - adjust height based on your navbar */}
      <div className="h-16 sm:h-20 md:h-24"></div>
      
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
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>
        
        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <img 
            src={heroBgMob}
            alt=""
            className="w-full h-full object-cover brightness-[1.8] contrast-125 saturate-110"
          />
          {/* Light overlays for brightness */}
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full">
          <div className="h-full flex flex-col max-w-[1920px] mx-auto">
            {/* Back Button */}
            <div className="flex-shrink-0 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
              <button
                onClick={() => window.history.back()}
                className="group inline-flex items-center justify-center 
                  w-10 h-10
                  sm:w-12 sm:h-12
                  md:w-12 md:h-12
                  lg:w-14 lg:h-14
                  xl:w-14 xl:h-14
                  2xl:w-16 2xl:h-16
                  bg-white/10 backdrop-blur-md rounded-full border border-white/20 
                  hover:bg-white/20 hover:border-white/30 
                  transform transition-all duration-300 ease-out
                  focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Go back"
              >
                <ArrowLeft 
                  className="w-5 h-5 md:w-6 md:h-6 text-white 
                    group-hover:-translate-x-0.5 transition-transform duration-200" 
                  strokeWidth={2}
                />
              </button>
            </div>
            
            {/* Main Content - Bottom Aligned */}
            <div className="flex-1 flex items-end">
              <div className="w-full px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 
                pb-6 sm:pb-7 md:pb-8 lg:pb-10 xl:pb-12">
                {/* Heading */}
                <h1 className="text-white font-bold leading-none">
                  <span className="block 
                    text-3xl
                    sm:text-4xl
                    md:text-4xl
                    lg:text-5xl
                    xl:text-6xl
                    2xl:text-7xl
                    tracking-tight
                    [text-shadow:_0_4px_20px_rgb(0_0_0_/_80%)]">
                    Mass Tort
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-white/90
                  text-sm
                  sm:text-base
                  md:text-base
                  lg:text-lg
                  xl:text-xl
                  2xl:text-2xl
                  mt-3 sm:mt-4 md:mt-4 lg:mt-5 xl:mt-6
                  max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                  leading-relaxed
                  [text-shadow:_0_2px_12px_rgb(0_0_0_/_60%)]">
                  Comprehensive legal representation for mass tort litigation cases
                </p>
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

export default MassTortHero;