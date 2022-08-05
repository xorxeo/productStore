import { observer } from "mobx-react-lite";
import React from "react";
import { useState, useContext } from "react";
import { createCategory } from "../../http/categoryAPI";
import { BasketItem } from "../BasketItem";
import { Context } from "../../index";
import { CurrentTime } from "../currentTime/CurrentTime";

export const BasketModal = observer(() => {
  const { user } = useContext(Context);

  return (
    <div className="modal-background flex flex-col  lg:p-10  bg-slate-100 rounded-md z-10">
      <div className="flex flex-row justify-between w-full ">
        <div className="user flex text-lg font-medium">Hello, {user.emailFromLogin}!</div>
        <div className="clock flex"><CurrentTime /></div>
      </div>
      <div>{<BasketItem />}</div>
    </div>
  );
});
