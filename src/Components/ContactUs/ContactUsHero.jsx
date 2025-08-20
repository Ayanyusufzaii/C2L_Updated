import React from "react";
import {
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import dialer from "../../assets/phoneiconn.png";
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
    { icon: linkedin, href: "https://www.linkedin.com/company/connect2lawyer/" },
    { icon: fb, href: "https://www.facebook.com/profile.php?id=61570446132760" },
    { icon: yt, href: "https://www.youtube.com/@connect2lawyer" },
    { icon: insta, href: "https://www.instagram.com/connect2lawyer/" },
    { icon: x, href: "https://x.com/Connect2Lawyer" },
    { icon: tiktok, href: "https://www.tiktok.com/@connect2lawyer" },
  ];

  const handleCall = () => {
    window.location.href = "tel:+61470695167";
  };

  const handleEmail = () => {
    window.location.href = "mailto:teamup@connect2lawyer.com.au";
  };

  return (
    <section className="relative w-full bg-white overflow-hidden pt-0">
      {/* Desktop/Tablet */}
      <div className="hidden md:flex relative w-full min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh] 2xl:min-h-[92vh]">
        {/* Info Section */}
        <div
          className="relative  h-full flex flex-col justify-start items-start w-[48%] max-w-[694px] px-[3%] lg:px-11 md:py-8 lg:py-12 xl:py-16"
          style={{ paddingTop: "6%" }}
        >
          <h1 className="font-playfair font-bold leading-[0.95] mb-4 md:mb-5 lg:mb-6 xl:mb-8 text-[#023437] tracking-[-0.02em]
                         md:text-[68px] lg:text-6xl xl:text-7xl 2xl:text-[128px]">
            We're here <br />
            <span className="text-[#C09F53]">to help</span>
          </h1>

          <div>
            {/* Phone */}
            <div className="flex items-center -mb-4 md:-mb-6 lg:-mb-5 xl:-mb-2 md:-ml-4 font-opensans">
              <img 
                src={dialer} 
                alt="" 
                className="cursor-pointer md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-30 xl:h-30 "
                onClick={handleCall}
              />
              <span 
                className="font-semibold text-[#023437] underline decoration-[#023437] underline-offset-4 cursor-pointer
                           md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] -mt-5"
                onClick={handleCall}
              >
                +61 470 695 167
              </span>
            </div>

            {/* Email */}
          <div className="flex items-center md:-ml-4 font-opensans">
              <img 
                src={mail} 
                alt="" 
                className="cursor-pointer md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20"
                onClick={handleEmail}
              />
              <span 
                className="font-semibold text-[#023437] underline decoration-[#023437] underline-offset-4 cursor-pointer
                           md:text-base lg:text-xl xl:text-2xl 2xl:text-[28px] -mt-5"
                onClick={handleEmail}
              >
                teamup@connect2lawyer.com.au
              </span>
            </div>
          <div className="h-[1px] xl:h-[2px] w-full bg-[#023437] opacity-30  "></div>
           </div>
          {/* Divider */}


          {/* Socials */}
          <div className="flex gap-2 lg:gap-3 mt-6 lg:mt-8 xl:mt-12">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                className="border-[1px] border-[#023437]  rounded-full flex items-center justify-center
                           transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105
                           md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12">
                <img src={social.icon} alt="" className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
              </a>
            ))}
          </div>

          {/* Hours */}
          <div className="flex items-center gap-2 lg:gap-2 xl:gap-3 mt-6 lg:mt-8 xl:mt-12">
            <div className="bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden
                            md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-[70px] 2xl:h-[70px]">
              <div className="absolute inset-[1px] bg-white rounded-full"></div>
              <img src={clock} alt="" className="relative z-10 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
            </div>
            <div>
              <div className="font-medium text-[#023437] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[42px] font-opensans">9:00-19:00</div>
              <div className="text-[#023437] font-medium md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-opensans">Mon - Fri</div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="absolute right-0 top-0 h-full flex items-center justify-end w-[56%] max-w-[806px] pr-[3%] lg:pr-[50px]">
          <div className="relative w-full max-h-[88%] aspect-[806/738]">
            <img src={map} alt="Australia Map" className="w-full h-full object-contain" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden px-3 xs:px-6 py-12">
        <div className="flex flex-col">
          {/* Heading + Map */}
          <div className="relative w-full">
            <div className="relative z-10">
              <h1 className="font-playfair font-bold text-5xl xs:text-6xl leading-[0.95] mb-6 text-[#023437]">
                We're here <br />
                <span className="text-[#C09F53]">to help</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-[1px] bg-white rounded-full"></div>
                  <img src={clock} alt="" className="w-4 h-4 relative z-10" />
                </div>
                <div>
                  <div className="text-base font-bold text-[#023437] font-opensans">9:00-19:00</div>
                  <div className="text-sm text-[#023437] font-medium font-opensans">Mon - Fri</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md ml-auto -mt-14 relative">
              <img src={mapMob} alt="Australia Map" className="w-full h-auto" />
            </div>
          </div>

          {/* Contact */}
          <div className="w-full space-y-6 font-opensans">
            <div className="flex items-center -mb-12 -ml-4">
              <img 
                src={dialer} 
                alt="" 
                className="cursor-pointer w-20 h-20 xs:w-20 xs:h-20"
                onClick={handleCall}
              />
              <span 
                className="text-base xs:text-lg font-semibold text-[#023437] underline decoration-[#023437] underline-offset-4 cursor-pointer -mt-5 -ml-2"
                onClick={handleCall}
              >
                +61 470 695 167
              </span>
            </div>

            <div className="flex items-center -ml-4">
              <img 
                src={mail} 
                alt="" 
                className="cursor-pointer w-20 h-20 xs:w-20 xs:h-20"
                onClick={handleEmail}
              />
              <span 
                className="text-base xs:text-lg font-semibold text-[#023437] underline decoration-[#023437] underline-offset-4 cursor-pointer -mt-5 -ml-2"
                onClick={handleEmail}
              >
                teamup@connect2lawyer.com.au
              </span>
            </div>

            {/* <div className="flex items-center"> */}
              {/* When you have the email icon image, replace this div with: 
                  <img src={emailIcon} alt="" className="cursor-pointer w-8 h-8 xs:w-10 xs:h-10" onClick={handleEmail} />
              */}
              {/* <div 
                className="w-8 h-8 xs:w-10 xs:h-10 bg-[#023437] rounded-full flex items-center justify-center cursor-pointer"
                onClick={handleEmail}
              >
                <img src={mail} alt="" className="w-4 h-4 xs:w-5 xs:h-5" />
              </div>
              <span 
                className="text-base xs:text-lg font-semibold text-[#023437] underline decoration-[#023437] underline-offset-4 break-words cursor-pointer"
                onClick={handleEmail}
              >
                teamup@connect2lawyer.com.au
              </span>
            </div> */}
          </div>

          {/* Divider */}
          <div className="flex justify-center px-2">
            <div className="h-[1px] w-full bg-[#023437] opacity-30 mb-8"></div>
          </div>

          {/* Socials */}
          <div className="flex justify-between items-center w-full px-2">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                className="border-[1px] border-[#023437] hover:bg-[#023437] rounded-full flex items-center justify-center
                           transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105
                           w-10 h-10 xs:w-12 xs:h-12">
                <img src={social.icon} alt="" className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;