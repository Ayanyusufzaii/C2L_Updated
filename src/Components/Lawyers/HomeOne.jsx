import React, { useState } from "react";
import LawyerHero from "../../assets/LawyerHeroDesktop.png";
import LawyerHeroMob from "../../assets/LawyerHeroMobile.png";
import LawyerHeroMob2 from "../../assets/LawyerHeroMob2.png";
import { ChevronDown } from "lucide-react";
import icon1 from "../../assets/lawyericon1.png";
import icon2 from "../../assets/lawyericon2.png";
import icon3 from "../../assets/lawyericon3.png";
import { FaArrowRight } from "react-icons/fa6";

const obj = [
  {
    img: icon1,
    title: "Pre-Qualified Leads",
  },
  {
    img: icon2,
    title: "Network Growth",
  },
  {
    img: icon3,
    title: "Higher Conversions",
  },
];

const HomeOne = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: '',
    privacyConsent: false,
    humanVerification: false
  });

  const [mobileFormData, setMobileFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: '',
    privacyConsent: false,
    humanVerification: false
  });

  const handleInputChange = (e, isMobile = false) => {
    const { name, value, type, checked } = e.target;
    const data = isMobile ? mobileFormData : formData;
    const setData = isMobile ? setMobileFormData : setFormData;
    
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e, isMobile = false) => {
    e.preventDefault();
    const data = isMobile ? mobileFormData : formData;
    
    // Form validation
    if (!data.name || !data.phone || !data.email || !data.concern || !data.privacyConsent || !data.humanVerification) {
      alert('Please fill in all fields and accept the required checkboxes.');
      return;
    }

    // Submit form logic here
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
  };

  const handleJoinNetwork = () => {
    // Handle join network button click
    console.log('Join Network clicked');
  };

  return (
    <>
      {/*  Desktop Version (lg and up) */}
      <section className="hidden lg:flex relative w-full md:min-h-[55vh] lg:min-h-[85vh] xl:min-h-[60vh] items-center justify-center overflow-hidden font-playfair">
        {/* Background Image */}
        <img
          src={LawyerHero}
          alt="Lawyer Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
        />
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/10 z-10" />
        
        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-8 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white max-w-7xl mx-auto">
            
            {/* Left Section */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Join the <span className="text-[#C09F53]">Connect2Lawyer</span> Network
              </h1>
              <p className="text-lg md:text-xl font-opensans opacity-90">
                Get Qualified Leads. Grow Your Practice. Make a Bigger Impact.
              </p>

              {/* Features List - Always in Row */}
              <div className="w-full">
                <div className="flex flex-row flex-wrap items-center gap-x-6 gap-y-3 text-sm md:text-base mb-8 max-w-full">
                  {obj.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-5 h-5 md:w-6 md:h-6 shrink-0" 
                        loading="lazy"
                      />
                      <span className="opacity-90">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap">
                <button 
                  onClick={handleJoinNetwork}
                  className="group bg-[#E8C468] text-[#002729] hover:bg-transparent hover:text-[#E8C468] hover:border-[#E8C468] border border-transparent font-medium font-opensans px-8 py-4 rounded-md transition-all duration-300 ease-in-out flex items-center gap-2 text-base md:text-lg shadow-lg hover:shadow-xl"
                  type="button"
                  aria-label="Join the Connect2Lawyer Network"
                >
                  Join the Network Now
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-[#FFFBF3]/95 backdrop-blur-sm text-[#023437] rounded-xl shadow-2xl p-8 md:p-10 border border-white/20">
              <h2 className="text-[30px] md:text-[32px] font-semibold mb-6 text-center">
                Ready to Grow? Let's Talk
              </h2>
              
              <form className="space-y-5" onSubmit={(e) => handleSubmit(e, false)} noValidate>
                {/* Form Fields */}
                {[
                  { field: "name", type: "text", placeholder: "Name" },
                  { field: "phone", type: "tel", placeholder: "Phone" },
                  { field: "email", type: "email", placeholder: "Email" }
                ].map(({ field, type, placeholder }) => (
                  <div key={field} className="relative">
                    <input
                      type={type}
                      name={field}
                      placeholder={placeholder}
                      value={formData[field]}
                      onChange={(e) => handleInputChange(e, false)}
                      className="w-full border-b-2 border-gray-300 focus:border-[#C09F53] focus:outline-none py-3 placeholder:text-[#023437]/70 font-opensans bg-transparent transition-colors duration-300"
                      required
                      aria-label={placeholder}
                    />
                  </div>
                ))}


<div className="relative w-full">
  <select
    name="concern"
    value={formData.concern}
    onChange={(e) => handleInputChange(e, false)}
    className="w-full border-b-2 border-gray-300 focus:border-[#C09F53] focus:outline-none py-3 pr-10 text-[#023437] font-opensans bg-transparent appearance-none cursor-pointer"
    required
    aria-label="Select your legal concern"
  >
    <option value="" disabled>
      Select your concern
    </option>
    <option value="personal-injury">Personal Injury</option>
    <option value="family-law">Family Law</option>
    <option value="criminal-defense">Criminal Defense</option>
  </select>

  {/* Chevron Icon */}
  <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
    <ChevronDown className="w-4 h-4 text-[#023437]" />
  </span>
</div>


                {/* Privacy Policy Checkbox */}
                <label className="flex items-start text-xs gap-3 leading-relaxed font-opensans">
                  <input 
                    type="checkbox" 
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={(e) => handleInputChange(e, false)}
                    className="mt-1 shrink-0 w-4 h-4 accent-[#C09F53]" 
                    required
                    aria-describedby="privacy-policy-text"
                  />
                  <span id="privacy-policy-text">
                    I agree to the{" "}
                    <a 
                      href="#" 
                      className="underline text-[#C09F53] hover:text-[#C09F53]/80 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a 
                      href="#" 
                      className="underline text-[#C09F53] hover:text-[#C09F53]/80 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      disclaimer
                    </a>{" "}
                    and give my express written consent, affiliates and/or lawyer
                    to contact me via the number provided even if this number is a
                    wireless number or if I am presently listed on a Do Not Call
                    list. I understand that I may be contacted by telephone,
                    email, text message or mail regarding case options and that my
                    call may be recorded and/or monitored. Message & data rates
                    may apply. My consent does not require purchase. This is legal
                    advertising.
                  </span>
                </label>

                {/* Human Verification Checkbox */}
                <label className="flex items-start text-xs gap-3 leading-relaxed font-opensans">
                  <input 
                    type="checkbox" 
                    name="humanVerification"
                    checked={formData.humanVerification}
                    onChange={(e) => handleInputChange(e, false)}
                    className="mt-1 shrink-0 w-4 h-4 accent-[#C09F53]" 
                    required
                    aria-describedby="human-verification-text"
                  />
                  <span id="human-verification-text">
                    Please check this box so we know you're a person and not a
                    computer
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#C09F53] hover:bg-[#C09F53]/90 text-[#023437] font-semibold py-4 rounded-md mt-6 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl text-lg"
                  aria-label="Submit contact form"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version (below md) */}
      <section className="block lg:hidden bg-[#023437] text-white px-6 py-12 font-playfair">
        <div className="space-y-4 text-left">
          <h1 className="text-3xl font-bold leading-snug">
            Join the <span className="text-[#C09F53]">Connect2Lawyer</span> Network
          </h1>
          <p className="text-base font-opensans opacity-90">
            Get Qualified Leads. Grow Your Practice. Make a Bigger Impact.
          </p>
        </div>

        <div className="my-6 -mx-6">
          <img
            src={LawyerHeroMob2}
            alt="Connect2Lawyer Mobile Hero"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>




        <button 
          onClick={handleJoinNetwork}
          className="w-full bg-[#E8C468] text-[#002729] hover:bg-transparent hover:text-[#E8C468] hover:border hover:border-[#E8C468] font-bold font-opensans py-3 rounded flex items-center justify-center gap-2 mb-10 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
          type="button"
          aria-label="Join the Connect2Lawyer Network"
        >
          Join the Network Now <FaArrowRight />
        </button>

        {/* Mobile Contact Form */}
        <div className="bg-[#FFFBF3] text-[#023437] rounded-lg shadow-lg p-6 font-opensans border border-gray-200 ">
          <h2 className="text-[24px] md:text-[34px] font-playfair font-semibold mb-4 text-center">
            Ready to Grow? Let's Talk
          </h2>
          
          <form className="space-y-4" onSubmit={(e) => handleSubmit(e, true)} noValidate>
            {/* Mobile Form Fields */}
            {[
              { field: "name", type: "text", placeholder: "Name" },
              { field: "phone", type: "tel", placeholder: "Phone" },
              { field: "email", type: "email", placeholder: "Email" }
            ].map(({ field, type, placeholder }) => (
              <input
                key={field}
                type={type}
                name={field}
                placeholder={placeholder}
                value={mobileFormData[field]}
                onChange={(e) => handleInputChange(e, true)}
                className="w-full border-b-2 border-gray-300 focus:border-[#C09F53] focus:outline-none py-2 placeholder:text-[#023437]/70 bg-[#FFFBF3] transition-colors duration-300"
                required
                aria-label={placeholder}
              />
            ))}

            <div className="relative w-full">
  <select
    name="concern"
    value={mobileFormData.concern}
    onChange={(e) => handleInputChange(e, true)}
    className="w-full border-b-2 border-gray-300 focus:border-[#C09F53] focus:outline-none py-2 pr-10 text-[#023437] bg-[#FFFBF3] appearance-none cursor-pointer"
    required
    aria-label="Select your legal concern"
  >
    <option value="" disabled>
      Select your concern
    </option>
    <option value="personal-injury">Personal Injury</option>
    <option value="family-law">Family Law</option>
    <option value="criminal-defense">Criminal Defense</option>
  </select>

  {/* Chevron Down Icon */}
  <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
    <ChevronDown className="w-5 h-5 text-[#023437]" />
  </span>
</div>


            {/* Mobile Privacy Policy Checkbox */}
            <label className="flex items-start text-xs gap-2 leading-tight">
              <input 
                type="checkbox" 
                name="privacyConsent"
                checked={mobileFormData.privacyConsent}
                onChange={(e) => handleInputChange(e, true)}
                className="mt-1 shrink-0 w-4 h-4 accent-[#C09F53]" 
                required
              />
              <span>
                I agree to the{" "}
                <a 
                  href="#" 
                  className="underline text-[#C09F53] hover:text-[#C09F53]/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>{" "}
                and{" "}
                <a 
                  href="#" 
                  className="underline text-[#C09F53] hover:text-[#C09F53]/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  disclaimer
                </a>{" "}
                and give my express written consent, affiliates and/or lawyer to
                contact me via the number provided even if this number is a wireless
                number or if I am presently listed on a Do Not Call list. Message &
                data rates may apply. My consent does not require purchase. This is
                legal advertising.
              </span>
            </label>

            {/* Mobile Human Verification Checkbox */}
            <label className="flex items-start text-xs gap-2 leading-tight">
              <input 
                type="checkbox" 
                name="humanVerification"
                checked={mobileFormData.humanVerification}
                onChange={(e) => handleInputChange(e, true)}
                className="mt-1 shrink-0 w-4 h-4 accent-[#C09F53]" 
                required
              />
              <span>
                Please check this box so we know you're a person and not a computer
              </span>
            </label>

            {/* Mobile Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#C09F53] hover:bg-[#C09F53]/90 text-[#023437] font-semibold py-4 rounded-md mt-6 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl text-base"
              aria-label="Submit contact form"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomeOne;

