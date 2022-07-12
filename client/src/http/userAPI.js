import { $authHost, $host } from "./api";
import jwtDecode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("user/registration", {
    email,
    password,
    role: "ADMIN",
  });

  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("user/login", { email, password });
  // localStorage.setItem("token", data.token);
  //   console.log(data.token);
  return jwtDecode(data.token);
};

export const check = async (email, password, role) => {
  
    const { data } = await $authHost.get("user/auth");
    // localStorage.setItem("token", data.token);
    console.log(data)
    return jwtDecode(data.token);
  
};
