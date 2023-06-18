import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const createAxiosInstance = (
  useAuthorizationHeader: boolean
): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL: "http://localhost:10000/",
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

  return instance;
};

export const axiosWithoutAuth = createAxiosInstance(false);
export const axiosWithAuth = createAxiosInstance(true);
