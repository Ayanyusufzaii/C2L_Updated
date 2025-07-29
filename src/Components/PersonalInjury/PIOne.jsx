import React, { useEffect } from 'react';
import Frame from "../../assets/Frame 261 (1).png";

function SubOne() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConsultationClick = () => {
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
    });
};
  return (
    <div>
      {/* Desktop Version */}
      <div className='hidden md:block bg-[#023437] w-full max-w-[1521px] h-[850px] flex-shrink-0 p-32 pb-10'>
        <h1 className="w-[1244px] text-[128px] text-[#FFFBF3] leading-[132px] font-['Playfair_Display']">
          Truck Accident Claims
        </h1>
        <p className="text-[#FFFBF3] font-open-sans text-[32px] font-bold leading-normal italic w-[485px] mt-16">
          Helping Australians seek justice after truck accidents
        </p>
        <div className="border-t border-teal-700 mb-10 w-[40%]"></div>

        <div className="flex items-center gap-8">
          <p className="text-[#FFFBF3] font-open-sans text-[24px] font-normal not-italic leading-normal w-[622px]">
            We support individuals and families impacted by truck-related accidents by connecting them with experienced legal experts. Whether it’s a highway collision, freight vehicle crash, or commercial transport incident, we help you understand your options and get the guidance you deserve.
          </p>
          <div className='w-[357px] h-[70px] ml-[30%]' >
            <img src={Frame} alt="Phone Icon" onClick={handleConsultationClick}/>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className='md:hidden bg-[#023437] w-full p-8 pb-6 mt-16'>
        <h1 className="text-[38px] text-[#FFFBF3] leading-[52px] font-['Playfair_Display']">
          Truck Accident Claims
        </h1>
        <p className="text-[#FFFBF3] font-open-sans text-[20px] font-bold leading-normal italic mt-8">
          Helping Australians seek justice after truck accidents
        </p>
        <div className="border-t border-teal-700 my-6 w-[80%]"></div>

        <p className="text-[#FFFBF3] font-open-sans text-[16px] font-normal not-italic leading-normal mb-6">
          We support individuals and families impacted by truck-related accidents by connecting them with experienced legal experts. Whether it’s a highway collision, freight vehicle crash, or commercial transport incident, we help you understand your options and get the guidance you deserve.
        </p>

        <div className='w-full max-w-[250px] h-[50px] mx-auto'>
          <img src={Frame} alt="Phone Icon" className="w-full h-full object-contain" onClick={handleConsultationClick} />
        </div>
      </div>
    </div>
  );
}

export default SubOne;