import axios from 'axios';


/**
 * ===================================
 * AXIOS CONFIGURATION
 * ===================================
 */

const config = {
    baseURL: 'https://noblemen.herokuapp.com/api',
    // baseURL: 'http://localhost:8080/api',
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json; charset=utf-8'
    },
    timeout: 100000,
};

/**
 * ===================================
 * END OF AXIOS CONFIGURATION
 * ===================================
 */

export const axiosInstance = axios.create(config);
export const accessToken = sessionStorage.getItem('accessToken');

axiosInstance.interceptors.request.use(
    async (requestConfig) => {
        if (accessToken) requestConfig.headers.Authorization = `Bearer ${accessToken}`;
        else requestConfig.headers.Authorization = '';

        return requestConfig;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    async (requestConfig) => requestConfig,
    async function (error) {
        if (error.response.status === 403) {
            sessionStorage.clear();
            return error;
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;
