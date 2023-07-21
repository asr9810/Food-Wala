import React, { useState } from "react";
import { IoIosArrowDown } from 'react-icons/io'
import CategoryMenuItem from "./CategoryMenuItem";

const RestroCategory = ({data, restroId, restroName, restroImg, restroLocation,showIndex, setShowIndex }) => {

    const [categoryList, setCategoryList] = useState(data?.card?.card?.itemCards)
    // const [showCategory, setShowCategory] = useState(true)
    console.log("categorylist", categoryList)


    const handleClick = ()=>{
      console.log('click')
      setShowIndex();
    }

  return (
    <div className="category">
      <div className="category-title" onClick={handleClick}>
        <h3>{data?.card?.card.title} ({data?.card?.card?.itemCards.length})</h3>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
        <div className="category-menu-item-list">
            {   (showIndex) ? categoryList.map((item)=>(
                    <CategoryMenuItem key={item?.card?.info?.id} Data2={item?.card?.info} restroId={restroId} restroName={restroName} restroImg={restroImg} restroLocation={restroLocation}/>
                )) : null
                
            }
        </div>
    </div>
  );
};

export default RestroCategory;
