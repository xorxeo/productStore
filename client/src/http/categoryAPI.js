import { $authHost, $host } from "./api";
import jwtDecode from "jwt-decode";

export const createCategory = async (categoryData) => {
  const { data } = await $authHost.post("", categoryData );

  return data;
};

export const fetchCategory = async () => {
  const { data } = await $host.get("");

  return data;
};

export const createProductItem = async () => {
  const { data } = await $authHost.post("");

  return data;
};

export const fetchProductItem = async () => {
  const { data } = await $host.get("productItem/all");

  return data;
};
