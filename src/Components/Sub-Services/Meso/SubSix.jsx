import React from 'react';

function SubSix() {
  return (
    <>
      {/* Desktop & Tablet Version */}
      <div className="hidden md:flex w-full justify-center">
        <div
          className="w-full max-w-[1540px] h-auto flex-shrink-0 bg-[#C09F53] pb-16 flex flex-col items-center
            pl-8 lg:pl-24 xl:pl-40 2xl:pl-64
            "
        >
          {/* Card 1 */}
          <div className="mt-10 lg:mt-16 flex items-center justify-center w-full">
            <span
              className="text-[#FFFBF3] font-['Open_Sans'] font-semibold leading-none text-left min-w-[56px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px]
                text-[56px] md:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px]"
            >
              01
            </span>
            <div className="flex flex-col flex-1 ml-4 md:ml-8 lg:ml-12 xl:ml-16 items-start">
              <h1
                className="text-[#FFFBF3] font-['Playfair_Display'] font-extrabold text-left leading-tight mt-2
                  text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[52px]"
              >
                Victims
              </h1>
              <p
                className="text-[#023437] font-open-sans font-normal mt-2 text-left w-full
                  max-w-[350px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[805px]
                  text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                Work in industries or roles where asbestos exposure was common, such as construction, shipyards, manufacturing, or power plants.
              </p>
            </div>
          </div>
          <div className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[1164px] h-px bg-[rgba(255,251,243,0.44)] mt-10 lg:mt-16 mx-auto"></div>
          {/* Card 2 */}
          <div className="mt-4 flex items-center justify-center w-full">
            <span
              className="text-[#FFFBF3] font-['Open_Sans'] font-semibold leading-none text-left min-w-[56px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px]
                text-[56px] md:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px]"
            >
              02
            </span>
            <div className="flex flex-col flex-1 ml-4 md:ml-8 lg:ml-12 xl:ml-16 items-start">
              <h1
                className="text-[#FFFBF3] font-['Playfair_Display'] font-extrabold text-left leading-tight mt-2
                  text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[52px]"
              >
                Family Members
              </h1>
              <p
                className="text-[#023437] font-open-sans font-normal mt-2 text-left w-full
                  max-w-[350px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[805px]
                  text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                Those affected by secondary exposure, often through contact with asbestos fibers on a loved one’s clothing or belongings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Small Tablet Version */}
      <div className="block md:hidden bg-[#C09F53] py-8 px-4">
        {/* Card 1 */}
        <div className="mt-12 flex items-start">
          <span className="text-[#FFFBF3] font-['Open_Sans'] text-[56px] font-semibold leading-none min-w-[56px] text-left">01</span>
          <div className="flex flex-col flex-1 ml-2">
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[20px] font-extrabold text-left leading-tight">Victims</h1>
            <p className="text-[#023437] font-open-sans text-sm mt-2 text-left">
              Work in industries or roles where asbestos exposure was common, such as construction, shipyards, manufacturing, or power plants. 
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-[rgba(255,251,243,0.44)] my-8"></div>
        {/* Card 2 */}
        <div className="mt-4 flex items-start">
          <span className="text-[#FFFBF3] font-['Open_Sans'] text-[56px] font-semibold leading-none min-w-[56px] text-left">02</span>
          <div className="flex flex-col flex-1 ml-2">
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[20px] font-extrabold text-left leading-tight">Family Members</h1>
            <p className="text-[#023437] font-open-sans text-sm mt-2 text-left">
              Those affected by secondary exposure, often through contact with asbestos fibers on a loved one’s clothing or belongings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubSix;