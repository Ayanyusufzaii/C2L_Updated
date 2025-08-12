import React from 'react';
import imgD from '../../assets/LawyersHomeFive2.png'; 
import imgM from '../../assets/LawyersHomeFive3.png'; 



import Scale from '../../assets/IconHl41.png';
import File from '../../assets/IconHl42.png';
import People from '../../assets/IconHl43.png';
import Hammer from '../../assets/IconHl44.png';

const partners = [
  {
    icon: Scale,
    title: 'Mass Tort Law Firms',
    desc: 'Specializing in large-scale litigation and class action cases',
  },
  {
    icon: File,
    title: 'Personal Injury Firms',
    desc: 'Handling individual and complex injury claims',
  },
  {
    icon: People,
    title: 'Intake & Case Acquisition Partners',
    desc: 'Partners focused on client acquisition and case management',
  },
  {
    icon: Hammer,
    title: 'Trial Lawyers & Referring Firms',
    desc: 'Experienced litigators and referral network partners',
  },
];

const HomeFourMobile = () => (
  <section className="bg-[#023437] py-12 px-4 text-white block lg:hidden">
    <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-4 text-center">
      Who We <span className="text-[#C2A75C]">Work With</span>
    </h2>
    <p className="text-sm mb-8 text-[#DCE6E5] text-center">
      We partner with successful law firms who share our commitment to excellence and results.
    </p>

    <div className="flex flex-col gap-4">
      {partners.map((p, i) => (
        <div
          key={i}
          className="bg-[#0E4A45] rounded-md p-4 flex items-start gap-4"
        >
          <div className="w-10 h-10 flex items-center justify-center text-xl bg-[#C2A75C] text-[#023437] rounded-full font-bold">
            <img src={p.icon} alt={p.title} className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">{p.title}</h3>
            <p className="text-sm text-[#DCE6E5]">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-8 flex justify-center">
      <img
        src={imgM}
        alt="Lawyers"
        className="w-full h-auto object-cover"
      />
    </div>
  </section>
);

const HomeFourDesktop = () => (
  <section className="bg-[#023437] py-12 lg:py-14 xl:py-16 px-6 sm:px-8 md:px-12 lg:px-12 xl:px-24 text-white hidden lg:block">
    <div className="max-w-screen-xl mx-auto">
      <div className="mb-6 lg:mb-7 xl:mb-8">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-['Playfair_Display'] mb-3 lg:mb-4 text-left leading-tight">
          Who We <span className="text-[#C2A75C]">Work With</span>
        </h2>
        <p className="text-sm lg:text-base xl:text-lg mb-6 lg:mb-7 xl:mb-8 text-[#DCE6E5] leading-relaxed">
          We partner with successful law firms who share our commitment to
          excellence and results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
        {/* Content Section */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-3 lg:gap-4">
            {partners.map((p, i) => (
              <div
                key={i}
                className="bg-[#0E4A45] rounded-md p-3 lg:p-4 xl:p-5 flex items-start gap-3 lg:gap-4 hover:bg-[#135550] transition-colors duration-300"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex items-center justify-center text-xl bg-[#C2A75C] text-[#023437] rounded-full font-bold flex-shrink-0">
                  <img src={p.icon} alt={p.title} className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base lg:text-lg xl:text-xl font-semibold mb-1 lg:mb-2">{p.title}</h3>
                  <p className="text-xs lg:text-sm xl:text-base text-[#DCE6E5] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="w-full">
            <img
              src={imgD}
              alt="Professional lawyers working together"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HomeFour = () => (
  <>
    <HomeFourMobile />
    <HomeFourDesktop />
  </>
);

export default HomeFour;