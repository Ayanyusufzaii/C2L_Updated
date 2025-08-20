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
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 md:mb-16 lg:mb-20 xl:mb-24 gap-6 lg:gap-8">
  {/* Main Heading */}
  <div className="flex-shrink-0">
    <h1 className="font-['Playfair_Display'] text-[42px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-extrabold leading-[1.1] text-center lg:text-left">
      <span className="text-white">Our </span>
      <span className="text-[#C09F53]">Vision</span>
    </h1>
  </div>
  
  {/* Subheading */}
  <div className="flex-1 lg:max-w-[362px] xl:max-w-[452px] 2xl:max-w-[509px]">
    <p className="text-[#EFE4CB] font-opensans  text-base md:text-lg lg:text-[14px] xl:text-[18px] font-medium leading-tight text-center lg:text-left">
      Take a moment to explore our website today and connect with a dedicated attorney who will protect your rights.
    </p>
  </div>
</div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto">
            {/* Desktop Card Background */}
            <div className="relative w-full">
              <img 
                src={cardDesktop} 
                alt="Vision card background"
                className="w-full h-auto object-contain"
              />
              
              {/* Content Overlay - Positioned to center in actual card area (top 69.6% of image) */}
              <div 
                className="absolute inset-x-0 top-0 flex items-center justify-center"
                style={{ 
                  height: '69.6%', // Actual card area (100% - 30.4% decorative bottom)
                  paddingTop: '5%',
                  paddingBottom: '5%'
                }}
              >
                <div className="relative max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%]">
                  {/* Left quote - responsive positioning */}
                  <img
                    src={lqt}
                    alt="opening quote"
                    className="absolute w-[5%] xl:w-[6%] 2xl:w-[7%] h-auto"
                    style={{ 
                      top: '-8%',
                      left: '-6%'
                    }}
                  />

                  {/* Text container */}
                  <div className="relative z-10">
                    {/* Main Text - responsive font sizing */}
                    <p className="text-[#fff] font-opensans  text-[1.8vw] xl:text-[1.8vw] 2xl:text-[1.6vw] font-medium leading-[1.6] italic text-center px-[5%]">
                      We envision a future where legal assistance is accessible, efficient, & tailored to individual needs. Connect2Lawyer strives to be the cornerstone of that future, ensuring that every Australian can confidently navigate their legal challenges with the right support.
                    </p>
                  </div>

                  {/* Right quote - responsive positioning */}
                  <img
                    src={rqt}
                    alt="closing quote"
                    className="absolute w-[5%] xl:w-[6%] 2xl:w-[7%] h-auto"
                    style={{ 
                      bottom: '-8%',
                      right: '-6%'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-md mx-auto">
            {/* Mobile Card Background */}
            <div className="relative w-full">
              <img 
                src={cardMobile} 
                alt="Vision card background"
                className="w-full h-auto object-contain"
              />
              
              {/* Content Overlay - Positioned to center in actual card area (top 83.6% of image) */}
              <div 
                className="absolute inset-x-0 top-0 flex items-center justify-center"
                style={{ 
                  height: '83.6%', // Actual card area (100% - 16.4% decorative bottom)
                  padding: '8%'
                }}
              >
                <div className="relative w-full max-w-[90%] sm:max-w-[85%]">
                  {/* Top Left Quote - Mobile */}
                  <img 
                    src={quoteTopMobile}
                    alt="Opening quote"
                    className="absolute w-[8%] sm:w-[7%] md:w-[6%] h-auto z-10"
                    style={{ 
                      top: '-5%',
                      left: '-3%'
                    }}
                  />
                  
                  {/* Main Text - Mobile with responsive sizing */}
                  <p className="text-[#fff] text-[3.5vw] sm:text-[3vw] md:text-[24px] font-opensans  font-medium leading-[1.5] sm:leading-[1.6] italic text-center">
                    We envision a future where legal assistance is accessible, efficient, & tailored to individual needs. Connect2Lawyer strives to be the cornerstone of that future, ensuring that every Australian can confidently navigate their legal challenges with the right support.
                  </p>
                  
                  {/* Bottom Right Quote - Mobile */}
                  <img 
                    src={quoteBottomMobile}
                    alt="Closing quote"
                    className="absolute w-[8%] sm:w-[7%] md:w-[6%] h-auto z-10"
                    style={{ 
                      bottom: '-5%',
                      right: '-3%'
                    }}
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