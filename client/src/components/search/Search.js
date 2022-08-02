import { observer } from "mobx-react-lite";
import React from "react";

export const Search = observer((props) => {
    const { value, onInputValueHandler } = props;
    
  return (
    <div className="search flex relative ml-8 ">
      <input
        type="search"
        placeholder="Search"
        value={value}
        onChange={(e) => {
            onInputValueHandler(e.target.value);
            console.log(e.target.value);
           
            //  if (!e.target.value && value) {
            //      e.target.value = "";
            //      console.log((e.target.value));
            //  }
              }}
         
        className="bg-gray-300 rounded-md border-0 focus:ring-lime-700"
      />
          <button className="search-button flex w-10 h-10 bg-search-button bg-center bg-no-repeat"></button>
    </div>
  );
});
