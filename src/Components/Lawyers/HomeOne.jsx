import React from "react";
import LawyerHero from "../../assets/LawyerHeroDesktop.png";
import LawyerHeroMob from "../../assets/LawyerHeroMobile.png";
import LawyerHeroMob2 from "../../assets/LawyerHeroMob2.png";
import icon1 from "../../assets/lawyericon1.png";
import icon2 from "../../assets/lawyericon2.png";
import icon3 from "../../assets/lawyericon3.png";
import { FaArrowRight } from "react-icons/fa";
import FormMain from "./FormMain"; 
import { useNavigate } from "react-router-dom";
const obj = [
  {
    img: icon1,
    title: "Pre-Qualified Leads",
  },
  {
    img: icon2,
    title: "Network Growth",
  },
  {
    img: icon3,
    title: "Higher Conversions",
  },
];

const HomeOne = () => {
  const navigate = useNavigate();
const handleJoinNetwork = () => {
  navigate("/ContactUs");
};


  return (
    <>
      {/*  Desktop Version (lg and up) */}
      <section className="hidden lg:flex relative w-full md:min-h-[55vh] lg:min-h-[85vh] xl:min-h-[60vh] items-center justify-center overflow-hidden font-playfair">
        {/* Background Image */}
        <img
          src={LawyerHero}
          alt="Lawyer Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
        />
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/10 z-10" />
        
        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-8 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white max-w-7xl mx-auto">
            
            {/* Left Section */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Join the <span className="text-[#C09F53]">Connect2Lawyer</span> Network
              </h1>
              <p className="text-lg md:text-xl font-opensans opacity-90">
                Get Qualified Leads. Grow Your Practice. Make a Bigger Impact.
              </p>

              {/* Features List - Always in Row */}
              <div className="w-full">
                <div className="flex flex-row flex-wrap items-center gap-x-6 gap-y-3 text-sm md:text-base mb-8 max-w-full">
                  {obj.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-5 h-5 md:w-6 md:h-6 shrink-0" 
                        loading="lazy"
                      />
                      <span className="opacity-90">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap">
                <button 
                  onClick={handleJoinNetwork}
                  className="group bg-[#E8C468] text-[#002729] hover:bg-transparent hover:text-[#E8C468] hover:border-[#E8C468] border border-transparent font-medium font-opensans px-8 py-4 rounded-md transition-all duration-300 ease-in-out flex items-center gap-2 text-base md:text-lg shadow-lg hover:shadow-xl"
                  type="button"
                  aria-label="Join the Connect2Lawyer Network"
                >
                  Join the Network Now
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <FormMain isMobile={false} />
          </div>
        </div>
      </section>

      {/* Mobile Version (below md) */}
      <section className="block lg:hidden bg-[#023437] text-white px-6 py-12 font-playfair">
        <div className="space-y-4 text-left">
          <h1 className="text-3xl font-bold leading-snug">
            Join the <span className="text-[#C09F53]">Connect2Lawyer</span> Network
          </h1>
          <p className="text-base font-opensans opacity-90">
            Get Qualified Leads. Grow Your Practice. Make a Bigger Impact.
          </p>
        </div>

        <div className="my-6 -mx-6">
          <img
            src={LawyerHeroMob2}
            alt="Connect2Lawyer Mobile Hero"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <button 
          onClick={handleJoinNetwork}
          className="w-full bg-[#E8C468] text-[#002729] hover:bg-transparent hover:text-[#E8C468] hover:border hover:border-[#E8C468] font-bold font-opensans py-3 rounded flex items-center justify-center gap-2 mb-10 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
          type="button"
          aria-label="Join the Connect2Lawyer Network"
        >
          Join the Network Now <FaArrowRight />
        </button>

        {/* Mobile Contact Form */}
        <FormMain isMobile={true} />
      </section>
    </>
  );
};

export default HomeOne;