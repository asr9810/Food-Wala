import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCartItem } from '../Slices/cartSlice'

const AddToCard = ({data, restroId, restroName, restroImg, restroLocation}) => {

  const cartItem = useSelector((store) => store.cart.cartItems);
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    const handleRemove = ()=>{
        if(count>=1){
            dispatch(removeCartItem(data))
            setCount((prev)=>prev-1)
        }
    }
    const handleAdd=()=>{
        
      if (cartItem.length == 0 || cartItem[cartItem.length-1].restaurantId == restroId) {
        dispatch(
          addToCart({ ...data, restaurantId: restroId, restaurantImg: restroImg, restaurantName: restroName, restroPlace: restroLocation })
        );
        setCount((prev)=> prev+1);
      } else {
        const shouldAddToCart = window.confirm("Are you sure you want to add this item to the cart from different Restarurant?")
        if(shouldAddToCart){
          dispatch(
            addToCart({...data, restaurantName: restroName, restaurantId: restroId, restaurantImg: restroImg, restroPlace: restroLocation })
          )
        }
      }
    }
  return (
    <div className='addToCart'>
        
        { (count ==0)? (<div className="before-add" onClick={handleAdd}>Add</div>) : (<><span className='remove' onClick={handleRemove}>-</span>
      <span className="int">{count}</span>
      <span className="add" onClick={handleAdd}>+</span></>)}
      
    </div>
  )
}

export default AddToCard
