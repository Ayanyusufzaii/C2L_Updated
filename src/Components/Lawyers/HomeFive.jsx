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
      <h2 className="text-center font-playfair text-[60px] font-extrabold leading-normal text-[#153637]">
  Our <span className="text-[#C09F53]">Process</span>
</h2>

<p className="mt-4 text-center font-opensans text-[18px] font-semibold leading-normal text-[#153637]/80 max-w-xl mx-auto">
  A proven 4-step system that delivers qualified leads directly to your practice
</p>
      </div>

      {/* ======= Desktop Version ======= */}
      <div className="hidden lg:grid grid-cols-4 gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[10px] p-6 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10),0_10px_15px_-3px_rgba(0,0,0,0.10)] flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-[#F0EAD9] text-[#023437] font-semibold rounded-full mb-4 font-opensans">
              {item.step}
            </div>
<h3 className="text-center font-playfair text-[24px] font-bold leading-normal text-[#023437] mb-2">
  {item.title}
</h3>

           <p className="text-center font-opensans text-[16px] font-semibold leading-[26px] text-[#153637]/70">
  {item.desc}
</p>

          </div>
        ))}
      </div>

      {/* ======= Mobile Version ======= */}
      <div className="lg:hidden flex flex-col gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[10px] p-6 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10),0_10px_15px_-3px_rgba(0,0,0,0.10)] flex flex-col items-center text-center"
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
