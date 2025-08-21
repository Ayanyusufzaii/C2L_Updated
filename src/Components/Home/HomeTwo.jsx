import React, { useState, useRef, useEffect } from 'react';
import Marquee from "../../assets/Group 45.png";
import TextField from '@mui/material/TextField';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./HomeTwo.css";
import Frame from "../../assets/N.webp";
import BgFrame from "../../assets/background_just.png";
import test from "../../assets/test.jpg";
import Frame2 from "../../assets/justiceemobbb.jpeg";
import { useMediaQuery, MenuItem } from '@mui/material';
import FormBG from "../../assets/hFormBG.png";
import mobFormBG from "../../assets/MobileFormBG.png";
import thankyou from "../../assets/thankyouimng.png"
import { sendBothEmails, testEmailJSConnection, setInitialLandingUrl } from './emailJsService'; // <- service we just created

// Custom Captcha Component (kept same UI, minor safe fixes)
const CustomCaptcha = ({ onCaptchaChange, resetTrigger }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [charOffsets, setCharOffsets] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const generateCaptcha = () => {
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

  useEffect(() => {
    generateCaptcha();
  }, []);

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
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking]);

  const speakCaptcha = () => {
    if ('speechSynthesis' in window) {
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
              backgroundImage: `repeating-linear-gradient(0deg, #ccc, #ccc 1px, transparent 1px, transparent 5px)`,
              backgroundSize: '100% 10px',
              backgroundPosition: '0 50%'
            }}
          />
          <div className="relative z-10">
            {captchaText.split('').map((char, index) => (
              <span
                key={index}
                style={{
                  transform: `translateY(${parseFloat(charOffsets[index] || 0)}px)`,
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
        <div className="flex gap-2 items-center justify-start sm:justify-start">
          <button
            type="button"
            onClick={generateCaptcha}
            className="px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0"
            title="Refresh CAPTCHA"
            aria-label="Refresh CAPTCHA"
          >
            ↻
          </button>
          {audioEnabled && (
            <button
              type="button"
              onClick={speakCaptcha}
              disabled={isSpeaking}
              className={`px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0 ${isSpeaking ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              title="Listen to CAPTCHA"
              aria-label="Listen to CAPTCHA"
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
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${userInput !== '' && !isValid
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


// STRICT formatter for your 3 allowed patterns:
// "" -> "4XX XXX XXX"
// "0" -> "04XX XXX XXX"
// "+61" -> "+61 4XX XXX XXX"
const formatAustralianMobile = (input) => {
  if (!input) return "";

  let raw = String(input).trim();

  // Keep a bare '+' visible while typing
  if (raw === "+") return "+";

  // keep only digits and a leading + (drop other pluses)
  // remove any plus characters after the first
  const plus = raw.startsWith("+") ? "+" : "";
  raw = plus + raw.replace(/\+/g, "").replace(/[^\d]/g, "");

  let prefix = "";
  let actual = "";

  if (raw.startsWith("+61")) {
    prefix = "+61";
    actual = raw.slice(3);
  } else if (raw.startsWith("0")) {
    prefix = "0";
    actual = raw.slice(1);
  } else if (raw.startsWith("+")) {
    // user typed '+' then some digits but not +61 yet — preserve as-is for UX
    prefix = "+";
    actual = raw.slice(1);
  } else {
    prefix = "";
    actual = raw;
  }

  // actual should be only digits and limited to 9 digits
  actual = actual.replace(/\D/g, "").slice(0, 9);

  // format actual as XXX XXX XXX grouping (3-3-3)
  let formattedActual = actual;
  if (actual.length <= 3) {
    formattedActual = actual;
  } else if (actual.length <= 6) {
    formattedActual = `${actual.slice(0, 3)} ${actual.slice(3)}`;
  } else {
    formattedActual = `${actual.slice(0, 3)} ${actual.slice(3, 6)} ${actual.slice(6)}`;
  }

  // construct visible output
  if (prefix === "+61") {
    // show +61 with a space — desired final layout
    return `${prefix} ${formattedActual}`.trim();
  } else if (prefix === "0") {
    return `${prefix}${formattedActual}`.trim();
  } else if (prefix === "+") {
    // preserve the + while user is typing unsupported prefix; show + + digits (no extra space)
    // if there are no digits yet, just return "+"
    return formattedActual ? `+${formattedActual}` : "+";
  } else {
    return formattedActual;
  }
};



// Returns { isValid: boolean, reason: string|null }
// Reasons: "empty", "invalid_prefix", "actual_start", "length"
const validateAustralianMobile = (input) => {
  if (!input) return { isValid: false, reason: "empty" };

  const raw = String(input).trim().replace(/[^\d+]/g, "");

  // Allowed prefixes: +61, 0, or none. Anything else -> invalid_prefix
  let actual = "";
  if (raw.startsWith("+61")) {
    actual = raw.slice(3);
  } else if (raw.startsWith("0")) {
    actual = raw.slice(1);
  } else if (raw.startsWith("+") && !raw.startsWith("+61")) {
    return { isValid: false, reason: "invalid_prefix" };
  } else {
    actual = raw;
  }

  // actual must be digits only
  actual = actual.replace(/\D/g, "");

  // actual must start with '4'
  if (actual.length === 0) return { isValid: false, reason: "length" };
  if (actual[0] !== "4") return { isValid: false, reason: "actual_start" };

  // actual must be exactly 9 digits
  if (actual.length !== 9) return { isValid: false, reason: "length" };

  return { isValid: true, reason: null };
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
  const [phoneError, setPhoneError] = useState("");
  const [submitMessage, setSubmitMessage] = useState(null);
  const [emailError, setEmailError] = useState("");


  // Landers & captcha
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
    setPageUrl(window.location.href);

    // fetch IP (best-effort, falls back to Not available)
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIpAddress(data.ip))
      .catch((err) => {
        console.warn("Error fetching IP:", err);
        setIpAddress("Not available");
      });

    // set initial landing url in the email service module (so templates can access if needed)
    try {
      setInitialLandingUrl(window.location.href);
    } catch (e) { /* ignore */ }
  }, []);

  // TrustedForm integration - FIXED with polling for property values
  useEffect(() => {
    let pollInterval = null;
    let attemptCount = 0;
    const maxAttempts = 100;

    const checkTrustedFormValues = () => {
      const certField = document.querySelector('[name="xxTrustedFormCertUrl"]');
      const pingField = document.querySelector('[name="xxTrustedFormPingUrl"]');
      const tokenField = document.querySelector('[name="xxTrustedFormCertToken"]');

      let hasAllValues = false;

      if (certField) {
        const actualCertValue = certField.value;
        if (actualCertValue && actualCertValue !== '' && actualCertValue !== certId) {
          setCertId(actualCertValue);
        }
      }

      if (pingField) {
        const actualPingValue = pingField.value;
        if (actualPingValue && actualPingValue !== '' && actualPingValue !== pingUrl) {
          setPingUrl(actualPingValue);
        }
      }

      if (tokenField) {
        const actualTokenValue = tokenField.value;
        if (actualTokenValue && actualTokenValue !== '' && actualTokenValue !== tokenUrl) {
          setTokenUrl(actualTokenValue);
        }
      }

      if (certField?.value && pingField?.value && tokenField?.value) {
        hasAllValues = true;
      }

      return hasAllValues;
    };

    pollInterval = setInterval(() => {
      attemptCount++;

      const hasValues = checkTrustedFormValues();

      if (hasValues || attemptCount >= maxAttempts) {
        clearInterval(pollInterval);
        if (!hasValues) {
          setTimeout(checkTrustedFormValues, 2000);
        }
      }
    }, 100);

    const handleTrustedFormEvent = () => {
      setTimeout(checkTrustedFormValues, 500);
    };

    document.addEventListener('trustedform:loaded', handleTrustedFormEvent);
    document.addEventListener('trustedform:ready', handleTrustedFormEvent);
    window.addEventListener('message', (event) => {
      if (event.data && typeof event.data === 'string' && event.data.includes('trustedform')) {
        handleTrustedFormEvent();
      }
    });

    return () => {
      if (pollInterval) clearInterval(pollInterval);
      document.removeEventListener('trustedform:loaded', handleTrustedFormEvent);
      document.removeEventListener('trustedform:ready', handleTrustedFormEvent);
    };
  }, [certId, pingUrl, tokenUrl]);

  const getTextFieldStyle = () => ({
    '& .MuiInputLabel-root': {
      color: '#023437',
      fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      '&.Mui-focused': {
        color: '#023437'
      },
      // <-- ensure label does NOT turn red when MUI applies .Mui-error
      '&.Mui-error': {
        color: '#023437'
      }
    },

    // extra safety: cover FormLabel root error variant too
    '& .MuiFormLabel-root.Mui-error': {
      color: '#023437'
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
      // keep the focused/after underline color behavior intact
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
    // keep your existing error underline helper rule (no label color override here)
    '& .Mui-error': {
      color: '#023437',
      '&:after': {
        borderBottomColor: '#d32f2f'
      }
    }
  });


  const handlePhoneChange = (value) => {
    // format and validate using the new functions
    const formatted = formatAustralianMobile(value);
    const validation = validateAustralianMobile(formatted);

    // map validation reasons to friendly messages
    let nextPhoneError = "";
    if (!value || value.trim() === "") {
      nextPhoneError = "";
    } else if (!validation.isValid) {
      switch (validation.reason) {
        case "invalid_prefix":
          nextPhoneError = "Prefix must be empty, 0, or +61 (e.g. +61 4XX XXX XXX)";
          break;
        case "actual_start":
          nextPhoneError = "Phone number must start with '4'";
          break;
        case "length":
          nextPhoneError = "Phone number must have 9 digits";
          break;
        default:
          nextPhoneError = "Please enter a valid Australian mobile number";
      }
    } else {
      nextPhoneError = "";
    }

    // update phoneError only if it changed
    setPhoneError((prev) => (prev === nextPhoneError ? prev : nextPhoneError));

    // write formatted value back to form state only if different
    setFormData((prev) => {
      if (prev.phoneNumber === formatted) return prev;
      return { ...prev, phoneNumber: formatted };
    });

    // clear any general phone error that may exist in errors object, only if set
    if (errors.phoneNumber) {
      setErrors((prevErrors) => {
        if (!prevErrors.phoneNumber) return prevErrors;
        return { ...prevErrors, phoneNumber: "" };
      });
    }
  };

  // --- Email helpers (minimal, live-friendly) ---
  const formatEmail = (value) => {
    if (value === undefined || value === null) return "";
    return String(value).trim();
  };

  // Returns { isValid: boolean, reason: string|null }
  // Reasons used: "missing_at", "multiple_at", "invalid_format"
  const validateEmail = (value) => {
    if (!value) return { isValid: false, reason: "missing_at" };

    const trimmed = String(value).trim();
    const atCount = (trimmed.match(/@/g) || []).length;
    if (atCount === 0) return { isValid: false, reason: "missing_at" };
    if (atCount > 1) return { isValid: false, reason: "multiple_at" };

    const simpleEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!simpleEmailRegex.test(trimmed)) return { isValid: false, reason: "invalid_format" };

    return { isValid: true, reason: null };
  };

  // Live email handler (stable ref)
  const handleEmailChange = (value) => {
    try {
      const formatted = formatEmail(value);
      const validation = validateEmail(formatted);

      let nextEmailError = "";
      if (!value || value.trim() === "") {
        nextEmailError = "";
      } else if (!validation.isValid) {
        switch (validation.reason) {
          case "missing_at":
            nextEmailError = "Missing @";
            break;
          case "multiple_at":
            nextEmailError = "Email can only contain one @";
            break;
          default:
            nextEmailError = "Please enter valid email";
        }
      } else {
        nextEmailError = "";
      }

      // update only if changed
      setEmailError((prev) => (prev === nextEmailError ? prev : nextEmailError));

      // write formatted value back to the correct state key (emailId)
      setFormData((prev) => {
        if (prev.emailId === formatted) return prev;
        return { ...prev, emailId: formatted };
      });
    } catch (err) {
      console.error("Error handling email change:", err);
      setEmailError("Please enter valid email");
    }
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Route phone field to dedicated handler
    if (name === "phoneNumber") {
      handlePhoneChange(value);
      // Clear submit message if any (same behavior as before)
      if (submitMessage) setSubmitMessage(null);
      return;
    }

    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };


  const handleCaptchaChange = (isValid) => {
    setCaptchaValid(isValid);
    if (isValid && errors.captcha) {
      setErrors(prev => ({ ...prev, captcha: '' }));
    }
  };

  // Replace your existing validateForm with this
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (phoneError) {
      // prefer the live validation message if present
      newErrors.phoneNumber = phoneError;
    } else {
      // final safety check (fallback) — runs only if no live error
      const { isValid, reason } = validateAustralianMobile(formData.phoneNumber);
      if (!isValid) {
        const phoneDigits = formData.phoneNumber.replace(/\D/g, '');
        const isValidAusLandline =
          phoneDigits.length === 10 &&
          (phoneDigits.startsWith("02") ||
            phoneDigits.startsWith("03") ||
            phoneDigits.startsWith("07") ||
            phoneDigits.startsWith("08"));

        if (!isValidAusLandline) {
          if (reason === "length") {
            newErrors.phoneNumber = "Phone number must have 9 digits after the prefix";
          } else if (reason === "actual_start") {
            newErrors.phoneNumber = "Phone number must start with '4' (after prefix)";
          } else if (reason === "invalid_prefix") {
            newErrors.phoneNumber = "Prefix must be empty, 0, or +61 (e.g. +61 4XX XXX XXX)";
          } else {
            newErrors.phoneNumber = "Please enter a valid Australian phone number";
          }
        }
      }
      // if isValid === true then mobile is valid — no error
    }

    if (!formData.emailId || !formData.emailId.trim()) {
      newErrors.emailId = 'Email is required';
    } else if (emailError) {
      // prefer the live validation message if present
      newErrors.emailId = emailError;
    } else {
      // final regex fallback (stricter)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailId)) {
        newErrors.emailId = 'Please enter a valid email address';
      }
    }


    // NEW: require concern (dropdown)
    if (!formData.concern || !formData.concern.toString().trim()) {
      newErrors.concern = 'Please select your concern';
    }

    // NEW: require caseHistory (textarea)
    if (!formData.caseHistory || !formData.caseHistory.trim()) {
      newErrors.caseHistory = 'Please briefly explain your case history';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must agree to the privacy policy';
    }

    if (formData.captchaEnabled && !captchaValid) {
      newErrors.captcha = 'Please complete the CAPTCHA verification';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please correct the errors in the form');
      return;
    }

    setIsSubmitting(true);

    // Get TrustedForm values directly from DOM at submission time
    const certField = document.querySelector('[name="xxTrustedFormCertUrl"]');
    const pingField = document.querySelector('[name="xxTrustedFormPingUrl"]');
    const tokenField = document.querySelector('[name="xxTrustedFormCertToken"]');

    const submitData = {
      Name: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber.replace(/\D/g, ''),
      emailId: formData.emailId,
      concern: formData.concern,
      caseHistory: formData.caseHistory,
      // TrustedForm & tracking - get from DOM or state
      xxTrustedFormCertUrl: certField?.value || certId || 'Not available',
      xxTrustedFormPingUrl: pingField?.value || pingUrl || 'Not available',
      xxTrustedFormCertToken: tokenField?.value || tokenUrl || 'Not available',
      pageUrl: pageUrl,
      ipAddress: ipAddress,
      // compatibility fields
      name: formData.firstName,
      email: formData.emailId,
      phone: formData.phoneNumber.replace(/\D/g, '')
    };

    try {
      const results = await sendBothEmails(submitData);

      if (results.overallSuccess) {
        toast.success('Form submitted successfully!');

        // Reset form
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

        setCaptchaValid(false);
        setCaptchaResetTrigger(prev => prev + 1);

        // Show success modal / dialog
        setSuccessDialogOpen(true);
        setShowModal(true);

      } else {
        // Admin failed (treated as required)
        toast.error('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

  const getFormLayout = () => (isMobile ? 'flex-col space-y-8' : 'grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8');

  return (
    <div id="form-section" className="w-full overflow-x-hidden" style={{
      backgroundImage: `url(${isMobile ? mobFormBG : FormBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}>
      {/* Toast container (keeps react-toastify like before) */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

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
            {/* Hidden TrustedForm fields - NO value attribute to prevent React control */}
            <input
              type="hidden"
              id="xxTrustedFormCertUrl"
              name="xxTrustedFormCertUrl"
            />
            <input
              type="hidden"
              id="xxTrustedFormCertToken"
              name="xxTrustedFormCertToken"
            />
            <input
              type="hidden"
              id="xxTrustedFormPingUrl"
              name="xxTrustedFormPingUrl"
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
                  error={!!errors.phoneNumber || !!phoneError}
                  helperText={phoneError || errors.phoneNumber}
                  sx={{
                    ...getTextFieldStyle(),
                    marginBottom: isMobile ? '0px' : '40px'
                  }}
                  inputProps={{
                    maxLength: formData.phoneNumber.replace(/[^\d+]/g, "").startsWith("+61") ? 18 : 15,
                    inputMode: "text",
                    pattern: "[+0-9 ]*"
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
                  onChange={(e) => { handleChange(e); handleEmailChange(e.target.value); }}
                  error={!!errors.emailId || !!emailError}
                  helperText={emailError || errors.emailId}
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
                <label htmlFor="privacyConsent" className="ml-3 block text-[#023437] text-left font-opensans">
                  {!isMobile ? (
                    <>
                      <span className="block">
                        I agree to the{' '}
                        <a href="/Privacy-policy" className="text-[#C09F53] underline  ">
                          privacy policy
                        </a>{' '}
                        and{' '}
                        <a href="/Disclaimer" className="text-[#C09F53] underline  ">
                          disclaimer
                        </a>{' '} and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="block">
                        I agree to the{' '}
                        <a href="/Privacy-policy" className="text-[#C09F53] underline  ">
                          privacy policy
                        </a>{' '}
                        and{' '}
                        <a href="/Disclaimer" className="text-[#C09F53] underline  ">
                          disclaimer
                        </a>{' '} and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                      </span>
                    </>
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
                  <label htmlFor="captchaEnabled" className="ml-3 block text-[#023437] text-left font-opensans">
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

            {/* Submit Button */}
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
                    font-opensans 
                    text-[16px]
                    font-semibold
                    hover:bg-[#023437]
                    hover:text-[#FFFBF3]
                  ` : `
                    inline-flex
                    h-[56px]
                    w-[280px]
                    px-[32px]
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
                    text-[22px]
                    font-medium
                    leading-normal
                    
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
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={closeModal}
              >
                <img
                  src={thankyou}
                  alt="Thank you"
                  className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200"
                />
              </div>
            )}
          </form>
        </div>
      </div>

{/* Responsive Footer Section */}
<div className="mt-16 w-full">
  {isMobile ? (
    // Mobile: Simple image
    <img
      src={Frame2}
      alt="Footer"
      className="h-full w-full object-cover mt-3"
    />
  ) : (
    // Desktop: Background with overlay text
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[850px] 3xl:h-[1000px] overflow-hidden">
      <img
        src={test}
        alt="Footer Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12 md:pb-16 lg:pb-20 2xl:pb-24 3xl:pb-28">
        {/* Delivered above Justice aligned right */}
        <p className="text-white font-bold text-lg md:text-[1.25em] lg:text-[2em] xl:text-[2.5em] 2xl:text-[3.5em] 3xl:text-[4em] drop-shadow text-right -mb-8 xl:-mb-16 xl:mr-9 2xl:mr-32 2xl:-mb-24  font-playfair">
          Delivered
        </p>

        {/* Justice aligned right so "d" of Delivered lines with "e" of Justice */}
        <h2 className="w-full text-center   text-white font-playfair font-extrabold 
          text-[10rem] md:text-[14rem] lg:text-[18rem] xl:text-[26em] min-[1600px]:text-[34em] min-[2200px]:text-[44em] 2xl:text-[28em] 3xl:text-[48em] 
          leading-none drop-shadow-lg ">
          Justice
        </h2>
      </div>
    </div>
  )}
</div>





    </div>
  );
}

export default HomeTwo;