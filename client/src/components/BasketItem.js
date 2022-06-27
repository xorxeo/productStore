import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../index";
import { Counter } from "./Counter";

export const BasketItem = observer(() => {
  // const {products, basket} = props;
  const { basket } = useContext(Context);
  const { product } = useContext(Context);

  useEffect(() => {}, [basket]);

  const basketItems = () => {
    const result = [];
    product.productItem.filter(function (item) {
      if (item.id in basket.goods) {
        result.push(item);
      }
    });
    return result;
  };

  const filteredBasketProductItem = basketItems(product, basket);
  console.log(filteredBasketProductItem);
  return (
    <div className="flex pt-16 justify-center">
      <table className="table-fixed">
        {/* <h1>Basket</h1> */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredBasketProductItem.map((product) => (
            <tr key={product.price * basket.goods[product.id]}>
              <td key={product.productName}>{product.productName}</td>
              <td key={basket.goods[product.id]}>{basket.goods[product.id]}</td>
              <td key={product.price}>{product.price}</td>
              <td key={product.createdAt}>
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
