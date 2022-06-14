import React from 'react'
import { useState } from 'react';

export const AddProductItem = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        Modal
    </div>
  )
}
