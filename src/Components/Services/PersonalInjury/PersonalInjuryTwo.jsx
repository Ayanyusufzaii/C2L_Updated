import React from "react";
import combinedCard from "../../../assets/combinedCards.png";
import greenCardMobile from "../../../assets/greenCard.png";
import yellowCardMobile from "../../../assets/yellowCard.png";

const PersonalInjuryTwo = () => {
  return (
    <section className="px-4 py-8 lg:px-16 lg:py-12">
      {/* Desktop layout: combined image with two overlays */}
      <div className="relative hidden md:block w-full max-w-7xl mx-auto">
        <img
          src={combinedCard}
          alt="Mass Tort Overview"
          className="w-full h-full object-cover"
        />
        {/* Left (Green) overlay */}
        <div className="absolute inset-y-0 left-0 w-1/2 p-8 lg:p-12 flex flex-col justify-center text-white font-left">
          <h2 className="font-['Playfair_Display'] text-[24px] md:text-[20px] lg:text-[26px] xl:text-[36px] font-semibold leading-tight">
            Trusted Legal Help for <br />
            <span className="text-[#C09F53]"> Personal Injury </span> Victims
          </h2>
          <p className="mt-4 text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-tight text-[#EFE4CB]">
            Connect2Lawyer helps individuals injured in accidents connect with
            trusted legal support so they can focus on recovery while we take
            care of what comes next.
          </p>
        </div>

        {/* Right (Yellow) overlay */}
        <div className="absolute inset-y-0 right-0 w-1/2 p-8 lg:p-12 flex flex-col justify-center text-white font-left">
          <h2 className="font-['Playfair_Display'] text-[24px] md:text-[20px] lg:text-[26px] xl:text-[36px] font-semibold leading-tight">
            18-Wheeler & Heavy <br /> Vehicle Accident
          </h2>
          <p className="mt-4 text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-tight max-w-[400px] text-[#FFFBF3]">
            Seeks the compensation you deserve for injuries caused by accidents
            involving large commercial trucks.
          </p>
          <button className="mt-6 xl:mt-8 inline-flex items-center px-6 py-3 bg-[#023437] text-white rounded-full text-sm md:text-base hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Mobile layout: two separate cards */}
      <div className="md:hidden flex flex-col space-y-6">
        {/* Green card mobile */}
        <div className="relative w-full">
          <img
            src={greenCardMobile}
            alt="Navigating the Complexities of Mass Tort"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
            <h2 className="font-['Playfair_Display'] text-[18px] min-[350px]:text-[20px] min-[420px]:text-[24px] sm:text-[32px] font-semibold leading-tight">
              Trusted Legal Help for <br />
              <span className="text-[#C09F53]"> Personal Injury </span> Victims
            </h2>
            <p className="mt-3 text-xs min-[420px]:text-sm sm:text-base leading-normal text-[#EFE4CB]">
              Connect2Lawyer helps individuals injured in accidents connect with
              trusted legal support so they can focus on recovery while we take
              care of what comes next.
            </p>
          </div>
        </div>

        {/* Yellow card mobile */}
        <div className="relative w-full">
          <img
            src={yellowCardMobile}
            alt="Mesothelioma Lawsuit"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-center text-[#fff]">
            <h2 className="font-['Playfair_Display'] text-[18px] min-[350px]:text-[20px] min-[420px]:text-[24px] sm:text-[32px] font-semibold leading-relaxed">
              18-Wheeler & Heavy <br /> Vehicle Accident
            </h2>
            <p className="mt-3 text-xs min-[420px]:text-sm sm:text-base leading-normal text-[#FFFBF3]">
              Seeks the compensation you deserve for injuries caused by
              accidents involving large commercial trucks.
            </p>
            <button className="mt-4 inline-flex items-center px-5 py-2 bg-[#023437] text-white rounded-full text-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInjuryTwo;
