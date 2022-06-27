import React from 'react'

export const BasketItem = ({a, b}) => {
  return (
   <div className="flex pt-16 justify-center">
      <h1>Basket</h1>
      {a.map((good) => (
        <div>
          <div key={good.productName}>{good.productName}</div>
          <div key={b.goods[good.id]}>{b.goods[good.id]}</div>
        </div>
      ))}
    </div>
  
  
    // <tr>
    //     <td>{props.name}</td>
    //     <td>{props.quantity}</td>
    //     <td>{props.price}</td>
    //     <td>{props.price * props.quantity}</td>
    //     <td>DELETE</td>
    // </tr>
  )
}
