import React from 'react';
import cardDesktop from "../../assets/abCard.png";
import quoteTopDesktop from "../../assets/lqt.png";
import quoteBottomDesktop from "../../assets/rqt.png";
import cardMobile from "../../assets/abCardmob.png";
import quoteTopMobile from "../../assets/sqtL.png";
import quoteBottomMobile from "../../assets/sqtR.png";


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
            <p className="text-white font-['Open_Sans'] text-base md:text-lg lg:text-xl font-medium leading-normal text-center lg:text-right">
              Take a moment to explore our website today and connect with a dedicated attorney who will protect your rights.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Desktop Card Background */}
            <div className="relative w-full">
              <img 
                src={cardDesktop} 
                alt="Vision card background"
                className="w-full h-auto object-contain"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8 xl:p-12">
                <div className="relative max-w-4xl w-full">
                  {/* Top Left Quote */}
                  <img 
                    src={quoteTopDesktop}
                    alt="Opening quote"
                    className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 xl:-top-8 xl:-left-8 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 z-10"
                  />
                  
                  {/* Main Text */}
                  <p className="text-[#fff] font-['Open_Sans'] text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed italic text-center px-8 lg:px-12 xl:px-16">
                    We envision a future where legal assistance is accessible, efficient, & tailored to individual needs. Connect2Lawyer strives to be the cornerstone of that future, ensuring that every Australian can confidently navigate their legal challenges with the right support.
                  </p>
                  
                  {/* Bottom Right Quote */}
                  <img 
                    src={quoteBottomDesktop}
                    alt="Closing quote"
                    className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 xl:-bottom-8 xl:-right-8 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 z-10"
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
                  <p className="text-[#023437] font-['Open_Sans'] text-sm sm:text-base font-medium leading-relaxed italic text-center px-4 sm:px-6">
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