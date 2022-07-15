import { observer } from "mobx-react-lite";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { PRODUCT_ROUTE } from "../utils/consts";
import { fetchProductItemsByCategory } from "../http/categoryAPI";
import { Counter } from "./Counter";
import { AddFirstProductItem } from "./AddFirstProductItem";

export const CategoryProducts = observer(() => {
  const { product } = useContext(Context);
  const { basket } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const { categoryName } = useParams();

  useEffect(() => {
    fetchProductItemsByCategory(categoryName).then((productItems) => {
      product.setProductItems(productItems, categoryName);
    });
  }, []);

  useEffect(() => {
    const category = product.getCategoryByName(categoryName);
    if (category?.id) {
      product.setSelectedCategoryId(category.id);
    }
  }, [categoryName]);

  const productItems = product.getProductByCategoryName(categoryName);

  return (
    <div className="products-container flex box-border  h-screen min-w-full pt-16 pb-4 pl-6 pr-6 mx-0 bg-slate-200">
      <div className="product-item relative grid md:grid-cols-4 md:grid-rows-2 md:gap-2 lg:grid-cols-5 lg:grid-rows-2 lg:gap-10 ">
        {productItems?.length &&
          productItems.map((productItem) => (
            <div
              key={productItem.id}
              className=" card-wrapper box-border border-4 group grid sm:text-sm lg:text-base bg-slate-50 "
              onClick={(e) => {
                navigate(`${PRODUCT_ROUTE}/${productItem.productName}`);
                product.setSelectedProductItem(productItem);
              }}
            >
              <div className="card-image grid relative justify-center items-center z-0 bg-white rounded-t-lg ">
                <img
                  key={productItem.productName}
                  src={`${process.env.REACT_APP_API_URL}${productItem.img}`}
                  className="w-28 h-48 bg-none"
                ></img>
              </div>
              <div className="info grid relative pb-2 pl-2 pr-2 justify-center items- shadow-md bg-slate-200 rounded-t-lg">
                <div className="title pl-2 font-bold">
                  {productItem.productName}
                </div>
                <div className="description pl-2 font-light">
                  {productItem.description}
                </div>
                <div>
                  <div className="price pl-2 font-semibold">
                    {productItem.price} ₽
                  </div>
                </div>
                <div className="add-button-wrapper flex items-center justify-end pr-2">
                  {Object.keys(basket.goods).length === 0 && (
                    <AddFirstProductItem props={productItem}/>
                  )}
                </div>
                {Object.keys(basket.goods).length > 0 && (
                  <div>{<Counter props={productItem} />}</div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
});
