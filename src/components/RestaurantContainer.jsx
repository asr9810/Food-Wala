import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restroDataUrl, serverurl } from "../utility/config";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantContainer = ({ filterquery }) => {
  const [restroData, setRestroData] = useState();
  const [filterRestroDataList, setFilterRestroDataList] = useState(restroData);

  useEffect(() => {
    getRestroData();
  }, []);

  // whenever searching the restaurant this will call
  useEffect(() => {
    if (filterquery !== undefined) {
      const filterRestroData = restroData.filter((res) =>
        res?.data?.name.toLowerCase().includes(filterquery.toLowerCase())
      );
      // console.log("selfmade filterRestroData", filterRestroData)
      setFilterRestroDataList(filterRestroData);
    }
  }, [filterquery, restroData]);

  // console.log("restrocontainer", filterquery)

  const getRestroData = async () => {
    const res = await fetch(restroDataUrl);
    const Data = await res.json();

    // console.log(Data.data.cards[2].data.data.cards);
    setRestroData(Data?.data?.cards[2]?.data?.data?.cards);
    setFilterRestroDataList(Data?.data?.cards[2]?.data?.data?.cards);
  };
  // console.log("restroData =>", restroData);
  // console.log('filterRestroData', filterRestroDataList)

  return filterRestroDataList == undefined ? <Shimmer/> : (
    <div className="restro-container">
      {filterRestroDataList.map((item) => (
        <Link
          to={`Restaurant/${item.data.id} `}
          key={item.data.id}
          className="restrocard-link"
        >
          <RestaurantCard data={item} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantContainer;
