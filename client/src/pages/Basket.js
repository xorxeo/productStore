import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { BasketItem } from "../components/BasketItem";

export const Basket = observer(() => {
  const { basket } = useContext(Context);
  const { product } = useContext(Context);
  console.log(basket.goods)

  return (
    <div className="basket-container">{basket.goods && <BasketItem />}</div>
  );
});
