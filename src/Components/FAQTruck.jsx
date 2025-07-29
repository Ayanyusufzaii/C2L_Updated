import React, { useState } from 'react'

function FaqTruck() {
  const faqItems = [
    {
      id: 1,
      question: 'What kind of compensation is available for truck accident victims?',
      answer: 'You may receive support for medical expenses, lost income, property damage, rehabilitation, and emotional trauma.',
      category: 'law',
      expanded: false
    },
    {
      id: 2,
      question: 'Can I still claim if the accident was months ago?',
      answer: 'Yes, each state has time limits (usually 3 years). Acting early ensures stronger evidence and better outcomes.',
      category: 'law',
      expanded: false
    },
    {
      id: 3,
      question: 'What if I was partially at fault?',
      answer: 'You may still be eligible. Legal experts can help assess the situation and determine comparative liability.',
      category: 'law',
      expanded: false
    },
    {
      id: 4,
      question: 'Can family members of deceased victims file a claim?',
      answer: 'Yes. If a loved one has passed away due to a truck accident, you may be entitled to compensation through a dependency or wrongful death claim.',
      category: 'law',
      expanded: false
    },
    {
      id: 5,
      question: 'Do I need to go to court?',
      answer: 'Not necessarily. Many claims are settled out of court. The legal experts we connect you with will explain the best course of action.',
      category: 'law',
      expanded: false
    }
    ,
    {
      id: 6,
      question: "What if I don't have all the documents yet?",
      answer: "That’s okay. The legal expert we connect you with can help you gather necessary reports, evidence, and paperwork even if the accident happened months ago.",
      category: 'law',
      expanded: false
    }
  ];

  // State management
  const [selectedCategory, setSelectedCategory] = useState('law');
  const [expandedItems, setExpandedItems] = useState(
    faqItems.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {})
  );

  // Toggle FAQ item expansion
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter FAQ items by selected category
  const filteredItems = selectedCategory
    ? faqItems.filter(item => item.category === selectedCategory)
    : faqItems;

  return (
    <section className="py-1 bg-[#023437] font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Title Section - Moves to top on mobile */}
            <div className="lg:w-1/3">
              <h2
                className="text-[#C09F53] font-georgia italic text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[120px] font-normal leading-tight lg:leading-normal text-left mb-4 lg:mb-0"
                style={{ fontFeatureSettings: "'dlig' on" }}
              >
                FAQ
              </h2>
              <p
                className="text-white text-lg sm:text-xl font-semibold leading-normal mb-6 lg:mb-0"
                style={{ fontFamily: '"Open Sans", sans-serif' }}
              >
                Need Clarity?<br />
                We've Got You Covered.
              </p>
            </div>

            {/* FAQ Items Section */}
            <div className="lg:w-2/3">
              <div className="bg-[#023437] rounded-lg lg:rounded-xl w-full">
                <div className="relative z-10">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <div key={item.id} className={`py-3 sm:py-4 ${expandedItems[item.id] ? 'expanded' : ''}`}>
                        {index > 0 && <div className="h-px bg-[#ffffff] opacity-20 my-2 sm:my-3"></div>}
                        <div 
                          className="flex items-start cursor-pointer" 
                          onClick={() => toggleItem(item.id)}
                        >
                          <button
                            className={`w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 p-0 mr-3 sm:mr-4 transition-all duration-200 ${expandedItems[item.id] ? 'rotate-0' : ''}`}
                            aria-label="Toggle answer"
                          >
                            <div className="relative w-6 h-6 sm:w-8 sm:h-8 block">
                              <span
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-6 sm:h-8 bg-[#C09F53] transition-opacity duration-200"
                                style={{ opacity: expandedItems[item.id] ? 0 : 1 }}
                              ></span>
                              <span className="absolute top-1/2 left-0 -translate-y-1/2 w-6 sm:w-8 h-1 bg-[#C09F53]"></span>
                            </div>
                          </button>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                              {item.question}
                            </h3>
                            {expandedItems[item.id] && (
                              <div className="pt-3 sm:pt-4 animate-fadeIn">
                                <p className="text-base sm:text-lg text-white opacity-80 leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-10 text-center">
                      <p className="text-lg sm:text-xl text-gray-500">No questions found for this category.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqTruck