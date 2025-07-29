import React, { useState, useRef } from 'react';
import Marquee from "../../assets/Group 45.png";
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./HomeTwo.css";

import { useMediaQuery, MenuItem } from '@mui/material';
import Justice from "../../assets/justice.png";

    const steps = [
        {
            number: "Step 1",
            title: "Submit your claim",
            description: "Just share a few quick details to get started."
        },
        {
            number: "Step 2", 
            title: "Get matched with a Lawyer",
            description: "We’ll connect you with a trusted NSW legal expert."
        },
        {
            number: "Step 3",
            title: "Free case review", 
            description: "Receive a no-cost case evaluation — no upfront cost."
        }
    ];
function HomeTwo() {

   const targetRef = useRef(null);
      
      const handleConsultationClick = () => {
          window.scrollTo({
              top: 2900,
              left: 0,
              behavior: 'smooth'
          });
      };
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailId: '',
    concern: '',
    caseHistory: '',
    settlementHelp: false,
    privacyConsent: false,
    humanVerification: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Responsive breakpoints
  const isMobile = useMediaQuery('(max-width:768px)');
  const isTablet = useMediaQuery('(min-width:769px) and (max-width:1024px)');
  const isDesktop = useMediaQuery('(min-width:1025px)');

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Dynamic text field styles based on screen size
  const getTextFieldStyle = () => ({
    '& .MuiInputLabel-root': {
      color: 'white',
      fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      '&.Mui-focused': {
        color: 'white'
      }
    },
    '& .MuiInput-root': {
      fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
      fontFamily: 'Helvetica',
      color: 'white',
      '&:before': {
        borderBottomColor: 'white'
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'white'
      },
      '&:after': {
        borderBottomColor: 'white'
      },
      '&.Mui-focused': {
        color: 'white'
      }
    },
    '& .MuiFormHelperText-root': {
      fontSize: isMobile ? '12px' : '14px',
      fontFamily: 'Helvetica'
    },
    '& .Mui-error': {
      color: 'white',
      '&:after': {
        borderBottomColor: '#d32f2f'
      }
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 1) {
      newErrors.firstName = 'First name must be at least 1 character';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Invalid US phone number format (e.g. +1 561-555-7689)';
      }
    }

    if (!formData.emailId.trim()) {
      newErrors.emailId = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailId)) {
        newErrors.emailId = 'Please enter a valid email address';
      }
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must agree to the privacy policy';
    }

    if (!formData.humanVerification) {
      newErrors.humanVerification = 'Please verify you are human';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please correct the errors in the form');
      return;
    }

    setIsSubmitting(true);

    const serviceId = 'service_3vbv36o';
    const templateId = 'template_7xrqzk5';
    const publicKey = '5saECdElLOrsCGmdQ';

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.emailId,
      phone_number: formData.phoneNumber,
      concern: formData.concern,
      case_history: formData.caseHistory
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);

        // Reset form data
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          emailId: '',
          concern: '',
          caseHistory: '',
          settlementHelp: false,
          privacyConsent: false,
          humanVerification: false
        });

        setSuccessDialogOpen(true);
        setShowModal(true);

        setTimeout(() => {
          window.location.href = '/Thankyou';
        }, 100);
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        toast.error('Error submitting form. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleCloseDialog = () => {
    setSuccessDialogOpen(false);
  };

  // Responsive marquee configuration
  const getMarqueeConfig = () => {
    if (isMobile) {
      return {
        height: '60px',
        fontSize: '32px',
        iconSize: '40px',
        marginLeft: '16px'
      };
    } else if (isTablet) {
      return {
        height: '100px',
        fontSize: '60px',
        iconSize: '70px',
        marginLeft: '24px'
      };
    } else {
      return {
        height: '140px',
        fontSize: '80px',
        iconSize: '100px',
        marginLeft: '32px'
      };
    }
  };

  const marqueeConfig = getMarqueeConfig();

  // Responsive form layout
  const getFormLayout = () => {
    if (isMobile) {
      return 'flex-col space-y-6';
    } else {
      return 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8';
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Responsive Marquee Banner */}
      <div className={`mt-${isMobile ? '10' : '32'} ${isMobile ? 'px-4' : ''}`}>
        <div 
          className="flex justify-end items-center bg-[#C09F53] overflow-hidden relative -rotate-[4.013deg]"
          style={{ 
            height: marqueeConfig.height,
            width: '100vw',
            marginLeft: isMobile ? '-16px' : isTablet ? '-40px' : '-10px',
            marginTop: isMobile ? '20px' : '40px'
          }}
        >
          <div className="w-full overflow-hidden py-2">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="flex items-center" style={{ marginRight: marqueeConfig.marginLeft }}>
                  <span 
                    className="text-[#FFF] text-center font-['Playfair_Display'] font-[800] leading-none flex-shrink-0 ml-20"
                    style={{ fontSize: marqueeConfig.fontSize }}
                  >
                    Get a free case review
                  </span>
                  <img 
                    src={Marquee} 
                    alt="Banner" 
                    className="object-cover ml-4"
                    style={{ 
                      height: marqueeConfig.iconSize, 
                      width: marqueeConfig.iconSize 
                    }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Form Container */}
        <div 
          className="text-center bg-[#023437] mx-auto"
          style={{
            padding: isMobile ? '16px' : isTablet ? '32px' : '20px',
            marginTop: isMobile ? '-80px' : isTablet ? '-90px' : '-120px',
            marginLeft: isMobile ? '0' : isTablet ? '2%' : '4%',
            width: isMobile ? 'calc(100% - 32px)' : isTablet ? '96%' : '1150px',
            maxWidth: isMobile ? 'none' : isTablet ? 'calc(100vw - 80px)' : '1150px',
            minHeight: isMobile ? 'auto' : isTablet ? '900px' : '1100px',
            borderRadius: isMobile ? '8px' : '0'
          }}
        >
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className={`${isMobile ? 'mt-[15%]' : isTablet ? 'mt-[12%]' : 'mt-[20%]'}`}
          >
            {/* Form Fields Grid */}
            <div className={getFormLayout()}>
              {/* First Name */}
              <div className="w-full">
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="standard"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  sx={{
                    ...getTextFieldStyle(),
                    marginBottom: isMobile ? '0px' : '60px',
                    marginTop: isMobile ? '40px' : '0px'
                  }}
                />
              </div>

              {/* Phone Number */}
              <div className="w-full">
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  variant="standard"
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  sx={{
                    ...getTextFieldStyle(),
                    marginBottom: isMobile ? '0px' : '60px'
                  }}
                />
              </div>

              {/* Email ID */}
              <div className="w-full">
                <TextField
                  id="emailId"
                  name="emailId"
                  label="Email ID"
                  variant="standard"
                  fullWidth
                  value={formData.emailId}
                  onChange={handleChange}
                  error={!!errors.emailId}
                  helperText={errors.emailId}
                  sx={getTextFieldStyle()}
                />
              </div>

              {/* Concern Dropdown */}
              <div className="w-full">
                <TextField
                  id="concern"
                  name="concern"
                  label="Select your concern"
                  variant="standard"
                  fullWidth
                  select
                  value={formData.concern}
                  onChange={handleChange}
                  error={!!errors.concern}
                  helperText={errors.concern}
                  sx={getTextFieldStyle()}
                  InputLabelProps={{
                    sx: {
                      marginBottom: '80px',
                    },
                  }}
                >
                  <MenuItem value="Mesothelioma Lawsuit" sx={{ textAlign: 'left' }}>
                    Mesothelioma Lawsuit
                  </MenuItem>
                  <MenuItem value="Truck Accident Claims" sx={{ textAlign: 'left' }}>
                    Truck Accident Claims
                  </MenuItem>
                  <MenuItem value="Rideshare Class Action Lawsuits" sx={{ textAlign: 'left' }}>
                    Rideshare Class Action Lawsuits
                  </MenuItem>
                  <MenuItem value="Other" sx={{ textAlign: 'left' }}>
                    Other
                  </MenuItem>
                </TextField>
              </div>
            </div>

            {/* Case History - Full Width */}
            <div className="w-full mt-6">
              <TextField
                id="caseHistory"
                name="caseHistory"
                label="Briefly explain your case history"
                variant="standard"
                fullWidth
                multiline
                rows={4}
                value={formData.caseHistory}
                onChange={handleChange}
                error={!!errors.caseHistory}
                helperText={errors.caseHistory}
                sx={{
                  ...getTextFieldStyle(),
                  marginBottom: '30px',
                   '& .MuiInputLabel-root': {
  fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
  color: 'white',
  fontWeight: 'bold',
  // Remove or reduce transform
  transform: 'translate(0, 80px) scale(1)',
},
                  '& .MuiInputLabel-shrink': {
                    transform: 'translate(0, -10px) scale(0.75)',
                    color: "white"
                  },
                  '& .MuiInput-root': {
                    marginTop: '10px',
                    color: "white",
                    '&:before': {
                      borderBottom: '1px solid white',
                      marginTop: '20px'
                    },
                    '&:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid white'
                    },
                    '&:after': {
                      borderBottom: '2px solid white'
                    }
                  },
                  '& .MuiInput-input': {
                    color: "white"
                  },
                  '& .MuiFormHelperText-root': {
                    color: "white"
                  }
                }}
              />
            </div>

            {/* Checkboxes */}
            <div className={`mt-8 space-y-6 text-white ${isMobile ? 'text-sm' : 'text-base'} leading-relaxed`}>
              {/* Settlement Help */}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-0.5">
                  <input
                    type="checkbox"
                    id="settlementHelp"
                    name="settlementHelp"
                    checked={formData.settlementHelp}
                    onChange={handleChange}
                    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 accent-[#C09F53]"
                  />
                </div>
                <label htmlFor="settlementHelp" className="ml-3 block text-left">
                  I would be needing help to file a settlement.
                </label>
              </div>

              {/* Privacy Consent */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 accent-[#C09F53]"
                    required
                  />
                </div>
                <label htmlFor="privacyConsent" className="ml-3 block text-white text-left">
                  {!isMobile ? (
                    <>
                      <span className="block">
                        I agree to the{' '}
                        <a href="/PrivacyPolicy" className="underline hover:text-blue-200">
                          privacy policy
                        </a>{' '}
                        and{' '}
                        <a href="/Disclaimer" className="underline hover:text-blue-200">
                          disclaimer
                        </a>.
                      </span>
                      <span className="block mt-2">
                        I agree to the privacy policy and disclaimer and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                      </span>
                    </>
                  ) : (
                    "I agree to the privacy policy and disclaimer and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising."
                  )}
                </label>
                {errors.privacyConsent && (
                  <p className="mt-2 text-sm text-red-300">{errors.privacyConsent}</p>
                )}
              </div>

              {/* Human Verification */}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-0.5">
                  <input
                    type="checkbox"
                    id="humanVerification"
                    name="humanVerification"
                    checked={formData.humanVerification}
                    onChange={handleChange}
                    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 accent-[#C09F53]"
                    required
                  />
                </div>
                <label htmlFor="humanVerification" className="ml-3 block text-left">
                  {isMobile ? "Please click this box so we know you're a person and not a computer" : "Please verify you're human"}
                </label>
                {errors.humanVerification && (
                  <p className="mt-2 text-sm text-red-300">{errors.humanVerification}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                ${isMobile ? 'w-full' : 'inline-flex'}
                h-[${isMobile ? '50' : '60'}px]                     
                px-[49px]                    
                justify-center
                items-center
                gap-[10px]
                flex-shrink-0
                rounded-[60px]
                bg-[#023437]                 
                text-[#FFFBF3]             
                border
                border-[#FFFBF3]             
                font-open-sans             
                text-[16px]                 
                font-bold                    
                leading-normal
                hover:bg-[#374A67]           
                disabled:opacity-70         
                transition-colors           
                duration-200                 
                ${isMobile ? 'mt-8 mb-4' : isTablet ? 'mt-12' : 'mt-16'}
                ${!isMobile ? 'ml-[-76%]' : ''}
              `}
            >
              {isSubmitting ? 'Submitting...' : 'Begin Here'}
            </button>

            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg p-8 max-w-md w-full">
                  <h2 className="text-2xl font-bold text-[#023437] mb-4">Thank You!</h2>
                  <p className="text-gray-700 mb-6">
                    Your submission has been received. We'll get back to you soon.
                  </p>
                  <button
                    onClick={closeModal}
                    className="w-full h-[50px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[60px] bg-[#023437] text-[#FFFBF3] border border-[#023437] font-open-sans text-[16px] font-bold leading-normal hover:bg-[#374A67] transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
<div className="w-full bg-[#FFFBF3]">
      {/* Top Section - Light Background */}
      <div className="bg-[#FFFBF3] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            
            {/* Left Side - Main Content */}
            <div className="flex-1">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-teal-800 leading-[0.9] mb-6 sm:mb-8 md:mb-10">
                Start Your NSW Legal Claim Today
              </h1>
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <div className="space-y-1 text-left mb-4 lg:mb-0">
                  <p className="text-teal-800 text-base sm:text-lg md:text-xl font-normal">
                    No Win No Fees.
                  </p>
                  <p className="text-teal-800 text-base sm:text-lg md:text-xl font-normal">
                    Free, confidential review in minutes.
                  </p>
                </div>

                {/* Contact Button - Now inline with subheading */}
                <div className="flex-shrink-0">
                  <button className="bg-transparent border-2 border-teal-800 text-teal-800 font-medium px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-4 md:py-5 rounded-lg text-base sm:text-lg md:text-xl hover:bg-teal-800 hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Gold Background with Rounded Button */}
      <div className="bg-[#FFFBF3] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          <button className="w-full bg-[#C09F53] hover:bg-yellow-600 transition-colors duration-300 rounded-3xl sm:rounded-4xl md:rounded-[2rem] lg:rounded-[2.5rem] xl:rounded-[3rem] border-none shadow-lg hover:shadow-xl group">
            <div className="flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 lg:py-10">
              
              {/* Left Side - CTA Text */}
              <div className="flex-1 text-left">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
                  Get My Free Case Review Now
                </h2>
              </div>

              {/* Right Side - Arrow in Circle */}
              <div className="flex-shrink-0 ml-6 sm:ml-8 md:ml-12">
                <div className="bg-transparent border-2 border-white rounded-full p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 group-hover:bg-white group-hover:bg-opacity-20 transition-colors duration-300">
                  <svg 
                    className="w-5 sm:w-6 md:w-7 lg:w-8 xl:w-9 h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 text-white group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>

     
       {/* How It Works Section */}
            <section className="w-full bg-[#FFFBF3] py-12 lg:py-20">
                <div ref={targetRef}></div>
                
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-12 lg:mb-16">
                    <h1 className="text-[#023437] font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
                        How IT Works
                    </h1>
                    <div className="lg:mt-8 xl:mt-12">
                        <p className="text-[#023437] font-['Open_Sans'] text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed max-w-md">
                            Start in just a few steps, where{' '}
                            <span className="text-[#C09F53]">your rights come first.</span>
                        </p>
                    </div>
                </div>

                {/* Steps Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`
                                flex flex-col p-6 md:p-8 lg:p-10 gap-6 md:gap-8 lg:gap-12
                                border border-[#023437] border-opacity-35 cursor-pointer
                                transition-all duration-300 hover:border-opacity-60
                                ${index === 0 ? 'lg:rounded-l-lg' : ''}
                                ${index === steps.length - 1 ? 'lg:rounded-r-lg' : ''}
                                ${index < steps.length - 1 ? 'lg:border-r-0' : ''}
                                lg:rounded-none rounded-lg
                            `}
                            onClick={handleConsultationClick}
                        >
                            <p className="text-[#023437] font-['Open_Sans'] text-lg md:text-xl lg:text-2xl font-semibold">
                                {step.number}
                            </p>
                            <h4 className="text-[#C09F53] font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-tight underline">
                                {step.title}
                            </h4>
                            <p className="text-[#023437] font-['Open_Sans'] text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
<div className="w-full bg-white">
  {/* No Win No Fee Section */}
  <div className="bg-[#C09F53] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16">
    <div className="max-w-7xl mx-auto md:overflow-visible overflow-hidden">
      <div className="relative flex justify-center md:pl-16 lg:pl-20 xl:pl-24">
        {/* Tile with embedded image positioning */}
        <div className="relative bg-[#FFFBF3] rounded-xl sm:rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl md:overflow-visible overflow-hidden">
          
          {/* Mobile Layout - Image on top */}
          <div className="block md:hidden">
            <div className="w-full flex justify-center py-6 bg-[#FFFBF3]">
              <img
                src={Justice}
                alt="Scales"
                className="h-32 sm:h-40 object-contain"
              />
            </div>
            <div className="px-6 sm:px-8 pb-8 sm:pb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-4 sm:mb-6 text-center">
                No Win No Fee*
              </h2>
              <p className="text-base sm:text-lg text-teal-700 leading-relaxed mb-6 sm:mb-8 text-center">
                We introduced No Win No Fee to Australia back in 1994, 
                so that more people could afford access to high quality 
                legal services. To put it simply, if we don't win your claim, 
                you won't be charged for our legal fees.
              </p>
              <div className="flex justify-center">
                <button className="bg-[#C09F53] hover:bg-yellow-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout - Image positioned half outside */}
          {/* <div className="hidden md:flex items-center min-h-[300px] lg:min-h-[350px] xl:min-h-[400px] relative">
           
            <div className="absolute left-20 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full flex items-center z-10">
              <img
                src={Justice}
                alt="Scales"
                className="h-full w-auto object-contain"
              />
            </div>

          
            <div className="relative z-20 w-full md:w-3/4 lg:w-2/3 xl:w-3/4 ml-auto bg-[#FFFBF3] p-6 md:p-8 lg:p-10 xl:p-12 md:pl-20 lg:pl-32 xl:pl-40">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-800 mb-4 md:mb-6 text-left">
                No Win No Fee*
              </h2>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-teal-700 leading-relaxed mb-6 md:mb-8 text-left">
                We introduced No Win No Fee to Australia back in 1994, 
                so that more people could afford access to high quality 
                legal services. To put it simply, if we don't win your claim, 
                you won't be charged for our legal fees.
              </p>
              <button className="bg-[#C09F53] hover:bg-yellow-700 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-lg lg:text-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div> */}

          {/* Desktop/Tablet Layout - Image positioned half outside */}
<div className="hidden md:flex items-center min-h-[300px] lg:min-h-[350px] xl:min-h-[400px] relative">
  {/* Scales Image - Half inside, half outside tile */}
  <div className="relative flex-shrink-0 w-[40%] max-w-[320px] flex justify-center items-center px-4">
    <img
      src={Justice}
      alt="Scales"
      className="w-full h-auto object-contain"
    />
  </div>

  {/* Tile Content */}
  <div className="w-[60%] bg-[#FFFBF3] rounded-r-xl p-6 md:p-8 lg:p-10 xl:p-12">
    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-800 mb-4 md:mb-6 text-left">
      No Win No Fee*
    </h2>
    <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-teal-700 leading-relaxed mb-6 md:mb-8 text-left">
      We introduced No Win No Fee to Australia back in 1994, 
      so that more people could afford access to high quality 
      legal services. To put it simply, if we don't win your claim, 
      you won't be charged for our legal fees.
    </p>
    <button className="bg-[#C09F53] hover:bg-yellow-700 text-white font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-lg lg:text-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
      Learn More
    </button>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
</div>

      {/* Why NSW Clients Trust Us Section */}
      <div className="bg-[#FFFBF3] px-6 py-16 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-6xl font-bold text-[#023437] mb-12 text-center lg:text-left leading-tight">
            Why NSW<br />
            <span className="text-[#023437]">Clients Trust Us</span>
          </h2>

  {/* Trust Points with varying widths */}
<div>
  {/* Point 1 - 25% width */}
  <div className="bg-[#EFE4CB] p-6 lg:p-6 w-2/3">
    <div className="flex items-center">
      <span className="text-2xl lg:text-3xl font-bold text-teal-800 mr-4">100%</span>
      <span className="text-lg lg:text-xl text-teal-700">confidential and quick case matching</span>
    </div>
  </div>

  {/* Point 2 - 50% width */}
  <div className="bg-[#023437] p-6 lg:p-6 w-5/6">
    <div className="flex items-center">
      <span className="text-2xl lg:text-3xl font-bold text-white mr-4">No win, no fee</span>
      <span className="text-xl lg:text-2xl text-white">— only pay if you succeed</span>
    </div>
  </div>

  {/* Point 3 - 75% width */}
  <div className="bg-[#EFE4CB] p-6 lg:p-6 w-11/12">
    <div className="flex items-center flex-wrap">
      <span className="text-xl lg:text-2xl text-teal-700 mr-2">Lawyers with</span>
      <span className="text-3xl lg:text-4xl font-bold text-teal-800 mr-2">20+</span>
      <span className="text-xl lg:text-2xl text-teal-700">years of NSW-specific legal experience</span>
    </div>
  </div>

  {/* Point 4 - 100% width */}
  <div className="bg-[#023437] p-6 lg:p-6 w-full">
    <div className="flex items-center flex-wrap">
      <span className="text-xl lg:text-2xl text-white mr-2">Offices and partners across</span>
      <span className="text-xl lg:text-2xl font-bold text-white">Sydney, Newcastle, and Wollongong</span>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
    
  );
}

export default HomeTwo;