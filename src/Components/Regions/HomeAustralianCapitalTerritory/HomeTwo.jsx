import React, { useState, useRef } from "react";
import Marquee from "../../../assets/Group45Green.png";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import BackgroundImg from "../../../assets/NewWalesHomeTwoBackground.png";
import "react-toastify/dist/ReactToastify.css";
import "./HomeTwo.css";

import { useMediaQuery, MenuItem } from "@mui/material";
import Justice from "../../../assets/justice.png";
import { div } from "framer-motion/client";

const steps = [
  {
    number: "Step 1",
    title: "Submit your claim",
    description: "Just share a few quick details to get started.",
  },
  {
    number: "Step 2",
    title: "Get matched with a Lawyer",
    description: "We’ll connect you with a trusted NSW legal expert.",
  },
  {
    number: "Step 3",
    title: "Free case review",
    description: "Receive a no-cost case evaluation — no upfront cost.",
  },
];
function HomeTwo() {
  const targetRef = useRef(null);

  const handleConsultationClick = () => {
    window.scrollTo({
      top: 2900,
      left: 0,
      behavior: "smooth",
    });
  };
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailId: "",
    concern: "",
    caseHistory: "",
    settlementHelp: false,
    privacyConsent: false,
    humanVerification: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Responsive breakpoints
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width:769px) and (max-width:1024px)");
  const isDesktop = useMediaQuery("(min-width:1025px)");

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Dynamic text field styles based on screen size
  const getTextFieldStyle = () => ({
    "& .MuiInputLabel-root": {
      color: "#023437",
      fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
      fontFamily: "Helvetica",
      fontWeight: "bold",
      "&.Mui-focused": {
        color: "white",
      },
    },
    "& .MuiInput-root": {
      fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
      fontFamily: "Helvetica",
      color: "white",
      "&:before": {
        borderBottomColor: "#023437",
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottomColor: "#023437",
      },
      "&:after": {
        borderBottomColor: "#023437",
      },
      "&.Mui-focused": {
        color: "white",
      },
    },
    "& .MuiFormHelperText-root": {
      fontSize: isMobile ? "12px" : "14px",
      fontFamily: "Helvetica",
    },
    "& .Mui-error": {
      color: "white",
      "&:after": {
        borderBottomColor: "#d32f2f",
      },
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.length < 1) {
      newErrors.firstName = "First name must be at least 1 character";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else {
      const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber =
          "Invalid US phone number format (e.g. +1 561-555-7689)";
      }
    }

    if (!formData.emailId.trim()) {
      newErrors.emailId = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailId)) {
        newErrors.emailId = "Please enter a valid email address";
      }
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "You must agree to the privacy policy";
    }

    if (!formData.humanVerification) {
      newErrors.humanVerification = "Please verify you are human";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    setIsSubmitting(true);

    const serviceId = "service_3vbv36o";
    const templateId = "template_7xrqzk5";
    const publicKey = "5saECdElLOrsCGmdQ";

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.emailId,
      phone_number: formData.phoneNumber,
      concern: formData.concern,
      case_history: formData.caseHistory,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);

        // Reset form data
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          emailId: "",
          concern: "",
          caseHistory: "",
          settlementHelp: false,
          privacyConsent: false,
          humanVerification: false,
        });

        setSuccessDialogOpen(true);
        setShowModal(true);

        setTimeout(() => {
          window.location.href = "/Thankyou";
        }, 100);
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        toast.error("Error submitting form. Please try again.");
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
        height: "60px",
        fontSize: "32px",
        iconSize: "40px",
        marginLeft: "16px",
      };
    } else if (isTablet) {
      return {
        height: "100px",
        fontSize: "60px",
        iconSize: "70px",
        marginLeft: "24px",
      };
    } else {
      return {
        height: "140px",
        fontSize: "80px",
        iconSize: "100px",
        marginLeft: "32px",
      };
    }
  };

  const marqueeConfig = getMarqueeConfig();

  // Responsive form layout
  const getFormLayout = () => {
    if (isMobile) {
      return "flex-col space-y-6";
    } else {
      return "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8";
    }
  };

  return (
    <>
      <div className="relative w-full  overflow-hidden">
        <img
          src={BackgroundImg}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 w-full overflow-x-hidden">
          {/* Responsive Marquee Banner */}
          <div
            className={`mt-${isMobile ? "10" : "32"} ${isMobile ? "px-4" : ""}`}
          >
            <div
              className="flex justify-end items-center bg-[#C09F53] overflow-hidden relative -rotate-[4.013deg]"
              style={{
                height: marqueeConfig.height,
                width: "100vw",
                marginLeft: isMobile ? "-16px" : isTablet ? "-40px" : "-10px",
                marginTop: isMobile ? "20px" : "40px",
              }}
            >
              <div className="w-full overflow-hidden py-2">
                <div className="flex whitespace-nowrap animate-marquee">
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center"
                      style={{ marginRight: marqueeConfig.marginLeft }}
                    >
                      <span
                        className="text-[#EFE4CB] text-center font-['Playfair_Display'] font-[800] leading-none flex-shrink-0 ml-20"
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
                          width: marqueeConfig.iconSize,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Responsive Form Container */}
            <div
              className="text-center bg-[#FFF] mx-auto"
              style={{
                padding: isMobile ? "16px" : isTablet ? "32px" : "20px",
                marginTop: isMobile ? "-80px" : isTablet ? "-90px" : "-120px",
                marginLeft: isMobile ? "0" : isTablet ? "2%" : "4%",
                width: isMobile
                  ? "calc(100% - 32px)"
                  : isTablet
                  ? "96%"
                  : "1150px",
                maxWidth: isMobile
                  ? "none"
                  : isTablet
                  ? "calc(100vw - 80px)"
                  : "1150px",
                minHeight: isMobile ? "auto" : isTablet ? "900px" : "1100px",
                borderRadius: isMobile ? "8px" : "0",
              }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={`${
                  isMobile ? "mt-[15%]" : isTablet ? "mt-[12%]" : "mt-[20%]"
                }`}
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
                        marginBottom: isMobile ? "0px" : "60px",
                        marginTop: isMobile ? "40px" : "0px",
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
                        marginBottom: isMobile ? "0px" : "60px",
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
                          marginBottom: "80px",
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
                      marginBottom: "30px",
                      "& .MuiInputLabel-root": {
                        fontSize: isMobile
                          ? "16px"
                          : isTablet
                          ? "18px"
                          : "20px",
                        color: "#023437",
                        fontWeight: "bold",
                        // Remove or reduce transform
                        transform: "translate(0, 80px) scale(1)",
                      },
                      "& .MuiInputLabel-shrink": {
                        transform: "translate(0, -10px) scale(0.75)",
                        color: "#023437",
                      },
                      "& .MuiInput-root": {
                        marginTop: "10px",
                        color: "white",
                        "&:before": {
                          borderBottom: "1px solid #023437",
                          marginTop: "20px",
                        },
                        "&:hover:not(.Mui-disabled):before": {
                          borderBottom: "2px solid #023437",
                        },
                        "&:after": {
                          borderBottom: "2px solid #023437",
                        },
                      },
                      "& .MuiInput-input": {
                        color: "white",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "white",
                      },
                    }}
                  />
                </div>

                {/* Checkboxes */}
                <div
                  className={`mt-8 space-y-6 text-white ${
                    isMobile ? "text-sm" : "text-base"
                  } leading-relaxed`}
                >
                  {/* Settlement Help */}
                  {/* <div className="flex items-start">
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
              </div> */}

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
                    <label
                      htmlFor="privacyConsent"
                      className="ml-3 block text-[#023437] text-left"
                    >
                      {!isMobile ? (
                        <>
                          <span className="block">
                            I agree to the{" "}
                            <a
                              href="/PrivacyPolicy"
                              className="underline text-[#C09F53]"
                            >
                              privacy policy
                            </a>{" "}
                            and{" "}
                            <a
                              href="/Disclaimer"
                              className="underline text-[#C09F53]"
                            >
                              disclaimer
                            </a>
                            {""}
                            give my express written consent, affiliates and/or
                            lawyer to contact you at the number provided above,
                            even if this number is a wireless number or if I am
                            presently listed on a Do Not Call list. I understand
                            that I may be contacted by telephone, email, text
                            message or mail regarding case options and that I
                            may be called using automatic dialing equipment.
                            Message and data rates may apply. My consent does
                            not require purchase. This is Legal advertising.
                          </span>
                        </>
                      ) : (
                        "I agree to the privacy policy and disclaimer and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising."
                      )}
                    </label>
                    {errors.privacyConsent && (
                      <p className="mt-2 text-sm text-red-300">
                        {errors.privacyConsent}
                      </p>
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
                    <label
                      htmlFor="humanVerification"
                      className="ml-3 block text-left text-[#023437]"
                    >
                      {isMobile
                        ? "Please click this box so we know you're a person and not a computer"
                        : "Please click this box so we know you're a person and not a computer"}
                    </label>
                    {errors.humanVerification && (
                      <p className="mt-2 text-sm text-red-300">
                        {errors.humanVerification}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
    ${isMobile ? "w-full" : "inline-flex"}
    ${isMobile ? "h-[50px]" : "h-[60px]"}
    px-[49px]
    justify-center
    items-center
    gap-[10px]
    flex-shrink-0
    rounded-[60px]
    bg-[#023437]
    text-white
    font-[600]
    text-[20px]
    leading-normal
    font-opensans
    hover:bg-[#374A67]
    disabled:opacity-70
    transition-colors
    duration-200
    ${isMobile ? "mt-8 mb-4" : isTablet ? "mt-12" : "mt-16"}
    ${!isMobile ? "ml-[-76%]" : ""}
  `}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                {/* Modal */}
                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                      <h2 className="text-2xl font-bold text-[#023437] mb-4">
                        Thank You!
                      </h2>
                      <p className="text-gray-700 mb-6">
                        Your submission has been received. We'll get back to you
                        soon.
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
        </div>
      </div>
    </>
  );
}

export default HomeTwo;
