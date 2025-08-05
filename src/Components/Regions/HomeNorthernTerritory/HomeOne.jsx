import React from "react";
import AustraliaMap from "../../../assets/NTHERODESKTOP.png";
import AustraliaMapMob from "../../../assets/NTHEROMOBILE.png";
import AustraliaMapTab from "../../../assets/NTHERODESKTOP.png";

const HomeOneMobile = () => (
  <section className="block md:hidden w-full bg-white px-6 py-6 flex flex-col items-left justify-start gap-6 font-playfair">
    {/* Text Section */}
 <div className="w-full flex flex-col items-center px-4">
  <h1 className="text-left font-['Playfair_Display'] font-extrabold leading-snug text-[#023437] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[38px]  sm:text-[36px] md:text-[40px]">
    Expert legal support <br /> for
    <span className="text-[#C09F53] font-extrabold"> Northern Territory </span>
  </h1>
  <div className="mt-4 w-full">
    <p className="text-left font-['Playfair_Display'] font-extrabold leading-snug text-[#023437] text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px]">
      Start your Claim with No upfront Fees.
    </p>
    <p className="text-left font-opensans font-normal leading-relaxed text-[#023437] mt-2 text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px]">
    Our NT-based lawyers are ready to review cases involving asbestos exposure, heavy vehicle accidents, and rideshare incidents - starting today.
    </p>
  </div>
</div>


    {/* Image Section */}
    <div className="w-full">
      <img
        src={AustraliaMapMob}
        alt="Australia Map"
        className="w-full h-auto object-contain rounded-md"
      />
    </div>
  </section>
);

// Tablet Component
const HomeOneTablet = () => (
  <section className="hidden md:flex lg:hidden w-full bg-white px-6 py-10 justify-center items-center min-h-[60vh] relative">
    <div className="relative w-full max-w-4xl mx-auto">
      <img
        src={AustraliaMapTab}
        alt="Australia Map"
        className="w-full h-auto object-cover min-h-[350px] max-h-[75vh] rounded-lg"
      />
      <div className="absolute top-0 left-0 w-2/3 p-6 flex flex-col items-start rounded-tl-lg">
        <h1 className="text-left font-serif font-semibold text-[#023437] leading-snug text-2xl md:text-3xl">
          Expert legal support <br />
          for <span className="text-[#C9A74A] font-bold">Northern Territory</span>
        </h1>
        <div className="mt-8">
          <p className="text-[#023437] font-semibold text-base md:text-lg">
            Start your claim with no upfront fees.
          </p>
          <p className="text-[#023437] mt-2 leading-relaxed max-w-[22rem] text-sm md:text-base">
            Our NT-based lawyers are ready to review cases involving asbestos exposure, heavy vehicle accidents, and rideshare incidents - starting today.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Desktop Component
const HomeOneDesktop = () => (
  <section className="hidden lg:flex w-full bg-white justify-center items-center min-h-[60vh] relative">
    {/* Responsive padding for different screen sizes */}
    <div className="w-full px-8 py-12 lg:px-12 lg:py-16 xl:px-16 xl:py-20 2xl:px-20 2xl:py-24 3xl:px-24 3xl:py-28 4xl:px-32 4xl:py-32">
      <div className="relative w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] 4xl:max-w-[2400px] mx-auto">
        <div className="relative mx-auto">
          <img
            src={AustraliaMap}
            alt="Australia Map"
            className="w-full h-auto object-contain rounded-lg min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] 2xl:min-h-[600px] 3xl:min-h-[700px] 4xl:min-h-[800px]"
          />

          {/* Text overlay with responsive positioning and sizing */}
          <div className="absolute top-0 left-0 flex flex-col items-start rounded-tl-lg">
            {/* Responsive width and padding */}
            <div className="p-6 lg:p-8 xl:p-10 2xl:p-12 3xl:p-16 4xl:p-20 ">
              <h1 className="text-left font-serif font-semibold text-[#023437] leading-tight text-[32px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] 3xl:text-[72px] 4xl:text-[84px]">
                Expert legal support <br />
                for{" "}
                <span className="text-[#C9A74A] font-bold">
                  Northern Territory
                </span>
              </h1>

              <div className="mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 3xl:mt-16 4xl:mt-20 
                max-w-[18rem] sm:max-w-[24rem] md:max-w-[28rem] 
                lg:max-w-[30rem] xl:max-w-[36rem] 2xl:max-w-[42rem] 
                3xl:max-w-[48rem] 4xl:max-w-[56rem]">
                <p className="text-[#023437] font-semibold font-playfair text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px] 4xl:text-[36px]">
                  Start your claim with no upfront fees.
                </p>
                <p className="text-[#023437] font-opensans mt-2 leading-relaxed text-[16px] lg:text-[17px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] 4xl:text-[32px]">
                  Our NT-based lawyers are ready to review cases involving asbestos exposure, heavy vehicle accidents, and rideshare incidents - starting today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Main Component
const HomeOne = () => (
  <>
    <div>
      <HomeOneMobile />
      <HomeOneTablet />
      <HomeOneDesktop />
    </div>
  </>
);

export default HomeOne;
