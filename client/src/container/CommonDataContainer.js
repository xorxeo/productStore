import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../index";
import { fetchCategory } from "../http/categoryAPI";
import { check } from "../http/userAPI";

export const CommonDataContainer = observer((props) => {
  const { product, user } = useContext(Context);
  useEffect(() => {
    fetchCategory().then((data) => product.setCategoryProduct(data));

    // check()

    // console.log(user.check);
    // console.log(user.emailFromLogin);

  }, []);

  if (product.categoryProduct.length === 0) {
    return null;
  }

  return <>{props.children}</>;
});
