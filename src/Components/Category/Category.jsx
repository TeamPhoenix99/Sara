import React from 'react'
import { FaStar } from "react-icons/fa";
// import patan from '../../assets/images/patan.jfif'
import './Category.css'



export const Category = ({name,rating,img}) => {
  return (
    <div className='category'>
        <div className="places">
            <img src={img} alt="" />
         <div className="img-desc">
            <div className="place-desc">
                <h1> {name} </h1>
                <p>Historical</p>
                <div className="rating">
                <FaStar  className='star-icon' />
                <p>({rating})</p>
                </div>
                <button className='view-btn'>view more</button>
            </div>
         </div>
         </div>
    </div>
  )
}
