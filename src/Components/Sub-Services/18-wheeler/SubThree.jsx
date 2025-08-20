import React, { useState } from 'react'
import "./SubThree.css"
import card1 from '../../../assets/searchimg.png'
import card2 from '../../../assets/ridesharecomp.png'  
import card3 from '../../../assets/simplifyprocessimg.png'
import card4 from '../../../assets/dedicatedimg.png'

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
      <div className="hidden lg:block  px-2 sm:px-6 md:px-10">
 <div className="flex flex-row items-stretch gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-16 mt-16">
  {/* LEFT SIDE */}
  <div className="flex-1 flex items-start">
    <h1 className="text-[#023437] font-['Playfair_Display'] font-extrabold leading-tight
                   text-4xl md:text-5xl lg:text-[80px] xl:text-[100px] 2xl:text-[120px]">
      See how we <span className="block text-[#C09F53]">can help</span>
    </h1>
  </div>

  {/* RIGHT SIDE - Smaller + bottom-aligned */}
  <div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] flex flex-col justify-end">
    <div className="mt-auto">
      <h4 className="text-[#C09F53] font-opensans  text-sm md:text-base lg:text-lg font-bold mb-2">
        How We Help
      </h4>
      <p className="text-[#023437] font-opensans  text-xs md:text-sm lg:text-base font-medium leading-normal">
       At Connect2Lawyer, our experienced Mesothelioma Lawyers are dedicated to guiding you every step of the way.
      </p>
    </div>
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
                      <p className="px-2 md:px-3 lg:px-4 text-xs md:text-[11px] lg:text-sm font-opensans  mt-2 md:mt-4 lg:mt-6 break-words w-full text-center leading-snug overflow-y-auto"
                        style={{maxHeight: '150px', minHeight: '60px', whiteSpace: 'normal'}}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center w-full mt-6 justify-between h-full">
                    <div className="w-full flex flex-col items-left ml-8">
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
         <h1 className="text-[#023437] font-['Playfair_Display'] font-extrabold leading-tight mb-6 
               text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
  See how we <br />
  <span className="text-[#C09F53]">can help</span>
</h1>

          <div className="mb-8">
            <h4 className="text-[#C09F53] text-left font-opensans  text-xl font-bold normal-case mb-3">
              How We Help
            </h4>
            <p className="text-[#023437] font-opensans  text-lg font-semibold leading-normal">
         At Connect2Lawyer, our experienced Mesothelioma Lawyers are dedicated to guiding you every step of the way.
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