import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../index";
import { Counter } from "./Counter";

export const BasketItem = observer(() => {
  const { basket, user, product } = useContext(Context);

  useEffect(() => {
    basket.setProductItemsForCartFromGoods();
  }, [Object.values(basket.goods).length]);

  return (
    <div className="basket-modal flex md:w-[600px] sm:w-[400px] pt-16 pl-4 pr-4  cursor-default">
      {basket.goods && basket.goodsForCart.length > 0 ? (
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
            {basket.goodsForCart.map((product) => (
              <tr key={product.price * basket.goods[product.id]} className="">
                <td
                  key={product.productName}
                  className="font-medium text-center"
                >
                  {product.productName}
                </td>
                <td key={product.price} className="font-medium text-center">
                  {product.price}
                </td>
                <td
                  key={basket.goods[product.id]}
                  className="font-medium text-center"
                >
                  {basket.goods[product.id]}
                </td>
                <td key={product.createdAt} className="font-medium text-center">
                  {product.price * basket.goods[product.id]}
                </td>
                <td>{<Counter props={product} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Basket is empty</div>
      )}
    </div>
  );
});
