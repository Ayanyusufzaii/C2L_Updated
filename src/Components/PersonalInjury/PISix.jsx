import React from 'react';

function PISix() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block">
        <div className="w-full max-w-[1540px] h-auto flex-shrink-0 bg-[#C09F53] pb-16">
          <p className="text-[#023437] font-['Open Sans'] text-2xl font-bold normal-case w-[542px] text-center mx-auto pt-10">
            THESE GOVERNMENT-RUN PROGRAMS OFFER
          </p>
          <div className='mt-[-5px]'>
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[44px] font-extrabold leading-[70px] w-full ml-16 mt-10">
              <span className="text-custom-light font-['Open Sans'] text-[80px] font-semibold leading-none mr-10">01</span>You were injured in a truck collision</h1>
            <p className="w-[805px] text-[#023437] font-open-sans text-[24px] font-normal leading-none mx-auto mt-4">
              Whether as a driver, cyclist, or passenger, the accident wasn’t your fault.
            </p>
          </div>
          <div className="w-[1164px] h-px bg-[rgba(255,251,243,0.44)] ml-16 mt-16"></div>
          <div className='mt-[-5px]'>
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[44px] font-extrabold leading-[70px] w-full ml-16 mt-10">
              <span className="text-custom-light font-['Open Sans'] text-[80px] font-semibold leading-none mr-10">02</span>You were working when the accident occurred</h1>
            <p className="w-[805px] text-[#023437] font-open-sans text-[24px] font-normal leading-none mx-auto mt-4">
              Workers’ compensation may apply if you were on duty at the time of the incident.
            </p>
          </div>
          <div className="w-[1164px] h-px bg-[rgba(255,251,243,0.44)] ml-16 mt-16"></div>

          <div className='mt-[-5px]'>
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[44px] font-extrabold leading-[70px] w-full ml-16 mt-10">
              <span className="text-custom-light font-['Open Sans'] text-[80px] font-semibold leading-none mr-10">03</span> A loved one was injured or killed in a truck accident</h1>
            <p className="w-[805px] text-[#023437] font-open-sans text-[24px] font-normal leading-none mx-auto mt-4">
              Families can seek compensation for loss of support, funeral costs, and emotional trauma.
            </p>
          </div>
          <div className="w-[1164px] h-px bg-[rgba(255,251,243,0.44)] ml-16 mt-16"></div>

          <div className='mt-[-5px]'>
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[44px] font-extrabold leading-[70px] w-full ml-16 mt-10">
              <span className="text-custom-light font-['Open Sans'] text-[80px] font-semibold leading-none mr-10">04</span> You developed long-term health issues</h1>
            <p className="w-[805px] text-[#023437] font-open-sans text-[24px] font-normal leading-none mx-auto mt-4">
              Physical disability, PTSD, or chronic pain following the crash may entitle you to long-term support.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden bg-[#C09F53] py-8 px-0">
        <p className="w-[398px] text-[#023437] ml-[-10%] font-['Playfair_Display'] text-3xl font-extrabold flex normal-case leading-[41.609px] text-center mx-auto pt-0">
          THESE GOVERNMENT-RUN PROGRAMS OFFER
        </p>
        <div className='py-0 px-4'>

          <div className="mt-16">
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-3xl font-extrabold flex items-start">
              <span className="text-custom-light font-['Open Sans'] text-6xl font-semibold mr-4">01</span>
              <span>You were injured in a truck collision</span>
            </h1>
            <p className="text-[#023437] font-open-sans text-base mt-4 text-left ml-24">
              Whether as a driver, cyclist, or passenger, the accident wasn’t your fault.
            </p>
          </div>

          <div className="w-full h-px bg-[rgba(255,251,243,0.44)] my-8"></div>
          <div className="mt-16">
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-3xl font-extrabold flex items-start">
              <span className="text-custom-light font-['Open Sans'] text-6xl font-semibold mr-4">02</span>
              <span>You were working when the accident occurred</span>
            </h1>
            <p className="text-[#023437] font-open-sans text-base mt-4 text-left ml-24">
              Workers’ compensation may apply if you were on duty at the time of the incident.
            </p>
          </div>

          <div className="w-full h-px bg-[rgba(255,251,243,0.44)] my-8"></div>
          <div className="mt-16">
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-3xl font-extrabold flex items-start">
              <span className="text-custom-light font-['Open Sans'] text-6xl font-semibold mr-4">03</span>
              <span>A loved one was injured or killed in a truck accident</span>
            </h1>
            <p className="text-[#023437] font-open-sans text-base mt-4 text-left ml-24" >
              Families can seek compensation for loss of support, funeral costs, and emotional trauma.
            </p>
          </div>

          <div className="w-full h-px bg-[rgba(255,251,243,0.44)] my-8"></div>

          <div className="mt-4">
            <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-3xl font-extrabold flex items-start">
              <span className="text-custom-light font-['Open Sans'] text-6xl font-semibold mr-4">04</span>
              <span >You developed long-term health issues</span>
            </h1>
            <p className="text-[#023437] font-open-sans text-base mt-4 text-left ml-24">
              Physical disability, PTSD, or chronic pain following the crash may entitle you to long-term support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PISix;