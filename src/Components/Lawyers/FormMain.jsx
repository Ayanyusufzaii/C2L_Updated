import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const FormMain = ({ isMobile = false, className = "" }) => {
  const formRef = useRef();
  
  // Enhanced form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "",
    caseHistory: "",
    privacyConsent: false,
    humanVerification: false,
    captchaEnabled: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  
  // Captcha states
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);
  
  // TrustedForm and tracking states
  const [pingUrl, setPingUrl] = useState("");
  const [certId, setCertId] = useState("");
  const [tokenUrl, setTokenUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [trustedFormReady, setTrustedFormReady] = useState(false);

  // Capture page URL and IP on mount
  useEffect(() => {
    // Set page URL
    setPageUrl(window.location.href);
    
    // Get IP address - you can integrate with an IP service
    // Example: fetch('https://api.ipify.org?format=json').then(res => res.json()).then(data => setIpAddress(data.ip));
    
    // For now, we'll use a placeholder or leave empty
    setIpAddress(""); // You can implement IP detection here
  }, []);

  // Enhanced TrustedForm integration
  useEffect(() => {
    let timeoutId;
    let intervalId;

    // Function to check and update TrustedForm values
    const checkTrustedFormFields = () => {
      const certField = document.querySelector('input[name="xxTrustedFormCertUrl"]');
      const pingField = document.querySelector('input[name="xxTrustedFormPingUrl"]');
      const tokenField = document.querySelector('input[name="xxTrustedFormCertToken"]');

      let hasUpdates = false;

      if (certField && certField.value && certField.value !== certId) {
        setCertId(certField.value);
        console.log("TrustedForm Cert ID:", certField.value);
        hasUpdates = true;
      }

      if (pingField && pingField.value && pingField.value !== pingUrl) {
        setPingUrl(pingField.value);
        console.log("TrustedForm Ping URL:", pingField.value);
        hasUpdates = true;
      }

      if (tokenField && tokenField.value && tokenField.value !== tokenUrl) {
        setTokenUrl(tokenField.value);
        console.log("TrustedForm Cert Token:", tokenField.value);
        hasUpdates = true;
      }

      // Mark as ready if we have any TrustedForm data or after timeout
      if (hasUpdates || certField?.value || pingField?.value || tokenField?.value) {
        setTrustedFormReady(true);
      }

      return hasUpdates;
    };

    // MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "value") {
          const target = mutation.target;

          // Check if this is a TrustedForm field
          if (target.name === "xxTrustedFormCertUrl" && target.value) {
            setCertId(target.value);
            console.log("TrustedForm Cert ID:", target.value);
            setTrustedFormReady(true);
          }

          if (target.name === "xxTrustedFormPingUrl" && target.value) {
            setPingUrl(target.value);
            console.log("TrustedForm Ping URL:", target.value);
          }

          if (target.name === "xxTrustedFormCertToken" && target.value) {
            setTokenUrl(target.value);
            console.log("TrustedForm Cert Token:", target.value);
          }
        }
      });
    });

    // Start monitoring after a delay
    timeoutId = setTimeout(() => {
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

      // Start periodic checking
      intervalId = setInterval(checkTrustedFormFields, 500);
      
      // Initial check
      checkTrustedFormFields();
    }, 1000);

    // Fallback: Allow form submission after timeout
    const fallbackTimeoutId = setTimeout(() => {
      setTrustedFormReady(true);
      console.warn("TrustedForm timeout - allowing form submission");
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(fallbackTimeoutId);
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [certId, pingUrl, tokenUrl]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear errors when user starts typing
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 1) {
      newErrors.name = 'Name must be at least 1 character';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Invalid US phone number format (e.g. +1 561-555-7689)';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.concern) {
      newErrors.concern = 'Please select your concern';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must agree to the privacy policy';
    }

    if (!formData.humanVerification) {
      newErrors.humanVerification = 'Please verify you are human';
    }

    // Add captcha validation if enabled
    if (formData.captchaEnabled && !captchaValid) {
      newErrors.captcha = 'Please complete the CAPTCHA verification';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please correct the errors in the form');
      return;
    }

    if (!trustedFormReady) {
      alert('Please wait for the form to load completely');
      return;
    }

    setIsSubmitting(true);

    // Get fresh TrustedForm data at submission time
    let finalCertUrl = certId;
    let finalPingUrl = pingUrl;
    let finalTokenUrl = tokenUrl;

    const certField = document.querySelector('input[name="xxTrustedFormCertUrl"]');
    const pingField = document.querySelector('input[name="xxTrustedFormPingUrl"]');
    const tokenField = document.querySelector('input[name="xxTrustedFormCertToken"]');

    if (certField && certField.value) finalCertUrl = certField.value;
    if (pingField && pingField.value) finalPingUrl = pingField.value;
    if (tokenField && tokenField.value) finalTokenUrl = tokenField.value;

    // Create comprehensive payload
    const payload = {
      ...formData,
      // TrustedForm data
      xxTrustedFormCertUrl: finalCertUrl,
      xxTrustedFormPingUrl: finalPingUrl,
      xxTrustedFormCertToken: finalTokenUrl,
      // Tracking data
      pageUrl: pageUrl,
      ipAddress: ipAddress,
      submissionTime: new Date().toISOString(),
      trustedFormReady: trustedFormReady,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };

    console.log("Form submitted with comprehensive payload:", payload);

    try {
      // Replace with your actual API endpoint or EmailJS integration
      // Example EmailJS integration:
      /*
      const serviceId = 'your_service_id';
      const templateId = 'your_template_id';
      const publicKey = 'your_public_key';

      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        concern: formData.concern,
        case_history: formData.caseHistory,
        xxTrustedFormCertUrl: finalCertUrl,
        xxTrustedFormPingUrl: finalPingUrl,
        xxTrustedFormCertToken: finalTokenUrl,
        pageUrl: pageUrl,
        ipAddress: ipAddress
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      */

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on success
      setFormData({
        name: "",
        phone: "",
        email: "",
        concern: "",
        caseHistory: "",
        privacyConsent: false,
        humanVerification: false,
        captchaEnabled: false
      });

      // Reset captcha
      setCaptchaValid(false);
      setCaptchaResetTrigger(prev => prev + 1);

      setSuccessDialogOpen(true);
      alert("Form submitted successfully!");

      // Optional: Redirect after delay
      // setTimeout(() => {
      //   window.location.href = '/thank-you';
      // }, 2000);

    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseDialog = () => {
    setSuccessDialogOpen(false);
  };

  // Form configuration
  const sharedFields = [
    { field: "name", type: "text", placeholder: "Full Name", required: true },
    { field: "phone", type: "tel", placeholder: "Phone Number", required: true },
    { field: "email", type: "email", placeholder: "Email Address", required: true },
  ];

  const concernOptions = [
    { value: "", label: "Select your concern", disabled: true },
    { value: "personal-injury", label: "Personal Injury" },
    { value: "family-law", label: "Family Law" },
    { value: "criminal-defense", label: "Criminal Defense" },
    { value: "business-law", label: "Business Law" },
    { value: "real-estate", label: "Real Estate" },
    { value: "other", label: "Other" },
  ];

  const consentText = (
    <>
      I agree to the{" "}
      <a href="#" className="underline text-[#C09F53] hover:text-[#C09F53]/80">
        privacy policy
      </a>{" "}
      and{" "}
      <a href="#" className="underline text-[#C09F53] hover:text-[#C09F53]/80">
        disclaimer
      </a>
      , and give my express written consent.
    </>
  );

  const humanText = <>Please check this box to confirm you're human.</>;
  
  const baseInputStyle = `w-full border-b-2 transition-colors duration-300 ${
    isMobile ? "py-2 bg-[#FFFBF3]" : "py-3 font-opensans bg-transparent"
  }`;

  const getInputStyle = (fieldName) => {
    const hasError = errors[fieldName];
    return `${baseInputStyle} ${
      hasError 
        ? "border-red-500 focus:border-red-500" 
        : "border-gray-300 focus:border-[#C09F53]"
    } focus:outline-none placeholder:text-[#023437]/70`;
  };

  return (
    <div
      className={`${
        isMobile
          ? "bg-[#FFFBF3] text-[#023437] rounded-lg shadow-lg p-6 font-opensans border border-gray-200"
          : "bg-[#FFFBF3]/95 backdrop-blur-sm text-[#023437] rounded-xl shadow-2xl p-8 md:p-10 border border-white/20"
      } ${className}`}
    >
      <h2
        className={`text-center font-playfair font-semibold ${
          isMobile ? "text-[24px] md:text-[34px] mb-4" : "text-[30px] md:text-[32px] mb-6"
        }`}
      >
        Ready to Grow? Let's Talk
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
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

        {/* Form Fields */}
        {sharedFields.map(({ field, type, placeholder, required }) => (
          <div key={field} className="w-full">
            <input
              type={type}
              name={field}
              placeholder={placeholder}
              value={formData[field]}
              onChange={handleChange}
              className={getInputStyle(field)}
              required={required}
            />
            {errors[field] && (
              <p className="text-red-500 text-xs mt-1 font-opensans">{errors[field]}</p>
            )}
          </div>
        ))}

        {/* Concern Dropdown */}
        <div className="relative w-full">
          <select
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            className={`${getInputStyle('concern')} pr-10 appearance-none cursor-pointer`}
            required
          >
            {concernOptions.map(({ value, label, disabled }) => (
              <option key={value} value={value} disabled={disabled}>
                {label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
            <ChevronDown className="w-5 h-5 text-[#023437]" />
          </span>
          {errors.concern && (
            <p className="text-red-500 text-xs mt-1 font-opensans">{errors.concern}</p>
          )}
        </div>

        {/* Case History Textarea */}
        <div className="w-full">
          <textarea
            name="caseHistory"
            placeholder="Please describe your case or legal matter (optional)"
            value={formData.caseHistory}
            onChange={handleChange}
            rows={4}
            className={`${baseInputStyle} border-gray-300 focus:border-[#C09F53] focus:outline-none placeholder:text-[#023437]/70 resize-none`}
          />
        </div>

        {/* Checkboxes */}
        {[
          { name: "privacyConsent", text: consentText, error: errors.privacyConsent },
          { name: "humanVerification", text: humanText, error: errors.humanVerification }
        ].map(({ name, text, error }) => (
          <div key={name} className="w-full">
            <label className="flex items-start text-xs gap-2 leading-tight">
              <input
                type="checkbox"
                name={name}
                checked={formData[name]}
                onChange={handleChange}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#C09F53] hover:bg-[#C09F53]/90 text-[#023437] font-semibold py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting || !trustedFormReady}
        >
          {isSubmitting ? 'Submitting...' : trustedFormReady ? 'Submit' : 'Loading...'}
        </button>

        {/* Form Status */}
        <div className="text-center text-xs text-gray-600">
          {!trustedFormReady && (
            <p>Initializing secure form...</p>
          )}
          {Object.keys(errors).length > 0 && (
            <p className="text-red-500 mt-2">Please correct the errors above</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormMain;