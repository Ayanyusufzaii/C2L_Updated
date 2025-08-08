import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { MenuItem, useMediaQuery } from "@mui/material";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import popup from "../../assets/subpopup.png";


emailjs.init("DyDZ85E9uwzwSyUoD"); 

// Custom Captcha Component
const CustomCaptcha = ({ onCaptchaChange, resetTrigger }) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
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
    if ("speechSynthesis" in window) {
      // Stop any ongoing speech before starting new one
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
          className="mr-2"
        />
        <label htmlFor="enableAudio" className="text-sm text-white">
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

// Success Popup Component
const SuccessPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Popup Container */}
      <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-auto relative transform transition-all duration-300 scale-100">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            aria-label="Close"
          >
            <svg 
              className="w-5 h-5 text-gray-600" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Content Container */}
          <div className="p-6 sm:p-8">
            {/* Success Image Placeholder */}
            <div className="mb-6 flex justify-center">
              {/* Replace this div with your image when ready */}
              <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <img 
                src={popup} 
                alt="Success" 
                className="w-full h-auto rounded-lg object-cover"
              />
              </div>
              
            </div>

            {/* Success Message */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Submission Successful!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for submitting your case. We have received your information and will review it promptly.
              </p>
              
              {/* Additional Info */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 text-sm">
                  ✓ A confirmation email has been sent to your email address
                </p>
                <p className="text-green-800 text-sm mt-2">
                  ✓ Our team will contact you within 24-48 hours
                </p>
              </div>

              {/* Action Button */}
              <div className="flex justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-[#C09F53] text-white rounded-lg hover:bg-[#a08545] transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Australian Phone number formatting function
const formatPhoneNumber = (value) => {
  // Remove all non-numeric characters
  const phoneNumber = value.replace(/\D/g, "");

  // Australian phone number formatting
  // Mobile: 04XX XXX XXX (10 digits starting with 04)
  // Landline: (0X) XXXX XXXX (10 digits starting with 02, 03, 07, 08)
  
  if (phoneNumber.length === 0) {
    return "";
  }
  
  // Check if it's a mobile number (starts with 04)
  if (phoneNumber.startsWith("04")) {
    if (phoneNumber.length <= 4) {
      return phoneNumber;
    } else if (phoneNumber.length <= 7) {
      return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`;
    } else if (phoneNumber.length <= 10) {
      return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 10)}`;
    } else {
      // Limit to 10 digits
      return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 10)}`;
    }
  } 
  // Check if it's a landline (starts with 02, 03, 07, 08)
  else if (phoneNumber.startsWith("02") || phoneNumber.startsWith("03") || 
           phoneNumber.startsWith("07") || phoneNumber.startsWith("08")) {
    if (phoneNumber.length <= 2) {
      return `(${phoneNumber}`;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    } else if (phoneNumber.length <= 10) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)} ${phoneNumber.slice(6, 10)}`;
    } else {
      // Limit to 10 digits
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)} ${phoneNumber.slice(6, 10)}`;
    }
  }
  // For any other input, just format as groups
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  // New states for lander essentials
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);
  const [pingUrl, setPingUrl] = useState("");
  const [certId, setCertId] = useState("");
  const [tokenUrl, setTokenUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  // Capture page URL and IP on mount
  useEffect(() => {
    // Set page URL
    setPageUrl(window.location.href);

    // Get IP address
    if (window.userIP) {
      setIpAddress(window.userIP);
    } else {
      fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => setIpAddress(data.ip))
        .catch((err) => console.error("Error fetching IP:", err));
    }
  }, []);

  // TrustedForm integration
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "value"
        ) {
          const target = mutation.target;

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

    const timeoutId = setTimeout(() => {
      const certField = document.querySelector('[name="xxTrustedFormCertUrl"]');
      const pingField = document.querySelector('[name="xxTrustedFormPingUrl"]');
      const tokenField = document.querySelector(
        '[name="xxTrustedFormCertToken"]'
      );

      [certField, pingField, tokenField].forEach((field) => {
        if (field) observer.observe(field, { attributes: true });
      });

      if (certField?.value) setCertId(certField.value);
      if (pingField?.value) setPingUrl(pingField.value);
      if (tokenField?.value) setTokenUrl(tokenField.value);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const textFieldStyle = {
    "& .MuiInputLabel-root": {
      color: "white",
      fontSize: isMobile
        ? "16px"
        : isTablet
        ? "18px"
        : isLaptop
        ? "14px"
        : "16px",
      fontFamily: "Helvetica",
      fontWeight: "normal",
      "&.Mui-focused": {
        color: "white",
      },
    },
    "& .MuiInput-root": {
      fontSize: isMobile
        ? "16px"
        : isTablet
        ? "18px"
        : isLaptop
        ? "14px"
        : "16px",
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
      fontSize: isMobile
        ? "16px"
        : isTablet
        ? "18px"
        : isLaptop
        ? "14px"
        : "16px",
      fontWeight: "normal",
    },
    "& .MuiInput-input": {
      color: "white",
      fontSize: isMobile
        ? "16px"
        : isTablet
        ? "18px"
        : isLaptop
        ? "14px"
        : "16px",
      fontWeight: "normal",
    },
    "& .MuiFormHelperText-root": {
      color: "white",
      fontSize: isMobile
        ? "12px"
        : isTablet
        ? "14px"
        : isLaptop
        ? "14px"
        : "16px",
      fontFamily: "Helvetica",
    },
    "& .Mui-error": {
      color: "white",
      "&:after": {
        borderBottomColor: "#d32f2f",
      },
    },
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let processedValue = value;

    // Format phone number
    if (name === "phoneNumber") {
      processedValue = formatPhoneNumber(value);
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
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required";
    } else if (formData.Name.length < 1) {
      newErrors.Name = "Name must be at least 1 character";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else {
      const phoneDigits = formData.phoneNumber.replace(/\D/g, "");
      
      // Australian phone validation
      const isValidAusMobile = phoneDigits.length === 10 && phoneDigits.startsWith("04");
      const isValidAusLandline = phoneDigits.length === 10 && 
        (phoneDigits.startsWith("02") || phoneDigits.startsWith("03") || 
         phoneDigits.startsWith("07") || phoneDigits.startsWith("08"));
      
      if (!isValidAusMobile && !isValidAusLandline) {
        newErrors.phoneNumber = "Please enter a valid Australian phone number (10 digits starting with 04 for mobile or 02/03/07/08 for landline)";
      }
    }

    if (!formData.emailId.trim()) {
      newErrors.emailId = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailId)) {
        newErrors.emailId = "Please enter a valid email";
      }
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "You must agree to the privacy policy";
    }

    // if (!formData.humanVerification) {
    //   newErrors.humanVerification = "Please verify you are human";
    // }

    // Add captcha validation
    if (formData.captchaEnabled && !captchaValid) {
      newErrors.captcha = "Please complete the CAPTCHA verification";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ============= CRITICAL FIX #2: Fixed handleSubmit Function =============
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    setIsSubmitting(true);

    const serviceId = "service_brjo5qt";
    const adminTemplateId = "template_ur9kzbh"; // Your existing template for admin
    const userTemplateId = "template_ur9kzbh"; // Create this new template in EmailJS if it doesn't exist


    const templateParams = {
      from_name: `${formData.Name} ${formData.lastName}`,
      user_email: formData.emailId,
      email: formData.emailId,
      phone_number: formData.phoneNumber,
      concern: formData.concern || "Not specified",
      case_history: formData.caseHistory || "Not provided",
      // Add TrustedForm and other lander essentials with defaults
      xxTrustedFormCertUrl: certId || "Not available",
      xxTrustedFormPingUrl: pingUrl || "Not available",
      xxTrustedFormCertToken: tokenUrl || "Not available",
      pageUrl: pageUrl,
      ipAddress: ipAddress || "Not available",
      to_email: formData.emailId, // For user template
      user_name: formData.Name, // For user template
    };

    try {
      // Send email to Admin (NO publicKey parameter since we initialized at the top)
      const adminResult = await emailjs.send(serviceId, adminTemplateId, templateParams);
      console.log("Admin email sent successfully:", adminResult);

      // Try to send confirmation email to User (optional - won't fail if template doesn't exist)
      try {
        const userResult = await emailjs.send(serviceId, userTemplateId, templateParams);
        console.log("User confirmation email sent:", userResult);
      } catch (userError) {
        // If user template doesn't exist, just log warning but don't fail
        console.warn("User confirmation email failed (non-critical):", userError);
        // Continue anyway - admin email was sent successfully
      }

      // Show success
      toast.success("Form submitted successfully!");

      // Reset form data
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

      // Reset captcha
      setCaptchaValid(false);
      setCaptchaResetTrigger((prev) => prev + 1);

      // Show success popup
      setSuccessDialogOpen(true);

    } catch (error) {
      console.error("Email sending error:", error);
      
      // Provide specific error messages
      let errorMessage = "Error submitting form. ";
      
      if (error.status === 400) {
        errorMessage += "Invalid EmailJS configuration. Please check service ID and template IDs.";
      } else if (error.status === 401) {
        errorMessage += "EmailJS authentication failed. Please check your public key.";
      } else if (error.status === 404) {
        errorMessage += "EmailJS template not found. Please verify template IDs.";
      } else if (error.status === 422) {
        errorMessage += "Invalid template parameters. Please check your EmailJS template configuration.";
      } else if (error.text) {
        errorMessage += error.text;
      } else {
        errorMessage += "Please try again later or contact support.";
      }
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isMobile) {
    return (
      <>
        {/* ============= CRITICAL FIX #3: Add ToastContainer ============= */}
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
        
        <div className="w-full bg-[#023437] px-0 py-8 flex flex-col items-center">
          <h1 className="w-full max-w-lg text-[#C09F53] font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-center">
            <span style={{ color: "white" }}>Let's Review</span> Your Case{" "}
            <span style={{ color: "white" }}>Today</span>.
          </h1>
          <p className="text-[#C09F53] font-open-sans text-base sm:text-lg font-semibold mb-9 w-full max-w-lg text-center">
            Take the first step toward justice—complete your free case evaluation
            today.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-6 px-2"
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
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              sx={textFieldStyle}
              inputProps={{ maxLength: 14 }}
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
              <MenuItem value="Mesothelioma Lawsuit">
                Mesothelioma Lawsuit
              </MenuItem>
              <MenuItem value="Truck Accident Claims">
                Truck Accident Claims
              </MenuItem>
              <MenuItem value="Rideshare Class Action Lawsuits">
                Rideshare Class Action Lawsuits
              </MenuItem>
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

            {/* Checkbox Section */}
            <div className="space-y-4 text-white text-sm leading-relaxed">
              {/* <div className="flex items-start">
                <input
                  type="checkbox"
                  id="settlementHelp"
                  name="settlementHelp"
                  checked={formData.settlementHelp || false}
                  onChange={handleChange}
                  className="h-5 w-5 border-2 border-white bg-transparent checked:bg-[#C09F53] checked:border-[#C09F53] focus:ring-1 focus:ring-white appearance-none relative mt-1 cursor-pointer"
                />
                <label htmlFor="settlementHelp" className="ml-3 block">
                  I would be needing help to file a settlement.
                </label>
              </div> */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  checked={formData.privacyConsent || false}
                  onChange={handleChange}
                  className="h-5 w-5 accent-[#C09F53] mt-1"
                  required
                />
                <label htmlFor="privacyConsent" className="ml-3 block text-left">
                  <span>
                    I agree to the{" "}
                    <a
                      href="/Privacypolicy"
                      className="underline hover:text-blue-200"
                    >
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/Disclaimer"
                      className="underline hover:text-blue-200"
                    >
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

              {/* Human Verification with Captcha */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="captchaEnabled"
                  name="captchaEnabled"
                  checked={formData.captchaEnabled || false}
                  onChange={handleChange}
                  className="h-5 w-5 accent-[#C09F53] mt-1"
                />
                <label htmlFor="captchaEnabled" className="ml-3 block">
                  Please click this box so we know you're a person and not a
                  computer
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
              className="
                            inline-flex
                            h-12
                            px-6
                            justify-center
                            items-center
                            rounded-[40px]
                            bg-[#C09F53]
                            text-[#FFFBF3]
                            border
                            border-[#FFFBF3]
                            font-bold
                            hover:bg-[#374A67]
                            disabled:opacity-70
                            w-full
                            mt-8
                        "
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Success Popup */}
          <SuccessPopup 
            isOpen={successDialogOpen} 
            onClose={() => setSuccessDialogOpen(false)} 
          />
        </div>
      </>
    );
  }

  // Desktop Form
  return (
    <>
      {/* ============= CRITICAL FIX #3: Add ToastContainer ============= */}
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
              <p className="text-[#C09F53] font-open-sans text-base md:text-lg lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-normal leading-relaxed text-right max-w-[500px] xl:max-w-[500px] 2xl:max-w-[500px]">
                Take the first step toward justice complete
                <br />
                your free case evaluation today.
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex justify-end 
    px-4 
    sm:px-6 sm:pl-12 
    md:px-8 md:pl-16 
    lg:pl-32 lg:pr-6 
    xl:pl-48 xl:pr-8 
    2xl:pl-64 2xl:pr-8 
    3xl:pl-80 3xl:pr-8
    4xl:pl-96 4xl:pr-8 
    5xl:pl-[48rem] 5xl:pr-12"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-[1200px] mx-auto md:pl-8 lg:pl-16 xl:pl-32 2xl:pl-48 px-0"
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
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  sx={textFieldStyle}
                  inputProps={{ maxLength: 14 }}
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
                  <MenuItem
                    value="Mesothelioma Lawsuit"
                    sx={{ textAlign: "left" }}
                  >
                    Mesothelioma Lawsuit
                  </MenuItem>
                  <MenuItem
                    value="Truck Accident Claims"
                    sx={{ textAlign: "left" }}
                  >
                    Truck Accident Claims
                  </MenuItem>
                  <MenuItem
                    value="Rideshare Class Action Lawsuits"
                    sx={{ textAlign: "left" }}
                  >
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
                    fontSize: isMobile
                      ? "16px"
                      : isTablet
                      ? "18px"
                      : isLaptop
                      ? "14px"
                      : "16px",
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
                    fontSize: isMobile
                      ? "16px"
                      : isTablet
                      ? "18px"
                      : isLaptop
                      ? "14px"
                      : "16px",
                    fontWeight: "normal",
                  },
                  "& .MuiFormHelperText-root": {
                    color: "white",
                  },
                }}
              />

              <div className="space-y-8 text-white">
                {/* <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="settlementHelp"
                      name="settlementHelp"
                      checked={formData.settlementHelp || false}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="settlementHelp"
                      className="ml-3 block text-[12px] font-normal"
                    >
                      I would be needing help to file a settlement.
                    </label>
                  </div> */}

                <div className="flex items-start">
                  <div className="flex-shrink-0 -mt-0.5">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      name="privacyConsent"
                      checked={formData.privacyConsent || false}
                      onChange={handleChange}
                      className="h-3 w-3 border-2 border-white bg-[#023437] checked:bg-[#C09F53] checked:border-[#C09F53] focus:ring-1 focus:ring-white text-[#C09F53] mt-1"
                      required
                    />
                  </div>
                  <label
                    htmlFor="privacyConsent"
                    className="ml-3 block text-[#FFFBF399] text-[12px] font-normal text-left"
                  >
                    <span className="block">
                      I agree to the{" "}
                      <a
                        href="/Privacypolicy"
                        className="text-[#C09F53] underline hover:text-yellow-500"
                      >
                        privacy policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="/Disclaimer"
                        className="text-[#C09F53] underline hover:text-yellow-500"
                      >
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

                {/* Human Verification with Captcha */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="captchaEnabled"
                    name="captchaEnabled"
                    checked={formData.captchaEnabled || false}
                    onChange={handleChange}
                    className="mt-1 h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="captchaEnabled"
                    className="ml-3 block text-[12px] font-normal text-[#FFFBF399]"
                  >
                    Please click this box so we know you're a person and not a
                    computer
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
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Success Popup */}
        <SuccessPopup 
          isOpen={successDialogOpen} 
          onClose={() => setSuccessDialogOpen(false)} 
        />
      </div>
    </>
  );
};

export default ContactUsForm;