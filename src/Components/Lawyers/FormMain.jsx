import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./FormMain.css";
import { sendFormAdmin, sendFormUser } from "../../emailJsService"; // Adjust path as needed

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

const formatAusMobile = (input) => {
  // Remove all non-digit characters
  const digits = input.replace(/\D/g, "");

  // Immediately limit to 10 digits maximum - prevent excessive input
  const limited = digits.slice(0, 10);

  // Check if it's a valid Australian mobile number
  if (limited.length === 0) return "";
  if (!limited.startsWith("04")) return null;

  // Format based on length
  if (limited.length <= 4) {
    return limited;
  } else if (limited.length <= 7) {
    return `${limited.slice(0, 4)} ${limited.slice(4)}`;
  } else if (limited.length <= 10) {
    return `${limited.slice(0, 4)} ${limited.slice(4, 7)} ${limited.slice(7)}`;
  }

  return limited;
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
  certId,
  tokenUrl,
  pingUrl,
  isSubmitting,
  submitMessage,
}) => (
  <div className="hidden md:block bg-[#FFFBF3] backdrop-blur-sm text-[#023437] rounded-xl shadow-2xl p-8 md:p-10 border border-white/20">
    <input
      type="hidden"
      id="xxTrustedFormCertUrl_desktop"
      name="xxTrustedFormCertUrl"
      value={certId}
    />
    <input
      type="hidden"
      id="xxTrustedFormCertToken_desktop"
      name="xxTrustedFormCertToken"
      value={tokenUrl}
    />
    <input
      type="hidden"
      id="xxTrustedFormPingUrl_desktop"
      name="xxTrustedFormPingUrl"
      value={pingUrl}
    />

    <h2 className="text-center font-playfair font-semibold text-[32px] mb-6">
      Ready to Grow? Let's Talk
    </h2>

    {submitMessage && (
      <div
        className={`mb-4 p-4 rounded-md ${
          submitMessage.type === "success"
            ? "bg-green-100 border border-green-400 text-green-700"
            : "bg-red-100 border border-red-400 text-red-700"
        }`}
      >
        {submitMessage.text}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { name: "name", type: "text", placeholder: "Name" },
        { name: "phone", type: "tel", placeholder: "Phone" },
        { name: "email", type: "email", placeholder: "Email" },
      ].map(({ name, type, placeholder }) => (
        <div key={name}>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border-b-2 py-3 font-opensans bg-transparent transition-colors duration-300 focus:outline-none placeholder:text-[#023437]/70 border-gray-300 focus:border-[#C09F53] disabled:opacity-50"
          />
          {name === "phone" && phoneError && (
            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
          )}
        </div>
      ))}

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        disabled={isSubmitting}
        className="w-full border-b-2 py-3 font-opensans bg-transparent transition-colors duration-300 focus:outline-none placeholder:text-[#023437]/70 border-gray-300 focus:border-[#C09F53] pr-10 appearance-none cursor-pointer disabled:opacity-50"
      >
        <option value="" disabled>
          Select your concern
        </option>
        <option>Personal Injury</option>
        <option>Family Law</option>
        <option>Criminal Defense</option>
      </select>

      <div className="flex items-start text-xs gap-2 leading-tight font-opensans">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          disabled={isSubmitting}
          className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50"
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

      <div className="flex items-start text-xs gap-2 leading-tight font-opensans">
        <input
          id="captcha-check"
          name="captchaCheck"
          type="checkbox"
          checked={showCaptcha}
          onChange={handleChange}
          disabled={isSubmitting}
          className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50"
        />
        <label
          htmlFor="captcha-check"
          className={isSubmitting ? "opacity-50" : ""}
        >
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
  certId,
  tokenUrl,
  pingUrl,
  isSubmitting,
  submitMessage,
}) => (
  <div className="md:hidden bg-[#FFFBF3] text-[#023437] rounded-lg shadow-lg p-6 font-opensans border border-gray-200">
    <input
      type="hidden"
      id="xxTrustedFormCertUrl_mobile"
      name="xxTrustedFormCertUrl"
      value={certId}
    />
    <input
      type="hidden"
      id="xxTrustedFormCertToken_mobile"
      name="xxTrustedFormCertToken"
      value={tokenUrl}
    />
    <input
      type="hidden"
      id="xxTrustedFormPingUrl_mobile"
      name="xxTrustedFormPingUrl"
      value={pingUrl}
    />

    <h2 className="text-center font-playfair font-semibold text-[24px] mb-4">
      Ready to Grow? Let's Talk
    </h2>

    {submitMessage && (
      <div
        className={`mb-4 p-3 rounded-md text-sm ${
          submitMessage.type === "success"
            ? "bg-green-100 border border-green-400 text-green-700"
            : "bg-red-100 border border-red-400 text-red-700"
        }`}
      >
        {submitMessage.text}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { name: "name", type: "text", placeholder: "Name" },
        { name: "phone", type: "tel", placeholder: "Phone" },
        { name: "email", type: "email", placeholder: "Email" },
      ].map(({ name, type, placeholder }) => (
        <div key={name}>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border-b-2 py-2 bg-[#FFFBF3] transition-colors duration-300 focus:outline-none placeholder:text-[#023437]/70 border-gray-300 focus:border-[#C09F53] disabled:opacity-50"
          />
          {name === "phone" && phoneError && (
            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
          )}
        </div>
      ))}

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        disabled={isSubmitting}
        className="w-full border-b-2 py-2 bg-[#FFFBF3] transition-colors duration-300 focus:outline-none placeholder:text-[#023437]/70 border-gray-300 focus:border-[#C09F53] pr-10 appearance-none cursor-pointer disabled:opacity-50"
      >
        <option value="" disabled>
          Select your concern
        </option>
        <option>Personal Injury</option>
        <option>Family Law</option>
        <option>Criminal Defense</option>
      </select>

      <div className="flex items-start text-xs gap-2 leading-tight font-opensans">
        <input
          id="consent-mobile"
          name="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          disabled={isSubmitting}
          className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50"
        />
        <label
          htmlFor="consent-mobile"
          className={isSubmitting ? "opacity-50" : ""}
        >
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

      <div className="flex items-start text-xs gap-2 leading-tight font-opensans">
        <input
          id="captcha-mobile"
          name="captchaCheck"
          type="checkbox"
          checked={showCaptcha}
          onChange={handleChange}
          disabled={isSubmitting}
          className="mt-1 w-4 h-4 accent-[#C09F53] disabled:opacity-50"
        />
        <label
          htmlFor="captcha-mobile"
          className={isSubmitting ? "opacity-50" : ""}
        >
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
  const [pingUrl, setPingUrl] = useState("");
  const [certId, setCertId] = useState("");
  const [tokenUrl, setTokenUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (submitMessage) setSubmitMessage(null);

    if (name === "captchaCheck") {
      setShowCaptcha(checked);
      setCaptchaValid(false);
      setResetTrigger((t) => !t);
      return;
    }

    if (name === "phone") {
      const rawDigits = value.replace(/\D/g, "").slice(0, 10);
      const formatted = formatAusMobile(rawDigits);

      if (!rawDigits) {
        setPhoneError("");
      } else if (!formatted) {
        setPhoneError("Phone number must start with 04");
      } else if (rawDigits.length < 10) {
        setPhoneError("Phone number must be 10 digits");
      } else {
        setPhoneError("");
      }

      setFormData((prev) => ({
        ...prev,
        phone: formatted ?? rawDigits,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onCaptchaChange = (valid) => setCaptchaValid(valid);

  const rawPhone = formData.phone.replace(/\D/g, "");
  const isPhoneValid = rawPhone.length === 10 && rawPhone.startsWith("04");
  const isFormFilled =
    formData.name.trim() &&
    isPhoneValid &&
    formData.email.trim() &&
    formData.category &&
    formData.consent;
  const isFormValid = isFormFilled && captchaValid;

  useEffect(() => {
    let observerInstance = null;
    let timeoutId = null;

    const initializeTrustedFormObserver = () => {
      // Create observer to watch for TrustedForm field updates
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

      // Start observing TrustedForm fields
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
      };

      // Wait for TrustedForm script to load and populate fields
      timeoutId = setTimeout(startObserving, 1000);
    };

    initializeTrustedFormObserver();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (observerInstance) {
        observerInstance.disconnect();
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage(null);

    const submitData = {
      ...formData,
      phone: rawPhone,
      certId: certId,
      tokenUrl: tokenUrl,
      pingUrl: pingUrl,
    };

    try {
      await Promise.all([sendFormAdmin(submitData), sendFormUser(submitData)]);
      setFormData(initialData);
      setShowCaptcha(false);
      setCaptchaValid(false);
      setResetTrigger((t) => !t);
      setPhoneError("");
      setSubmitMessage({
        type: "success",
        text: "Form submitted successfully! You should receive a confirmation email shortly.",
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      try {
        await sendFormAdmin(submitData);
        setSubmitMessage({
          type: "success",
          text: "Form submitted successfully! Confirmation email failed, but we have received your inquiry.",
        });
      } catch {
        setSubmitMessage({
          type: "error",
          text: "There was an error submitting your form. Please try again or contact us directly.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
    setIsSubmitting(false);
  };

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
        certId={certId}
        tokenUrl={tokenUrl}
        pingUrl={pingUrl}
        isSubmitting={isSubmitting}
        submitMessage={submitMessage}
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
        certId={certId}
        tokenUrl={tokenUrl}
        pingUrl={pingUrl}
        isSubmitting={isSubmitting}
        submitMessage={submitMessage}
      />
    </>
  );
};

export default FormMain;





















































































// import React, {
//   useState,
//   useEffect,
//   useRef,
//   useCallback,
//   useMemo,
// } from "react";
// import { ChevronDown } from "lucide-react";
// import { LawyerSendAdminEmail, LawyerSendUserEmail } from '../../emailJsService.js';
// const FormMain = ({ isMobile = false, className = "" }) => {
//   const formRef = useRef();
//   const [formData, setFormData] = useState(INITIAL_FORM_DATA);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [captchaValid, setCaptchaValid] = useState(false);
//   const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);
//   const [showCaptcha, setShowCaptcha] = useState(false);
//   const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null
//   const [pageData] = useState(() => ({
//     pageUrl: window.location.href,
//     userAgent: navigator.userAgent,
//     referrer: document.referrer,
//   }));

//   const trustedForm = useTrustedForm();
//   const { validate } = useFormValidation();

//   // Memoized styles to prevent recalculation
//   const styles = useMemo(() => {
//     const baseInputStyle = `w-full border-b-2 transition-colors duration-300 ${
//       isMobile ? "py-2 bg-[#FFFBF3]" : "py-3 font-opensans bg-transparent"
//     } focus:outline-none placeholder:text-[#023437]/70`;

//     return {
//       container: `${
//         isMobile
//           ? "bg-[#FFFBF3] text-[#023437] rounded-lg shadow-lg p-6 font-opensans border border-gray-200"
//           : "bg-[#FFFBF3]/95 backdrop-blur-sm text-[#023437] rounded-xl shadow-2xl p-8 md:p-10 border border-white/20"
//       } ${className}`,
//       title: `text-center font-playfair font-semibold ${
//         isMobile
//           ? "text-[24px] md:text-[34px] mb-4"
//           : "text-[30px] md:text-[32px] mb-6"
//       }`,
//       input: (fieldName) =>
//         `${baseInputStyle} ${
//           errors[fieldName]
//             ? "border-red-500 focus:border-red-500"
//             : "border-gray-300 focus:border-[#C09F53]"
//         }`,
//       baseInput: baseInputStyle,
//     };
//   }, [isMobile, className, errors]);

//   const handleCaptchaChange = useCallback((isValid) => {
//     setCaptchaValid(isValid);
//     // Clear CAPTCHA error when it becomes valid
//     if (isValid && errors.captcha) {
//       setErrors(prev => ({ ...prev, captcha: '' }));
//     }
//   }, [errors.captcha]);

//   const handleHumanVerificationClick = useCallback(() => {
//     if (!formData.humanVerification) {
//       // Show CAPTCHA when checkbox is clicked (before it's checked)
//       setShowCaptcha(true);
//       setCaptchaResetTrigger(prev => prev + 1);
//     } else {
//       // Hide CAPTCHA when unchecking
//       setShowCaptcha(false);
//       setCaptchaValid(false);
//       setCaptchaResetTrigger(prev => prev + 1);
//     }
//   }, [formData.humanVerification]);

//   const handleChange = useCallback(
//     (e) => {
//       const { name, value, type, checked } = e.target;
//       let processedValue = value;

//       // Special handling for phone number formatting
//       if (name === 'phone' && type !== 'checkbox') {
//         processedValue = formatAustralianPhone(value);
//       }

//       setFormData((prev) => ({
//         ...prev,
//         [name]: type === "checkbox" ? checked : processedValue,
//       }));

//       // Clear error when user starts typing
//       if (errors[name]) {
//         setErrors((prev) => ({ ...prev, [name]: "" }));
//       }

//       // Clear submission status when user makes changes
//       if (submissionStatus) {
//         setSubmissionStatus(null);
//       }
//     },
//     [errors, submissionStatus]
//   );

//   // Function to map form data to EmailJS expected format
//   const mapFormDataForEmailJS = useCallback((formData, trustedForm, captchaValid) => {
//     const getFreshTrustedFormData = () => {
//       const certField = document.querySelector('input[name="xxTrustedFormCertUrl"]');
//       const pingField = document.querySelector('input[name="xxTrustedFormPingUrl"]');
//       const tokenField = document.querySelector('input[name="xxTrustedFormCertToken"]');

//       return {
//         xxTrustedFormCertUrl: certField?.value || trustedForm.certId || '',
//         xxTrustedFormPingUrl: pingField?.value || trustedForm.pingUrl || '',
//         xxTrustedFormCertToken: tokenField?.value || trustedForm.tokenUrl || '',
//       };
//     };

//     const trustedFormData = getFreshTrustedFormData();

//     return {
//       // Map form fields to EmailJS expected names
//       firstName: formData.name,
//       name: formData.name, // Keep both for compatibility
//       email: formData.email,
//       emailId: formData.email, // Keep both for compatibility
//       phone: formData.phone,
//       phoneNumber: formData.phone, // Keep both for compatibility
//       concern: formData.concern,

//       // Consent and verification
//       privacyConsent: formData.privacyConsent,
//       captchaEnabled: captchaValid,

//       // TrustedForm data
//       ...trustedFormData,

//       // Additional metadata
//       submissionTime: new Date().toISOString(),
//       trustedFormReady: trustedForm.ready,
//       pageUrl: pageData.pageUrl,
//       userAgent: pageData.userAgent,
//       referrer: pageData.referrer,
//     };
//   }, [pageData]);

//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();

//       const validationErrors = validate(formData, captchaValid, showCaptcha);
//       if (Object.keys(validationErrors).length > 0) {
//         setErrors(validationErrors);
//         setSubmissionStatus('error');
//         // Don't show alert, let the inline errors display
//         return;
//       }

//       if (!trustedForm.ready) {
//         setSubmissionStatus('error');
//         setErrors({ form: "Please wait for the form to load completely" });
//         return;
//       }

//       setIsSubmitting(true);
//       setSubmissionStatus(null);

//       try {
//         // Map form data to EmailJS expected format
//         const emailData = mapFormDataForEmailJS(formData, trustedForm, captchaValid);

//         console.log("Sending emails with data:", emailData);

//         // Send both admin and user emails simultaneously
//         const [adminResult, userResult] = await Promise.allSettled([
//           LawyerSendAdminEmail(emailData),
//           LawyerSendUserEmail(emailData)
//         ]);

//         // Check if at least one email was sent successfully
//         const adminSuccess = adminResult.status === 'fulfilled';
//         const userSuccess = userResult.status === 'fulfilled';

//         if (adminSuccess || userSuccess) {
//           // Reset form on success
//           setFormData(INITIAL_FORM_DATA);
//           setErrors({});
//           setCaptchaValid(false);
//           setShowCaptcha(false);
//           setCaptchaResetTrigger(prev => prev + 1);
//           setSubmissionStatus('success');

//           console.log('Email submission results:', {
//             admin: adminSuccess ? 'Success' : adminResult.reason,
//             user: userSuccess ? 'Success' : userResult.reason
//           });

//           // Log any partial failures
//           if (!adminSuccess) {
//             console.error('Admin email failed:', adminResult.reason);
//           }
//           if (!userSuccess) {
//             console.error('User email failed:', userResult.reason);
//           }
//         } else {
//           throw new Error('Both email sends failed');
//         }
//       } catch (error) {
//         console.error("Email submission error:", error);
//         setSubmissionStatus('error');
//         setErrors({
//           form: "There was an error sending your information. Please try again or contact us directly."
//         });
//       } finally {
//         setIsSubmitting(false);
//       }
//     },
//     [formData, validate, trustedForm, captchaValid, showCaptcha, mapFormDataForEmailJS]
//   );

//   const consentText = useMemo(
//     () => (
//       <div className="text-xs text-[#023437] leading-tight font-opensans">
//         I agree to the{" "}
//         <a href="/disclaimer" className="underline text-[#C09F53]">
//           privacy policy
//         </a>{" "}
//         and{" "}
//         <a href="/privacy-policy" className="underline text-[#C09F53]">
//           disclaimer
//         </a>
//         , and give my express written consent to contact me at the number provided above,
//         even if this number is a wireless number or if I am presently listed on a Do Not Call list. I
//         understand that I may be contacted by telephone, email, text message or
//         mail regarding case options and that I may be called using automatic
//         dialing equipment. Message & data rates may apply. My consent does not
//         require purchase. This is Legal advertising.
//       </div>
//     ),
//     []
//   );

//   const checkboxFields = useMemo(
//     () => [
//       {
//         name: "privacyConsent",
//         text: consentText,
//         error: errors.privacyConsent,
//       },
//       {
//         name: "humanVerification",
//         text: "Please check this box to confirm you're human.",
//         error: errors.humanVerification,
//       },
//     ],
//     [consentText, errors.privacyConsent, errors.humanVerification]
//   );

//   const isFormValid = useMemo(() => {
//     const basicValidation = (
//       formData.name.trim() &&
//       formData.phone.trim() &&
//       formData.email.trim() &&
//       formData.concern &&
//       formData.privacyConsent &&
//       formData.humanVerification &&
//       trustedForm.ready
//     );

//     // If CAPTCHA is shown, it must also be valid
//     if (showCaptcha) {
//       return basicValidation && captchaValid;
//     }

//     return basicValidation;
//   }, [formData, captchaValid, trustedForm.ready, showCaptcha]);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Ready to Grow? Let's Talk</h2>

//       {/* Success Message */}
//       {submissionStatus === 'success' && (
//         <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
//           <h3 className="font-semibold mb-2">Thank you for your submission!</h3>
//           <p className="text-sm">
//             We have received your information and will contact you shortly. Please check your email for a confirmation message.
//           </p>
//         </div>
//       )}

//       {/* Error Message */}
//       {submissionStatus === 'error' && errors.form && (
//         <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
//           <h3 className="font-semibold mb-2">Submission Error</h3>
//           <p className="text-sm">{errors.form}</p>
//         </div>
//       )}

//       <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
//         {/* Hidden TrustedForm fields */}
//         <input
//           type="hidden"
//           name="xxTrustedFormCertUrl"
//           value={trustedForm.certId}
//         />
//         <input
//           type="hidden"
//           name="xxTrustedFormCertToken"
//           value={trustedForm.tokenUrl}
//         />
//         <input
//           type="hidden"
//           name="xxTrustedFormPingUrl"
//           value={trustedForm.pingUrl}
//         />

//         {/* Form Fields */}
//         {FORM_FIELDS.map(({ field, type, placeholder, required }) => (
//           <div key={field} className="w-full">
//             <input
//               type={type}
//               name={field}
//               placeholder={placeholder}
//               value={formData[field]}
//               onChange={handleChange}
//               className={styles.input(field)}
//               required={required}
//             />
//             {errors[field] && (
//               <p className="text-red-500 text-xs mt-1 font-opensans">
//                 {errors[field]}
//               </p>
//             )}
//           </div>
//         ))}

//         {/* Concern Dropdown */}
//         <div className="relative w-full">
//           <select
//             name="concern"
//             value={formData.concern}
//             onChange={handleChange}
//             className={`${styles.input(
//               "concern"
//             )} pr-10 appearance-none cursor-pointer`}
//             required
//           >
//             {CONCERN_OPTIONS.map(({ value, label, disabled }) => (
//               <option key={value} value={value} disabled={disabled}>
//                 {label}
//               </option>
//             ))}
//           </select>
//           <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-[#023437]" />
//           {errors.concern && (
//             <p className="text-red-500 text-xs mt-1 font-opensans">
//               {errors.concern}
//             </p>
//           )}
//         </div>

//         {/* Checkboxes */}
//         {checkboxFields.map(({ name, text, error }) => (
//           <div key={name} className="w-full">
//             <label className="flex items-start text-xs gap-2 leading-tight font-opensans">
//               <input
//                 type="checkbox"
//                 name={name}
//                 checked={formData[name]}
//                 onChange={handleChange}
//                 onClick={name === "humanVerification" ? handleHumanVerificationClick : undefined}
//                 className="mt-1 w-4 h-4 accent-[#C09F53]"
//                 required
//               />
//               <span>{text}</span>
//             </label>
//             {error && (
//               <p className="text-red-500 text-xs mt-1 font-opensans">{error}</p>
//             )}
//           </div>
//         ))}

//         {/* Custom CAPTCHA - Only show when human verification is clicked */}
//         {showCaptcha && (
//           <div className="w-full">
//             <CustomCaptcha
//               onCaptchaChange={handleCaptchaChange}
//               resetTrigger={captchaResetTrigger}
//             />
//             {errors.captcha && (
//               <p className="text-red-500 text-xs mt-1 font-opensans">
//                 {errors.captcha}
//               </p>
//             )}
//           </div>
//         )}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-[#C09F53] hover:bg-[#C09F53]/90 text-[#023437] font-semibold py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base disabled:opacity-50 disabled:cursor-not-allowed"
//           disabled={isSubmitting || !isFormValid}
//         >
//           {isSubmitting
//             ? "Sending..."
//             : !trustedForm.ready
//             ? "Loading..."
//             : formData.humanVerification && !captchaValid
//             ? "Complete CAPTCHA to Submit"
//             : "Submit"}
//         </button>

//         {/* Form Status */}
//         <div className="text-center text-xs text-gray-600">
//           {!trustedForm.ready && <p>Initialising secure form...</p>}
//           {formData.humanVerification && !captchaValid && trustedForm.ready && (
//             <p className="text-orange-600">Please complete the CAPTCHA verification</p>
//           )}
//           {Object.keys(errors).length > 0 && !errors.form && (
//             <p className="text-red-500 mt-2">Please correct the errors above</p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// {/* Desktop Section - Contact Form */}
//       <div className="bg-white text-teal-900 rounded-lg shadow-lg p-10">
//         <h2 className="text-2xl font-semibold mb-6">Ready to Grow? Let’s Talk</h2>
//         <form className="space-y-4">
//           {["Name", "Phone", "Email"].map((ph) => (
//             <input
//               key={ph}
//               type={ph === "Email" ? "email" : ph === "Phone" ? "tel" : "text"}
//               placeholder={ph}
//               className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder:text-teal-900"
//             />
//           ))}

//           <select
//             className="w-full border-b border-gray-300 focus:outline-none py-2 text-teal-900"
//             defaultValue=""
//           >
//             <option value="" disabled>Select your concern</option>
//             <option>Personal Injury</option>
//             <option>Family Law</option>
//             <option>Criminal Defense</option>
//           </select>

//           <label className="flex items-start text-xs gap-2 leading-tight">
//             <input type="checkbox" className="mt-1 shrink-0" />
//             <span>
//               I agree to the <a href="#" className="underline">privacy policy</a> and{" "}
//               <a href="#" className="underline">disclaimer</a> and give my express written consent, affiliates and/or lawyer to contact me via the number provided even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that my call may be recorded and/or monitored. Message & data rates may apply. My consent does not require purchase. This is legal advertising.
//             </span>
//           </label>

//           <label className="flex items-start text-xs gap-2 leading-tight">
//             <input type="checkbox" className="mt-1 shrink-0" />
//             <span>Please check this box so we know you're a person and not a computer</span>
//           </label>

//           <button
//             type="submit"
//             className="w-full bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold py-3 rounded mt-2"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

// {/* Mobile Section - Contact Form */}
//     <div className="bg-white text-teal-900 rounded-lg shadow-lg p-6">
//       <h2 className="text-xl font-semibold mb-4">Ready to Grow? Let’s Talk</h2>
//       <form className="space-y-4">
//         {["Name", "Phone", "Email"].map((ph) => (
//           <input
//             key={ph}
//             type={ph === "Email" ? "email" : ph === "Phone" ? "tel" : "text"}
//             placeholder={ph}
//             className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder:text-teal-900"
//           />
//         ))}

//         <select
//           className="w-full border-b border-gray-300 focus:outline-none py-2 text-teal-900"
//           defaultValue=""
//         >
//           <option value="" disabled>Select your concern</option>
//           <option>Personal Injury</option>
//           <option>Family Law</option>
//           <option>Criminal Defense</option>
//         </select>

//         <label className="flex items-start text-xs gap-2 leading-tight">
//           <input type="checkbox" className="mt-1 shrink-0" />
//           <span>
//             I agree to the <a href="#" className="underline">privacy policy</a> and{" "}
//             disclaimer and give my express written consent, affiliates and/or lawyer to contact me via the number provided even if this number is a wireless number or if I am presently listed on a Do Not Call list. Message & data rates may apply. My consent does not require purchase. This is legal advertising.
//           </span>
//         </label>

//         <label className="flex items-start text-xs gap-2 leading-tight">
//           <input type="checkbox" className="mt-1 shrink-0" />
//           <span>Please check this box so we know you're a person and not a computer</span>
//         </label>

//         <button
//           type="submit"
//           className="w-full bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold py-3 rounded mt-2"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
