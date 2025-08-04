import React, { useState } from "react";
import home_main from "../../assets/homeMain.png";
import aboutMobile from "../../assets/aboutUsHero.png"; // You'll need a mobile-optimized image
import Frame from "../../assets/Frame 19.png";
import Searchbar from "../../assets/Search bar.png";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import HomeGroup from "../../assets/HomeGroup.png"; // Import your overlay image here
function AboutOne() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/Service" },
    { name: "Sub Services", path: "/SubService" },
    { name: "About Us", path: "/About" },
    { name: "Contact", path: "/ContactUs" },
  ];

  return (
    <div>
      {/* Desktop and Tablet View */}
      <div className="hidden md:block">
        <div className="min-h-screen object-cover relative overflow-hidden">
         {/* Hero Text Section */}
          <div className="absolute z-10 left-[calc(50%-clamp(324px,97vw-(100vw-800px)*0.15,1600px)/2)] bottom-[clamp(500px,68.3vw,1600px)]">
  <div className="text-left w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[697px] xl:max-w-[1300px] 2xl:max-w-[1100px]">
    <p className="text-[#C09F53] font-open-sans text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-bold normal-case mb-[5px]">
      Who We Are
    </p>
    <h1 className="text-[#ffffff] font-['Playfair_Display'] text-[36px] md:text-[52px] lg:text-[72px] xl:text-[128px] 2xl:text-[120px] font-extrabold leading-[1.1] md:leading-[1.1] lg:leading-[72px] xl:leading-[130px] 2xl:leading-[120px] text-left">
      We connect you with the best legal minds in Australia.
    </h1>
  </div>
</div>
            {/* Commitment Section */}  
            <div>
          <img
            src={HomeGroup}
            alt="Overlay Decorative"
            className="absolute left-1/2 -translate-x-1/2 bottom-16 md:bottom-16 lg:bottom-16 4k:bottom-[16] h-auto object-contain opacity-95 z-20"
            style={{
              pointerEvents: "none",
              width: "clamp(324px, 97vw - (100vw - 800px) * 0.15, 1600px)",
            }}
          />
    </div>

          {/* Background Image */}
          <img
            src={home_main}
            alt="About Us"
            className="w-full min-h-screen object-cover"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden relative">
        <div className="relative min-h-screen overflow-hidden">
          {/* Hero Text Section - Mobile */}
          <div className="absolute z-10 top-[20%] sm:top-[18%] left-[5%] right-[5%]">
            <p className="text-[#FFFBF3] font-open-sans text-[14px] sm:text-[16px] font-bold normal-case mb-2">
              Who We Are
            </p>
            <h1 className="text-[#ffffff] font-['Playfair_Display'] text-[28px] sm:text-[32px] font-extrabold leading-[1.2] sm:leading-[1.1]">
              We connect you with the best legal minds in Australia.
            </h1>
          </div>


          {/* Background Image - Mobile */}
          <img
            src={aboutMobile}
            alt="About Us"
            className="w-full h-full object-cover"
          />

          {/* Navigation Component */}
          <div className="absolute top-0 left-0 w-full z-[1000]">
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
