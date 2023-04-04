import React from 'react'
import './DishComp.css'

const DishComp = (props) => {
  return (
    <div className='d-flex justify-content-center'>
        <img src={props.dishImage} alt="" height='410px' width='410px'/>
    </div>
  )
}

export default DishComp