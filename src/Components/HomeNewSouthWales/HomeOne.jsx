import React from 'react';
import { useNavigate } from 'react-router-dom';
import Frame from '../../assets/HomeNSW.png';

function LegalHeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pt-20 xl:pt-24 lg:pb-24 xl:pb-32 bg-[#FFFBF3]">
        <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          
          {/* Top: Text Content */}
          <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-['Playfair_Display'] w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#023437] leading-tight mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12 underline px-6 py-4">
  Suffered an Injury in New South Wales? 

</h1>  

            <div className="mb-6 sm:mb-8 px-2">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-yellow-700 mb-3 sm:mb-4 uppercase tracking-wide text-center lg:text-left">
                Access Expert Legal Help Without Paying Upfront
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
               Whether it's workplace exposure, truck collisions, or rideshare {' '}
                <span className="hidden sm:inline"><br /></span>
                <span className="sm:hidden"> </span>
               harm our NSW legal team is here to guide your next steps.
              </p>
            </div>
          </div>

          {/* Bottom: Image and Tile Section */}
          {/* Bottom: Image and Tile Section */}
<div className="w-full flex items-center justify-center bg-[#FFFBF3] overflow-hidden px-0 py-0">
  <img
    src={Frame}
    alt="Legal services map"
    className="w-full h-auto object-cover"
  />
</div>
        </div>
      </div>

      {/* Decorative Elements - Responsive positioning */}
      <div className="absolute top-12 sm:top-16 md:top-20 right-8 sm:right-12 md:right-16 lg:right-20 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-yellow-400 opacity-10 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 sm:bottom-32 md:bottom-40 left-8 sm:left-12 md:left-16 lg:left-20 w-6 sm:w-10 md:w-12 h-6 sm:h-10 md:h-12 bg-teal-600 opacity-15 rounded-full animate-bounce hidden md:block"></div>
      <div className="absolute top-1/2 right-4 sm:right-6 md:right-8 lg:right-10 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-yellow-500 opacity-20 rounded-full animate-ping hidden md:block"></div>
      
      {/* Background Pattern - Responsive sizing */}
      <div className="absolute inset-0 opacity-5 hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-1 sm:w-2 h-1 sm:h-2 bg-teal-800 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-yellow-600 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-teal-700 rounded-full"></div>
      </div>
    </div>
  );
}

export default LegalHeroSection;