import React from "react";
import img1 from '../images/f3.png';

function Todo() {
  return (
    <div className="card">
      <h2>Title</h2>
      <div className="actions">
        <img src={img1} />
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
