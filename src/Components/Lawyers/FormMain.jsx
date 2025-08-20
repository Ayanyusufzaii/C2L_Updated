import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./FormMain.css";
import { sendFormAdmin, sendFormUser } from "../../emailJsService"; // Adjust path as needed
import imageSrc from "../../assets/thankyouimng.png"
import { ChevronDown } from "lucide-react";

const CustomCaptcha = ({ onCaptchaChange, resetTrigger }) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [charOffsets, setCharOffsets] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const generateCaptcha = useCallback(() => {
    try {
      // Stop any ongoing speech when generating new CAPTCHA
      if (window.speechSynthesis && isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }

      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
      
      // Safe callback invocation
      if (typeof onCaptchaChange === 'function') {
        onCaptchaChange(false);
      }
    } catch (error) {
      console.error('Error generating CAPTCHA:', error);
    }
  }, [isSpeaking, onCaptchaChange]);

  // Generate CAPTCHA immediately when component mounts
  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  // Reset captcha when resetTrigger changes
  useEffect(() => {
    if (resetTrigger) {
      generateCaptcha();
    }
  }, [resetTrigger, generateCaptcha]);

  useEffect(() => {
    const timer = setInterval(() => {
      generateCaptcha();
    }, 60000);

    return () => {
      clearInterval(timer);
      // Stop any ongoing speech when component unmounts
      try {
        if (window.speechSynthesis && isSpeaking) {
          window.speechSynthesis.cancel();
        }
      } catch (error) {
        console.error('Error cleaning up speech synthesis:', error);
      }
    };
  }, [generateCaptcha, isSpeaking]);

  const speakCaptcha = useCallback(() => {
    if (!("speechSynthesis" in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    try {
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
        try {
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

            utterance.onerror = (event) => {
              console.error('Speech synthesis error:', event);
              setIsSpeaking(false);
            };

            window.speechSynthesis.speak(utterance);
          } else {
            setIsSpeaking(false);
          }
        } catch (error) {
          console.error('Error in speech synthesis:', error);
          setIsSpeaking(false);
        }
      };

      speakNextChar();
    } catch (error) {
      console.error('Error starting speech synthesis:', error);
      setIsSpeaking(false);
    }
  }, [captchaText]);

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setUserInput(value);
    const valid = value === captchaText;
    setIsValid(valid);
    
    if (typeof onCaptchaChange === 'function') {
      onCaptchaChange(valid);
    }
  }, [captchaText, onCaptchaChange]);

  const handleAudioToggle = useCallback((e) => {
    setAudioEnabled(e.target.checked);
  }, []);

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
          <div className="relative z-10" role="img" aria-label={`CAPTCHA text: ${captchaText}`}>
            {captchaText.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  transform: `translateY(${charOffsets[index]}px)`,
                  display: "inline-block",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
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
            aria-label="Refresh CAPTCHA"
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
              aria-label={isSpeaking ? "Playing CAPTCHA audio" : "Listen to CAPTCHA"}
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
          aria-describedby={userInput !== "" && !isValid ? "captcha-error" : isValid ? "captcha-success" : undefined}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            userInput !== "" && !isValid
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300"
          }`}
        />
        {userInput !== "" && !isValid && (
          <p id="captcha-error" className="text-red-500 text-sm mt-1" role="alert">
            CAPTCHA does not match
          </p>
        )}
        {isValid && (
          <p id="captcha-success" className="text-green-500 text-sm mt-1" role="alert">
            ✓ CAPTCHA verified successfully
          </p>
        )}
      </div>
    </div>
  );
};

const formatAustralianMobile = (input) => {
  if (!input) return "";

  let raw = String(input).trim();

  if (raw === "+") return "+";

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

const formatEmail = (input) => {
  if (!input) return "";
  
  // Basic cleanup: trim whitespace and convert to lowercase
  let cleaned = String(input).trim().toLowerCase();
  
  // Remove any invalid characters that are commonly mistyped
  // Allow: letters, numbers, @, ., -, _, +
  cleaned = cleaned.replace(/[^\w@.\-+]/g, "");
  
  // Ensure only one @ symbol (keep the first one)
  const atIndex = cleaned.indexOf('@');
  if (atIndex !== -1) {
    const beforeAt = cleaned.substring(0, atIndex);
    const afterAt = cleaned.substring(atIndex + 1).replace(/@/g, '');
    cleaned = beforeAt + '@' + afterAt;
  }
  
  return cleaned;
};

const validateEmail = (input) => {
  if (!input) return { isValid: false, reason: "empty" };

  const email = String(input).trim();
  
  // Basic length check
  if (email.length > 254) {
    return { isValid: false, reason: "too_long" };
  }
  
  if (email.length < 5) {
    return { isValid: false, reason: "too_short" };
  }

  // Must contain exactly one @
  const atCount = (email.match(/@/g) || []).length;
  if (atCount === 0) {
    return { isValid: false, reason: "missing_at" };
  }
  if (atCount > 1) {
    return { isValid: false, reason: "multiple_at" };
  }

  const [localPart, domainPart] = email.split('@');

  // Local part validation
  if (!localPart || localPart.length === 0) {
    return { isValid: false, reason: "missing_local" };
  }
  if (localPart.length > 64) {
    return { isValid: false, reason: "local_too_long" };
  }
  if (localPart.startsWith('.') || localPart.endsWith('.')) {
    return { isValid: false, reason: "local_dot_position" };
  }
  if (localPart.includes('..')) {
    return { isValid: false, reason: "local_consecutive_dots" };
  }

  // Domain part validation
  if (!domainPart || domainPart.length === 0) {
    return { isValid: false, reason: "missing_domain" };
  }
  if (domainPart.length > 253) {
    return { isValid: false, reason: "domain_too_long" };
  }
  if (domainPart.startsWith('.') || domainPart.endsWith('.')) {
    return { isValid: false, reason: "domain_dot_position" };
  }
  if (domainPart.includes('..')) {
    return { isValid: false, reason: "domain_consecutive_dots" };
  }
  if (!domainPart.includes('.')) {
    return { isValid: false, reason: "domain_no_tld" };
  }

  // TLD validation
  const parts = domainPart.split('.');
  const tld = parts[parts.length - 1];
  if (!tld || tld.length < 2 || tld.length > 6) {
    return { isValid: false, reason: "invalid_tld" };
  }

  // Comprehensive regex validation
  const emailRegex = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, reason: "invalid_format" };
  }

  return { isValid: true, reason: null };
};

const FormMainDesktop = ({
  formData,
  handleChange,
  showCaptcha,
  onCaptchaChange,
  resetTrigger,
  handleSubmit,
  isFormValid,
  phoneError,
  emailError,
  certId,
  tokenUrl,
  pingUrl,
  isSubmitting,
  submitMessage,
  successDialogOpen,
  setSuccessDialogOpen,
}) => (
  <>
    <div className="hidden md:block bg-[#FFFBF3] backdrop-blur-sm text-[#023437] rounded-xl shadow-2xl p-8 md:p-6 border border-white/20">
      <input
        type="hidden"
        id="xxTrustedFormCertUrl_desktop"
        name="xxTrustedFormCertUrl"
        value={certId || ""}
      />
      <input
        type="hidden"
        id="xxTrustedFormCertToken_desktop"
        name="xxTrustedFormCertToken"
        value={tokenUrl || ""}
      />
      <input
        type="hidden"
        id="xxTrustedFormPingUrl_desktop"
        name="xxTrustedFormPingUrl"
        value={pingUrl || ""}
      />

      <h2 className="text-left font-playfair text-[32px] font-bold leading-[32px] tracking-[-0.6px] text-[#153637] mb-6">
        Ready to Grow? Let's Talk
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {[
          { name: "name", type: "text", placeholder: "Name", required: true },
          { name: "phone", type: "tel", placeholder: "Phone", required: true },
          { name: "email", type: "email", placeholder: "Email", required: true },
        ].map(({ name, type, placeholder, required }) => (
          <div key={name}>
            <input
              name={name}
              type={type}
              placeholder={placeholder}
              value={formData[name] || ""}
              onChange={handleChange}
              disabled={isSubmitting}
              required={required}
              aria-invalid={
                (name === "phone" && phoneError) || (name === "email" && emailError) 
                  ? "true" 
                  : "false"
              }
              aria-describedby={
                (name === "phone" && phoneError) 
                  ? `${name}-error` 
                  : (name === "email" && emailError) 
                  ? `${name}-error`
                  : undefined
              }
              className="w-full border-b-2 py-3  bg-transparent transition-colors duration-300 
                         font-opensans text-[16px] font-semibold text-[#023437] leading-normal
                         placeholder:text-[#023437] placeholder:font-opensans placeholder:text-[16px] 
                         placeholder:font-semibold placeholder:leading-normal
                         border-gray-300 focus:border-[#C09F53] disabled:opacity-50"
            />
            {name === "phone" && phoneError && (
              <p id={`${name}-error`} className="text-red-500 text-sm mt-1" role="alert">
                {phoneError}
              </p>
            )}
            {name === "email" && emailError && (
              <p id={`${name}-error`} className="text-red-500 text-sm mt-1" role="alert">
                {emailError}
              </p>
            )}
          </div>
        ))}
        
        <div className="relative w-full">
          <select
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            className="w-full border-b-2 py-3  pr-10 font-opensans text-base font-semibold text-[#023437] bg-transparent transition-colors duration-300 focus:outline-none placeholder:text-[#023437]/70 border-gray-300 focus:border-[#C09F53] appearance-none cursor-pointer disabled:opacity-50"
          >
            <option value="" disabled>
              Select your concern
            </option>
            <option value="Mesothelioma Lawsuit">Mesothelioma Lawsuit</option>
            <option value="Truck Accident Claims">Truck Accident Claims</option>
            <option value="Rideshare Class Action Lawsuits">Rideshare Class Action Lawsuits</option>
            <option value="Other">Other</option>
          </select>

          {/* Chevron Icon */}
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#023437] pointer-events-none" />
        </div>

        <div className="flex items-start gap-2 font-opensans text-[12px] font-normal text-[#023437] leading-normal flex-shrink-0 min-h-[50px] sm:min-h-[45px] md:min-h-[40px] lg:min-h-[35px]">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={formData.consent || false}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50 flex-shrink-0"
          />
          <label htmlFor="consent" className={isSubmitting ? "opacity-50" : ""}>
            I agree to the{" "}
            <a href="privacy-policy" className="underline text-[#C09F53]">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="disclaimer" className="underline text-[#C09F53]">
              disclaimer
            </a>{" "}
            and give my express written consent, affiliates and/or lawyer to
            contact me via the number provided even if this number is a wireless
            number or if I am presently listed on a Do Not Call list. I understand
            that I may be contacted by telephone, email, text message or mail
            regarding case options and that my call may be recorded and/or
            monitored. Message & data rates may apply. My consent does not require
            purchase. This is legal advertising.
          </label>
        </div>

        <div className="flex items-start gap-2 font-opensans text-[12px] font-normal text-[#023437] leading-normal flex-shrink-0 min-h-[50px] sm:min-h-[45px] md:min-h-[40px] lg:min-h-[35px]">
          <input
            id="captcha-check"
            name="captchaCheck"
            type="checkbox"
            checked={showCaptcha || false}
            onChange={handleChange}
            disabled={isSubmitting}
            className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50 flex-shrink-0"
          />
          <label htmlFor="captcha-check" className={isSubmitting ? "opacity-50" : ""}>
            Please check this box so we know you're a person and not a computer
          </label>
        </div>

        {showCaptcha && (
          <CustomCaptcha
            onCaptchaChange={onCaptchaChange}
            resetTrigger={resetTrigger}
            disabled={isSubmitting}
          />
        )}

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="w-full bg-[#C09F53] hover:bg-[#C09F53]/90 text-[#023437] font-semibold py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#023437]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Loading"
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
        
        {successDialogOpen && (
          <div 
            className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-[9999]"
            role="dialog"
            aria-modal="true"
            aria-label="Success message"
          >
            <img
              src={imageSrc}
              alt="Success"
              onClick={() => setSuccessDialogOpen(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSuccessDialogOpen(false);
                }
              }}
              className="w-full h-auto max-h-[70vh] object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200"
              tabIndex={0}
            />
          </div>
        )}
      </form>
    </div>
  </>
);

const FormMainMobile = ({
  formData,
  handleChange,
  showCaptcha,
  onCaptchaChange,
  resetTrigger,
  handleSubmit,
  isFormValid,
  phoneError,
  emailError,
  certId,
  tokenUrl,
  pingUrl,
  isSubmitting,
  submitMessage,
  successDialogOpen,
  setSuccessDialogOpen,
}) => (
  <>
    <div className="md:hidden bg-[#FFFBF3] text-[#023437] rounded-lg shadow-lg p-6 font-opensans border border-white/20">
      <input type="hidden" name="xxTrustedFormCertUrl" value={certId || ""} />
      <input type="hidden" name="xxTrustedFormCertToken" value={tokenUrl || ""} />
      <input type="hidden" name="xxTrustedFormPingUrl" value={pingUrl || ""} />

      <h2 className="text-left  font-playfair text-[32px] font-bold leading-[32px] tracking-[-0.6px] mb-6">
        Ready to Grow? Let's Talk
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 relative" noValidate>
        {[
          { name: "name", type: "text", placeholder: "Name", required: true },
          { name: "phone", type: "tel", placeholder: "Phone", required: true },
          { name: "email", type: "email", placeholder: "Email", required: true }
        ].map(({ name, type, placeholder, required }) => (
          <div key={name}>
            <input
              name={name}
              type={type}
              placeholder={placeholder}
              value={formData[name] || ""}
              onChange={handleChange}
              disabled={isSubmitting}
              required={required}
              aria-invalid={
                (name === "phone" && phoneError) || (name === "email" && emailError) 
                  ? "true" 
                  : "false"
              }
              aria-describedby={
                (name === "phone" && phoneError) 
                  ? `${name}-error-mobile` 
                  : (name === "email" && emailError) 
                  ? `${name}-error-mobile`
                  : undefined
              }
              className="w-full border-b-2 py-3 bg-transparent transition-colors duration-300 
                         font-opensans text-[16px] font-semibold text-[#023437] leading-normal
                         placeholder:text-[#023437] placeholder:font-opensans placeholder:text-[16px]
                         placeholder:font-semibold placeholder:leading-normal
                         border-gray-300 focus:border-[#C09F53] disabled:opacity-50"
            />
            {name === "phone" && phoneError && (
              <p id={`${name}-error-mobile`} className="text-red-500 text-sm mt-1" role="alert">
                {phoneError}
              </p>
            )}
            {name === "email" && emailError && (
              <p id={`${name}-error-mobile`} className="text-red-500 text-sm mt-1" role="alert">
                {emailError}
              </p>
            )}
          </div>
        ))}

        <div className="relative w-full">
          <select
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            className="w-full border-b-2 py-3 pr-10 font-opensans text-base font-semibold text-[#023437] bg-transparent transition-colors duration-300 focus:outline-none placeholder:text-[#023437]/70 border-gray-300 focus:border-[#C09F53] appearance-none cursor-pointer disabled:opacity-50"
          >
            <option value="" disabled>
              Select your concern
            </option>
            <option value="Mesothelioma Lawsuit">Mesothelioma Lawsuit</option>
            <option value="Truck Accident Claims">Truck Accident Claims</option>
            <option value="Rideshare Class Action Lawsuits">Rideshare Class Action Lawsuits</option>
            <option value="Other">Other</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#023437] pointer-events-none" />
        </div>

        <div className="flex items-start gap-2 font-opensans text-[12px] font-normal text-[#023437] leading-normal flex-shrink-0">
          <input
            id="consent-mobile"
            name="consent"
            type="checkbox"
            checked={formData.consent || false}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50"
          />
          <label htmlFor="consent-mobile" className={isSubmitting ? "opacity-50" : ""}>
            I agree to the{" "}
            <a href="privacy-policy" className="underline text-[#C09F53]">privacy policy</a>{" "}
            and{" "}
            <a href="disclaimer" className="underline text-[#C09F53]">disclaimer</a>{" "}
            and give my express written consent, affiliates and/or lawyer to
            contact me via the number provided even if this number is a wireless
            number or if I am presently listed on a Do Not Call list. I understand
            that I may be contacted by telephone, email, text message or mail
            regarding case options and that my call may be recorded and/or
            monitored. Message & data rates may apply. My consent does not require
            purchase. This is legal advertising.
          </label>
        </div>

        <div className="flex items-start gap-2 font-opensans text-[12px] font-normal text-[#023437] leading-normal flex-shrink-0">
          <input
            id="captcha-mobile"
            name="captchaCheck"
            type="checkbox"
            checked={showCaptcha || false}
            onChange={handleChange}
            disabled={isSubmitting}
            className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50"
          />
          <label htmlFor="captcha-mobile" className={isSubmitting ? "opacity-50" : ""}>
            Please check this box so we know you're a person and not a computer
          </label>
        </div>

        {showCaptcha && (
          <CustomCaptcha
            onCaptchaChange={onCaptchaChange}
            resetTrigger={resetTrigger}
            disabled={isSubmitting}
          />
        )}

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="w-full bg-[#C09F53] hover:bg-[#C09F53]/90 text-[#023437] font-semibold py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#023437]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Loading"
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

        {successDialogOpen && (
          <div 
            className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50 rounded-lg"
            role="dialog"
            aria-modal="true"
            aria-label="Success message"
          >
            <img
              src={imageSrc}
              alt="Success"
              onClick={() => setSuccessDialogOpen(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSuccessDialogOpen(false);
                }
              }}
              className="w-full h-auto max-h-[70vh] object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-lg"
              tabIndex={0}
            />
          </div>
        )}
      </form>
    </div>
  </>
);

const FormMain = () => {
  const initialData = {
    name: "",
    phone: "",
    email: "",
    category: "",
    consent: false,
  };
  
  const [formData, setFormData] = useState(initialData);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pingUrl, setPingUrl] = useState("");
  const [certId, setCertId] = useState("");
  const [tokenUrl, setTokenUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false); 
  const [submitMessage, setSubmitMessage] = useState(null);

  const handlePhoneChange = useCallback((value) => {
    try {
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
        if (prev.phone === formatted) return prev;
        return { ...prev, phone: formatted };
      });
    } catch (error) {
      console.error('Error handling phone change:', error);
      setPhoneError("Error formatting phone number");
    }
  }, []);

 const handleEmailChange = useCallback((value) => {
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

    setEmailError((prev) => (prev === nextEmailError ? prev : nextEmailError));

    setFormData((prev) => {
      if (prev.email === formatted) return prev;
      return { ...prev, email: formatted };
    });
  } catch (error) {
    console.error('Error handling email change:', error);
    setEmailError("Please enter valid email");
  }
}, []);

  const handleChange = useCallback((e) => {
    try {
      const { name, value, type, checked } = e.target;

      if (submitMessage) setSubmitMessage(null);

      if (name === "captchaCheck") {
        setShowCaptcha(checked);
        setCaptchaValid(false);
        setResetTrigger((t) => !t);
        return;
      }

      if (name === "phone") {
        handlePhoneChange(value);
        return;
      }

      if (name === "email") {
        handleEmailChange(value);
        return;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    } catch (error) {
      console.error('Error handling form change:', error);
    }
  }, [handlePhoneChange, handleEmailChange, submitMessage]);

  const onCaptchaChange = useCallback((valid) => {
    setCaptchaValid(valid);
  }, []);

  // Use the validation function consistently
  const isPhoneValid = useMemo(() => {
    if (!formData.phone) return false;
    const validation = validateAustralianMobile(formData.phone);
    return validation.isValid;
  }, [formData.phone]);

  const isEmailValid = useMemo(() => {
    if (!formData.email) return false;
    const validation = validateEmail(formData.email);
    return validation.isValid;
  }, [formData.email]);
    
  const isFormFilled = useMemo(() => {
    return (
      formData.name?.trim() &&
      isPhoneValid &&
      isEmailValid &&
      formData.category &&
      formData.consent
    );
  }, [formData.name, isPhoneValid, isEmailValid, formData.category, formData.consent]);

  const isFormValid = useMemo(() => {
    return isFormFilled && captchaValid;
  }, [isFormFilled, captchaValid]);

  useEffect(() => {
    let observerInstance = null;
    let timeoutId = null;

    const initializeTrustedFormObserver = () => {
      try {
        // Create observer to watch for TrustedForm field updates
        observerInstance = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "value") {
              const target = mutation.target;

              try {
                if (target?.name === "xxTrustedFormCertUrl" && target.value) {
                  setCertId(target.value);
                }

                if (target?.name === "xxTrustedFormPingUrl" && target.value) {
                  setPingUrl(target.value);
                }

                if (target?.name === "xxTrustedFormCertToken" && target.value) {
                  setTokenUrl(target.value);
                }
              } catch (error) {
                console.warn("TrustedForm observer error:", error);
              }
            }
          });
        });

        // Start observing TrustedForm fields
        const startObserving = () => {
          try {
            const trustedFormFields = document.querySelectorAll(
              '[name="xxTrustedFormCertUrl"], [name="xxTrustedFormPingUrl"], [name="xxTrustedFormCertToken"]'
            );

            trustedFormFields.forEach((field) => {
              if (field && observerInstance) {
                observerInstance.observe(field, { 
                  attributes: true, 
                  attributeFilter: ['value'] 
                });

                // Check if values are already populated
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
          } catch (error) {
            console.warn("Error starting TrustedForm observation:", error);
          }
        };

        // Wait for TrustedForm script to load and populate fields
        timeoutId = setTimeout(startObserving, 1000);
      } catch (error) {
        console.error("Error initializing TrustedForm observer:", error);
      }
    };

    initializeTrustedFormObserver();

    return () => {
      try {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (observerInstance) {
          observerInstance.disconnect();
        }
      } catch (error) {
        console.error("Error cleaning up TrustedForm observer:", error);
      }
    };
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Extract raw phone number for submission
      const rawPhone = formData.phone?.replace(/\D/g, "") || "";
      
      const submitData = {
        ...formData,
        phone: rawPhone,
        certId: certId || "",
        tokenUrl: tokenUrl || "",
        pingUrl: pingUrl || "",
      };

      try {
        await Promise.all([sendFormAdmin(submitData), sendFormUser(submitData)]);
        setFormData(initialData);
        setSuccessDialogOpen(true); // Show success popup
        setShowCaptcha(false);
        setCaptchaValid(false);
        setResetTrigger((t) => !t);
        setPhoneError("");
        setEmailError("");
        setSubmitMessage({
          type: "success",
          text: "Form submitted successfully! You should receive a confirmation email shortly.",
        });

      } catch (err) {
        console.error('Email sending error:', err);
        try {
          await sendFormAdmin(submitData);
          setSubmitMessage({
            type: "success",
            text: "Form submitted successfully! Confirmation email failed, but we have received your inquiry.",
          });
          setSuccessDialogOpen(true); // Show success popup even if email fails
        } catch (adminErr) {
          console.error('Admin email error:', adminErr);
          setSubmitMessage({
            type: "error",
            text: "There was an error submitting your form. Please try again or contact us directly.",
          });
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage({
        type: "error",
        text: "There was an error submitting your form. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [isFormValid, isSubmitting, formData, certId, tokenUrl, pingUrl, initialData]);

  return (
    <>
      <FormMainDesktop
        formData={formData}
        handleChange={handleChange}
        showCaptcha={showCaptcha}
        onCaptchaChange={onCaptchaChange}
        resetTrigger={resetTrigger}
        handleSubmit={handleSubmit}
        isFormValid={isFormValid}
        phoneError={phoneError}
        emailError={emailError}
        certId={certId}
        tokenUrl={tokenUrl}
        pingUrl={pingUrl}
        isSubmitting={isSubmitting}
        submitMessage={submitMessage}
        successDialogOpen={successDialogOpen}
        setSuccessDialogOpen={setSuccessDialogOpen}
      />
      <FormMainMobile
        formData={formData}
        handleChange={handleChange}
        showCaptcha={showCaptcha}
        onCaptchaChange={onCaptchaChange}
        resetTrigger={resetTrigger}
        handleSubmit={handleSubmit}
        isFormValid={isFormValid}
        phoneError={phoneError}
        emailError={emailError}
        certId={certId}
        tokenUrl={tokenUrl}
        pingUrl={pingUrl}
        isSubmitting={isSubmitting}
        submitMessage={submitMessage}
        successDialogOpen={successDialogOpen}
        setSuccessDialogOpen={setSuccessDialogOpen}
      />
    </>
  );
};

export default FormMain;