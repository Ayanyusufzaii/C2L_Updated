import React from 'react';

const contentDesktop = {
  heading: {
    title: 'Why ACT Clients',
    highlight: 'Trust Us',
  },
  points: [
    {
      width: 'w-9/12',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Confidential & Rapid Lawyer Matching',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-[#023437] mb-2',
        },
        {
          text: 'Connect with top-rated ACT legal professionals swiftly and securely, ensuring your case is handled with expertise.',
          className: 'text-sm sm:text-base lg:text-lg text-[#023437]',
        },
      ],
    },
    {
      width: 'w-10/12',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'No Win, No Fee Options',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2',
        },
        {
          text: 'Many of our ACT-based lawyers operate on a contingency fee basis, you only pay if your case is successful.',
          className: 'text-sm sm:text-base lg:text-lg text-white',
        },
      ],
    },
    {
      width: 'w-11/12',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Expertise in ACT Legal Framework',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-[#023437] mb-2',
        },
        {
          text: 'Our partners are well-versed in the Motor Accident Injuries (MAI) Scheme and ACT-specific compensation laws.',
          className: 'text-sm sm:text-base lg:text-lg text-[#023437]',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'Local Presence Across Canberra',
          className: 'text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FFFBF3] font-bold mb-2',
        },
        {
          text: 'Access legal support throughout Canberra, including Civic, Belconnen, and Tuggeranong.',
          className: 'text-sm sm:text-base md:text-lg lg:text-xl text-[#FFFBF3]',
        },
      ],
    },
  ],
};


const contentMobile = {
  heading: {
    title: 'Why ACT Clients',
    highlight: 'Trust Us',
  },
  points: [
    {
      width: 'w-full',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Confidential & Rapid Lawyer Matching',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-[#023437] mb-2',
        },
        {
          text: 'Connect with top-rated ACT legal professionals swiftly and securely, ensuring your case is handled with expertise.',
          className: 'text-sm sm:text-base lg:text-lg text-[#023437]',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'No Win, No Fee Options',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2',
        },
        {
          text: 'Many of our ACT-based lawyers operate on a contingency fee basis, you only pay if your case is successful.',
          className: 'text-sm sm:text-base lg:text-lg text-white',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#EFE4CB]',
      items: [
        {
          text: 'Expertise in ACT Legal Framework',
          className: 'text-lg sm:text-xl lg:text-2xl font-bold text-[#023437] mb-2',
        },
        {
          text: 'Our partners are well-versed in the Motor Accident Injuries (MAI) Scheme and ACT-specific compensation laws.',
          className: 'text-sm sm:text-base lg:text-lg text-[#023437]',
        },
      ],
    },
    {
      width: 'w-full',
      bg: 'bg-[#023437]',
      items: [
        {
          text: 'Local Presence Across Canberra',
          className: 'text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#FFFBF3] font-bold mb-2',
        },
        {
          text: 'Access legal support throughout Canberra, including Civic, Belconnen, and Tuggeranong.',
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
