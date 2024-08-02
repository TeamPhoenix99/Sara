import React from 'react'
import { FaStar } from "react-icons/fa";
import './Category.css'



export const Category = ({id, name, theme, rating,img}) => {
  return (
    <div className='category'>
        <div className="image">
            <img src={img} alt="" />
         </div>
         <div className="place-desc">
              <h1> {name} </h1>
              <p className='theme'>{theme.replace(",", " |")}</p>
              <div className="rating">
              <FaStar  className='star-icon' />
              <p>({rating})</p>
              </div>
              <button className='view-btn'>view more</button>
          </div>
    </div>
  )
}
