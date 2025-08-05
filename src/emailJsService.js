// emailService.js

import emailjs from '@emailjs/browser';

const sanitize = (value) => {
  if (typeof value === 'string') {
    return value.trim() === '' ? 'N/A' : value;
  }
  if (value === undefined || value === null) {
    return 'N/A';
  }
  return value;
};

// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'service_brjo5qt';
const ADMIN_TEMPLATE_ID = 'template_ur9kzbh';
const USER_TEMPLATE_ID = 'your_user_template_id';
const PUBLIC_KEY = 'your_public_key_here';

emailjs.init(PUBLIC_KEY);
  
// SubService template IDs
const LAWYER_ADMIN_TEMPLATE_ID = 'template_0yxv4ra';
const LAWYER_TEMPLATE_ID = 'template_145waea';  


// Function to get the initial landing URL
let initialLandingUrl = null;

const getSourceUrl = () => {
  if (typeof window === "undefined") return "Unknown";

  // If we haven't stored the initial URL yet, store it
  if (!initialLandingUrl) {
    initialLandingUrl = window.location.href;
  }

  return initialLandingUrl;
};

// Function to get IP address
const getIPAddress = async () => {
  try {
    // First check if IP is available globally (from index.html)
    if (window.userIP) {
      return window.userIP;
    }
    
    // Fallback to fetching it
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Failed to get IP address:", error);
    return "IP address not available";
  }
};

// Function to format phone number for display
const formatPhoneDisplay = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

// Send Admin Email
export const sendAdminEmail = async (formData) => {
  const ipAddress = await getIPAddress();
  const submissionDate = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  const templateParams = {
    // Basic Information
    full_name: sanitize(formData.firstName),
    email: sanitize(formData.emailId),
    phone: formatPhoneDisplay(sanitize(formData.phoneNumber)),
    
    // Case Information
    concern: sanitize(formData.concern),
    case_history: sanitize(formData.caseHistory) || 'No case history provided',
    
    // Metadata
    submission_date: submissionDate,
    ip_address: ipAddress,
    page_source: getSourceUrl(),
    
    // TrustedForm Data
    trusted_form_cert_url: formData.xxTrustedFormCertUrl || 'Not available',
    trusted_form_ping_url: formData.xxTrustedFormPingUrl || 'Not available',
    trusted_form_token: formData.xxTrustedFormCertToken || 'Not available',
    
    // Consent Status
    privacy_consent: formData.privacyConsent ? 'Yes' : 'No',
    human_verified: formData.captchaEnabled ? 'Yes (CAPTCHA verified)' : 'No',
    
    // Admin specific
    admin_message: `New ${formData.concern} case inquiry from ${formData.firstName}`,
    priority: formData.concern === 'Mesothelioma Lawsuit' ? 'HIGH' : 'NORMAL',
    
    // For template styling
    primary_color: '#023437',
    accent_color: '#C09F53',
    bg_color: '#FFFBF3'
  };

  return emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams);
};

// Send User Email
export const sendUserEmail = async (formData) => {
  const ipAddress = await getIPAddress();
  const submissionDate = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  const templateParams = {
    // User Information
    user_name: formData.firstName,
    full_name: sanitize(formData.firstName),
    email: sanitize(formData.emailId),
    phone: formatPhoneDisplay(sanitize(formData.phoneNumber)),
    
    // Case Information
    concern: sanitize(formData.concern),
    case_history: sanitize(formData.caseHistory) || 'No case history provided',
    
    // Submission Details
    submission_date: submissionDate,
    case_number: `CASE-${Date.now().toString().slice(-8)}`,
    
    // Hidden tracking data (not shown in user email)
    ip_address: ipAddress,
    page_source: getSourceUrl(),
    trusted_form_cert_url: formData.xxTrustedFormCertUrl || 'Not available',
    trusted_form_ping_url: formData.xxTrustedFormPingUrl || 'Not available',
    trusted_form_token: formData.xxTrustedFormCertToken || 'Not available',
    
    // For template styling
    primary_color: '#023437',
    accent_color: '#C09F53',
    bg_color: '#FFFBF3',
    
    // Contact information for the email
    company_phone: '1-800-LAW-HELP', // Replace with your actual phone
    company_email: 'support@lawfirm.com', // Replace with your actual email
    company_website: 'www.lawfirm.com' // Replace with your actual website
  };

  return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams);
};

