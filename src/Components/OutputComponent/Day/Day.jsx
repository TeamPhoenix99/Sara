import React from 'react'
import { FaStar } from "react-icons/fa";
import chitwan from '../../../assets/images/chitwan.jpg'
import './day.css'
import { Map } from '../Map/Map';

export const Day = () => {

  return (
    <div className='day'>
      <div className="day-desc">
        <h1 className='dayNo'>Day1</h1>
        <div className="plan">
          <img src={chitwan} alt="" />
          <div className="plan-desc">
            <h1>Visit Chitwan National National Park</h1>
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
      <div className="map">
        <Map/>
      </div>
    </div>
  )
}
