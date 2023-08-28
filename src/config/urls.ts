export const API_BASE_URL = 'http://65.0.202.93:8001/'

export const getApiUrl = (endpoint = '') => API_BASE_URL + endpoint;

export const ONBOARDING = getApiUrl('User/list_tutorials');
export const SOCIAL_LOGIN = getApiUrl('User/list_tutorials');

export const LOGIN = getApiUrl("v1/customer/app/login");
export const OTP_VERIFICATION = getApiUrl("v1/customer/app/otp_verification");
export const RESEND_OTP = getApiUrl("v1/customer/app/resend_otp");

