import { ResponeMeta } from '@store/shared';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import isArray from 'lodash/isArray';

const ConnectionInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
});

ConnectionInstance.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
      console.info('API Request:', requestConfig);
    }
    return requestConfig;
  },
  function (error) {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
      console.error('API Request Error:', error);
    }
    return Promise.reject(error);
  },
);

ConnectionInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
      console.info('API Response:', response);
    }

    //TODO: Fell free to remove this
    if (isArray(response.data) && response.headers['x-total-count']) {
      (response as AxiosResponse & { meta: ResponeMeta }).meta = {
        total: Number(response.headers['x-total-count']),
        page: response.config.params['_page'] || 1,
        take: response.config.params['_limit'],
        pageCount:
          response.config.params['_limit'] &&
          Math.ceil(Number(response.headers['x-total-count']) / response.config.params['_limit']),
      };
    }

    return response;
  },
  (error) => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
      console.error('API Response Error:', error);
    }
    const errorMessage = error?.response?.data?.message;
    if (errorMessage) {
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  },
);

export default ConnectionInstance;
