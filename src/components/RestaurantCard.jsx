import React from "react";
import restoCard from "../image/restoCard.jpg";
import { AiOutlineStar } from 'react-icons/ai';
import { imgUrl } from "../utility/config";

const RestaurantCard = ({data}) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = data?.data
  
  return (
    <div className="restro-card">
      <div className="restro-img">
        <img src={imgUrl+cloudinaryImageId} alt="" />
      </div>
      <div className="restro-detail">
        <div className="restro-name">{name}</div>
        <div className="restro-cuisine">{cuisines.join(", ")}</div>
        <div className="restro-rating">
          <div className="star"><AiOutlineStar/></div>
          <div className="rating-int">{(avgRating =="--"? "NA": avgRating)}</div>
        </div>
        <div className="hover-div"></div>
      </div>
    </div>
  );
};

export default RestaurantCard;
