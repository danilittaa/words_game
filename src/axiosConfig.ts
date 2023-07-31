import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { API_URL } from "./constants";

const createAxiosInstance = (
  useAuthorizationHeader: boolean
): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL: API_URL,
    headers: { "ngrok-skip-browser-warning": "true" },
  };

  const instance = axios.create(config);

  instance.interceptors.request.use((requestConfig) => {
    if (useAuthorizationHeader) {
      const token = window.localStorage.getItem("accessToken");
      if (token) {
        requestConfig.headers.Authorization = `Bearer ${token}`;
      }
    }
    return requestConfig;
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (
        error.response &&
        error.response.status === 401 &&
        useAuthorizationHeader
      ) {
        try {
          const refreshToken = localStorage.getItem("refreshToken");
          if (!refreshToken) {
            return;
          } else {
            const response = await axios.post(`${API_URL}auth/refresh/`, {
              refresh: refreshToken,
            });
            localStorage.setItem("accessToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);

            const originalRequest = error.config;
            originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
            return instance(originalRequest);
          }
        } catch (error) {
          console.log(error);
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosWithoutAuth = createAxiosInstance(false);
export const axiosWithAuth = createAxiosInstance(true);
