import { $authHost, $host } from "./api";
import jwtDecode from "jwt-decode";

export const createCategory = async (categoryData) => {
  const { data } = await $authHost.post("", categoryData);

  return data;
};

export const fetchCategory = async () => {
  const { data } = await $host.get("");

  return data;
};

export const createProductItem = async (productItemData) => {
  const { data } = await $authHost.post("createProductItem", productItemData);

  return data;
};

export const fetchProductItemsByCategory = async (categoryName) => {
  const { data } = await $host.get(`/categories/${categoryName}`);

  return data;
};
