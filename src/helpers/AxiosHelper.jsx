import axios from 'axios';

const AxiosHelper = (token = '', contentType = 'application/json') => {
    //192.168.2.104     : Home

    const axiosInstance = axios.create({
        baseURL: 'http://172.16.125.108:3000'
    });
    // cmd -----> ipconfig -----> IPv4 Address (192.168.1.1)
    axiosInstance.interceptors.request.use(
        async (config) => {
            // const token = '';
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosHelper;



