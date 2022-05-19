import React from 'react';
import { observer } from 'mobx-react-lite';
import { observable } from 'mobx';

export const Counter = observer(() => {
const count = 0;

  return (
    <div className='counter'>
        <h1>{this.count}</h1>
        <button>-1</button>
        <button>+1</button>
    </div>
  )
});
