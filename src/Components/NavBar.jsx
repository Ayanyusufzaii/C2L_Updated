import React, { useState, useRef } from 'react';
import Frame from "../../src/assets/logoo.png";
import Searchbar from "../../src/assets/Group 39.png";
import navicon from "../../src/assets/navicon.png";
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import logoo from "../../src/assets/logoo.png";
import call from "../../src/assets/call.png";
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import twitter from "../assets/twitter.png"
import Frame7 from "../assets/Frame 7.png"


const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStatesDropdownOpen, setIsStatesDropdownOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('Select Region');
    const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);

    const australianStates = [
        'New South Wales',
        'Queensland',
        'South Australia',
        'Tasmania',
        'Victoria',
        'Western Australia',
        'Australian Capital Territory',
        'Northern Territory'
    ];
    const targetRef = useRef(null);

    const handleConsultationClick = () => {
        navigate('/ContactUs');
    };

    const menuItems = [
        { name: 'Home', path: '/' },
        {
            name: 'Services',
            path: '/Service',

        },
        // { name: 'Sub Services', path: '/SubService' },
        { name: 'About Us', path: '/About' },
        { name: 'Contact', path: '/ContactUs' },
        // { name: 'Masstort', path: '/Masstort' }
    ];

    return (
        <>


            {/* Desktop & Tablet Header */}
            <div className="fixed top-0 left-0 w-full bg-[#FFFBF3] z-[1000] hidden md:block shadow-sm">
              <div className="flex items-center justify-between py-3 w-full">
                {/* Left group: logo, dropdown, phone */}
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 min-w-0">
                  <div className="flex-shrink-0 pl-2 md:pl-4 lg:pl-6 xl:pl-8">
                    <img
                      src={Frame}
                      alt="Logo"
                      className="w-[44px] md:w-[56px] lg:w-[64px] xl:w-[72px] 2xl:w-[80px] h-[44px] md:h-[56px] lg:h-[64px] xl:h-[72px] 2xl:h-[80px] object-contain rounded-full cursor-pointer transition-all duration-300"
                      onClick={() => navigate('/')}
                    />
                  </div>
                  {/* Region Dropdown */}
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                      className="flex items-center px-4 py-2 border border-[#023437] rounded-full text-[#023437] bg-[#FFFBF3] hover:bg-gray-100 transition-colors text-xs md:text-sm font-bold min-w-[120px]"
                    >
                      <span className="truncate">{selectedRegion}</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {isRegionDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-full bg-[#FFFBF3] border border-[#023437] rounded-lg shadow-lg z-50">
                        {australianStates.map((state) => (
                          <button
                            key={state}
                            onClick={() => {
                              setSelectedRegion(state);
                              setIsRegionDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-xs text-[#023437] hover:bg-[#C09F53] hover:text-white first:rounded-t-lg last:rounded-b-lg font-bold"
                          >
                            {state}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Phone Icon with circle border, dark icon and border, light bg */}
                  <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border border-[#023437] rounded-full bg-[#FFFBF3] flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#023437]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.05.73 3a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.95.36 1.95.6 3 .73A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  {/* Phone Number with Toll Free label - hidden on md (tablet) and below */}
                  <div className="flex flex-col items-start ml-1 min-w-[110px] max-w-[150px] md:max-w-[180px] lg:max-w-[220px] xl:max-w-[260px] w-full hidden lg:flex">
                    <span className="text-xs text-[#023437] font-normal leading-tight mb-0.5">Toll Free Number</span>
                    <span className="text-[#023437] font-bold text-xs md:text-sm lg:text-base select-none truncate">+61 470 695 167</span>
                  </div>
                </div>
                {/* Right group: gap, search, consultation, menu */}
                <div className="flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 ml-auto">
                  <img
                    src={Searchbar}
                    alt="Search"
                    className="w- h-9 md:w-11 md:h-11"
                  />
                  <button
                    className="flex items-center justify-center bg-[#C09F53] rounded-full px-4 md:px-6 py-2 md:py-3 text-white text-sm md:text-base font-bold border border-white"
                    onClick={handleConsultationClick}
                  >
                    Free Consultation
                  </button>
                  <button
                    className="flex items-center justify-center rounded-full border border-[#023437] text-[#023437] text-sm md:text-base font-bold px-5 md:px-7 py-2 md:py-3"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? 'Close' : 'Menu'}
                  </button>
                  {/* Invisible Scroll Target */}
                  <div ref={targetRef}></div>
                </div>
              </div>
            </div>

            {/* Mobile Header */}
            <div className="fixed top-0 left-0 w-full bg-white md:hidden z-[1000]">
                <div className="flex items-center justify-between px-3 py-3">
                    <img
                        src={logoo}
                        alt="Logo"
                        className="w-[70px] h-[40px]"
                    />
                    <div className="flex items-center gap-2">
                        <img
                            src={call}
                            alt="Call"
                            className="w-[40px] h-[40px]"
                        />
                        <button
                            className="rounded-full border border-[#023437] text-[#023437] font-sans text-xs font-bold cursor-pointer px-3 py-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </div>
                {/* Region Dropdown below header with search icon */}
                <div className="flex items-center justify-between px-3 pb-2 pt-1">
                  <div className="relative dropdown-container w-full max-w-[620px]">
                    <button
                      onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                      className="flex items-center justify-between px-2 py-2 border border-[#023437] rounded-full text-[#023437] bg-white hover:bg-gray-50 transition-colors text-xs font-bold w-full"
                    >
                      {/* Location icon inside tile, leftmost, with circle border */}
                      <span className="flex items-center justify-center w-7 h-7 border border-[#023437] rounded-full mr-2">
                        <svg className="w-4 h-4 text-[#023437]" fill="#023437" viewBox="0 0 24 24">
                          <circle cx="12" cy="10" r="3" fill="#FFFBF3"/>
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#023437"/>
                        </svg>
                      </span>
                      <span className="truncate flex-1 text-left">{selectedRegion}</span>
                      <svg className="ml-2 w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {isRegionDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-full bg-white border border-[#023437] rounded-lg shadow-lg z-50">
                        {australianStates.map((state) => (
                          <button
                            key={state}
                            onClick={() => {
                              setSelectedRegion(state);
                              setIsRegionDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-xs text-[#023437] hover:bg-[#C09F53] hover:text-white first:rounded-t-lg last:rounded-b-lg font-bold"
                          >
                            {state}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <img
                    src={Searchbar}
                    alt="Search"
                    className="w-11 h-11 ml-2"
                  />
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
                            onClick={() => setIsMenuOpen(false)}
                            key="overlay"
                        />

                        {/* Side Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full md:w-1/3 lg:w-1/4 bg-white shadow-xl z-[1001]"
                            key="side-panel"
                        >
                            {/* Close Button */}
                            <div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex justify-end p-4"
                            >
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-[#023437] font-bold text-lg"
                                >
                                    ✕
                                </button>

                            </div>

                            {/* Menu Items */}
                            <div className="flex flex-col p-6 space-y-2">
                                {menuItems.map((item, index) => (
                                    <div className='flex gap-4 mt-10' key={item.name}>
                                        <img src={navicon} alt='icon' className='w-[45px] h-[45px] mt-3' />
                                        <motion.button
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                                transition: { delay: index * 0.1 }
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                color: "#C09F53",
                                                paddingLeft: "1rem"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            className="text-[#023437] font-['Playfair_Display'] text-3xl font-extrabold py-3 text-left border-b border-gray-100 rounded-lg"
                                            onClick={() => {
                                                navigate(item.path);
                                                setIsMenuOpen(false);
                                            }}
                                        >
                                            {item.name}
                                        </motion.button>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Section */}
                            <div className="w-full max-w-xs md:max-w-sm flex-shrink-0 border border-white/35 mx-auto text-center pt-3 mt-8 md:mt-0 p-4 md:p-6 bg-white/90 rounded-lg">
  <div className="gap-2">
    <p className="text-[#023437] text-center font-['Open_Sans'] text-[22px] md:text-[26px] font-bold not-italic leading-none mt-2 break-words">+61 470 695 167</p>
    <button className="inline-flex px-[32px] py-[8px] justify-center items-center rounded-[60px] bg-[#C09F53] text-white mt-2">
      Call Now
    </button>
    <div className="flex gap-3 mt-2 justify-center items-center flex-wrap">
      <div className="flex space-x-4">
        <div className="rounded-full border border-white p-2">
          <a href="https://www.facebook.com/profile.php?id=61570446132760" target="_blank" rel="noopener noreferrer" className="block text-black">
            <Facebook size={18} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} />
          </a>
        </div>
        <div className="rounded-full border border-white p-2">
          <a href="https://www.instagram.com/connect2lawyer/" target="_blank" rel="noopener noreferrer" className="block text-black">
            <Instagram size={18} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} />
          </a>
        </div>
        <div className="rounded-full border border-white p-2">
          <a href="https://www.linkedin.com/company/connect2lawyer/" target="_blank" rel="noopener noreferrer" className="block text-black">
            <Linkedin size={18} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} />
          </a>
        </div>
        <div className="rounded-full border border-white p-2">
          <a href="https://x.com/Connect2Lawyer" target="_blank" rel="noopener noreferrer" className="block text-black">
            <img src={twitter} alt="" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
    <p className="w-full text-[#023437] font-['Open_Sans'] text-[14px] md:text-[16px] font-semibold not-italic leading-normal mt-1 break-words">
      123 Legal Avenue, Suite 456 Justice Tower Sydney, NSW 2000, Australia
    </p>
    <div className="flex flex-col items-center mt-2">
      <span className="text-[#FFFBF3] font-open-sans text-xs font-normal not-italic leading-none">All rights reserved</span>
      <p className="text-[#FFFBF3] font-open-sans text-xs font-normal not-italic leading-none mt-1">Privacy Policy</p>
    </div>
  </div>
</div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;