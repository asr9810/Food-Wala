import React, { useEffect, useState } from "react";
import restoCard from "../image/restoCard.jpg";
import { AiFillStar } from "react-icons/ai";
import RestaurantMenuItem from "./RestaurantMenuItem";
import { MENU_ITEM_API, imgUrl } from "../utility/config";
import { useParams } from "react-router-dom";

const RestaurantCardPage = () => {
  const [menuItemList, setMenuItemList] = useState([])
  const [restroInfo, setRestroInfo] = useState()
  const { resid } = useParams()
  
  console.log(resid)

  useEffect(()=>{
    getMenuItemData();
  },[])

  const getMenuItemData = async() => {
    const res = await fetch(MENU_ITEM_API + resid)
    const data = await res.json();
    console.log(data?.data?.cards)

    setRestroInfo(data?.data?.cards[0]?.card?.card?.info)
    setMenuItemList(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  }
  console.log("restroInfo" ,restroInfo)
  console.log('menuItemLis', menuItemList)
 
  
  return (restroInfo === undefined || menuItemList === undefined)? null : (
    <div className="restro-menu-container">
      <div className="restro-profile">
        <div className="restro-lg-img">
          <img src={imgUrl+ restroInfo?.cloudinaryImageId} alt="" />
        </div>
        <div className="restro-full-info">
          <div className="restro-full-detail">
            <div className="restro-full-name">{restroInfo?.name}</div>
            <div className="restro-full-cuisines">{restroInfo?.cuisines.join(', ')}</div>
            <div className="restro-full-location">{restroInfo?.areaName}, {restroInfo?.sla?.lastMileTravelString}</div>
          </div>
          <div className="restro-full-rating">
            <div className="full-star">
              <AiFillStar /> {restroInfo?.avgRatingString}
            </div>
            <hr />
            <div className="star-detail">{restroInfo?.totalRatingsString}</div>
          </div>
        </div>
      </div>
      <div className="restro-menu">
      <h2 className="veg-title">Only Pure-Veg</h2>
        {menuItemList.map((item)=>(
          <RestaurantMenuItem key={item?.card?.info?.id} data={item} restroId={resid} restroName={restroInfo?.name} restroImg={restroInfo?.cloudinaryImageId} restroLocation={restroInfo?.areaName}/>
        ))}
        
        <div className="non-veg"></div>
      </div>
    </div>
  );
};

export default RestaurantCardPage;
