import React, { useState } from 'react'
import "./SubThree.css"
import card1 from '../../../assets/Cardd1.png'
import card2 from '../../../assets/Cardd1.png'  
import card3 from '../../../assets/Card3.png'
import card4 from '../../../assets/Card4.png'

const cardData = [
  {
    id: 1,
    heading: 'Review History',
    image: card1,
    description: 'We carefully examine your exposure and medical history to build a strong foundation for your claim, uncovering critical details that support your case.',
  },
  {
    id: 2,
    heading: 'Identify Compensation',
    image: card2,
    description: 'Our team evaluates your case to identify all eligible compensation types, including medical costs, lost wages, and emotional distress to maximize your recovery. ',
  },
  {
    id: 3,
    heading: 'Simplify Process',
    image: card3,
    description: 'We handle the complex legal steps on your behalf, keeping you informed and focused on healing while we work to resolve your claim efficiently.',
  },
  {
    id: 4,
    heading: 'Dedicated Support',
    image: card4,
    description: "Our team is committed to providing continuous support, answering your questions, and guiding you through every stage until your claim is successfully resolved.",
  },
];

function SubThree() {
  const [active, setActive] = useState(1);

  return (
    <div>
      {/* Desktop Version */}
      <div className="hidden lg:block mt-[30rem] xl:mt-[40rem] 2xl:mt-[56rem] px-2 sm:px-6 md:px-10">
        <div className="flex flex-row items-start gap-8 xl:gap-32 p-4 sm:p-8 md:p-12 lg:p-20">
          <div className="mt-8 md:mt-8 lg:mt-0 xl:mt-0 flex-1 min-w-[220px]">
            <h1 className="text-[#023437] font-['Playfair_Display'] text-2xl md:text-4xl lg:text-[40px] xl:text-[56px] 2xl:text-[72px] font-extrabold italic leading-tight xl:leading-[80px] w-full max-w-[420px]">See how we can help</h1>
          </div>
          <div className="mt-8 md:mt-8 lg:mt-0 xl:mt-0 flex-1 min-w-[220px]">
            <h4 className="text-[#023437] text-left font-sans text-base md:text-lg lg:text-xl xl:text-2xl font-bold normal-case mb-2 md:mb-4">
              How We Help
            </h4>
            <p className="text-[#023437] font-sans text-sm md:text-base lg:text-lg xl:text-2xl font-semibold leading-normal w-full max-w-[350px]">
              At Connect2Lawyer, our experienced mesothelioma lawyers are dedicated to guiding you every step of the way.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 md:px-0">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`transition-all duration-300 flex flex-col items-center cursor-pointer 
                ${active === card.id 
                  ? 'bg-[#023437] text-white w-full max-w-[300px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] h-[340px] md:h-[370px] lg:h-[420px] z-20' 
                  : 'bg-white text-[#023437] w-full max-w-[260px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px] h-[260px] md:h-[300px] lg:h-[370px] z-10'}`}
              style={{ boxShadow: active === card.id ? '0 8px 32px rgba(2,52,55,0.18)' : '0 2px 8px rgba(2,52,55,0.08)' }}
              onMouseEnter={() => setActive(card.id)}
            >
              {active === card.id ? (
                <>
                  <div className="flex flex-col items-center w-full h-full p-0 overflow-hidden">
                    <div className="flex flex-row items-center justify-between w-full px-2 md:px-3 lg:px-4 mt-4 md:mt-6 gap-1 md:gap-2">
                      <span className="text-lg md:text-xl lg:text-2xl font-bold font-['Playfair_Display'] whitespace-nowrap">0{card.id}</span>
                      <h3 className="text-base md:text-lg lg:text-xl font-semibold font-['Playfair_Display'] text-right w-full break-words whitespace-normal overflow-visible leading-tight" style={{wordBreak: 'break-word'}}>{card.heading}</h3>
                    </div>
                    <div className="flex-1 w-full flex items-center justify-center">
                      <p className="px-2 md:px-3 lg:px-4 text-xs md:text-[11px] lg:text-sm font-sans mt-2 md:mt-4 lg:mt-6 break-words w-full text-center leading-snug overflow-y-auto"
                        style={{maxHeight: '150px', minHeight: '60px', whiteSpace: 'normal'}}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center w-full mt-6 justify-between h-full">
                    <div className="w-full flex flex-col items-center">
                      <span className="text-xl font-bold mb-2 font-['Playfair_Display']">0{card.id}</span>
                      <h3 className="text-lg font-semibold font-['Playfair_Display'] mb-4">{card.heading}</h3>
                    </div>
                    <img src={card.image} alt={card.heading} className="w-full h-full object-cover mx-auto mt-auto" style={{flex: 1, minHeight: '120px', maxHeight: '100%'}} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Version */}
      <div className="lg:hidden p-6">
        <div className="mb-12">
          <h1 className="text-[#023437] font-['Playfair_Display'] text-5xl font-extrabold italic leading-tight mb-6">
            See how we can help
          </h1>
          <div className="mb-8">
            <h4 className="text-[#023437] text-left font-sans text-xl font-bold normal-case mb-3">
              How We Help
            </h4>
            <p className="text-[#023437] font-sans text-lg font-semibold leading-normal">
            At Connect 2 Lawyer, our experienced mesothelioma experts are committed to supporting you at every stage of your journey.
            </p>
          </div>
        </div>
 
        <div className="space-y-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`transition-all duration-300 flex flex-col items-center cursor-pointer w-full max-w-[540px] mx-auto ${active === card.id ? 'bg-[#023437] text-white h-[320px] p-6' : 'bg-white text-[#023437] border border-[#023437] h-[320px]'} `}
              style={{ boxShadow: active === card.id ? '0 8px 32px rgba(2,52,55,0.18)' : '0 2px 8px rgba(2,52,55,0.08)' }}
              onMouseEnter={() => setActive(card.id)}
            >
              {active === card.id ? (
                <>
                  <span className="text-2xl font-bold mb-2 font-['Playfair_Display']">0{card.id}</span>
                  <h3 className="text-lg font-semibold mb-3 font-['Playfair_Display']">{card.heading}</h3>
                  <p className="text-base font-['Playfair_Display']">{card.description}</p>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-between h-full w-full">
                    <div className="w-full flex flex-col items-center">
                      <span className="text-xl font-bold mb-2 font-['Playfair_Display']">0{card.id}</span>
                      <h3 className="text-base font-semibold font-['Playfair_Display'] mb-2">{card.heading}</h3>
                    </div>
                    <img src={card.image} alt={card.heading} className="w-full h-[240px] object-cover mx-auto mt-auto" style={{borderRadius: 0}} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubThree