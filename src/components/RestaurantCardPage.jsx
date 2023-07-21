import React, { useEffect, useState } from "react";
import restoCard from "../image/restoCard.jpg";
import { AiFillStar,  } from "react-icons/ai";
import RestaurantMenuItem from "./RestaurantMenuItem";
import { MENU_ITEM_API, imgUrl } from "../utility/config";
import { useParams } from "react-router-dom";

import RestroCategory from "./RestroCategory";


const RestaurantCardPage = () => {
  const [categoryList, setCategoryList] = useState([])
  const [restroInfo, setRestroInfo] = useState()
  const { resid } = useParams()
  const [showIndex, setShowIndex] = useState(0)
  
  console.log(resid)

  useEffect(()=>{
    getMenuItemData();
  },[])

  const getMenuItemData = async() => {
    const res = await fetch(MENU_ITEM_API + resid)
    const data = await res.json();
    console.log("menuItemdata", data?.data?.cards)

    setRestroInfo(data?.data?.cards[0]?.card?.card?.info)
    setCategoryList(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    
  }
  console.log("restroInfo" ,restroInfo)
  console.log('categorylist', categoryList)

  const category = categoryList.filter((item)=>(
    item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ))
    console.log("category",category )
 
  
  return (restroInfo === undefined || categoryList === undefined)? null : (
    <div className="restro-menu-container">
      <h2>Restaurant Name</h2>
      <p>Cusines</p>
      <div className="category-container">
        {category.map((item, index)=>(
          <RestroCategory key={index}  data={item} restroId={resid} restroName={restroInfo?.name} restroImg={restroInfo?.cloudinaryImageId} restroLocation={restroInfo?.areaName} showIndex={index == showIndex && true} setShowIndex={()=> setShowIndex(index)}/>
        ))}
      </div>
    </div>
    // <div className="restro-menu-container">
    //   <div className="restro-profile">
    //     <div className="restro-lg-img">
    //       <img src={imgUrl+ restroInfo?.cloudinaryImageId} alt="" />
    //     </div>
    //     <div className="restro-full-info">
    //       <div className="restro-full-detail">
    //         <div className="restro-full-name">{restroInfo?.name}</div>
    //         <div className="restro-full-cuisines">{restroInfo?.cuisines.join(', ')}</div>
    //         <div className="restro-full-location">{restroInfo?.areaName}, {restroInfo?.sla?.lastMileTravelString}</div>
    //       </div>
    //       <div className="restro-full-rating">
    //         <div className="full-star">
    //           <AiFillStar /> {restroInfo?.avgRatingString}
    //         </div>
    //         <hr />
    //         <div className="star-detail">{restroInfo?.totalRatingsString}</div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="restro-menu">
    //   <h2 className="veg-title">Only Pure-Veg</h2>
    //     {menuItemList.map((item)=>(
    //       <RestaurantMenuItem key={item?.card?.info?.id} data={item} restroId={resid} restroName={restroInfo?.name} restroImg={restroInfo?.cloudinaryImageId} restroLocation={restroInfo?.areaName}/>
    //     ))}
        
    //     <div className="non-veg"></div>
    //   </div>
    // </div>
  );
};

export default RestaurantCardPage;
