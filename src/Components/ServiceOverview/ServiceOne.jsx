import React from 'react';
import hands from "../../assets/HandsImg1x.png";
import handss from "../../assets/handsmobbb.png";
import Frame from "../../assets/heroframe.png";
import Framee from "../../assets/mobbbheroo.png";
import Frame1 from "../../assets/heroframe.png";
import { Parallax } from 'react-scroll-parallax';

function ServiceOne() {
    return (
        <>
            {/* Desktop Version */}
            <div className="desktop-service-one hidden md:block overflow-hidden">
                <div className="relative w-full bg-[#023437] overflow-hidden">
                    {/* Main content container */}
                    <div className="w-full mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-10">
                        {/* Text section */}
                        <div className="w-full mb-12 pl-4 md:pl-8 lg:pl-12 xl:pl-16 2xl:pl-20 ">
                            <h1 className="font-['Playfair_Display'] text-[#ffffff] text-[56px] md:text-[80px] lg:text-[102px] xl:text-[124px] 2xl:text-[148px] font-[800] leading-none  w-full h-auto mt-52 ">
                                Trusted Legal <br></br><span className='text-[#C09F53]'>Support </span>
                            </h1>
                            <h2 className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-open-sans font-bold not-italic leading-tight text-[#C09F53] tracking-wide mt-8 mb-1">
                                Standing beside you because
                            </h2>
                            <p className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-open-sans font-bold not-italic leading-tight text-[#C09F53] tracking-wide mt-1">
                                 your fight is our commitment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-auto flex-shrink-0 mb-[10%] overflow-visible bg-[#023437]">
                    {/* Hands image */}
                    <div className="w-full overflow-visible pb-8 md:pb-12 lg:pb-16 xl:pb-20 2xl:pb-24">
                        <Parallax speed={-20}>
                            <img
                                src={hands}
                                alt="hands"
                                className="relative z-20 h-auto w-full min-w-[100%] object-cover"
                                style={{ marginBottom: '-2px' }}
                            />
                        </Parallax>
                    </div>
                    {/* Frame image */}
                    <div className="w-full h-auto bottom-0 mt-[-20%] md:mt-[-25%] overflow-hidden">
                        <div className="w-full flex justify-center">
                            <img
                                src={Frame}
                                alt="frame"
                                className="h-auto w-full object-cover max-w-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
          <div className="mobile-service-one block md:hidden overflow-hidden bg-[#023437]">
    <div className="relative w-full bg-[#023437] overflow-hidden mt-12 sm:mt-12 px-4 sm:px-6">
        {/* Text section */}
        <div className="w-full">
            <h1 className="font-['Playfair_Display'] text-[#ffffff] text-[32px] sm:text-[40px] md:text-[48px] font-[800] leading-tight mb-4 border-gray-300 pb-4 break-words">
                Trusted Legal <br></br><span className='text-[#C09F53]'>Support </span>
            </h1>
            <h2 className="text-[14px] sm:text-[12px] md:text-[14px] font-open-sans font-bold not-italic leading-tight text-[#C09F53] tracking-wide mb-1">
                Standing beside you  because 
            </h2>
            <p className="text-[14px] sm:text-[12px] md:text-[14px] font-open-sans font-bold not-italic leading-tight text-[#C09F53] tracking-wide mt-1">
               your fight is our commitment.
            </p>
        </div>
    </div>
    <div className="relative w-full bg-[#023437] overflow-hidden ">
        {/* Images section */}
        <div className="w-full overflow-visible">
            <Parallax speed={-10}>
                <img
                    src={handss}
                    alt="hands"
                    className="relative z-20 h-auto w-full object-contain"
                    style={{ marginTop: '40px', maxHeight: '340px' }}
                />
            </Parallax>
        </div>
        <div className="w-full h-auto bottom-0 mt-[-15%] sm:mt-[-20%] overflow-hidden">
            <div className="w-full flex justify-center">
                <img
                    src={Framee}
                    alt="frame"
                    className="h-auto w-full min-w-[100%] sm:min-w-[100%] object-cover max-w-none"
                />
            </div>
        </div>
    </div>
</div>
        </>
    );
}

export default ServiceOne;