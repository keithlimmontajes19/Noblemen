import axios from 'axios';


/**
 * ===================================
 * AXIOS CONFIGURATION
 * ===================================
 */

const config = {
    baseURL: 'http://localhost:3001/api',
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
    async (requestConfig) => {
        requestConfig.headers = {
            Authorization: `Bearer ${accessToken}`,
        };

        return requestConfig;
    },

    async function (error) {
        return Promise.reject(error);
    },
);

export default axiosInstance;
