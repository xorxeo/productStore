import axios from "axios";

const $host = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}api/`,
});

const $authHost = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}api/`,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  // console.log("authInterceptor >>>>>>>", config.headers.authorization);
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
