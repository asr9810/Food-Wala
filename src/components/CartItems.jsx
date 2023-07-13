import React from "react";

const CartItems = ({data}) => {

  const {name, price } = data;

  return (
    <div className="cart-items">
      <div className="cart-items-name">{name}</div>
      <div className="menu-item-add">
        <div className="menu-item-add-box">
          <span className="minus">-</span>
          <span className="int">0</span>
          <span className="plus">+</span>
        </div>
      </div>
      <div className="cart-item-calculation">&#8377;{price/100}</div>
    </div>
  );
};

export default CartItems;
