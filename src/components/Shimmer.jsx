import React from "react";

const ShimmerItem = () => (
    <div className="shimmer-container">
        <div className="main-box"></div>
        <div className="lg-strip"></div>
        <div className="sm-strip"></div>
      </div>
)

const Shimmer = () => {
  return (
    <div className="shimmer">
      {Array(8).fill().map((item, index)=>(<ShimmerItem key={index}/>))}
    </div>
  );
};


export default Shimmer;
