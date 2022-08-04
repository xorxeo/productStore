import { observer } from "mobx-react-lite";
import React from "react";

export const PriceRange = observer(() => {
  return (
    <div className="price-range-filter flex flex-col justify-around h-40 w-full pl-4 pr-4">
      <div className="title-wrapper flex justify-between">
        <div className="title flex h-3 pl-2 text-lg ">Price</div>
        <button className="title-button flex pr-2">v</button>
      </div>
      <div className="input-range-wrapper flex w-full justify-center p-2">
        <input type="range" className="flex w-full " />
      </div>
      <div className="inputs-wrapper flex w-full h-10 justify-center font-light">
        <div className="input-from flex w-full justify-center items-center">
          <div className="from-title flex items-center  pr-3">From</div>
          <input
            className="flex  h-8 w-10 p-1 text-xs rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div className="input-to flex w-full justify-center items-center">
          <div className="to-title flex items-center  pr-3">To</div>
          <input
            className="flex  h-8 w-10 p-1 text-xs rounded-md focus:outline-none"
            type="text"
          />
        </div>
      </div>
    </div>
  );
});
