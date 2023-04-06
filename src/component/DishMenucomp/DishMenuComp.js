import React, { useState } from "react";
import md1 from "../../Images/image 14.png";
import md2 from "../../Images/image 12.png";
import md3 from "../../Images/image 13.png";
import md4 from "../../Images/image 11.png";
import { useNavigate } from "react-router-dom";
import di1 from "../../Images/1.png";
import di2 from "../../Images/2.png";
import di3 from "../../Images/3.png";
import di4 from "../../Images/4.png";

import "./DishMenucomp.css";

const DishMenuComp = (props) => {
  const [isActive, setActive] = useState(false);

  const [dataIndex, setDataIndex] = useState(0);
  const handle1Click = (index, data) => {
    // console.log("index============>", index, data);
    setDataIndex(index);
    props.setData({
      rating: data.rating,
      dish: { name1: data.dish.name1, name2: data.dish.name2 },
      ratingdivColor: data.ratingdivColor,
      dishImage: data.dishImage,
      like:0,
      dislike:0
    });
  };

  const newArray = [
    {
      rating: "3.8",
      dish: { name1: "Chicken ", name2: "Masala" },
      ratingdivColor: "#E8A370",
      dishImage: di1,
      md:md1,
      
  
    },
    {
      rating: "4.2",
      dish: { name1: "Classic ", name2: "Chicken" },
      ratingdivColor: "#9EE870",
      dishImage: di2,
      md:md2,
     
  
    },
    {
      rating: "4.7",
      dish: { name1: "Italian ", name2: "Fish" },
      ratingdivColor: "#70E8E1",
      dishImage: di3,
      md:md3,
    
  
    },
    {
      rating: "3.9",
      dish: { name1: "Royal ", name2: "Crab" },
      ratingdivColor: "#E670E8",
      dishImage: di4,
      md:md4,
     
  
    },
  ];
  return (
    <div className="row mt-4 ">
        <div className="col-9 d-flex flex-row justify-content-between">
            {newArray.map((data, index) => {
            return (
                <div className={`card menucardClass ${dataIndex == index ? "active" : ""}`} onClick={() => handle1Click(index, data)}>
                <div className="d-flex flex-row justify-content-around align-items-center" style={{ height: "100px" }}>
                    <img class="card-img-top " src={data.md} alt="Card image cap" />
                </div>
                <div class="card-body">
                    <p class="card-title">{data.dish.name1}<br/>{data.dish.name2}</p>
                </div>
                </div>
            );
            })}
            {/* <div class={`card menucardClass  ${path === "/page1" ? "active" : ""}`} onClick={handle2Click}> */}
            {/* <div class="card menucardClass" onClick={handle2Click}>
            <div
                className="d-flex flex-row justify-content-around align-items-center"
                style={{ height: "100px" }}
            >
                <img class="card-img-top " src={md2} alt="Card image cap" />
            </div>

            <div class="card-body">
                <p class="card-title">
                Classic
                <br /> Chicken
                </p>
            </div>
            </div> */}
            {/* <div class={`card menucardClass  ${path === "/page2" ? "active" : ""}`} onClick={handle3Click}> */}
            {/* <div class="card menucardClass" onClick={handle3Click}>
            <div
                className="d-flex flex-row justify-content-around align-items-center"
                style={{ height: "100px" }}
            >
                <img class="card-img-top " src={md3} alt="Card image cap" />
            </div>

            <div class="card-body">
                <p class="card-title">
                Italian <br /> Fish
                </p>
            </div>
            </div> */}
            {/* <div class={`card menucardClass  ${path === "/page3" ? "active" : ""}`} onClick={handle4Click}> */}
            {/* <div class="card menucardClass" onClick={handle4Click}>
            <div
                className="d-flex flex-row justify-content-around align-items-center"
                style={{ height: "100px" }}
            >
                <img class="card-img-top " src={md4} alt="Card image cap" />
            </div>

            <div class="card-body">
                <p class="card-title">
                Royal <br />
                Crab
                </p>
            </div>
            </div> */}
        </div>
        <div className="col-2">
        </div>

    </div>
  );
};

export default DishMenuComp;
