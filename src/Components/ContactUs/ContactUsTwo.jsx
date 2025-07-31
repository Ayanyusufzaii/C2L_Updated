import React from "react";
import lqt from "../../assets/lqt.png";
import rqt from "../../assets/rqt.png";

const ContactUsTwo = () => {
  return (
    <section className="bg-[#C09F53] py-8 px-4 md:py-16 overflow-hidden">
      <div className="max-w-[1351px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-44">
        <div className="relative">
          {/* Left quote - positioned at top left of text box */}
          <img
            src={lqt}
            alt="opening quote"
            className="
              absolute -top-8 -left-8
              w-[30px] h-[20px]
              sm:w-[45px] sm:h-[30px]
              md:w-[61px] md:h-[40px]
              lg:w-[80px] lg:h-[54px]
              xl:w-[97px] xl:h-[65px]
            "
            style={{ aspectRatio: '96.98/65.33' }}
          />

          {/* Text container */}
          <div className="relative z-10 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
            <p
              className="
                text-white text-center italic
                text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px]
                leading-normal
              "
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <span className="font-bold">Connect2Lawyer</span>{" "}
              <span className="">has</span>{" "}
              <span className="font-[800]">helped thousands</span>{" "}
              <span className="">of people secure the legal care they
              deserve. Filing a claim may seem complex, but our</span>{" "}
              <span className="font-bold decoration-white decoration-2">
                Experienced Lawyers
              </span>{" "}
              <span className="">are here to guide you in</span>{" "}
              <span className="font-bold decoration-white decoration-2">
                Every Step
              </span>
              <span className=""> of the Way.</span>{" "}
            </p>
          </div>

          {/* Right quote - positioned at bottom right of text box */}
          <img
            src={rqt}
            alt="closing quote"
            className="
              absolute -bottom-8 -right-3
              w-[30px] h-[20px]
              sm:w-[45px] sm:h-[30px]
              md:w-[61px] md:h-[40px]
              lg:w-[80px] lg:h-[54px]
              xl:w-[97px] xl:h-[65px]
            "
            style={{ aspectRatio: '96.98/65.33' }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsTwo;