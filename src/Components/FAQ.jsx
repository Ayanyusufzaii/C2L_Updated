import React, { useState } from 'react'

function Faq() {
  const faqItems = [
    {
      id: 1,
      question: 'What’s the difference between mass tort, class action, and personal injury claims?',
      answer: 'Mass torts involve many individual claims about the same product or harm (like defective drugs). Class actions group many people into one legal case with shared claims (like privacy breaches). Personal injury claims usually involve individual accidents or negligence (like truck crashes or workplace injuries).',
      category: 'law',
      expanded: false
    },
    {
      id: 2,
      question: 'How do I know if I qualify for a legal claim?',
      answer: "If you've been injured, exposed to a harmful product, or impacted by company misconduct, you may be eligible. Each case is different, so it's best to request a free case review to assess your situation.",
      category: 'law',
      expanded: false
    },
    {
      id: 3,
      question: 'Do I need to go to court to receive compensation?',
      answer: 'Not usually. Most mass tort, personal injury, and class action claims are settled out of court. If your case qualifies, legal experts will handle the process and keep you informed.',
      category: 'law',
      expanded: false
    },
    {
      id: 4,
      question: 'How much does it cost to file a Claim? ',
      answer: 'Most cases operate on a "no win, no fee" basis. That means you won’t pay anything unless compensation is recovered.',
      category: 'law',
      expanded: false
    },
    {
      id: 5,
      question: 'What happens after I submit my case for review? ',
      answer: "You'll be connected with legal professionals who will review your details, confirm your eligibility, and explain your options for moving forward all at no obligation.",
      category: 'law',
      expanded: false
    }
    ,
    {
      id: 6,
      question: 'What documents will we need to submit?',
      answer: 'A legal expert will walk you through this, but it usually includes medical records, diagnosis reports, and any employment or exposure history available.',
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
            <div className="lg:w-1/3 flex items-center lg:justify-center" style={{height: '100%'}}>
              <h2
                className="text-[#C09F53] font-[playfairDisplay] text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[120px] font-extrabold leading-tight lg:leading-normal text-center lg:text-center mb-4 lg:mb-0 flex items-center justify-center h-full"
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

export default Faq