import React, {  useState } from "react";
import NavbarComp from "../NavbarComp/NavbarComp";
import pgi1 from "../../Images/Pg1.png";
import "./HomePageComp.css";
import CardComp from "../CardComp/CardComp";
import DishComp from "../DishComponent/DishComp";
import DishDescComp from "../DishDescComp/DishDescComp";
import DishMenuComp from "../DishMenucomp/DishMenuComp";
import di from "../../Images/1.png";
import { useLocation, useParams } from "react-router-dom";

const HomePageComp = () => {

  const { search } = useLocation();
  let sortParam = new URLSearchParams(search).get('id') 

  const [data, setData] = useState({
    rating: "3.8",
    dish: { name1: "Chicken ", name2: "Masala" },
    ratingdivColor: "#E8A370",
    dishImage: di,
    b:pgi1

  });


  console.log("location============>", sortParam)

  return (
    <>
      <div className="bgImage">
        <img src={data.b} alt="" />
      </div>
      <div className="row mt-5">
        <NavbarComp />
      </div>

      <div className="row bg">
        <div className="col-9">
          <div className="row" style={{ marginTop: "-15px" }}>
            <div className="col-3"></div>
            <div className="col-4">
              <DishComp dishImage={data.dishImage} />
            </div>
            <div className="col-5">
              {/* <DishDescComp /> */}
              <DishDescComp dishName={data.dish} />
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-9 mt-5">
              <DishMenuComp setData={setData} like={data.like} dislike={data.dislike}/>
            </div>
          </div>
        </div>
        <div className="col-3 mt-5 pt-3">
          <div className="mx-5">
            <CardComp
              rating={data.rating}
              cdishName={data.dish}
              ratingdivColor={data.ratingdivColor}
              like={data.like}
              dislike={data.dislike}
              id={sortParam}

            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageComp;
