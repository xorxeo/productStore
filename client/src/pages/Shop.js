import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { CategoryCards } from "../components/CategoryCards";


export const Shop = observer(() => {
  const { product } = useContext(Context);
  const { user } = useContext(Context);

  return (

      <div
        className="container-store flex h-screen min-w-full pt-16 pb-4 mx-0 bg-slate-200"
        div="container"
      >
        {product && <CategoryCards product={product} />}
      </div>

  );
});
