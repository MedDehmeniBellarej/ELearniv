import axios from 'axios';

let axiosConfigured = false;

export const setupAxiosInterceptors = (setUploadResult, setUploadError) => {
  if (axiosConfigured) return;

  axiosConfigured = true;

  // Set up request interceptor
  axios.interceptors.request.use(config => {
    // Check if the request is to the specific endpoint
    if (config.url.startsWith('https://app.bmdrm.com/api/public/fileupload/Init')) {
      console.log('Starting Specific Request', config);
    }
    return config;
  });

  // Set up response interceptor
  axios.interceptors.response.use(
    response => {
      // Check if the response is related to the specific endpoint
      if (response.config.url.startsWith('https://app.bmdrm.com/api/public/fileupload/Init')) {
        console.log('Specific Response:', response.data);
        setUploadResult(response.data);
      }
      return response;
    },
    error => {
      // Check if the error is related to the specific endpoint
      if (error.response && error.response.config.url.startsWith('https://app.bmdrm.com/api/public/fileupload/Init')) {
        console.error('Specific Error:', error.response.data);
        setUploadError(error.response.data);
      }
      return Promise.reject(error);
    }
  );
};
