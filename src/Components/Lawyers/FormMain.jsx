import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { ChevronDown } from "lucide-react";
// import { sendAdminEmail, sendUserEmail } from './emailService'; // Import the EmailJS service

const CustomCaptcha = ({ onCaptchaChange, resetTrigger }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [charOffsets, setCharOffsets] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
 
  const generateCaptcha = useCallback(() => {
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
  }, [isSpeaking, onCaptchaChange]);
 
  // Generate CAPTCHA immediately when component mounts
  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  // Reset captcha when resetTrigger changes
  useEffect(() => {
    if (resetTrigger > 0) {
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
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [generateCaptcha, isSpeaking]);
 
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

// Constants moved outside component to prevent recreating on each render
const FORM_FIELDS = [
  { field: "name", type: "text", placeholder: "Full Name", required: true },
  { field: "phone", type: "tel", placeholder: "Phone Number", required: true },
  {
    field: "email",
    type: "email",
    placeholder: "Email Address",
    required: true,
  },
];

const CONCERN_OPTIONS = [
  { value: "", label: "Select your concern", disabled: true },
  { value: "Mesothelioma Lawsuit", label: "Mesothelioma Lawsuit" },
  { value: "Truck Accident Claims", label: "Truck Accident Claims" },
  { value: "Rideshare Class Action Lawsuits", label: "Rideshare Class Action Lawsuits" },
  { value: "other", label: "Other" },
];

const INITIAL_FORM_DATA = {
  name: "",
  phone: "",
  email: "",
  concern: "",
  privacyConsent: false,
  humanVerification: false,
  captchaEnabled: false,
};

const TRUSTEDFORM_TIMEOUT = 10000;
const TRUSTEDFORM_CHECK_INTERVAL = 500;

// Custom hook for TrustedForm integration
const useTrustedForm = () => {
  const [state, setState] = useState({
    pingUrl: "",
    certId: "",
    tokenUrl: "",
    ready: false,
  });

  const updateTrustedFormField = useCallback((name, value) => {
    if (!value) return;

    setState((prev) => {
      const key =
        name === "xxTrustedFormCertUrl"
          ? "certId"
          : name === "xxTrustedFormPingUrl"
          ? "pingUrl"
          : name === "xxTrustedFormCertToken"
          ? "tokenUrl"
          : null;

      if (!key || prev[key] === value) return prev;

      console.log(`TrustedForm ${key}:`, value);
      return { ...prev, [key]: value, ready: true };
    });
  }, []);

  useEffect(() => {
    let timeoutId, intervalId, fallbackTimeoutId;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "value" &&
          mutation.target.name?.startsWith("xxTrustedForm")
        ) {
          updateTrustedFormField(mutation.target.name, mutation.target.value);
        }
      });
    });

    const checkTrustedFormFields = () => {
      const fields = [
        {
          name: "xxTrustedFormCertUrl",
          selector: '[name="xxTrustedFormCertUrl"]',
        },
        {
          name: "xxTrustedFormPingUrl",
          selector: '[name="xxTrustedFormPingUrl"]',
        },
        {
          name: "xxTrustedFormCertToken",
          selector: '[name="xxTrustedFormCertToken"]',
        },
      ];

      fields.forEach(({ name, selector }) => {
        const field = document.querySelector(selector);
        if (field?.value) {
          updateTrustedFormField(name, field.value);
          observer.observe(field, { attributes: true });
        }
      });
    };

    timeoutId = setTimeout(() => {
      checkTrustedFormFields();
      intervalId = setInterval(
        checkTrustedFormFields,
        TRUSTEDFORM_CHECK_INTERVAL
      );
    }, 1000);

    fallbackTimeoutId = setTimeout(() => {
      setState((prev) => ({ ...prev, ready: true }));
      console.warn("TrustedForm timeout - allowing form submission");
    }, TRUSTEDFORM_TIMEOUT);

    return () => {
      [timeoutId, intervalId, fallbackTimeoutId].forEach(clearTimeout);
      observer.disconnect();
    };
  }, [updateTrustedFormField]);

  return state;
};

