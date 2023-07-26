import React, { useEffect, useRef, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restroDataUr2, restroDataUrl, serverurl } from "../utility/config";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";

const RestaurantContainer = ({ filterquery }) => {
  const [restroData, setRestroData] = useState([]);
  const [filterRestroDataList, setFilterRestroDataList] = useState(restroData);
  // const [offset, setOffSet] = useState(31)
  // const [isFetchData, setIsFetchData] = useState(false)
  
  // const dispatch = useDispatch();
  // const [isScrollatDown, setIsScrollAtDown] = useState(false)

  useEffect(() => {
    getRestroData();
    
    // window.addEventListener('scroll', scrollHandler)

    // return ()=>{
    //   window.removeEventListener('scroll', scrollHandler)
    // }
  }, []);
   console.log("restroData",restroData)
   console.log("filterRestroDataList", filterRestroDataList)

  // whenever searching the restaurant this will call
  useEffect(() => {
    if (filterquery !== undefined) {
      const filterRestroData = restroData.filter((res) =>
        res?.data?.data?.name.toLowerCase().includes(filterquery.toLowerCase())
      );
    
      setFilterRestroDataList(filterRestroData);
    }
  }, [filterquery]);

 

  const getRestroData = async () => {
    const res = await fetch(restroDataUr2);
    const Data = await res.json();
    console.log("geting data from api",Data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestroData(Data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestroDataList(Data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   
  };
// this function find the scroll point location
//   const scrollHandler=()=>{
   
//     if(window.scrollY + window.innerHeight + 5 >= document.body.scrollHeight && !isFetchData){
//       setIsFetchData(true)
//       restroDataAfterScroll()
//       .then(()=>setIsFetchData(false))
//       .catch((err)=>{console.log("Error while fetching data", err) 
//       setIsFetchData(false)})
//     }

  
//   }
// // fetching the restaurant data list after scroll down or meet the scroll conditon 
  // const restroDataAfterScroll = async() =>{
  //   const res2 = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126456&lng=77.2433578&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`)
  //   const Data2 = await res2.json()
  //   console.log("restroDataAfterScroll (Data2)", Data2?.data?.cards)
  //   setOffSet((prev)=>prev+16)
  //   setRestroData((prevData) => [...prevData, ...Data2?.data?.cards])
  //   setFilterRestroDataList((prevData) => [...prevData, ...Data2?.data?.cards])


  // }


  return filterRestroDataList.length === 0 ? <Shimmer/> : (
    <div className="restro-container">
      {filterRestroDataList.map((item) => (
        <Link
          to={`Restaurant/${item?.info?.id} `}
          key={item?.info?.id}
          className="restrocard-link"
        >
          <RestaurantCard data={item} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantContainer;
