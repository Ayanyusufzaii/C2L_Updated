import Frame from '../../assets/asbestos.png';
import img2 from '../../assets/img2.png';
import React, { useState, useRef } from 'react';
import Marquee from "../../assets/Group 45.png";
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function ClassTwo() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const textFieldStyle = {
        '& .MuiInputLabel-root': {
            color: 'white',
            fontSize: isMobile ? '16px' : '20px',
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            '&.Mui-focused': {
                color: 'white'
            }
        },
        '& .MuiInput-root': {
            fontSize: isMobile ? '16px' : '20px',
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
        '& .MuiFormHelperText-root': {
            fontSize: isMobile ? '12px' : '14px',
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
        firstName: '',
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

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        } else if (formData.firstName.length < 1) {
            newErrors.firstName = 'First name must be at least 1 character';
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else {
            const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
            if (!phoneRegex.test(formData.phoneNumber)) {
                newErrors.phoneNumber = 'Invalid US phone number format (e.g. +1 561-555-7689)';
            }
        }

        if (!formData.emailId.trim()) {
            newErrors.emailId = 'Email is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.emailId)) {
                newErrors.emailId = 'Please enter a valid email address';
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
            from_name: `${formData.firstName} ${formData.lastName}`,
            email: formData.emailId,
            phone_number: formData.phoneNumber,
            concern: formData.concern,
            case_history: formData.caseHistory
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully:', response);
                setSuccessDialogOpen(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    emailId: '',
                    concern: '',
                    caseHistory: '',
                    settlementHelp: false,
                    privacyConsent: false,
                    humanVerification: false
                });
                setIsSubmitting(false);
                toast.success('Form submitted successfully!');
            })
            .catch((error) => {
                console.error('Email sending error:', error);
                toast.error('Error submitting form. Please try again.');
                setIsSubmitting(false);
            });
    };

    const renderDesktopView = () => (
        <div>
            <div className='w-full h-full '>
                <img src={Frame} alt="Phone Icon" />
            </div>
            <div className='absolute z-10 w-full h-full mt-[-60%]'>
                <div className="flex w-[1500.954px] h-[140px]  z-10 justify-end items-center gap-8 bg-[#C09F53] overflow-hidden relative mt-16">
                    <div className="w-full overflow-hidden py-2">
                        <div className="flex whitespace-nowrap animate-marquee">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="flex items-center mr-32">
                                    <span className="w-[795px] h-[121px] flex-shrink-0 text-[#FFF] text-center font-['Playfair_Display'] text-[80px] font-[800] leading-none">
                                        Get a free case review
                                    </span>
                                    <img src={Marquee} alt="Banner" className="h-[100px] w-[100px] object-cover ml-16 justify-between mt-[-1%]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className=" w-[1150px] h-[1200px]  flex-shrink-0 bg-gradient-to-br from-[#023437] from-11.75% to-[rgba(2,52,55,0.53)] to-100% backdrop-blur-[12.5px] p-[20px] mt-[-13%] ml-[4%] text-center">
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-[25%]'>
                        <div className="flex mt-10">
                            <div className="flex-1 px-4">
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
                                        ...textFieldStyle,
                                        marginBottom: '60px'
                                    }}
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

                            <div className="flex-1 px-4">
                                <TextField
                                    id="PhoneNumber"
                                    name="PhoneNumber"
                                    label="Phone Number"
                                    variant="standard"
                                    fullWidth
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    error={!!errors.phoneNumber}
                                    helperText={errors.phoneNumber}
                                    sx={{
                                        ...textFieldStyle,
                                        marginBottom: '60px'
                                    }}
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
                                            marginBottom: '80px', // adjust as needed
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

                        <div className="flex-2 w-[95%] mt-32 ml-[2%]">
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
                                sx={textFieldStyle}

                            />


                            {/* Checkbox Section */}
                            <div className="mt-8 space-y-6 text-white">
                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id="settlementHelp"
                                        name="settlementHelp"
                                        checked={formData.settlementHelp || false}
                                        onChange={handleChange}
                                        className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="settlementHelp" className="ml-3 block text-lg">
                                        I would be needing help to file a settlement.
                                    </label>
                                </div>

                                <div className="flex items-start mt-4">
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
                                    <label htmlFor="privacyConsent" className="ml-3 block text-white text-lg text-left">
                                        <span className="block">
                                            I agree to the{' '}
                                            <a href="/privacy-policy" className="underline hover:text-blue-200">
                                                privacy policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="/disclaimer" className="underline hover:text-blue-200">
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
                                    <label htmlFor="humanVerification" className="ml-3 block text-lg">
                                        Please click this box so we know you're a person and not a computer
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
inline-flex
h-[60px]                     
px-[49px]                    
justify-center
items-center
gap-[10px]
flex-shrink-0
rounded-[60px]
bg-[#C09F53]                 
text-[#FFFBF3]             
border
border-[#FFFBF3]             
font-open-sans             
text-[16px]                 
font-bold                    
leading-normal
hover:bg-[#374A67]           
disabled:opacity-70         
transition-colors           
duration-200                 
mt-16
ml-[-76%]
"
                        >
                            {isSubmitting ? 'Submitting...' : 'Begin Here'}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );

    const renderMobileView = () => (
        <div className="w-full relative">
            <img src={img2} alt="Background" className="w-full absolute -z-10" />

            <div className="w-full p-2 bg-gradient-to-br from-[#023437] to-[rgba(2,52,55,0.53)] backdrop-blur-sm mt-0 pb-10">
                <div className="flex w-[1566.954px] h-[80px]  z-10 justify-end items-center gap-8 bg-[#C09F53] overflow-hidden relative mt-16">
                    <div className="w-full overflow-hidden py-2">
                        <div className="flex whitespace-nowrap animate-marquee">
                            {[...Array(40)].map((_, index) => (
                                <div key={index} className="flex items-center mt-16">
                                    <span className="w-[445px] h-[121px] flex-shrink-0 text-[#FFF] text-center font-['Playfair_Display'] text-[40px] font-[800] leading-none">
                                        Get a free case review
                                    </span>
                                    <img src={Marquee} alt="Banner" className="h-[50px] w-[100px] object-cover justify-between mt-[-14%] mr-10" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className='mb-10' >
                    <div className="space-y-6 pt-32 mb-10 p-5 mt-0">
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
                            sx={textFieldStyle}
                        />

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
                                            marginBottom: '80px', // adjust as needed
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
                            sx={textFieldStyle}
                        />

                        <div className="mt-8 space-y-6 text-white">
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="settlementHelp"
                                    name="settlementHelp"
                                    checked={formData.settlementHelp}
                                    onChange={handleChange}
                                    className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="settlementHelp" className="ml-3 block text-base">
                                    I would be needing help to file a settlement.
                                </label>
                            </div>

                            <div className="flex items-start mt-4">
                                <div className="flex-shrink-0 mt-1">
                                    <input
                                        type="checkbox"
                                        id="privacyConsent"
                                        name="privacyConsent"
                                        checked={formData.privacyConsent}
                                        onChange={handleChange}
                                        className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                                <label htmlFor="privacyConsent" className="ml-3 block text-white text-base text-left">
                                    <span className="block">
                                        I agree to the{' '}
                                        <a href="/PrivacyPolicy" className="underline hover:text-blue-200">
                                            privacy policy
                                        </a>{' '}
                                        and{' '}
                                        <a href="/Disclaimer" className="underline hover:text-blue-200">
                                            disclaimer
                                        </a>.
                                    </span>
                                    <span className="block mt-2">
                                        I agree to the privacy policy and disclaimer and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                                    </span>
                                </label>
                                {errors.privacyConsent && (
                                    <p className="mt-2 text-sm text-red-300">{errors.privacyConsent}</p>
                                )}
                            </div>

                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="humanVerification"
                                    name="humanVerification"
                                    checked={formData.humanVerification}
                                    onChange={handleChange}
                                    className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    required
                                />
                                <label htmlFor="humanVerification" className="ml-3 block text-base">
                                    Please verify you're human
                                </label>
                                {errors.humanVerification && (
                                    <p className="mt-2 text-sm text-red-300">{errors.humanVerification}</p>
                                )}
                            </div>
                        </div>
                    </div>



                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                            w-full
                            h-14                     
                            mt-8
                            justify-center
                            items-center
                            gap-2
                            rounded-[60px]
                            bg-[#C09F53]                 
                            text-[#FFFBF3]             
                            border
                            border-[#FFFBF3]             
                            text-base                 
                            font-bold                    
                            leading-normal
                            hover:bg-[#374A67]           
                            disabled:opacity-70         
                            transition-colors           
                            duration-200
                        "
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );

    return isMobile ? renderMobileView() : renderDesktopView();
}

export default ClassTwo;