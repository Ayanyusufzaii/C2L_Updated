import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { MenuItem, useMediaQuery } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import popup from "../../assets/SubmitPopup.png";
import { sendBothEmails, testEmailJSConnection } from "./ContactUsEmail"; 
import imageSrc from "../../assets/thankyouimng.png"
// Custom Captcha Component (keeping exactly as is)
const CustomCaptcha = ({ onCaptchaChange, resetTrigger }) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [charOffsets, setCharOffsets] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const generateCaptcha = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    let offsets = [];
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
      offsets.push((Math.random() * 10 - 5).toFixed(2));
    }
    setCaptchaText(result);
    setCharOffsets(offsets);
    setUserInput("");
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
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(true);

      const voices = window.speechSynthesis.getVoices();
      const maleUsVoice =
        voices.find(
          (voice) =>
            voice.lang === "en-US" && voice.name.toLowerCase().includes("david")
        ) || voices.find((voice) => voice.lang === "en-US");

      let currentIndex = 0;
      const speakNextChar = () => {
        if (currentIndex < captchaText.length) {
          const char = captchaText[currentIndex];
          const utterance = new SpeechSynthesisUtterance(char);
          utterance.rate = 0.5;
          utterance.pitch = 0.9;
          utterance.volume = 1.0;
          utterance.lang = "en-US";

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
              backgroundSize: "100% 10px",
              backgroundPosition: "0 50%",
            }}
          />
          <div className="relative z-10">
            {captchaText.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  transform: `translateY(${charOffsets[index]}px)`,
                  display: "inline-block",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  color: "black",
                }}
                className="mx-0.5 text-black font-bold"
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
                isSpeaking ? "opacity-50 cursor-not-allowed" : ""
              }`}
              title="Listen to CAPTCHA"
            >
              {isSpeaking ? "🔊🎵" : "🔊"}
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
          className="h-5 w-5 rounded border-gray-300 text-[#C09F53] focus:ring-[#C09F53] focus:ring-offset-0 accent-[#C09F53]"
        />
        <label htmlFor="enableAudio" className="ml-2 text-sm text-white">
          Enable Audio
        </label>
      </div>

      <div className="mt-3">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter CAPTCHA"
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 bg-white ${
            userInput !== "" && !isValid
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300"
          }`}
        />
        {userInput !== "" && !isValid && (
          <p className="text-red-500 text-sm mt-1">CAPTCHA does not match</p>
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

const SuccessPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
      <img
        src={imageSrc}
        alt="Success"
        onClick={onClose}
        className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200"
      />
    </div>
  );
};

// STRICT formatter for your 3 allowed patterns, but allows typing + while user types:
// "" -> "4XX XXX XXX"
// "0" -> "04XX XXX XXX"
// "+61" -> "+61 4XX XXX XXX"
// while typing "+6", "+61", "+612" etc. it'll preserve the plus and digits so user can complete +61
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


