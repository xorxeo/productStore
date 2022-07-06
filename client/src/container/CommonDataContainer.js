import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../index";
import { fetchCategory } from "../http/categoryAPI";

export const CommonDataContainer = observer((props) => {
  const { product } = useContext(Context);
  useEffect(() => {
    fetchCategory().then((data) => product.setCategoryProduct(data));
  }, []);

  

  if (product.categoryProduct.length === 0) {
    return null;
  }

  return <>{props.children}</>;
});
