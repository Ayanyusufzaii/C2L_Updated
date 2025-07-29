import React from 'react'
import "./SubThree.css"

function PIThree() {
    return (
        <div>
            {/* Desktop Version */}
            <div className="hidden md:block">
                <div className="flex items-start gap-64 p-32">
                    <div className="mt-[25%]">
                        <h1 className="text-[#023437] font-['Playfair_Display'] text-[96px] font-extrabold italic leading-[100px] w-[512px]">See how we can help</h1>
                    </div>
                    <div className="mt-[25%]">
                        <h4 className="text-[#023437] text-left font-sans text-2xl font-bold normal-case mb-4">
                            How We Help
                        </h4>
                        <p className="text-[#023437] font-sans text-2xl font-semibold leading-normal w-[450px]">
                        At Connect2Lawyer, our network of personal injury experts works with victims of truck accidents across Australia. We aim to simplify the legal process during a difficult time.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-8 max-w-7xl mx-auto h-auto mb-16 ">
                    {[1, 2, 3, 4].map((item) => (
                        <div 
                            key={item} 
                            className="h-[360px] w-[300px]  flex-shrink-0 bg-[#023437] text-white rounded-lg flex flex-col justify-center text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <span className="text-xl font-bold mb-4 font-['Playfair_Display'] mt-[-20%]" >0{item}</span>
                            <h3 className="text-xl font-semibold mb-4 font-['Playfair_Display']">
                                {item === 1 ? 'Understand Your Case' : 
                                 item === 2 ? 'Identify Compensation Avenues' : 
                                 item === 3 ? 'Simplify Legal Next Steps' : 
                                 'Support from Start to Finish'}
                            </h3>
                            <p className=" px-4 ">
                                {item === 1 ? 'We listen to your story and help assess the accident’s impact physically, emotionally, and financially.' : 
                                 item === 2 ? 'We explain potential compensation options, including medical costs, vehicle damage, lost income, and long-term care.' : 
                                 item === 3 ? 'From gathering evidence to initiating claims, legal experts handle heavy lifting so you can focus on healing.' : 
                                 "You’re not alone, we offer compassionate guidance every step of the way."}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Version */}
            <div className="md:hidden p-6">
                <div className="mb-12">
                    <h1 className="text-[#023437] font-['Playfair_Display'] text-5xl font-extrabold italic leading-tight mb-6">
                        See how we can help
                    </h1>
                    <div className="mb-8">
                        <h4 className="text-[#023437] text-left font-sans text-xl font-bold normal-case mb-3">
                            How We Help
                        </h4>
                        <p className="text-[#023437] font-sans text-lg font-semibold leading-normal">
                        At Connect2Lawyer, our network of personal injury experts works with victims of truck accidents across Australia. We aim to simplify the legal process during a difficult time.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-[#023437] text-white rounded-lg p-6 h-auto">
                            <span className="text-3xl font-bold mb-3 block font-['Playfair_Display']">0{item}</span>
                            <h3 className="text-xl font-semibold mb-3 font-['Playfair_Display']">
                                {item === 1 ? 'Understand Your Case' : 
                                 item === 2 ? 'Identify Compensation Avenues' : 
                                 item === 3 ? 'Simplify Legal Next Steps' : 
                                 'Support from Start to Finish'}
                            </h3>
                            <p className="text-base font-['Playfair_Display']">
                                {item === 1 ? 'We listen to your story and help assess the accident’s impact physically, emotionally, and financially.' : 
                                 item === 2 ? 'We explain potential compensation options, including medical costs, vehicle damage, lost income, and long-term care.' : 
                                 item === 3 ? 'From gathering evidence to initiating claims, legal experts handle heavy lifting so you can focus on healing.' : 
                                 "You’re not alone, we offer compassionate guidance every step of the way"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PIThree