import React, { useContext } from 'react';
import { Context } from '../index';
import { BasketItem } from './BasketItem';

export const BasketList = () => {
    const { basket } = useContext(Context);
    const cost = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div>
        <h1>BasketList</h1>
        
        {basket.length ? (
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>SUM</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map(item => <BasketItem key={item.product_item_id} {...item} />)}
                    <tr>
                        <th>TOTAL</th>
                        <th>{cost}</th>
                        <th>RUB</th>
                    </tr>
                </tbody>
            </table>
            ) : (
                <p>Your basket is empty</p>
            )}

    </div>
  )
}
