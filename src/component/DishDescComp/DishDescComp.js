import React from 'react'
import './DishDescComp.css'


const DishDescComp = (props) => {
  return (
    <div className='d-flex flex-column text-start mt-4'>
        {/* <p id='p1' className='mt-3'>#1 Most loved dish</p>
        <p id='p2' className='mt-3'>Chicken</p>
        <p id='p3'>MASALA</p> */}

        {/* <span class="">#1 Most loved dish</span>
        <span class="" >Chicken</span>
        <span class="" >MASALA</span> */}
        <div className='row d1'>
            #1 Most loved dish
        </div>
        <div className='row d2'>
            {props.dishName.name1}
        </div>
        <div className='row d3'>
            {props.dishName.name2}
        </div>
        <div className='d-flex flex-row btnClass text-start'>
          <button><i class="fa-solid fa-play"></i><span>Play Video</span></button>
          <button><i class="fa-solid fa-house"></i><span>Order Food</span></button>
        </div>
    </div>
  )
}

export default DishDescComp