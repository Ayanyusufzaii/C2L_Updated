import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Frames from "../../../assets/herobgmeso.png";
import MobileFrames from "../../../assets/mobileherobg.png"; 
import backimg from "../../../assets/backimg.png"; 
import { useRef } from 'react';
function SubOne() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 const currentSectionRef = useRef(null);
  const handleConsultationClick = () => {
    const next = currentSectionRef.current?.nextElementSibling;
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleBackClick = () => {
    navigate(-1); // Goes back to the previous page in history
  };

  return (
    <div>
      {/* Desktop Version */}
      <div
        className="hidden md:flex w-full min-h-[100vh] h-screen flex-shrink-0 items-end justify-between p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Frames})` }}
      >
        {/* Back Button - Top Left */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 xl:top-10 xl:left-10 z-20">
    <button
  onClick={handleBackClick}
  style={{ outline: 'none', cursor: 'pointer' }}
  className="transition-transform duration-300 group"
>
  <img
    src={backimg}
    alt="Back"
    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain group-hover:scale-110 transition-transform duration-300"
  />
</button>

        </div>

        {/* Left Side: Hero Text + Subheading */}
        <div className="flex flex-col justify-end items-start max-w-[90%] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1100px] h-full pb-16 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-32">
          <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[32px] md:text-[42px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] font-extrabold leading-[1.1] md:leading-[1.2] mb-4 md:mb-6 lg:mb-8 text-left">
            Mesothelioma <br></br><span className='text-[#C09F53]'>Lawsuit</span>
          </h1>
          <div className="flex flex-col items-start w-full">
            <p className="text-[#C09F53] font-open-sans text-[14px] md:text-[18px] lg:text-[22px] xl:text-[26px] 2xl:text-[30px] font-bold leading-normal mb-2 md:mb-3 lg:mb-4 text-left">
              Helping Mesothelioma Patients Get the Justice They Deserve
            </p>
       
            <p className="text-[#FFFBF3] font-open-sans text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-normal leading-relaxed text-left max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]">
              We connect you with leading legal experts who guide you through every step of the claims process, ensuring you secure fair compensation for asbestos related diseases.
            </p>
          </div>
        </div>

        {/* Right Bottom: Free Case Review Button */}
        <div className="absolute right-4 bottom-4 md:right-6 md:bottom-6 lg:right-8 lg:bottom-8 xl:right-10 xl:bottom-10 2xl:right-12 2xl:bottom-12 flex flex-row items-center z-10 gap-2 md:gap-3 lg:gap-4">
          <button
            className="flex flex-row items-center group"
            onClick={handleConsultationClick}
            style={{ outline: 'none', border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <span className="text-[#FFFBF3] font-open-sans text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[21px] font-bold whitespace-nowrap">
              Free Case Review
            </span>
            <div className="ml-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 flex items-center justify-center rounded-full border-1 md:border-2 lg:border-3 border-[#C09F53] group-hover:bg-[#C09F53] transition-colors">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
              >
                <path d="M16 8V24M16 24L8 16M16 24L24 16" stroke="#FFFBF3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Version */}
      <div
        className="md:hidden w-full min-h-screen h-screen px-4 sm:px-6 relative flex flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: `url(${MobileFrames})` }}
      >
        {/* Back Button - Top Left Mobile */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
         <button
  onClick={handleBackClick}
  style={{ outline: 'none', cursor: 'pointer' }}
  className="group transition-transform duration-300"
>
  <img
    src={backimg}
    alt="Back"
    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain group-hover:scale-110 transition-transform duration-300"
  />
</button>

        </div>

        {/* Content positioned at bottom */}
        <div className="pb-20 sm:pb-24">
          <h1 className="text-[28px] sm:text-[36px] text-[#FFFBF3] leading-[32px] sm:leading-[42px] font-['Playfair_Display'] text-left font-extrabold mb-4 sm:mb-6">
            Mesothelioma <span className='text-[#C09F53]'>Lawsuit</span>
          </h1>
          <p className="text-[#C09F53] font-open-sans text-[16px] sm:text-[18px] font-bold leading-normal mb-3 sm:mb-4 text-left">
            Helping Mesothelioma Patients Get the Justice They Deserve
          </p>
          <div className="border-t border-teal-700 my-3 sm:my-4 w-[60%] sm:w-[70%]"></div>
          <p className="text-[#FFFBF3] font-open-sans text-[13px] sm:text-[14px] font-normal leading-relaxed text-left max-w-[90%] sm:max-w-[85%]">
            We stand by individuals and families affected by mesothelioma due to asbestos exposure,
            offering legal support and expert guidance. With deep legal expertise and a client-first approach,
            we help you navigate this challenging journey with strength, clarity, and care.
          </p>
        </div>

        {/* Mobile Free Case Review Button - Bottom Right */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
          <button
            className="flex flex-col items-center group"
            onClick={handleConsultationClick}
            style={{ outline: 'none', border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <span className="text-[#FFFBF3] font-open-sans text-[12px] sm:text-[13px] font-bold mb-2 whitespace-nowrap">
              Free Case Review
            </span>
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-3 sm:border-4 border-[#FFFBF3] group-hover:bg-[#FFFBF3] transition-colors">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-6 sm:h-6"
              >
                <path d="M16 8V24M16 24L8 16M16 24L24 16" stroke="#FFFBF3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubOne;