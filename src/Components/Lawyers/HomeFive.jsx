import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Targeted Campaigns',
    desc: 'We launch optimized digital campaigns across Google, Meta, YouTube, and TikTok.',
  },
  {
    step: '02',
    title: 'In-House Intake and Screening',
    desc: 'Each lead is verified through our team or smart intake forms.',
  },
  {
    step: '03',
    title: 'Lead Delivery',
    desc: 'Leads are sent to your system instantly or via scheduled callbacks.',
  },
  {
    step: '04',
    title: 'Ongoing Support',
    desc: 'We don’t disappear after delivery. You get account support and conversion insights.',
  },
];

const HomeFive = () => {
  return (
    <section className="bg-[#FFFBF3] py-12 px-4 md:px-12 lg:px-24">

      {/* ======= Header (Shared) ======= */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153637] font-playfair">
          Our <span className="text-[#C09F53]">Process</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#153637] max-w-xl mx-auto font normal font-opensans">
          A proven 4-step system that delivers qualified leads directly to your practice
        </p>
      </div>

      {/* ======= Desktop Version ======= */}
      <div className="hidden lg:grid grid-cols-4 gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-[#F0EAD9] text-[#023437] font-semibold rounded-full mb-4 font-opensans">
              {item.step}
            </div>
            <h3 className="text-lg font-bold text-[#023437] mb-2 font-playfair">{item.title}</h3>
            <p className="text-sm text-[#153637B2] font-opensans">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ======= Mobile Version ======= */}
      <div className="lg:hidden flex flex-col gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-[#F0EAD9] text-[#023437] font-semibold rounded-full mb-4 font-opensans">
              {item.step}
            </div>
            <h3 className="text-lg font-bold text-[#023437] mb-2 font-playfair">{item.title}</h3>
            <p className="text-sm text-[#153637B2] font-opensans">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFive;
