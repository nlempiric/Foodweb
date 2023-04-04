import React,{useState} from 'react'
import './CardComp.css'

const CardComp = (props) => {
    const [like,setLike]=useState(0)
    const likeLikes=(singularWord, pluralWord, count)=>
    {
        return count > 1 ? pluralWord : singularWord;
    }
    const dislikedisLikes=(singularWord, pluralWord, count)=>
    {
        return count > 1 ? pluralWord : singularWord;
    }
    const handleCountLike=()=>
    {
        setLike(like+1);
    }
    const [dislike,setdisLike]=useState(0)
    const handleCountdisLike=()=>
    {
        setdisLike(dislike+1);
    }
  return (
    <div>
        {/* <div className='d-flex justify-content-end mt-5 mx-5'> */}
            <div class="card cardClass mt-5" >
                <div class="card-body container-fluid col-xl-10 col-lg-11">
                    <div className='d-flex flex-row justify-content-between mt-4'>
                        <button className='btn cbClass'>Overview</button>
                        <button className='btn cbClass'>Ingredients</button>
                        
                    </div>
                    <div className='d-flex rateClass text-start my-4' style={{backgroundColor:props.ratingdivColor}}>
                       <p>{props.rating}</p>
                    </div>
                    <div className='d-flex nameClass text-start ' >
                        <p>{props.cdishName.name1+props.cdishName.name2}</p>
                    </div>
                    <div className='nameDClass text-start'>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='d-flex desClass text-start mb-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ante, penatibus arcu himenaeos</p>
                    </div>
                    <div className='row d-flex flex-row bClass mt-2'>
                        <div className="col-6 text-start">
                        <button onClick={handleCountLike}><i class="fa-sharp fa-solid fa-thumbs-up" ></i>{like} {likeLikes('Like','Likes',like)} </button>
                        </div>
                        <div className="col-6 text-start">
                        <button onClick={handleCountdisLike}><i class="fa-solid fa-thumbs-down "></i>{dislike} {dislikedisLikes('Dislike','Dislikes',like)}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    // </div>
  )
}

export default CardComp