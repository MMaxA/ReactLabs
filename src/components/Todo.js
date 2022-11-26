import React from "react";
import image from '../images/f3.png'

function Todo() {
  return (
    <div className="wish">
      <img className="wish__img" src={image} alt="time" />
      <h3 className="wish__title">Первый блок</h3>
      <p className="wish__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </p>
    </div>
  );
}

export default Todo;
