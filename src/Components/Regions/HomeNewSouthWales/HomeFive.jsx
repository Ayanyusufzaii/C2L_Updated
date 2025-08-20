import React from 'react';

const contentDesktop = {
  heading: {
    title: 'Why NSW Clients',
    highlight: 'Trust Us',
  },
  points: [
    {
      width: 'w-2/3',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: '20+',
          className: 'text-2xl lg:text-3xl font-bold text-[#023437] mr-4',
        },
        {
          text: 'Years of Local Legal Expertise',
          className: 'text-lg lg:text-xl text-[#023437]',
        },
      ],
    },
    {
      width: 'w-5/6',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'On-the-Ground Support',
          className: 'text-2xl lg:text-3xl font-bold text-white mr-4',
        },
        {
          text: 'Across NSW\u00A0',
          className: 'text-xl lg:text-2xl text-white',
        },
      ],
    },
    {
      width: 'w-11/12',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'No Win, No Fee',
          className: 'text-xl lg:text-2xl font-bold text-[#023437] mr-2',
        },
        {
          text: '— Pay Only If You Succeed',
          className: 'text-3xl lg:text-2xl  text-[#023437] mr-2',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'Tailored Legal Matches',
          className: 'text-xl lg:text-2xl text-[#FFFBF3] font-bold mr-2',
        },
        {
          text: '- Fast and Confidential',
          className: 'text-xl lg:text-2xl  text-[#FFFBF3]',
        },
      ],
    },
  ],
};

const contentMobile = {
  heading: {
    title: 'Why NSW Clients',
    highlight: 'Trust Us',
  },
  points: [
    {
      width: 'w-full',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: '20+',
          className: 'text-2xl lg:text-3xl font-bold text-[#023437] mr-4',
        },
        {
          text: 'Years of Local Legal Expertise',
          className: 'text-lg lg:text-xl text-[#023437]',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'On-the-Ground Support',
          className: 'text-2xl lg:text-3xl font-bold text-white mr-4',
        },
        {
          text: 'Across NSW\u00A0',
          className: 'text-xl lg:text-2xl text-white',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'No Win, No Fee',
          className: 'text-xl lg:text-2xl font-bold text-[#023437] mr-2',
        },
        {
          text: '— Pay Only If You Succeed',
          className: 'text-3xl lg:text-2xl  text-[#023437] mr-2',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'Tailored Legal Matches',
          className: 'text-xl lg:text-2xl text-[#FFFBF3] font-bold mr-2',
        },
        {
          text: '- Fast and Confidential',
          className: 'text-xl lg:text-2xl  text-[#FFFBF3]',
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
          <h2 className="font-playfair  text-4xl font-bold text-[#023437] mb-12 text-center leading-tight p-6">
            {contentMobile.heading.title}
            <br />
            <span className="text-[#C09F53]">{contentMobile.heading.highlight}</span>
          </h2>

          <div>
            {contentMobile.points.map((point, index) => (
              <div key={index} className={`${point.bg} p-6 ${point.width}`}>
                <div className="flex items-center flex-wrap">
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
          <h2 className="font-playfair  text-4xl lg:text-6xl font-bold text-[#023437] mb-12 text-left leading-tight p-6">
            {contentDesktop.heading.title}
            <br />
            <span className="text-[#C09F53]">{contentDesktop.heading.highlight}</span>
          </h2>

          <div>
            {contentDesktop.points.map((point, index) => (
              <div key={index} className={`${point.bg} p-6 lg:p-6 ${point.width}`}>
                <div className="flex items-center flex-wrap">
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
