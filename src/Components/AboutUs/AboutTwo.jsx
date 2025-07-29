import React, {useEffect} from 'react'
import Frame from "../../assets/Frame 263.png"
import arrow from "../../assets/smallarrow.png"
import Fram from "../../assets/box.png"
import Frames from "../../assets/Frame 172 (1).png"
import { useNavigate } from 'react-router-dom';

function AboutTwo() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <div className="w-full overflow-hidden">
            {/* Desktop, Laptop and Tablet Version */}
            <div className="hidden md:block px-4 lg:px-8 xl:px-16 mb-10">
                <div className='mt-8 lg:mt-10'>
                    {/* Main Title Section */}
                    <div className="text-center max-w-6xl mx-auto mb-8 lg:mb-16">
                        <h1 className="text-[#023437] font-['Playfair_Display'] text-[48px] md:text-[72px] lg:text-[96px] xl:text-[120px] font-extrabold leading-[1.1] md:leading-[1.15] lg:leading-[1.15] xl:leading-[137.6px] px-4">
                            Why Choose Connect2Lawyer?
                        </h1>
                        <p className='text-[#C09F53] font-open-sans text-lg md:text-xl lg:text-2xl font-bold leading-normal max-w-2xl mx-auto mt-6 md:mt-8 lg:mt-16 px-4'>
                            Navigating the legal system can be complex, but with us, finding the right legal representation is simple, efficient, and stress-free.
                        </p>
                    </div>

<div className="relative w-full max-w-7xl mx-auto mb-8 lg:mb-16">
  {/* Background Image Container */}
  <div className="w-full flex justify-center">
    <img src={Frame} className="w-full max-w-6xl h-auto object-contain" alt="Background frame" />
  </div>
  {/* Feature Cards Overlay - 2x2 grid with alternating colors */}
  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 md:gap-8 lg:gap-12 xl:gap-16 p-4 md:p-8 lg:p-12 xl:p-16">
    {/* Expert Network - Top Left */}
    <div className="flex flex-col justify-start pt-2 md:pt-4 lg:pt-6 bg-[#023437] text-[#FFFBF3] rounded-2xl p-6 md:p-8 ">
      <h3 className="font-['Playfair_Display'] text-[28px] md:text-[40px] lg:text-[52px] xl:text-[64px] font-[800] leading-[1.1] mb-2 md:mb-4">
        Expert Network
      </h3>
      <p className="font-['Open Sans'] text-sm md:text-base lg:text-lg xl:text-[20px] font-[600] leading-relaxed max-w-md">
        Our platform features a vast network of experienced lawyers, each vetted for their expertise and commitment to client success.
      </p>
    </div>
    {/* Transparent Insights - Top Right */}
    <div className="flex flex-col justify-start pt-2 md:pt-4 lg:pt-6 bg-[#EFE4CB] text-[#023437] rounded-2xl p-6 md:p-8 ">
      <h3 className="font-['Playfair_Display'] text-[28px] md:text-[40px] lg:text-[52px] xl:text-[64px] font-[800] leading-[1.1] mb-2 md:mb-4">
        Transparent Insights
      </h3>
      <p className="font-['Open Sans'] text-sm md:text-base lg:text-lg xl:text-[20px] font-[600] leading-relaxed max-w-md">
        Access detailed lawyer profiles, client reviews, and success stories to make informed decisions.
      </p>
    </div>
    {/* Seamless Connection - Bottom Left */}
    <div className="flex flex-col justify-start pt-2 md:pt-4 lg:pt-6 bg-[#EFE4CB] text-[#023437] rounded-2xl p-6 md:p-8 ">
      <h3 className="font-['Playfair_Display'] text-[28px] md:text-[40px] lg:text-[52px] xl:text-[64px] font-[800] leading-[1.1] mb-2 md:mb-4">
        Seamless Connection
      </h3>
      <p className="font-['Open Sans'] text-sm md:text-base lg:text-lg xl:text-[20px] font-[600] leading-relaxed max-w-md">
        Our user-friendly interface allows for direct communication with your chosen legal professional, streamlining the initiation process.
      </p>
    </div>
    {/* Nationwide Reach - Bottom Right */}
    <div className="flex flex-col justify-start pt-2 md:pt-4 lg:pt-6 bg-[#023437] text-[#FFFBF3] rounded-2xl p-6 md:p-8 ">
      <h3 className="font-['Playfair_Display'] text-[28px] md:text-[40px] lg:text-[52px] xl:text-[64px] font-[800] leading-[1.1] mb-2 md:mb-4">
        Nationwide Reach
      </h3>
      <p className="font-['Open Sans'] text-sm md:text-base lg:text-lg xl:text-[20px] font-[600] leading-relaxed max-w-md">
        Serving clients across all major cities and regions in Australia, ensuring local expertise is always within reach.
      </p>
    </div>
  </div>
