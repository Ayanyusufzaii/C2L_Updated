// ContactUsEmail.js
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = 'DyDZ85E9uwzwSyUoD';
const SERVICE_ID = 'service_x4p0olc';
const ADMIN_TEMPLATE_ID = 'template_nkno2ao';
const USER_TEMPLATE_ID = 'template_k77901w';

// Init EmailJS
emailjs.init(PUBLIC_KEY);

// Helper to sanitize values
const sanitize = (value) => {
  if (typeof value === 'string') {
    return value.trim() === '' ? 'Not available' : value.trim();
  }
  if (value === undefined || value === null) {
    return 'Not available';
  }
  return value;
};

// Track initial landing URL
let initialLandingUrl = null;
const getSourceUrl = () => {
  if (typeof window === "undefined") return "Unknown";
  if (!initialLandingUrl) {
    initialLandingUrl = window.location.href;
  }
  return initialLandingUrl;
};

// Get public IP address
const getIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Failed to get IP address:", error);
    return "Not available";
  }
};

// Get formatted timestamp
const getTimestamp = () => {
  return new Date().toLocaleString();
};

/* ---------------- Admin Email ---------------- */
export const sendFormAdmin = async (formData) => {
  try {
    const ipAddress = await getIPAddress();
    const sourceUrl = getSourceUrl();
    const timestamp = getTimestamp();

    const templateParams = {
      // Main form fields
      from_name: sanitize(`${formData.Name || formData.name} ${formData.lastName || ''}`),
      user_email: sanitize(formData.emailId || formData.email),
      email: sanitize(formData.emailId || formData.email),
      phone_number: sanitize(formData.phoneNumber || formData.phone),
      concern: sanitize(formData.concern || formData.category),
      case_history: sanitize(formData.caseHistory),

      // TrustedForm fields
      xxTrustedFormCertUrl: sanitize(formData.xxTrustedFormCertUrl || formData.certId),
      xxTrustedFormPingUrl: sanitize(formData.xxTrustedFormPingUrl || formData.pingUrl),
      xxTrustedFormCertToken: sanitize(formData.xxTrustedFormCertToken || formData.tokenUrl),

      // Tracking and metadata
      pageUrl: sourceUrl,
      ipAddress: ipAddress,
      submission_time: timestamp,

      // Admin specific
      admin_notification: 'true',
      subject: `New Form Submission from ${sanitize(formData.Name || formData.name)}`
    };

    console.log('Sending admin email with params:', templateParams);

    const response = await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams);
    console.log('Admin email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Admin email error:', error);
    throw error;
  }
};

/* ---------------- User Email ---------------- */
export const sendFormUser = async (formData) => {
  try {
    const timestamp = getTimestamp();

    const templateParams = {
      // User specific fields
      to_email: sanitize(formData.emailId || formData.email),
      user_name: sanitize(formData.Name || formData.name),
      from_name: sanitize(`${formData.Name || formData.name} ${formData.lastName || ''}`),
      phone_number: sanitize(formData.phoneNumber || formData.phone),
      concern: sanitize(formData.concern || formData.category),
      case_history: sanitize(formData.caseHistory),

      // Tracking
      submission_time: timestamp,

      // User confirmation specific
      user_notification: 'true',
      subject: 'Thank you for your submission',
      reply_to: 'noreply@yourdomain.com'
    };

    console.log('Sending user confirmation email with params:', templateParams);

    const response = await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams);
    console.log('User email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('User email error:', error);
    throw error;
  }
};

/* ---------------- Send Both ---------------- */
export const sendBothEmails = async (formData) => {
  const results = {
    admin: { success: false, error: null },
    user: { success: false, error: null },
    overallSuccess: false
  };

  try {
    const [adminResult, userResult] = await Promise.allSettled([
      sendFormAdmin(formData),
      sendFormUser(formData)
    ]);

    if (adminResult.status === 'fulfilled') {
      results.admin.success = true;
    } else {
      results.admin.error = adminResult.reason;
    }

    if (userResult.status === 'fulfilled') {
      results.user.success = true;
    } else {
      results.user.error = userResult.reason;
    }

    results.overallSuccess = results.admin.success;
    return results;
  } catch (error) {
    console.error('Unexpected error in sendBothEmails:', error);
    throw error;
  }
};

/* ---------------- Test Connection ---------------- */
export const testEmailJSConnection = async () => {
  try {
    const response = await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, {
      from_name: 'Test User',
      user_email: 'test@example.com',
      phone_number: '0400000000',
      concern: 'Test',
      case_history: 'Testing EmailJS Connection'
    });
    console.log('EmailJS test successful:', response);
    return true;
  } catch (error) {
    console.error('EmailJS test failed:', error);
    return false;
  }
};
