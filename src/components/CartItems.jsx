import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const CartItems = ({data}) => {
  const [cartCount, setCartCount] = useState(1)
  
  // const cartItems = useSelector((store=>store.cart.cartItems))

  // const filterCartItem = cartItems.filter((item)=>())

  const {name, price } = data;

  return (
    <div className="cart-items">
      <div className="cart-items-name">{name}</div>
      <div className="menu-item-add">
        <div className="menu-item-add-box">
          <span className="minus">-</span>
          <span className="int">{cartCount}</span>
          <span className="plus">+</span>
        </div>
      </div>
      <div className="cart-item-calculation">&#8377;{price/100}</div>
    </div>
  );
};

export default CartItems;
