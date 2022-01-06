import api from 'api/index';
import { AUTHENTICATION } from 'api/contants';

const auth_services = {
    postLogin: (params) => api.post(`${AUTHENTICATION}/login`, params),
    postSignup: (params) => api.post(`${AUTHENTICATION}/signup`, params)
}

export default auth_services;