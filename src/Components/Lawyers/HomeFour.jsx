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
  <section className="bg-[#023437] py-12 px-4 text-white block md:hidden">
    {/* Heading */}
    <h2 className="text-[32px] sm:text-[36px] font-['Playfair_Display'] font-extrabold mb-3 leading-[1.1] text-left">
      Who We <span className="text-[#C09F53]">Work With</span>
    </h2>

    {/* Subtext */}
    <p className="text-[16px] sm:text-[18px] font-['Helvetica'] font-normal text-[#FFFFFFE6] leading-normal mb-6 text-left">
      We partner with successful law firms who share our commitment to excellence and results.
    </p>

    {/* Partners List */}
    <div className="flex flex-col gap-4">
      {partners.map((p, i) => (
        <div
          key={i}
          className="rounded-[8px] border border-white/20 bg-white/10 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-4 flex items-start gap-3  transition-colors duration-300"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-[#C2A75C] text-[#023437] rounded-full font-bold flex-shrink-0">
            <img src={p.icon} alt={p.title} className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-['Playfair'] text-base font-semibold leading-[28px] mb-1">
              {p.title}
            </h3>
            <p className="text-[#DCE6E5CC] font-['Open_Sans'] text-xs font-normal leading-[20px]">
              {p.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Image Section */}
    <div className="mt-8 flex justify-center">
      <img src={imgM} alt="Lawyers" className="w-full h-auto object-cover" />
    </div>
  </section>
);

const HomeFourTablet = () => (
  <section className="bg-[#023437] py-12 px-6 text-white hidden md:block lg:hidden">
    <h2 className="text-[40px] md:text-[44px] font-['Playfair_Display'] font-extrabold mb-4 leading-[1.1] text-left">
      Who We <span className="text-[#C09F53]">Work With</span>
    </h2>
    <p className="text-[17px] md:text-[18px] font-['Helvetica'] font-normal text-[#FFFFFFE6] leading-normal mb-6 text-left">
      We partner with successful law firms who share our commitment to excellence and results.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      {partners.map((p, i) => (
        <div
          key={i}
          className="rounded-[8px] border border-white/20 bg-white/10 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-4 flex items-start gap-3  transition-colors duration-300"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-[#C2A75C] text-[#023437] rounded-full font-bold flex-shrink-0">
            <img src={p.icon} alt={p.title} className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-['Playfair'] text-base md:text-lg font-semibold leading-[28px] mb-1">
              {p.title}
            </h3>
            <p className="text-[#DCE6E5CC] font-['Open_Sans'] text-xs md:text-sm font-normal leading-[20px]">
              {p.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 flex justify-center">
      <img src={imgD} alt="Lawyers" className="w-full h-auto object-cover" />
    </div>
  </section>
);

const HomeFourDesktop = () => (
  <section className="bg-[#023437] py-12 lg:py-14 xl:py-16 px-6 sm:px-8 md:px-12 lg:px-12 xl:px-24 text-white hidden lg:block">
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-[60px] sm:text-[48px] md:text-[52px] lg:text-[60px] xl:text-[60px] font-['Playfair_Display'] font-extrabold text-white mb-4 leading-[1.1] text-left">
        Who We <span className="text-[#C09F53]">Work With</span>
      </h2>
      <p className="text-[18px] font-['Helvetica'] font-normal text-[#FFFFFFE6] leading-normal mb-8 text-left">
        We partner with successful law firms who share our commitment to excellence and results.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
        <div className="flex flex-col gap-4">
          {partners.map((p, i) => (
            <div
              key={i}
              className="rounded-[8px] border border-white/20 bg-white/10 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-4 lg:p-5 flex items-start gap-4  transition-colors duration-300"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#C2A75C] text-[#023437] rounded-full font-bold flex-shrink-0">
                <img src={p.icon} alt={p.title} className="w-6 lg:w-7 h-6 lg:h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-['Playfair'] text-lg xl:text-xl font-semibold leading-[28px] mb-2">
                  {p.title}
                </h3>
                <p className="text-[#DCE6E5CC] font-['Open_Sans'] text-sm xl:text-base font-normal leading-[20px]">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <img src={imgD} alt="Professional lawyers working together" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  </section>
);

const HomeFour = () => (
  <>
    <HomeFourMobile />
    <HomeFourTablet />
    <HomeFourDesktop />
  </>
);

export default HomeFour;
