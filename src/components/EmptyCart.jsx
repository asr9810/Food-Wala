import React from 'react'
import dummyImg from '../image/dummy_food.jpg'

const EmptyCart = () => {
  return (
    <div className='empty-cart-container'>
      <img src={dummyImg} alt="" />
      <h2>Your cart is empty</h2>
      <p>You can go to home page to view more restaurants</p>
      <button>SEE RESTAURANTS NEAR YOU</button>
    </div>
  )
}

export default EmptyCart
