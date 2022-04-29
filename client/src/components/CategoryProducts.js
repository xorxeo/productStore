import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../index";

export const CategoryProducts = observer(() => {
  const { product } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container flex h-screen min-w-full pt-16 pb-4 mx-0 bg-slate-200">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full h-full p-4 justify-center items-center">
        {product.productItem
          .filter(
            (productItem) =>
              productItem.category === product.selectedCategory.category
          )
          .map((product) => (
            <div
              key={product.id}
              className=" card-wrapper group grid relative grid-col-2 w-full h-full rounded-t-lg bg-slate-50 "
            >
              
              <div className="card-image grid relative justify-center items-center z-0 bg-white rounded-t-lg ">
                <img
                  key={product.product_name}
                  src={product.img}
                  className="w-28 h-48 bg-none"
                ></img>
              </div>
              <div className="info grid relative pb-2 pl-2 pr-2 justify-center items-center shadow-md bg-slate-200 rounded-t-lg">
                <div className="title pl-2 font-bold">
                  {product.product_name}
                </div>
                <div className="description pl-2 font-light">
                  {product.description}
                </div>
                
                <div>
                <div className="price pl-2 font-semibold">
                  {product.price} ₽
                </div>

                  
                </div>

                <div
                className="buy-button    absolute bg-slate-400  right-1 bottom-1 transition ease-in-out duration-1000 group-hover:block  group-hover:animate-wiggle z-10   "
                onClick={() => (
                  console.log(">>>>>>>>", product.product_name)
                
                  )}
              >
                <img className="grid w-8 h-8" src="../img/basket.webp"></img>
              </div>

              <div className="buy-buttons   z-10">
                - 1 +
              </div>


              </div>
            </div>
          ))}
      </div>
    </div>
  );
});
