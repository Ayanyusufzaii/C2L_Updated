import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Frame from '../../src/assets/LogoNavbar.png';
import frame1 from '../../src/assets/logoo.png';
import SearchbarIcon from '../../src/assets/searchlogo.png';
import callIcon from '../../src/assets/calllogoheader.png';
import SearchbarIcon1 from '../../src/assets/MobileSearch.png';
import locationIcon from '../../src/assets/locationlogo.png';
import closeIcon from '../../src/assets/logoo.png';


const regions = [
  'New South Wales',
  'Queensland',
  'South Australia',
  'Tasmania',
  'Victoria',
  'Western Australia',
  'Australian Capital Territory',
  'Northern Territory'
];

const menuLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/Service' },
  { name: 'About Us', path: '/About' },
  { name: 'Contact Us', path: '/ContactUs' }
];

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRegion, setSelectedRegion] = useState('Select Region');
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [showFullNavbar, setShowFullNavbar] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowFullNavbar(currentScroll < 80 || currentScroll < lastScrollY);
      lastScrollY = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // Hamburger Icon Component
  
  const HamburgerIcon = ({ isOpen, onClick }) => (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
    >
      <span
        className={`w-6 h-0.5 bg-[#023437] transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-[#023437] transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-[#023437] transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );

  // Mobile Menu Overlay
  const MobileMenu = () => (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Menu Panel - Full Screen */}
      <div className="absolute right-0 top-0 h-full w-full bg-white shadow-lg">
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <img src={frame1} alt="Logo" className="h-10" />
          <button onClick={() => setMobileMenuOpen(false)} className="p-2">
            <svg className="w-8 h-8 text-[#023437]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-6 flex flex-col justify-center h-[calc(100vh-120px)]">
          {menuLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-center px-6 py-4 rounded-lg text-2xl font-semibold transition-all duration-200 ${
                isActive(item.path) 
                  ? 'text-[#023437] bg-gray-100 font-extrabold' 
                  : 'text-gray-600 hover:text-[#C09F53] hover:bg-gray-50'
              }`}
            >
              {item.name}
            </button>
          ))}
          
          {/* Free Consultation Button in Mobile Menu */}
          <button
            onClick={() => {
              navigate('/ContactUs');
              setMobileMenuOpen(false);
            }}
            className="w-full bg-[#C09F53] text-white px-6 py-4 rounded-full text-xl font-semibold mt-8 hover:bg-[#a88a47] transition-colors duration-200"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Overlay */}
      <MobileMenu />

      {/* Sticky Floating Logo Nav When Scrolled */}
      {!showFullNavbar && (
        <div className="fixed top-0 w-full bg-white shadow-md z-50 transition-transform duration-500 ease-in-out">
          {/* Desktop Collapsed Nav */}
          <div className="hidden md:flex items-center justify-between px-4 py-2">
            {/* Left Section: Logo + Region Selector */}
            <div className="flex items-center gap-4">
              <img
                src={frame1}
                alt="Logo"
                className="w-88 h-10 cursor-pointer"
                onClick={() => navigate('/')}
              />
              <div className="relative">
                <button
                  onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                  className="flex items-center gap-2 border border-[#023437] px-4 py-2 rounded-full text-sm font-bold text-[#023437] hover:bg-gray-100"
                >
                  <img src={locationIcon} alt="loc" className="w-6 h-6" />
                  {selectedRegion}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {regionDropdownOpen && (
                  <div className="absolute top-12 left-0 w-48 bg-white border border-[#023437] rounded-lg shadow-md z-10">
                    {regions.map((region) => (
                      <div
                        key={region}
                        onClick={() => {
                          setSelectedRegion(region);
                          setRegionDropdownOpen(false);
                          navigate(`/region/${region.replace(/\s+/g, '-')}`);
                        }}
                        className="px-4 py-2 text-sm text-[#023437] hover:bg-[#C09F53] hover:text-white cursor-pointer"
                      >
                        {region}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Center Section: Menu Links */}
            <div className="flex flex-wrap gap-12 justify-center">
              {menuLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`text-sm font-semibold ${
                    isActive(item.path) ? 'text-[#023437] font-extrabold' : 'text-gray-500 hover:text-[#C09F53]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right Section: Search */}
            <div className="relative">
              {searchActive ? (
                <div className="fixed top-0 left-0 w-full h-16 bg-white z-50 flex items-center justify-between px-4">
                  <img src={frame1} alt="Logo" className="h-10" />
                  <input
                    type="text"
                    placeholder="I'm searching for..."
                    className="flex-1 mx-4 px-4 py-2 border border-[#023437] rounded-full text-sm focus:outline-none"
                    autoFocus
                  />
                  <img
                    src={closeIcon}
                    alt="Close"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setSearchActive(false)}
                  />
                </div>
              ) : (
                <img
                  src={SearchbarIcon}
                  alt="Search"
                  className="w-30 h-10 cursor-pointer"
                  onClick={() => setSearchActive(true)}
                />
              )}
            </div>
          </div>

          {/* Mobile Collapsed Nav */}
          <div className="md:hidden flex items-center justify-between px-4 py-2">
            <img
              src={frame1}
              alt="Logo"
              className="h-8 cursor-pointer"
              onClick={() => navigate('/')}
            />
            
            <div className="flex items-center gap-3">
              {/* Region Selector Capsule */}
              <div className="relative">
                <button
                  onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                  className="flex items-center gap-2 border border-[#023437] px-3 py-1.5 rounded-full text-xs font-bold text-[#023437] hover:bg-gray-100"
                >
                  <img src={locationIcon} alt="loc" className="w-4 h-4" />
                  <span className="hidden xs:inline truncate max-w-20">{selectedRegion}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {regionDropdownOpen && (
                  <div className="absolute top-8 right-0 w-48 bg-white border border-[#023437] rounded-lg shadow-md z-10">
                    {regions.map((region) => (
                      <div
                        key={region}
                        onClick={() => {
                          setSelectedRegion(region);
                          setRegionDropdownOpen(false);
                          navigate(`/region/${region.replace(/\s+/g, '-')}`);
                        }}
                        className="px-4 py-2 text-sm text-[#023437] hover:bg-[#C09F53] hover:text-white cursor-pointer"
                      >
                        {region}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Icon */}
              <img
                src={SearchbarIcon}
                alt="Search"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setSearchActive(true)}
              />

              {/* Hamburger Menu */}
              <HamburgerIcon 
                isOpen={mobileMenuOpen} 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              />
            </div>
          </div>
        </div>
      )}

      {/* Full NavBar */}
      <div className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${showFullNavbar ? 'top-0' : '-top-[200px]'} bg-white shadow-md`}>
        {/* Desktop Full Navbar */}
        <div className="hidden md:block">
          {/* Top Section */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-gray-200">
            <img
              src={Frame}
              alt="Logo"
              className="w-88 h-10 cursor-pointer"
              onClick={() => navigate('/')}
            />

            {/* Combine Call and Button in One Flex Container */}
            <div className="flex items-center gap-2">
              {/* Call Capsule */}
              <div className="flex items-center gap-2 border border-white bg-white px-3 py-1 rounded-full">
                <img src={callIcon} alt="Call" className="h-8" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#023437]">Toll Free Number</span>
                  <span className="text-xs font-bold text-[#023437]">+61 470 695 167</span>
                </div>
              </div>

              {/* Free Consultation Button */}
              <button
                onClick={() => navigate('/ContactUs')}
                className="bg-[#C09F53] text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                <div className="flex items-center gap-2">
                  Free Consultation
                </div>
              </button>
            </div>
          </div>

          {/* Bottom Nav Section */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-2">
            {/* Select Region with hover */}
            <div className="relative group">
              <div className="flex items-center gap-2 border border-[#023437] px-4 py-2 rounded-full text-sm font-bold text-[#023437] hover:bg-gray-100 cursor-pointer">
                <img src={locationIcon} alt="loc" className="w-6 h-6 m-0 p-0" />
                {selectedRegion}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dropdown on hover */}
              <div className="absolute top-12 left-0 w-48 bg-white border border-[#023437] rounded-lg shadow-md z-10 hidden group-hover:block">
                {regions.map((region) => (
                  <div
                    key={region}
                    onClick={() => {
                      setSelectedRegion(region);
                      navigate(`/region/${region.replace(/\s+/g, '-')}`);
                    }}
                    className="px-4 py-2 text-sm text-[#023437] hover:bg-[#C09F53] hover:text-white cursor-pointer"
                  >
                    {region}
                  </div>
                ))}
              </div>
            </div>

            {/* Menu Links - with more spacing */}
            <div className="flex flex-wrap gap-12 justify-center md:justify-start">
              {menuLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`text-sm font-semibold ${
                    isActive(item.path) ? 'text-[#023437] font-extrabold' : 'text-gray-500 hover:text-[#C09F53]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Search Capsule */}
            <div className="relative">
              {searchActive ? (
                <div className="fixed top-0 left-0 w-full h-16 bg-white z-50 flex items-center justify-between px-4">
                  <img src={frame1} alt="Logo" className="h-10" />
                  <input
                    type="text"
                    placeholder="I'm searching for..."
                    className="flex-1 mx-4 px-4 py-2 border border-[#023437] rounded-full text-sm focus:outline-none"
                    autoFocus
                  />
                  <img
                    src={closeIcon}
                    alt="Close"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setSearchActive(false)}
                  />
                </div>
              ) : (
                <img
                  src={SearchbarIcon}
                  alt="Search"
                  className="w-30 h-10 cursor-pointer"
                  onClick={() => setSearchActive(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Full Navbar */}
        <div className="md:hidden">
          {/* Mobile Top Section */}
          <div className="flex items-center justify-between px-4 py-3">
            <img
              src={Frame}
              alt="Logo"
              className="h-5 cursor-pointer"
              onClick={() => navigate('/')}
            />

            <div className="flex items-center gap-3">
              {/* Call Icon Only (no text) */}
              <img src={callIcon} alt="Call" className="h-7" />

              {/* Hamburger Menu */}
              <HamburgerIcon 
                isOpen={mobileMenuOpen} 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              />
            </div>
          </div>

          {/* Mobile Region Section */}
          <div className="px-4 pb-3">
            <div className="flex items-center justify-between">
              {/* Region Selector on Left */}
              <div className="relative flex-1 mr-4">
                <button
                  onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                  className="flex items-center justify-between gap-2 border border-[#023437] px-4 py-2 rounded-full text-sm font-bold text-[#023437] hover:bg-gray-100 w-full"
                >
                  <div className="flex items-center gap-2">
                    <img src={locationIcon} alt="loc" className="w-5 h-5" />
                    <span className="truncate">{selectedRegion}</span>
                  </div>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {regionDropdownOpen && (
                  <div className="absolute top-12 left-0 right-0 bg-white border border-[#023437] rounded-lg shadow-md z-10">
                    {regions.map((region) => (
                      <div
                        key={region}
                        onClick={() => {
                          setSelectedRegion(region);
                          setRegionDropdownOpen(false);
                          navigate(`/region/${region.replace(/\s+/g, '-')}`);
                        }}
                        className="px-4 py-2 text-sm text-[#023437] hover:bg-[#C09F53] hover:text-white cursor-pointer"
                      >
                        {region}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Icon on Right */}
              <img
                src={SearchbarIcon1}
                alt="Search"
                className="w-10 h-10 cursor-pointer flex-shrink-0"
                onClick={() => setSearchActive(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {searchActive && (
        
        <div className="fixed top-0 left-0 w-full h-16 bg-white z-50 flex items-center justify-between px-4">
          <img src={frame1} alt="Logo" className="h-8" />
          <input
            type="text"
            placeholder="I'm searching for..."
            className="flex-1 mx-4 px-4 py-2 border border-[#023437] rounded-full text-sm focus:outline-none"
            autoFocus
          />
          <button onClick={() => setSearchActive(false)}>
            <svg className="w-6 h-6 text-[#023437]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;




































































































// import React, { useState, useRef } from 'react';
// import Frame from "../../src/assets/logoo.png";
// import Searchbar from "../../src/assets/Group 39.png";
// import navicon from "../../src/assets/navicon.png";
// import { Facebook, Instagram, Linkedin } from 'lucide-react';
// import logoo from "../../src/assets/logoo.png";
// import call from "../../src/assets/call.png";
// import { useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from "framer-motion";
// import twitter from "../assets/twitter.png"
// import Frame7 from "../assets/Frame 7.png"


// const NavBar = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isStatesDropdownOpen, setIsStatesDropdownOpen] = useState(false);
//     const [selectedRegion, setSelectedRegion] = useState('Select Region');
//     const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);

//     const australianStates = [
//         'New South Wales',
//         'Queensland',
//         'South Australia',
//         'Tasmania',
//         'Victoria',
//         'Western Australia',
//         'Australian Capital Territory',
//         'Northern Territory'
//     ];
//     const targetRef = useRef(null);

//     const handleConsultationClick = () => {
//         navigate('/ContactUs');
//     };

//     const menuItems = [
//         { name: 'Home', path: '/' },
//         {
//             name: 'Services',
//             path: '/Service',

//         },
//         // { name: 'Sub Services', path: '/SubService' },
//         { name: 'About Us', path: '/About' },
//         { name: 'Contact', path: '/ContactUs' },
//         // { name: 'Masstort', path: '/Masstort' }
//     ];

//     return (
//         <>


//             {/* Desktop & Tablet Header */}
//             <div className="fixed top-0 left-0 w-full bg-[#FFFFFF] z-[1000] hidden md:block shadow-sm">
//               <div className="flex items-center justify-between py-3 w-full">
//                 {/* Left group: logo, dropdown, phone */}
//                 <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 min-w-0">
//                   <div className="flex-shrink-0 pl-2 md:pl-4 lg:pl-6 xl:pl-8">
//                     <img
//                       src={Frame}
//                       alt="Logo"
//                       className="w-[44px] md:w-[56px] lg:w-[64px] xl:w-[72px] 2xl:w-[80px] h-[44px] md:h-[56px] lg:h-[64px] xl:h-[72px] 2xl:h-[80px] object-contain rounded-full cursor-pointer transition-all duration-300"
//                       onClick={() => navigate('/')}
//                     />
//                   </div>
//                   {/* Region Dropdown */}
//                   <div className="relative dropdown-container">
//                     <button
//                       onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
//                       className="flex items-center px-4 py-2 border border-[#023437] rounded-full text-[#023437] bg-[#FFFFFF] hover:bg-gray-100 transition-colors text-xs md:text-sm font-bold min-w-[120px]"
//                     >
//                       <span className="truncate">{selectedRegion}</span>
//                       <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
//                     </button>
//                     {isRegionDropdownOpen && (
//                       <div className="absolute left-0 mt-2 w-full bg-[#FFFFFF] border border-[#023437] rounded-lg shadow-lg z-50">
//                         {australianStates.map((state) => (
//                           <button
//                             key={state}
//                             onClick={() => {
//                               setSelectedRegion(state);
//                               setIsRegionDropdownOpen(false);
//                             }}
//                             className="w-full text-left px-4 py-2 text-xs text-[#023437] hover:bg-[#C09F53] hover:text-white first:rounded-t-lg last:rounded-b-lg font-bold"
//                           >
//                             {state}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                   {/* Phone Icon with circle border, dark icon and border, light bg */}
//                   <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border border-[#023437] rounded-full bg-[#FFFFFF] flex-shrink-0">
//                     <svg className="w-4 h-4 md:w-5 md:h-5 text-[#023437]" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.05.73 3a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.95.36 1.95.6 3 .73A2 2 0 0 1 22 16.92z" />
//                     </svg>
//                   </span>
//                   {/* Phone Number with Toll Free label - hidden on md (tablet) and below */}
//                   <div className="flex flex-col items-start ml-1 min-w-[110px] max-w-[150px] md:max-w-[180px] lg:max-w-[220px] xl:max-w-[260px] w-full hidden lg:flex">
//                     <span className="text-xs text-[#023437] font-normal leading-tight mb-0.5">Toll Free Number</span>
//                     <span className="text-[#023437] font-bold text-xs md:text-sm lg:text-base select-none truncate">+61 470 695 167</span>
//                   </div>
//                 </div>
//                 {/* Right group: gap, search, consultation, menu */}
//                 <div className="flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 ml-auto">
//                   <img
//                     src={Searchbar}
//                     alt="Search"
//                     className="w- h-9 md:w-11 md:h-11"
//                   />
//                   <button
//                     className="flex items-center justify-center bg-[#C09F53] rounded-full px-4 md:px-6 py-2 md:py-3 text-white text-sm md:text-base font-bold border border-white"
//                     onClick={handleConsultationClick}
//                   >
//                     Free Consultation
//                   </button>
//                   <button
//                     className="flex items-center justify-center rounded-full border border-[#023437] text-[#023437] text-sm md:text-base font-bold px-5 md:px-7 py-2 md:py-3"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   >
//                     {isMenuOpen ? 'Close' : 'Menu'}
//                   </button>
//                   {/* Invisible Scroll Target */}
//                   <div ref={targetRef}></div>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Header */}
//             <div className="fixed top-0 left-0 w-full bg-white md:hidden z-[1000]">
//                 <div className="flex items-center justify-between px-3 py-3">
//                     <img
//                         src={logoo}
//                         alt="Logo"
//                         className="w-[70px] h-[40px]"
//                     />
//                     <div className="flex items-center gap-2">
//                         <img
//                             src={call}
//                             alt="Call"
//                             className="w-[40px] h-[40px]"
//                         />
//                         <button
//                             className="rounded-full border border-[#023437] text-[#023437] font-sans text-xs font-bold cursor-pointer px-3 py-2"
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         >
//                             {isMenuOpen ? 'Close' : 'Menu'}
//                         </button>
//                     </div>
//                 </div>
//                 {/* Region Dropdown below header with search icon */}
//                 <div className="flex items-center justify-between px-3 pb-2 pt-1">
//                   <div className="relative dropdown-container w-full max-w-[620px]">
//                     <button
//                       onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
//                       className="flex items-center justify-between px-2 py-2 border border-[#023437] rounded-full text-[#023437] bg-white hover:bg-gray-50 transition-colors text-xs font-bold w-full"
//                     >
//                       {/* Location icon inside tile, leftmost, with circle border */}
//                       <span className="flex items-center justify-center w-7 h-7 border border-[#023437] rounded-full mr-2">
//                         <svg className="w-4 h-4 text-[#023437]" fill="#023437" viewBox="0 0 24 24">
//                           <circle cx="12" cy="10" r="3" fill="#FFFFFF"/>
//                           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#023437"/>
//                         </svg>
//                       </span>
//                       <span className="truncate flex-1 text-left">{selectedRegion}</span>
//                       <svg className="ml-2 w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
//                     </button>
//                     {isRegionDropdownOpen && (
//                       <div className="absolute left-0 mt-2 w-full bg-white border border-[#023437] rounded-lg shadow-lg z-50">
//                         {australianStates.map((state) => (
//                           <button
//                             key={state}
//                             onClick={() => {
//                               setSelectedRegion(state);
//                               setIsRegionDropdownOpen(false);
//                             }}
//                             className="w-full text-left px-4 py-2 text-xs text-[#023437] hover:bg-[#C09F53] hover:text-white first:rounded-t-lg last:rounded-b-lg font-bold"
//                           >
//                             {state}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                   <img
//                     src={Searchbar}
//                     alt="Search"
//                     className="w-11 h-11 ml-2"
//                   />
//                 </div>
//             </div>

//             <AnimatePresence>
//                 {isMenuOpen && (
//                     <>
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
//                             onClick={() => setIsMenuOpen(false)}
//                             key="overlay"
//                         />

//                         {/* Side Panel */}
//                         <motion.div
//                             initial={{ x: "100%" }}
//                             animate={{ x: 0 }}
//                             exit={{ x: "100%" }}
//                             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//                             className="fixed top-0 right-0 h-full w-full md:w-1/3 lg:w-1/4 bg-white shadow-xl z-[1001]"
//                             key="side-panel"
//                         >
//                             {/* Close Button */}
//                             <div
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="flex justify-end p-4"
//                             >
//                                 <button
//                                     onClick={() => setIsMenuOpen(false)}
//                                     className="text-[#023437] font-bold text-lg"
//                                 >
//                                     ✕
//                                 </button>

//                             </div>

//                             {/* Menu Items */}
//                             <div className="flex flex-col p-6 space-y-2">
//                                 {menuItems.map((item, index) => (
//                                     <div className='flex gap-4 mt-10' key={item.name}>
//                                         <img src={navicon} alt='icon' className='w-[45px] h-[45px] mt-3' />
//                                         <motion.button
//                                             initial={{ opacity: 0, x: 20 }}
//                                             animate={{
//                                                 opacity: 1,
//                                                 x: 0,
//                                                 transition: { delay: index * 0.1 }
//                                             }}
//                                             whileHover={{
//                                                 scale: 1.02,
//                                                 color: "#C09F53",
//                                                 paddingLeft: "1rem"
//                                             }}
//                                             whileTap={{ scale: 0.98 }}
//                                             className="text-[#023437] font-['Playfair_Display'] text-3xl font-extrabold py-3 text-left border-b border-gray-100 rounded-lg"
//                                             onClick={() => {
//                                                 navigate(item.path);
//                                                 setIsMenuOpen(false);
//                                             }}
//                                         >
//                                             {item.name}
//                                         </motion.button>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Contact Section */}
//                             <div className="w-full max-w-xs md:max-w-sm flex-shrink-0 border border-white/35 mx-auto text-center pt-3 mt-8 md:mt-0 p-4 md:p-6 bg-white/90 rounded-lg">
//   <div className="gap-2">
//     <p className="text-[#023437] text-center font-['Open_Sans'] text-[22px] md:text-[26px] font-bold not-italic leading-none mt-2 break-words">+61 470 695 167</p>
//     <button className="inline-flex px-[32px] py-[8px] justify-center items-center rounded-[60px] bg-[#C09F53] text-white mt-2">
//       Call Now
//     </button>
//     <div className="flex gap-3 mt-2 justify-center items-center flex-wrap">
//       <div className="flex space-x-4">
//         <div className="rounded-full border border-white p-2">
//           <a href="https://www.facebook.com/profile.php?id=61570446132760" target="_blank" rel="noopener noreferrer" className="block text-black">
//             <Facebook size={18} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} />
//           </a>
//         </div>
//         <div className="rounded-full border border-white p-2">
//           <a href="https://www.instagram.com/connect2lawyer/" target="_blank" rel="noopener noreferrer" className="block text-black">
//             <Instagram size={18} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} />
//           </a>
//         </div>
//         <div className="rounded-full border border-white p-2">
//           <a href="https://www.linkedin.com/company/connect2lawyer/" target="_blank" rel="noopener noreferrer" className="block text-black">
//             <Linkedin size={18} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} />
//           </a>
//         </div>
//         <div className="rounded-full border border-white p-2">
//           <a href="https://x.com/Connect2Lawyer" target="_blank" rel="noopener noreferrer" className="block text-black">
//             <img src={twitter} alt="" className="w-4 h-4" />
//           </a>
//         </div>
//       </div>
//     </div>
//     <p className="w-full text-[#023437] font-['Open_Sans'] text-[14px] md:text-[16px] font-semibold not-italic leading-normal mt-1 break-words">
//       123 Legal Avenue, Suite 456 Justice Tower Sydney, NSW 2000, Australia
//     </p>
//     <div className="flex flex-col items-center mt-2">
//       <span className="text-[#FFFFFF] font-open-sans text-xs font-normal not-italic leading-none">All rights reserved</span>
//       <p className="text-[#FFFFFF] font-open-sans text-xs font-normal not-italic leading-none mt-1">Privacy Policy</p>
//     </div>
//   </div>
// </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default NavBar;