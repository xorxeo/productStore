import React from 'react'

export const BasketItem = (props) => {
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td>{props.price}</td>
        <td>{props.price * props.quantity}</td>
        <td>DELETE</td>
    </tr>
  )
}
