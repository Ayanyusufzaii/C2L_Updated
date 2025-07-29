import React, { useState } from 'react'

function FaqClassAction() {
  const faqItems = [
    {
      id: 1,
      question: 'Why should I hire a mesothelioma lawyer?',
      answer: 'A mesothelioma lawyer specializes in asbestos cases, understands complex laws, and helps secure maximum compensation while guiding you through the legal process.',
      category: 'law',
      expanded: false
    },
    {
      id: 2,
      question: 'What compensation can I receive?',
      answer: 'Victims may be entitled to medical expenses, lost wages, pain and suffering, and punitive damages. Compensation can come from lawsuits, asbestos trust funds, or veterans’ benefits.',
      category: 'law',
      expanded: false
    },
    {
      id: 3,
      question: 'How long does a lawsuit take?',
      answer: 'Settlements typically conclude within 12 to 18 months, while trial verdicts may take longer depending on the case complexity.',
      category: 'law',
      expanded: false
    },
    {
      id: 4,
      question: 'How can Connect2Lawyer assist me in a mesothelioma lawsuit?',
      answer: 'We connect you with experienced legal teams, guide you through every step, and work to secure the best possible compensation for your case.',
      category: 'law',
      expanded: false
    },
    {
      id: 5,
      question: 'How much does it cost to initiate a mesothelioma lawsuit with Connect2Lawyer?',
      answer: 'Our No Win No Fee policy means you pay nothing unless we win your case, making legal help accessible without upfront costs.',
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
            <div className="lg:w-1/3 flex flex-col justify-centre">
              <h2
                className="text-[#C09F53] font-['Playfair_Display'] italic text-[64px] sm:text-[80px] md:text-[100px] lg:text-[110px] xl:text-[128px] font-normal leading-tight lg:leading-normal text-left mb-0 mt-16 lg:mt-32"
                style={{ fontFeatureSettings: "'dlig' on" }}
              >
                FAQs
              </h2>
            </div>

            {/* FAQ Items Section */}
            <div className="lg:w-2/3">
              <div className="bg-[#023437] rounded-lg lg:rounded-xl w-full">
                <div className="relative z-10">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <div key={item.id} className={`py-3 sm:py-4 ${expandedItems[item.id] ? 'expanded' : ''}`}>
                        {index > 0 && <div className="h-px bg-[#ffffff] opacity-80 my-2 sm:my-3"></div>}
                        <div 
                          className="flex items-start cursor-pointer justify-between" 
                          onClick={() => toggleItem(item.id)}
                        >
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#ffffff]">
                              {item.question}
                            </h3>
                            {expandedItems[item.id] && (
                              <div className="pt-3 sm:pt-4 animate-fadeIn">
                                <p className="text-base sm:text-lg text-[#ffffff] opacity-80 leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                          <button
                            className={`w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 p-0 ml-3 sm:ml-4 transition-all duration-200 border-2 border-[#ffffff] rounded-full flex items-center justify-center`}
                            aria-label="Toggle answer"
                          >
                            <div className="relative w-3 h-3 sm:w-4 sm:h-4 block">
                              <span
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 sm:h-4 bg-[#ffffff] transition-opacity duration-200"
                                style={{ opacity: expandedItems[item.id] ? 0 : 1 }}
                              ></span>
                              <span className="absolute top-1/2 left-0 -translate-y-1/2 w-3 sm:w-4 h-0.5 bg-[#ffffff]"></span>
                            </div>
                          </button>
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

export default FaqClassAction