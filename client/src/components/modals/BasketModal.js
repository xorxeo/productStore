import { observer } from "mobx-react-lite";
import React from "react";
import { useState, useContext } from "react";
import { createCategory } from "../../http/categoryAPI";
import { BasketItem } from "../BasketItem";
import { Context } from "../../index";

export const BasketModal = ({ show, close }) => {
  const { basket } = useContext(Context);
  const { product } = useContext(Context);

  return (
    <div
      show={show}
      close={close}
      className="modal-background flex absolute flex-col items-center right-10 top-10 p-10 bg-slate-300 rounded-md"
    >
      <div className="flex flex-col w-fit ">
        <p className="text-lg font-medium">
          Hello, {basket.$userStore.emailFromLogin}!
        </p>
      </div>
      <div>{basket.goods && <BasketItem />}</div>
    </div>
  );
};
