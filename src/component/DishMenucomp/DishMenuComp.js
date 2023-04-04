import React,{useState} from 'react'
import md1 from '../../Images/image 14.png'
import md2 from '../../Images/image 12.png'
import md3 from '../../Images/image 13.png'
import md4 from '../../Images/image 11.png'
import { useNavigate} from "react-router-dom";


import  './DishMenucomp.css'


const DishMenuComp = () => {
    
    // const [isActive, setActive] = useState(false);

   
    const navigate = useNavigate(); 
    const handle1Click=()=>
    {
        navigate('/');
    }
    const handle2Click=()=>
    {
        navigate('/page1');
    }
    const handle3Click=()=>
    {
        navigate('/page2');
    }
    const handle4Click=()=>
    {
        navigate('/page3');
    }
  return (
    <div className='row mt-4 '>
        <div className='col-9 d-flex flex-row justify-content-between'>

        {/* <div className={`card menucardClass '{isActive ? 'active' : ''}`} onClick={() => setActive(!isActive)}  > */}
        <div class='card menucardClass'  onClick={handle1Click} >
        {/* <div className={isActive ? 'active' : ''}   onClick={() => handleDivClick(1)} > */}
            <div className='d-flex flex-row justify-content-around align-items-center' style={{height:'100px'}}>
                <img class="card-img-top " src={md1} alt="Card image cap"/>
            </div>
            
            <div class="card-body">
                <p class="card-title">Chicken <br/>Masala</p>
            </div>
        </div>  
        {/* <div className={isActive ? 'active' : ''} onClick={() => setActive(!isActive)}  > */}
        <div class="card menucardClass" onClick={handle2Click}>
            <div className='d-flex flex-row justify-content-around align-items-center' style={{height:'100px'}}>
                <img class="card-img-top " src={md2} alt="Card image cap"/>
            </div>
            
            <div class="card-body">
                <p class="card-title">Classic<br/> Chicken</p>
            </div>
        </div>
        <div class="card menucardClass" onClick={handle3Click}>
            <div className='d-flex flex-row justify-content-around align-items-center' style={{height:'100px'}}>
                <img class="card-img-top " src={md3} alt="Card image cap"/>
            </div>
            
            <div class="card-body">
                <p class="card-title">Italian <br/> Fish</p>
            </div>
        </div>
        <div class="card menucardClass" onClick={handle4Click}>
            <div className='d-flex flex-row justify-content-around align-items-center' style={{height:'100px'}}>
                <img class="card-img-top " src={md4} alt="Card image cap"/>
            </div>
            
            <div class="card-body">
                <p class="card-title">Royal <br/>Crab</p>
            </div>
        </div> 
        </div>
        <div className="col-2">
            
        </div>

        {/* */}
    </div>
  )
}

export default DishMenuComp