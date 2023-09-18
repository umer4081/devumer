export const API_BASE_URL = '';

export const getApiUrl = (endpoint = '') => API_BASE_URL + endpoint;

export const ONBOARDING = getApiUrl('User/list_tutorials');
export const SOCIAL_LOGIN = getApiUrl('User/list_tutorials');
export const HOME = getApiUrl('User/list_tutorials');