// Export a function to test email configuration
export const testEmailConfiguration = async () => {
  try {
    const testData = {
      firstName: 'Test User',
      emailId: 'test@example.com',
      phoneNumber: '5551234567',
      concern: 'Test Concern',
      caseHistory: 'This is a test submission',
      privacyConsent: true,
      captchaEnabled: true,
      xxTrustedFormCertUrl: 'test-cert-url',
      xxTrustedFormPingUrl: 'test-ping-url',
      xxTrustedFormCertToken: 'test-token'
    };
    
    console.log('Testing email configuration...');
    await sendAdminEmail(testData);
    console.log('Admin email test successful');
    await sendUserEmail(testData);
    console.log('User email test successful');
    return true;
  } catch (error) {
    console.error('Email test failed:', error);
    return false;
  }
};



// export const LawyerSendAdminEmail = async (formData) => {
//   const ipAddress = await getIPAddress();
 
//   const templateParams = {
//     // Handle both desktop and mobile form field names
//     firstName: formData.firstName || formData.fist_name || '',
//     lastName: formData.lastName || '',
//     full_name: `${formData.firstName || formData.fist_name || ''} ${formData.lastName || ''}`.trim(),
//     email: formData.email,
//     phone: formData.phone,
// alternateNumber: sanitize(formData.alternateNumber),
//     streetAddress: formData.streetAddress,
//     city: formData.city,
//     state: formData.state,
//     zipCode: formData.zipCode,
//     fullAddress: `${formData.streetAddress || ''}, ${formData.city || ''}, ${formData.state || ''} ${formData.zipCode || ''}`.replace(/^,\s*/, '').trim(),
//     message: `New SubService case review request from ${formData.firstName || formData.fist_name || ''} ${formData.lastName || ''}`,
//     submissionDate: new Date().toLocaleString(),
//     ip_address: ipAddress,
//     page_source: getSourceUrl(),
   
//     // TrustedForm data
//     trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
//     trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
//     trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',
   
//     // Additional fields for better tracking
//     form_type: 'SubService Case Review',
//     captcha_verified: 'Yes',
//     terms_accepted: formData.termsAccepted ? 'Yes' : 'No',
//   };
 
//   return emailjs.send(SERVICE_ID, LAWYER_ADMIN_TEMPLATE_ID, templateParams);
// };
 
export const LawyerSendUserEmail = async (formData) => {
  const ipAddress = await getIPAddress();
 
  const templateParams = {
    // Handle both desktop and mobile form field names
    firstName: formData.firstName || formData.firstName || '',
    lastName: formData.lastName || '',
    full_name: `${formData.firstName || formData.firstName || ''} ${formData.lastName || ''}`.trim(),
    email: formData.email,
alternateNumber: sanitize(formData.alternateNumber),

    phone: formData.phone,
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress || ''}, ${formData.city || ''}, ${formData.state || ''} ${formData.zipCode || ''}`.replace(/^,\s*/, '').trim(),
    date: new Date().toLocaleDateString(),
    submissionDate: new Date().toLocaleString(),
    ip_address: ipAddress,
    page_source: getSourceUrl(),
   
    // TrustedForm data
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',
   
    // Additional fields for personalization
    form_type: 'SubService Case Review',
  };
 
  return emailjs.send(SERVICE_ID, LAWYER_TEMPLATE_ID, templateParams);
};

export const LawyerSendAdminEmail = async (formData) => {
  const ipAddress = await getIPAddress();
  const submissionDate = new Date().toLocaleString();

  const templateParams = {
    // Contact Info
    full_name: `${sanitize(formData.firstName || formData.fist_name)} ${sanitize(formData.lastName)}`,
    email: sanitize(formData.email),
    phone: sanitize(formData.phone),

    // Case Info
    concern: sanitize(formData.concern), // "Mesothelioma Lawsuit" etc.
    case_history: sanitize(formData.caseHistory),

    // Tracking & Verification
    submission_date: submissionDate,
    ip_address: ipAddress,
    page_source: getSourceUrl(),
    privacy_consent: formData.privacyConsent ? 'Yes' : 'No',
    human_verified: formData.captchaEnabled ? 'Yes (CAPTCHA verified)' : 'No',

    // TrustedForm Section
    trusted_form_cert_url: formData.xxTrustedFormCertUrl || 'Not available',
    trusted_form_ping_url: formData.xxTrustedFormPingUrl || 'Not available',
    trusted_form_token: formData.xxTrustedFormCertToken || 'Not available',
  };

  return emailjs.send(SERVICE_ID, LAWYER_ADMIN_TEMPLATE_ID, templateParams);
};
