import api from 'api/index';
import { HOME } from 'api/contants';

const onboarding_service = {
    postOnboardingYou: (params) => api.post(`${HOME}/onboarding-website`, params),
    postCreativeProvider: (params) => api.post(`${HOME}/onboarding-creative`, params),
};

export default onboarding_service;
