import { $authHost, $host } from "./api";
import jwtDecode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("user/registration", {
    email,
    password,
    
  });

  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("user/login", { email, password });
  localStorage.setItem("token", data.token);
  
  return jwtDecode(data.token);
};

export const checkUser = async (email, password) => {
  const { data } = await $authHost.get("user/auth");
  const decode = jwtDecode(data.token);
  // console.log("decoded token from check userAPI", decode);

  return decode;
};
