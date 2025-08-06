import React, { useState, useRef, useEffect } from 'react';
import Marquee from "../../assets/Group 45.png";
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./HomeTwo.css";
import Frame from "../../assets/justiceimg.png";
import Frame2 from "../../assets/Group 88.png";
import { useMediaQuery, MenuItem } from '@mui/material';
import FormBG from "../../assets/hFormBG.png";
import mobFormBG from "../../assets/MobileFormBG.png";

// Custom Captcha Component
const CustomCaptcha = ({ onCaptchaChange, resetTrigger }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [charOffsets, setCharOffsets] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const generateCaptcha = () => {
    // Stop any ongoing speech when generating new CAPTCHA
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    let offsets = [];
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
      offsets.push((Math.random() * 10 - 5).toFixed(2));
    }
    setCaptchaText(result);
    setCharOffsets(offsets);
    setUserInput('');
    setIsValid(false);
    onCaptchaChange && onCaptchaChange(false);
  };

  // Generate CAPTCHA immediately when component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Reset captcha when resetTrigger changes
  useEffect(() => {
    if (resetTrigger) {
      generateCaptcha();
    }
  }, [resetTrigger]);

  useEffect(() => {
    const timer = setInterval(() => {
      generateCaptcha();
    }, 60000);

    return () => {
      clearInterval(timer);
      // Stop any ongoing speech when component unmounts
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking]);

  const speakCaptcha = () => {
    if ('speechSynthesis' in window) {
      // Stop any ongoing speech before starting new one
      window.speechSynthesis.cancel();
      setIsSpeaking(true);

      const voices = window.speechSynthesis.getVoices();
      const maleUsVoice = voices.find(voice =>
        voice.lang === 'en-US' &&
        voice.name.toLowerCase().includes('david')
      ) || voices.find(voice =>
        voice.lang === 'en-US'
      );

      let currentIndex = 0;
      const speakNextChar = () => {
        if (currentIndex < captchaText.length) {
          const char = captchaText[currentIndex];
          const utterance = new SpeechSynthesisUtterance(char);
          utterance.rate = 0.5;
          utterance.pitch = 0.9;
          utterance.volume = 1.0;
          utterance.lang = 'en-US';

          if (maleUsVoice) {
            utterance.voice = maleUsVoice;
          }

          utterance.onend = () => {
            currentIndex++;
            speakNextChar();
          };

          window.speechSynthesis.speak(utterance);
        } else {
          setIsSpeaking(false);
        }
      };

      speakNextChar();
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    const valid = value === captchaText;
    setIsValid(valid);
    onCaptchaChange && onCaptchaChange(valid);
  };

  const handleAudioToggle = (e) => {
    setAudioEnabled(e.target.checked);
  };

  return (
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="bg-gray-100 p-3 rounded font-mono text-lg tracking-wider select-none relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                #ccc,
                #ccc 1px,
                transparent 1px,
                transparent 5px
              )`,
              backgroundSize: '100% 10px',
              backgroundPosition: '0 50%'
            }}
          />
          <div className="relative z-10">
            {captchaText.split('').map((char, index) => (
              <span
                key={index}
                style={{
                  transform: `translateY(${charOffsets[index]}px)`,
                  display: 'inline-block',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
                className="mx-0.5"
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center justify-left sm:justify-start">
          <button
            type="button"
            onClick={generateCaptcha}
            className="px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0"
            title="Refresh CAPTCHA"
          >
            ↻
          </button>
          {audioEnabled && (
            <button
              type="button"
              onClick={speakCaptcha}
              disabled={isSpeaking}
              className={`px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0 ${
                isSpeaking ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              title="Listen to CAPTCHA"
            >
              {isSpeaking ? '🔊🎵' : '🔊'}
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="enableAudio"
          checked={audioEnabled}
          onChange={handleAudioToggle}
          className="mr-2"
        />
        <label htmlFor="enableAudio" className="text-sm text-gray-700">
          Enable Audio
        </label>
      </div>

      <div className="mt-3">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter CAPTCHA"
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            userInput !== '' && !isValid
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300'
          }`}
        />
        {userInput !== '' && !isValid && (
          <p className="text-red-500 text-sm mt-1">
            CAPTCHA does not match
          </p>
        )}
        {isValid && (
          <p className="text-green-500 text-sm mt-1">
            ✓ CAPTCHA verified successfully
          </p>
        )}
      </div>
    </div>
  );
};

function HomeTwo() {
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
    humanVerification: false,
    captchaEnabled: false
  });
   
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // New states for lander essentials
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);
  const [pingUrl, setPingUrl] = useState("");
  const [certId, setCertId] = useState("");
  const [tokenUrl, setTokenUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  // Responsive breakpoints
  const isMobile = useMediaQuery('(max-width:768px)');
  const isSmallMobile = useMediaQuery('(max-width:375px)');
  const isTablet = useMediaQuery('(min-width:769px) and (max-width:1024px)');
  const isDesktop = useMediaQuery('(min-width:1025px)');

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Capture page URL and IP on mount
  useEffect(() => {
    // Set page URL
    setPageUrl(window.location.href);
    
    // Get IP address (you may need to use a service for this)
    // For now, we'll leave it empty or you can integrate with an IP service
    // Example: fetch('https://api.ipify.org?format=json').then(res => res.json()).then(data => setIpAddress(data.ip));
  }, []);

  // TrustedForm integration
  useEffect(() => {
    // Simple observer to capture TrustedForm data when it's populated
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "value") {
          const target = mutation.target;

          // Check if this is a TrustedForm field
          if (target.name === "xxTrustedFormCertUrl" && target.value) {
            setCertId(target.value);
          }

          if (target.name === "xxTrustedFormPingUrl" && target.value) {
            setPingUrl(target.value);
          }

          if (target.name === "xxTrustedFormCertToken" && target.value) {
            setTokenUrl(target.value);
          }
        }
      });
    });

    // Start observing after a short delay to ensure TrustedForm script has loaded
    const timeoutId = setTimeout(() => {
      const certField = document.querySelector('[name="xxTrustedFormCertUrl"]');
      const pingField = document.querySelector('[name="xxTrustedFormPingUrl"]');
      const tokenField = document.querySelector('[name="xxTrustedFormCertToken"]');

      [certField, pingField, tokenField].forEach((field) => {
        if (field) observer.observe(field, { attributes: true });
      });

      // Check if values are already populated
      if (certField?.value) setCertId(certField.value);
      if (pingField?.value) setPingUrl(pingField.value);
      if (tokenField?.value) setTokenUrl(tokenField.value);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Dynamic text field styles based on screen size
  const getTextFieldStyle = () => ({
    '& .MuiInputLabel-root': {
      color: '#023437',
      fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      '&.Mui-focused': {
        color: '#023437'
      }
    },
    '& .MuiInput-root': {
      fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
      fontFamily: 'Helvetica',
      color: '#023437',
      '&:before': {
        borderBottomColor: '#023437'
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottomColor: '#023437'
      },
      '&:after': {
        borderBottomColor: '#023437'
      },
      '&.Mui-focused': {
        color: '#023437'
      }
    },
    '& .MuiFormHelperText-root': {
      fontSize: isMobile ? '12px' : '14px',
      fontFamily: 'Helvetica'
    },
    '& .Mui-error': {
      color: '#023437',
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

  const handleCaptchaChange = (isValid) => {
    setCaptchaValid(isValid);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Name is required';
    } else if (formData.firstName.length < 1) {
      newErrors.firstName = 'Name must be at least 1 character';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Invalid AUS phone number format (e.g. +1 561-555-7689)';
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

    // Add captcha validation
    if (formData.captchaEnabled && !captchaValid) {
      newErrors.captcha = 'Please complete the CAPTCHA verification';
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
      case_history: formData.caseHistory,
      // Add TrustedForm and other lander essentials
      xxTrustedFormCertUrl: certId,
      xxTrustedFormPingUrl: pingUrl,
      xxTrustedFormCertToken: tokenUrl,
      pageUrl: pageUrl,
      ipAddress: ipAddress
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
          humanVerification: false,
          captchaEnabled: false
        });

        // Reset captcha
        setCaptchaValid(false);
        setCaptchaResetTrigger(prev => prev + 1);

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
      return 'flex-col space-y-8';
    } else {
      return 'grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8';
    }
  };


  

  return (
    <div  id="form-section" className="w-full overflow-x-hidden" style={{
      backgroundImage: `url(${isMobile ? mobFormBG : FormBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}>
      {/* Responsive Marquee Banner */}
      <div className={`${isMobile ? 'mt-10' : isTablet ? 'mt-32' : 'mt-40'} ${isMobile ? 'px-4' : ''}`}>
        <div 
          className="flex justify-end items-center bg-[#C09F53] overflow-hidden relative -rotate-[4.013deg]"
          style={{ 
            height: marqueeConfig.height,
            width: '110vw',
            marginLeft: isMobile ? '-16px' : isTablet ? '-40px' : '-10px',
            marginRight: '-10vw',
            marginTop: isMobile ? '20px' : isTablet ? '10px' : '20px'
          }}
        >
          <div className="w-full overflow-hidden py-2">
            <div className="flex whitespace-nowrap animate-marquee" style={{ animationDuration: isMobile ? '8s' : isTablet ? '10s' : '12s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
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
          className="bg-[#FFFBF3] mx-auto"
          style={{
            padding: isSmallMobile ? '16px 12px' : isMobile ? '24px 20px' : isTablet ? '48px' : '60px 80px',
            marginTop: isMobile ? '-80px' : isTablet ? '-120px' : '-160px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: isSmallMobile ? 'calc(100% - 16px)' : isMobile ? 'calc(100% - 32px)' : isTablet ? '90%' : '85%',
            maxWidth: isMobile ? 'none' : isTablet ? '900px' : '1400px',
            minHeight: isMobile ? 'auto' : isTablet ? '1000px' : '1200px',
            borderRadius: '0'
          }}
        >
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className={`${isMobile ? 'mt-[10%]' : isTablet ? 'mt-[15%]' : 'mt-[20%]'}`}
          >
            {/* Hidden TrustedForm fields */}
            <input
              type="hidden"
              id="xxTrustedFormCertUrl"
              name="xxTrustedFormCertUrl"
              value={certId}
            />
            <input
              type="hidden"
              id="xxTrustedFormCertToken"
              name="xxTrustedFormCertToken"
              value={tokenUrl}
            />
            <input
              type="hidden"
              id="xxTrustedFormPingUrl"
              name="xxTrustedFormPingUrl"
              value={pingUrl}
            />

            {/* Form Fields Grid */}
            <div className={getFormLayout()}>
              {/* Name */}
              <div className="w-full">
                <TextField
                  id="firstName"
                  name="firstName"
                  label="Full name"
                  variant="standard"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  sx={{
                    ...getTextFieldStyle(),
                    marginBottom: isMobile ? '0px' : '40px',
                    marginTop: isMobile ? '40px' : '0px'
                  }}
                />
              </div>

              {/* Phone Number */}
              <div className="w-full">
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone"
                  variant="standard"
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  sx={{
                    ...getTextFieldStyle(),
                    marginBottom: isMobile ? '0px' : '40px'
                  }}
                />
              </div>

              {/* Email ID */}
              <div className="w-full">
                <TextField
                  id="emailId"
                  name="emailId"
                  label="Email"
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
            <div className={`w-full ${isMobile ? 'mt-8' : 'mt-12'}`}>
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
  color: '#023437',
  fontWeight: 'bold',
  // Remove or reduce transform
  transform: 'translate(0, 80px) scale(1)',
},

                  '& .MuiInputLabel-shrink': {
                    transform: 'translate(0, -10px) scale(0.75)',
                    color: "#023437"
                  },
                  '& .MuiInput-root': {
                    marginTop: '10px',
                    color: "#023437",
                    '&:before': {
                      borderBottom: '1px solid #023437',
                      marginTop: '20px'
                    },
                    '&:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid #023437'
                    },
                    '&:after': {
                      borderBottom: '2px solid #023437'
                    }
                  },
                  '& .MuiInput-input': {
                    color: "#023437"
                  },
                  '& .MuiFormHelperText-root': {
                    color: "#023437"
                  }
                }}
              />
            </div>

            {/* Checkboxes */}
            <div className={`mt-8 space-y-6 text-[#023437] ${isMobile ? 'text-sm space-y-4' : 'text-base'} leading-relaxed`}>

              {/* Privacy Consent */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} rounded border-[#023437] bg-transparent text-indigo-600 focus:ring-indigo-500 accent-[#C09F53]`}
                    style={{ backgroundColor: 'transparent', borderColor: '#023437' }}
                    required
                  />
                </div>
                <label htmlFor="privacyConsent" className="ml-3 block text-[#023437] text-left">
                  {!isMobile ? (
                    <>
                      <span className="block">
                        I agree to the{' '}
                        <a href="/PrivacyPolicy" className=" text-[#C09F53] hover:text-yellow-500">
                          privacy policy
                        </a>{' '}
                        and{' '}
                        <a href="/Disclaimer" className=" text-[#C09F53] hover:text-yellow-500">
                          disclaimer
                          </a>{' '} and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
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

              {/* Human Verification with Captcha */}
              <div className="w-full">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      id="captchaEnabled"
                      name="captchaEnabled"
                      checked={formData.captchaEnabled}
                      onChange={handleChange}
                      className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} rounded border-[#023437] bg-transparent text-indigo-600 focus:ring-indigo-500 accent-[#C09F53]`}
                      style={{ backgroundColor: 'transparent', borderColor: '#023437' }}
                    />
                  </div>
                  <label htmlFor="captchaEnabled" className="ml-3 block text-[#023437] text-left">
                    Please click this box so we know you're a person and not a computer
                  </label>
                </div>
                {formData.captchaEnabled && (
                  <CustomCaptcha 
                    onCaptchaChange={handleCaptchaChange} 
                    resetTrigger={captchaResetTrigger} 
                  />
                )}
                {errors.captcha && (
                  <p className="mt-2 text-sm text-red-300">{errors.captcha}</p>
                )}
              </div>
            </div>

             {/* Submit Button - below privacy consent, left aligned, smaller width and reduced height on all screens */}
            <div className={`flex mt-8 ${isMobile ? 'justify-center' : 'justify-start'} w-full`}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  ${isMobile ? `
                    inline-flex
                    w-full
                    h-[50px]
                    px-6
                    justify-center
                    items-center
                    rounded-[30px]
                    bg-transparent
                    text-[#023437]
                    border-2
                    border-[#023437]
                    font-sans
                    text-[16px]
                    font-semibold
                    hover:bg-[#023437]
                    hover:text-[#FFFBF3]
                  ` : `
                    inline-flex
                    h-[56px]
                    w-[280px]
                    px-[32px]
                    justify-start
                    items-center
                    gap-[10px]
                    flex-shrink-0
                    rounded-[60px]
                    bg-[#023437]
                    text-[#FFFBF3]
                    border
                    border-[#FFFBF3]
                    font-open-sans
                    text-[22px]
                    font-medium
                    leading-normal
                    hover:bg-[#374A67]
                    text-center
                  `}
                  disabled:opacity-70
                  transition-colors
                  duration-200
                `}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

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

      {/* Responsive Footer Image */}
      <div className="mt-16 w-full">
        <img
          src={isMobile ? Frame2 : Frame}
          alt="Footer"
          className="h-full w-full object-cover mt-3"
        />
      </div>
    </div>
  );
}

export default HomeTwo;