// Australian Phone number formatting function (keeping exactly as is)
const formatPhoneNumber = (value) => {
  const phoneNumber = value.replace(/\D/g, "");
  
  if (phoneNumber.length === 0) {
    return "";
  }
  
  if (phoneNumber.startsWith("04")) {
    if (phoneNumber.length <= 4) {
      return phoneNumber;
    } else if (phoneNumber.length <= 7) {
      return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`;
    } else if (phoneNumber.length <= 10) {
      return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 10)}`;
    } else {
      return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 10)}`;
    }
  } 
  else if (phoneNumber.startsWith("02") || phoneNumber.startsWith("03") || 
           phoneNumber.startsWith("07") || phoneNumber.startsWith("08")) {
    if (phoneNumber.length <= 2) {
      return `(${phoneNumber}`;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    } else if (phoneNumber.length <= 10) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)} ${phoneNumber.slice(6, 10)}`;
    } else {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)} ${phoneNumber.slice(6, 10)}`;
    }
  }
  else {
    if (phoneNumber.length <= 4) {
      return phoneNumber;
    } else if (phoneNumber.length <= 8) {
      return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`;
    } else {
      return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 8)} ${phoneNumber.slice(8, 10)}`;
    }
  }
};

const ContactUsForm = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width:769px) and (max-width:1024px)");
  const isLaptop = useMediaQuery("(min-width:1025px) and (max-width:1535px)");

  const formRef = useRef();
  const [formData, setFormData] = useState({
    Name: "",
    lastName: "",
    phoneNumber: "",
    emailId: "",
    concern: "",
    caseHistory: "",
    settlementHelp: false,
    privacyConsent: false,
    humanVerification: false,
    captchaEnabled: false,
  });

  const [errors, setErrors] = useState({});
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  

  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);
  const [pingUrl, setPingUrl] = useState("");
  const [certId, setCertId] = useState("");
  const [tokenUrl, setTokenUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  // Test EmailJS on component mount (remove in production)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('test') === 'true') {
      testEmailJSConnection();
    }
  }, []);

  // Capture page URL and IP on mount
  useEffect(() => {
    setPageUrl(window.location.href);

    if (window.userIP) {
      setIpAddress(window.userIP);
    } else {
      fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => setIpAddress(data.ip))
        .catch((err) => console.error("Error fetching IP:", err));
    }
  }, []);

  // Improved TrustedForm integration (from working form)
  useEffect(() => {
    let observerInstance = null;
    let timeoutId = null;

    const initializeTrustedFormObserver = () => {
      observerInstance = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "value") {
            const target = mutation.target;

            try {
              if (target.name === "xxTrustedFormCertUrl" && target.value) {
                setCertId(target.value);
              }
              if (target.name === "xxTrustedFormPingUrl" && target.value) {
                setPingUrl(target.value);
              }
              if (target.name === "xxTrustedFormCertToken" && target.value) {
                setTokenUrl(target.value);
              }
            } catch (error) {
              console.warn("TrustedForm observer error:", error);
            }
          }
        });
      });

      const startObserving = () => {
        const trustedFormFields = document.querySelectorAll(
          '[name="xxTrustedFormCertUrl"], [name="xxTrustedFormPingUrl"], [name="xxTrustedFormCertToken"]'
        );

        trustedFormFields.forEach((field) => {
          if (field && observerInstance) {
            observerInstance.observe(field, { 
              attributes: true, 
              attributeFilter: ['value'] 
            });

            if (field.value) {
              switch (field.name) {
                case "xxTrustedFormCertUrl":
                  setCertId(field.value);
                  break;
                case "xxTrustedFormPingUrl":
                  setPingUrl(field.value);
                  break;
                case "xxTrustedFormCertToken":
                  setTokenUrl(field.value);
                  break;
                default:
                  break;
              }
            }
          }
        });
      };

      timeoutId = setTimeout(startObserving, 1000);
    };

    initializeTrustedFormObserver();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (observerInstance) observerInstance.disconnect();
    };
  }, []);

const textFieldStyle = {
  "& .MuiInputLabel-root": {
    color: "white",
    fontSize: isMobile ? "16px" : isTablet ? "18px" : isLaptop ? "14px" : "16px",
    fontFamily: "Helvetica",
    fontWeight: "normal",
    "&.Mui-focused": {
      color: "white",
    },
    // ensure label does NOT turn red when MUI applies .Mui-error
    "&.Mui-error": {
      color: "white",
    }
  },
  // extra safety: cover FormLabel root error variant too
  "& .MuiFormLabel-root.Mui-error": {
    color: "white",
  },
  "& .MuiInput-root": {
    fontSize: isMobile ? "16px" : isTablet ? "18px" : isLaptop ? "14px" : "16px",
    fontFamily: "Helvetica",
    color: "white",
    "&:before": {
      borderBottomColor: "white",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottomColor: "white",
    },
    "&:after": {
      borderBottomColor: "white",
    },
    "&.Mui-focused": {
      color: "white",
    },
  },
  "& .MuiInputBase-input": {
    color: "white",
    fontSize: isMobile ? "16px" : isTablet ? "18px" : isLaptop ? "14px" : "16px",
    fontWeight: "normal",
  },
  "& .MuiInput-input": {
    color: "white",
    fontSize: isMobile ? "16px" : isTablet ? "18px" : isLaptop ? "14px" : "16px",
    fontWeight: "normal",
  },
  "& .MuiFormHelperText-root": {
    color: "white",
    fontSize: isMobile ? "12px" : isTablet ? "14px" : isLaptop ? "14px" : "16px",
    fontFamily: "Helvetica",
  },
  "& .Mui-error": {
    color: "white",
    "&:after": {
      borderBottomColor: "#d32f2f",
    },
  },
};


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




  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let processedValue = value;

    // Clear submit message when user makes changes
    if (submitMessage) {
      setSubmitMessage(null);
    }

    if (name === "phoneNumber") {
    handlePhoneChange(value);
    return;
  }

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : processedValue,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleCaptchaChange = (isValid) => {
    setCaptchaValid(isValid);
    if (isValid && errors.captcha) {
      setErrors(prev => ({ ...prev, captcha: '' }));
    }
  };

const validateForm = () => {
  const newErrors = {};

  if (!formData.Name || !formData.Name.trim()) {
    newErrors.Name = "Name is required";
  }

  if (!formData.phoneNumber || !formData.phoneNumber.trim()) {
    newErrors.phoneNumber = "Phone number is required";
  } else if (phoneError) {
    // prefer the live validation message if present
    newErrors.phoneNumber = phoneError;
  } else {
    // final safety check (fallback) — runs only if no live error
    const { isValid, reason } = validateAustralianMobile(formData.phoneNumber);
    if (!isValid) {
      const phoneDigits = formData.phoneNumber.replace(/\D/g, "");
      const isValidAusLandline =
        phoneDigits.length === 10 &&
        (phoneDigits.startsWith("02") ||
          phoneDigits.startsWith("03") ||
          phoneDigits.startsWith("07") ||
          phoneDigits.startsWith("08"));

      if (!isValidAusLandline) {
        if (reason === "length") {
          // keep your existing message shape
          newErrors.phoneNumber = "Phone number must have 10 digits";
        } else if (reason === "prefix" || reason === "invalid_prefix") {
          newErrors.phoneNumber = "Mobile must start with 04 (or +61 4...)";
        } else {
          newErrors.phoneNumber = "Please enter a valid Australian phone number";
        }
      }
    }
    // if isValid === true then mobile is valid — no error
  }

  if (!formData.emailId || !formData.emailId.trim()) {
    newErrors.emailId = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailId)) {
      newErrors.emailId = "Please enter a valid email";
    }
  }

  // NEW: require concern (dropdown)
  if (!formData.concern || !String(formData.concern).trim()) {
    newErrors.concern = "Please select your concern";
  }

  // NEW: require caseHistory (textarea)
  if (!formData.caseHistory || !formData.caseHistory.trim()) {
    newErrors.caseHistory = "Please briefly explain your case history";
  }

  if (!formData.privacyConsent) {
    newErrors.privacyConsent = "You must agree to the privacy policy";
  }

  if (formData.captchaEnabled && !captchaValid) {
    newErrors.captcha = "Please complete the CAPTCHA verification";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  // IMPROVED SUBMIT HANDLER (Using working logic)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    // Prepare form data with all fields
    const submitData = {
      Name: formData.Name,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber.replace(/\D/g, ""), // Send raw phone digits
      emailId: formData.emailId,
      concern: formData.concern,
      caseHistory: formData.caseHistory,
      
      // TrustedForm data
      xxTrustedFormCertUrl: certId || "Not available",
      xxTrustedFormPingUrl: pingUrl || "Not available",
      xxTrustedFormCertToken: tokenUrl || "Not available",
      
      // Additional metadata
      pageUrl: pageUrl,
      ipAddress: ipAddress,
      
      // For compatibility with service
      name: formData.Name,
      email: formData.emailId,
      phone: formData.phoneNumber.replace(/\D/g, ""),
      certId: certId,
      tokenUrl: tokenUrl,
      pingUrl: pingUrl,
    };

    try {
      console.log("Submitting form with data:", submitData);
      
      // Use the centralized email service
      const results = await sendBothEmails(submitData);
      
      if (results.overallSuccess) {
        // Success - at least admin email was sent
        toast.success("Form submitted successfully!");
        
        // Reset form
        setFormData({
          Name: "",
          lastName: "",
          phoneNumber: "",
          emailId: "",
          concern: "",
          caseHistory: "",
          settlementHelp: false,
          privacyConsent: false,
          humanVerification: false,
          captchaEnabled: false,
        });

        setPhoneError("");
        
        // Reset captcha
        setCaptchaValid(false);
        setCaptchaResetTrigger((prev) => prev + 1);
        
        // Show success popup
        setSuccessDialogOpen(true);
        
        // Set success message
        if (results.user.success) {
          setSubmitMessage({
            type: "success",
            text: "Form submitted successfully! You should receive a confirmation email shortly.",
          });
        } else {
          setSubmitMessage({
            type: "success",
            text: "Form submitted successfully! We have received your inquiry.",
          });
        }
        
    
        
      } else {
        // Both emails failed
        throw new Error("Failed to send emails");
      }
      
    } catch (error) {
      console.error("Form submission error:", error);
      
      // Show error message
      toast.error("There was an error submitting your form. Please try again.");
      
      setSubmitMessage({
        type: "error",
        text: "There was an error submitting your form. Please try again or contact us directly.",
      });
      
    } finally {
      setIsSubmitting(false);
    }
  };

  // MOBILE FORM
  if (isMobile) {
    return (
      <>
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
        
        <div className="w-full bg-[#023437] px-4 py-8 flex flex-col items-center">
          <h1 className="w-full max-w-lg text-[#C09F53] font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-center">
            <span style={{ color: "white" }}>Let's Review</span> Your Case{" "}
            <span style={{ color: "white" }}>Today</span>.
          </h1>
          <p className="text-[#C09F53] font-open-sans text-base sm:text-lg font-semibold mb-9 w-full max-w-lg text-center font-opensans">
            Take the first step toward justice—complete your free case evaluation
            today.
          </p>

          {/* Success/Error Message Display */}
          {submitMessage && (
            <div className="w-full max-w-lg px-2 mb-4">
              <div
                className={`p-4 rounded-md ${
                  submitMessage.type === "success"
                    ? "bg-green-100 border border-green-400 text-green-700"
                    : "bg-red-100 border border-red-400 text-red-700"
                }`}
              >
                {submitMessage.text}
              </div>
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-6 px-2"
          >
            {/* Hidden TrustedForm fields */}
            <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" value={certId} />
            <input type="hidden" id="xxTrustedFormCertToken" name="xxTrustedFormCertToken" value={tokenUrl} />
            <input type="hidden" id="xxTrustedFormPingUrl" name="xxTrustedFormPingUrl" value={pingUrl} />

            <TextField
              id="Name"
              name="Name"
              label="Full name"
              variant="standard"
              fullWidth
              value={formData.Name}
              onChange={handleChange}
              error={!!errors.Name}
              helperText={errors.Name}
              sx={textFieldStyle}
            />

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
              sx={textFieldStyle}
              inputProps={{ maxLength: 15 }}
            />

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
              sx={textFieldStyle}
            />

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
              sx={textFieldStyle}
            >
              <MenuItem value="Mesothelioma Lawsuit">Mesothelioma Lawsuit</MenuItem>
              <MenuItem value="Truck Accident Claims">Truck Accident Claims</MenuItem>
              <MenuItem value="Rideshare Class Action Lawsuits">Rideshare Class Action Lawsuits</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            <TextField
              id="caseHistory"
              name="caseHistory"
              label="Briefly explain your case history"
              variant="standard"
              fullWidth
              multiline
              rows={3}
              value={formData.caseHistory}
              onChange={handleChange}
              error={!!errors.caseHistory}
              helperText={errors.caseHistory}
              sx={textFieldStyle}
            />

            <div className="space-y-4 text-white text-sm leading-relaxed">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  checked={formData.privacyConsent || false}
                  onChange={handleChange}
                  className="h-5 w-5 mt-1 rounded border-gray-300 text-[#C09F53] focus:ring-[#C09F53] focus:ring-offset-0 accent-[#C09F53]"
                  required
                />
                </div>
                <label htmlFor="privacyConsent" className="ml-3 block text-left font-opensans text-[#FFFBF399]">
                  <span>
                    I agree to the{" "}
                    <a href="/Privacy-policy" className="text-[#C09F53] underline hover:text-blue-200">
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a href="/Disclaimer" className="text-[#C09F53] underline hover:text-blue-200">
                      disclaimer
                    </a>{" "}
                    and give my express written consent, affiliates and/or lawyer
                    to contact you at the number provided above, even if this
                    number is a wireless number or if I am presently listed on a
                    Do Not Call list.
                  </span>
                  <span className="block mt-2">
                    I understand that I may be contacted by telephone, email, text
                    message or mail regarding case options and that I may be
                    called using automatic dialing equipment. Message and data
                    rates may apply. My consent does not require purchase. This is
                    Legal advertising.
                  </span>
                </label>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                <input
                  type="checkbox"
                  id="captchaEnabled"
                  name="captchaEnabled"
                  checked={formData.captchaEnabled || false}
                  onChange={handleChange}
                  className="h-5 w-5 mt-1 rounded border-gray-300 text-[#C09F53] focus:ring-[#C09F53] focus:ring-offset-0 accent-[#C09F53]"
                />
                </div>
                <label htmlFor="captchaEnabled" className="ml-3 block font-opensans text-[#FFFBF399]">
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
                <p className="text-red-300 text-sm mt-1">{errors.captcha}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 px-6 justify-center items-center rounded-[40px] bg-[#C09F53] text-[#FFFBF3] border border-[#FFFBF3] font-bold hover:bg-[#374A67] disabled:opacity-70 w-full mt-8"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#FFFBF3]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>

<SuccessPopup
  isOpen={successDialogOpen}
  onClose={() => setSuccessDialogOpen(false)}
/>

        </div>
      </>
    );
  }

  // DESKTOP FORM (rest of the code remains exactly the same)
  return (
    <>
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
      
      <div className="w-full bg-[#023437] from-11.75% to-[rgba(2,52,55,0.53)] to-100% backdrop-blur-[12.5px] py-8 md:py-16">
        <div className="max-w-[2200px] mx-auto flex flex-col items-start">
          <div className="w-full flex flex-row items-end justify-between mb-20 px-0 md:px-8 lg:px-12 xl:px-16 2xl:px-16">
            <h1 className="text-[#C09F53] font-['Playfair_Display'] text-[24px] md:text-[36px] lg:text-[48px] xl:text-[60px] 2xl:text-[60px] font-bold leading-tight text-left pl-[0px]">
              <span style={{ color: "white" }}>Let's Review</span>
              <br />
              Your Case <span style={{ color: "white" }}>Today.</span>
            </h1>
            <div className="pb-0">
              <p className="text-[#C09F53] font-open-sans text-base md:text-lg lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-normal leading-relaxed text-right max-w-[500px] xl:max-w-[500px] 2xl:max-w-[500px] font-opensans">
                Take the first step toward justice complete
                <br />
                your free case evaluation today.
              </p>
            </div>
          </div>
        </div>

        {/* Success/Error Message Display */}
        {submitMessage && (
          <div className="flex justify-end px-4 sm:px-6 sm:pl-12 md:px-8 md:pl-16 lg:pl-32 lg:pr-6 xl:pl-48 xl:pr-8 2xl:pl-64 2xl:pr-8 mb-4">
            <div className="w-full max-w-[1200px] mx-auto md:pl-8 lg:pl-16 xl:pl-32 2xl:pl-48 px-0">
              <div
                className={`p-4 rounded-md ${
                  submitMessage.type === "success"
                    ? "bg-green-100 border border-green-400 text-green-700"
                    : "bg-red-100 border border-red-400 text-red-700"
                }`}
              >
                {submitMessage.text}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end px-4 sm:px-6 sm:pl-12 md:px-8 md:pl-16 lg:pl-32 lg:pr-6 xl:pl-48 xl:pr-8 2xl:pl-64 2xl:pr-8 3xl:pl-80 3xl:pr-8 4xl:pl-96 4xl:pr-8 5xl:pl-[48rem] 5xl:pr-12">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-[1200px] mx-auto md:pl-8 lg:pl-16 xl:pl-32 2xl:pl-48 px-0"
          >
            {/* Hidden TrustedForm fields */}
            <input type="hidden" id="xxTrustedFormCertUrl" name="xxTrustedFormCertUrl" value={certId} />
            <input type="hidden" id="xxTrustedFormCertToken" name="xxTrustedFormCertToken" value={tokenUrl} />
            <input type="hidden" id="xxTrustedFormPingUrl" name="xxTrustedFormPingUrl" value={pingUrl} />

            {/* Rest of your desktop form fields remain exactly the same */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 xl:gap-20 mb-12">
              <div className="space-y-10">
                <TextField
                  id="Name"
                  name="Name"
                  label="Full name"
                  variant="standard"
                  fullWidth
                  value={formData.Name}
                  onChange={handleChange}
                  error={!!errors.Name}
                  helperText={errors.Name}
                  sx={textFieldStyle}
                />

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
                  sx={textFieldStyle}
                />
              </div>

              <div className="space-y-10">
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  variant="standard"
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber || !!phoneError}
                  helperText={phoneError || errors.phoneNumber}
                  sx={textFieldStyle}
                  inputProps={{ maxLength: 15 }}
                />
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
                  sx={textFieldStyle}
                  InputLabelProps={{
                    sx: {
                      marginBottom: "40px",
                    },
                  }}
                >
                  <MenuItem value="Mesothelioma Lawsuit" sx={{ textAlign: "left" }}>
                    Mesothelioma Lawsuit
                  </MenuItem>
                  <MenuItem value="Truck Accident Claims" sx={{ textAlign: "left" }}>
                    Truck Accident Claims
                  </MenuItem>
                  <MenuItem value="Rideshare Class Action Lawsuits" sx={{ textAlign: "left" }}>
                    Rideshare Class Action Lawsuits
                  </MenuItem>
                  <MenuItem value="Other" sx={{ textAlign: "left" }}>
                    Other
                  </MenuItem>
                </TextField>
              </div>
            </div>

            <div className="w-full mb-12">
              <TextField
                id="caseHistory"
                name="caseHistory"
                label="Briefly explain your case history"
                variant="standard"
                fullWidth
                value={formData.caseHistory}
                onChange={handleChange}
                error={!!errors.caseHistory}
                helperText={errors.caseHistory}
                sx={{
                  ...textFieldStyle,
                  marginBottom: "40px",
                  "& .MuiInputLabel-root": {
                    transform: "translate(0, 15px) scale(1)",
                    fontSize: isMobile ? "16px" : isTablet ? "18px" : isLaptop ? "14px" : "16px",
                    color: "white",
                    fontWeight: "normal",
                  },
                  "& .MuiInputLabel-shrink": {
                    transform: "translate(0, -10px) scale(0.75)",
                    color: "white",
                  },
                  "& .MuiInput-root": {
                    marginTop: "50px",
                    color: "white",
                    "&:before": {
                      borderBottom: "1px solid white",
                      marginTop: "20px",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "2px solid white",
                    },
                    "&:after": {
                      borderBottom: "2px solid white",
                    },
                  },
                  "& .MuiInput-input": {
                    color: "white",
                    fontSize: isMobile ? "16px" : isTablet ? "18px" : isLaptop ? "14px" : "16px",
                    fontWeight: "normal",
                  },
                  "& .MuiFormHelperText-root": {
                    color: "white",
                  },
                }}
              />

              <div className="space-y-8 text-white">
                <div className="flex items-start">
                  <div className="flex-shrink-0 -mt-0.5">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      checked={formData.privacyConsent || false}
                      onChange={handleChange}
                      className="h-5 w-5 mt-1 rounded border-gray-300 text-[#C09F53] focus:ring-[#C09F53] focus:ring-offset-0 accent-[#C09F53]"
                      required
                    />
                  </div>
                  <label
                    htmlFor="privacyConsent"
                    className="ml-3 block text-[#FFFBF399] font-opensans text-[12px] font-normal text-left"
                  >
                    <span className="block">
                      I agree to the{" "}
                      <a href="/Privacy-policy" className="text-[#C09F53] underline hover:text-yellow-500">
                        privacy policy
                      </a>{" "}
                      and{" "}
                      <a href="/Disclaimer" className="text-[#C09F53] underline hover:text-yellow-500">
                        disclaimer
                      </a>{" "}
                      and give my express written consent, affiliates and/or
                      lawyer to contact you at the number provided above, even if
                      this number is a wireless number or if I am presently listed
                      on a Do Not Call list. I understand that I may be contacted
                      by telephone, email, text message or mail regarding case
                      options and that I may be called using automatic dialing
                      equipment. Message and data rates may apply. My consent does
                      not require purchase. This is Legal advertising.
                    </span>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="captchaEnabled"
                    name="captchaEnabled"
                    checked={formData.captchaEnabled || false}
                    onChange={handleChange}
                    className="h-5 w-5 mt-1 rounded border-gray-300 text-[#C09F53] focus:ring-[#C09F53] focus:ring-offset-0 accent-[#C09F53] font-opensans"
                  />
                  <label
                    htmlFor="captchaEnabled"
                    className="ml-3 block text-[12px] font-normal text-[#FFFBF399] font-opensans "
                  >
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
                  <p className="text-red-300 text-sm mt-1">{errors.captcha}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-[60px] px-[49px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[60px] bg-[#C09F53] text-[#FFFBF3] border border-[#C09F53] font-open-sans text-[22px] font-bold leading-normal hover:bg-[#374A67] disabled:opacity-70 transition-colors duration-200 w-[400px] md:w-[350px] lg:w-[400px] xl:w-[420px] 2xl:w-[450px]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#FFFBF3]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>

<SuccessPopup
  isOpen={successDialogOpen}
  onClose={() => setSuccessDialogOpen(false)}
/>
      </div>
    </>
  );
};

export default ContactUsForm;