</div>


                    {/* Start Your Case Section */}
                    <div className="w-full max-w-6xl mx-auto border border-[rgba(2,52,55,0.35)] p-6 md:p-8 lg:p-12 xl:p-16 mb-8 lg:mb-16 rounded-lg ">
                        <h1 className="text-[#023437] font-['Playfair_Display'] text-[48px] md:text-[72px] lg:text-[96px] xl:text-[128px] font-extrabold leading-[1.1] md:leading-[1.1] lg:leading-[1.1] xl:leading-[140px] mb-4 md:mb-6 lg:mb-8">
                            Start Your Case Today
                        </h1>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
                            <p className="text-[#023437] font-sans text-base md:text-lg lg:text-xl font-semibold leading-normal max-w-3xl">
                                Finding the right lawyer has never been easier.
                                Take a moment to explore our website today and connect with a dedicated attorney who will protect your rights.
                            </p>
                            <button 
                                className="inline-flex justify-center items-center px-6 md:px-8 py-3 rounded-[60px] border border-[rgba(2,52,55,0.61)] text-[#023437] font-sans text-base md:text-lg font-medium whitespace-nowrap hover:bg-[rgba(2,52,55,0.05)] transition-colors duration-200" 
                                onClick={() => navigate('/ContactUs')}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="relative bg-[#023437] flex items-center justify-between rounded-[60px] h-[80px] md:h-[90px] lg:h-[100px] w-full max-w-6xl mx-auto cursor-pointer hover:bg-[#034448] transition-colors duration-200 px-6 md:px-8 lg:px-16" onClick={() => navigate('/ContactUs')}>
                        <p className="text-[#EFE4CB] font-sans text-[20px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold leading-tight flex-1">
                            Fill out the free case review form now!
                        </p>
                        <img src={arrow} alt="Arrow" className="h-[60px] md:h-[80px] lg:h-[100px] w-[60px] md:w-[80px] lg:w-[100px] flex-shrink-0" />
                    </div>                                   
                </div>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden px-4 mb-10">
                <div className='mt-8'>
                    <h1 className="text-[#023437] text-center font-['Playfair_Display'] text-[32px] sm:text-[36px] font-extrabold leading-[1.1] sm:leading-[40px]">
                        Why Choose Connect2Lawyer?
                    </h1>
                    <p className='text-[#C09F53] text-center font-open-sans text-base sm:text-lg font-bold leading-normal mt-6 px-2'>
                        Navigating the legal system can be complex, but with us, finding the right legal representation is simple, efficient, and stress-free.
                    </p>

                    <div className="mt-8 space-y-6 sm:space-y-8">
  {/* Expert Network - 1st tile */}
  <div className="relative bg-[#023437] text-[#FFFBF3] overflow-hidden w-full max-w-[360px] h-[300px] mx-auto flex flex-col justify-center items-center text-center">
    <h3 className="font-['Playfair_Display'] text-[34px] sm:text-[36px] font-[800] leading-[1.15] mb-3 max-w-[260px] text-center">
      Expert Network
    </h3>
    <p className="font-['Open_Sans'] text-base sm:text-lg font-[600] leading-relaxed max-w-[240px] text-center">
      Our platform features a vast network of experienced lawyers, each vetted for their expertise and commitment.
    </p>
  </div>

  {/* Transparent Insights - 2nd tile */}
  <div className="relative bg-[#EFE4CB] text-[#023437] overflow-hidden w-full max-w-[360px] h-[300px] mx-auto flex flex-col justify-center items-center text-center">
    <h3 className="font-['Playfair_Display'] text-[34px] sm:text-[36px] font-[800] leading-[1.15] mb-3 max-w-[260px] text-center">
      Transparent Insights
    </h3>
    <p className="font-['Open_Sans'] text-base sm:text-lg font-[600] leading-relaxed max-w-[240px] text-center">
      Access detailed lawyer profiles, client reviews, and success stories to make informed decisions.
    </p>
  </div>

  {/* Seamless Connection - 3rd tile */}
  <div className="relative bg-[#EFE4CB] text-[#023437] overflow-hidden w-full max-w-[360px] h-[300px] mx-auto flex flex-col justify-center items-center text-center">
    <h3 className="font-['Playfair_Display'] text-[34px] sm:text-[36px] font-[800] leading-[1.15] mb-3 max-w-[260px] text-center">
      Seamless Connection
    </h3>
    <p className="font-['Open_Sans'] text-base sm:text-lg font-[600] leading-relaxed max-w-[240px] text-center">
      Our user-friendly interface allows for direct communication with your chosen legal professional.
    </p>
  </div>

  {/* Nationwide Reach - 4th tile */}
  <div className="relative bg-[#023437] text-[#FFFBF3] overflow-hidden w-full max-w-[360px] h-[300px] mx-auto flex flex-col justify-center items-center text-center">
    <h3 className="font-['Playfair_Display'] text-[34px] sm:text-[36px] font-[800] leading-[1.15] mb-3 max-w-[260px] text-center">
      Nationwide Reach
    </h3>
    <p className="font-['Open_Sans'] text-base sm:text-lg font-[600] leading-relaxed max-w-[240px] text-center">
      Serving clients across all major cities and regions in Australia, ensuring local expertise is always within reach.
    </p>
  </div>
