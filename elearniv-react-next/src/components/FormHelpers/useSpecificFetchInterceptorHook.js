import { useEffect } from 'react';
import axios from 'axios';

const useAxiosInterceptor = (setUploadResult, setUploadError) => {
  useEffect(() => {
    // Create an Axios instance
    const axiosInstance = axios.create();

    // Set up request interceptor
    axiosInstance.interceptors.request.use(config => {
      // Check if the request is to the specific endpoint
      if (config.url.startsWith('https://app.bmdrm.com')) {
        console.log('Starting Specific Request', config);
      }
      return config;
    });

    // Set up response interceptor
    axiosInstance.interceptors.response.use(
      response => {
        // Check if the response is related to the specific endpoint
        if (response.config.url.startsWith('https://app.bmdrm.com')) {
          console.log('Specific Response:', response.data);
          setUploadResult(response.data);
        }
        return response;
      },
      error => {
        // Check if the error is related to the specific endpoint
        if (error.response && error.response.config.url.startsWith('https://app.bmdrm.com/')) {
          console.error('Specific Error:', error.response.data);
          setUploadError(error.response.data);
        }
        return Promise.reject(error);
      }
    );

    // Override the global axios instance
    axios.defaults.adapter = axiosInstance.defaults.adapter;

    return () => {
      // Reset the adapter to the original one when the component is unmounted
      axios.defaults.adapter = undefined;
    };
  }, [setUploadResult, setUploadError]);
};

export default useAxiosInterceptor;

