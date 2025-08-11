import React from "react";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageSquare,
  TikTok,
} from "lucide-react";

import map from "../../assets/contactUsHeroMap.png";
import mapMob from "../../assets/mapMob.png";
import fb from "../../assets/fbiconn.png";
import linkedin from "../../assets/linkiconn.png";
import yt from "../../assets/yticonn.png";
import insta from "../../assets/instaiconn.png";
import x from "../../assets/xiconn.png";
import tiktok from "../../assets/TikTok.png";
import mail from "../../assets/mailiconn.png";
import clock from "../../assets/clockiconn.png";





const ContactUsHero = () => {
  const socialLinks = [
    {
      icon: linkedin,
      href: "https://www.linkedin.com/company/connect2lawyer/",
    },
    {
      icon: fb,
      href: "https://www.facebook.com/profile.php?id=61570446132760",
    },
    { icon: yt, href: "https://www.youtube.com/@connect2lawyer" },
    {
      icon: insta,
      href: "https://www.instagram.com/connect2lawyer/",
    },
    {
      icon: x,
      href: "https://x.com/Connect2Lawyer",
    },
    {
      icon: tiktok,
      href: "https://www.tiktok.com/@connect2lawyer",
    },
  ];

  return (
    <section className="relative w-full bg-[#ffffff] overflow-hidden pt-0">
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:flex relative w-full h-[80.8vh] md:h-[60.8vh] lg:h-[70.8vh] xl:h-[80.8vh] 2xl:h-[92.8vh]">
        {/* Info Section - Left Side */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-start items-start w-[48%] max-w-[694px] 
                        pl-[3%] pr-[2%] 
                        lg:pl-[44px] lg:pr-8
                        md:py-8
                        lg:py-12
                        xl:py-16"
             style={{ paddingTop: '6%' }}>
          {/* Main Heading - Smaller for tablets */}
          <h1 className="font-playfair font-bold leading-[0.95] mb-4 md:mb-5 lg:mb-6 xl:mb-8 text-[#023437] tracking-[-0.02em]
                         md:text-4xl
                         lg:text-6xl
                         xl:text-7xl
                         2xl:text-[128px]">
            We're here <br />
            <span className="text-[#C09F53]">to help</span>
          </h1>

          {/* Contact Information - Significantly smaller for tablets */}
          <div >
            {/* Phone */}
            <div className="flex items-center gap-2 md:gap-2 lg:gap-3 xl:gap-4 group">
              <div className="bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0
                              md:w-7 md:h-7
                              lg:w-9 lg:h-9
                              xl:w-10 xl:h-10
                              mb-2">
                <Phone className="text-white md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
              </div>
              <span className="font-semibold text-[#023437] 
                               md:text-base
                               lg:text-xl
                               xl:text-2xl
                               2xl:text-[28px]
                               underline decoration-[#023437] decoration-1 underline-offset-4">
                +61 470 695 167
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 md:gap-2 lg:gap-3 xl:gap-4 group">
              <div className="bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0
                              md:w-7 md:h-7
                              lg:w-9 lg:h-9
                              xl:w-10 xl:h-10">
                <img src={mail} alt="" className="md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
              </div>
              <span className="font-semibold text-[#023437] break-words
                               md:text-base
                               lg:text-xl
                               xl:text-2xl
                               2xl:text-[28px]
                               underline decoration-[#023437] decoration-1 underline-offset-4">
                teamup@connect2lawyer.com.au
              </span>
            </div>
          </div>

          <div className="h-[1px] xl:h-[2px] w-[200px] md:w-[220px] lg:w-[250px] xl:w-[280px] bg-[#023437] opacity-30 mt-6 md:mt-6 lg:mt-8 xl:mt-12"></div>

          {/* Social Media Icons - Smaller for tablets */}
          <div className="flex gap-2 md:gap-2 lg:gap-3 mt-6 md:mt-6 lg:mt-8 xl:mt-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-[#023437] hover:bg-[#023437] rounded-full 
                           flex items-center justify-center transition-all duration-300 shadow-lg 
                           hover:shadow-xl transform hover:scale-105 active:scale-95 group
                           md:w-9 md:h-9
                           lg:w-10 lg:h-10
                           xl:w-11 xl:h-11
                           2xl:w-12 2xl:h-12"
                aria-label={`Visit our social media page`}
              >
                <img 
                  src={social.icon} 
                  alt=""
                  className="md:w-4 md:h-4
                             lg:w-5 lg:h-5
                             xl:w-6 xl:h-6" 
                />
              </a>
            ))}
          </div>

          {/* Business Hours - Smaller for tablets */}
          <div className="flex items-center gap-2 md:gap-2 lg:gap-2 xl:gap-3 mt-6 md:mt-6 lg:mt-8 xl:mt-12">
            <div className="bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden
                            md:w-12 md:h-12
                            lg:w-14 lg:h-14
                            xl:w-16 xl:h-16
                            2xl:w-[70px] 2xl:h-[70px]">
              {/* Ring effect for clock - same color as bg */}
              <div className="absolute inset-[2px] md:inset-[2px] lg:inset-[3px] xl:inset-[4px] bg-[#fff] rounded-full"></div>
              <img src={clock} alt="" className="relative z-10 
                                md:w-6 md:h-6
                                lg:w-7 lg:h-7
                                xl:w-8 xl:h-8
                                2xl:w-9 2xl:h-9" />
            </div>
            <div>
              <div className="font-medium text-[#023437]
                              md:text-xl
                              lg:text-2xl
                              xl:text-3xl
                              2xl:text-[42px]">
                9:00-19:00
              </div>
              <div className="text-[#023437] font-medium
                              md:text-xs
                              lg:text-sm
                              xl:text-base
                              2xl:text-lg">
                Mon - Fri
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Right Side */}
        <div className="absolute right-0 top-0 h-full flex items-center justify-end 
                        w-[56%] max-w-[806px] 
                        pr-[3%]
                        lg:pr-[50px]">
          <div className="relative w-full max-h-[88%] aspect-[806/738]">
            <img
              src={map}
              alt="Australia Map showing Point Cook, Melbourne"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-3 xs:px-6 py-12">
        <div className="flex flex-col">
          {/* Mobile Heading and Map Container - Overlapping */}
          <div className="relative w-full">
            {/* Mobile Heading - Left Aligned */}
            <div className="relative z-10">
              <h1 className="font-playfair font-bold text-5xl xs:text-6xl leading-[0.95] mb-6 text-[#023437] text-left">
                We're here <br />
                <span className="text-[#C09F53]">to help</span>
              </h1>

              {/* Business Hours - Left Aligned and Sized Down */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-[2px] bg-[#fff] rounded-full"></div>
                  <img src={clock} alt="" className="w-4 h-4 relative z-10 " />
                </div>
                <div>
                  <div className="text-base font-bold text-[#023437]">
                    9:00-19:00
                  </div>
                  <div className="text-sm text-[#023437] font-medium">
                    Mon - Fri
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Map - Positioned to overlap */}
            <div className="w-full max-w-md ml-auto -mt-14 relative">
              <img
                src={mapMob}
                alt="Australia Map showing Point Cook, Melbourne"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Mobile Contact Info */}
          <div className="w-full space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 xs:w-10 xs:h-10 bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
              </div>
              <span className="text-base xs:text-lg font-semibold text-[#023437] 
                               underline decoration-[#023437] decoration-1 underline-offset-4">
                +61 470 695 167
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 xs:w-10 xs:h-10 bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0">
                <img src={mail} alt="" className="w-4 h-4 xs:w-5 xs:h-5" />
              </div>
              <span className="text-base xs:text-lg font-semibold text-[#023437] break-words
                               underline decoration-[#023437] decoration-1 underline-offset-4">
                teamup@connect2lawyer.com.au
              </span>
            </div>
          </div>

          {/* Line Separator - Centered and matching icon container width */}
          <div className="flex justify-center px-2">
            <div className="h-[1px] w-full bg-[#023437] opacity-30 mt-8 mb-8"></div>
          </div>

          {/* Mobile Social Icons - Spanning full width */}
          <div className="flex justify-between items-center w-full px-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-[#023437] hover:bg-[#023437] rounded-full 
                           flex items-center justify-center transition-all duration-300 shadow-lg 
                           hover:shadow-xl transform hover:scale-105 group
                           w-10 h-10 xs:w-12 xs:h-12 flex-shrink-0"
                aria-label={`Visit our social media page`}
              >
                <img 
                  src={social.icon} 
                  alt=""
                  className="w-5 h-5 xs:w-6 xs:h-6" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;