// Custom hook for form validation
const useFormValidation = () => {
  const validate = useCallback((formData, captchaValid, showCaptcha) => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else {
      const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!phoneRegex.test(formData.phone)) {
        errors.phone = "Invalid US phone number format (e.g. +1 561-555-7689)";
      }
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
    }

    if (!formData.concern) {
      errors.concern = "Please select your concern";
    }

    if (!formData.privacyConsent) {
      errors.privacyConsent = "You must agree to the privacy policy";
    }

    if (!formData.humanVerification) {
      errors.humanVerification = "Please verify you are human";
    }

    // Add CAPTCHA validation only if CAPTCHA is shown
    if (showCaptcha && !captchaValid) {
      errors.captcha = "Please complete the CAPTCHA verification";
    }

    return errors;
  }, []);

  return { validate };
};

const FormMain = ({ isMobile = false, className = "" }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null
  const [pageData] = useState(() => ({
    pageUrl: window.location.href,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
  }));

  const trustedForm = useTrustedForm();
  const { validate } = useFormValidation();

  // Memoized styles to prevent recalculation
  const styles = useMemo(() => {
    const baseInputStyle = `w-full border-b-2 transition-colors duration-300 ${
      isMobile ? "py-2 bg-[#FFFBF3]" : "py-3 font-opensans bg-transparent"
    } focus:outline-none placeholder:text-[#023437]/70`;

    return {
      container: `${
        isMobile
          ? "bg-[#FFFBF3] text-[#023437] rounded-lg shadow-lg p-6 font-opensans border border-gray-200"
          : "bg-[#FFFBF3]/95 backdrop-blur-sm text-[#023437] rounded-xl shadow-2xl p-8 md:p-10 border border-white/20"
      } ${className}`,
      title: `text-center font-playfair font-semibold ${
        isMobile
          ? "text-[24px] md:text-[34px] mb-4"
          : "text-[30px] md:text-[32px] mb-6"
      }`,
      input: (fieldName) =>
        `${baseInputStyle} ${
          errors[fieldName]
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-[#C09F53]"
        }`,
      baseInput: baseInputStyle,
    };
  }, [isMobile, className, errors]);

  const handleCaptchaChange = useCallback((isValid) => {
    setCaptchaValid(isValid);
    // Clear CAPTCHA error when it becomes valid
    if (isValid && errors.captcha) {
      setErrors(prev => ({ ...prev, captcha: '' }));
    }
  }, [errors.captcha]);

  const handleHumanVerificationClick = useCallback(() => {
    if (!formData.humanVerification) {
      // Show CAPTCHA when checkbox is clicked (before it's checked)
      setShowCaptcha(true);
      setCaptchaResetTrigger(prev => prev + 1);
    } else {
      // Hide CAPTCHA when unchecking
      setShowCaptcha(false);
      setCaptchaValid(false);
      setCaptchaResetTrigger(prev => prev + 1);
    }
  }, [formData.humanVerification]);

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }

      // Clear submission status when user makes changes
      if (submissionStatus) {
        setSubmissionStatus(null);
      }
    },
    [errors, submissionStatus]
  );

  // Function to map form data to EmailJS expected format
  const mapFormDataForEmailJS = useCallback((formData, trustedForm, captchaValid) => {
    const getFreshTrustedFormData = () => {
      const certField = document.querySelector('input[name="xxTrustedFormCertUrl"]');
      const pingField = document.querySelector('input[name="xxTrustedFormPingUrl"]');
      const tokenField = document.querySelector('input[name="xxTrustedFormCertToken"]');

      return {
        xxTrustedFormCertUrl: certField?.value || trustedForm.certId || '',
        xxTrustedFormPingUrl: pingField?.value || trustedForm.pingUrl || '',
        xxTrustedFormCertToken: tokenField?.value || trustedForm.tokenUrl || '',
      };
    };

    const trustedFormData = getFreshTrustedFormData();

    return {
      // Map form fields to EmailJS expected names
      firstName: formData.name,
      emailId: formData.email,
      phoneNumber: formData.phone,
      concern: formData.concern,
      caseHistory: '', // This field doesn't exist in the form, so we'll leave it empty
      
      // Consent and verification
      privacyConsent: formData.privacyConsent,
      captchaEnabled: captchaValid,
      
      // TrustedForm data
      ...trustedFormData,
      
      // Additional metadata
      submissionTime: new Date().toISOString(),
      trustedFormReady: trustedForm.ready,
      pageUrl: pageData.pageUrl,
      userAgent: pageData.userAgent,
      referrer: pageData.referrer,
    };
  }, [pageData]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const validationErrors = validate(formData, captchaValid, showCaptcha);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setSubmissionStatus('error');
        // Don't show alert, let the inline errors display
        return;
      }

      if (!trustedForm.ready) {
        setSubmissionStatus('error');
        setErrors({ form: "Please wait for the form to load completely" });
        return;
      }

      setIsSubmitting(true);
      setSubmissionStatus(null);

      try {
        // Map form data to EmailJS expected format
        const emailData = mapFormDataForEmailJS(formData, trustedForm, captchaValid);
        
        console.log("Sending emails with data:", emailData);

        // Send both admin and user emails simultaneously
        const [adminResult, userResult] = await Promise.allSettled([
          // sendAdminEmail(emailData),
          // sendUserEmail(emailData)
        ]);

        // Check if at least one email was sent successfully
        const adminSuccess = adminResult.status === 'fulfilled';
        const userSuccess = userResult.status === 'fulfilled';

        if (adminSuccess || userSuccess) {
          // Reset form on success
          setFormData(INITIAL_FORM_DATA);
          setErrors({});
          setCaptchaValid(false);
          setShowCaptcha(false);
          setCaptchaResetTrigger(prev => prev + 1);
          setSubmissionStatus('success');
          
          console.log('Email submission results:', {
            admin: adminSuccess ? 'Success' : adminResult.reason,
            user: userSuccess ? 'Success' : userResult.reason
          });

          // Log any partial failures
          if (!adminSuccess) {
            console.error('Admin email failed:', adminResult.reason);
          }
          if (!userSuccess) {
            console.error('User email failed:', userResult.reason);
          }
        } else {
          throw new Error('Both email sends failed');
        }
      } catch (error) {
        console.error("Email submission error:", error);
        setSubmissionStatus('error');
        setErrors({ 
          form: "There was an error sending your information. Please try again or contact us directly." 
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validate, trustedForm, captchaValid, showCaptcha, mapFormDataForEmailJS]
  );

  // Memoized consent text to prevent recreation
  const consentText = useMemo(
    () => (
      <div className="text-xs text-[#023437] leading-tight font-opensans">
        I agree to the{" "}
        <a href="/disclaimer" className="underline text-[#C09F53]  ">
          privacy policy
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" className="underline text-[#C09F53]  ">
          disclaimer
        </a>
         , and give my express written consent, affiliates and/or lawyer to
        contact you at the number provided above, even if this number is a
        wireless number or if I am presently listed on a Do Not Call list. I
        understand that I may be contacted by telephone, email, text message or
        mail regarding case options and that I may be called using automatic
        dialing equipment. Message & data rates may apply. My consent does not
        require purchase. This is Legal advertising.
      </div>
    ),
    []
  );

  const checkboxFields = useMemo(
    () => [
      {
        name: "privacyConsent",
        text: consentText,
        error: errors.privacyConsent,
      },
      {
        name: "humanVerification",
        text: "Please check this box to confirm you're human.",
        error: errors.humanVerification,
      },
    ],
    [consentText, errors.privacyConsent, errors.humanVerification]
  );

  const isFormValid = useMemo(() => {
    const basicValidation = (
      formData.name.trim() &&
      formData.phone.trim() &&
      formData.email.trim() &&
      formData.concern &&
      formData.privacyConsent &&
      formData.humanVerification &&
      trustedForm.ready
    );

    // If CAPTCHA is shown, it must also be valid
    if (showCaptcha) {
      return basicValidation && captchaValid;
    }

    return basicValidation;
  }, [formData, captchaValid, trustedForm.ready, showCaptcha]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ready to Grow? Let's Talk</h2>

      {/* Success Message */}
      {submissionStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <h3 className="font-semibold mb-2">Thank you for your submission!</h3>
          <p className="text-sm">
            We have received your information and will contact you shortly. Please check your email for a confirmation message.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submissionStatus === 'error' && errors.form && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          <h3 className="font-semibold mb-2">Submission Error</h3>
          <p className="text-sm">{errors.form}</p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        {/* Hidden TrustedForm fields */}
        <input
          type="hidden"
          name="xxTrustedFormCertUrl"
          value={trustedForm.certId}
        />
        <input
          type="hidden"
          name="xxTrustedFormCertToken"
          value={trustedForm.tokenUrl}
        />
        <input
          type="hidden"
          name="xxTrustedFormPingUrl"
          value={trustedForm.pingUrl}
        />

        {/* Form Fields */}
        {FORM_FIELDS.map(({ field, type, placeholder, required }) => (
          <div key={field} className="w-full">
            <input
              type={type}
              name={field}
              placeholder={placeholder}
              value={formData[field]}
              onChange={handleChange}
              className={styles.input(field)}
              required={required}
            />
            {errors[field] && (
              <p className="text-red-500 text-xs mt-1 font-opensans">
                {errors[field]}
              </p>
            )}
          </div>
        ))}

        {/* Concern Dropdown */}
        <div className="relative w-full">
          <select
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            className={`${styles.input(
              "concern"
            )} pr-10 appearance-none cursor-pointer`}
            required
          >
            {CONCERN_OPTIONS.map(({ value, label, disabled }) => (
              <option key={value} value={value} disabled={disabled}>
                {label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-[#023437]" />
          {errors.concern && (
            <p className="text-red-500 text-xs mt-1 font-opensans">
              {errors.concern}
            </p>
          )}
        </div>

        {/* Checkboxes */}
        {checkboxFields.map(({ name, text, error }) => (
          <div key={name} className="w-full">
            <label className="flex items-start text-xs gap-2 leading-tight font-opensans">
              <input
                type="checkbox"
                name={name}
                checked={formData[name]}
                onChange={handleChange}
                onClick={name === "humanVerification" ? handleHumanVerificationClick : undefined}
                className="mt-1 w-4 h-4 accent-[#C09F53]"
                required
              />
              <span>{text}</span>
            </label>
            {error && (
              <p className="text-red-500 text-xs mt-1 font-opensans">{error}</p>
            )}
          </div>
        ))}

        {/* Custom CAPTCHA - Only show when human verification is clicked */}
        {showCaptcha && (
          <div className="w-full">
            <CustomCaptcha 
              onCaptchaChange={handleCaptchaChange}
              resetTrigger={captchaResetTrigger}
            />
            {errors.captcha && (
              <p className="text-red-500 text-xs mt-1 font-opensans">
                {errors.captcha}
              </p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#C09F53] hover:bg-[#C09F53]/90 text-[#023437] font-semibold py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting || !isFormValid}
        >
          {isSubmitting
            ? "Sending..."
            : !trustedForm.ready
            ? "Loading..."
            : formData.humanVerification && !captchaValid
            ? "Complete CAPTCHA to Submit"
            : "Submit"}
        </button>

        {/* Form Status */}
        <div className="text-center text-xs text-gray-600">
          {!trustedForm.ready && <p>Initializing secure form...</p>}
          {formData.humanVerification && !captchaValid && trustedForm.ready && (
            <p className="text-orange-600">Please complete the CAPTCHA verification</p>
          )}
          {Object.keys(errors).length > 0 && !errors.form && (
            <p className="text-red-500 mt-2">Please correct the errors above</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormMain;