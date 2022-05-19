import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';


export const Counter = () => {
    
    // const [count, setCount] = useState(0);

    
  return (
      <div>
          <div>{count}</div>
          {/* <button onClick={() => setCount(count - 1)}>-1</button> */}
          {/* <button onClick={() => setCount(count + 1)}>+1</button> */}
      </div>
  )
};
