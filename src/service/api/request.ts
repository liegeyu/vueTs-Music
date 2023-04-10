import axios, { InternalAxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { BASE_URL, TIMEOUT } from './config'

const axiosIns: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 请求拦截
axiosIns.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);
// 响应拦截
axiosIns.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: any) => {
    const { response } = err;
    let msg: string = '';
    const statusCode = response?.status;
    switch (statusCode) {
      case 401:
        msg: "token 失效";
        console.log(msg);
        break;
      case 403:
        msg: "拒绝访问";
        console.log(msg);
        break;
      case 404:
        msg: "资源未找到";
        console.log(msg);
        break;
      case 500:
        msg: "服务端未知错误";
        console.log(msg);
        break;
      default:
        msg: "未知错误"
    }
    return Promise.reject(err);
  }
);

// request
export function request(config: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    axiosIns.request(config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

export function get(config: AxiosRequestConfig, method = 'get') {
  return request({ ...config, method })
}

export function post(config: AxiosRequestConfig, method = 'post') {
  return request({ ...config, method })
}
