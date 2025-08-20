import emailjs from "@emailjs/browser";

const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "DyDZ85E9uwzwSyUoD";
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_x4p0olc";
const ADMIN_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID || "template_nkno2ao";
const USER_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID || "template_k77901w"; 

try {
  if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
} catch (err) {
  console.warn("EmailJS init error:", err);
}

// Helper to sanitize values
const sanitize = (value) => {
  if (value === undefined || value === null) return "Not available";
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed === "" ? "Not available" : trimmed;
  }
  return String(value);
};

let initialLandingUrl = null;
export const setInitialLandingUrl = (url) => {
  initialLandingUrl = url;
};
const getInitialLandingUrl = () => {
  if (typeof window === "undefined") return "Not available";
  if (!initialLandingUrl) initialLandingUrl = window.location.href;
  return initialLandingUrl;
};

const getIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) return "Not available";
    const data = await response.json();
    return data.ip || "Not available";
  } catch (error) {
    console.warn("Failed to get IP address:", error);
    return "Not available";
  }
};

const getTimestamp = () => {
  return new Date().toLocaleString();
};

/* ---------------- Build params ---------------- */
export const buildCommonParams = async (formData = {}) => {
  const ipAddress = await getIPAddress();
  const pageUrl = typeof window === "undefined" ? "Not available" : window.location.href;
  const initialUrl = getInitialLandingUrl();
  const submission_time = getTimestamp();

  return {
    from_name: sanitize(formData.name || formData.Name || formData.from_name),
    last_name: sanitize(formData.lastName || formData.last_name),
    user_email: sanitize(formData.email || formData.emailId || formData.user_email),
    phone_number: sanitize(formData.phone || formData.phoneNumber || formData.phone_number),
    concern: sanitize(formData.category || formData.concern),
    case_history: sanitize(formData.caseHistory || formData.case_history || ""),
    xxTrustedFormCertUrl: sanitize(formData.certId || formData.xxTrustedFormCertUrl),
    xxTrustedFormPingUrl: sanitize(formData.pingUrl || formData.xxTrustedFormPingUrl),
    xxTrustedFormCertToken: sanitize(formData.tokenUrl || formData.xxTrustedFormCertToken),
    pageUrl,
    initialLandingUrl: initialUrl,
    ipAddress,
    submission_time,
  };
};

/* ---------------- Admin Email ---------------- */
export const sendFormAdmin = async (formData = {}) => {
  try {
    const params = await buildCommonParams(formData);
    params.admin_notification = "true";
    params.subject = `New Form Submission — ${params.from_name}`;
    params.to_email = params.user_email;

    const response = await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, params);
    return { success: true, status: response.status, text: response.text, response };
  } catch (error) {
    return { success: false, error };
  }
};

/* ---------------- User Email ---------------- */
export const sendFormUser = async (formData = {}) => {
  try {
    const params = await buildCommonParams(formData);
    params.to_email = params.user_email;
    params.user_name = params.from_name;
    params.user_notification = "true";
    params.subject = "We received your submission";
    params.reply_to = "noreply@yourdomain.com";

    const response = await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, params);
    return { success: true, status: response.status, text: response.text, response };
  } catch (error) {
    return { success: false, error };
  }
};

/* ---------------- Send Both ---------------- */
export const sendBothEmails = async (formData = {}) => {
  try {
    const [adminResult, userResult] = await Promise.allSettled([
      sendFormAdmin(formData),
      sendFormUser(formData),
    ]);

    const results = {
      admin: adminResult.status === "fulfilled" ? adminResult.value : { success: false, error: adminResult.reason },
      user: userResult.status === "fulfilled" ? userResult.value : { success: false, error: userResult.reason },
      overallSuccess: false,
    };

    // treat admin delivery as necessary for overall success
    results.overallSuccess = !!(results.admin && results.admin.success);
    return results;
  } catch (error) {
    console.error("Unexpected error in sendBothEmails:", error);
    throw error;
  }
};

/* ---------------- Test Connection ---------------- */
export const testEmailJSConnection = async () => {
  try {
    const sample = {
      name: "Test User",
      email: "test@example.com",
      phone: "0400000000",
      category: "Test",
      caseHistory: "Testing EmailJS Connection",
    };
    const res = await sendFormAdmin(sample);
    return res.success === true;
  } catch (err) {
    console.warn("EmailJS test failed:", err);
    return false;
  }
};
