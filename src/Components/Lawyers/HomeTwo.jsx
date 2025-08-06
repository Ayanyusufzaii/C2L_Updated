import React from 'react';
// import {
//   ShieldCheck,
//   Target,
//   Trophy,
//   LineChart
// } from 'lucide-react'; 
import ShieldCheck from "../../assets/IconLH21.png";
import Target from "../../assets/IconLH22.png";
import Trophy from "../../assets/IconLH23.png";
import LineChart from "../../assets/IconLH24.png";

const features = [
  {
    icon: <img src={ShieldCheck} alt="ShieldCheck" className="w-6 h-6" />,
    title: 'Not Just Another Lead Provider',
    desc: "We’re your growth partner, specializing in high-value litigation",
  },
  {
    icon: <img src={Target} alt="Target" className="w-6 h-6" />,
    title: 'High-Intent Clients',
    desc: "Connect with clients actively seeking help across major mass torts",
  },
  {
    icon: <img src={Trophy} alt="Trophy" className="w-6 h-6" />,
    title: 'Focus on Winning',
    desc: "We handle lead generation so you can focus on what you do best",
  },
  {
    icon: <img src={LineChart} alt="LineChart" className="w-6 h-6" />,
    title: 'Proven Results',
    desc: "From Mesothelioma to 18-wheeler accidents – we deliver results",
  },
];


const WhyJoinUs = () => {
  return (
    <section className="bg-[#E6EBEB] py-16 px-4 md:px-12 lg:px-24 font-opensans">
      
      {/* ========== Top Section ========== */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153637] font-playfair">
      <span className="text-[#C09F53]">    Why </span> Join Us?
        </h2>
        <p className="mt-2 text-md sm:text-lg font-semibold text-[#C09F53]">
          We handle the lead gen, so you can focus on winning cases.
        </p>
        <p className="mt-4 text-sm sm:text-base text-[#153637CC] font-medium max-w-3xl mx-auto">
          We’re not just another lead provider. At Connect2Lawyer, we connect law firms with high-intent clients seeking help across major mass torts, class actions, and personal injury claims. From Mesothelioma to 18-wheeler accidents.
        </p>
      </div>

{/* ========== Feature Cards ========== */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {features.map((item, idx) => (
    <div
      key={idx}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
    >
      <div className="mb-4">
        <div className="bg-[#EAF1F1] p-3 rounded-full flex items-center justify-center">
          {item.icon}
        </div>
      </div>
      <h3 className="text-md font-semibold text-[#023437] mb-2 font-playfair">
        {item.title}
      </h3>
      <p className="text-sm text-[#153637CC]">{item.desc}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default WhyJoinUs;
