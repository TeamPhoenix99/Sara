import React from 'react'
import { FaStar } from "react-icons/fa";
import patan from '../../assets/images/patan.jfif'
import './Category.css'



export const Category = () => {
  return (
    <div className='category'>
        <div className="places">
            <img src={patan} alt="" />
         <div className="img-desc">
            <div className="place-desc">
                <h1>Patan</h1>
                <p>Historical</p>
                <div className="rating">
                <FaStar  className='star-icon' />
                <p>(4.7)</p>
                </div>
                <button className='view-btn'>view more</button>
            </div>
         </div>
         </div>
         <button className='load-btn'>Load More</button>
    </div>
  )
}
