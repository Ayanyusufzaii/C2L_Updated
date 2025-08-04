import React, { useState } from "react";
import oldladyimg from "../../../assets/lawyer talking with old couple.png";
import truck from "../../../assets/truck.png";
import rideshare from "../../../assets/rideshare.png";

// Configuration object for each expertise section
const contentConfig = {
  "Mesothelioma Lawsuits": {
    bgColor: "#023437",
    textBg: "#C09F53",
    title: "Asbestos Exposure and Mesothelioma",
    description:
      "If you’ve been diagnosed with mesothelioma, you may be entitled to compensation through asbestos exposure claims.",
    lawsuitTypeTitle: "Lawsuit Type",
    lawsuitTypeDesc:
      "Dust disease compensation claims through SA courts or tribunals under the relevant health and safety legislation.",
    industriesTitle: "Industries",
    industriesDesc:
      "Construction, Shipbuilding, Mining, Manufacturing, Renovation, Infrastructure. ",
    imgSrc: oldladyimg,
    imgAlt: "Mesothelioma Consultation",
  },
  "18-Wheeler & Heavy Vehicle Accidents": {
    bgColor: "#023437",
    textBg: "#C09F53",
    title: "18-Wheeler & Heavy Vehicle Accidents",
    description:
      "Victims of heavy vehicle or 18-wheeler crashes can pursue legal claims for serious injuries, lost wages, and damages.",
    lawsuitTypeTitle: "Lawsuit Type",
    lawsuitTypeDesc:
      "Fault-based CTP personal injury claims (Civil Liability Act, Motor Vehicles Act), common law, and Workcover if driving professionally.",
    industriesTitle: "Industries",
    industriesDesc:
      "Freight & Logistics, Agricultural Haulage, Mining Transport, Local Delivery Services.",
    imgSrc: truck,
    imgAlt: "18-Wheeler Accident",
  },
  "Rideshare Accident Claims": {
    bgColor: "#023437",
    textBg: "#C09F53",
    title: "Rideshare Sexual Assault",
    description:
      "Legal support is available for survivors of sexual assault involving rideshare services like Uber or Lyft.",
    lawsuitTypeTitle: "Lawsuit Type",
    lawsuitTypeDesc:
      "CTP injury claims and third-party property damage under SA's Motor Vehicles Act.",
    industriesTitle: "Industries",
    industriesDesc:
      "Rideshare (Uber, Ola, DiDi), Food & Parcel Delivery (Uber Eats, Menulog, DoorDash), Private Transportation.",
    imgSrc: rideshare,
    imgAlt: "Rideshare Service",
  },
};

