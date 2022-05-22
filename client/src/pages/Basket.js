import React from "react";
import { BasketList } from "../components/BasketList";

export const Basket = () => {
  const basket = [];

  return (
    <div>
      <h1>Basket</h1>
      <BasketList />
    </div>
  );
};
