import axios from "axios";

const BASE_URL = "http://localhost:3000";
export { BASE_URL };

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async function (config) {
    config.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    return config;
  },
  function (error) {
    //alert(JSON.stringify(error));
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error?.response?.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default api;
