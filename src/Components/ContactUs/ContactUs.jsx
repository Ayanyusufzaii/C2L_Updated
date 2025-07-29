import React, { useState, useRef, useEffect } from 'react';
import NavBar from "../NavBar";
import Vector from "../../assets/Vector (1).png";
import map from "../../assets/map.png";
import Frame17 from "../../assets/Frame 17.png";
import Frame from "../../assets/Frame 262 (2).png";
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import Footer from '../Footer';
import { useMediaQuery, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';
import HomeSeven from '../Home/HomeSeven';
import contactUsHero from '../../assets/contactUsHero.png';
// import emailjs from 'emailjs-com';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
function ContactUs() {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const isMobile = useMediaQuery('(max-width:768px)');
    const isTablet = useMediaQuery('(min-width:769px) and (max-width:1024px)');
    const isLaptop = useMediaQuery('(min-width:1025px) and (max-width:1535px)');
    const isLargeScreen = useMediaQuery('(min-width:1536px)');

    const textFieldStyle = {
        '& .MuiInputLabel-root': {
            color: 'white',
            fontSize: isMobile ? '16px' : isTablet ? '18px' : isLaptop ? '20px' : '22px',
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            '&.Mui-focused': {
                color: 'white'
            }
        },
        '& .MuiInput-root': {
            fontSize: isMobile ? '16px' : isTablet ? '18px' : isLaptop ? '20px' : '22px',
            fontFamily: 'Helvetica',
            color: 'white',
            '&:before': {
                borderBottomColor: 'white'
            },
            '&:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'white'
            },
            '&:after': {
                borderBottomColor: 'white'
            },
            '&.Mui-focused': {
                color: 'white'
            }
        },
        '& .MuiInputBase-input': {
            color: 'white',
            fontSize: isMobile ? '16px' : isTablet ? '18px' : isLaptop ? '20px' : '22px',
            fontWeight: 'bold',
        },
        '& .MuiInput-input': {
            color: 'white',
            fontSize: isMobile ? '16px' : isTablet ? '18px' : isLaptop ? '20px' : '22px',
            fontWeight: 'bold',
        },
        '& .MuiFormHelperText-root': {
            color: 'white',
            fontSize: isMobile ? '12px' : isTablet ? '14px' : isLaptop ? '16px' : '18px',
            fontFamily: 'Helvetica'
        },
        '& .Mui-error': {
            color: 'white',
            '&:after': {
                borderBottomColor: '#d32f2f'
            }
        }
    };

    const formRef = useRef();
    const [formData, setFormData] = useState({
        Name: '',
        lastName: '',
        phoneNumber: '',
        emailId: '',
        concern: '',
        caseHistory: '',
        settlementHelp: false,
        privacyConsent: false,
        humanVerification: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successDialogOpen, setSuccessDialogOpen] = useState(false);

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
  
    const validateForm = () => {
        const newErrors = {};

        if (!formData.Name.trim()) {
            newErrors.Name = 'First name is required';
        } else if (formData.Name.length < 1) {
            newErrors.Name = 'First name must be at least 1 character';
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else {
            const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
            if (!phoneRegex.test(formData.phoneNumber)) {
                newErrors.phoneNumber = 'Invalid phone number format';
            }
        }

        if (!formData.emailId.trim()) {
            newErrors.emailId = 'Email is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.emailId)) {
                newErrors.emailId = 'Please enter a valid email';
            }
        }

        if (!formData.privacyConsent) {
            newErrors.privacyConsent = 'You must agree to the privacy policy';
        }

        if (!formData.humanVerification) {
            newErrors.humanVerification = 'Please verify you are human';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCloseDialog = () => {
        setSuccessDialogOpen(false);
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
            from_name: `${formData.Name} ${formData.lastName}`,
            email: formData.emailId,
            phone_number: formData.phoneNumber,
            concern: formData.concern,
            case_history: formData.caseHistory
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully:', response);

                // Reset form data
                setFormData({
                    Name: '',
                    lastName: '',
                    phoneNumber: '',
                    emailId: '',
                    concern: '',
                    caseHistory: '',
                    settlementHelp: false,
                    privacyConsent: false,
                    humanVerification: false
                });

                // Show success dialog (if you still want this)
                setSuccessDialogOpen(true);

                // Show modal temporarily before redirect (if needed)
                setShowModal(true);

                // Redirect to thank you page after a short delay
                setTimeout(() => {
                    window.location.href = '/Thankyou';
                }, 100); // 1.5 second delay to allow user to see success message
            })
            .catch((error) => {
                console.error('Email sending error:', error);
                toast.error('Error submitting form. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    // Mobile Layout
    if (isMobile) {
        return (
            <div>
                <NavBar />
               <div className="relative w-full px-0 pt-16 pb-8 sm:pt-24 sm:pb-12 flex flex-col ">
                    {/* Hero Section */}
                    <div className="relative w-full px-0 pt-16 pb-8 sm:pt-24 sm:pb-12 flex flex-col gap-6">
                        <div className="flex flex-col items-start">
                            <p className="text-[#023437] font-sans text-base sm:text-lg font-bold">Contact Us</p>
                            <h1 className="text-[#023437] mt-2 font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-extrabold">
                                We're here to help
                            </h1>
                            <p className="text-[#023437] font-sans text-base sm:text-lg font-bold underline mt-6">
                                +61 470 695 167
                            </p>
                            <p className="text-[#023437] font-sans text-base sm:text-lg font-bold underline mt-2">
                                info@connect2lawyer.com.au
                            </p>
                        </div>
                        <div className="flex justify-start mt-4">
                            <img src={map} className='w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain' alt="Map" />
                        </div>
                    </div>

                    {/* Info Section with full-width image and overlaid heading/subheading */}
                    <div className="relative w-full">
                        <img src={Frame17} className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover" alt="Frame" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <p className="w-full max-w-2xl text-center text-[#023437] font-['Playfair_Display'] text-base sm:text-2xl md:text-4xl font-bold mt-2 px-2 drop-shadow">
                                Connect2Lawyer has helped thousands secure the legal care they deserve. Filing a claim may seem complex, but our experienced lawyers are here to guide you.
                            </p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="w-full bg-[#023437] px-0 py-8 flex flex-col items-center">
                        <h1 className="w-full max-w-lg text-[#C09F53] font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-center">
                            Let's Review Your Case Today.
                        </h1>
                        <p className="text-[#FFFBF3] font-open-sans text-base sm:text-lg font-semibold mb-9 w-full max-w-lg text-center">
                            Take the first step toward justice—complete your free case evaluation today.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 px-2">
                            <TextField
                                id="Name"
                                name="Name"
                                label="Name"
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

                            {/* Checkbox Section */}
                            <div className="space-y-4 text-white text-sm leading-relaxed">
                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id="settlementHelp"
                                        name="settlementHelp"
                                        checked={formData.settlementHelp || false}
                                        onChange={handleChange}
                                        className="h-5 w-5 accent-[#C09F53] mt-1"
                                    />
                                    <label htmlFor="settlementHelp" className="ml-3 block">
                                        I would be needing help to file a settlement.
                                    </label>
                                </div>
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
                                            I agree to the{' '}
                                            <a href="/Privacypolicy" className="underline hover:text-blue-200">
                                                privacy policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="/Disclaimer" className="underline hover:text-blue-200">
                                                disclaimer
                                            </a>{' '}
                                            and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list.
                                        </span>
                                        <span className="block mt-2">
                                            I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                                        </span>
                                    </label>
                                </div>
                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id="humanVerification"
                                        name="humanVerification"
                                        checked={formData.humanVerification || false}
                                        onChange={handleChange}
                                        className="h-5 w-5 accent-[#C09F53] mt-1"
                                        required
                                    />
                                    <label htmlFor="humanVerification" className="ml-3 block">
                                        Please click this box so we know you're a person and not a computer
                                    </label>
                                </div>
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
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>

                    <HomeSeven />
                    <Footer />
                </div>
            </div>
        );
    }

    // Desktop, Tablet, Laptop, 4K Layout
    return (
        <div>
            <NavBar />
            <div className="relative flex flex-col items-center w-full min-h-[600px] xl:min-h-[800px] 2xl:min-h-[1200px]">
                <img 
                    src={contactUsHero} 
                    className="w-full max-w-[2200px] h-auto max-h-[1200px] mt-16 p-0 md:p-6 lg:p-10 xl:p-16 2xl:p-24 relative z-10 mx-auto object-cover rounded-xl"
                    style={{ objectPosition: 'center top' }}
                    alt="" 
                />
                <div className="absolute z-10 top-[26%] right-0 md:right-[12%] w-full max-w-[572px] xl:max-w-[700px] 2xl:max-w-[900px] text-left md:pl-32 xl:pl-56 2xl:pl-80 px-2 md:px-0">
                    <p className="text-[#023437] font-sans text-[24px] font-bold normal-case leading-none text-left">Contact Us</p>
                    <h1 className="w-full text-[#023437] font-['Playfair_Display'] text-[90px] font-extrabold leading-tight text-left">
                        We're here
                        to help
                    </h1>
                    <p className="text-[#023437] font-sans text-[32px] not-italic font-bold mt-8 text-left">
                        +61 470 695 167
                    </p>
                    <p className="text-[#023437] font-sans text-[32px] not-italic font-bold mt-2 text-left">
                        info@connect2lawyer.com.au
                    </p>
                    <div className="w-full border-b-2 border-[#023437] my-6"></div>
                    <div className="flex space-x-2 sm:space-x-4 mt-4 lg:mt-0">
                        <div className="rounded-full border border-[#023437] p-2">
                            <a
                                href="https://www.facebook.com/profile.php?id=61570446132760"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-[#023437]"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                        <div className="rounded-full border border-[#023437] p-2">
                            <a
                                href="https://www.instagram.com/connect2lawyer/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-[#023437]"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                        <div className="rounded-full border border-[#023437] p-2">
                            <a
                                href="https://www.linkedin.com/company/connect2lawyer/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-[#023437]"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[2200px] h-auto flex-shrink-0 mt-8 md:mt-16 mx-auto bg-[#EFE4CB] py-8 md:py-16 px-0 md:px-8 lg:px-16 xl:px-24 2xl:px-32 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 xl:gap-32 2xl:gap-40 px-0 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
                    <img src={Frame} className="w-full max-w-[400px] xl:max-w-[600px] 2xl:max-w-[800px] h-auto max-h-[200px] xl:max-h-[300px] 2xl:max-h-[400px] object-contain" alt="" />
                    <p className="text-[#023437] font-open-sans text-base md:text-lg lg:text-2xl xl:text-[32px] 2xl:text-[48px] w-full max-w-[1200px] xl:max-w-[1600px] 2xl:max-w-[24 00px] font-bold leading-relaxed text-center md:text-left">
                        Connect2Lawyer has helped thousands secure the legal care they deserve. Filing a claim may seem complex,
                        but our experienced lawyers are here to guide you every step of the way.
                    </p>
                </div>
            </div>

            <div className="w-full bg-[#023437] from-11.75% to-[rgba(2,52,55,0.53)] to-100% backdrop-blur-[12.5px] py-8 md:py-16 px-0 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
                <div className="max-w-[2200px] mx-auto flex flex-col items-start">
                    <h1 className="text-[#C09F53] font-['Playfair_Display'] text-3xl md:text-5xl lg:text-7xl xl:text-[96px] 2xl:text-[120px] font-extrabold leading-tight mb-8 text-left">
                        Let's Review<br />
                        Your Case Today.
                    </h1>
                    <p className="text-[#FFFBF3] font-open-sans text-lg md:text-xl lg:text-2xl xl:text-[24px] 2xl:text-[36px] font-semibold leading-relaxed mb-12 text-left max-w-2xl xl:max-w-4xl 2xl:max-w-6xl pl-1">
                        Take the first step toward justice—<br />
                        complete your free case evaluation today.
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="w-full max-w-[1200px] mx-auto md:pl-8 lg:pl-16 xl:pl-32 2xl:pl-48 px-0"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 xl:gap-20 mb-12">
                            <div className="space-y-10">
                                <TextField
                                    id="Name"
                                    name="Name"
                                    label="Name"
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
                                            marginBottom: '40px',
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
                                    marginBottom: '40px',
                                    '& .MuiInputLabel-root': {
                                        transform: 'translate(0, 15px) scale(1)',
                                        fontSize: isMobile ? '16px' : isTablet ? '18px' : isLaptop ? '20px' : '22px',
                                        color: "white",
                                        fontWeight: 'bold',
                                    },
                                    '& .MuiInputLabel-shrink': {
                                        transform: 'translate(0, -10px) scale(0.75)',
                                        color: "white"
                                    },
                                    '& .MuiInput-root': {
                                        marginTop: '50px',
                                        color: "white",
                                        '&:before': {
                                            borderBottom: '1px solid white',
                                            marginTop: '20px'
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottom: '2px solid white'
                                        },
                                        '&:after': {
                                            borderBottom: '2px solid white'
                                        }
                                    },
                                    '& .MuiInput-input': {
                                        color: "white",
                                        fontSize: isMobile ? '16px' : isTablet ? '18px' : isLaptop ? '20px' : '22px',
                                        fontWeight: 'bold',
                                    },
                                    '& .MuiFormHelperText-root': {
                                        color: "white"
                                    }
                                }}
                            />

                            <div className="space-y-8 text-white">
                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id="settlementHelp"
                                        name="settlementHelp"
                                        checked={formData.settlementHelp || false}
                                        onChange={handleChange}
                                        className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="settlementHelp" className="ml-3 block text-[16px] font-normal">
                                        I would be needing help to file a settlement.
                                    </label>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <input
                                            type="checkbox"
                                            id="privacyConsent"
                                            name="privacyConsent"
                                            checked={formData.privacyConsent || false}
                                            onChange={handleChange}
                                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>
                                    <label htmlFor="privacyConsent" className="ml-3 block text-white text-[16px] font-normal text-left">
                                        <span className="block">
                                            I agree to the{' '}
                                            <a href="/Privacypolicy" className="underline hover:text-blue-200">
                                                privacy policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="/Disclaimer" className="underline hover:text-blue-200">
                                                disclaimer
                                            </a>{' '}
                                            and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list.
                                        </span>
                                        <span className="block mt-2">
                                            I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                                        </span>
                                    </label>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id="humanVerification"
                                        name="humanVerification"
                                        checked={formData.humanVerification || false}
                                        onChange={handleChange}
                                        className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        required
                                    />
                                    <label htmlFor="humanVerification" className="ml-3 block text-[16px] font-normal">
                                        Please click this box so we know you're a person and not a computer
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex h-[60px] px-[49px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[60px] bg-[#023437] text-[#FFFBF3] border border-[#FFFBF3] font-open-sans text-[16px] font-bold leading-normal hover:bg-[#374A67] disabled:opacity-70 transition-colors duration-200 w-full md:w-auto"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>

                <HomeSeven />
                <Footer />
            
        </div>
    );
}

export default ContactUs;
