import api from 'api/index';
import { AUTHENTICATION, USER } from 'api/contants';

const auth_services = {
    postLogin: (params) => api.post(`${AUTHENTICATION}/login`, params),
    postSignup: (params) => api.post(`${AUTHENTICATION}/signup`, params),
    postForgotPassword: (params) => api.post(`${AUTHENTICATION}/forgot`, params),
    postChangepassowrd: (params) => api.post(`${AUTHENTICATION}/changePassword`, params),
    tokenChecker: () => api.get(`${USER}/token`)
}

export default auth_services;