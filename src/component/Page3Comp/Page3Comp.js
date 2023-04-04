import React from 'react'
import NavbarComp from '../NavbarComp/NavbarComp'
import pgi1 from '../../Images/Pg3.png'
import './Page3Comp.css'
import CardComp from '../CardComp/CardComp'
import DishComp from '../DishComponent/DishComp'
import DishDescComp from '../DishDescComp/DishDescComp'
import DishMenuComp from '../DishMenucomp/DishMenuComp'
import di from '../../Images/3.png'


const Page3Comp = () => {
const rating='4.7'
const dish={
    name1:'Italian ',
    name2:'Fish',
    
} 
const ratingdivColor='#70E8E1'
const dishImage=di

  return (
    <>
    <div className='bgImage'>
        <img src={pgi1} alt=""/>
    </div>
        <div className='row mt-5'>
            <NavbarComp/>
        </div>
      
        <div className='row bg'>
            <div className='col-9'>
                <div className='row' style={{marginTop:'-15px'}}>
                    <div className='col-3'>
                        
                    </div>
                    <div className='col-4'>
                        <DishComp dishImage={dishImage}/>
                    </div>
                    <div className='col-5'>
                        {/* <DishDescComp /> */}
                        <DishDescComp dishName={dish} />
                    </div>
                </div>


                <div className='row' >
                    <div className='col-3'>
                        
                    </div>
                    <div className='col-9 mt-5'>
                       <DishMenuComp/>
                    </div>
                    
                </div>

            </div>
            <div className='col-3 mt-5 pt-3'>
                <div className='mx-5'>
                {/* <CardComp /> */}
                <CardComp rating={rating} cdishName={dish} ratingdivColor={ratingdivColor}/>
                </div>
            </div>
        
        </div>
       
    </>
  )
}

export default Page3Comp