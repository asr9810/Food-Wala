import { useState } from "react";
// import restoCard from '../image/restoCard.jpg'
import { useDispatch, useSelector } from "react-redux";
import { imgUrl } from "../utility/config";
// import dummyImg from '../image/dummy_food.jpg'
import { addToCart, removeCartItem } from "../Slices/cartSlice";

const RestaurantMenuItem = ({ data, restroId, restroName, restroImg, restroLocation }) => {
  let [countitem, setCountItem] = useState(0);
  const cartItem = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  const {
    imageId,
    description,
    name,
    price,
    defaultPrice,
    id,
  } = data?.card?.info;
  // console.log("restaurantMenuItemData", data);
  // console.log("restroid", restroId);
  // console.log('restaurantName', restroName)
  return (
    <>
      <div className="veg-menu-item">
        <div className="menu-item-info">
          <div className="menu-item-name">{name}</div>
          <div className="menu-item-price">
            &#8377;{price ? price / 100 : defaultPrice / 100}
          </div>
          <div className="menu-item-description">{description}</div>
        </div>
        <div className="menu-item-img">
          <img src={imgUrl + imageId} alt="" />
          <div className="menu-item-add">
            <span
              className="minus"
              onClick={() => {
                dispatch(removeCartItem(data?.card?.info));
                if (countitem > 0) setCountItem(countitem - 1);
              }}
            >
              -
            </span>
            <span className="int">{countitem}</span>
            <span
              className="plus"
              onClick={() => {
                if (cartItem.length == 0 || cartItem[cartItem.length-1].restaurantId == restroId) {
                  dispatch(
                    addToCart({ ...data?.card?.info, restaurantId: restroId, restaurantImg: restroImg, restaurantName: restroName, restroPlace: restroLocation })
                  );
                  setCountItem(countitem + 1);
                } else {
                  const shouldAddToCart = window.confirm("Are you sure you want to add this item to the cart from different Restarurant?")
                  if(shouldAddToCart){
                    dispatch(
                      addToCart({...data?.card?.info, restaurantName: restroName, restaurantId: restroId, restaurantImg: restroImg, restroPlace: restroLocation })
                    )
                  }
                }
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuItem;
