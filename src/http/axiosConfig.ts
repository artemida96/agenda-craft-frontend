import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

const setAuthToken = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // Save the token to secure storage (e.g., local storage)
    localStorage.setItem("authToken", token);
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
    // Remove the token from secure storage
    localStorage.removeItem("authToken");
  }
};

export { axiosInstance, setAuthToken };
