import React from 'react';
import img from '../../../assets/HomeFourHero.png';

const HomeFour = () => {
  return (
    <>
    <section className='bg-white p-4'>
      {/* Mobile View */}
      <div className="block md:hidden w-full flex flex-col items-stretch min-h-[400px] bg-[#023437]">
        {/* Image */}
        <div className="w-full h-[250px]">
          <img src={img} alt="HomeFourHero" className="w-full h-full object-fill" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center  px-4 py-8 space-y-4 text-left">
          <h1 className="text-3xl font-extrabold font-playfair leading-tight text-[#FFFBF3]">
            Start Your TAS Legal Claim Today
          </h1>
          <p className="text-base  font-opensans text-white font-normal leading-snug">
            No Win No Fees. Free, confidential review in minutes.
          </p>
          <div className="flex  gap-3 pt-4 w-full items-center">
            <button className="w-11/12 max-w-[300px] h-[55px] bg-[#C09F53] text-white font-semibold rounded-full">
              Contact Us
            </button>
            <button className="w-11/12 max-w-[300px] h-[55px] border border-white text-white font-semibold rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex w-full flex-row items-stretch min-h-[418px] p-8">
        {/* Image Section */}
        <div className="flex-1 relative">
          <img
            src={img}
            alt="HomeFourHero"
            className="w-full h-full object-fill"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 bg-[#023437] text-left flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 3xl:px-36 4xl:px-[12vw] py-12 2xl:py-16 4xl:py-20 space-y-6 min-w-[320px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-[80px] 4xl:text-[90px] font-extrabold font-playfair leading-tight text-[#FFFBF3]">
            Start Your TAS Legal Claim Today
          </h1>
          <p className="text-lg md:text-xl 2xl:text-2xl 3xl:text-[28px] 4xl:text-[32px] font-normal font-opensans text-white leading-snug">
            No Win No Fees. Free, confidential review in minutes.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="w-[220px] h-[70px] bg-[#C09F53] text-white font-semibold rounded-full">
              Contact Us
            </button>
            <button className="w-[220px] h-[70px] border border-white text-white font-semibold rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>

      
      </section>
    </>
  );
};

export default HomeFour;