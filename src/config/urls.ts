export const API_BASE_URL = 'http://65.0.202.93:8001/';

export const getApiUrl = (endpoint = '') => API_BASE_URL + endpoint;

export const ONBOARDING = getApiUrl('User/list_tutorials');
export const SOCIAL_LOGIN = getApiUrl('v1/customer/app/social_login');

export const LOGIN = getApiUrl('v1/customer/app/login');
export const OTP_VERIFICATION = getApiUrl('v1/customer/app/otp_verification');
export const RESEND_OTP = getApiUrl('v1/customer/app/resend_otp');
export const ACCESS_TOKEN_LOGIN = getApiUrl(
  'v1/customer/app/access_token_login',
);
export const ADD_CUSTOMER_NEW_RIDE = getApiUrl(
  'v1/customer/app/add_customer_new_ride',
);
export const LIST_TEAMS_NEAR = getApiUrl('v1/customer/app/list_teams_near');
export const JOB_DETAIL = getApiUrl('v1/customer/app/customer_job_details');
export const UPDATE_DEVICE_TOKEN = getApiUrl(
  'v1/customer/app/update_device_token',
);
export const file_upload = getApiUrl('v1/file_upload');
export const update_profile = getApiUrl('v1/customer/app/update_profile');
