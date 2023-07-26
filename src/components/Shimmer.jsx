import React, { useEffect, useState } from "react";

const ShimmerItem = () => (
  <div className="shimmer-container">
    <div className="main-box"></div>
    <div className="lg-strip"></div>
    <div className="sm-strip"></div>
  </div>
);

const Shimmer = () => {
  const [showInfo, setShowInfo] = useState(false)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowInfo(true)
    },5000)

    return ()=>{
      clearTimeout(timer)
    }
  })
  return (
    <div className="shimmer">
      {showInfo && <h3>!Please download the Cors Extension and turn it On ....</h3>}
      {Array(8)
        .fill()
        .map((item, index) => (
          <ShimmerItem key={index} />
        ))}
    </div>
  );
};


export default Shimmer;
