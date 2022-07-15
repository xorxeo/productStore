import React from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { useContext } from 'react'

export const ProductItemsCounter = observer(() => {
    const { basket } = useContext(Context);
  return (
    <div className="count flex absolute left-12 -top-1 w-5 h-5 justify-center items-center text-base text-cyan-50 bg-red-400 rounded-xl z-10">{Object.keys(basket.goods).length}</div>
  )
})
