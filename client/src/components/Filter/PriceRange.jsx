import { observer } from "mobx-react-lite";
import React from "react";
import { useCallback, useRef, useState, useEffect } from "react";
import classnames from "classnames";

export const PriceRange = observer(({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  const getPercent = useCallback((value) => 
    Math.round(((value - min) / (max - min)) * 100), [min, max]
  );

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(Number(minValRef.current.value));
      const maxPercent = getPercent(maxVal);
      // console.log(minValRef.current.value);
      // console.log(maxPercent);
      // console.log(minPercent);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(Number(maxValRef.current.value));
      // console.log(maxValRef.current.value);
      // console.log(maxPercent);
      // console.log(minPercent);
      

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        // range.current.classList.add(`width-[${minPercent}%]`);
        range.current.style.width = `${maxPercent - minPercent}%`;
        // console.log(maxPercent);
        // console.log(range.current.classList);
        // console.log(range.current.style.width);
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="price-range-filter flex flex-col justify-around h-40 w-full pl-4 pr-4">
      <div className="title-wrapper flex justify-between">
        <div className="title flex h-3 pl-2 text-lg ">Price</div>
        <button className="title-button flex pr-2">v</button>
      </div>
      <div className="input-range-wrapper flex relative w-full h-12 justify-center items-center">
        <input
          type="range"
          // className="slider-handle-1 flex w-full "
          className={classnames(
            "min flex absolute outline-none  z-30 w-48 h-0 bg-gray-300 mt-4",
            {
              "min flex absolute outline-none z-50 w-48 h-0 bg-gray-300 mt-4":minVal > max - 100,
            }
          )}
          min={min}
          max={max}
          ref={minValRef}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - 1 );
            e.target.value = value;
            setMinVal(value);
            console.log(minVal);
          }}
          value={minVal}
        />
        <input
          type="range"
          // className="slider-handle-2 flex w-full "
          className="max flex absolute outline-none  z-40 w-48 h-0 mb-1 bg-gray-300"
          min={min}
          max={max}
          ref={maxValRef}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + 1);
            e.target.value = value;
            setMaxVal(value);
            // console.log(range.current.style);
          }}
          value={maxVal}
        />
        <div className="slider flex relative w-48">
          <div className="slider__track absolute bg-red-400 w-full z-10 h-2 rounded"></div>
          <div
            ref={range}
            className="slider__range absolute bg-black  z-20 h-2 rounded"
          ></div>
          <div className="slider__left-value  absolute -left-6  ">{minVal}</div>
          <div className="slider__right-value  absolute -right-10 ">
            {maxVal}
          </div>
        </div>
      </div>
      <div className="inputs-wrapper flex w-full h-10 justify-center font-light">
        <div className="input-wrapper-from flex w-full justify-center items-center">
          <div className="from-title flex items-center  pr-3">From</div>
          <input
            className="input-to flex appearance-none  h-8 w-16 p-2 text-xs rounded-md focus:outline-none"
            type="number"
            defaultValue={minVal}
            placeholder="0"
          />
          $
        </div>
        <div className="input-wrapper-to flex w-full justify-center items-center">
          <div className="to-title flex items-center  pr-3">To</div>
          <input
            className="input-from flex appearance-none  h-8 w-16 p-2 text-xs rounded-md focus:outline-none"
            type="number"
            defaultValue={maxVal}
            onChange={(e) => {
              if (!maxVal) {
                // setMaxVal(e.target.value)
                console.log(maxVal);
              }
            }}
            placeholder="1000"
          />
          $
        </div>
      </div>
    </div>
  );
});
