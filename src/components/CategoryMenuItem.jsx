import React from 'react'
import green from '../image/green.png'
import red from '../image/red.png'
import { imgUrl } from '../utility/config';
import AddToCard from './AddToCard';


const CategoryMenuItem = ({Data2, restroId, restroName, restroImg, restroLocation}) => {

    const {name, price, defaultPrice, description, imageId, itemAttribute,isBestseller}= Data2;
    const {vegClassifier} = itemAttribute; 
    console.log("Data2", Data2)
    console.log(vegClassifier)

  return (
    <div className='category-menu-item-box'>
        <div className="category-menu-info">
        <div className="veg-class"><img src={vegClassifier === "VEG"?green :red} alt="" /> {isBestseller == true? <span>Bestseller</span>: null}</div>
        <div className="menu-item-name">{name}</div>
        <span>&#8377; {price? price/100: defaultPrice/100}</span>
        <p>{description}</p>
        </div>
        <div className="img-section">
          <img src={imgUrl+imageId} alt="" />
          <AddToCard data={Data2} restroId={restroId} restroName={restroName} restroImg={restroImg} restroLocation={restroLocation}/>
        </div>
    </div>

  )
}

export default CategoryMenuItem
