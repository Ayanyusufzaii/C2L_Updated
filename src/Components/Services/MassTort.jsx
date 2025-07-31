import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Group from "../../assets/Group 64.png";
// import Frame from "../../assets/Frame 19.png";
import Frame116 from "../../assets/MassImg.png";
// import Searchbar from "../../assets/Search bar.png";
import Frames from "../../assets/Frame 171.png";
import Frame169 from "../../assets/MassImg.png";
import Frame60 from "../../assets/Frame 160.png";
import Frame175 from "../../assets/Frame 175.png";
import HomeSeven from '../Home/HomeSeven';
import Footer from '../Footer';
import NavBar from '../NavBar';
import FaqMassTort from '../FAQMassTort';

function MassTort() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <div className="relative">
            <div className="hidden md:block bg-[#023437]">
                <div className="fixed top-0 left-0 w-full bg-transparent z-[1000]">
                    <NavBar />
                </div>
                <img src={Group} className="w-full p-0 block bg-[#023437]" alt="Background" />
                <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 bg-[#023437] py-12">
                    <img
                        src={Frame116}
                        className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[420px] h-auto object-cover flex-shrink-0 mb-8 md:mb-0"
                        alt="Content"
                    />
                    <div className="w-full md:w-auto bg-[#023437] p-4 sm:p-6 md:p-8 shadow-md border border-white md:ml-4 lg:ml-8 xl:ml-12" style={{ borderRadius: 0 }}>
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#ffffff] mb-4 text-left font-['Playfair_Display']"
                        >
                            Mesothelioma Lawsuit
                        </h2>
                        <p
                            className="text-base sm:text-lg md:text-xl text-[#ffffff] mb-6 text-left font-['Open_Sans']"
                        >
                            Seeks justice for individuals diagnosed with mesothelioma due to asbestos exposure, often decades ago.
                        </p>
                        <button
                            className="inline-flex h-[48px] px-[20px] py-[10px] justify-center items-center flex-shrink-0 rounded-[60px] bg-[#C09F53] text-white text-base font-semibold self-start"
                            onClick={() => navigate('/Sub-Service')}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
                <div>
                    <FaqMassTort />
                    <HomeSeven />
                    <Footer />
                </div>
            </div>
.  
            {/* Mobile View (fixed) */}
            <div className="md:hidden block overflow-hidden">
                <NavBar />
                <main className="pt-16 pb-0">
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
        Mesothelioma Lawsuit
      </h3>
      <p className="text-sm text-white mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
        Seeks justice for individuals diagnosed with mesothelioma due to asbestos exposure, often decades ago.
      </p>
      <button
        className="bg-[#C09F53] text-white text-sm font-bold py-2 px-5 rounded-full shadow-md hover:bg-[#b18e3e] transition-colors duration-200 mt-2"
        onClick={() => navigate('/Sub-Service')}
      >
        Learn More
      </button>
    </div>
  </div>
</div>
                </main>

                {/* Footer Sections */}
                <div>
                    <FaqMassTort />
                    <HomeSeven />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MassTort;
