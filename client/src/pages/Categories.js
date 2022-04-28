import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../index";


export const Categories = observer(() => {
  const { product } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container flex h-screen min-w-full pt-16 pb-4 mx-0 bg-slate-200">
      <div className="grid grid-cols-5 grid-rows-4 gap-4 w-full h-full p-4 items-center">
        {product.productItem
          .filter(
            (productItem) =>
              productItem.category == product.selectedCategory.category
          )
          .map((product) => (
            <div
              key={product.id}
              className="flex flex-col w-full h-full justify-center items-center rounded-xl bg-slate-300"
            >
              {product.product_name}
            </div>
          ))}
      </div>
    </div>
  );
});
