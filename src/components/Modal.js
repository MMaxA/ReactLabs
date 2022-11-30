import React from "react";

function Modal(props) {
  
  return (
    <div className="modal">
      <p>Do you want to delete this ToDo?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
      <button className="btn" onClick={props.onConfirm}>Confirm</button>
    </div>
  );
}

export default Modal;
