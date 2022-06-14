import React from "react";

export const Modals = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      Modals
      <button onClick={() => {

      }}
      >
        open modal
      </button>
    </div>
  );
};
