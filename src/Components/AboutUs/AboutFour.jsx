import React from 'react';
import cardDesktop from "../../assets/abCard.png";
import cardMobile from "../../assets/abCardmob.png";
import quoteTopMobile from "../../assets/sqtL.png";
import quoteBottomMobile from "../../assets/sqtR.png";
import lqt from "../../assets/lqt.png";
import rqt from "../../assets/rqt.png";

const AboutFour = () => {
  return (
    <section className="w-full bg-[#023437] py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Desktop: side by side, Mobile: stacked and centered */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 md:mb-16 lg:mb-20 xl:mb-24 gap-6 lg:gap-8">
          {/* Main Heading */}
          <div className="flex-shrink-0">
            <h1 className="font-['Playfair_Display'] text-[42px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-extrabold leading-[1.1] text-center lg:text-left">
              <span className="text-white">Our </span>
              <span className="text-[#C09F53]">Vision</span>
            </h1>
          </div>
          
          {/* Subheading */}
          <div className="flex-1 lg:max-w-2xl lg:pb-2 xl:pb-4">
            <p className="text-white font-['Open_Sans'] text-base md:text-lg lg:text-xl font-medium leading-normal text-center lg:text-left">
              Take a moment to explore our website today and connect with a dedicated attorney who will protect your rights.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative w-full max-w-5xl md:max-w-6xl mx-auto">
            {/* Desktop Card Background */}
            <div className="relative w-full">
              <img 
                src={cardDesktop} 
                alt="Vision card background"
                className="w-full h-auto object-contain"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-start justify-center pt-16 lg:pt-20 xl:pt-24 2xl:pt-20 p-8 xl:p-12">
                

                <div className="relative">
          {/* Left quote - positioned at top left of text box */}
          <img
            src={lqt}
            alt="opening quote"
            className="
              absolute -top-14 -left-8
              w-[30px] h-[20px]
              sm:w-[45px] sm:h-[30px]
              md:w-[61px] md:h-[40px]
              lg:w-[80px] lg:h-[54px]
              xl:w-[97px] xl:h-[65px]
            "
            style={{ aspectRatio: '96.98/65.33' }}
          />

          {/* Text container */}
          <div className="relative z-10 max-w-[83vw]">
            {/* Main Text */}
                  <p className="text-[#fff] font-['Open_Sans'] text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] font-medium leading-tight italic text-center px-8 lg:px-12 xl:px-16">
                    We envision a future where legal assistance is accessible, efficient, & tailored to individual needs. Connect2Lawyer strives to be the cornerstone of that future, ensuring that every Australian can confidently navigate their legal challenges with the right support.
                  </p>
          </div>

          {/* Right quote - positioned at bottom right of text box */}
          <img
            src={rqt}
            alt="closing quote"
            className="
              absolute -bottom-14 -right-3
              w-[30px] h-[20px]
              sm:w-[45px] sm:h-[30px]
              md:w-[61px] md:h-[40px]
              lg:w-[80px] lg:h-[54px]
              xl:w-[97px] xl:h-[65px]
            "
            style={{ aspectRatio: '96.98/65.33' }}
          />
        </div>


              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="relative w-full max-w-md mx-auto">
            {/* Mobile Card Background */}
            <div className="relative w-full">
              <img 
                src={cardMobile} 
                alt="Vision card background"
                className="w-full h-auto object-contain"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                <div className="relative w-full">
                  {/* Top Left Quote - Mobile */}
                  <img 
                    src={quoteTopMobile}
                    alt="Opening quote"
                    className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 z-10"
                  />
                  
                  {/* Main Text - Mobile */}
                  <p className="text-[#023437] text-sm sm:text-base font-medium leading-relaxed italic text-center px-4 sm:px-6">
                    We envision a future where legal assistance is accessible, efficient, & tailored to individual needs. Connect2Lawyer strives to be the cornerstone of that future, ensuring that every Australian can confidently navigate their legal challenges with the right support.
                  </p>
                  
                  {/* Bottom Right Quote - Mobile */}
                  <img 
                    src={quoteBottomMobile}
                    alt="Closing quote"
                    className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFour;