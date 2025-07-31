import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, MapPin } from 'lucide-react';
<<<<<<< HEAD
import bg from "../../assets/1st.jpg";
=======
import bg from "../../assets/HomeHero.png";
>>>>>>> 01d88ce365a0a4a2ac1151d2283b27cf69eed9cd

function LegalHeroSection() {
  const [selectedRegion, setSelectedRegion] = useState('Select Region');
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Choose Your Region');
  const [isMobileMenuOpen] = useState(false);


  const regions = ['New South Wales'];


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsRegionDropdownOpen(false);
        setIsLocationDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <div className="relative w-full bg-[#FFFBF3] overflow-hidden">
      {/* Background Image with Padding */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-full h-full pb-8 sm:pb-0 px-0 pt-0 sm:px-2 sm:pt-3 sm:pb-12 md:px-4 md:pt-5 md:pb-16 lg:px-6 lg:pt-7 lg:pb-20 xl:px-8 xl:pt-9 xl:pb-24 2xl:px-10 2xl:pt-10 2xl:pb-28">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-none"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="w-full h-full bg-black bg-opacity-40 rounded-none"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#FFFBF3] shadow-lg z-40 mx-4 rounded-lg">
          <div className="p-4 space-y-4">
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{selectedRegion}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isRegionDropdownOpen && (
                <div className="mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                  {regions.map((region) => (
                    <button
                      key={region}
                      onClick={() => {
                        setSelectedRegion(region);
                        setIsRegionDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {region}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-700 py-2">
              <Phone className="w-4 h-4" />
              <div className="text-sm">
                <div className="text-xs text-gray-500">Toll Free Number</div>
                <div className="font-semibold">+61 470 695 167</div>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-yellow-600 text-white rounded-full font-medium hover:bg-yellow-700 transition-colors">
              Free Consultation
            </button>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-44 pb-14 lg:pt-52 lg:pb-32">
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
          <h1
            className="font-playfair font-extrabold text-[48px] xs:text-[72px] sm:text-[96px] md:text-[120px] lg:text-[144px] leading-tight sm:leading-[90px] md:leading-[110px] lg:leading-[140px] text-white mb-4 sm:mb-6 text-center sm:text-left"
          >
            Your Case<br />
<<<<<<< HEAD
            Our Priority
=======
            Our <span className='text-[#C09F53]'>Priority</span>
>>>>>>> 01d88ce365a0a4a2ac1151d2283b27cf69eed9cd
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-200 mb-6 sm:mb-8 max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-3xl leading-relaxed text-center sm:text-left">
            We match you with the right legal expertise to ensure your rights are protected and your voice is heard.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#C09F53] text-white rounded-full font-semibold text-base sm:text-lg hover:bg-yellow-700 transition-colors mb-12 sm:mb-16">
              Start Your Free Case Review Now
            </button>
          </div>
        </div>
      </div>

      {/* Location Selection Card */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-6 sm:pb-8 md:pb-10">
        <div className="bg-[#EFE4CB] rounded-none p-4 sm:p-6 lg:p-8 shadow-xl w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <h2
  className="font-playfair text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#023437] mb-3 sm:mb-4 inline-block border-b-4 border-[#C09F53] pb-1"
>
  Select your location
</h2>
          <p className="text-[#023437] mb-4 sm:mb-6 text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed">
           Different laws apply in different states. Please choose your state to view the relevant legal information.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="relative flex-1 max-w-full lg:max-w-md dropdown-container">
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#023437] text-white rounded-lg font-medium hover:bg-teal-800 transition-colors text-sm sm:text-base"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{selectedLocation}</span>
                </div>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              {isLocationDropdownOpen && (
                <div className="absolute top-full mt-2 w-full z-20">
                  <button
                    onClick={() => {
                      setSelectedLocation('New South Wales');
                      setIsLocationDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-[#023437] text-white rounded-lg font-medium text-left text-sm sm:text-base hover:bg-teal-800 transition-colors"
                  >
                    New South Wales
                  </button>
                </div>
              )}
            </div>
            <div className="text-center lg:text-right">
              <button className="text-teal-800 font-medium underline hover:text-teal-900 transition-colors text-sm sm:text-base">
                I am outside of Australia
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-yellow-600 opacity-20 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-teal-600 opacity-30 rounded-full animate-bounce hidden md:block"></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 lg:w-6 lg:h-6 bg-yellow-400 opacity-25 rounded-full animate-ping hidden lg:block"></div>
    </div>
  );
}

export default LegalHeroSection;