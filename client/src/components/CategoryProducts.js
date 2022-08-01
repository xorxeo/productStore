import { observer } from "mobx-react-lite";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { PRODUCT_ROUTE } from "../utils/consts";
import { fetchProductItemsByCategory } from "../http/categoryAPI";
import { Counter } from "./Counter";
import { AddFirstProductItem } from "./AddFirstProductItem";
import { toJS } from "mobx";

export const CategoryProducts = observer(() => {
  const { product } = useContext(Context);
  const { basket } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const { categoryName } = useParams();

  useEffect(() => {
    product.setProductItemsData(categoryName);
  }, [categoryName]);

  useEffect(() => {
    product.setSelectedCategoryIdByCategoryName(categoryName);
  }, [categoryName]);

  // console.log(product.productItems);

  let productItems = [];

  if (product._productItemsBySearchValue.length > 0) {
    productItems = product._productItemsBySearchValue;
  } else {
    productItems = product.getProductByCategoryName(categoryName);
  }

  return (
    <div
      id="container"
      className="products-container grid h-[800px] lg:grid-cols-4  min-w-full pt-[100px] pb-4 pl-4 pr-4 mx-0 bg-gray-200"
    >
      <div className="categories-modal bg-gray-300 grid ">
        Categories
        {/* <div>
          {productItems?.length && }
        </div> */}
      </div>

      <div className="product-item relative grid p-2  md:grid-cols-3 md:grid-rows-2 md:gap-4 lg:col-span-3 lg:grid-cols-4 lg:grid-rows-3 lg:gap-10 ">
        {productItems.length > 0 &&
          productItems.map((productItem) => (
            <div className="grid relative" key={productItem.id}>
              <div className="card-image grid absolute w-[90px] h-[90px]  rounded-full items-center  left-4  bg-transparent shadow-xl ">
                <img
                  key={productItem.productName}
                  src={`${process.env.REACT_APP_API_URL}${productItem.img}`}
                  className=" w-[90px] h-[90px] bg-none "
                ></img>
              </div>
              <div
                key={`${productItem.id}${productItem.productName}`}
                className=" card-wrapper group grid mt-[30px] bg-slate-100 rounded-xl border-[2px] hover:border-lime-600  sm:text-sm lg:text-base  shadow-md"
                onClick={(e) => {
                  navigate(`${PRODUCT_ROUTE}/${productItem.productName}`);
                  product.setSelectedProductItem(productItem);
                }}
              >
                <div className="info grid relative items-start pb-2 pl-2 pr-2 mt-[4rem] rounded-xl shadow-md b rounded-t-lg ">
                  <div className="title pl-2  font-supernettCnLight text-3xl font-bold text-lime-600">
                    {productItem.productName}
                  </div>
                  <div className="description pl-2 font-light">
                    {productItem.description}
                  </div>
                  <div>
                    <div className="price pl-2 font-semibold">
                      {productItem.price}.00 ₽
                    </div>
                  </div>
                  <div className="add-button-wrapper flex justify-between items-center h-[30px]  pr-2 pl-1">
                    <div className="flex  font-supernettCnLight pr-5 pl-2 ">
                      /500g
                    </div>
                    {!(productItem.id in basket.goods) && (
                      <AddFirstProductItem props={productItem} />
                    )}
                    {productItem.id in basket.goods && (
                      <Counter props={productItem} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
});
