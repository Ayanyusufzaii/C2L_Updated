import React from 'react';

const AboutTwo = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-16">
      {/* Header Section - Desktop: side by side, Mobile: stacked */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-16 gap-6 lg:gap-4">
        {/* Main Heading - Left aligned on desktop */}
        <div className="flex-shrink-0">
          <h1 className="text-[#C09F53] font-['Playfair_Display'] text-[42px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-extrabold leading-[1.1] text-center lg:text-left">
            Our <br /><span className="text-[#023437]"> Commitment</span>
          </h1>
        </div>
        
        {/* Subheading - Right side on desktop, below on mobile */}
        <div className="flex-1 lg:max-w-[500px] lg:pb-2 xl:pb-4">
          <p className="text-[#023437] text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-normal text-right lg:text-right">
            Navigating the legal system can be complex, but with us, finding the right legal representation is simple, efficient, and stress-free.
          </p>
        </div>
      </div>

      {/* Cards Section - Horizontal on desktop, Vertical on mobile */}
      <div className="flex flex-col lg:flex-row">
        {/* Expert Network Card - Green */}
        <div className="flex-1 bg-[#EFE4CB] text-[#023437] p-6 md:p-8 lg:p-10 xl:p-12">
          <h3 className="font-['Playfair_Display'] text-[32px] md:text-[32px] lg:text-[36px] xl:text-[44px] font-normal leading-[1.1] mb-4 md:mb-6">
            Personalized<br /> Matching
          </h3>
          <p className="font-['Open_Sans'] text-sm md:text-base lg:text-lg xl:text-xl font-medium max-w-[416px]">
            Utilizing advanced algorithms to connect you with lawyers who specialize in your specific legal matter.
          </p>
        </div>

        {/* Transparent Insights Card - Beige */}
        <div className="flex-1 bg-[#023437] text-[#EFE4CB] p-6 md:p-8 lg:p-10 xl:p-12">
          <h3 className="font-['Playfair_Display'] text-[32px] md:text-[32px] lg:text-[36px] xl:text-[44px] font-normal leading-[1.1] mb-4 md:mb-6">
            Comprehensive <br />Services
          </h3>
          <p className="font-['Open_Sans'] text-sm md:text-base lg:text-lg xl:text-xl font-medium  max-w-[416px]">
            Offering assistance in areas such as personal injury, medical malpractice, mass tort litigation etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;