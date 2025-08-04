import React from 'react';

const contentDesktop = { 
  heading: {
    title: 'Why WA Clients',
    highlight: 'Trust Us',
  },
  points: [
    {
      width: 'w-9/12',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Fast & Confidential Matching',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-[#023437] mb-2',
        },
        {
          text: 'Get paired with WA’s best personal injury lawyers in minutes — completely private and relevant to your situation.',
          className: 'text-sm sm:text-base lg:text-lg text-[#023437]',
        },
      ],
    },
    {
      width: 'w-10/12',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'No Win, No Fee Assurance',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2',
        },
        {
          text: 'Most WA lawyers on our platform operate on a success-only fee model — no payment unless you win.',
          className: 'text-sm sm:text-base lg:text-lg text-white',
        },
      ],
    },
    {
      width: 'w-11/12',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Specialized WA Legal Expertise',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-[#023437] mb-2',
        },
        {
          text: 'Our partners are well-versed in WA’s CTP system, ICWA procedures, and state-specific court processes.',
          className: 'text-sm sm:text-base lg:text-lg text-[#023437]',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'Statewide Coverage',
          className: 'text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FFFBF3] font-bold mb-2',
        },
        {
          text: 'Lawyers available across Perth, Bunbury, Broome, and more — you’re covered no matter where you are.',
          className: 'text-sm sm:text-base md:text-lg lg:text-xl text-[#FFFBF3]',
        },
      ],
    },
  ],
};

const contentMobile = {
  heading: {
    title: 'Why WA Clients',
    highlight: 'Trust Us',
  },
  points: [
    {
      width: 'w-full',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Fast & Confidential Matching',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-[#023437] mb-2',
        },
        {
          text: 'Get paired with WA’s best personal injury lawyers in minutes — completely private and relevant to your situation.',
          className: 'text-sm sm:text-base lg:text-lg text-[#023437]',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'No Win, No Fee Assurance',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2',
        },
        {
          text: 'Most WA lawyers on our platform operate on a success-only fee model — no payment unless you win.',
          className: 'text-sm sm:text-base lg:text-lg text-white',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Specialized WA Legal Expertise',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-[#023437] mb-2',
        },
        {
          text: 'Our partners are well-versed in WA’s CTP system, ICWA procedures, and state-specific court processes.',
          className: 'text-sm sm:text-base lg:text-lg text-[#023437]',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'Statewide Coverage',
          className: 'text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FFFBF3] font-bold mb-2',
        },
        {
          text: 'Lawyers available across Perth, Bunbury, Broome, and more — you’re covered no matter where you are.',
          className: 'text-sm sm:text-base md:text-lg lg:text-xl text-[#FFFBF3]',
        },
      ],
    },
  ],
};


const HomeFive = () => {
  return (
    <div>
      {/* Mobile version */}
      <div className="block lg:hidden bg-[#FFFF] pb-8">
        <div className="mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-6xl font-bold text-[#023437] mb-12 text-left lg:text-left leading-tight p-6">
            {contentMobile.heading.title}
            <br />
            <span className="text-[#C09F53]">{contentMobile.heading.highlight}</span>
          </h2>

          <div className="items-center">
            {contentMobile.points.map((point, index) => (
              <div key={index} className={`${point.bg} ${point.width} p-6 `}>
                <div className="flex flex-col">
                  {point.items.map((item, idx) => (
                    <span key={idx} className={item.className}>
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop version */}
      <div className="hidden lg:block bg-[#FFFF] pb-8">
        <div className="mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-6xl font-bold text-[#023437] mb-12 text-left lg:text-left leading-tight p-6">
            {contentDesktop.heading.title}
            <br />
            <span className="text-[#C09F53]">{contentDesktop.heading.highlight}</span>
          </h2>

          <div className="items-center">
            {contentDesktop.points.map((point, index) => (
              <div key={index} className={`${point.bg} ${point.width} p-6 `}>
                <div className="flex flex-col">
                  {point.items.map((item, idx) => (
                    <span key={idx} className={item.className}>
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFive;
