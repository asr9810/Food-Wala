import React from "react";
import logo from '../image/logo.png'
import { PiUserLight } from 'react-icons/pi'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const showCartNumber = useSelector((store) => store.cart.cartItems)
    
  

  return (
    <div className="header">
      <div className="logo-section">
        <img src= {logo} alt="Food Wala logo" />
      </div>
      <nav className="nav-bar">
        <ul>
          <Link to={'/'} ><li className="home-li">Home</li></Link>
          <Link to={'/about'}><li>About Us</li></Link>
          <Link to={showCartNumber.length ===0 ? '/cart_empty': '/cart'}>
          <li className="cart-section">
          <svg viewBox="-1 0 37 32" height="20" width="20" fill="#60b246"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
          <span className="cart-count">{showCartNumber.length}</span>
            <p>Cart</p>
          </li>
          </Link>
        </ul>
        <div className="user-login">
          <PiUserLight/>
          <p className="user-name">Name</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;

// - header
// -    logo section   ==>
// -        logo img
// -        Name if justify
// -    Nav section  ==>
// -        Home
// -        About
// -        offer
// -        cart
// -        user section  ==>
// -            img
// -            user name
