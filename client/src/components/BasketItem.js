import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../index";
import { Counter } from "./Counter";

export const BasketItem = observer(() => {
  const { basket } = useContext(Context);
  const { product } = useContext(Context);

  const filteredBasketProductItem = product.getProductByIds(Object.keys(basket.goods))
 
  return (
    <div className="basket-modal flex pt-14 justify-center cursor-default">
      <table className="table  ">
        <thead className="text-center">
          <tr className="">
            <th className="font-normal">Product</th>
            <th className="font-normal">Price</th>
            <th className="font-normal">Quantity</th>
            <th className="font-normal">Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredBasketProductItem.map((product) => (
            <tr key={product.price * basket.goods[product.id]} className="">
              <td key={product.productName} className="font-medium text-center">{product.productName}</td>
              <td key={product.price} className="font-medium text-center">{product.price}</td>
              <td key={basket.goods[product.id]} className="font-medium text-center">{basket.goods[product.id]}</td>
              <td key={product.createdAt} className="font-medium text-center">
                {product.price * basket.goods[product.id]}
              </td>
              <td>
                {/* <button key={product.img}>DELETE</button> */}
                {<Counter props={product} />}
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
});
