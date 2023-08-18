import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the request interceptor when creating the axiosInstance
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const setAuthToken = (token: string) => {
  if (token) {
    // Save the token to secure storage (e.g., local storage)
    localStorage.setItem("authToken", token);
  } else {
    // Remove the token from secure storage
    localStorage.removeItem("authToken");
  }
};

export { axiosInstance, setAuthToken };