// Mobile Version - Same structure, no changes
const HomeThreeMobile = () => {
  const [activeTag, setActiveTag] = useState("Mesothelioma Lawsuits");
  const expertiseTags = Object.keys(contentConfig);

  // Renders the section for the current activeTag
  const renderContent = () => {
    const data = contentConfig[activeTag];
    if (!data) return null;

    return (
      <div
        className={`w-full flex flex-col md:flex-row  items-stretch min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px] 3xl:min-h-[900px] 4xl:min-h-[1000px] 5xl:min-h-[1200px]`}
        style={{ backgroundColor: data.bgColor }}
      >
        {/* Text Section */}
        <div
          className="flex-1 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 3xl:p-16 4xl:p-20 5xl:p-24 text-white  "
          style={{ backgroundColor: data.textBg }}
        >
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
            {/* Title */}
            <h3 className="font-serif font-semibold leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl">
              {data.title}
            </h3>
            {/* Description */}
            <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
              {data.description}
            </p>
            {/* Lawsuit Type */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl">
                {data.lawsuitTypeTitle}
              </h4>
              <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
                {data.lawsuitTypeDesc}
              </p>
            </div>
            {/* Industries */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl">
                {data.industriesTitle}
              </h4>
              <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
                {data.industriesDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative min-h-[200px]">
          <img
            src={data.imgSrc}
            alt={data.imgAlt}
            className="w-full h-full object-fill"
          />
          <button
            className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5 2xl:px-14 2xl:py-6 3xl:px-16 3xl:py-8 4xl:px-20 4xl:py-10 5xl:px-24 5xl:py-12 border border-white text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl rounded-full shadow-md transition duration-300 hover:bg-white hover:text-[#023437]`}
          >
            Learn More
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <section
        className={`w-full bg-[#023437] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28 4xl:py-32 5xl:py-36`}
      >
        {/* Header */}
        <div className="w-full max-w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 4xl:px-48 5xl:px-64">
        
          <h1 className="text-[#FFFBF3] font-playfair font-extrabold leading-tight mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-[86px] xl:text-[125px] 2xl:text-[190px] 3xl:text-[190px] 4xl:text-[190px] 5xl:text-[190px]">
            Our Expertise in <span className="text-[#C09F53]">SA</span>
          </h1>

          {/* Mobile Tags - Horizontal Scroll */}
          <div className="block md:hidden mb-4 sm:mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {expertiseTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`flex-shrink-0 px-3 py-2 text-xs rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeTag === tag
                      ? "bg-[#C09F53] text-white"
                      : "border border-[white] text-[#FFFBF3] hover:bg-[#C09F53] hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Tags */}
          <div className="hidden md:flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-4 sm:mb-6 md:mb-8">
            {expertiseTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-2xl 4xl:text-3xl 5xl:text-3xl rounded-full font-semibold transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-[#C09F53] text-white"
                    : "border border-[white] text-[#FFFBF3] hover:bg-[#C09F53] hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-32 5xl:px-40">
          {renderContent()}
        </div>
      </section>
    </div>
  );
};

// Desktop Version - Same structure, no changes
const HomeThreeDesktop = () => {
  const [activeTag, setActiveTag] = useState("Mesothelioma Lawsuits");
  const expertiseTags = Object.keys(contentConfig);

  // Renders the section for the current activeTag
  const renderContent = () => {
    const data = contentConfig[activeTag];
    if (!data) return null;

    return (
      <div
        className={`w-full flex flex-col md:flex-row  items-stretch min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px] 3xl:min-h-[900px] 4xl:min-h-[1000px] 5xl:min-h-[1200px]`}
        style={{ backgroundColor: data.bgColor }}
      >
        {/* Text Section */}
        <div
          className="flex-1 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 3xl:p-16 4xl:p-20 5xl:p-24 text-white  "
          style={{ backgroundColor: data.textBg }}
        >
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
            {/* Title */}
            <h3 className="font-serif font-semibold leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl">
              {data.title}
            </h3>
            {/* Description */}
            <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
              {data.description}
            </p>
            {/* Lawsuit Type */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl">
                {data.lawsuitTypeTitle}
              </h4>
              <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
                {data.lawsuitTypeDesc}
              </p>
            </div>
            {/* Industries */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl">
                {data.industriesTitle}
              </h4>
              <p className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
                {data.industriesDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative min-h-[200px]">
          <img
            src={data.imgSrc}
            alt={data.imgAlt}
            className="w-full h-full object-fill"
          />
          <button
            className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5 2xl:px-14 2xl:py-6 3xl:px-16 3xl:py-8 4xl:px-20 4xl:py-10 5xl:px-24 5xl:py-12 border border-white text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl rounded-full shadow-md transition duration-300 hover:bg-white hover:text-[#023437]`}
          >
            Learn More
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <section
        className={`w-full bg-[#023437] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28 4xl:py-32 5xl:py-36`}
      >
        {/* Header */}
        <div className="w-full max-w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 4xl:px-48 5xl:px-64">
        
          <h1 className="text-[#FFFBF3] font-playfair font-extrabold leading-tight mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-[86px] xl:text-[125px] 2xl:text-[190px] 3xl:text-[190px] 4xl:text-[190px] 5xl:text-[190px]">
            Our Expertise in <span className="text-[#C09F53]">SA</span>
          </h1>

          {/* Mobile Tags - Horizontal Scroll */}
          <div className="block md:hidden mb-4 sm:mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {expertiseTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`flex-shrink-0 px-3 py-2 text-xs rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeTag === tag
                      ? "bg-[#C09F53] text-white"
                      : "border border-[white] text-[#FFFBF3] hover:bg-[#C09F53] hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Tags */}
          <div className="hidden md:flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-4 sm:mb-6 md:mb-8">
            {expertiseTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-2xl 4xl:text-3xl 5xl:text-3xl rounded-full font-semibold transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-[#C09F53] text-white"
                    : "border border-[white] text-[#FFFBF3] hover:bg-[#C09F53] hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-32 5xl:px-40">
          {renderContent()}
        </div>
      </section>
    </div>
  );
};

// Main component that uses both Mobile and Desktop versions
const HomeThree = () => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile ? <HomeThreeMobile /> : <HomeThreeDesktop />;
};

export default HomeThree;