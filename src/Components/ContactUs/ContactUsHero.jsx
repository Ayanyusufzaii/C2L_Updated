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
} from "lucide-react";
import map from "../../assets/contactUsHeroMap.png";

const ContactUsHero = () => {
  // Precise calculations based on 1440x840 viewport
  const dimensions = {
    // Base viewport
    baseWidth: 1440,
    baseHeight: 840,

    // Map dimensions
    mapWidth: 806.6,
    mapHeight: 738.17,
    mapPaddingRight: 50,

    // Info section dimensions
    infoWidth: 694,
    infoHeight: 797,
    infoPaddingLeft: 44,

    // Typography
    headingSize: 128,
    textSize: 28,
    smallTextSize: 18,

    // Icons
    iconSize: 40,
    iconInner: 20,
  };

  // Calculate percentages for responsive scaling
  const calc = {
    mapWidthPercent: (dimensions.mapWidth / dimensions.baseWidth) * 100,
    mapHeightPercent: (dimensions.mapHeight / dimensions.baseHeight) * 100,
    infoWidthPercent: (dimensions.infoWidth / dimensions.baseWidth) * 100,
    infoHeightPercent: (dimensions.infoHeight / dimensions.baseHeight) * 100,
    mapPaddingPercent:
      (dimensions.mapPaddingRight / dimensions.baseWidth) * 100,
    infoPaddingPercent:
      (dimensions.infoPaddingLeft / dimensions.baseWidth) * 100,
    headingPercent: (dimensions.headingSize / dimensions.baseWidth) * 100,
    textPercent: (dimensions.textSize / dimensions.baseWidth) * 100,
    iconPercent: (dimensions.iconSize / dimensions.baseWidth) * 100,
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/connect2lawyer/",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61570446132760",
    },
    { icon: Youtube, href: "#" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/connect2lawyer/",
    },
    {
      icon: MessageSquare,
      href: "#",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden pt-20 md:pt-24">
      {/* Desktop Layout */}
      <div
        className="hidden md:block relative w-full"
        style={{ minHeight: "840px", height: "90vh" }}
      >
        {/* Info Section - Left Side */}
        <div
          className="absolute left-0 top-0 flex flex-col justify-center"
          style={{
            width: `${calc.infoWidthPercent}%`,
            maxWidth: `${dimensions.infoWidth}px`,
            height: `${calc.infoHeightPercent}%`,
            maxHeight: `${dimensions.infoHeight}px`,
            paddingLeft: `${calc.infoPaddingPercent}%`,
            minPaddingLeft: "44px",
            paddingRight: "2%",
            paddingTop: "3%",
            paddingBottom: "3%",
          }}
        >
          {/* Main Heading */}
          <h1
            className="font-playfair font-bold leading-tight mb-8 text-[#023437]"
            style={{
              fontSize: `clamp(64px, ${calc.headingPercent}vw, ${dimensions.headingSize}px)`,
              lineHeight: "0.95",
              letterSpacing: "-0.02em",
            }}
          >
            We're here <br />
            <span className="text-[#C09F53]">to help</span>
          </h1>

          {/* Contact Information */}
          <div className="space-y-6 mb-12">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div
                className="bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  width: `max(${calc.iconPercent}vw, ${dimensions.iconSize}px)`,
                  height: `max(${calc.iconPercent}vw, ${dimensions.iconSize}px)`,
                  minWidth: "40px",
                  minHeight: "40px",
                }}
              >
                <Phone
                  className="text-white"
                  style={{
                    width: `max(${calc.iconPercent * 0.5}vw, ${
                      dimensions.iconInner
                    }px)`,
                    height: `max(${calc.iconPercent * 0.5}vw, ${
                      dimensions.iconInner
                    }px)`,
                  }}
                />
              </div>
              <span
                className="font-semibold text-[#023437]"
                style={{
                  fontSize: `clamp(20px, ${calc.textPercent}vw, ${dimensions.textSize}px)`,
                }}
              >
                +61 470 695 167
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div
                className="bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  width: `max(${calc.iconPercent}vw, ${dimensions.iconSize}px)`,
                  height: `max(${calc.iconPercent}vw, ${dimensions.iconSize}px)`,
                  minWidth: "40px",
                  minHeight: "40px",
                }}
              >
                <Mail
                  className="text-white"
                  style={{
                    width: `max(${calc.iconPercent * 0.5}vw, ${
                      dimensions.iconInner
                    }px)`,
                    height: `max(${calc.iconPercent * 0.5}vw, ${
                      dimensions.iconInner
                    }px)`,
                  }}
                />
              </div>
              <span
                className="font-semibold text-[#023437] break-words"
                style={{
                  fontSize: `clamp(20px, ${calc.textPercent}vw, ${dimensions.textSize}px)`,
                }}
              >
                teamup@connect2lawyer.com.au
              </span>
            </div>
          </div>

          <div
            className="h-[1px] w-[250.357px] xl:h-[2px] xl:w-[250.357px]"
            style={{ backgroundColor: "rgba(2, 52, 55, 0.29)" }}
          ></div>

          {/* Social Media Icons */}
          <div className="flex gap-3 mt-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFBF3] border-2 border-[#023437] hover:bg-[#023437] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 group"
                style={{
                  width: `clamp(40px, ${
                    (48 / dimensions.baseWidth) * 100
                  }vw, 48px)`,
                  height: `clamp(40px, ${
                    (48 / dimensions.baseWidth) * 100
                  }vw, 48px)`,
                }}
                aria-label={`Visit our ${social.icon.name} page`}
              >
                <social.icon
                  className="text-[#023437] group-hover:text-[#FFFBF3]"
                  style={{
                    width: `clamp(20px, ${
                      (24 / dimensions.baseWidth) * 100
                    }vw, 24px)`,
                    height: `clamp(20px, ${
                      (24 / dimensions.baseWidth) * 100
                    }vw, 24px)`,
                  }}
                />
              </a>
            ))}
          </div>

          {/* Business Hours */}
          <div className="flex col-2 items-center gap-2 mt-12">
            <div
              className="bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                width: `max(${calc.iconPercent}vw, ${dimensions.iconSize}px)`,
                height: `max(${calc.iconPercent}vw, ${dimensions.iconSize}px)`,
                minWidth: "70px",
                minHeight: "70px",
              }}
            >
              <Clock
                className="text-white"
                style={{
                  width: `max(${calc.iconPercent * 0.9}vw, ${
                    dimensions.iconInner
                  }px)`,
                  height: `max(${calc.iconPercent * 0.9}vw, ${
                    dimensions.iconInner
                  }px)`,
                }}
              />
            </div>
            <div>
              <div
                className="font-medium text-[#023437] items-center justify-center"
                style={{
                  fontSize: `clamp(20px, ${calc.textPercent*1.5}vw, ${dimensions.textSize*1.5}px)`,
                }}
              >
                9:00-19:00
              </div>
              <div
                className="text-[#023437] font-medium"
                style={{
                  fontSize: `clamp(14px, ${
                    (dimensions.smallTextSize / dimensions.baseWidth) * 100
                  }vw, ${dimensions.smallTextSize}px)`,
                }}
              >
                Mon - Fri
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Right Side */}
        <div
          className="absolute right-0 top-0 flex items-center justify-end"
          style={{
            width: `${calc.mapWidthPercent}%`,
            maxWidth: `${dimensions.mapWidth}px`,
            height: "100%",
            paddingRight: `${calc.mapPaddingPercent}%`,
            minPaddingRight: "50px",
          }}
        >
          <div
            className="relative"
            style={{
              width: "100%",
              height: `${calc.mapHeightPercent}%`,
              maxHeight: `${dimensions.mapHeight}px`,
              aspectRatio: `${dimensions.mapWidth} / ${dimensions.mapHeight}`,
            }}
          >
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
      <div className="block md:hidden px-6 py-12">
        <div className="flex flex-col min-h-[calc(100vh-5rem)] space-y-8">
          {/* Mobile Heading - Left Aligned */}
          <div className="w-full">
            <h1 className="font-playfair font-bold text-5xl xs:text-6xl leading-[0.95] mb-6 text-[#023437] text-left">
              We're here <br />
              <span className="text-[#C09F53]">to help</span>
            </h1>

            {/* Business Hours - Left Aligned and Sized Down */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-white" />
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

          {/* Mobile Map */}
          <div className="w-full max-w-md mx-auto">
            <img
              src={map}
              alt="Australia Map showing Point Cook, Melbourne"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Mobile Contact Info */}
          <div className="w-full space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-[#023437]">
                +61 470 695 167
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#023437] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-[#023437] break-words">
                teamup@connect2lawyer.com.au
              </span>
            </div>
          </div>

          {/* Line Separator */}
          <div className="h-[1px] w-[250px] bg-[#023437] opacity-29"></div>

          {/* Mobile Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#FFFBF3] border-2 border-[#023437] hover:bg-[#023437] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
                aria-label={`Visit our ${social.icon.name} page`}
              >
                <social.icon className="w-6 h-6 text-[#023437] group-hover:text-[#FFFBF3]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;