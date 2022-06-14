import React, { useContext } from "react";
import { Context } from "..";

export const ProductItem = () => {
  const { product } = useContext(Context);
  // console.log(product);
  return (
    <div className="pt-20">
      <div className="pt-20">
        <p>Selected Product Price</p>
        {product.selectedProductItem.price}
      </div>
    </div>
  );
};
