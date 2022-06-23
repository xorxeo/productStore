import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { Context } from "../index";
import { PRODUCT_ROUTE } from "../utils/consts";
import { fetchProductItem } from "../http/categoryAPI";

export const CategoryProducts = observer(() => {
  const { product } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(product.productItem);

  useEffect(() => {
    fetchProductItem().then((data) => {
      product.setProductItem(data);
      //  console.log(data)
      // console.log(product.productItem);
      //  console.log(product.selectedCategory)
    });
  }, []);

  return (
    <div className="container flex h-screen min-w-full pt-16 pb-4 mx-0 bg-slate-200">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full h-full p-4 justify-center items-center">
        {product.productItem
          .filter(
            (productItem) =>
              productItem.productCategoryId == product.selectedCategory.category
          )
          .map((filteredProductItem) => (
            <div
              key={filteredProductItem.id}
              className=" card-wrapper group grid relative grid-col-2 w-full h-full rounded-t-lg bg-slate-50 "
              onClick={(e) => {
                // console.log(product.id),
                navigate(PRODUCT_ROUTE + "/" + product.productName);
                product.setSelectedProductItem(filteredProductItem);
                // console.log(location.pathname)
                // console.log(e.target)
                console.log(product.selectedProductItem);
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
                  className="buy-button  absolute bg-slate-400  right-1 bottom-1 transition ease-in-out duration-1000 group-hover:block  group-hover:animate-wiggle z-10   "
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(">>>>>>>>", filteredProductItem.productName);
                  }}
                >
                  <img className="grid w-8 h-8" src="../img/basket.webp"></img>
                </div>

                {/* <div className="increment-decrement z-10">
                  <Counter />
                </div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
});
