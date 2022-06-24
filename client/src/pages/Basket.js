import React, { useContext } from "react";
import { Context } from "../index";


export const Basket = () => {
  const { basket } = useContext(Context);

  console.log(basket.goods);



  return (
    <div className="flex pt-16 justify-center">
      <h1>Basket</h1>
      {/* <BasketList /> */}
    </div>
  );
};
