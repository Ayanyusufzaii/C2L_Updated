import React from "react";
import CheckCircle from "../../assets/IconHl31.png";
import Scale from "../../assets/IconHl32.png";
import Settings from "../../assets/IconHl33.png";
import Layers from "../../assets/IconHl34.png";
import People from "../../assets/IconHl35.png";

const features = [
  {
    icon: (
      <img
        src={CheckCircle}
        alt="CheckCircle"
        className="w-full h-full object-contain"
      />
    ),
    title: "Exclusive & Pre-Qualified Leads",
    desc: "We screen every inquiry, no more chasing cold prospects.",
  },
  {
    icon: (
      <img
        src={Settings}
        alt="Phone"
        className="w-full h-full object-contain"
      />
    ),
    title: "Custom Legal Intake Support",
    desc: "We can route leads to your CRM or via live transfer, based on your workflow.",
  },
  {
    icon: (
      <img src={Scale} alt="Layers" className="w-full h-full object-contain" />
    ),
    title: "Mass Tort Focus",
    desc: "We specialize in high-value, high-volume litigation.",
  },
  {
    icon: (
      <img src={Layers} alt="Scale" className="w-full h-full object-contain" />
    ),
    title: "Transparent Reporting",
    desc: "Track performance. Optimize campaigns. Scale with confidence.",
  },
  {
    icon: (
      <img
        src={People}
        alt="Settings"
        className="w-full h-full object-contain"
      />
    ),
    title: "Flexible Plans",
    desc: "Whether you're a solo practitioner or part of a multi-state firm, we've got plans that scale with your needs.",
  },
];

const HomeThree = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
      {/* Responsive Title Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h2 className="self-stretch text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[60px] font-playfair font-extrabold leading-tight sm:leading-normal text-[#153637]">
          What You Get as a{" "}
          <span className="text-[#C09F53]">Network Attorney</span>
        </h2>

        <p className="text-center text-sm sm:text-base md:text-lg lg:text-[18px] font-opensans font-semibold leading-relaxed sm:leading-normal text-[#153637CC] mx-auto mt-2 sm:mt-3 md:mt-4 max-w-2xl">
          Join hundreds of successful law firms already growing their practice
          with our proven system
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[10px] bg-white shadow-sm flex gap-3 sm:gap-4 lg:gap-5 items-start border"
              style={{ border: "1px solid rgba(192, 159, 83, 0.20)" }}
            >
              {/* Icon Container - Responsive sizing */}
              <div className="bg-[#C09F5333] p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[#153637] font-playfair font-bold text-lg sm:text-xl md:text-[22px] lg:text-[24px] leading-tight sm:leading-[28px] mb-1 sm:mb-1.5 md:mb-2">
                  {item.title}
                </h3>

                <p className="text-[#153637B2] font-opensans font-semibold text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-relaxed sm:leading-[24px] md:leading-[26px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeThree;