import { createBrowserHistory } from "history";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { CATEGORY_ROUTE } from "../utils/consts";

export const CategoryCards = observer(({ product }) => {
  // const { product } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(product);

  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-4 w-full h-full p-4 items-center">
      {product.categoryProducts.map((categoryProductsItem) => (
        <div
          className="flex flex-col w-full h-full justify-center items-center rounded-xl bg-slate-300"
          key={categoryProductsItem.id}
          onClick={() => {
            navigate(`${CATEGORY_ROUTE}/${categoryProductsItem.category}`);
          }}
        >
          <img
            className="w-24 h-24"
            alt={categoryProductsItem.category}
            src={`${process.env.REACT_APP_API_URL}${categoryProductsItem.img}`}
          ></img>
          {categoryProductsItem.category}
        </div>
      ))}
    </div>
  );
});
