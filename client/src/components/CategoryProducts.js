import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { PRODUCT_ROUTE } from "../utils/consts";
import { fetchProductItem } from "../http/categoryAPI";


export const CategoryProducts = observer(() => {
  const { product } = useContext(Context);
  const { basket } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(product.productItem);
 

  
  useEffect(() => {
    fetchProductItem().then((data) => {
      product.setProductItem(data);
      //  console.log(data)
      // console.log(product.productItem);
      // console.log(product.selectedCategory);
    });
  }, [product]);

  return (
    <div className="container flex h-screen min-w-full pt-16 pb-4 mx-0 bg-slate-200">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full h-full p-4 justify-center items-center">
        {product.productItem
          .filter(
            (productItem) =>
              productItem.category == product.selectedCategory.category
          )
          .map((filteredProductItem) => (
            <div
              key={filteredProductItem.id}
              className=" card-wrapper group grid relative grid-col-2 w-fit h-w-fit rounded-t-lg bg-slate-50 "
              onClick={(e) => {
                navigate(PRODUCT_ROUTE + "/" + filteredProductItem.productName);
                product.setSelectedProductItem(filteredProductItem);
                // console.log(product.selectedProductItem);
              }}
            >
              <div className="card-image grid relative justify-center items-center z-0 bg-white rounded-t-lg ">
                <img
                  key={filteredProductItem.productName}
                  src={process.env.REACT_APP_API_URL + filteredProductItem.img}
                  className="w-28 h-48 bg-none"
                ></img>
              </div>
              <div className="info grid relative pb-2 pl-2 pr-2 justify-center items-center shadow-md bg-slate-200 rounded-t-lg">
                <div className="title pl-2 font-bold">
                  {filteredProductItem.productName}
                </div>
                <div className="description pl-2 font-light">
                  {filteredProductItem.description}
                </div>

                <div>
                  <div className="price pl-2 font-semibold">
                    {filteredProductItem.price} ₽
                  </div>
                </div>

                <div
                  className="increment-decrement-wrap flex flex-row  justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <div className="flex w-10  mr-2 bg-orange-200">
                    <button
                      className="flex w-full h-full place-content-center pt-1 font-bold text-lg cursor-default"
                      onClick={() => {
                          basket.deleteItem(filteredProductItem.id);
                          console.log(basket.goods);

                        // basket.goods.delete(filteredProductItem.productName);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="flex-grow  p-2 mr-2  bg-orange-200">
                    <span className="flex justify-center cursor-default">
                      {filteredProductItem.price * basket.goods[filteredProductItem.id]}
                    </span>
                  </div>
                  <div className="flex w-10  mr-2 bg-orange-200">
                    <button
                      className="flex w-full h-full place-content-center pt-1 font-bold text-lg cursor-default"
                      onClick={() => {
                        // console.log(filteredProductItem.id);
                        basket.addItem(filteredProductItem.id);
                        console.log(basket.goods);

                        
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* <div
                  className="buy-button  bg-slate-600 right-1 bottom-1 group-hover:animate-wiggle    "
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(">>>>>>>>", filteredProductItem.productName);
                  }}
                >
                  <img className="grid w-8 h-8" src="../img/basket.webp"></img>
                </div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
});