</div>

                </div>

                <div className="w-full border border-[rgba(2,52,55,0.35)] p-4 sm:p-6 my-6 sm:my-8 rounded-lg">
                    <h1 className="text-[#023437] font-['Playfair_Display'] text-[40px] sm:text-[48px] font-extrabold leading-[1.1] sm:leading-[50px] mb-4">
                        Start Your Case Today
                    </h1>
                    <div className="space-y-4">
                        <p className="text-[#023437] font-sans text-sm sm:text-base font-semibold leading-normal">
                            Finding the right lawyer has never been easier.
                            Take a moment to explore our website today and connect with a dedicated attorney who will protect your rights.
                        </p>
                        <button 
                            className="w-full text-center px-6 py-3 rounded-[60px] border border-[rgba(2,52,55,0.61)] text-[#023437] font-sans text-base sm:text-lg font-medium hover:bg-[rgba(2,52,55,0.05)] transition-colors duration-200" 
                            onClick={() => navigate('/ContactUs')}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="relative bg-[#023437] flex items-center justify-between rounded-[60px] h-[50px] sm:h-[60px] px-4 sm:px-5 cursor-pointer hover:bg-[#034448] transition-colors duration-200" onClick={() => navigate('/ContactUs')}>
                    <p className="text-[#EFE4CB] font-sans text-[13px] sm:text-[15px] font-bold leading-tight flex-1 pr-2">
                        Fill out the free case review form now!
                    </p>
                    <img
                        src={arrow}
                        className="h-[40px] sm:h-[50px] w-[40px] sm:w-[50px] flex-shrink-0"
                        alt="Arrow icon"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutTwo