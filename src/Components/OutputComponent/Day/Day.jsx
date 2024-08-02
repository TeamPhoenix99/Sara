import React from 'react'
import { FaStar } from "react-icons/fa";
import chitwan from '../../../assets/images/chitwan.jpg'
import './day.css'


export const Day = () => {
  return (
    <div className='day'>
        <h1>Day1</h1>
        <div className="plan">
            <img src={chitwan} alt="" />
            <div className="paln-desc">
                <p>Visit Chitwan National National Park</p>
                <p>Historical</p>
                 <div className="rating-view">
                    <div className="rate">
                         <FaStar />
                        <p>(4.8)</p>
                    </div>
                    <button>View more</button>
                 </div>
            </div>
        </div>
    </div>
  )
}
