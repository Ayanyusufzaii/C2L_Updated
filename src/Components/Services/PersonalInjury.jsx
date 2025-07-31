import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Group from "../../assets/PersonalInjuryy.png";
// import Frame from "../../assets/Frame 19.png";
import Frame116 from "../../assets/PersonalinjIMG.png";
// import Searchbar from "../../assets/Search bar.png";
import Frames from "../../assets/Frame 171.png";
import Frame169 from "../../assets/PersonalinjIMG.png";
import Frame60 from "../../assets/Frame 160.png";
import Frame175 from "../../assets/Frame 175.png";
import HomeSeven from '../Home/HomeSeven';
import Footer from '../Footer';
import NavBar from '../NavBar';
import FaqPersonal from '../FAQPersonalInjury';

function PersonalInjury() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []); 

    return (
        <div className="relative">
            <div className="hidden md:block overflow-hidden">
                <div className="fixed top-0 left-0 w-full bg-transparent z-[1000]">
                    <NavBar />
                </div>

<img src={Group} className="w-full p-0 block bg-[#023437]" alt="Background" />


<div className="relative z-10 w-full flex flex-col md:flex-row items-end justify-center gap-8 md:gap-10 lg:gap-16 xl:gap-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 bg-[#023437] py-10 md:py-16 box-border overflow-hidden">
  <img
    src={Frame116}
    className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[420px] h-auto object-cover flex-shrink-0 mb-8 md:mb-0"
    alt="Content"
  />
 <div className="flex-1 flex flex-col justify-center items-start bg-[#023437] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 shadow-md border border-white rounded-none min-w-0 max-w-full box-border">
  <h2
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#ffffff] mb-3 text-left leading-tight break-words"
    style={{ fontFamily: 'Playfair Display, serif' }}
  >
    18-Wheeler & Heavy Vehicle Accident  
  </h2>
  <p
    className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-[#ffffff] mb-6 text-left font-normal break-words"
    style={{ fontFamily: 'Open Sans, sans-serif' }}
  >
    Seeks the compensation you deserve for injuries caused by accidents involving large commercial trucks.
  </p>
  <button
    className="inline-flex h-[40px] md:h-[44px] lg:h-[48px] px-5 md:px-6 lg:px-7 py-2 justify-center items-center flex-shrink-0 rounded-full bg-[#C09F53] text-white text-sm md:text-base font-semibold self-start shadow-lg hover:bg-[#b18e3e] transition-colors duration-200"
    onClick={() => navigate('/SubService18Wheeler')}
  >
    Learn More
  </button>
</div>
</div>


                <div>
                    <FaqPersonal/>
                    <HomeSeven />
                    <Footer />
                </div>
            </div>

            {/* Mobile View (fixed) */}
            <div className="md:hidden block overflow-hidden">
                <NavBar />
                <main className="pt-16 pb-8">
                    <div className="relative bg-[#023437] w-full h-[300px] overflow-hidden">
                        <img
                            src={Frame175}
                            className="w-full h-full object-cover"
                            alt="Background"
                        />
                    </div>

                    {/* Content Sections */}
                    <div className="px-4 bg-[#023437] w-full pt-10 pb-5">
                        <img
                            src={Frame169}
                            className="w-full h-auto shadow-md"
                            alt="Content"
                        />
                    </div>

    <div className="bg-[#023437] w-full pt-2">
  <div className="px-4 py-8 flex flex-col items-center">
    <div className="w-full bg-transparent shadow-lg p-5 flex flex-col items-start gap-3 border border-white rounded-none">
      <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
        18-Wheeler & Heavy Vehicle Accident  

      </h3>
      <p className="text-sm text-white mb-2" style={{ fontFamily: 'Open Sans' }}>
       Seeks the compensation you deserve for injuries caused by accidents involving large commercial trucks.
      </p>
      <button
        className="bg-[#C09F53] text-white text-sm font-bold py-2 px-5 rounded-full shadow-md hover:bg-[#b18e3e] transition-colors duration-200 mt-2"
        onClick={() => navigate('/SubService')}
      >
        Learn More
      </button>
    </div>
  </div>
</div>
                </main>

                {/* Footer Sections */}
                <div>
                   <FaqPersonal/>
                    <HomeSeven />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default PersonalInjury;