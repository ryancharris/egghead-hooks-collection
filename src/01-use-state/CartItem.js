import React from "react";

function CartItem({ name, quantity, add, remove }) {
  return (
    <div className="CartItem">
      <span className="CartItem__label">{`${name}: `}</span>
      <div>
        <button className="CartItem__btn" onClick={remove}>
          -
        </button>
        <input className="CartItem__input" value={quantity} readOnly />
        <button className="CartItem__btn" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
