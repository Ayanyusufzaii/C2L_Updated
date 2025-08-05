import React from "react";
import combinedCard from "../../../assets/combinedCards.png";
import greenCardMobile from "../../../assets/greenCard.png";
import yellowCardMobile from "../../../assets/yellowCard.png";

const ClassActionTwo = () => {
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
          <h2 className="font-['Playfair_Display'] text-[24px] md:text-[20px] lg:text-[30px] xl:text-[40px] font-semibold leading-tight">
            We Make Class Actions <br />
            <span className="text-[#C09F53]">Easy to Join</span>
          </h2>
          <p className="mt-2 text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-tight text-[#EFE4CB]">
            Connect2Lawyer identifies eligible individuals and connects them
            with legal teams leading class action lawsuits, ensuring no one
            misses the opportunity to be part of a collective claim.
          </p>
        </div>

        {/* Right (Yellow) overlay */}
        <div className="absolute inset-y-0 right-0 w-1/2 p-8 lg:p-12 flex flex-col justify-center text-white font-left">
          <h2 className="font-['Playfair_Display'] text-[24px] md:text-[20px] lg:text-[30px] xl:text-[40px] font-semibold leading-tight">
            Rideshare Sexual
            <br /> Assault Lawsuit
          </h2>
          <p className="mt-2 text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-tight max-w-[560px] text-[#FFFBF3]">
            Supports survivors seeking justice for sexual assault or harassment
            during rideshare trips, holding companies accountable for unsafe
            conditions.
          </p>
          <button className="mt-3 inline-flex items-center px-6 py-3 bg-[#023437] text-white rounded-full text-sm md:text-base hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition">
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
            <h2 className="font-['Playfair_Display'] text-[22px] min-[420px]:text-[28px] sm:text-[32px] font-semibold leading-tight">
               We Make Class Actions <br />
            <span className="text-[#C09F53]">Easy to Join</span>
            </h2>
            <p className="mt-3 text-xs min-[420px]:text-sm sm:text-base leading-normal text-[#EFE4CB]">
              Connect2Lawyer identifies eligible individuals and connects them
              with legal teams leading class action lawsuits, ensuring no one
              misses the opportunity to be part of a collective claim.
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
            <h2 className="font-['Playfair_Display'] text-[22px] min-[420px]:text-[28px] sm:text-[32px] font-semibold leading-relaxed">
               Rideshare Sexual
            <br /> Assault Lawsuit
            </h2>
            <p className="mt-3 text-xs min-[420px]:text-sm sm:text-base leading-normal text-[#FFFBF3]">
              Supports survivors seeking justice for sexual assault or
              harassment during rideshare trips, holding companies accountable
              for unsafe conditions.
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

export default ClassActionTwo;
