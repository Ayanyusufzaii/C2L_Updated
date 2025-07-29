import React, { useEffect } from 'react';
import Frames from "../../../assets/MESOHERO.png";
import Frame from "../../../assets/Frame 261 (1).png";
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
      <div className='hidden md:flex bg-[#023437] w-full min-h-[400px] h-[30vh] lg:h-[700px] xl:h-[850px] 2xl:h-[900px] flex-shrink-0 items-start justify-between p-2 md:p-6 lg:p-12 xl:p-20 relative mt-12 md:mt-12 lg:mt-20'>
        {/* Left Side: Hero Text + Subheading/Paragraph (Stacked) */}
        <div className="flex flex-col justify-between items-start max-w-[900px] pl-0 mt-8 md:mt-12 lg:mt-16 h-full pb-32 md:pb-36 lg:pb-40 xl:pb-48">
          <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-[28px] md:text-[52px] lg:text-[90px] xl:text-[110px] 2xl:text-[130px] font-extrabold leading-tight mb-6 md:mb-10 text-left whitespace-normal break-words">18-Wheeler & Heavy Vehicle Accident Lawsuit  </h1>
          <div className="flex flex-col items-start w-full">
            <p className="text-[#FFFBF3] font-open-sans text-[15px] md:text-[20px] lg:text-[26px] xl:text-[32px] font-bold leading-normal mb-2 md:mb-4 text-left">Supporting Victims in Their Fight for Justice  </p>
            <div className="w-2/3 md:w-1/2 h-[2px] bg-[#FFFBF3] mb-4 md:mb-6"></div>
            <p className="text-[#FFFBF3] font-open-sans text-[13px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-normal not-italic leading-normal text-left"> We connect you with leading legal experts who guide you through every step of the claims process, working to secure compensation and accountability from responsible parties. </p>
          </div>
        </div>
        {/* Right Bottom: Free Case Review + Down Arrow (inline) */}
        <div className="absolute right-12 bottom-12 flex flex-row items-center z-10 gap-2 md:gap-3 lg:gap-4">
          <button
            className="flex flex-row items-center group"
            onClick={handleConsultationClick}
            style={{ outline: 'none', border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <span className="text-[#FFFBF3] font-open-sans text-[15px] md:text-[18px] lg:text-[22px] font-bold whitespace-nowrap">Free Case Review</span>
            <div className="ml-2 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border-4 border-[#FFFBF3] group-hover:bg-[#FFFBF3] transition-colors">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8V24M16 24L8 16M16 24L24 16" stroke="#FFFBF3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Version */}
      <div className='md:hidden bg-[#023437] w-full pt-36 sm:pt-40 pb-8 px-4 sm:px-8 mt-0 relative min-h-[90vh] flex flex-col justify-start'>
        <h1 className="text-[36px] sm:text-[48px] text-[#FFFBF3] leading-[42px] sm:leading-[52px] font-['Playfair_Display'] text-left">Mesothelioma Lawsuit</h1>
        <p className="text-[#FFFBF3] font-open-sans text-[18px] sm:text-[20px] font-bold leading-normal mt-6 sm:mt-8 text-left">Seeking justice for individuals diagnosed with mesothelioma.</p>
        <div className="border-t border-teal-700 my-4 sm:my-6 w-[80%]"></div>
        <p className="text-[#FFFBF3] font-open-sans text-[14px] sm:text-[16px] font-normal not-italic leading-normal mb-6 text-left">We stand by individuals and families affected by mesothelioma due to asbestos exposure, offering legal support and expert guidance. With deep legal expertise and a client-first approach, we help you navigate this challenging journey with strength, clarity, and care.</p>
        {/* Free Case Review Button at Bottom of Hero Section */}
        <div className="w-full flex flex-col items-center mt-auto pt-8">
          <button
            className="flex flex-col items-center group"
            onClick={handleConsultationClick}
            style={{ outline: 'none', border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <span className="text-[#FFFBF3] font-open-sans text-[15px] sm:text-[16px] font-bold mb-2 whitespace-nowrap">Free Case Review</span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-4 border-[#FFFBF3] group-hover:bg-[#FFFBF3] transition-colors">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8V24M16 24L8 16M16 24L24 16" stroke="#FFFBF3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubOne;