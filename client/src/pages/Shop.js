import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { CategoryCards } from "../components/CategoryCards";
import { fetchCategory } from "../http/categoryAPI";

export const Shop = observer(() => {
  const { product } = useContext(Context);
  // console.log(product.categoryProduct);
  useEffect(() => {
    fetchCategory().then((data) => product.setCategoryProduct(data));
    
  }, []);

  return (
    <div className="container-store flex h-screen min-w-full pt-16 pb-4 mx-0 bg-slate-200">
      {product && <CategoryCards product={product} />}
    </div>
  );
});
