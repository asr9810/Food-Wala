import React, { useState } from "react";
import CartItems from "./CartItems";
import restrocad from "../image/restoCard.jpg";
import { useSelector } from "react-redux";
import { imgUrl } from "../utility/config";
import { current } from "@reduxjs/toolkit";

const Cart = () => {
  const cartElement = useSelector((store)=>store.cart.cartItems)
  const [cartItem, setCartItem] = useState(cartElement)

  const sum = cartItem.reduce((accu, currentvalue)=>(accu+(currentvalue.price? currentvalue.price: currentvalue.defaultPrice)), 0)

  console.log(cartElement)

  return (
    <div className="cart-container">
      <div className="user-detail">
        <h2>Add a delivery address</h2>
        <p>You seem to be in the new location</p>
        <div className="user-add">
          <div className="current-add">Your current delivery address</div>
          <div className="add">Location</div>
          <div className="dist">27Km</div>
          <button>Delivery Here</button>
        </div>
      </div>
      <div className="cart-box">
        <div className="cart-items-recipt">
          <div className="cart-restro">
            <img src={imgUrl+cartElement[0].restaurantImg} alt="" />
            <div className="cart-restro-info">
              <span className="cart-restro-info-name">{cartElement[0].restaurantName}</span>
              <span className="cart-restro-info-location">{cartElement[0].restroPlace}</span>
            </div>
          </div>
          <div className="cart-items-bill-detail">
            {
              cartElement.map((item)=>(< CartItems key={item.id} data={item}/>))
            }
            <div className="bill-detail">
              <h3>Bill Detail</h3>
              <div className="total-item-bill">
                <p>Total Bill</p>
                <span>&#8377;{sum/100}</span>
              </div>
              <div className="delivery">
                <div className="delivery-in-mtr">
                  <p>Devlivery Fee</p>
                </div>
                <span>Free</span>
              </div>
            </div>
          </div>

          <div className="to-pay">
            <h3>To Pay</h3>
            <span>&#8377;{sum/100}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
