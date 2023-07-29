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
            console.log("Refresh token not found");
            return;
          } else {
            const response = await axios.post(
              "http://localhost:10000/auth/refresh/",
              { refresh: refreshToken }
            );
            console.log("TUTTT", response.data);

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
