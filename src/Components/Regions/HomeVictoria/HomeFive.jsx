import React from 'react';

const contentDesktop = {
  heading: {
    title: 'Why VIC Clients',
    highlight: 'Trust Us',
  },
  points: [
    {
      width: 'w-2/3',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Fast & Private Matching',
          className: 'text-xl lg:text-2xl font-bold text-[#023437] mr-4',
        },
        {
          text: 'Access top Victorian lawyers within minutes, confidentially and tailored to your case.',
          className: 'text-sm lg:text-base text-[#023437]',
        },
      ],
    },
    {
      width: 'w-5/6',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'No Win, No Fee Structure',
          className: 'text-xl lg:text-2xl font-bold text-white mr-4',
        },
        {
          text: 'Most experts on our network charge fees only on a successful outcome.',
          className: 'text-sm lg:text-base text-white',
        },
      ],
    },
    {
      width: 'w-11/12',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Local Legal Expertise',
          className: 'text-xl lg:text-2xl font-bold text-[#023437] mr-2',
        },
        {
          text: "Our partners understand Victoria's TAC scheme, tribunals, and court systems intimately.",
          className: 'text-sm lg:text-base text-[#023437]',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'Statewide Coverage',
          className: 'text-xl lg:text-2xl text-[#FFFBF3] font-bold mr-2',
        },
        {
          text: 'From Melbourne to Geelong, Ballarat, and Bendigo—expert legal support is within reach.',
          className: 'text-sm lg:text-base text-[#FFFBF3]',
        },
      ],
    },
  ],
};


const contentMobile = {
  heading: {
    title: 'Why VIC Clients',
    highlight: 'Trust Us',
  },
  points: [
    {
      width: 'w-full',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Fast & Private Matching',
          className: 'text-xl font-bold text-[#023437] mr-4',
        },
        {
          text: 'Access top Victorian lawyers within minutes, confidentially and tailored to your case.',
          className: 'text-sm text-[#023437]',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'No Win, No Fee Structure',
          className: 'text-xl font-bold text-white mr-4',
        },
        {
          text: 'Most experts on our network charge fees only on a successful outcome.',
          className: 'text-sm text-white',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Local Legal Expertise',
          className: 'text-xl font-bold text-[#023437] mr-2',
        },
        {
          text: "Our partners understand Victoria's TAC scheme, tribunals, and court systems intimately.",
          className: 'text-sm text-[#023437]',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'Statewide Coverage',
          className: 'text-xl text-[#FFFBF3] font-bold mr-2',
        },
        {
          text: 'From Melbourne to Geelong, Ballarat, and Bendigo—expert legal support is within reach.',
          className: 'text-sm text-[#FFFBF3]',
        },
      ],
    },
  ],
};


const HomeFive = () => {
  return (
    <div>
      {/* Mobile version */}
      <div className="block md:hidden bg-[#FFFF] pb-8 font-opensans ">
        <div className="mx-auto">
          <h2 className="font-playfair  text-4xl lg:text-6xl font-bold text-[#023437] mb-12 text-left lg:text-left leading-tight p-6">
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
      <div className="hidden md:block bg-[#FFFF] pb-8 font-opensans ">
        <div className="mx-auto">
          <h2 className="font-playfair  text-4xl lg:text-6xl font-bold text-[#023437] mb-12 text-left lg:text-left leading-tight p-6">
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
