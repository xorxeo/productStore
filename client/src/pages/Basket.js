import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { BasketItem } from "../components/BasketItem";

export const Basket = observer(() => {
  const { basket } = useContext(Context);
  const { product } = useContext(Context);

  const basketItems = (product, basket) => {
    const res = [];
    product.productItem.filter(function (item) {
      if (item.id in basket.goods) {
        res.push(item);
      }
    });
    return res;
  };

  const qq = basketItems(product, basket);

  return (
    <div>
      {basket && <BasketItem a={qq} b={basket}/>}
    </div>
   
  );
});
