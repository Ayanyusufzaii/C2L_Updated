import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./FormMain.css";
import { sendFormAdmin, sendFormUser } from "../../emailJsService"; // Adjust path as needed
import imageSrc from "../../assets/thankyouimng.png"

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
  successDialogOpen,
  setSuccessDialogOpen,
}) => (
  <>
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

  {/* Submit message removed */}

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
          <option>Mesothelioma Lawsuit</option>
          <option>Truck Accident Claims</option>
          <option>Rideshare Class Action Lawsuits</option>
          <option> Other</option>
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
        {successDialogOpen  && (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-[9999]">
        <img
          src={imageSrc}
          alt="Success"
          onClick={() => setSuccessDialogOpen(false)}
          className="w-full h-auto max-h-[70vh] object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200"
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
  certId,
  tokenUrl,
  pingUrl,
  isSubmitting,
  submitMessage,
  successDialogOpen,
  setSuccessDialogOpen,
}) => (
  <>
    <div className="md:hidden bg-[#FFFBF3] text-[#023437] rounded-lg shadow-lg p-6 font-opensans border border-gray-200">
      <input type="hidden" name="xxTrustedFormCertUrl" value={certId} />
      <input type="hidden" name="xxTrustedFormCertToken" value={tokenUrl} />
      <input type="hidden" name="xxTrustedFormPingUrl" value={pingUrl} />

      <h2 className="text-center font-playfair font-semibold text-[24px] mb-4">
        Ready to Grow? Let's Talk
      </h2>

  {/* Submit message removed */}

      {/* form container now relative for popup positioning */}
      <form onSubmit={handleSubmit} className="space-y-4 relative">
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
          <option>Mesothelioma Lawsuit</option>
          <option>Truck Accident Claims</option>
          <option>Rideshare Class Action Lawsuits</option>
          <option>Other</option>
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

        {/* SUCCESS POPUP inside the form */}
        {successDialogOpen && (
          <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50 rounded-lg">
            <img
              src={imageSrc}
              alt="Success"
              onClick={() => setSuccessDialogOpen(false)}
              className="w-full h-auto max-h-[70vh] object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-lg"
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
  const [pingUrl, setPingUrl] = useState("");
  const [certId, setCertId] = useState("");
  const [tokenUrl, setTokenUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false); 
  const [submitMessage, setSubmitMessage] = useState(null);
  
  // You can add your image source here if you have one
  const imageSrc = null; // Replace with your success image URL if available

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
      setSuccessDialogOpen(true); // Show success popup
      setShowCaptcha(false);
      setCaptchaValid(false);
      setResetTrigger((t) => !t);
      setPhoneError("");
      setSubmitMessage({
        type: "success",
        text: "Form submitted successfully! You should receive a confirmation email shortly.",
      });

    } catch (err) {
      console.error(err);
      try {
        await sendFormAdmin(submitData);
        setSubmitMessage({
          type: "success",
          text: "Form submitted successfully! Confirmation email failed, but we have received your inquiry.",
        });
        setSuccessDialogOpen(true); // Show success popup even if email fails
      } catch {
        setSubmitMessage({
          type: "error",
          text: "There was an error submitting your form. Please try again or contact us directly.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
        successDialogOpen={successDialogOpen}
        setSuccessDialogOpen={setSuccessDialogOpen}
        imageSrc={imageSrc}
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
        successDialogOpen={successDialogOpen}
        setSuccessDialogOpen={setSuccessDialogOpen}
        imageSrc={imageSrc}
      />
    </>
  );
};

export default FormMain;












































































