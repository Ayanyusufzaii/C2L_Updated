import React from 'react';

const AboutFive = () => {
    return (
        <section
            className="w-full flex items-center justify-center"
            style={{ backgroundColor: '#EFE4CB' }}
        >
            {/* Container with responsive height */}
            <div className="
        w-full 
        h-[420px] sm:h-[460px] md:h-[500px] lg:h-[540px]
        px-4 sm:px-6 md:px-8 lg:px-12
        flex items-center justify-center
      ">
                {/* Card with responsive dimensions */}
                <div
                    className="
            w-full
            max-w-[320px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1150px] xl:max-w-[1350px]
            h-[320px] sm:h-[280px] md:h-[320px] lg:h-[360px]
            flex items-center
            px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
            py-8 sm:py-10 md:py-12 lg:py-14
          "
                    style={{ backgroundColor: '#023437' }}
                >
                    {/* Content Container */}
                    <div className="
            w-full 
            flex flex-col 
            justify-center 
            space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8
            text-left
          ">
                        {/* Main Heading */}
                        <h2 className="
            font-['Playfair_Display']
              text-[#C09F53] 
              font-bold 
              text-[44px] sm:text-[44px] md:text-[50px] lg:text-[64px] xl:text-[80px]
              leading-tight sm:leading-tight md:leading-tight lg:leading-tight
              max-w-full sm:max-w-[90%]     
            ">
                            Start<span className='text-white'> Your Case </span>Today
                        </h2>

                        {/* Subtext */}
                        <p className="
              text-white 
              text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px]
              leading-relaxed sm:leading-tight md:leading-tight lg:leading-tight
              max-w-full sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%] xl:max-w-[65%]
            ">
                            Finding the right lawyer has never been easier, Connect2Lawyer simplifies the process explore our platform,
                            connect with top attorneys, and take the first step toward justice.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-2 sm:pt-3 md:pt-4">
                            <button
                                onClick={() => window.location.href = '/Contact-Us'}
                                className="
                  bg-[#C09F53] 
                  hover:bg-yellow-400 
                  active:bg-yellow-600
                  text-white 
                  font-semibold 
                  text-sm sm:text-base md:text-base lg:text-lg
                  px-6 sm:px-8 md:px-10 lg:px-12
                  py-2.5 sm:py-3 md:py-3.5 lg:py-4
                  rounded-full
                  transition-all duration-300 ease-in-out
                  transform hover:scale-105 active:scale-95
                  shadow-lg hover:shadow-xl
                  focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50
                  cursor-pointer
                  select-none
                  mb-4
                "
                                aria-label="Contact Us"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFive;