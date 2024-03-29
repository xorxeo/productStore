import React from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { useContext } from 'react'

export const ProductItemsCounter = observer(() => {
    const { basket } = useContext(Context);
  return (
    <div className='flex justify-center'>
      {(basket.goods) && Object.keys(basket.goods).length}
    </div>
  );
})
