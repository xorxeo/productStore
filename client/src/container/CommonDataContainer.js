import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { Context } from "../index";
import { fetchCategory, fetchProductItemById } from "../http/categoryAPI";
import { checkUser } from "../http/userAPI";

export const CommonDataContainer = observer((props) => {
  const { product, user, basket } = useContext(Context);

  useEffect(() => {
    fetchCategory().then((data) => product.setCategoryProducts(data));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      user.setUserParameters(user, checkUser);
    }
  }, [user.user.id]);

  useEffect(() => {
    if (Object.keys(basket.goods).length != 0 && user.isAuth) {
      basket.setSessionCartToLocalStorage(basket.goods);
    }
  }, [Object.entries(basket.goods)]);

  useEffect(() => {
    if (localStorage.getItem("sessionCart")) {
      basket.setGoodsFromLocalStorage(localStorage.getItem("sessionCart"));
      //  console.log("basket.goods from useEffect COMMOMDATA", basket.goods);
      if (Object.keys(basket.goods).length > 0) {
        for (let key of Object.keys(basket.goods)) {
          fetchProductItemById(key).then((data) => {
            product.setProductItemsFromStorage(key, data);
          });
        }
      }
    }
  }, [localStorage]);

  if (product.categoryProducts.length === 0) {
    return null;
  }
  return <>{props.children}</>;
});
