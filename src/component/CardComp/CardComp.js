import React, { useEffect, useState } from "react";
import "./CardComp.css";

const CardComp = (props) => {


  const [ld,setLd]=useState([0,0,0,0])
  localStorage.setItem("ld",JSON.stringify(ld))
  const [ldd,setDld]=useState([0,0,0,0])
  localStorage.setItem("ldd",JSON.stringify(ldd))


    // const [dislike, setdisLike] = useState(props.dislike);
    const localData=JSON.parse(localStorage.getItem('ld'))
    const [like, setLike] = useState(0);
    const newdata=[...ld];


    const localData1=JSON.parse(localStorage.getItem('ldd'))
    const [dislike, setdisLike] = useState(props.dislike);
    const newdata1=[...ldd];

   
    const likeLikes = (singularWord, pluralWord, count) => {
        return count > 1 ? pluralWord : singularWord;
    };
 
    const dislikedisLikes = (singularWord, pluralWord, count) => {
        return count > 1 ? pluralWord : singularWord;
    };

    const handleCountLike = () => {
        
        setLike(like+1);
        newdata[props.id-1]=like+1;
        setLd(newdata);
       
    };

    const handleCountdisLike = () => {
        setdisLike(dislike + 1);
        newdata1[props.id-1]=dislike+1;
        setDld(newdata1);
    };

    useEffect(() => {
        // setLike(localData[props.id-1]);
        // setdisLike(props.dislike);
     
        setLike(localData[props.id-1])
        setdisLike(localData1[props.id-1])
        console.log('likeeeeeeeeee',like)
        console.log('likeData',JSON.parse(localStorage.getItem('ld')))
        console.log('likeeeeeeeeee',dislike)
        console.log('Dislike data',JSON.parse(localStorage.getItem('ldd')))
        // const newdata=[...ld];
        // newdata[props.id-1]=like;
        // setLd(newdata);
        // console.log('new ld',ld)
    }, [props.id]);

  return (
    <div>
      {/* <div className='d-flex justify-content-end mt-5 mx-5'> */}
      <div class="card cardClass mt-4">
        <div class="card-body container-fluid col-xl-10 col-lg-11">
          <div className="d-flex flex-row justify-content-between mt-4">
            <button className="btn cbClass">Overview</button>
            <button className="btn cbClass">Ingredients</button>
          </div>
          <div
            className="d-flex rateClass text-start my-4"
            style={{ backgroundColor: props.ratingdivColor }}
          >
            <p>{props.rating}</p>
          </div>
          <div className="d-flex nameClass text-start ">
            <p>{props.cdishName.name1 + props.cdishName.name2}</p>
          </div>
          <div className="nameDClass text-start">
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="d-flex desClass text-start mb-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ante,
              penatibus arcu himenaeos
            </p>
          </div>
          <div className="row d-flex flex-row bClass mt-2">
            <div className="col-6 text-start ldClass">
              <button onClick={handleCountLike}>
                <i class="fa-sharp fa-solid fa-thumbs-up"></i>
                {like} {likeLikes("Like", "Likes", like)}{" "}
              </button>
            </div>
            <div className="col-6 text-start ldClass">
              <button onClick={handleCountdisLike}>
                <i class="fa-solid fa-thumbs-down "></i>
                {dislike} {dislikedisLikes("Dislike", "Dislikes", like)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CardComp;
